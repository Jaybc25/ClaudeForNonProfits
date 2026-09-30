const grid = document.getElementById('case-grid');
const detail = document.getElementById('case-detail');
const catalogLayout = grid.parentElement;
const narrowLayout = window.matchMedia('(max-width: 950px)');
const search = document.getElementById('case-search');
const org = document.getElementById('org-filter');
const form = document.getElementById('form-filter');
const sizeGuide = document.getElementById('size-guide');
const sizeNote = document.getElementById('size-note');
const department = document.getElementById('department-filter');
const route = document.getElementById('route-filter');
const filterToggle = document.getElementById('filter-toggle');
const catalogControls = document.getElementById('catalog-controls');
const mobileFilters = window.matchMedia('(max-width: 640px)');
let filtersOpen = false;
const count = document.getElementById('result-count');
const featuredButton = document.getElementById('view-featured');
const allButton = document.getElementById('view-all');
const featuredSet = new Set(featuredCaseIds);
const initialParams = new URLSearchParams(location.search);
let selected = initialParams.get('case');
let view = initialParams.get('view') === 'all' || (selected && useCases.some(item => item.id === selected && !featuredSet.has(item.id))) ? 'all' : 'featured';

function element(tag, className, value) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (value) node.textContent = value;
  return node;
}

function addOptions(select, options) {
  for (const [value, label] of Object.entries(options)) {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = label;
    select.append(option);
  }
}
addOptions(org, organizations);
addOptions(form, organizationForms);
if (Object.hasOwn(organizationForms, initialParams.get("form"))) form.value = initialParams.get("form");
if (["small","medium","large"].includes(initialParams.get("size"))) sizeGuide.value = initialParams.get("size");
addOptions(department, departments);
if (Object.hasOwn(organizations, initialParams.get('org'))) org.value = initialParams.get('org');
if (Object.hasOwn(departments, initialParams.get('department'))) department.value = initialParams.get('department');
if (['Chat', 'Cowork', 'Code', 'API'].includes(initialParams.get('route'))) route.value = initialParams.get('route');

function syncUrl(item) {
  const url = new URL(location.href);
  for (const [key, value] of [['org', org.value], ['form', form.value], ['department', department.value], ['route', route.value]]) {
    if (value === 'all') url.searchParams.delete(key);
    else url.searchParams.set(key, value);
  }
  if (sizeGuide.value !== 'unknown') url.searchParams.set('size', sizeGuide.value);
  else url.searchParams.delete('size');
  if (view === 'all') url.searchParams.set('view', 'all');
  else url.searchParams.delete('view');
  if (item) url.searchParams.set('case', item.id);
  else url.searchParams.delete('case');
  history.replaceState(null, '', url);
}

function setDetail(item) {
  selected = item.id;
  syncUrl(item);
  detail.replaceChildren();
  detail.append(element('p', 'detail-kicker', departments[item.department] + ' / ' + (item.orgs.length === Object.keys(organizations).length ? 'All mission areas' : item.orgs.map(key => organizations[key]).join(' · '))));
  detail.append(element('h2', '', item.title));
  detail.append(element('p', '', item.summary));
  const benefits = element('div', 'detail-section detail-benefits');
  benefits.append(element('h3', '', 'Potential benefits'));
  const benefitList = element('ul', '');
  for (const benefit of item.benefits) benefitList.append(element('li', '', benefit));
  benefits.append(benefitList);
  benefits.append(element('p', 'benefit-note', 'Benefits to test in a pilot; no time savings, funding uplift, or service improvement is assumed.'));
  detail.append(benefits);
  const example = element('details', 'detail-example');
  example.append(element('summary', '', 'See a practical example & required inputs'));
  for (const [title, value] of [['What this could look like in practice', item.inPractice], ['What your team would need', item.inputs]]) {
    const section = element('div', 'detail-section');
    section.append(element('h3', '', title), element('p', '', value));
    example.append(section);
  }
  example.append(element('p', 'example-note', 'Illustrative JayAI example, not a documented customer deployment.'));
  detail.append(example);
  const box = element('div', 'detail-route');
  box.append(element('span', '', 'Suggested starting route'));
  box.append(element('strong', '', (item.route === 'Cowork' ? 'Claude tasks (Cowork)' : 'Claude ' + item.route)));
  detail.append(box);
  const formSection = element('div', 'detail-section');
  formSection.append(element('h3', '', 'Possible organization forms'), element('p', '', item.forms.length === Object.keys(organizationForms).length ? 'Cross-form workflow; confirm the organization’s role, permissions, and approval owner.' : item.forms.map(key => organizationForms[key]).join(' · ')));
  detail.append(formSection);
  for (const [title, value] of [['Pilot to test', item.pilot], ['Measure', item.measure], ['Validate before deployment', item.validate]]) {
    const section = element('div', 'detail-section');
    section.append(element('h3', '', title));
    section.append(element('p', '', value));
    detail.append(section);
  }
  detail.append(element('p', 'detail-disclaimer', 'This route is a planning hypothesis. Confirm product access, commercial terms, data handling, and organization policy before use.'));
  const pilotLink = element('a', 'detail-pilot-link', 'Build a pilot value case ↗');
  pilotLink.href = 'pilot-value.html?case=' + encodeURIComponent(item.id);
  detail.append(pilotLink);
  const backButton = element('button', 'detail-back', 'Back to use cases ↑');
  backButton.type = 'button';
  backButton.addEventListener('click', () => {
    const card = [...grid.querySelectorAll('button[data-id]')].find(button => button.dataset.id === selected);
    if (card) { card.scrollIntoView({ behavior: 'smooth', block: 'start' }); card.focus({ preventScroll: true }); }
  });
  detail.append(backButton);
  grid.querySelectorAll('button[data-id]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.id === selected)));
  placeDetail();
}

function placeDetail() {
  const selectedCard = [...grid.querySelectorAll('button[data-id]')].find(button => button.dataset.id === selected);
  if (narrowLayout.matches && selectedCard) selectedCard.after(detail);
  else catalogLayout.append(detail);
}

function syncFilters() {
  const active = Number(Boolean(search.value.trim())) + Number(org.value !== 'all') + Number(form.value !== 'all') + Number(department.value !== 'all') + Number(route.value !== 'all');
  filterToggle.firstChild.textContent = 'Filters' + (active ? ` (${active} active) ` : ' ');
  filterToggle.hidden = !mobileFilters.matches;
  filterToggle.setAttribute('aria-expanded', String(!mobileFilters.matches || filtersOpen));
  catalogControls.classList.toggle('filters-collapsed', mobileFilters.matches && !filtersOpen);
}

function render() {
  syncFilters();
  const q = search.value.trim().toLowerCase();
  const allMatches = useCases.filter(item =>
    (org.value === 'all' || item.orgs.includes(org.value)) &&
    (form.value === 'all' || item.forms.includes(form.value)) &&
    (department.value === 'all' || item.department === department.value) &&
    (route.value === 'all' || item.route === route.value) &&
    (!q || [item.title, item.summary, ...item.benefits, item.inPractice, item.inputs, departments[item.department], item.route, ...item.orgs.map(key => organizations[key])].join(' ').toLowerCase().includes(q))
  );
  const matches = view === 'featured' ? allMatches.filter(item => featuredSet.has(item.id)) : allMatches;
  if (view === 'featured') matches.sort((a, b) => featuredCaseIds.indexOf(a.id) - featuredCaseIds.indexOf(b.id));
  featuredButton.setAttribute('aria-pressed', String(view === 'featured'));
  allButton.setAttribute('aria-pressed', String(view === 'all'));
  count.textContent = matches.length + (view === 'featured' ? ' featured' : '') + ' use case' + (matches.length === 1 ? '' : 's');
  grid.replaceChildren();
  if (!matches.length) {
    const empty = element('div', 'empty-state');
    empty.append(element('strong', '', 'No matches yet'));
    empty.append(element('span', '', 'Try another combination or clear the filters.'));
    if (view === 'featured' && allMatches.length) {
      const showAll = element('button', 'empty-show-all', 'Search all use cases');
      showAll.type = 'button';
      showAll.addEventListener('click', () => { view = 'all'; render(); });
      empty.append(showAll);
    }
    grid.append(empty);
    detail.replaceChildren(element('p', 'detail-kicker', 'No matching use case'), element('h2', '', 'Try another search'));
    placeDetail();
    syncUrl(null);
    return;
  }
  for (const item of matches) {
    const card = element('button', 'case-card');
    card.type = 'button';
    card.dataset.id = item.id;
    card.setAttribute('aria-pressed', String(item.id === selected));
    const top = element('div', 'case-card-top');
    top.append(element('span', '', departments[item.department]));
    top.append(element('span', '', (item.route === 'Cowork' ? 'Claude tasks (Cowork)' : 'Claude ' + item.route)));
    card.append(top);
    card.append(element('span', 'case-card-title', item.title));
    card.append(element('span', 'case-card-summary', item.summary));
    card.append(element('span', 'case-card-bottom', 'View benefits, example & pilot ↗'));
    card.addEventListener('click', () => {
      setDetail(item);
      if (narrowLayout.matches) detail.scrollIntoView({behavior:'smooth', block:'start'});
    });
    grid.append(card);
  }
  setDetail(matches.find(item => item.id === selected) || matches[0]);
}

search.addEventListener('input', render);
featuredButton.addEventListener('click', () => { view = 'featured'; render(); });
allButton.addEventListener('click', () => { view = 'all'; render(); });
org.addEventListener('change', render);
department.addEventListener('change', render);
form.addEventListener('change', render);
const sizeNotes = {unknown:'Scale helps plan support and oversight. It does not filter out workflows or determine eligibility.',small:'Start with one staff-led Chat or document pilot. Account for limited staff and volunteer capacity; Code and API need a named technical owner or support partner.',medium:'Start with one repeatable team workflow, a named reviewer, and a measured baseline. Budget for data preparation, adoption, and support before integration.',large:'Coordinate access, evaluation, and rollout across teams. Code and API pilots still need technical ownership, monitoring, and a clear operating budget.'};
function updateSizeGuide(){ sizeNote.textContent = sizeNotes[sizeGuide.value] || sizeNotes.unknown; }
sizeGuide.addEventListener('change', () => { updateSizeGuide(); syncUrl(useCases.find(item => item.id === selected)); });
updateSizeGuide();
route.addEventListener('change', render);
narrowLayout.addEventListener('change', placeDetail);
mobileFilters.addEventListener('change', syncFilters);
filterToggle.addEventListener('click', () => { filtersOpen = !filtersOpen; syncFilters(); });
document.getElementById('clear-filters').addEventListener('click', () => {
  search.value = '';
  org.value = 'all';
  form.value = 'all';
  sizeGuide.value = 'unknown';
  updateSizeGuide();
  department.value = 'all';
  route.value = 'all';
  render();
  search.focus();
});
render();
