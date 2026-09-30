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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
];
const featuredCaseIds = ["grant-narratives", "donor-stewardship", "campaign-planning", "grant-progress", "impact-report", "survey-themes", "board-packets", "budget-variance", "volunteer-onboarding", "accessible-content", "reporting-pipeline", "foundation-diligence"];
