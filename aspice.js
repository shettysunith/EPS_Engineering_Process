(function () {
  const levels = [
    {
      id: 0,
      name: "Incomplete",
      color: "#7a8794",
      summary: "The process is absent, incomplete, or does not achieve its intended purpose.",
      focus: "Expected outcomes are missing, unsuitable, or supported by too little objective evidence.",
      attributes: []
    },
    {
      id: 1,
      name: "Performed",
      color: "#2f7d8a",
      summary: "The process is performed and achieves its defined purpose and outcomes.",
      focus: "People carry out the base practices and produce evidence that the expected outcomes exist.",
      attributes: ["pa-1-1"]
    },
    {
      id: 2,
      name: "Managed",
      color: "#356a9a",
      summary: "The performed process is planned, monitored and adjusted, and its work products are controlled.",
      focus: "Responsibilities, resources, schedules, reviews, versions and baselines are actively managed.",
      attributes: ["pa-2-1", "pa-2-2"]
    },
    {
      id: 3,
      name: "Established",
      color: "#56713b",
      summary: "A defined organizational standard process is tailored and deployed in the project.",
      focus: "Projects follow an approved process, with capable people, suitable infrastructure and collected experience.",
      attributes: ["pa-3-1", "pa-3-2"]
    },
    {
      id: 4,
      name: "Predictable",
      color: "#a66b24",
      summary: "The established process operates predictably within quantitatively understood limits.",
      focus: "Measurement data, baselines and control methods expose variation and guide corrective action.",
      attributes: ["pa-4-1", "pa-4-2"]
    },
    {
      id: 5,
      name: "Innovating",
      color: "#9b4f58",
      summary: "The predictable process is continually improved to respond to organizational change.",
      focus: "Improvement goals, innovation opportunities and measured implementation results drive sustained change.",
      attributes: ["pa-5-1", "pa-5-2"]
    }
  ];

  const attributes = [
    {
      id: "pa-1-1",
      code: "PA 1.1",
      level: 1,
      name: "Process Performance",
      description: "Determines whether the implemented process achieves its purpose and expected outcomes.",
      questions: [
        "Are the expected process outcomes achieved?",
        "Are applicable base practices actually performed?",
        "Do work products and tool records provide objective evidence?",
        "Can performers explain how inputs become approved outputs?"
      ],
      evidence: ["Completed process outputs", "Traceability records", "Review and agreement evidence", "Test or analysis results", "Performer interviews"],
      related: ["pa-2-1", "pa-2-2"]
    },
    {
      id: "pa-2-1",
      code: "PA 2.1",
      level: 2,
      name: "Performance Management",
      description: "Determines whether process performance is planned, monitored and adjusted, with responsibilities and resources established.",
      questions: [
        "Are performance objectives and constraints identified?",
        "Are activities planned, assigned and monitored?",
        "Are resources, competencies and interfaces managed?",
        "Are deviations identified and corrective actions taken?"
      ],
      evidence: ["Process or project plan", "Schedules and estimates", "Responsibility assignments", "Progress reports", "Corrective-action records"],
      related: ["pa-1-1", "pa-2-2"]
    },
    {
      id: "pa-2-2",
      code: "PA 2.2",
      level: 2,
      name: "Work Product Management",
      description: "Determines whether process work products are identified, documented, reviewed, controlled and maintained.",
      questions: [
        "Are work-product requirements and quality criteria defined?",
        "Are work products identified, versioned and controlled?",
        "Are reviews performed against agreed criteria?",
        "Are approved outputs baselined and changes traceable?"
      ],
      evidence: ["Work-product register", "Templates and quality criteria", "Review records", "Version and baseline history", "Approval and change records"],
      related: ["pa-1-1", "pa-2-1", "pa-3-1"]
    },
    {
      id: "pa-3-1",
      code: "PA 3.1",
      level: 3,
      name: "Process Definition",
      description: "Determines whether an organizational standard process is defined and maintained for consistent deployment.",
      questions: [
        "Is a standard process defined with activities, roles and interfaces?",
        "Are tailoring rules and expected work products available?",
        "Are competencies, infrastructure and measures identified?",
        "Is the standard process maintained using experience and feedback?"
      ],
      evidence: ["Standard process description", "Tailoring guidelines", "Role and competency model", "Tool and infrastructure guidance", "Process-maintenance history"],
      related: ["pa-2-2", "pa-3-2"]
    },
    {
      id: "pa-3-2",
      code: "PA 3.2",
      level: 3,
      name: "Process Deployment",
      description: "Determines whether the standard process is effectively tailored, deployed and supported in the assessed project.",
      questions: [
        "Has the standard process been tailored for the project context?",
        "Are roles filled by competent people with sufficient resources?",
        "Is required infrastructure available and used?",
        "Is project experience collected to improve the standard process?"
      ],
      evidence: ["Tailoring record", "Project process description", "Training and competency evidence", "Tool deployment records", "Lessons learned and measures"],
      related: ["pa-3-1", "pa-4-1"]
    },
    {
      id: "pa-4-1",
      code: "PA 4.1",
      level: 4,
      name: "Quantitative Analysis",
      description: "Determines whether quantitative information needs, measures and analysis techniques are established for the process.",
      questions: [
        "Are business and process information needs defined?",
        "Are suitable measures and analysis methods selected?",
        "Are measurement baselines and models established?",
        "Is collected data checked and analyzed consistently?"
      ],
      evidence: ["Measurement objectives", "Operational measure definitions", "Data-quality checks", "Performance baselines", "Quantitative analysis reports"],
      related: ["pa-3-2", "pa-4-2"]
    },
    {
      id: "pa-4-2",
      code: "PA 4.2",
      level: 4,
      name: "Quantitative Control",
      description: "Determines whether quantitative techniques control process performance and address assignable causes of variation.",
      questions: [
        "Are control limits or expected performance ranges defined?",
        "Is process variation monitored using quantitative techniques?",
        "Are assignable causes identified and analyzed?",
        "Are corrective actions verified using measurement data?"
      ],
      evidence: ["Control charts or trend views", "Variation analysis", "Assignable-cause records", "Corrective actions", "Updated performance models"],
      related: ["pa-4-1", "pa-5-1"]
    },
    {
      id: "pa-5-1",
      code: "PA 5.1",
      level: 5,
      name: "Process Innovation",
      description: "Determines whether improvement objectives and innovation opportunities are identified from data and organizational needs.",
      questions: [
        "Are improvement objectives tied to organizational goals?",
        "Are performance data and emerging practices analyzed?",
        "Are innovation opportunities evaluated for benefit and risk?",
        "Are selected improvements prioritized using evidence?"
      ],
      evidence: ["Improvement objectives", "Performance-gap analysis", "Innovation proposals", "Benefit and risk evaluation", "Prioritized improvement backlog"],
      related: ["pa-4-2", "pa-5-2"]
    },
    {
      id: "pa-5-2",
      code: "PA 5.2",
      level: 5,
      name: "Process Innovation Implementation",
      description: "Determines whether selected innovations are implemented, controlled and evaluated for measurable impact.",
      questions: [
        "Is implementation planned with ownership and success criteria?",
        "Are pilots and organizational changes controlled?",
        "Is impact measured against the improvement objective?",
        "Are successful changes institutionalized and communicated?"
      ],
      evidence: ["Innovation implementation plan", "Pilot results", "Before-and-after measures", "Deployment decisions", "Updated standard process"],
      related: ["pa-5-1", "pa-3-1"]
    }
  ];

  const workflowSteps = [
    ["01", "Approved inputs", "Start with authorized requirements, plans, constraints and predecessor outputs."],
    ["02", "Perform base practices", "Execute the activities needed to achieve the process purpose."],
    ["03", "Create or update work products", "Record the information needed by downstream engineering and assessment."],
    ["04", "Analyze and review", "Check technical quality, completeness, feasibility and consistency."],
    ["05", "Establish traceability", "Connect inputs, decisions, outputs, verification evidence and changes in both directions."],
    ["06", "Agree and communicate", "Resolve findings and obtain agreement from affected parties."],
    ["07", "Baseline approved outputs", "Protect the accepted version and retain its approval and change history."],
    ["08", "Use in the next process", "Provide controlled outputs to the next V-model activity."],
    ["09", "Record results and close findings", "Retain verification results, deviations, corrective actions and closure evidence."]
  ];

  const workProducts = [
    ["requirements-elicitation", "Requirements elicitation", "Stakeholder needs, constraints and agreement", "Stakeholder requirements; assumptions; decisions; review records"],
    ["system-requirements-analysis", "System requirements analysis", "Structured, feasible and verifiable system requirements", "System requirements; criteria; analysis; traceability; approvals"],
    ["system-architectural-design", "System architectural design", "Elements, interfaces, allocations and architecture views", "Architecture description; interface definition; allocation; evaluation"],
    ["software-requirements-analysis", "Software requirements analysis", "Derived and analyzed software requirements", "Software requirements; criteria; analysis; traceability; reviews"],
    ["software-architectural-design", "Software architectural design", "Components, interfaces and behavior", "Architecture views; interfaces; allocation; evaluation records"],
    ["software-detailed-design-and-unit-construction", "Detailed design and construction", "Unit design and implemented software", "Detailed design; source code; interfaces; code-review evidence"],
    ["software-unit-verification", "Unit verification", "Evidence that units meet detailed design", "Test cases; results; coverage; static analysis; anomalies"],
    ["software-integration-and-integration-test", "Software integration and verification", "Integrated software and verified interfaces", "Integration strategy; builds; tests; logs; defects; traceability"],
    ["software-qualification-test", "Software qualification test", "Evidence against software requirements", "Qualification tests; results; coverage; deviation evaluation"],
    ["system-integration-and-integration-test", "System integration and test", "Integrated system elements and verified interfaces", "Integration strategy; configurations; tests; results; problems"],
    ["system-qualification-test", "System qualification test", "Evidence against system requirements", "Qualification plan; results; coverage; acceptance and deviations"],
    ["product-release", "Product release", "Approved configuration ready for delivery", "Release note; configuration index; approvals; known issues; baseline"]
  ];

  const attributeById = new Map(attributes.map((item) => [item.id, item]));

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function levelHref(id) {
    return `#/aspice/level/${id}`;
  }

  function attributeHref(id) {
    return `#/aspice/attribute/${id}`;
  }

  function renderLocalNav(active) {
    return `
      <aside class="matrix-nav" aria-label="ASPICE capability topics">
        <h2>Capability Matrix</h2>
        <a class="${active === "overview" ? "active" : ""}" href="#/aspice">Overview</a>
        <p>Capability levels</p>
        ${levels.map((level) => `<a class="${active === `level-${level.id}` ? "active" : ""}" href="${levelHref(level.id)}"><span class="nav-dot" style="--dot:${level.color}"></span>CL${level.id} ${esc(level.name)}</a>`).join("")}
        <p>Process attributes</p>
        ${attributes.map((attribute) => `<a class="${active === attribute.id ? "active" : ""}" href="${attributeHref(attribute.id)}">${attribute.code} ${esc(attribute.name)}</a>`).join("")}
        <p>Applied guidance</p>
        <a class="${active === "workflow" ? "active" : ""}" href="#/aspice/workflow">PA 1.1 workflow</a>
        <a class="${active === "work-products" ? "active" : ""}" href="#/aspice/work-products">V-model work products</a>
      </aside>
    `;
  }

  function renderAspiceSearch(query) {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return "";
    const results = searchEntries.filter((entry) => `${entry.title} ${entry.detail} ${entry.keywords}`.toLowerCase().includes(normalized));
    return `
      <section class="matrix-search">
        <h2>${results.length ? "ASPICE search results" : "No ASPICE topic found"}</h2>
        ${results.length ? `<div>${results.map((entry) => `<a href="${entry.href}"><strong>${esc(entry.title)}</strong><span>${esc(entry.detail)}</span></a>`).join("")}</div>` : `<p>Try a capability level, process attribute, workflow step or work-product term.</p>`}
      </section>
    `;
  }

  function renderShell(active, eyebrow, title, intro, content, query) {
    return `
      <div class="matrix-page">
        <div class="matrix-breadcrumb"><a href="#/home">Home</a><span>/</span><a href="#/aspice">ASPICE Capability Matrix</a></div>
        ${renderAspiceSearch(query)}
        <div class="matrix-layout">
          ${renderLocalNav(active)}
          <main class="matrix-content">
            <header class="matrix-heading">
              <span>${esc(eyebrow)}</span>
              <h1>${esc(title)}</h1>
              <p>${esc(intro)}</p>
            </header>
            ${content}
            <footer class="matrix-source">
              Based on Automotive SPICE 4.0. Information-item names are assessment guidance, not mandatory document filenames.
              <a href="https://vda-qmc.de/en/automotive-spice/automotive-spice-veroeffentlichungen/" target="_blank" rel="noreferrer">Official VDA QMC publications</a>
            </footer>
          </main>
        </div>
      </div>
    `;
  }

  function renderLadder() {
    return `
      <div class="capability-ladder" aria-label="Six ASPICE capability levels">
        ${levels.map((level) => `
          <a href="${levelHref(level.id)}" style="--level:${level.color}" class="level-step level-${level.id}">
            <span>CL${level.id}</span><strong>${esc(level.name)}</strong><small>${level.attributes.length ? level.attributes.map((id) => attributeById.get(id).code).join(" + ") : "No achieved process attribute"}</small>
          </a>
        `).join("")}
      </div>
    `;
  }

  function renderAttributeGrid() {
    return `
      <div class="attribute-grid">
        ${attributes.map((attribute) => {
          const level = levels[attribute.level];
          return `<a href="${attributeHref(attribute.id)}" style="--level:${level.color}"><span>${attribute.code}</span><strong>${esc(attribute.name)}</strong><small>Capability Level ${attribute.level}</small></a>`;
        }).join("")}
      </div>
    `;
  }

  function renderOverview(query) {
    const content = `
      <section class="matrix-intro-band">
        <div><strong>Process dimension</strong><span>What engineering and support processes are performed?</span></div>
        <b aria-hidden="true">x</b>
        <div><strong>Capability dimension</strong><span>How reliably is each process performed and improved?</span></div>
      </section>
      <section class="matrix-section">
        <div class="section-heading"><div><span>Capability progression</span><h2>Six levels, assessed per process</h2></div><p>A project can have different capability levels for different processes. There is no single consolidated project or company capability level.</p></div>
        ${renderLadder()}
      </section>
      <section class="matrix-section">
        <div class="section-heading"><div><span>Measurement framework</span><h2>Nine process attributes</h2></div><p>Each attribute examines a distinct aspect of performance, management, establishment, quantitative control or innovation.</p></div>
        ${renderAttributeGrid()}
      </section>
      <section class="matrix-section quick-links">
        <a href="#/aspice/workflow"><span>Applied flow</span><strong>Follow the PA 1.1 workflow</strong><small>From approved inputs to verified closure evidence</small></a>
        <a href="#/aspice/work-products"><span>V-model evidence</span><strong>Explore lifecycle work products</strong><small>Typical outputs and archive expectations by stage</small></a>
      </section>
    `;
    return renderShell("overview", "Assessment guide", "ASPICE Capability Matrix", "A navigable view of capability levels, process attributes, performance evidence and V-model work products.", content, query);
  }

  function renderLevel(id, query) {
    const level = levels.find((item) => item.id === Number(id)) || levels[0];
    const levelAttributes = level.attributes.map((attributeId) => attributeById.get(attributeId));
    const lowerAttributes = attributes.filter((attribute) => attribute.level < level.id);
    const previous = level.id > 0 ? levels[level.id - 1] : null;
    const next = level.id < 5 ? levels[level.id + 1] : null;
    const content = `
      <section class="level-focus" style="--level:${level.color}">
        <div class="level-number">CL${level.id}</div>
        <div><h2>${esc(level.name)} process</h2><p>${esc(level.summary)}</p></div>
      </section>
      <section class="matrix-section">
        <div class="section-heading"><div><span>Assessment focus</span><h2>What this level demonstrates</h2></div></div>
        <p class="lead-copy">${esc(level.focus)}</p>
        ${levelAttributes.length ? `<div class="level-attribute-list">${levelAttributes.map((attribute) => `<a href="${attributeHref(attribute.id)}" style="--level:${level.color}"><span>${attribute.code}</span><strong>${esc(attribute.name)}</strong><small>${esc(attribute.description)}</small></a>`).join("")}</div>` : `<div class="matrix-note"><strong>No achieved process attribute at CL0</strong><span>The expected process purpose and outcomes are not sufficiently demonstrated.</span></div>`}
      </section>
      <section class="matrix-section achievement-rule">
        <div class="section-heading"><div><span>Level achievement</span><h2>Cumulative evidence rule</h2></div></div>
        ${level.id === 0 ? `<p>CL0 applies when PA 1.1 is not sufficiently achieved.</p>` : `<div class="rule-track"><div><strong>Current-level attributes</strong><span>At least Largely achieved</span><small>${levelAttributes.map((item) => item.code).join(", ")}</small></div><b>+</b><div><strong>All lower-level attributes</strong><span>Fully achieved</span><small>${lowerAttributes.length ? lowerAttributes.map((item) => item.code).join(", ") : "No lower attributes"}</small></div></div>`}
      </section>
      <nav class="topic-pager" aria-label="Capability level navigation">
        ${previous ? `<a href="${levelHref(previous.id)}"><span>Previous level</span><strong>CL${previous.id} ${esc(previous.name)}</strong></a>` : `<span></span>`}
        ${next ? `<a class="next" href="${levelHref(next.id)}"><span>Next level</span><strong>CL${next.id} ${esc(next.name)}</strong></a>` : `<a class="next" href="#/aspice"><span>Return</span><strong>Capability overview</strong></a>`}
      </nav>
    `;
    return renderShell(`level-${level.id}`, `Capability Level ${level.id}`, `CL${level.id} ${level.name}`, level.summary, content, query);
  }

  function renderAttribute(id, query) {
    const attribute = attributeById.get(id) || attributes[0];
    const index = attributes.indexOf(attribute);
    const level = levels[attribute.level];
    const content = `
      <section class="attribute-hero" style="--level:${level.color}">
        <div><span>${attribute.code}</span><strong>${esc(attribute.name)}</strong></div>
        <a href="${levelHref(level.id)}">Capability Level ${level.id}: ${esc(level.name)}</a>
      </section>
      <section class="matrix-section">
        <div class="section-heading"><div><span>Attribute intent</span><h2>What it describes</h2></div></div>
        <p class="lead-copy">${esc(attribute.description)}</p>
      </section>
      <section class="question-evidence-grid">
        <div><div class="section-heading"><div><span>Assessment prompts</span><h2>Questions to ask</h2></div></div>${renderList(attribute.questions)}</div>
        <div><div class="section-heading"><div><span>Objective evidence</span><h2>Typical records</h2></div></div>${renderEvidence(attribute.evidence)}</div>
      </section>
      <section class="matrix-section relation-map">
        <div class="section-heading"><div><span>Cross references</span><h2>Connected attributes and guidance</h2></div></div>
        <div>
          ${attribute.related.map((relatedId) => { const related = attributeById.get(relatedId); return `<a href="${attributeHref(related.id)}"><span>${related.code}</span><strong>${esc(related.name)}</strong></a>`; }).join("")}
          ${attribute.id === "pa-1-1" ? `<a class="featured" href="#/aspice/workflow"><span>Applied flow</span><strong>Typical PA 1.1 workflow</strong></a>` : ""}
          ${["pa-1-1", "pa-2-2"].includes(attribute.id) ? `<a class="featured" href="#/aspice/work-products"><span>Lifecycle evidence</span><strong>V-model work products</strong></a>` : ""}
        </div>
      </section>
      <nav class="topic-pager" aria-label="Process attribute navigation">
        ${index > 0 ? `<a href="${attributeHref(attributes[index - 1].id)}"><span>Previous attribute</span><strong>${attributes[index - 1].code} ${esc(attributes[index - 1].name)}</strong></a>` : `<a href="#/aspice"><span>Return</span><strong>Capability overview</strong></a>`}
        ${index < attributes.length - 1 ? `<a class="next" href="${attributeHref(attributes[index + 1].id)}"><span>Next attribute</span><strong>${attributes[index + 1].code} ${esc(attributes[index + 1].name)}</strong></a>` : `<a class="next" href="#/aspice/workflow"><span>Applied guidance</span><strong>PA 1.1 workflow</strong></a>`}
      </nav>
    `;
    return renderShell(attribute.id, attribute.code, `${attribute.code} ${attribute.name}`, attribute.description, content, query);
  }

  function renderList(items) {
    return `<ul class="matrix-list">${items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>`;
  }

  function renderEvidence(items) {
    return `<div class="evidence-list">${items.map((item, index) => `<div><span>${String(index + 1).padStart(2, "0")}</span><strong>${esc(item)}</strong></div>`).join("")}</div>`;
  }

  function renderWorkflow(query) {
    const content = `
      <section class="workflow-callout"><strong>PA 1.1 asks whether the process works.</strong><span>The flow below can be applied to every process in the assessed V-model scope.</span></section>
      <section class="workflow-map" aria-label="Typical PA 1.1 workflow">
        ${workflowSteps.map(([number, title, detail], index) => `<div class="workflow-node flow-node-${index + 1}" style="--delay:${index}s"><span>${number}</span><strong>${esc(title)}</strong><small>${esc(detail)}</small></div>`).join("")}
      </section>
      <section class="matrix-section workflow-checks">
        <div class="section-heading"><div><span>Evidence test</span><h2>Three checks at every step</h2></div></div>
        <div><article><span>01</span><strong>Performed</strong><p>Can the team show that the activity happened?</p></article><article><span>02</span><strong>Connected</strong><p>Can inputs, decisions and outputs be traced?</p></article><article><span>03</span><strong>Accepted</strong><p>Was the result reviewed, agreed and retained?</p></article></div>
      </section>
      <section class="quick-links matrix-section"><a href="${attributeHref("pa-1-1")}"><span>Process attribute</span><strong>Return to PA 1.1</strong><small>Intent, assessment prompts and evidence</small></a><a href="#/aspice/work-products"><span>Apply to the lifecycle</span><strong>Open V-model work products</strong><small>Stage-specific outputs and archive expectations</small></a></section>
    `;
    return renderShell("workflow", "Applied guidance", "Typical PA 1.1 Workflow", "A repeatable path from approved inputs to retained closure evidence for any process in a V-model lifecycle.", content, query);
  }

  function renderWorkProducts(query) {
    const left = workProducts.slice(0, 6);
    const right = workProducts.slice(6, 11).reverse();
    const content = `
      <section class="v-work-map" aria-label="V-model work-product flow">
        <div class="v-work-column left">${left.map((row, index) => renderVWorkNode(row, index + 1)).join("")}</div>
        <div class="v-work-center"><span>Decompose</span><strong>Design and implementation</strong><i></i><span>Integrate and verify</span></div>
        <div class="v-work-column right">${right.map((row, index) => renderVWorkNode(row, 11 - index)).join("")}</div>
      </section>
      <section class="matrix-section">
        <div class="section-heading"><div><span>Lifecycle evidence</span><h2>Typical work products by stage</h2></div><p>Names are examples. The evidence may be distributed across controlled tools rather than stored in one document.</p></div>
        <div class="work-table-wrap"><table class="work-table"><thead><tr><th>V-model stage</th><th>Principal work item</th><th>Typical retained evidence</th></tr></thead><tbody>${workProducts.map((row) => `<tr><td><a href="#/process/${row[0]}">${esc(row[1])}</a></td><td>${esc(row[2])}</td><td>${esc(row[3])}</td></tr>`).join("")}</tbody></table></div>
      </section>
      <section class="matrix-section archive-band">
        <div class="section-heading"><div><span>Controlled retention</span><h2>Archive each approved work product with</h2></div></div>
        <div>${["Unique identifier and owner", "Version and revision history", "Draft, reviewed, approved or released status", "Review comments and approval evidence", "Baseline or release association", "Bidirectional traceability", "Related changes and problems", "Verification results and deviations", "Tool audit history or approved export"].map((item) => `<span>${esc(item)}</span>`).join("")}</div>
        <p>Retention periods come from customer, contractual, legal and organizational rules. Do not publish controlled or confidential evidence in a public repository.</p>
      </section>
      <section class="quick-links matrix-section"><a href="${attributeHref("pa-1-1")}"><span>Outcome evidence</span><strong>Connect to PA 1.1</strong><small>Show that process purpose and outcomes are achieved</small></a><a href="${attributeHref("pa-2-2")}"><span>Work-product control</span><strong>Connect to PA 2.2</strong><small>Identify, review, baseline and maintain outputs</small></a></section>
    `;
    return renderShell("work-products", "Applied guidance", "V-Model Work Products", "A practical map of principal work items, retained evidence and controlled archive expectations across the lifecycle.", content, query);
  }

  function renderVWorkNode(row, number) {
    return `<a href="#/process/${row[0]}"><span>${String(number).padStart(2, "0")}</span><strong>${esc(row[1])}</strong><small>${esc(row[2])}</small></a>`;
  }

  const searchEntries = [
    { title: "ASPICE Capability Matrix", detail: "Overview of levels and process attributes", href: "#/aspice", keywords: "overview capability assessment" },
    ...levels.map((level) => ({ title: `CL${level.id} ${level.name}`, detail: level.summary, href: levelHref(level.id), keywords: level.focus })),
    ...attributes.map((attribute) => ({ title: `${attribute.code} ${attribute.name}`, detail: attribute.description, href: attributeHref(attribute.id), keywords: `${attribute.questions.join(" ")} ${attribute.evidence.join(" ")}` })),
    { title: "Typical PA 1.1 Workflow", detail: "Approved inputs through retained closure evidence", href: "#/aspice/workflow", keywords: workflowSteps.flat().join(" ") },
    { title: "V-Model Work Products", detail: "Lifecycle outputs and archive expectations", href: "#/aspice/work-products", keywords: workProducts.flat().join(" ") }
  ];

  function renderRoute(hash, query) {
    if (hash.startsWith("#/aspice/level/")) return renderLevel(hash.replace("#/aspice/level/", ""), query);
    if (hash.startsWith("#/aspice/attribute/")) return renderAttribute(hash.replace("#/aspice/attribute/", ""), query);
    if (hash === "#/aspice/workflow") return renderWorkflow(query);
    if (hash === "#/aspice/work-products") return renderWorkProducts(query);
    return renderOverview(query);
  }

  window.AspiceMatrix = { renderRoute, searchEntries };
})();
