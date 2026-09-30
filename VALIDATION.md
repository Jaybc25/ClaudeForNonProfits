# Validation — September 30, 2026

Reference: ClaudeForGov at `a2e5398978c4afd6f2431df5ba536512b5951dd8`.

## Automated checks

- Five Node regression checks pass: catalog integrity, facet coverage, local resources and independence notices, capacity-value arithmetic including negative and zero-dollar cases, and API arithmetic and model limits.
- DOM execution checks pass on all four pages: home route switching; featured/all views; mission and form filtering; optional size guidance without hiding workflows; empty search; case deep links; Team rates and seat validation; API and seat handoffs; incompatible-model guard; local scenario persistence; evidence notes during invalid numeric edits; refresh; alternate API implementation label.
- Standard direct API token rates and per-request limits were rechecked against official documentation on September 30, 2026. Team rates and minimum seats were checked against the official nonprofit page. Enterprise remains quote-only because official pages differ.

## Interpretation

Workflow fit and route suggestions are editorial hypotheses. There is no independently validated nonprofit ROI, production AI integration, eligibility determination or shared persistence. Pilot-value inputs are invented until users replace them with observed evidence. No claim is made about grant win rates or donation uplift.

## Rendered review

Rendered review passed for all four pages at 320, 390, 768 and 1440 pixels (16 page/viewport combinations). No horizontal overflow or uncaught page errors were found. Mission/form filtering, case-to-pilot navigation, seat/API handoffs and saved-note refresh passed at each width. Mobile screenshots of all four pages were visually inspected. The Vercel preview homepage, catalog and cost page were also inspected in the cloud browser.

These are Chromium checks; Safari and real-device testing have not been performed. No live AI integration is present to exercise.

## Use-case benefits and examples — September 30, 2026

All 36 records now include two potential benefits, an illustrative nonprofit workflow, and required inputs. The selected detail panel exposes benefits directly and uses a native expandable section for examples and inputs. Search includes this content. These are editorial hypotheses and invented examples; no measured savings or customer deployments are claimed.

Validation: catalog integrity and existing calculator regression checks passed; JavaScript syntax and diff checks passed. Local Chromium tested all 36 expanded detail views. At 320, 390, 768 and 1440 pixels, keyboard expansion, selected-case deep links, rich-content search and Pilot Value handoff passed with no horizontal overflow or page errors. Expanded mobile and desktop screenshots were reviewed. Safari and physical devices were not tested.

The presentation now matches the revised government Explorer: a highlighted Potential value box, a collapsed See an example in practice disclosure, and the same card action wording. Nonprofit-specific content and required inputs remain intact.
