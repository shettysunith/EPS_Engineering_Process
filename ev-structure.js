/* Recreated artifact structure. No actual engineering records or variant membership are fabricated. */
window.EvStructure = (() => {
  const components = [
    ["MCU", "Motor Control Unit"], ["Motor", "Electric motor"], ["Gearbox", "Gear reduction assembly"],
    ["OBC", "On-board charger"], ["DC-DC", "DC-DC converter"], ["PDU", "Power Distribution Unit"]
  ];
  const node = (kind, title, detail) => `<div class="es-node es-${kind}"><strong>${title}</strong><span>${detail}</span></div>`;
  const componentCard = ([id, name]) => `<article class="es-component">
    <header><h3>${id}</h3><p>${name}</p></header>
    <div class="es-component-pack">
      ${node("req", "SPEC", "Requirements · interface obligations")}
      ${node("param", "Parameters / KPI", "Units · limits · conditions · source requirement")}
      ${node("design", "Architecture / design", "Models · drawings · design rationale")}
      ${node("build", "Implementation / supply", "Part / BOM / build · supplier revision")}
      ${node("test", "TestSpec + cases", "Procedure · acceptance criteria")}
      ${node("result", "Results + release record", "Case revision · tested configuration · disposition")}
    </div>
    <footer>Versioned artifact pack · owner · IDT / PF applicability</footer>
  </article>`;
  return { render() { return `
    <div class="workspace-page es-page">
      <div class="breadcrumb"><a href="#/home">Home</a><span>/</span><a href="#/organization-units">Organization Units</a><span>/</span><a href="#/organization-units/ev-power-train">EV power train</a><span>/</span><span>Configuration structure</span></div>
      <header class="es-hero">
        <div class="es-eyebrow">EV POWER TRAIN <span>Draft · proposed structure</span></div>
        <h1>Artifact configuration structure</h1>
        <p>From stakeholder inputs to controlled component artifacts, shared engineering records and versioned evidence.</p>
        <a href="#/organization-units/ev-power-train/configuration-structure/review">Read the accuracy review and rationale →</a>
      </header>

      <section class="es-config" aria-labelledby="es-config-title">
        <div><h2 id="es-config-title">Product configuration</h2><p>Choose an IDT and power class to inspect the structure.</p></div>
        <div class="es-selectors">
          <label for="es-idt">IDT · Integrated Drive Train<select id="es-idt"><option value="3">3-in-1</option><option value="4">4-in-1</option><option value="5">5-in-1</option><option value="6" selected>6-in-1</option></select></label>
          <label for="es-pf">PF · Power class<select id="es-pf"><option value="">Select power class</option><option value="HP">HP · High Power</option><option value="LP">LP · Low Power</option></select></label>
        </div>
      </section>
      <div class="es-variant-state" id="es-variant-state" aria-live="polite">6-in-1: all six component members are confirmed. Select HP or LP; numeric power ranges remain to be defined.</div>

      <div class="es-legend" aria-label="Artifact color legend"><span class="es-key-req">Requirements</span><span class="es-key-design">Design</span><span class="es-key-test">Verification</span><span class="es-key-result">Evidence</span><span class="es-key-shared">Shared artifacts</span></div>

      <section class="es-diagram" aria-label="Proposed EV power train artifact hierarchy">
        <div class="es-tier-label">01 / INPUT SOURCES</div>
        <div class="es-inputs">
          ${node("input", "Stakeholder / vehicle inputs", "Customer needs · use cases · source clauses and revisions")}
          ${node("input", "Supplier source documents", "MCU · motor · gearbox · OBC · DC-DC · PDU inputs, where applicable")}
        </div>
        <div class="es-connector">↓ <span>source references + requirement derivation</span></div>
        <div class="es-root"><span>CONTROLLED PRODUCT CONFIGURATION</span><h2>EV power train <b id="es-root-variant">6-in-1</b></h2><p>Product ID · selected component set · shared artifact references · baseline ID</p></div>

        <div class="es-system-scope">
          <div class="es-section-title"><span>02 / SYSTEM ARTIFACTS</span><p>Owned through the generic Systems branch; referenced here without duplicate copies.</p></div>
          <div class="es-system-grid">
            ${node("req", "Master Spec", "System requirements · acceptance criteria · source links")}
            ${node("design", "Architecture / design", "Functions · physical elements · modes · design rationale")}
            ${node("design", "Interface register", "Internal / external endpoints · contracts · revisions")}
            ${node("param", "System parameters / KPI", "Performance budgets · units · limits · operating conditions")}
            ${node("test", "System TestSpec + cases", "Requirement-level verification procedures and criteria")}
            ${node("result", "System evidence", "Executed results · tested baseline · validation against use cases")}
          </div>
          <p class="es-system-relations"><b>Design → satisfies → Master Spec</b><span>Test cases → verifies → Master Spec</span><span>Results → execution of → test case revision</span></p>
        </div>

        <div class="es-connector">↓ <span>requirement allocation + product decomposition</span></div>
        <div class="es-section-title es-components-title"><span>03 / COMPONENT ARTIFACTS</span><h2 id="es-components-heading">Six-in-one component structure</h2><p id="es-components-note">All six components are members of this configuration. Each has the same complete artifact pattern, tailored to its engineering scope.</p></div>
        <div class="es-components">${components.map(componentCard).join("")}</div>
        <p class="es-diagram-note">Component cards contain artifact records, not sequential workflow steps. Tailor implementation evidence for mechanical, electrical and software scope; use accepted supplier evidence for bought-in items.</p>

        <div class="es-shared-scope">
          <div class="es-section-title"><span>04 / GENERIC SHARED BRANCHES</span><h2>Common engineering artifacts</h2><p>Independent of the six-component classification. Each configuration references compatible shared revisions.</p></div>
          <div class="es-shared-grid">
            ${node("shared", "BSW", "Generic software package · configuration · version · verification references")}
            ${node("shared", "Mechanical structure", "Common structure / packaging models · drawings · analyses")}
            ${node("shared", "Mechanical thermal", "Common thermal models · boundary conditions · analyses")}
            ${node("shared", "Systems", "Master Spec · architecture · interfaces · system budgets and evidence")}
          </div>
          <p>Each shared branch retains its own ID, owner and revision. Applicable safety, cybersecurity, diagnostics, reliability and EMC records link to the requirements and configurations they address.</p>
        </div>

        <div class="es-baseline-scope">
          <div class="es-section-title"><span>05 / CONFIGURATION CONTROL</span><h2>Baseline manifest</h2><p>One controlled manifest pins the versions across the whole structure above.</p></div>
          <div class="es-baseline-grid"><div><strong>Configuration items</strong><p>CI ID · owner · revision · status · location</p></div><div><strong>Applicability</strong><p>IDT · HP / LP · dependencies · compatibility</p></div><div><strong>Evidence</strong><p>Case + result revisions · tested HW/SW/calibration</p></div><div><strong>Change and release</strong><p>Impact · approval · deviations · release record</p></div></div>
          <p class="es-baseline-foot">Contains → exact artifact revisions and a trace-link snapshot. Approved requirement status is separate from verification and artifact release status.</p>
        </div>
      </section>

      <section class="es-links" aria-labelledby="es-links-title"><div class="es-section-title"><span>TRACEABILITY / LINK DIRECTIONS</span><h2 id="es-links-title">How the artifacts connect</h2><p>Read each row left to right. Reverse lookup supports impact and coverage review.</p></div>
        <div class="es-link-rows">
          ${[
            ["System requirement", "sourced from", "Stakeholder / supplier record"],
            ["Component requirement", "derived from", "System requirement"],
            ["System requirement", "allocated to", "Responsible architecture element"],
            ["Design element", "satisfies", "System / component requirement"],
            ["Test case", "verifies", "System / component requirement"],
            ["Result", "execution of / tested on", "Case revision + tested configuration"],
            ["Validation evidence", "supports acceptance of", "Stakeholder need / use case"],
            ["Parameter / KPI", "quantifies", "Requirement + operating condition"],
            ["Interface record", "connects", "Both endpoint elements"],
            ["Product configuration", "references", "Generic shared artifact revision"],
            ["Baseline manifest", "contains", "Configuration item + exact revision"],
            ["Change / problem", "impacts / observed in", "Affected artifacts / configuration"]
          ].map(([from,relation,to])=>`<div class="es-link-row"><strong>${from}</strong><span>— ${relation} →</span><strong>${to}</strong></div>`).join("")}
        </div>
        <p class="es-link-note">“Satisfies” represents design intent; an executed and reviewed result provides verification evidence. Relationships are made at requirement, design-element and case level, rather than only between whole documents.</p>
      </section>
      <footer class="es-scope"><strong>Draft scope</strong><p>Six-in-one membership and the generic branches follow your clarification. Component membership for 3/4/5-in-one and numeric HP/LP limits still need definition. Integration Test and Industrialization are excluded.</p><a href="#/organization-units/ev-power-train/configuration-structure/review">Review findings, assumptions and references →</a></footer>
      <section class="es-complete" aria-labelledby="es-complete-title">
        <div class="es-section-title"><span>COMPLETE STRUCTURE / DIAGRAM</span><h2 id="es-complete-title">The full configuration at a glance</h2><p>Six-in-one reference diagram, including every artifact branch and the traceability relationships. This overview stays on the confirmed six-in-one structure regardless of the selectors above.</p></div>
        <p><a href="assets/ev-power-train-complete-structure.svg" target="_blank" rel="noopener">Open full-size diagram ↗</a> <span aria-hidden="true"> · </span> <a href="assets/ev-power-train-complete-structure.svg" download>Download SVG</a></p>
        <a href="assets/ev-power-train-complete-structure.svg" target="_blank" rel="noopener" aria-label="Open complete EV power train structure diagram at full size"><img src="assets/ev-power-train-complete-structure.svg" width="1600" height="2200" alt="Complete six-in-one artifact hierarchy: stakeholder and supplier inputs, system specifications and design, all six component artifact packs, four generic shared branches, baseline control and twelve typed traceability relationships."></a>
      </section>
    </div>`; }};
})();

document.addEventListener("change", event => {
  if (!["es-idt", "es-pf"].includes(event.target.id)) return;
  const idt = document.getElementById("es-idt").value;
  const pf = document.getElementById("es-pf").value;
  document.getElementById("es-root-variant").textContent = `${idt}-in-1${pf ? ` · ${pf}` : ""}`;
  document.getElementById("es-variant-state").textContent = `${idt}-in-1${pf ? ` / ${pf === "HP" ? "High Power" : "Low Power"}` : ""}: ${idt === "6" ? "all six component members are confirmed." : "component membership is not yet defined; the six cards below are a reference catalog, not the selected configuration."} ${pf ? "Numeric power ranges remain to be defined." : "Select HP or LP; numeric power ranges remain to be defined."}`;
  document.getElementById("es-components-heading").textContent = idt === "6" ? "Six-in-one component structure" : "Component reference catalog — selection pending";
  document.getElementById("es-components-note").textContent = idt === "6" ? "All six components are members of this configuration. Each has the same complete artifact pattern, tailored to its engineering scope." : `Define which components belong to ${idt}-in-1 before creating its baseline. No component inclusion is implied by this catalog.`;
});
