const baseRoles = [
  { title: "Process Owner", name: "Assigned lead", detail: "Accountable for process definition and updates" },
  { title: "Work Product Owner", name: "Feature or system lead", detail: "Owns stage deliverables and closure evidence" },
  { title: "Quality Reviewer", name: "Quality representative", detail: "Checks compliance, review evidence, and release readiness" }
];

const specialtyRoles = {
  "Functional Safety Management": [
    { title: "Safety Manager", name: "Assigned safety lead", detail: "Owns safety lifecycle planning and confirmation measures" },
    { title: "Safety Engineer", name: "Analysis owner", detail: "Maintains safety goals, concepts, and safety case evidence" },
    { title: "Independent Assessor", name: "Assessment reviewer", detail: "Performs confirmation review and assessment closure" }
  ],
  "Cyber Security Management": [
    { title: "Cybersecurity Manager", name: "Assigned security lead", detail: "Owns cybersecurity planning and case compilation" },
    { title: "Security Engineer", name: "Threat analysis owner", detail: "Maintains goals, requirements, and risk treatment evidence" },
    { title: "Assessment Reviewer", name: "Independent reviewer", detail: "Checks assessment evidence and unresolved risk" }
  ]
};

const defaultActivities = [
  "Confirm inputs, scope, and applicable process tailoring.",
  "Produce or update the required work products.",
  "Review work products with the responsible work group.",
  "Close actions, link evidence, and baseline the outputs."
];

const defaultInputs = [
  "Project scope and plan",
  "Customer requirements",
  "Applicable standards and methods",
  "Previous stage outputs"
];

const defaultOutputs = [
  "Reviewed work products",
  "Decision and action log",
  "Traceability updates",
  "Release or baseline evidence"
];

function makeProcess(id, title, group, options = {}) {
  return {
    id,
    title,
    group,
    summary: options.summary || `${title} defines the responsibilities, activities, inputs, outputs, and evidence needed to complete this process stage.`,
    workGroup: options.workGroup || ["Process owner", "Project lead", "Engineering lead", "Quality representative"],
    roles: options.roles || specialtyRoles[title] || baseRoles,
    activities: options.activities || defaultActivities,
    inputs: options.inputs || defaultInputs,
    outputs: options.outputs || defaultOutputs,
    icon: options.icon || "mark-layers"
  };
}

const processes = [
  makeProcess("project-management", "Project Management", "Management", {
    icon: "mark-layers",
    summary: "Plans the project lifecycle, milestones, responsibility model, and status governance for every stage."
  }),
  makeProcess("risk-management", "Risk Management", "Management", {
    icon: "mark-risk",
    summary: "Identifies, evaluates, treats, and tracks risks that can affect delivery, quality, safety, or compliance."
  }),
  makeProcess("analysis", "Analysis", "Management", {
    icon: "mark-search",
    summary: "Turns stakeholder needs, constraints, and operating context into clear engineering inputs and reviewable decisions."
  }),
  makeProcess("requirements-elicitation", "Requirements Elicitation", "System Engineering", {
    summary: "Captures stakeholder needs and converts them into agreed system-level requirements for downstream engineering.",
    workGroup: ["Customer interface", "System architect", "Requirements engineer", "Project lead"],
    activities: [
      "Collect stakeholder needs and operational scenarios.",
      "Clarify assumptions, constraints, and acceptance expectations.",
      "Resolve conflicts and capture open questions.",
      "Baseline elicited needs for system requirements analysis."
    ],
    inputs: ["Stakeholder needs", "Customer documents", "Operational scenarios", "Regulatory constraints"],
    outputs: ["Elicitation notes", "Clarified requirements", "Open issue log", "Baseline input set"]
  }),
  makeProcess("system-requirements-analysis", "System Requirements Analysis", "System Engineering", {
    summary: "Analyzes system requirements for completeness, consistency, feasibility, verifiability, and traceability."
  }),
  makeProcess("system-architectural-design", "System Architectural Design", "System Engineering", {
    summary: "Defines the system structure, interfaces, allocation decisions, and architecture evidence that connect requirements to implementation.",
    workGroup: ["System architect", "Software architect", "Hardware architect", "Verification lead", "Quality representative"]
  }),
  makeProcess("system-integration-and-integration-test", "System Integration and Integration Test", "System Engineering", {
    summary: "Combines system elements, executes integration tests, and records evidence against the integration strategy."
  }),
  makeProcess("system-qualification-test", "System Qualification Test", "System Engineering", {
    summary: "Validates the integrated system against agreed requirements and qualification criteria."
  }),
  makeProcess("software-requirements-analysis", "Software Requirements Analysis", "Software Engineering", {
    summary: "Refines allocated requirements into software requirements that are testable, traceable, and ready for design."
  }),
  makeProcess("software-architectural-design", "Software Architectural Design", "Software Engineering", {
    summary: "Creates software architecture, component boundaries, interface decisions, and design constraints."
  }),
  makeProcess("software-detailed-design-and-unit-construction", "Software Detailed Design And Unit Construction", "Software Engineering", {
    summary: "Turns software architecture into detailed units, implementation-ready designs, and construction evidence."
  }),
  makeProcess("software-unit-verification", "Software Unit Verification", "Software Engineering", {
    summary: "Verifies software units against detailed design using reviews, static checks, and unit-level test evidence."
  }),
  makeProcess("software-integration-and-integration-test", "Software Integration And Integration Test", "Software Engineering", {
    summary: "Integrates software units and components, then records integration test results and issue closure."
  }),
  makeProcess("software-qualification-test", "Software Qualification Test", "Software Engineering", {
    summary: "Confirms integrated software satisfies the allocated software requirements and acceptance criteria."
  }),
  makeProcess("hardware-requirement-analysis", "Hardware Requirement Analysis", "Hardware Engineering", {
    summary: "Analyzes hardware requirements, constraints, interfaces, and verification expectations."
  }),
  makeProcess("hardware-design", "Hardware Design", "Hardware Engineering", {
    summary: "Creates hardware architecture, detailed design, interface definitions, and production-ready evidence."
  }),
  makeProcess("verification-against-hardware-design", "Verification Against Hardware Design", "Hardware Engineering", {
    summary: "Checks the implemented hardware against design intent, constraints, and detailed design evidence."
  }),
  makeProcess("verification-against-hardware-requirements", "Verification Against Hardware Requirements", "Hardware Engineering", {
    summary: "Verifies hardware behavior and characteristics against allocated hardware requirements."
  }),
  makeProcess("mee-component-requirement-analysis", "MEE Component Requirement Analysis", "Mechanical Engineering", {
    summary: "Analyzes mechanical and electrical component requirements before design and sample production."
  }),
  makeProcess("mee-component-design", "MEE Component Design", "Mechanical Engineering", {
    summary: "Defines component design, interfaces, tolerances, and build criteria."
  }),
  makeProcess("mee-component-sample-production", "MEE Component Sample Production", "Mechanical Engineering", {
    summary: "Produces component samples and records build evidence for verification activities."
  }),
  makeProcess("mee-test-against-mechanical-component-design", "MEE-Test against Mechanical Component Design", "Mechanical Engineering", {
    summary: "Tests samples against the component design definition and resolves deviations."
  }),
  makeProcess("mee-test-against-mechanical-component-requirements", "MEE-Test against Mechanical Component Requirements", "Mechanical Engineering", {
    summary: "Tests components against allocated mechanical and electrical requirements."
  }),
  makeProcess("configuration-management", "Configuration Management", "Lifecycle Support", {
    icon: "mark-folder",
    summary: "Controls baselines, versions, configuration items, and release records across the engineering lifecycle."
  }),
  makeProcess("problem-resolution-management", "Problem Resolution Management", "Lifecycle Support", {
    icon: "mark-grid",
    summary: "Records problems, analyzes root cause, assigns corrective action, and verifies closure."
  }),
  makeProcess("change-request-management", "Change Request Management", "Lifecycle Support", {
    icon: "mark-change",
    summary: "Evaluates change requests, impact, approval status, implementation evidence, and affected baselines."
  }),
  makeProcess("supplier-monitoring", "Supplier Monitoring", "Support", {
    icon: "mark-cart",
    summary: "Tracks supplier scope, deliverables, quality evidence, deviations, and escalation status."
  }),
  makeProcess("product-release", "Product Release", "Support", {
    icon: "mark-tag",
    summary: "Confirms release readiness, required evidence, known issues, approvals, and release package content."
  }),
  makeProcess("quality-assurance", "Quality Assurance", "Support", {
    icon: "mark-target",
    summary: "Provides process assurance, audit evidence, compliance checks, and continuous improvement feedback."
  }),
  makeProcess("process-improvement-management", "Process Improvement Management", "Support", {
    icon: "mark-people",
    summary: "Collects improvement opportunities, prioritizes actions, and updates the process framework."
  }),
  makeProcess("calibration", "Calibration", "Support", {
    icon: "mark-ruler",
    summary: "Controls measurement equipment calibration status, validity, and evidence needed for test results."
  }),
  makeProcess("hardware-software-interface", "Hardware Software Interface", "Support", {
    icon: "mark-gears",
    summary: "Maintains the interface specification and refinement evidence between hardware and software teams."
  }),
  makeProcess("functional-safety-management", "Functional Safety Management", "Specialty", {
    icon: "mark-security",
    summary: "Plans, monitors, assesses, and compiles the functional safety evidence needed across the lifecycle.",
    workGroup: ["Safety manager", "System engineer", "Software engineer", "Hardware engineer", "Quality representative", "Independent reviewer"],
    activities: [
      "Create and maintain the safety plan and confirmation measures.",
      "Track safety work products and review readiness.",
      "Compile the safety case and supporting assessment evidence.",
      "Close assessment findings and document residual risk decisions."
    ],
    inputs: ["Item definition", "Hazard analysis outputs", "System and software requirements", "Verification evidence"],
    outputs: ["Safety plan", "Safety case", "Assessment checklist", "Confirmation review evidence"]
  }),
  makeProcess("cyber-security-management", "Cyber Security Management", "Specialty", {
    icon: "mark-chip",
    summary: "Plans, assesses, and records cybersecurity activities, goals, requirements, architecture, and case evidence.",
    workGroup: ["Cybersecurity manager", "Security engineer", "System architect", "Software architect", "Quality representative", "Assessment reviewer"],
    activities: [
      "Plan cybersecurity activities and define required work products.",
      "Analyze cybersecurity goals, requirements, and architecture evidence.",
      "Perform assessment and record findings.",
      "Compile the cybersecurity case and close review actions."
    ],
    inputs: ["Project scope", "Threat and risk assumptions", "System architecture", "Security requirements"],
    outputs: ["Cybersecurity plan", "Assessment checklist", "Cybersecurity case report", "Review protocol"]
  }),
  makeProcess("process-development-team", "Process Development Team", "Process Enablement", {
    icon: "mark-people",
    summary: "Owns process method updates, stakeholder feedback, training alignment, and publication readiness."
  }),
  makeProcess("aspice-trainings", "ASPICE Trainings", "Process Enablement", {
    icon: "mark-search",
    summary: "Provides role-based process training, onboarding material, and assessment preparation content."
  }),
  makeProcess("glossary", "Glossary", "Process Enablement", {
    icon: "mark-book",
    summary: "Defines shared process terms, abbreviations, artifact names, and lifecycle vocabulary."
  })
];

const processById = new Map(processes.map((process) => [process.id, process]));

const diagramItems = [
  { id: "project-management", kind: "blue", x: 5, y: 41, w: 370, h: 70 },
  { id: "risk-management", kind: "blue", x: 5, y: 153, w: 370, h: 70 },
  { id: "analysis", kind: "blue", x: 5, y: 268, w: 370, h: 70 },
  { id: "configuration-management", kind: "blue", x: 1443, y: 52, w: 368, h: 69 },
  { id: "problem-resolution-management", kind: "blue", x: 1443, y: 160, w: 368, h: 69 },
  { id: "change-request-management", kind: "blue", x: 1443, y: 274, w: 368, h: 69 },

  { id: "requirements-elicitation", kind: "gold", shape: "left", x: 627, y: 6, w: 226, h: 93 },
  { id: "system-requirements-analysis", kind: "gold", shape: "left", x: 677, y: 112, w: 227, h: 93 },
  { id: "system-qualification-test", kind: "gold", shape: "system-right", x: 946, y: 6, w: 275, h: 199 },
  { id: "system-architectural-design", kind: "gold", shape: "bottom-left", x: 727, y: 216, w: 196, h: 159 },
  { id: "system-integration-and-integration-test", kind: "gold", shape: "bottom-right", x: 923, y: 216, w: 197, h: 159 },

  { id: "software-requirements-analysis", kind: "gold", shape: "left", x: 68, y: 392, w: 201, h: 78 },
  { id: "software-qualification-test", kind: "gold", shape: "right", x: 397, y: 392, w: 199, h: 78 },
  { id: "software-architectural-design", kind: "gold", shape: "left", x: 114, y: 481, w: 198, h: 78 },
  { id: "software-integration-and-integration-test", kind: "gold", shape: "right", x: 352, y: 481, w: 198, h: 78 },
  { id: "software-detailed-design-and-unit-construction", kind: "gold", shape: "bottom-left", x: 160, y: 569, w: 172, h: 133 },
  { id: "software-unit-verification", kind: "gold", shape: "bottom-right", x: 332, y: 569, w: 169, h: 133 },

  { id: "hardware-requirement-analysis", kind: "gold", shape: "steep-left", x: 681, y: 392, w: 219, h: 168 },
  { id: "verification-against-hardware-requirements", kind: "gold", shape: "steep-right", x: 943, y: 392, w: 224, h: 168 },
  { id: "hardware-design", kind: "gold", shape: "bottom-left", x: 768, y: 569, w: 155, h: 133 },
  { id: "verification-against-hardware-design", kind: "gold", shape: "bottom-right", x: 923, y: 569, w: 158, h: 133 },

  { id: "mee-component-requirement-analysis", kind: "gray", shape: "left", x: 1254, y: 396, w: 198, h: 78 },
  { id: "mee-test-against-mechanical-component-requirements", kind: "gray", shape: "right", x: 1579, y: 396, w: 199, h: 78 },
  { id: "mee-component-design", kind: "gray", shape: "left", x: 1296, y: 485, w: 198, h: 78 },
  { id: "mee-test-against-mechanical-component-design", kind: "gray", shape: "right", x: 1534, y: 485, w: 200, h: 78 },
  { id: "mee-component-sample-production", kind: "gray", shape: "wide", x: 1343, y: 574, w: 344, h: 132 },

  { id: "supplier-monitoring", kind: "blue", x: 4, y: 746, w: 369, h: 69 },
  { id: "quality-assurance", kind: "blue", x: 489, y: 744, w: 368, h: 69 },
  { id: "calibration", kind: "blue", x: 973, y: 741, w: 369, h: 70 },
  { id: "functional-safety-management", kind: "blue", x: 1443, y: 746, w: 368, h: 69 },
  { id: "product-release", kind: "blue", x: 4, y: 849, w: 369, h: 69 },
  { id: "process-improvement-management", kind: "blue", x: 489, y: 849, w: 368, h: 69 },
  { id: "hardware-software-interface", kind: "blue", x: 973, y: 848, w: 369, h: 69 },
  { id: "cyber-security-management", kind: "blue", x: 1443, y: 845, w: 368, h: 69 },

  { id: "process-development-team", kind: "utility", x: 278, y: 947, w: 368, h: 69 },
  { id: "aspice-trainings", kind: "utility", x: 744, y: 947, w: 368, h: 69 },
  { id: "glossary", kind: "utility", x: 1232, y: 947, w: 368, h: 69 }
];

const diagramArrows = [
  { x: 894, y: 82, w: 58, h: 48 },
  { x: 280, y: 408, w: 74, h: 42 },
  { x: 303, y: 496, w: 56, h: 42 },
  { x: 895, y: 451, w: 54, h: 42 },
  { x: 1461, y: 411, w: 72, h: 42 },
  { x: 1492, y: 501, w: 50, h: 42 }
];

const diagramDividers = [
  { x: 922, y: 226, h: 140 },
  { x: 331, y: 570, h: 136 },
  { x: 922, y: 570, h: 136 }
];

const app = document.getElementById("app");
const searchInput = document.getElementById("globalSearch");
let viewMode = "map";

const engineeringRoles = [
  ["Project Manager", "Owns project scope, planning, resources, schedule, risks, stakeholder communication, and delivery decisions."],
  ["System Engineer", "Translates stakeholder needs into complete system requirements and maintains technical consistency and traceability."],
  ["Sys Architect", "Defines the system architecture, interfaces, allocations, technical constraints, and architecture decisions."],
  ["Software Developer", "Designs, implements, reviews, and unit-verifies software in line with approved requirements and coding standards."],
  ["System Tester", "Plans and executes system qualification tests, records evidence, manages defects, and reports verification status."],
  ["Integration Engineer", "Plans and performs software, hardware, and system integration; resolves interface issues and records results."],
  ["HW Engineer", "Develops, verifies, and maintains hardware requirements, design, prototypes, and compliance evidence."],
  ["Mechanical Engineer", "Develops mechanical concepts, detailed designs, drawings, samples, tolerance evidence, and verification support."],
  ["Functional Safety Manager", "Plans and governs the functional safety lifecycle, confirmation measures, safety case, and assessment closure."],
  ["Cyber Security Manager", "Plans cybersecurity activities, oversees threat and risk analysis, and maintains cybersecurity case evidence."],
  ["Configuration Manager", "Controls configuration items, baselines, version status, change records, and release integrity."],
  ["QA", "Assures process compliance through audits, reviews, quality reporting, corrective actions, and continuous improvement."],
  ["SQM", "Manages supplier quality planning, supplier performance, deliverable quality, escalation, and corrective actions."]
];

const toolMatrix = [
  ["Project planning and tracking", "Jira, Microsoft Project"],
  ["Requirements management and traceability", "IBM DOORS Next, Siemens Polarion"],
  ["System and software architecture", "Sparx Enterprise Architect, Capella"],
  ["Software development and version control", "Visual Studio Code, Git, GitLab"],
  ["Continuous integration and build", "Jenkins, GitLab CI"],
  ["Unit, integration, and system testing", "Vector CANoe, dSPACE, Jira Xray"],
  ["Hardware design and simulation", "Altium Designer, LTspice"],
  ["Mechanical design and data management", "CATIA, Siemens Teamcenter"],
  ["Functional safety analysis", "Ansys medini analyze"],
  ["Cybersecurity threat and risk analysis", "Ansys medini analyze, ThreatGet"],
  ["Configuration and release management", "GitLab, Siemens Teamcenter"],
  ["Quality, problem, and supplier management", "Jira, Confluence"]
];

const roleTraining = [
  ["Project Manager", "Project management fundamentals; ASPICE awareness; risk and change management; leadership and stakeholder communication."],
  ["System Engineer", "Systems engineering fundamentals; requirements engineering; ASPICE SYS.2/SYS.3; traceability and verification planning."],
  ["Sys Architect", "System architecture and interface design; ASPICE SYS.3; model-based systems engineering; technical decision management."],
  ["Software Developer", "Software development lifecycle; coding standard; Git workflow; unit testing; ASPICE SWE.3/SWE.4."],
  ["System Tester", "Test design and execution; requirements-based testing; defect management; ASPICE SYS.5; test tool training."],
  ["Integration Engineer", "Integration strategy; interface management; integration testing; ASPICE SYS.4/SWE.5."],
  ["HW Engineer", "Hardware development lifecycle; schematic and PCB design; hardware verification; applicable EMC and reliability basics."],
  ["Mechanical Engineer", "Mechanical design fundamentals; CAD and drawing control; GD&T; design verification and material selection."],
  ["Functional Safety Manager", "ISO 26262 functional safety management; HARA; safety case development; confirmation measures."],
  ["Cyber Security Manager", "ISO/SAE 21434 cybersecurity management; TARA; cybersecurity case; incident and vulnerability management."],
  ["Configuration Manager", "Configuration management planning; baseline and release control; change control; Git or PLM administration."],
  ["QA", "Quality assurance planning; ASPICE process assessment awareness; audit techniques; nonconformity and corrective action management."],
  ["SQM", "Supplier quality management; APQP/PPAP awareness; supplier audits; 8D problem solving and escalation."]
];

function renderWorkspaceIntro(title, description) {
  return `
    <div class="workspace-page">
      <div class="breadcrumb"><a href="#/home">Home</a><span>/</span><span>${escapeHtml(title)}</span></div>
      <section class="detail-hero"><div class="hero-panel"><h1>${escapeHtml(title)}</h1><p>${escapeHtml(description)}</p></div></section>
    `;
}

function renderRolesPage() {
  app.innerHTML = `
    ${renderWorkspaceIntro("Roles", "Role responsibilities clarify accountability across planning, development, verification, quality, safety, cybersecurity, and supplier collaboration.")}
      <section class="info-block"><h2>Engineering Roles and Responsibilities</h2><div class="role-grid workspace-role-grid">
        ${engineeringRoles.map(([role, responsibility]) => `<article class="role-card"><strong>${escapeHtml(role)}</strong><small>${escapeHtml(responsibility)}</small></article>`).join("")}
      </div></section>
    </div>`;
}

function renderToolsPage() {
  app.innerHTML = `
    ${renderWorkspaceIntro("Tools", "The tool matrix provides a starting point for selecting controlled tools for engineering work. The Process Team must confirm the organization-approved toolset before use.")}
      <section class="info-block"><h2>Activities and Tooling</h2><div class="table-scroll"><table class="workspace-table"><thead><tr><th>Activity</th><th>Proposed approved tools</th></tr></thead><tbody>
        ${toolMatrix.map(([activity, tools]) => `<tr><td>${escapeHtml(activity)}</td><td>${escapeHtml(tools)}</td></tr>`).join("")}
      </tbody></table></div></section>
    </div>`;
}

function renderTrainingsPage() {
  app.innerHTML = `
    ${renderWorkspaceIntro("Trainings", "Each role should complete its baseline process and technical training before taking responsibility for related work products or approval decisions.")}
      <section class="info-block"><h2>Minimum Role-Based Training</h2><div class="table-scroll"><table class="workspace-table"><thead><tr><th>Role</th><th>Minimum training</th></tr></thead><tbody>
        ${roleTraining.map(([role, training]) => `<tr><td>${escapeHtml(role)}</td><td>${escapeHtml(training)}</td></tr>`).join("")}
      </tbody></table></div></section>
    </div>`;
}

function renderOrganizationUnitsPage() {
  app.innerHTML = `
    ${renderWorkspaceIntro("Organization Units", "L&T EPS operates across five major business verticals—Power Electronics, Mobility, Industrial Robotics & Automation, Electronics System Design & Manufacturing (ESDM), and Strategic Electronics—serving commercial, industrial, and defence markets.")}
      <section class="organization-grid" aria-label="L&T EPS business verticals">
        ${[
          ["Power Electronics", "power", ["BESS", "PV Central Inverters", "EV Chargers", "Micro-grid Components"]],
          ["Mobility", "mobility", ["ADAS", "EV Powertrain", "Telematics Control Unit (TCU)"]],
          ["Industrial Robotics & Automation", "robotics", ["Construction Robots", "Industry 5.0 IoT automation products & services"]],
          ["Electronics System Design & Manufacturing", "esdm", ["Design & Engineering", "Manufacturing", "Testing & Validation", "Sourcing"]],
          ["Strategic Electronics", "strategic", ["RFSC Systems", "C2 Systems", "Avionics", "CBRNE", "UDA / Sonar Systems"]]
        ].map(([title, icon, items]) => `
          <article class="organization-card organization-${icon}">
            <header><span class="organization-icon ${icon}-icon" aria-hidden="true"></span><h2>${escapeHtml(title)}</h2></header>
            <div class="organization-content"><ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>
          </article>`).join("")}
      </section>
    </div>`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function processHref(id) {
  return `#/process/${id}`;
}

function iconMarkup(icon) {
  const needsSpan = icon === "mark-change";
  return `<span class="process-mark ${icon}" aria-hidden="true">${needsSpan ? "<span></span>" : ""}</span>`;
}

function getProcess(id) {
  return processById.get(id) || processById.get("system-architectural-design");
}

function diagramStyle(item) {
  return `left:${(item.x / 1817) * 100}%;top:${(item.y / 1023) * 100}%;width:${(item.w / 1817) * 100}%;height:${(item.h / 1023) * 100}%;`;
}

function renderDiagramItem(layout) {
  const item = getProcess(layout.id);
  const shapeClass = layout.shape ? ` shape-${layout.shape}` : "";
  const isStage = layout.kind === "gold" || layout.kind === "gray";
  const stageBadge = isStage ? `<small aria-hidden="true">${escapeHtml(item.title.slice(0, 1))}</small>` : "";
  const icon = isStage ? "" : iconMarkup(item.icon);

  return `
    <button class="diagram-item diagram-${layout.kind}${shapeClass}" style="${diagramStyle(layout)}" type="button" data-process-id="${item.id}">
      ${layout.kind === "utility" ? icon : ""}
      ${stageBadge}<strong>${escapeHtml(item.title)}</strong>
      ${layout.kind === "blue" ? icon : ""}
    </button>
  `;
}

function renderDiagram() {
  return `
    <div class="diagram-scroll" aria-label="Interactive engineering process map">
      <div class="process-map">
        ${diagramItems.map(renderDiagramItem).join("")}
        ${diagramArrows.map((arrow) => `<span class="diagram-arrow" style="${diagramStyle(arrow)}" aria-hidden="true"></span>`).join("")}
        ${diagramDividers.map((divider) => `<span class="diagram-divider" style="left:${(divider.x / 1817) * 100}%;top:${(divider.y / 1023) * 100}%;height:${(divider.h / 1023) * 100}%;" aria-hidden="true"></span>`).join("")}
      </div>
    </div>
  `;
}

function renderSearchResults(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return "";
  const terms = normalized.split(/\s+/);
  const matchesSearch = (value) => {
    const searchable = value.toLowerCase();
    return terms.every((term) => searchable.includes(term));
  };

  const processResults = processes.filter((process) => {
    return matchesSearch(`${process.title} ${process.group} ${process.summary}`);
  });
  const aspiceResults = window.AspiceMatrix.searchEntries.filter((entry) => {
    return matchesSearch(`${entry.title} ${entry.detail} ${entry.keywords}`);
  });
  const maturityResults = window.MaturityMap.searchEntries.filter((entry) => {
    return matchesSearch(`${entry.title} ${entry.detail} ${entry.keywords}`);
  });

  if (!processResults.length && !aspiceResults.length && !maturityResults.length) {
    return `<div class="empty-state">No matching content found for "${escapeHtml(query)}".</div>`;
  }

  return `
    <section class="search-results">
      <h2>Search results</h2>
      <div class="result-list">
        ${processResults
          .map(
            (process) => `
              <a href="${processHref(process.id)}">
                <strong>${escapeHtml(process.title)}</strong>
                <small>${escapeHtml(process.group)}</small>
              </a>
            `
          )
          .join("")}
        ${aspiceResults
          .map(
            (entry) => `
              <a href="${entry.href}">
                <strong>${escapeHtml(entry.title)}</strong>
                <small>${escapeHtml(entry.detail)}</small>
              </a>
            `
          )
          .join("")}
        ${maturityResults
          .map(
            (entry) => `
              <a href="${entry.href}">
                <strong>${escapeHtml(entry.title)}</strong>
                <small>${escapeHtml(entry.detail)}</small>
              </a>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderHome() {
  const query = searchInput.value;
  const resultHtml = renderSearchResults(query);
  const listHtml = `
    <section class="search-results">
      <h2>All process stages</h2>
      <div class="result-list">
        ${processes
          .map(
            (process) => `
              <a href="${processHref(process.id)}">
                <strong>${escapeHtml(process.title)}</strong>
                <small>${escapeHtml(process.group)}</small>
              </a>
            `
          )
          .join("")}
      </div>
    </section>
  `;

  app.innerHTML = `
    <div class="home-page">
      <div class="home-header">
        <div>
          <h1>Engineering Process Stages</h1>
          <p>Select a stage to open its process page with responsible persons, work group, core activities, inputs, outputs, and artifact status.</p>
        </div>
        <div class="view-actions" role="group" aria-label="View mode">
          <button type="button" data-view="map" class="${viewMode === "map" ? "active" : ""}">Map</button>
          <button type="button" data-view="list" class="${viewMode === "list" ? "active" : ""}">List</button>
        </div>
      </div>
      ${resultHtml}
      ${window.MaturityMap.renderRail()}
      ${
        viewMode === "list"
          ? listHtml
          : renderDiagram()
      }
    </div>
  `;
}

function artifactStatus() {
  return `
    <div class="empty-state artifact-status">
      <strong>Files will be uploaded</strong>
      <span>Approved process templates and supporting documents are under preparation.</span>
    </div>
  `;
}

function renderRoles(process) {
  return `
    <div class="role-grid">
      ${process.roles
        .map(
          (role) => `
            <div class="role-card">
              <strong>${escapeHtml(role.title)}</strong>
              <small>${escapeHtml(role.name)}</small>
              <small>${escapeHtml(role.detail)}</small>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderList(items) {
  return `<ul class="clean-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function renderProcessNav(activeId) {
  return `
    <aside class="process-list">
      <h2>Process stages</h2>
      ${processes
        .map(
          (process) => `
            <a class="${process.id === activeId ? "active" : ""}" href="${processHref(process.id)}">${escapeHtml(process.title)}</a>
          `
        )
        .join("")}
    </aside>
  `;
}

function renderDetail(id) {
  const process = getProcess(id);
  const query = searchInput.value;

  app.innerHTML = `
    <div class="detail-page">
      <div class="breadcrumb">
        <a href="#/home">Home</a>
        <span>/</span>
        <span>${escapeHtml(process.group)}</span>
      </div>

      <section class="detail-hero">
        <div class="hero-panel">
          <h1>${escapeHtml(process.title)}</h1>
          <p>${escapeHtml(process.summary)}</p>
          <div class="status-strip">
            <span>${escapeHtml(process.group)}</span>
            <span>Files pending</span>
            <span>${process.workGroup.length} work group roles</span>
          </div>
        </div>
      </section>

      ${renderSearchResults(query)}

      <div class="detail-grid">
        ${renderProcessNav(process.id)}
        <div class="content-stack">
          <section class="info-block">
            <h2>Responsible Persons</h2>
            ${renderRoles(process)}
          </section>

          <section class="info-block">
            <h2>Work Group</h2>
            <div class="metrics-grid">
              ${process.workGroup
                .map(
                  (role) => `
                    <div class="metric-card">
                      <strong>${escapeHtml(role)}</strong>
                      <small>Participates in planning, creation, review, and closure for this process stage.</small>
                    </div>
                  `
                )
                .join("")}
            </div>
          </section>

          <section class="info-block">
            <h2>Process Flow</h2>
            <div class="two-column">
              <div>
                <h3>Activities</h3>
                ${renderList(process.activities)}
              </div>
              <div>
                <h3>Outputs</h3>
                ${renderList(process.outputs)}
              </div>
            </div>
          </section>

          <section class="info-block">
            <h2>Inputs</h2>
            ${renderList(process.inputs)}
          </section>

          <section class="info-block">
            <h2>Artifacts</h2>
            ${artifactStatus()}
          </section>
        </div>
      </div>
    </div>
  `;
}

function updateActiveNav() {
  const isProcess = location.hash.startsWith("#/process/");
  const isAspice = location.hash.startsWith("#/aspice");
  const isMaturity = location.hash.startsWith("#/maturity/");
  const section = (location.hash || "#/home").replace("#/", "").split("/")[0];
  document.querySelectorAll("[data-nav]").forEach((link) => {
    const shouldActivate = ["roles", "tools", "trainings", "organization-units"].includes(section)
      ? link.dataset.nav === section
      : isAspice
      ? link.dataset.nav === "aspice"
      : isProcess || isMaturity
        ? link.dataset.nav === "process"
        : link.dataset.nav === "home";
    link.classList.toggle("active", shouldActivate);
  });
}

function route() {
  updateActiveNav();
  const hash = location.hash || "#/home";
  if (hash.startsWith("#/aspice")) {
    app.innerHTML = window.AspiceMatrix.renderRoute(hash, searchInput.value);
  } else if (hash.startsWith("#/maturity/")) {
    app.innerHTML = window.MaturityMap.renderRoute(hash);
  } else if (hash.startsWith("#/process/")) {
    renderDetail(hash.replace("#/process/", ""));
  } else if (hash === "#/roles") {
    renderRolesPage();
  } else if (hash === "#/tools") {
    renderToolsPage();
  } else if (hash === "#/trainings") {
    renderTrainingsPage();
  } else if (hash === "#/organization-units") {
    renderOrganizationUnitsPage();
  } else {
    renderHome();
  }
}

document.addEventListener("click", (event) => {
  const processButton = event.target.closest("[data-process-id]");
  if (processButton) {
    location.hash = processHref(processButton.dataset.processId);
    return;
  }

  const viewButton = event.target.closest("[data-view]");
  if (viewButton) {
    viewMode = viewButton.dataset.view;
    renderHome();
  }
});

searchInput.addEventListener("input", () => {
  route();
});

window.addEventListener("hashchange", route);

if (!location.hash) {
  location.hash = "#/home";
} else {
  route();
}
