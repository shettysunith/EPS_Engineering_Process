(function () {
  const colors = [
    "#347fbd",
    "#767b82",
    "#ef7028",
    "#c81560",
    "#32a2d0",
    "#82439d",
    "#1fa564",
    "#c95fc4",
    "#146c8a",
    "#70cf82",
    "#c7510d"
  ];

  const defaultRoles = [
    {
      role: "Maturity Owner",
      assignment: "Assigned project or program lead",
      responsibility: "Coordinates the maturity review and is accountable for closure."
    },
    {
      role: "Artifact Owner",
      assignment: "Assigned engineering or business owner",
      responsibility: "Creates, updates, reviews, and submits the assigned work product."
    },
    {
      role: "Cross-functional Reviewer",
      assignment: "Representatives from affected disciplines",
      responsibility: "Checks completeness, feasibility, interfaces, risks, and downstream impact."
    },
    {
      role: "Quality and Configuration",
      assignment: "Quality and configuration representatives",
      responsibility: "Checks evidence, review records, version control, baseline status, and open actions."
    },
    {
      role: "Decision Authority",
      assignment: "Appointed maturity review forum",
      responsibility: "Records the Go, Conditional Go, Hold, Recycle, or Kill decision."
    }
  ];

  const defaultActions = [
    "Confirm scope, applicable criteria, owners, and review date.",
    "Collect the latest controlled input artifacts and verify their status.",
    "Perform the planned cross-functional work and record decisions.",
    "Review the output artifacts for completeness, consistency, and traceability.",
    "Close critical actions or document an approved conditional action plan.",
    "Baseline accepted outputs and retain the maturity decision record."
  ];

  const defaultChecklist = [
    "Required input artifacts are available and use the expected revision.",
    "Named owners and reviewers have completed their assigned responsibilities.",
    "Mandatory reviews are complete and the evidence is linked.",
    "Critical risks, deviations, and unresolved actions are visible.",
    "Outputs are traceable to the applicable inputs and decisions.",
    "Accepted outputs are approved, baselined, and ready for downstream use."
  ];

  function artifact(name, owner, responsibility) {
    return { name, owner, responsibility };
  }

  function makeMaturity(code, title, stage, definition, inputs, outputs, relatedProcesses, options = {}) {
    return {
      code,
      id: code.toLowerCase(),
      title,
      stage,
      color: colors[Number(code.slice(1))],
      definition,
      inputs,
      outputs,
      roles: options.roles || defaultRoles,
      actions: options.actions || defaultActions,
      checklist: options.checklist || defaultChecklist,
      relatedProcesses
    };
  }

  const maturities = [
    makeMaturity(
      "M0",
      "Opportunity Discovery",
      "Pre-development",
      "Captures an initial opportunity, customer problem, or product idea and determines whether it is worth structured investigation.",
      [
        artifact("Opportunity signal", "Business or customer interface", "Describe the need, source, urgency, and expected value."),
        artifact("Available market or customer evidence", "Business analysis", "Provide the known facts, assumptions, and evidence quality."),
        artifact("Initial constraints", "Project and engineering leads", "Identify timing, cost, technical, regulatory, and resource boundaries.")
      ],
      [
        artifact("Opportunity statement", "Opportunity owner", "Summarize the problem, target user, intended value, and scope."),
        artifact("Assumption and question log", "Business analysis", "Record unknowns that must be answered in the next maturity."),
        artifact("Screening decision", "Decision authority", "Record whether the opportunity proceeds to business-case evaluation.")
      ],
      ["analysis", "project-management", "risk-management"]
    ),
    makeMaturity(
      "M1",
      "Business Case Approval",
      "Pre-development",
      "Confirms that the opportunity has a credible value proposition, feasible delivery path, and authorization for concept development.",
      [
        artifact("Opportunity statement", "Opportunity owner", "Provide the approved scope and value hypothesis."),
        artifact("Feasibility evidence", "Engineering lead", "Summarize technical options, constraints, dependencies, and major risks."),
        artifact("Preliminary estimates", "Project lead", "Provide indicative timing, resources, cost, and investment assumptions.")
      ],
      [
        artifact("Approved business case", "Business owner", "Document value, cost, schedule, assumptions, and approval conditions."),
        artifact("Project charter", "Project lead", "Define objectives, scope, governance, milestones, and key responsibilities."),
        artifact("Initial risk register", "Risk owner", "Record material risks, treatments, owners, and escalation needs.")
      ],
      ["project-management", "risk-management", "analysis"]
    ),
    makeMaturity(
      "M2",
      "Product Concept",
      "Pre-development",
      "Selects a product concept that can satisfy the approved business need and establishes a coherent starting point for development.",
      [
        artifact("Approved business case", "Business owner", "Provide the commercial boundaries and approval conditions."),
        artifact("Customer and stakeholder needs", "Customer interface", "Clarify expected features, operating scenarios, and acceptance needs."),
        artifact("Concept alternatives", "System architect", "Compare feasible concepts, major interfaces, costs, and risks.")
      ],
      [
        artifact("Selected product concept", "System architect", "Describe the selected solution concept and rationale."),
        artifact("High-level product architecture", "System architect", "Define major elements, boundaries, and external interfaces."),
        artifact("Feature, cost, and mission-profile targets", "Product owner", "Baseline the targets used by requirements engineering.")
      ],
      ["requirements-elicitation", "analysis", "system-architectural-design"]
    ),
    makeMaturity(
      "M3",
      "Requirements Baseline",
      "Development",
      "Establishes an agreed and reviewable requirements baseline that is feasible, traceable, and suitable for architecture development.",
      [
        artifact("Selected product concept", "Product owner", "Provide the authorized concept and intended product scope."),
        artifact("Stakeholder requirements", "Requirements owner", "Provide agreed needs, constraints, use cases, and acceptance expectations."),
        artifact("Applicable standards and constraints", "Compliance owner", "Identify the requirements that apply to the product and project.")
      ],
      [
        artifact("System requirements baseline", "System requirements owner", "Approve complete, consistent, feasible, and verifiable requirements."),
        artifact("Verification strategy", "Verification lead", "Define planned verification levels, methods, responsibilities, and environments."),
        artifact("Requirements traceability baseline", "Requirements owner", "Connect stakeholder needs to system requirements and planned verification.")
      ],
      ["requirements-elicitation", "system-requirements-analysis", "functional-safety-management", "cyber-security-management"]
    ),
    makeMaturity(
      "M4",
      "Architecture Baseline",
      "Development",
      "Defines and agrees the system structure, allocation, interfaces, and key technical decisions needed for discipline-level design.",
      [
        artifact("System requirements baseline", "System requirements owner", "Provide the approved functional and non-functional requirements."),
        artifact("Technical constraints and risks", "System architect", "Provide limitations, assumptions, critical risks, and decision drivers."),
        artifact("Safety and cybersecurity requirements", "Specialty engineering owners", "Provide applicable integrity, safety, and security constraints.")
      ],
      [
        artifact("System architecture baseline", "System architect", "Define elements, interfaces, allocation, behavior, and rationale."),
        artifact("Allocated discipline requirements", "Discipline leads", "Accept allocated requirements for software, hardware, and mechanical design."),
        artifact("Interface baseline", "Interface owner", "Approve internal and external interface definitions and ownership.")
      ],
      ["system-architectural-design", "hardware-software-interface", "software-requirements-analysis", "hardware-requirement-analysis", "mee-component-requirement-analysis"]
    ),
    makeMaturity(
      "M5",
      "Design Maturity",
      "Development",
      "Confirms that discipline architectures and detailed designs are sufficiently complete, reviewed, and controlled for implementation.",
      [
        artifact("System architecture baseline", "System architect", "Provide approved allocation, interfaces, and architecture constraints."),
        artifact("Allocated requirements", "Discipline requirements owners", "Provide testable requirements and traceability for each discipline."),
        artifact("Design methods and constraints", "Discipline leads", "Provide applicable design rules, methods, and implementation boundaries.")
      ],
      [
        artifact("Software design baseline", "Software architect", "Approve software architecture, detailed design, interfaces, and open deviations."),
        artifact("Hardware design baseline", "Hardware lead", "Approve hardware design, interfaces, analyses, and implementation constraints."),
        artifact("Mechanical design baseline", "Mechanical lead", "Approve component design, tolerances, interfaces, and sample-build criteria.")
      ],
      ["software-architectural-design", "software-detailed-design-and-unit-construction", "hardware-design", "mee-component-design", "configuration-management"]
    ),
    makeMaturity(
      "M6",
      "Implementation Complete",
      "Development",
      "Confirms that planned product elements have been implemented or built and that unit-level evidence supports integration.",
      [
        artifact("Released design baselines", "Discipline design owners", "Provide approved implementation definitions and revisions."),
        artifact("Build and implementation plans", "Implementation leads", "Provide sequencing, environments, tools, resources, and acceptance checks."),
        artifact("Interface definitions", "Interface owner", "Provide controlled interfaces required by implementation and unit verification.")
      ],
      [
        artifact("Implemented units and samples", "Implementation leads", "Deliver identifiable product elements at the agreed revision."),
        artifact("Unit verification evidence", "Verification owners", "Record reviews, static checks, unit tests, deviations, and results."),
        artifact("Implementation issue status", "Problem-resolution owner", "Show open defects, containment, ownership, and integration impact.")
      ],
      ["software-detailed-design-and-unit-construction", "software-unit-verification", "hardware-design", "verification-against-hardware-design", "mee-component-sample-production"]
    ),
    makeMaturity(
      "M7",
      "Integration Readiness",
      "Development",
      "Confirms that verified elements can be integrated using controlled interfaces, environments, sequences, and acceptance criteria.",
      [
        artifact("Unit-verified product elements", "Discipline verification owners", "Provide accepted units, samples, versions, and verification results."),
        artifact("Integration strategy and plan", "Integration lead", "Provide sequence, dependencies, environments, tests, and responsibilities."),
        artifact("Interface baseline", "Interface owner", "Provide the approved interfaces and known deviations for integration.")
      ],
      [
        artifact("Integrated product baseline", "Integration lead", "Identify the integrated configuration and all included elements."),
        artifact("Integration test report", "Integration test owner", "Record execution, results, defects, deviations, and traceability."),
        artifact("Resolved integration issues", "Problem-resolution owner", "Provide verified closure or accepted residual action plans.")
      ],
      ["software-integration-and-integration-test", "system-integration-and-integration-test", "hardware-software-interface", "problem-resolution-management"]
    ),
    makeMaturity(
      "M8",
      "Validation Sign-off",
      "Development",
      "Confirms that the integrated product satisfies its approved requirements and is acceptable for production-readiness preparation.",
      [
        artifact("Integrated product baseline", "Configuration owner", "Provide the exact product configuration submitted for qualification."),
        artifact("Qualification and validation plan", "Verification lead", "Provide requirements coverage, methods, environments, and acceptance criteria."),
        artifact("Requirements traceability", "Requirements owner", "Provide complete links between requirements, tests, results, and deviations.")
      ],
      [
        artifact("Qualification and validation report", "Verification lead", "Summarize coverage, results, deviations, and acceptance."),
        artifact("Validation sign-off", "Product and decision authority", "Record approval, conditions, residual risks, and restrictions."),
        artifact("Residual issue plan", "Project lead", "Assign remaining actions, due dates, owners, and production impact.")
      ],
      ["system-qualification-test", "software-qualification-test", "verification-against-hardware-requirements", "functional-safety-management", "cyber-security-management"]
    ),
    makeMaturity(
      "M9",
      "Production Readiness",
      "Series production",
      "Confirms that product, manufacturing, supply, service, and quality arrangements are ready for controlled series-production entry.",
      [
        artifact("Validated product baseline", "Product release owner", "Provide the approved product definition and validation status."),
        artifact("Manufacturing and supply readiness", "Operations and supplier owners", "Provide process, tooling, capacity, material, and supplier evidence."),
        artifact("Pilot build results", "Production engineering", "Provide yield, capability, issue, rework, and acceptance results.")
      ],
      [
        artifact("Production readiness approval", "Operations lead", "Record readiness status, conditions, open actions, and authority approval."),
        artifact("Released production definition", "Configuration owner", "Baseline product, BOM, manufacturing, inspection, and packaging definitions."),
        artifact("Service and support readiness", "Service owner", "Approve service information, training, diagnostics, and support arrangements.")
      ],
      ["product-release", "supplier-monitoring", "quality-assurance", "configuration-management", "calibration"]
    ),
    makeMaturity(
      "M10",
      "Launch and SOP",
      "Series production",
      "Authorizes launch and start of production, transfers ownership to operations, and establishes early-life monitoring and response.",
      [
        artifact("Production readiness approval", "Operations lead", "Provide approved readiness evidence and closure conditions."),
        artifact("Launch plan", "Launch owner", "Provide timing, volumes, responsibilities, communications, and contingency actions."),
        artifact("Release package", "Product release owner", "Provide the approved product, production, quality, service, and shipment records.")
      ],
      [
        artifact("SOP authorization", "Decision authority", "Record authorization, effective date, conditions, and escalation path."),
        artifact("Operations handover", "Project and operations leads", "Transfer responsibilities, records, risks, and remaining actions."),
        artifact("Early-life monitoring plan", "Quality and operations", "Define launch metrics, review cadence, issue response, and exit criteria.")
      ],
      ["product-release", "quality-assurance", "problem-resolution-management", "change-request-management", "project-management"]
    )
  ];

  const maturityById = new Map(maturities.map((maturity) => [maturity.id, maturity]));

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function maturityHref(id) {
    return `#/phases-and-milestones/${id}`;
  }

  function renderRail() {
    return `
      <section class="maturity-map" aria-labelledby="maturity-map-title">
        <div class="maturity-map-heading">
          <div>
            <span class="maturity-eyebrow">Stage-gate map</span>
            <h2 id="maturity-map-title">Gates, Stages &amp; Deliverables - End to End</h2>
          </div>
          <p>Select a maturity to open its definition, artifacts, responsibilities, required work, and readiness checklist.</p>
        </div>
        <div class="maturity-map-scroll">
          <div class="maturity-map-inner">
            <div class="maturity-stage-bands" aria-hidden="true">
              <span class="band-pre">Pre-development</span>
              <span class="band-development">Development</span>
              <span class="band-production">Series production</span>
            </div>
            <div class="maturity-track">
              ${maturities
                .map(
                  (maturity, index) => `
                    <div class="maturity-step ${index === 0 ? "first" : ""}" style="--maturity-color:${maturity.color};--step-index:${index};">
                      <a href="${maturityHref(maturity.id)}" aria-label="${maturity.code}: ${escapeHtml(maturity.title)}">
                        <strong>${maturity.code}</strong>
                        <small>${escapeHtml(maturity.title)}</small>
                      </a>
                    </div>
                  `
                )
                .join("")}
            </div>
          </div>
        </div>
        <div class="maturity-decision-legend" aria-label="Possible maturity decisions">
          <strong>Decision at each maturity</strong>
          <span class="decision-go">Go</span>
          <span class="decision-conditional">Conditional Go</span>
          <span class="decision-stop">No Go</span>
        </div>
      </section>
    `;
  }

  function renderMaturityNav(activeId) {
    return `
      <nav class="maturity-local-nav" aria-label="Maturity levels">
        ${maturities
          .map(
            (maturity) => `
              <a class="${maturity.id === activeId ? "active" : ""}" href="${maturityHref(maturity.id)}" style="--maturity-color:${maturity.color}">
                <strong>${maturity.code}</strong>
                <span>${escapeHtml(maturity.title)}</span>
              </a>
            `
          )
          .join("")}
      </nav>
    `;
  }

  function renderArtifactTable(title, artifacts, kind) {
    return `
      <section class="maturity-section artifact-table-section">
        <div class="section-heading">
          <span>${kind}</span>
          <h2>${title}</h2>
        </div>
        <div class="maturity-table-scroll">
          <table class="maturity-table">
            <thead>
              <tr>
                <th>Artifact</th>
                <th>Responsible role</th>
                <th>Default responsibility</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${artifacts
                .map(
                  (item) => `
                    <tr>
                      <td><strong>${escapeHtml(item.name)}</strong></td>
                      <td>${escapeHtml(item.owner)}</td>
                      <td>${escapeHtml(item.responsibility)}</td>
                      <td><span class="template-status">Template</span></td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </section>
    `;
  }

  function renderRoles(roles) {
    return `
      <section class="maturity-section">
        <div class="section-heading">
          <span>Governance</span>
          <h2>Roles and responsibilities</h2>
        </div>
        <div class="maturity-role-grid">
          ${roles
            .map(
              (item) => `
                <article>
                  <strong>${escapeHtml(item.role)}</strong>
                  <span>${escapeHtml(item.assignment)}</span>
                  <p>${escapeHtml(item.responsibility)}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
    `;
  }

  function renderChecklist(items) {
    return `
      <section class="maturity-section">
        <div class="section-heading">
          <span>Readiness test</span>
          <h2>Default maturity checklist</h2>
        </div>
        <div class="maturity-checklist">
          ${items
            .map(
              (item, index) => `
                <label>
                  <input type="checkbox" />
                  <span><b>${String(index + 1).padStart(2, "0")}</b>${escapeHtml(item)}</span>
                </label>
              `
            )
            .join("")}
        </div>
      </section>
    `;
  }

  function renderRelatedProcesses(processIds) {
    return `
      <section class="maturity-section">
        <div class="section-heading">
          <span>Cross-reference</span>
          <h2>Related engineering processes</h2>
        </div>
        <div class="maturity-process-links">
          ${processIds
            .map((processId) => {
              const label = processId
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
              return `<a href="#/process/${processId}">${escapeHtml(label)}</a>`;
            })
            .join("")}
        </div>
      </section>
    `;
  }

  function renderDetail(maturity) {
    const index = maturities.indexOf(maturity);
    const previous = index > 0 ? maturities[index - 1] : null;
    const next = index < maturities.length - 1 ? maturities[index + 1] : null;

    return `
      <div class="maturity-page" style="--maturity-color:${maturity.color}">
        <div class="breadcrumb">
          <a href="#/phases-and-milestones">Phases and Milestones</a>
          <span>/</span>
          <span>${maturity.code}</span>
        </div>

        <header class="maturity-detail-hero">
          <div class="maturity-code">${maturity.code}</div>
          <div>
            <span>${escapeHtml(maturity.stage)}</span>
            <h1>${escapeHtml(maturity.title)}</h1>
            <p>${escapeHtml(maturity.definition)}</p>
          </div>
        </header>

        <div class="template-notice">
          <strong>Default template content</strong>
          <span>Replace these example criteria, roles, and artifacts with approved lifecycle information when it becomes available.</span>
        </div>

        <div class="maturity-detail-layout">
          ${renderMaturityNav(maturity.id)}
          <main class="maturity-content">
            <section class="maturity-section">
              <div class="section-heading">
                <span>Purpose</span>
                <h2>Maturity definition</h2>
              </div>
              <p class="maturity-definition">${escapeHtml(maturity.definition)}</p>
              <div class="maturity-decision-box">
                <strong>Expected decision</strong>
                <span>Go</span>
                <span>Conditional Go</span>
                <span>Hold</span>
                <span>Recycle</span>
                <span>Kill</span>
              </div>
            </section>

            <section class="maturity-section">
              <div class="section-heading">
                <span>Transformation</span>
                <h2>Input-to-output workflow</h2>
              </div>
              <div class="maturity-flow">
                <div>
                  <small>01</small>
                  <strong>Controlled inputs</strong>
                  <span>${maturity.inputs.length} default artifacts</span>
                </div>
                <i aria-hidden="true"></i>
                <div>
                  <small>02</small>
                  <strong>Perform and review</strong>
                  <span>${maturity.actions.length} required actions</span>
                </div>
                <i aria-hidden="true"></i>
                <div>
                  <small>03</small>
                  <strong>Approved outputs</strong>
                  <span>${maturity.outputs.length} default artifacts</span>
                </div>
              </div>
            </section>

            ${renderArtifactTable("Input artifacts", maturity.inputs, "Required before review")}

            <section class="maturity-section">
              <div class="section-heading">
                <span>Execution</span>
                <h2>Required work and actions</h2>
              </div>
              <ol class="maturity-actions">
                ${maturity.actions.map((action) => `<li>${escapeHtml(action)}</li>`).join("")}
              </ol>
            </section>

            ${renderArtifactTable("Output artifacts", maturity.outputs, "Produced and approved")}
            ${renderRoles(maturity.roles)}
            ${renderChecklist(maturity.checklist)}
            ${renderRelatedProcesses(maturity.relatedProcesses)}

            <nav class="maturity-pager" aria-label="Adjacent maturities">
              ${
                previous
                  ? `<a href="${maturityHref(previous.id)}"><small>Previous</small><strong>${previous.code} - ${escapeHtml(previous.title)}</strong></a>`
                  : `<a href="#/phases-and-milestones"><small>Return</small><strong>Phases and Milestones</strong></a>`
              }
              ${
                next
                  ? `<a href="${maturityHref(next.id)}"><small>Next</small><strong>${next.code} - ${escapeHtml(next.title)}</strong></a>`
                  : `<a href="#/phases-and-milestones"><small>Complete</small><strong>Return to phases and milestones</strong></a>`
              }
            </nav>
          </main>
        </div>
      </div>
    `;
  }

  function renderRoute(hash) {
    const id = hash.replace("#/phases-and-milestones/", "").replace("#/maturity/", "").split(/[/?]/)[0].toLowerCase();
    return renderDetail(maturityById.get(id) || maturities[0]);
  }

  const searchEntries = maturities.map((maturity) => ({
    title: `${maturity.code} - ${maturity.title}`,
    detail: `${maturity.stage} maturity definition, artifacts, roles, actions, and readiness checklist`,
    keywords: `${maturity.definition} ${maturity.inputs.map((item) => item.name).join(" ")} ${maturity.outputs
      .map((item) => item.name)
      .join(" ")}`,
    href: maturityHref(maturity.id)
  }));

  window.MaturityMap = {
    maturities,
    renderRail,
    renderRoute,
    searchEntries
  };
})();
