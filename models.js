"use strict";

// Standard direct Claude API base token prices in USD per million tokens.
// Source checked 2026-09-30: https://platform.claude.com/docs/en/about-claude/pricing
// Specs: https://platform.claude.com/docs/en/models/overview
const MODELS = [
  { id: "haiku", name: "Claude Haiku 4.5", tier: "Fastest", input: 1, output: 5, context: "200K", maxOutput: "64K", fit: "Try first for high-volume, bounded tasks where speed matters. Validate accuracy and escalation on real cases." },
  { id: "sonnet", name: "Claude Sonnet 5.5", tier: "Fast", input: 2, output: 10, context: "1M", maxOutput: "128K", fit: "A practical starting candidate for mixed drafting, analysis, and application workflows. Test the actual workload." },
  { id: "opus", name: "Claude Opus 5.5", tier: "Moderate latency", input: 4, output: 20, context: "1M", maxOutput: "128K", fit: "Evaluate for more demanding coding or multi-step work when added capability may justify the cost." },
  { id: "fable", name: "Claude Fable 5.1", tier: "Slower", input: 10, output: 50, context: "1M", maxOutput: "128K", fit: "Evaluate for demanding reasoning and long-horizon work, with quality and review effort measured against alternatives." }
];

const $ = (selector) => document.querySelector(selector);
const dollars = (value) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: value < 0.01 && value > 0 ? 4 : 2 }).format(value);
const tokens = (value) => new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(value / 1000000) + "M";
let selected = "sonnet";
const defaults = { input: 2500, output: 600, requests: 5000 };
const caseId = new URLSearchParams(location.search).get("case");
const storageKey = "claudefornonprofits-api-v1:" + (caseId && /^[a-z0-9-]{1,80}$/.test(caseId) ? caseId : "general");
for (const id of ["input-tokens", "output-tokens", "requests-month"]) {
  const field = $("#" + id);
  const message = document.createElement("span");
  message.id = id + "-error";
  message.className = "field-error";
  field.setAttribute("aria-describedby", message.id);
  field.after(message);
}

try {
  const saved = JSON.parse(localStorage.getItem(storageKey) || "null");
  if (MODELS.some((item) => item.id === saved?.model)) selected = saved.model;
  for (const [id, value] of [["input-tokens", saved?.input], ["output-tokens", saved?.output], ["requests-month", saved?.requests]]) {
    if (Number.isSafeInteger(value)) {
      $("#" + id).value = String(value);
      if (!$("#" + id).validity.valid) $("#" + id).value = String(id === "input-tokens" ? defaults.input : id === "output-tokens" ? defaults.output : defaults.requests);
    }
  }
} catch { /* The estimate still works if browser storage is unavailable. */ }

function readWorkload() {
  const inputs = [$("#input-tokens"), $("#output-tokens"), $("#requests-month")];
  if (inputs.some((input) => !input.validity.valid || input.value.trim() === "" || !Number.isSafeInteger(Number(input.value)))) return null;
  const [input, output, requests] = inputs.map((field) => Number(field.value));
  if (input + output === 0 && requests > 0) return null;
  return { input, output, requests };
}

function cost(model, workload) {
  const monthlyInput = workload.input * workload.requests;
  const monthlyOutput = workload.output * workload.requests;
  const inputCharge = monthlyInput / 1000000 * model.input;
  const outputCharge = monthlyOutput / 1000000 * model.output;
  return { monthlyInput, monthlyOutput, inputCharge, outputCharge, total: inputCharge + outputCharge };
}

function modelLimit(model, workload) {
  const context = model.context === "200K" ? 200000 : 1000000;
  const output = model.maxOutput === "64K" ? 64000 : 128000;
  const limits = [];
  if (workload.input + workload.output > context) limits.push(`${model.context} context window`);
  if (workload.output > output) limits.push(`${model.maxOutput} maximum output`);
  return limits.length ? `Exceeds ${limits.join(" and ")} per request` : "";
}

function validateFields() {
  for (const id of ["input-tokens", "output-tokens", "requests-month"]) {
    const field = $("#" + id);
    const invalid = !field.validity.valid || field.value.trim() === "" || !Number.isSafeInteger(Number(field.value));
    field.setAttribute("aria-invalid", String(invalid));
    const message = $("#" + id + "-error");
    const label = field.previousElementSibling?.textContent?.split("·")[0]?.trim() || id;
    message.textContent = invalid ? `${label}: enter a whole number from 0 to ${Number(field.max).toLocaleString()}.` : "";
  }
}

function renderModels() {
  $("#model-grid").innerHTML = MODELS.map((model) => `<button type="button" class="model-card${model.id === selected ? " is-selected" : ""}" data-model="${model.id}" aria-pressed="${model.id === selected}" aria-label="Select ${model.name} for the cost estimate"><span class="model-card-top"><span>${model.tier}</span><span aria-hidden="true">↗</span></span><strong>${model.name}</strong><span class="model-fit">${model.fit}</span><span class="model-specs"><span>Context <b>${model.context}</b></span><span>Max output <b>${model.maxOutput}</b></span></span><span class="model-prices"><span><small>Input / MTok</small><b>$${model.input}</b></span><span><small>Output / MTok</small><b>$${model.output}</b></span></span><span class="model-select">${model.id === selected ? "Selected for estimate" : "Use in estimate"}</span></button>`).join("");
  $("#model-grid").querySelectorAll("button").forEach((button) => button.addEventListener("click", () => {
    selected = button.dataset.model;
    renderModels();
    renderEstimate();
    $("#model-grid [data-model='" + selected + "']").focus({ preventScroll: true });
  }));
}

function renderEstimate() {
  const workload = readWorkload();
  const error = $("#form-error");
  const model = MODELS.find((item) => item.id === selected);
  $("#selected-model").textContent = model.name;
  validateFields();
  error.hidden = Boolean(workload);
  error.textContent = workload ? "" : "Enter whole numbers within the shown ranges and at least one token per request when requests are greater than zero.";
  if (!workload) {
    ["#monthly-total", "#input-month", "#input-charge", "#output-month", "#output-charge", "#annual-total"].forEach((id) => $(id).textContent = "—");
    $("#comparison-body").replaceChildren();
    $("#pilot-next").removeAttribute("href");
    $("#pilot-next").setAttribute("aria-disabled", "true");
    $("#model-limit-note").hidden = true;
    updateMobileSummary();
    return;
  }
  const limit = modelLimit(model, workload);
  $("#model-limit-note").hidden = !limit;
  $("#model-limit-note").textContent = limit ? `${model.name}: ${limit}. Choose a compatible model or reduce the per-request workload.` : "";
  const result = cost(model, workload);
  $("#monthly-total").textContent = limit ? "—" : dollars(result.total);
  $("#input-month").textContent = tokens(result.monthlyInput);
  $("#input-charge").textContent = limit ? "—" : dollars(result.inputCharge);
  $("#output-month").textContent = tokens(result.monthlyOutput);
  $("#output-charge").textContent = limit ? "—" : dollars(result.outputCharge);
  $("#annual-total").textContent = limit ? "—" : dollars(result.total * 12);
  const next = new URL("pilot-value.html", location.href);
  if (caseId && /^[a-z0-9-]{1,80}$/.test(caseId)) next.searchParams.set("case", caseId);
  next.searchParams.set("apiMonthly", result.total.toFixed(2));
  next.searchParams.set("model", model.name);
  if (limit) { $("#pilot-next").removeAttribute("href"); $("#pilot-next").setAttribute("aria-disabled", "true"); }
  else { $("#pilot-next").href = next; $("#pilot-next").removeAttribute("aria-disabled"); }
  $("#comparison-body").innerHTML = MODELS.map((item) => `<tr${item.id === selected ? ' class="is-selected"' : ""}><th scope="row">${item.name}${item.id === selected ? " <span class=\"row-selected\">Selected</span>" : ""}</th><td>$${item.input}</td><td>$${item.output}</td><td>${modelLimit(item, workload) || dollars(cost(item, workload).total)}</td></tr>`).join("");
  try { localStorage.setItem(storageKey, JSON.stringify({ model: selected, input: workload.input, output: workload.output, requests: workload.requests })); } catch { /* Local storage is optional. */ }
  updateMobileSummary();
}

function updateMobileSummary() {
  $("#model-summary-name").textContent = MODELS.find((item) => item.id === selected).name + " · illustrative API estimate";
  const cost = $("#monthly-total").textContent;
  $("#model-summary-cost").textContent = cost === "—" ? $("#model-limit-note").hidden ? "Check inputs" : "Exceeds model limit" : cost + " / month";
  $("#model-live-summary").href = cost === "—" ? "#calculator" : "#estimate-results";
}

function updateMobileSummaryVisibility() {
  const models = document.querySelector(".model-section").getBoundingClientRect();
  const result = $("#estimate-results").getBoundingClientRect();
  $("#model-live-summary").hidden = !window.matchMedia("(max-width: 680px)").matches || models.top >= innerHeight || result.top <= innerHeight * .75;
}

window.addEventListener("scroll", updateMobileSummaryVisibility, { passive: true });
window.addEventListener("resize", updateMobileSummaryVisibility);

$("#estimate-form").addEventListener("input", renderEstimate);
$("#estimate-form").addEventListener("submit", (event) => event.preventDefault());
$("#reset-estimate").addEventListener("click", () => {
  selected = "sonnet";
  $("#input-tokens").value = defaults.input;
  $("#output-tokens").value = defaults.output;
  $("#requests-month").value = defaults.requests;
  renderModels();
  renderEstimate();
});
renderModels();
renderEstimate();
updateMobileSummaryVisibility();
