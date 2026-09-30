# JayAI Nonprofit AI Planner

An independent JayAI project that adapts [ClaudeForGov](https://github.com/Jaybc25/ClaudeForGov) for nonprofit teams. The reference snapshot is commit `a2e5398978c4afd6f2431df5ba536512b5951dd8` (September 30, 2026). The government repository is unchanged.

## Experience

- A no-login homepage connects use case discovery, Claude routes, cost, and mission value. JayAI branding and an independence notice are visible on every page.
- The Use Case Explorer offers 36 illustrative workflows and 12 featured pilots. Visitors filter by eight mission areas, seven organization forms, eleven functions, and four routes. An optional annual expense band provides implementation guidance; it never hides workflows or asserts readiness or product eligibility.
- Each selected use case explains two potential benefits, with an expandable practical example and required inputs. Examples are editorial planning hypotheses, not customer deployments or assumed savings. The search includes this deeper content. Existing pilot measures, safeguards, and the Pilot Value handoff remain available.
- Models & Cost preserves the four-model direct API calculator and model-limit checks. Standard USD token prices and model limits were rechecked on September 30, 2026. No nonprofit discount is applied to API rates.
- A separate nonprofit Team seat estimator uses published rates of $8/user/month, or $3 for eligible low- or middle-income country organizations, with a two-seat minimum. Counts above 150 direct the visitor to an approved quote. Enterprise is quote-only because official sources differ. Confirm billing terms, taxes, capability access, usage limits, and separate vendor costs.
- The Pilot Value Planner carries a workflow and its pilot questions forward, estimates hours returned to mission, and preserves baseline/assisted effort, review time, one realization factor, costs, three-year net capacity value, capacity ROI, payback, and negative outcomes. A slower assisted workflow retains its full time penalty.
- API handoffs populate direct token cost; seat handoffs replace the Other recurring cost field, with an instruction to add other costs there and avoid double counting. Import parameters are removed after use. Browser-local scenarios and evidence notes are keyed by use case, independently from the government site.
- Volunteer time is mission capacity. Users may set hourly value to zero for an hours-only case. Dollar proxies are neither payroll savings nor proven mission outcomes.

[Catalog and filter map](USE_CASE_CATALOG.md) documents all records, facets, featured selection, evidence limits, and sources.

## Sources and interpretation

Program context, Team prices and eligibility were checked against [Anthropic’s nonprofit page](https://claude.com/solutions/nonprofits) and [Claude Academy guidance](https://academy.claude.com/tutorials/getting-started-with-claude-for-nonprofits) on September 30, 2026. Catalog browsing does not confer program eligibility. Higher education and healthcare systems are excluded in the Academy guidance; specific schools and qualifying healthcare organizations have distinct criteria.

Mission areas are informed by [NCCS’s NTEE taxonomy](https://nccs.urban.org/nccs/resources/ntee/) but are practical browsing categories, not a literal code crosswalk. Organization form is separate from mission. Expense bands are editorial planning conveniences. Staff capacity and technical support must be evaluated directly.

Sector themes are informed by Anthropic’s published nonprofit material. All workflow descriptions, route suggestions, pilot designs and measures are JayAI hypotheses; none is presented as verified adoption or a measured customer outcome. No vendor-survey statistics, grant win rates or donation uplifts are used as calculator assumptions. Grant workflows instruct visitors to verify the funder’s current AI and disclosure rules, informed by [Candid’s 2024 research](https://candid.org/blogs/funders-insights-on-ai-generated-grant-application-proposals/).

Model rates: [Claude pricing](https://platform.claude.com/docs/en/about-claude/pricing). Model limits: [model overview](https://platform.claude.com/docs/en/models/overview). Check before budget use. No automatic pricing refresh is implemented.

## Local development and hosting

Static HTML, CSS and browser JavaScript; no build step or server application. Run `python -m http.server 8000` in this directory. For Vercel, use Framework Preset **Other**, no build command, and the repository root as output directory. `index.html` is the homepage; other pages use explicit `.html` URLs.

`node --test tests/catalog.test.cjs` checks catalog integrity, filtering coverage, local resources, model arithmetic and mission-value cases. Additional DOM and rendered checks are summarized in [VALIDATION.md](VALIDATION.md).

## Independence and privacy

This is a personal JayAI project, not Anthropic’s official Claude for Nonprofits program and not affiliated with or endorsed by Anthropic. It does not execute AI workflows, connect to donor or client systems, or determine eligibility. Examples and assumptions are invented; replace them with observed pilot data. Product access, data handling, funder requirements and deployment rules need case-specific review.

Calculator entries and notes stay in the current browser. API and seat handoffs disclose estimates through URL parameters. Typography requests Google Fonts, as in the reference site. No authentication, database, analytics, or API credentials are included.
