const scenarios = {
  policy: {
    index: '01 / 04', title: 'Claude Chat',
    purpose: 'For staff who need a thinking partner to research, summarize, and draft while they retain responsibility for the final answer.',
    pilot: 'Draft one grant section from approved program facts and measure revision time and factual accuracy.',
    check: 'Confirm access controls, permitted data, source review, and human approval for consequential responses.'
  },
  casework: {
    index: '02 / 04', title: 'Claude tasks (Cowork capability)',
    purpose: 'For teams preparing repeatable deliverables from files and instructions, with a person reviewing every result.',
    pilot: 'Prepare one historical grant progress report and measure evidence completeness and staff review time.',
    check: 'Confirm file permissions, connected tools, sensitive data handling, and a clear approval step.'
  },
  software: {
    index: '03 / 04', title: 'Claude Code',
    purpose: 'For developers working in a codebase to understand systems, implement changes, and verify them.',
    pilot: 'Start with an internal maintenance task and compare delivery time and defect rates.',
    check: 'Confirm repository access, secure development practices, testing, and code review ownership.'
  },
  participant: {
    index: '04 / 04', title: 'Claude API',
    purpose: 'For an organization-owned application that uses Claude within a designed service experience.',
    pilot: 'Prototype a narrow participant question flow and measure accuracy, escalation, and cost per completed interaction.',
    check: 'Validate data boundaries, accessibility, human escalation, reliability, and the applicable procurement path.'
  }
};

const routeForScenario = { policy: 'Chat', casework: 'Cowork', software: 'Code', participant: 'API' };
const scenarioList = document.querySelector('.scenario-list');
const recommendation = document.querySelector('.recommendation');
const exploreLayout = document.querySelector('.explore-layout');
const mobileLayout = window.matchMedia('(max-width: 680px)');
let activeScenario = 'policy';

function placeRecommendation() {
  if (mobileLayout.matches) {
    scenarioList.querySelector(`[data-scenario="${activeScenario}"]`).after(recommendation);
  } else {
    exploreLayout.append(recommendation);
  }
}

const fields = {
  index: document.getElementById('result-index'),
  title: document.getElementById('route-title'),
  purpose: document.getElementById('route-purpose'),
  pilot: document.getElementById('pilot-text'),
  check: document.getElementById('check-text')
};

document.querySelectorAll('[data-scenario]').forEach((button) => {
  button.addEventListener('click', () => {
    const choice = scenarios[button.dataset.scenario];
    if (!choice) return;
    activeScenario = button.dataset.scenario;
    document.querySelectorAll('[data-scenario]').forEach((item) => {
      const selected = item === button;
      item.classList.toggle('is-active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    for (const [key, node] of Object.entries(fields)) node.textContent = choice[key];
    document.getElementById('route-next').href = 'use-cases.html?route=' + routeForScenario[activeScenario];
    placeRecommendation();
    if (mobileLayout.matches) recommendation.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

mobileLayout.addEventListener('change', placeRecommendation);
placeRecommendation();
