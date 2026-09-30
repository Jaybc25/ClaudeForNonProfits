// Illustrative JayAI pilot ideas. Mission and form tags describe possible workflow fit, not product eligibility.
const organizations = {
  "human": "Human services",
  "education": "Education & research",
  "health": "Health & mental health",
  "arts": "Arts, culture & humanities",
  "environment": "Environment & animals",
  "international": "International development & relief",
  "societal": "Public & societal benefit",
  "religion": "Religion & faith-based service"
};
const organizationForms = {
  "service": "Direct-service charity",
  "grantmaker": "Foundation & grantmaker",
  "advocacy": "Advocacy & social welfare",
  "membership": "Membership & trade association",
  "faith": "Faith-based congregation",
  "sponsored": "Fiscally sponsored project",
  "intermediary": "Coalition & intermediary"
};
const departments = {
  "fundraising": "Fundraising & donor stewardship",
  "grants": "Grants & grantmaking",
  "programs": "Program delivery & participant support",
  "impact": "Impact measurement & research",
  "volunteers": "Volunteers & community engagement",
  "communications": "Communications & outreach",
  "finance": "Finance & operations",
  "governance": "Leadership, board & compliance",
  "people": "Staff learning & development",
  "digital": "IT & digital services",
  "advocacy": "Advocacy & policy"
};
const useCases = [
  {
    "id": "grant-narratives",
    "title": "Draft grant proposals",
    "route": "Chat",
    "orgs": [
      "human",
      "education",
      "health",
      "arts",
      "environment",
      "international",
      "societal",
      "religion"
    ],
    "department": "grants",
    "summary": "Turn approved program facts into a draft aligned with a funder’s stated requirements.",
    "pilot": "Draft one section of a historical proposal and compare total drafting and review effort.",
    "measure": "Drafting time; factual corrections; requirement coverage.",
    "validate": "Check the funder’s current AI rules and disclosure requirements; verify evidence, budgets, and authorized submission.",
    "forms": [
      "service",
      "grantmaker",
      "advocacy",
      "membership",
      "faith",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Less time assembling a first draft from scattered program facts.",
      "Clearer coverage of a funder’s questions before staff review."
    ],
    "inPractice": "A youth-service nonprofit gives Claude an approved program brief and a funder’s question list. Claude drafts a needs statement, links claims to supplied evidence, and flags missing facts. The grants lead verifies every claim and approves the final submission.",
    "inputs": "Approved program facts, verified outcome evidence, the application rubric, and the funder’s current AI and disclosure rules."
  },
  {
    "id": "funder-research",
    "title": "Research potential funders",
    "route": "Chat",
    "orgs": [
      "human",
      "education",
      "health",
      "arts",
      "environment",
      "international",
      "societal",
      "religion"
    ],
    "department": "fundraising",
    "summary": "Summarize public funder criteria and document possible mission fit for development staff.",
    "pilot": "Research ten known prospects against their current published criteria.",
    "measure": "Research time; source accuracy; staff-confirmed fit.",
    "validate": "Current eligibility and deadlines, data licensing, and no promise of an award.",
    "forms": [
      "service",
      "grantmaker",
      "advocacy",
      "membership",
      "faith",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Less manual reading of public funder guidance.",
      "A more consistent shortlist with visible sources and reasons for fit."
    ],
    "inPractice": "An environmental charity compares ten public funder pages against its restoration program. Claude assembles a criteria table and flags unclear eligibility. Development staff check the original pages and choose which relationships to pursue.",
    "inputs": "Current public funder pages, mission and geography criteria, and a staff owner to verify deadlines and eligibility."
  },
  {
    "id": "donor-stewardship",
    "title": "Draft donor stewardship messages",
    "route": "Chat",
    "orgs": [
      "human",
      "education",
      "health",
      "arts",
      "environment",
      "international",
      "societal",
      "religion"
    ],
    "department": "fundraising",
    "summary": "Prepare personal thank-you and progress drafts from approved giving and program facts.",
    "pilot": "Draft twenty messages using synthetic donor records and review every message.",
    "measure": "Staff time; factual accuracy; edits before sending.",
    "validate": "Donor consent, confidentiality, gift restrictions, and staff approval before contact.",
    "forms": [
      "service",
      "grantmaker",
      "advocacy",
      "membership",
      "faith",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Less time preparing routine thank-you drafts.",
      "More consistent use of approved program updates and donor preferences."
    ],
    "inPractice": "A food pantry drafts thank-you messages from approved giving facts and a current service update. Claude proposes wording for staff to review. The development team checks names, preferences, amounts, and tone before sending.",
    "inputs": "Approved giving and program facts, communication preferences, a style guide, and permission to use the selected data."
  },
  {
    "id": "campaign-planning",
    "title": "Plan a fundraising campaign",
    "route": "Chat",
    "orgs": [
      "human",
      "education",
      "health",
      "arts",
      "environment",
      "international",
      "societal",
      "religion"
    ],
    "department": "fundraising",
    "summary": "Develop a campaign outline with approved audiences, messages, and staff responsibilities.",
    "pilot": "Plan one small campaign using a completed campaign as the comparison.",
    "measure": "Planning time; message quality; assumptions corrected.",
    "validate": "Consent-based audiences, realistic forecasts, brand review, and no guaranteed donation uplift.",
    "forms": [
      "service",
      "grantmaker",
      "advocacy",
      "membership",
      "faith",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Faster preparation of campaign outlines and content calendars.",
      "Earlier visibility into audience, staffing, and evidence gaps."
    ],
    "inPractice": "An arts nonprofit plans an appeal around a completed education program. Claude drafts a campaign calendar and alternative messages using verified program facts. Staff review the workload, claims, and audience fit before approving any outreach.",
    "inputs": "Campaign goals, approved stories and facts, audience guidance, available staff capacity, and a reviewed budget."
  },
  {
    "id": "grant-progress",
    "title": "Prepare grant progress reports",
    "route": "Cowork",
    "orgs": [
      "human",
      "education",
      "health",
      "arts",
      "environment",
      "international",
      "societal",
      "religion"
    ],
    "department": "grants",
    "summary": "Bring validated results and award requirements into a traceable draft report.",
    "pilot": "Rebuild one completed progress report with a fixed award checklist.",
    "measure": "Preparation time; evidence coverage; finance corrections.",
    "validate": "Funder AI and disclosure rules, award terms, restricted funds, verified outcomes, and accountable sign-off.",
    "forms": [
      "service",
      "grantmaker",
      "advocacy",
      "membership",
      "faith",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Less manual assembly of recurring funder reports.",
      "Clearer links between award requirements and documented progress."
    ],
    "inPractice": "A housing nonprofit combines approved aggregate service counts, expenditure summaries, and an award checklist into a report draft. Claude flags missing evidence. Program and finance staff reconcile the figures and approve the report.",
    "inputs": "Award terms, funder AI rules, approved aggregate program data, finance summaries, and named program and finance reviewers."
  },
  {
    "id": "impact-report",
    "title": "Draft an annual impact report",
    "route": "Cowork",
    "orgs": [
      "human",
      "education",
      "health",
      "arts",
      "environment",
      "international",
      "societal",
      "religion"
    ],
    "department": "impact",
    "summary": "Combine approved program figures and narratives into a draft with traceable sources.",
    "pilot": "Draft one historical report section and reconcile each claim to approved evidence.",
    "measure": "Writing time; numerical accuracy; unsupported claims.",
    "validate": "No invented impact, attribution limits, participant consent, and leadership approval.",
    "forms": [
      "service",
      "grantmaker",
      "advocacy",
      "membership",
      "faith",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Less time turning approved evidence into readable report sections.",
      "More consistent traceability between impact claims and supporting records."
    ],
    "inPractice": "A community foundation drafts a report section from approved grant totals and evaluation summaries. Claude organizes the narrative and marks claims needing support. Staff verify calculations, consent for stories, and what the data can actually demonstrate.",
    "inputs": "Approved outcome evidence, reconciled totals, authorized stories, and an editorial owner who can distinguish outputs from outcomes."
  },
  {
    "id": "survey-themes",
    "title": "Design surveys and synthesize feedback",
    "route": "Chat",
    "orgs": [
      "human",
      "education",
      "health",
      "arts",
      "environment",
      "international",
      "societal",
      "religion"
    ],
    "department": "impact",
    "summary": "Draft reviewed evaluation questions and find themes in de-identified responses without hiding minority perspectives.",
    "pilot": "Draft five survey questions and compare themes from a historical response set with independent human coding.",
    "measure": "Theme recall; source traceability; analyst time.",
    "validate": "Consent, de-identification, sampling bias, and no unsupported causal inference.",
    "forms": [
      "service",
      "grantmaker",
      "advocacy",
      "membership",
      "faith",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Faster development of an initial question set and theme summary.",
      "More staff capacity to investigate disagreement and underrepresented feedback."
    ],
    "inPractice": "A community service team asks Claude to draft feedback questions, then summarize a de-identified historical response set. An evaluator compares the themes with independent human coding and checks whether minority views were missed.",
    "inputs": "A clear evaluation question, appropriately de-identified responses, participant consent where required, and an independent evaluation reviewer."
  },
  {
    "id": "logic-model",
    "title": "Develop a program logic model",
    "route": "Chat",
    "orgs": [
      "human",
      "education",
      "health",
      "arts",
      "environment",
      "international",
      "societal",
      "religion"
    ],
    "department": "programs",
    "summary": "Help program teams articulate activities, outputs, outcomes, and assumptions.",
    "pilot": "Draft one program logic model and review it with staff and participant representatives.",
    "measure": "Preparation time; unclear assumptions; reviewer agreement.",
    "validate": "Evidence for causal assumptions, community input, and measurable definitions.",
    "forms": [
      "service",
      "grantmaker",
      "advocacy",
      "membership",
      "faith",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Faster organization of activities, outputs, and intended outcomes.",
      "A clearer starting point for discussing assumptions with staff and participants."
    ],
    "inPractice": "A workforce nonprofit maps a workshop’s resources, activities, and intended outcomes. Claude proposes a logic model and questions about causal assumptions. Staff and participant representatives revise it together before using it for planning.",
    "inputs": "Program goals, activities and resources, existing evidence, and staff and participant input to challenge assumptions."
  },
  {
    "id": "board-packets",
    "title": "Assemble board meeting packets",
    "route": "Cowork",
    "orgs": [
      "human",
      "education",
      "health",
      "arts",
      "environment",
      "international",
      "societal",
      "religion"
    ],
    "department": "governance",
    "summary": "Bring approved agendas, finance summaries, and program updates into a reviewable packet.",
    "pilot": "Recreate one completed meeting packet using a fixed attachment checklist.",
    "measure": "Assembly time; missing items; source-version errors.",
    "validate": "Board access, conflicts, sensitive personnel material, and secretary approval.",
    "forms": [
      "service",
      "grantmaker",
      "advocacy",
      "membership",
      "faith",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Less time assembling recurring board materials.",
      "Earlier detection of missing attachments and inconsistent document versions."
    ],
    "inPractice": "A small charity provides a meeting agenda, approved reports, and an attachment checklist. Claude organizes a draft packet and lists missing items. The board secretary checks completeness, permissions, and versions before distribution.",
    "inputs": "Approved agenda and reports, a packet checklist, document access rules, and an authorized board secretary or staff reviewer."
  },
  {
    "id": "policy-guidance",
    "title": "Find internal policy guidance",
    "route": "Chat",
    "orgs": [
      "human",
      "education",
      "health",
      "arts",
      "environment",
      "international",
      "societal",
      "religion"
    ],
    "department": "governance",
    "summary": "Help staff find relevant approved policies and explain them with source references.",
    "pilot": "Test thirty routine policy questions against a reviewer-approved answer set.",
    "measure": "Time to verified answer; citation accuracy; correction rate.",
    "validate": "Document currency, access controls, human interpretation, and no unapproved advice.",
    "forms": [
      "service",
      "grantmaker",
      "advocacy",
      "membership",
      "faith",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Less staff time locating routine policy passages.",
      "More traceable answers through references to approved documents."
    ],
    "inPractice": "A nonprofit staff member asks where to find the expense reimbursement rules. Claude retrieves relevant passages from approved policies and cites the source. Questions with missing or conflicting guidance go to the policy owner.",
    "inputs": "Current approved policies, version ownership, access controls, and an escalation path for unresolved questions."
  },
  {
    "id": "budget-variance",
    "title": "Explain budget variances",
    "route": "Chat",
    "orgs": [
      "human",
      "education",
      "health",
      "arts",
      "environment",
      "international",
      "societal",
      "religion"
    ],
    "department": "finance",
    "summary": "Draft explanations of reconciled budget-to-actual changes for finance review.",
    "pilot": "Explain one historical period against an accountant-approved variance analysis.",
    "measure": "Preparation time; numerical accuracy; unsupported explanations.",
    "validate": "Fund restrictions, reconciled figures, calculation provenance, and finance sign-off.",
    "forms": [
      "service",
      "grantmaker",
      "advocacy",
      "membership",
      "faith",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Less time preparing a first narrative of budget differences.",
      "A consistent checklist of variances needing accountant investigation."
    ],
    "inPractice": "A finance team supplies reconciled budget and actual figures for a closed period. Claude drafts a variance narrative and identifies questions about unusual movements. An accountant verifies arithmetic and determines causes from supporting records.",
    "inputs": "Reconciled budget and actuals, account definitions, supporting records, and an accountant responsible for review."
  },
  {
    "id": "audit-evidence",
    "title": "Organize audit evidence",
    "route": "Cowork",
    "orgs": [
      "human",
      "education",
      "health",
      "arts",
      "environment",
      "international",
      "societal",
      "religion"
    ],
    "department": "finance",
    "summary": "Prepare a document index and missing-item checklist from authorized finance files.",
    "pilot": "Recreate one completed audit request list without issuing an assurance opinion.",
    "measure": "Assembly time; missing evidence; reviewer rework.",
    "validate": "Access, retention, source-of-truth accounting records, and accountant review.",
    "forms": [
      "service",
      "grantmaker",
      "advocacy",
      "membership",
      "faith",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Less administrative effort organizing evidence requests.",
      "Earlier identification of missing or mismatched support."
    ],
    "inPractice": "A nonprofit finance team organizes a completed audit request list and approved supporting documents. Claude creates an evidence index and flags gaps. Finance staff verify the attachments; the auditor retains responsibility for audit conclusions.",
    "inputs": "An auditor request list, authorized supporting documents, secure access, and a finance reviewer to confirm completeness."
  },
  {
    "id": "volunteer-onboarding",
    "title": "Prepare volunteer onboarding",
    "route": "Cowork",
    "orgs": [
      "human",
      "arts",
      "environment",
      "international",
      "religion",
      "societal",
      "health",
      "education"
    ],
    "department": "volunteers",
    "summary": "Assemble role-specific instructions and safety guidance from approved materials.",
    "pilot": "Build one volunteer role packet and test comprehension with a small group.",
    "measure": "Preparation time; comprehension; omitted safety steps.",
    "validate": "Safeguarding, accessibility, current procedures, and coordinator approval.",
    "forms": [
      "service",
      "grantmaker",
      "advocacy",
      "membership",
      "faith",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Less time drafting role-specific onboarding materials.",
      "More consistent communication of role boundaries and required safety steps."
    ],
    "inPractice": "A food distribution team turns approved role descriptions and procedures into an onboarding packet. Claude drafts a checklist and routine questions. The volunteer coordinator verifies safeguarding and safety requirements, then tests comprehension with volunteers.",
    "inputs": "Approved role descriptions, safety and safeguarding procedures, accessibility needs, and a volunteer coordinator who owns approval."
  },
  {
    "id": "staff-training",
    "title": "Create staff training guides",
    "route": "Chat",
    "orgs": [
      "human",
      "education",
      "health",
      "arts",
      "environment",
      "international",
      "societal",
      "religion"
    ],
    "department": "people",
    "summary": "Draft role-specific learning material from approved operating procedures.",
    "pilot": "Produce one guide and test understanding with staff before publishing.",
    "measure": "Authoring time; learner comprehension; policy corrections.",
    "validate": "Policy currency, accessibility, role requirements, and training-owner review.",
    "forms": [
      "service",
      "grantmaker",
      "advocacy",
      "membership",
      "faith",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Less effort converting approved policies into learning materials.",
      "More consistent explanations and practice questions across staff groups."
    ],
    "inPractice": "A nonprofit operations lead turns a reviewed purchasing policy into a short guide and quiz. Claude drafts examples from permitted scenarios. Staff test the guide, and the policy owner checks that examples match the actual rules.",
    "inputs": "Current policies, learning objectives, permitted examples, and a subject-matter owner to review and test the guide."
  },
  {
    "id": "accessible-content",
    "title": "Make service instructions clearer",
    "route": "Chat",
    "orgs": [
      "human",
      "education",
      "health",
      "arts",
      "environment",
      "international",
      "societal",
      "religion"
    ],
    "department": "communications",
    "summary": "Rewrite approved public instructions for clarity without changing program rules.",
    "pilot": "Revise five pages and test comprehension with representative users.",
    "measure": "Task completion; clarity; factual corrections.",
    "validate": "Authoritative text, accessibility, language needs, and content-owner approval.",
    "forms": [
      "service",
      "grantmaker",
      "advocacy",
      "membership",
      "faith",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Less time preparing plain-language alternatives.",
      "A better starting point for improving participant comprehension."
    ],
    "inPractice": "A service nonprofit revises appointment instructions into shorter sentences and a clear checklist. Claude suggests wording while preserving requirements. Representative users test the draft, and staff check that no eligibility or safety information was lost.",
    "inputs": "Approved original instructions, reading and accessibility goals, representative user feedback, and a service owner to verify meaning."
  },
  {
    "id": "translation-drafts",
    "title": "Draft multilingual outreach",
    "route": "Chat",
    "orgs": [
      "human",
      "health",
      "education",
      "international",
      "societal",
      "religion"
    ],
    "department": "communications",
    "summary": "Prepare translations of approved outreach for qualified language review.",
    "pilot": "Translate a small set of routine messages and compare with bilingual reviewers.",
    "measure": "Reviewer time; meaning accuracy; comprehension.",
    "validate": "Qualified review, cultural context, privacy, and no unreviewed crisis or medical instructions.",
    "forms": [
      "service",
      "grantmaker",
      "advocacy",
      "membership",
      "faith",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Faster preparation of multilingual first drafts.",
      "More bilingual reviewer capacity for meaning, local usage, and sensitive wording."
    ],
    "inPractice": "A community nonprofit drafts routine event messages in two languages. Claude prepares translations from approved text. Bilingual reviewers check meaning, dates, names, and local usage before publication; consequential instructions receive qualified review.",
    "inputs": "Approved source text, target languages and audience context, a terminology guide, and qualified bilingual reviewers."
  },
  {
    "id": "internal-tool",
    "title": "Improve an internal application",
    "route": "Code",
    "orgs": [
      "human",
      "education",
      "health",
      "arts",
      "environment",
      "international",
      "societal",
      "religion"
    ],
    "department": "digital",
    "summary": "Help developers understand a codebase and deliver a reviewed maintenance change.",
    "pilot": "Complete one isolated task in a test environment with a clear rollback.",
    "measure": "Delivery time; test results; defects after review.",
    "validate": "Repository access, dependency policy, secure coding, and developer-controlled deployment.",
    "forms": [
      "service",
      "grantmaker",
      "advocacy",
      "membership",
      "faith",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Less developer time navigating unfamiliar code and preparing small changes.",
      "More capacity to document and test routine maintenance."
    ],
    "inPractice": "A nonprofit developer asks Claude Code to explain an internal application and propose a small reporting fix. The developer reviews the diff, runs tests in a separate environment, and deploys only after the change meets normal approval requirements.",
    "inputs": "Authorized code access, a test environment, a technical owner, regression tests, and a rollback plan."
  },
  {
    "id": "accessible-forms",
    "title": "Improve digital forms",
    "route": "Code",
    "orgs": [
      "human",
      "education",
      "health",
      "arts",
      "environment",
      "international",
      "societal",
      "religion"
    ],
    "department": "digital",
    "summary": "Help developers resolve accessibility and usability barriers in a nonprofit form.",
    "pilot": "Fix one audited form and test with assistive technology and representative users.",
    "measure": "Completion rate; verified barriers resolved; regression defects.",
    "validate": "Privacy, accessibility requirements, identity flows, and human usability testing.",
    "forms": [
      "service",
      "grantmaker",
      "advocacy",
      "membership",
      "faith",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Faster preparation of fixes for documented form barriers.",
      "Potentially easier task completion after user and assistive-technology testing."
    ],
    "inPractice": "A museum developer supplies a verified accessibility audit for a registration form. Claude Code proposes label and keyboard-navigation fixes. The developer tests with assistive technology and users before approving the update.",
    "inputs": "A verified accessibility audit, source code, representative test users, assistive-technology testing, and a developer responsible for release."
  },
  {
    "id": "crm-integration",
    "title": "Maintain CRM integrations",
    "route": "Code",
    "orgs": [
      "human",
      "education",
      "health",
      "arts",
      "environment",
      "international",
      "societal",
      "religion"
    ],
    "department": "digital",
    "summary": "Support developers connecting authorized fundraising or program systems.",
    "pilot": "Build one read-only test integration using synthetic records.",
    "measure": "Development time; field accuracy; synchronization errors.",
    "validate": "Least privilege, secrets, data contracts, vendor terms, and rollback.",
    "forms": [
      "service",
      "grantmaker",
      "advocacy",
      "membership",
      "faith",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Less effort drafting integration code and field mappings.",
      "More capacity to test data consistency before connecting operational systems."
    ],
    "inPractice": "A charity developer builds a read-only test connection between a CRM and a reporting tool using synthetic donor records. Claude Code helps draft mappings and tests. The developer verifies permissions, field accuracy, and failure handling.",
    "inputs": "API documentation, approved field mappings, synthetic test records, least-privilege access, and an integration owner."
  },
  {
    "id": "reporting-pipeline",
    "title": "Build program reporting dashboards",
    "route": "Code",
    "orgs": [
      "human",
      "education",
      "health",
      "arts",
      "environment",
      "international",
      "societal",
      "religion"
    ],
    "department": "digital",
    "summary": "Help developers test data transformations and build traceable dashboards from validated program data.",
    "pilot": "Refactor one bounded pipeline using historical inputs and verified outputs.",
    "measure": "Data quality; maintenance time; reproducibility.",
    "validate": "Data lineage, denominator definitions, access controls, and owner review.",
    "forms": [
      "service",
      "grantmaker",
      "advocacy",
      "membership",
      "faith",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Less manual effort maintaining repeatable reporting transformations.",
      "More reproducible program reports with explicit data checks."
    ],
    "inPractice": "A program analyst and developer refactor a historical reporting pipeline with Claude Code. They compare outputs against verified totals, document transformations, and test missing-data behavior before adopting the pipeline.",
    "inputs": "Defined metrics, historical test data, verified reference outputs, data-quality rules, and a technical maintenance owner."
  },
  {
    "id": "participant-faq",
    "title": "Prototype a participant FAQ assistant",
    "route": "API",
    "orgs": [
      "human",
      "health",
      "education",
      "arts",
      "international",
      "societal",
      "religion"
    ],
    "department": "programs",
    "summary": "Answer routine questions from approved program information and offer human support.",
    "pilot": "Test a narrow FAQ with synthetic questions before any public pilot.",
    "measure": "Answer accuracy; completed tasks; escalation; cost per interaction.",
    "validate": "Current information, accessibility, clear limitations, and no clinical or eligibility decisions.",
    "forms": [
      "service",
      "grantmaker",
      "advocacy",
      "membership",
      "faith",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Potentially quicker access to routine, verified service information.",
      "More staff capacity for complex questions through appropriate escalation."
    ],
    "inPractice": "A charity prototypes a FAQ limited to locations, opening hours, and appointment steps. An API-based assistant answers from approved content and directs unresolved questions to staff. The team tests misleading questions and escalation before a public pilot.",
    "inputs": "A narrow approved knowledge base, a technical operator, access and privacy controls, monitoring, and staffed escalation."
  },
  {
    "id": "intake-summary",
    "title": "Prepare caseworker intake summaries",
    "route": "Cowork",
    "orgs": [
      "human",
      "societal",
      "international",
      "health"
    ],
    "department": "programs",
    "summary": "Organize authorized intake notes into a draft for a caseworker’s review.",
    "pilot": "Compare de-identified completed intakes with approved summaries.",
    "measure": "Preparation time; omissions; corrections.",
    "validate": "Consent, sensitive records, retention, and human ownership of service decisions.",
    "forms": [
      "service",
      "grantmaker",
      "advocacy",
      "membership",
      "faith",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Less caseworker effort organizing intake information.",
      "More review time for missing facts and participant-specific needs."
    ],
    "inPractice": "A service team tests summaries of de-identified completed intakes. Claude groups stated needs and unanswered questions without inferring eligibility. Caseworkers compare each draft with the original and remain responsible for case decisions.",
    "inputs": "Permitted de-identified records for the pilot, a summary template, confidential data controls, and trained caseworker review."
  },
  {
    "id": "housing-reports",
    "title": "Summarize housing inspection records",
    "route": "Cowork",
    "orgs": [
      "human"
    ],
    "department": "programs",
    "summary": "Organize approved inspection findings for staff follow-up without deciding safety.",
    "pilot": "Compare ten historical inspection packets with signed findings.",
    "measure": "Preparation time; finding recall; unsupported conclusions.",
    "validate": "Location privacy, evidence integrity, qualified inspector review, and no automated safety decision. Disclose AI assistance where required by policy and the service context.",
    "forms": [
      "service",
      "grantmaker",
      "advocacy",
      "membership",
      "faith",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Less effort assembling findings from inspection packets.",
      "More visible references to documented issues needing follow-up."
    ],
    "inPractice": "A housing charity summarizes historical inspection notes and signed findings into a follow-up draft. Claude links each item to a record. A qualified reviewer confirms the findings; the draft does not decide tenancy or legal compliance.",
    "inputs": "Authorized inspection records, signed findings, a reporting template, and a qualified housing reviewer."
  },
  {
    "id": "food-distribution",
    "title": "Prepare food distribution updates",
    "route": "Cowork",
    "orgs": [
      "human",
      "religion"
    ],
    "department": "programs",
    "summary": "Summarize reconciled distribution logs into staff-reviewed operational updates.",
    "pilot": "Recreate one week’s report from validated aggregate records.",
    "measure": "Reporting time; count accuracy; missing records.",
    "validate": "Inventory reconciliation, household privacy, food safety ownership, and no automated allocation.",
    "forms": [
      "service",
      "grantmaker",
      "advocacy",
      "membership",
      "faith",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Less time preparing routine distribution summaries.",
      "Earlier visibility into missing counts and reporting inconsistencies."
    ],
    "inPractice": "A food bank uses validated aggregate weekly counts to draft a distribution update. Claude organizes location totals and flags missing entries. Operations staff reconcile the counts before using the report for planning or funder communication.",
    "inputs": "Validated aggregate counts, metric definitions, reporting dates, and an operations reviewer to reconcile figures."
  },
  {
    "id": "health-education",
    "title": "Draft health education materials",
    "route": "Chat",
    "orgs": [
      "health",
      "human"
    ],
    "department": "communications",
    "summary": "Turn clinician-approved education sources into clearer drafts for professional review.",
    "pilot": "Revise five nonurgent education pages against an approved clinical source set.",
    "measure": "Reviewer time; source fidelity; comprehension.",
    "validate": "Qualified clinical review, language access, privacy, and no diagnosis or treatment advice. Disclose AI assistance where required by policy and the service context.",
    "forms": [
      "service",
      "grantmaker",
      "advocacy",
      "membership",
      "faith",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Less effort drafting patient-friendly versions of approved information.",
      "More clinical reviewer capacity to check accuracy and comprehension."
    ],
    "inPractice": "A health nonprofit revises approved nonurgent education material into clearer language. Claude drafts alternatives grounded in supplied sources. A qualified clinician checks source fidelity and safety, and users test comprehension before publication.",
    "inputs": "Current approved clinical sources, a defined audience, a qualified clinical reviewer, and user comprehension checks."
  },
  {
    "id": "teacher-materials",
    "title": "Draft educator learning materials",
    "route": "Chat",
    "orgs": [
      "education",
      "human"
    ],
    "department": "programs",
    "summary": "Help educators draft lessons and activity guides from approved curriculum.",
    "pilot": "Draft one lesson and compare preparation time and learner feedback with an educator baseline.",
    "measure": "Preparation time; factual corrections; learner comprehension.",
    "validate": "Age appropriateness, educator approval, accessibility, and student privacy.",
    "forms": [
      "service",
      "grantmaker",
      "advocacy",
      "membership",
      "faith",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Less educator effort preparing initial lesson materials.",
      "More capacity to adapt activities to learning goals and learner needs."
    ],
    "inPractice": "An education nonprofit drafts a reading activity from approved materials and lesson objectives. Claude proposes questions and alternative explanations. The educator checks factual accuracy, age appropriateness, and accessibility before classroom use.",
    "inputs": "Approved teaching materials, learning objectives, age and accessibility requirements, and educator review."
  },
  {
    "id": "research-synthesis",
    "title": "Summarize research literature",
    "route": "Chat",
    "orgs": [
      "education",
      "health",
      "environment",
      "societal",
      "international"
    ],
    "department": "impact",
    "summary": "Prepare source-linked summaries and identify questions for qualified researchers.",
    "pilot": "Review a fixed set of public papers against an independent researcher summary.",
    "measure": "Review time; citation accuracy; missed limitations.",
    "validate": "Study quality, copyright permissions, expert review, and no invented citations or results.",
    "forms": [
      "service",
      "grantmaker",
      "advocacy",
      "membership",
      "faith",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Faster organization of a bounded literature set.",
      "More researcher time to evaluate evidence quality and conflicting findings."
    ],
    "inPractice": "A research nonprofit supplies public papers for a defined question. Claude drafts an evidence table with citations and limitations. A researcher checks every entry against the original papers and investigates disagreements or missing context.",
    "inputs": "A fixed source set, a research question, an evidence appraisal rubric, and a researcher to verify citations and limitations."
  },
  {
    "id": "youth-activities",
    "title": "Plan youth program activities",
    "route": "Chat",
    "orgs": [
      "human",
      "education",
      "religion",
      "arts"
    ],
    "department": "programs",
    "summary": "Draft age-appropriate activity plans for trained staff to assess.",
    "pilot": "Prepare one supervised session and review it with a program leader.",
    "measure": "Planning time; accessibility; staff corrections.",
    "validate": "Safeguarding, inclusion, qualified supervision, and no automated assessment of children.",
    "forms": [
      "service",
      "grantmaker",
      "advocacy",
      "membership",
      "faith",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Less planning effort preparing supervised activities.",
      "More staff capacity to adapt sessions for access, safety, and participation."
    ],
    "inPractice": "A youth charity drafts a supervised art session from approved goals and available materials. Claude suggests a timetable and adaptations. Program staff check safeguarding, supervision, and accessibility before running the session.",
    "inputs": "Age-appropriate goals, supervision and safeguarding rules, available resources, and a trained youth-program reviewer."
  },
  {
    "id": "workforce-materials",
    "title": "Draft job-readiness workshop materials",
    "route": "Chat",
    "orgs": [
      "human",
      "education"
    ],
    "department": "programs",
    "summary": "Prepare reviewed interview practice and career workshop content.",
    "pilot": "Draft one workshop and test with a facilitator and participant group.",
    "measure": "Preparation time; usefulness; facilitator corrections.",
    "validate": "Accessible formats, current sources, and no automated hiring or participant ranking. Disclose AI assistance where required by policy and the service context.",
    "forms": [
      "service",
      "grantmaker",
      "advocacy",
      "membership",
      "faith",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Less facilitator effort drafting workshop handouts.",
      "More capacity to tailor explanations to participant feedback."
    ],
    "inPractice": "A workforce charity prepares a job-readiness workshop from approved guidance. Claude drafts exercises and a facilitator guide. Staff and participants test usefulness and accuracy before delivery; the material does not select or rank job applicants.",
    "inputs": "Approved guidance, workshop goals, participant access needs, and facilitator and participant feedback."
  },
  {
    "id": "exhibition-content",
    "title": "Draft museum and exhibition content",
    "route": "Chat",
    "orgs": [
      "arts",
      "education"
    ],
    "department": "communications",
    "summary": "Turn curator-approved research into draft labels and accessible visitor guides.",
    "pilot": "Draft five labels and compare with curator and visitor feedback.",
    "measure": "Authoring time; factual corrections; visitor comprehension.",
    "validate": "Provenance, cultural sensitivity, rights, and curator approval.",
    "forms": [
      "service",
      "grantmaker",
      "advocacy",
      "membership",
      "faith",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Less time drafting initial labels and visitor explanations.",
      "More curator capacity to check accuracy, context, and readability."
    ],
    "inPractice": "A museum supplies approved collection notes for five objects. Claude drafts short labels and an accessible tour summary. Curators verify provenance and interpretation, and visitors test comprehension before publication.",
    "inputs": "Approved collection records, rights and provenance guidance, audience requirements, and curator review."
  },
  {
    "id": "conservation-reports",
    "title": "Summarize conservation field reports",
    "route": "Cowork",
    "orgs": [
      "environment",
      "education",
      "international"
    ],
    "department": "impact",
    "summary": "Organize approved field observations into a source-linked draft report.",
    "pilot": "Compare one historical survey with an expert-reviewed report.",
    "measure": "Reporting time; observation fidelity; missing limitations.",
    "validate": "Sensitive species locations, scientific review, and no invented observations.",
    "forms": [
      "service",
      "grantmaker",
      "advocacy",
      "membership",
      "faith",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Less effort assembling field observations into report drafts.",
      "More expert time to evaluate uncertainty and ecological interpretation."
    ],
    "inPractice": "A conservation charity provides historical field observations and approved methods. Claude drafts a report with references to the records. An ecologist checks observation fidelity, missing limitations, and protection of sensitive species locations.",
    "inputs": "Authorized field data, approved methods, sensitive-location handling rules, and an ecology reviewer."
  },
  {
    "id": "legal-intake",
    "title": "Draft legal-aid intake briefs",
    "route": "Cowork",
    "orgs": [
      "societal",
      "human",
      "international"
    ],
    "department": "programs",
    "summary": "Organize authorized issue descriptions for a qualified legal professional’s review.",
    "pilot": "Use de-identified closed matters and compare with approved intake briefs.",
    "measure": "Preparation time; missing facts; reviewer corrections.",
    "validate": "Privilege, consent, attorney supervision, and no legal advice or case acceptance decisions. Disclose AI assistance where required by policy and the service context.",
    "forms": [
      "service",
      "grantmaker",
      "advocacy",
      "membership",
      "faith",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Less administrative effort organizing stated facts for a legal reviewer.",
      "Clearer visibility into unanswered intake questions."
    ],
    "inPractice": "A legal-aid team tests draft briefs from de-identified closed matters. Claude organizes supplied facts and open questions without recommending a legal outcome. An authorized legal professional compares the brief with the record and approves its use.",
    "inputs": "Permitted de-identified pilot records, confidentiality controls, an intake template, and qualified legal review."
  },
  {
    "id": "policy-analysis",
    "title": "Prepare advocacy policy briefs",
    "route": "Chat",
    "orgs": [
      "societal",
      "environment",
      "health",
      "education",
      "human"
    ],
    "department": "advocacy",
    "summary": "Compare public policy text and research for a reviewed issue briefing.",
    "pilot": "Summarize one previously reviewed proposal using a fixed source set.",
    "measure": "Research time; provision recall; citation accuracy.",
    "validate": "Current law and sources, counsel review, nonpartisan scope, and applicable lobbying rules.",
    "forms": [
      "advocacy",
      "membership",
      "service",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Less staff time organizing provisions from a fixed policy source set.",
      "More traceable briefing drafts for human policy review."
    ],
    "inPractice": "An advocacy nonprofit summarizes a reviewed policy proposal and supporting public sources. Claude drafts a provision table and identifies uncertainties. A policy lead verifies citations, the organization’s permitted activities, and every public claim.",
    "inputs": "Current primary policy sources, a defined research question, organizational advocacy rules, and policy review."
  },
  {
    "id": "faith-service",
    "title": "Prepare community service materials",
    "route": "Chat",
    "orgs": [
      "religion",
      "human"
    ],
    "department": "communications",
    "summary": "Draft outreach and volunteer guidance for approved service programs.",
    "pilot": "Prepare one event’s materials and review with program and community leaders.",
    "measure": "Drafting time; accurate logistics; community comprehension.",
    "validate": "Respectful language, contact consent, safeguarding, and no inference of religious beliefs.",
    "forms": [
      "faith",
      "service",
      "sponsored",
      "intermediary"
    ],
    "benefits": [
      "Less effort drafting routine service-event materials.",
      "More consistent communication of logistics and community access needs."
    ],
    "inPractice": "A congregation organizes a community meal using approved logistics and volunteer roles. Claude drafts invitations and task lists. Program and community leaders review accuracy, tone, accessibility, and safety before distributing materials.",
    "inputs": "Approved logistics, role and safety guidance, community language and access needs, and program-leader review."
  },
  {
    "id": "foundation-diligence",
    "title": "Assemble grant due diligence packets",
    "route": "Cowork",
    "orgs": [
      "human",
      "education",
      "health",
      "arts",
      "environment",
      "international",
      "societal",
      "religion"
    ],
    "department": "grants",
    "summary": "Organize applicant documents and identify unanswered questions for a program officer.",
    "pilot": "Recreate five closed grant packets against a staff-approved checklist.",
    "measure": "Review time; missing-item recall; factual corrections.",
    "validate": "Applicant privacy, conflicts, current evidence, and no automated funding decision.",
    "forms": [
      "grantmaker",
      "intermediary"
    ],
    "benefits": [
      "Less effort assembling a consistent due-diligence packet.",
      "Earlier detection of missing facts and documents for grant officers."
    ],
    "inPractice": "A foundation recreates packets for five closed grants from authorized application records and a fixed checklist. Claude indexes evidence and flags gaps. Grant officers verify the facts and retain responsibility for funding decisions.",
    "inputs": "Authorized application records, a diligence checklist, confidentiality rules, and a grant officer responsible for decisions."
  },
  {
    "id": "member-knowledge",
    "title": "Prototype a member knowledge assistant",
    "route": "API",
    "orgs": [
      "human",
      "education",
      "health",
      "arts",
      "environment",
      "international",
      "societal",
      "religion"
    ],
    "department": "programs",
    "summary": "Answer routine member questions from approved association resources.",
    "pilot": "Replay a fixed question set and compare with staff-verified answers.",
    "measure": "Answer accuracy; escalation; staff effort; token cost.",
    "validate": "Member-only access, licensing, source updates, and a clear human support path.",
    "forms": [
      "membership",
      "intermediary"
    ],
    "benefits": [
      "Potentially faster answers to routine member questions.",
      "More staff capacity for exceptions through cited answers and escalation."
    ],
    "inPractice": "A membership nonprofit prototypes an API assistant over approved member guidance. The team replays historical routine questions and checks citations, access rules, and escalation. Staff handle unresolved or consequential questions.",
    "inputs": "An approved knowledge base, member access rules, a technical owner, monitoring, and staffed escalation."
  }
];
const featuredCaseIds = ["grant-narratives", "donor-stewardship", "campaign-planning", "grant-progress", "impact-report", "survey-themes", "board-packets", "budget-variance", "volunteer-onboarding", "accessible-content", "reporting-pipeline", "foundation-diligence"];
