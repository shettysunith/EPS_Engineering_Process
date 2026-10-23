(function () {
  const gates = [
    {
      code: "G0",
      title: "Opportunity Screen",
      stage: "Outside the gated funnel",
      color: "#6d7f99",
      owner: "Product Management & Sales",
      support: "Engineering · Finance · PMO · Legal / Strategy",
      definition: "Qualify the opportunity and secure business approval to enter the gated product-development funnel.",
      entry: ["Lead logged", "Voice of customer and market inputs", "Strategic-fit request"],
      deliverables: ["Project charter", "Lead and opportunity qualification", "Voice of customer", "Market analysis and sizing (TAM/SAM/SOM)", "Target customer and pricing hypothesis", "Competitive and win-loss analysis", "Value proposition and USP", "Business case", "Make vs buy / M&A", "High-level product architecture and cost", "Risk register", "Project schedule"],
      exit: ["Market size clears the agreed threshold", "Strategic fit confirmed", "No fatal flaw remains", "Funding approved"],
      questions: ["Is the opportunity worth pursuing?", "Is the market large enough?", "Do we have the right to win?", "Are there any fatal flaws?"],
      metrics: ["TAM/SAM against threshold", "Strategic-fit score", "Fatal-flaw risks (target: 0)"],
      activities: ["Run voice-of-customer discussions with target users.", "Size the market and test the strategic fit.", "Compare competitors and make-vs-buy options.", "Frame the value proposition, business case, cost, risks, and schedule."],
      outputs: ["Approved opportunity", "Business case decision record", "Charter and initial schedule", "Baseline input package for G1"],
      decision: "Approve → funnel",
      example: "For a 120 kW SiC EV fast charger, confirm fleet and highway operator demand, Indian grid conditions, ambient-temperature constraints, and a credible right to win before funding concept work."
    },
    {
      code: "G1",
      title: "Product Conceptualization",
      stage: "Development",
      color: "#347fbd",
      owner: "PMO",
      support: "R&D · Marketing · Finance · Product Management",
      definition: "Convert the approved opportunity into a feasible product concept and a credible capex view.",
      entry: ["Approved business case", "Architecture intent", "Capex estimate", "Mission profile"],
      deliverables: ["Final product architecture", "Feature-versus-cost analysis", "Completed mission profile", "Manufacturing-location identification", "High-level capex inputs"],
      exit: ["Concept is technically and commercially feasible", "Capex sits within the approved envelope", "Target cost is set", "Requirements are baselined"],
      questions: ["Is the concept technically and commercially feasible?", "Is the capex justified?"],
      metrics: ["Concept maturity", "Target cost versus market price", "Capex confidence"],
      activities: ["Finalize the product architecture.", "Balance features against target cost.", "Complete the mission profile and manufacturing-location assessment.", "Refine capex inputs and baseline the requirements."],
      outputs: ["Frozen product concept", "Baselined requirements", "High-level capex view", "Concept decision record for design work"],
      decision: "Go",
      example: "The charger concept becomes the design baseline, with the architecture, feature-cost trade-offs, mission profile, manufacturing location, and capex view aligned."
    },
    {
      code: "G2",
      title: "Design Freeze",
      stage: "Development",
      color: "#c81560",
      owner: "PMO",
      support: "Quality · R&D · Product Management · Procurement",
      definition: "Freeze a validated, buildable design with clear verification, safety, reliability, and documentation evidence.",
      entry: ["Architecture pack", "Engineering prototype", "Test plans", "Measurement-system analysis", "Functional-safety and reliability plans", "Controlled documentation"],
      deliverables: ["Architecture freeze", "Design release", "Engineering prototype", "EDVT / DVT / regulatory plans and results", "Measurement-system analysis", "Functional safety", "Reliability test plan", "QIG, manuals, labels, packing, and identification documentation"],
      exit: ["Architecture frozen with no open Class-A change", "Prototype meets key specifications", "Verification plans are baselined", "DFMEA is closed"],
      questions: ["Is the design frozen and buildable?", "Are the remaining risks understood?"],
      metrics: ["Design-freeze completeness", "Cost versus feature", "DV-plan readiness"],
      activities: ["Freeze the architecture and release the design.", "Build and assess the engineering prototype.", "Complete EDVT, DVT, regulatory, functional-safety, and reliability planning.", "Close DFMEA actions and control the product documentation."],
      outputs: ["Frozen design baseline", "Approved verification plan", "Prototype evidence", "Controlled design and documentation package"],
      decision: "Conditional Go",
      example: "The charger design moves into validation once architecture and design release are controlled, with any remaining EMI margin treated as an explicit action."
    },
    {
      code: "G3",
      title: "Validation Sign-off",
      stage: "Development",
      color: "#32a2d0",
      owner: "PMO",
      support: "R&D · Manufacturing · SCM · Quality · Product Management",
      definition: "Prove that the design works across its intended envelope and release the pilot with supply and compliance evidence.",
      entry: ["Pre-pilot samples", "PDVT results", "DFM / DFA analysis", "Pre-compliance results", "Supplier and safety inputs"],
      deliverables: ["Pre-pilot samples", "PDVT", "DFM / DFA", "Safety and EMI-EMC pre-compliance", "Field-test plan", "Cybersecurity", "Safety review", "Supplier contracts", "Value-engineering activities", "Pilot design release", "Capex proposal"],
      exit: ["DV and PDVT pass", "Pre-compliance is cleared", "DFM / DFA is closed", "Suppliers are contracted", "Pilot design is released"],
      questions: ["Has the design been validated across the operating envelope?", "Is the compliance evidence solid?", "Is supply secured?"],
      metrics: ["DV pass rate", "MTTF / MTBF versus target", "Pre-compliance status"],
      activities: ["Develop and test pre-pilot samples.", "Complete PDVT, DFM/DFA, field, safety, cybersecurity, and pre-compliance work.", "Secure suppliers and run value-engineering activities.", "Release the pilot design and submit the capex proposal."],
      outputs: ["Validation evidence", "Compliance and safety record", "Released pilot design", "Supplier and capex readiness package"],
      decision: "Go",
      example: "Validated charger samples, compliance evidence, supplier contracts, and a released pilot design provide the handover into production preparation."
    },
    {
      code: "G4",
      title: "Production Readiness",
      stage: "Development",
      color: "#82439d",
      owner: "PMO",
      support: "Manufacturing · SCM · R&D · Quality · Product Management",
      definition: "Prove that the production line and supply chain can deliver the product at the required rate, cost, and quality.",
      entry: ["Pilot on production tooling", "Certification tests", "Pilot-run data", "FPY review", "Service documentation", "Scrubbed BOM"],
      deliverables: ["Capex purchase", "Pilot sample", "Compliance and DVT tests", "Pilot production", "First-pass-yield review", "Service training and manuals", "Field trials", "Reliability results", "BOM scrubbing", "Component-risk dashboard"],
      exit: ["Pilot quality meets target", "Full certification is complete", "The process is capable (Cpk)", "PPAP is ready", "Service is ready"],
      questions: ["Can we make the product at the required rate, cost, and quality?", "Is service ready?"],
      metrics: ["First-pass yield", "Cpk", "PPAP status", "Adherence to quality goals"],
      activities: ["Purchase and qualify the line, tooling, and other capex.", "Run pilot production and review FPY, DVT, compliance, and reliability results.", "Scrub the BOM and close component risks.", "Train service teams and complete field trials and service manuals."],
      outputs: ["Pilot lot evidence", "FPY, Cpk, and PPAP evidence", "Service-readiness package", "Production-readiness decision record"],
      decision: "Go",
      example: "The charger line demonstrates capable production with pilot data, certification, PPAP, service training, and a controlled BOM."
    },
    {
      code: "G5",
      title: "Launch / SOP",
      stage: "Series production",
      color: "#1fa564",
      owner: "Operations + Marketing",
      support: "Manufacturing · Quality · R&D · SCM · Product Management",
      definition: "Ramp to stable series production, complete the commercial launch, and ship the product at scale.",
      entry: ["Ramp plan", "Go-to-market and launch plan", "Channel and distribution-centre readiness", "RPA manuals"],
      deliverables: ["Series production", "Product demos and exhibitions", "Launch activities", "RPA manuals", "Units shipped to distribution centres"],
      exit: ["SOP achieved with sustained rate and yield", "Quality is stable", "Distribution centres are ready", "The business case is re-confirmed"],
      questions: ["Is the product ready to launch and ship at scale?", "Is the business case still valid?"],
      metrics: ["Production stability", "Launch readiness", "Order booking"],
      activities: ["Ramp series production and monitor stable rate and yield.", "Complete product demonstrations and launch activities.", "Release RPA manuals and coordinate shipments to distribution centres.", "Reconfirm the business case and commercial readiness."],
      outputs: ["SOP record", "Launch and channel-readiness evidence", "RPA manuals", "Shipment and commercial launch record"],
      decision: "Go (SOP)",
      example: "The charger reaches stable series production, launches through the planned channels, and ships to distribution centres with the commercial case re-confirmed."
    }
  ];

  const gateById = new Map(gates.map((gate) => [gate.code.toLowerCase(), gate]));
  const esc = (value) => String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  const href = (id) => `#/phases-and-milestones/${id}`;

  function list(items) {
    return `<ul class="gate-list">${items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>`;
  }

  function table(title, eyebrow, items) {
    return `<section class="maturity-section gate-section"><div class="section-heading"><span>${esc(eyebrow)}</span><h2>${esc(title)}</h2></div><div class="maturity-table-scroll"><table class="maturity-table"><thead><tr><th>Item</th><th>Gate evidence</th></tr></thead><tbody>${items.map((item) => `<tr><td><strong>${esc(item.label)}</strong></td><td>${esc(item.value)}</td></tr>`).join("")}</tbody></table></div></section>`;
  }

  function nav(active) {
    return `<nav class="maturity-local-nav gate-local-nav" aria-label="Stage gates">${gates.map((gate) => `<a class="${gate.code.toLowerCase() === active ? "active" : ""}" href="${href(gate.code.toLowerCase())}" style="--maturity-color:${gate.color}"><strong>${gate.code}</strong><span>${esc(gate.title)}</span></a>`).join("")}</nav>`;
  }

  function renderDetail(gate) {
    const index = gates.indexOf(gate);
    const previous = index > 0 ? gates[index - 1] : null;
    const next = index < gates.length - 1 ? gates[index + 1] : null;
    const evidence = [
      { label: "Entry", value: gate.entry.join(" · ") },
      { label: "Exit", value: gate.exit.join(" · ") },
      { label: "Review questions", value: gate.questions.join(" · ") },
      { label: "Performance metrics", value: gate.metrics.join(" · ") },
      { label: "Accountable owner", value: gate.owner },
      { label: "Supporting functions", value: gate.support }
    ];
    return `<div class="maturity-page gate-page" style="--maturity-color:${gate.color}">
      <div class="breadcrumb"><a href="#/phases-and-milestones">Phases and Milestones</a><span>/</span><span>${gate.code}</span></div>
      <header class="maturity-detail-hero"><div class="maturity-code">${gate.code}</div><div><span>${esc(gate.stage)}</span><h1>${esc(gate.title)}</h1><p>${esc(gate.definition)}</p></div></header>
      <div class="template-notice gate-notice"><strong>Stage-gate reference</strong><span>Content is transcribed and structured from the supplied EPS stage-gate slides. Decision thresholds remain subject to the approved Finance and Quality governance.</span></div>
      <div class="maturity-detail-layout">${nav(gate.code.toLowerCase())}<main class="maturity-content">
        <section class="maturity-section"><div class="section-heading"><span>Purpose</span><h2>Gate definition</h2></div><p class="maturity-definition">${esc(gate.definition)}</p><div class="maturity-decision-box"><strong>Decision path</strong><span>${esc(gate.decision)}</span><span>Hold</span><span>Recycle</span><span>Kill</span></div></section>
        ${table("Entry, exit, and performance criteria", "Governance", evidence)}
        <section class="maturity-section"><div class="section-heading"><span>Execution</span><h2>Required work and actions</h2></div>${list(gate.activities)}</section>
        <section class="maturity-section"><div class="section-heading"><span>Evidence</span><h2>Mandatory deliverables</h2></div>${list(gate.deliverables)}</section>
        <section class="maturity-section"><div class="section-heading"><span>Output</span><h2>Decision outputs</h2></div>${list(gate.outputs)}</section>
        <section class="maturity-section"><div class="section-heading"><span>Example journey</span><h2>Illustrative product context</h2></div><p class="maturity-definition">${esc(gate.example)}</p></section>
        <nav class="maturity-pager" aria-label="Adjacent gates">${previous ? `<a href="${href(previous.code.toLowerCase())}"><small>Previous</small><strong>${previous.code} - ${esc(previous.title)}</strong></a>` : `<a href="#/phases-and-milestones"><small>Return</small><strong>Phases and Milestones</strong></a>`}${next ? `<a href="${href(next.code.toLowerCase())}"><small>Next</small><strong>${next.code} - ${esc(next.title)}</strong></a>` : `<a href="#/phases-and-milestones"><small>Complete</small><strong>Return to phases and milestones</strong></a>`}</nav>
      </main></div></div>`;
  }

  const searchEntries = gates.map((gate) => ({ title: `${gate.code} - ${gate.title}`, detail: `${gate.stage} gate, entry and exit criteria, deliverables, actions, and decision evidence`, keywords: `${gate.definition} ${gate.deliverables.join(" ")} ${gate.outputs.join(" ")}`, href: href(gate.code.toLowerCase()) }));
  window.GateMap = { gates, renderRoute(hash) { const id = hash.replace("#/phases-and-milestones/", "").split(/[/?]/)[0].toLowerCase(); return renderDetail(gateById.get(id) || gates[0]); }, searchEntries };
})();
