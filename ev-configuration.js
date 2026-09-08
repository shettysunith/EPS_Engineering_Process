/* Configuration review of the supplied Sys_Struct-Draft_1.jpg. */
window.EvConfiguration = (() => {
  const findings = [
    ["Retain", "System-to-component decomposition", "The six-in-one root, Master Spec, Arch/Design and component specifications are a useful starting point. The MCU, motor and gearbox branches already pair requirements with test specifications.", "Keep this backbone, with explicit product boundaries, artifact types and unique identifiers."],
    ["Clarify", "Product components and generic branches", "BSW, Mech Struct, Mech Thermal and Systems sit beside physical components. You confirmed that these are generic branches, without classification among the six components.", "Retain a shared-artifact area alongside the product tree. Reference common revisions from each applicable configuration rather than copying or assigning these branches to the six components."],
    ["Correct", "The orange ‘satisfies’ links", "Component SPEC arrows appear to point to Arch/Design. A lower-level requirement does not satisfy a design element.", "Use derived-from links between requirements; allocate requirements to architecture elements; use satisfies from a design element to a requirement. If SPEC contains design, split its requirement and design records."],
    ["Clarify", "Stakeholder and supplier inputs", "The top ‘Stakedoler’ branch lists component document stacks, but their authorship and relationship to Master Spec are unclear.", "Rename it Stakeholder inputs. Separate customer/vehicle needs from supplier component specifications; retain document revision, source, acceptance and links into the system requirements."],
    ["Add", "Artifact coverage for every component", "OBC, DC-DC and PDU have empty branches. MCU, motor and gearbox show SPEC and KPI records but no explicit implementation or results.", "Apply the common artifact pack below to all six components, tailored by discipline and make/buy responsibility."],
    ["Add", "Interfaces and operating behaviour", "No interface artifact is visible between the six components or at the vehicle boundary.", "Create internal/external interface records and mode/sequence models, with both endpoint owners, revisions and trace links to the associated requirements and designs."],
    ["Add", "Evidence beyond TestSpec", "The purple TestSpec artifacts represent planned checks. Executed results, tested versions and defects are not shown.", "Connect each verification case to execution evidence, the exact tested configuration and any problem record. Add system validation against stakeholder use cases."],
    ["Add", "Configuration and release control", "The drawing has no visible CI register, revision identifiers, baseline manifest or controlled change path.", "Add the proposed baseline envelope below so a released configuration can be reconstructed and its changes reviewed."],
    ["Correct", "Variant attributes", "The source sketch includes a 2-in-1 example. Your clarification defines IDT as Integrated Drive Train, with 3-, 4-, 5- and 6-in-one options, each supporting HP or LP.", "Use those four IDT values and two power classes. Define the component membership for 3/4/5-in-one separately; only the six-in-one boundary is confirmed. Keep power ratings in controlled requirements rather than inventing thresholds."],
    ["Add", "Cross-cutting assurance artifacts", "Safety, cybersecurity, diagnostics and reliability records are not visible.", "Add applicable analysis, requirement, design and verification records as shared artifacts; retain links to the requirements and configurations they address."],
  ];
  const branches = [
    ["01", "Inputs and product definition", "Stakeholder / vehicle requirements; supplier source records; system boundary and use cases; variant dictionary and applicability rules."],
    ["02", "System engineering", "System requirements (Master Spec); functional and physical architecture; modes and interactions; interface register; allocated performance budgets and design rationale."],
    ["03", "Product configuration", "Confirmed six-in-one: MCU • Motor • Gearbox • OBC • DC-DC • PDU. Each component references a versioned artifact pack. Define the selected component sets separately for 3-, 4- and 5-in-one."],
    ["04", "Generic shared artifacts", "BSW • Mechanical structure • Mechanical thermal • Systems. Keep these as generic branches, with no classification among the six components. Add shared-artifact revision and applicability references to each configuration. Systems can own the system-level artifacts in view 02 without making duplicate copies."],
    ["05", "Verification and assurance evidence", "Component and system verification cases/results; vehicle/use-case validation; safety and cybersecurity applicability/analysis; reliability and EMC evidence; defects and regression evidence, as applicable."],
  ];
  const packs = [
    ["Requirements & interfaces", "Allocated/derived requirements, interface endpoint definitions and acceptance criteria."],
    ["Parameters / KPI", "Metric ID, unit, limit/tolerance, operating condition, variant, budget owner and source requirement. Link calibrated values to software/hardware compatibility."],
    ["Architecture & design", "Relevant design models, schematics, drawings, algorithms and rationale; satisfaction links to requirements."],
    ["Implementation / supply", "Part number, BOM, source/build or CAD revision, supplier package and acceptance evidence as applicable."],
    ["Verification & results", "Cases, procedures, environment, test data, result records, reviewed coverage and open anomalies."],
    ["Release record", "Approved versions, applicability, compatibility, release decision and links to the enclosing baseline."],
  ];
  const links = [
    ["Requirement → source record", "sourced from", "System requirement → customer document clause and revision; supplier constraints remain distinguishable."],
    ["Child requirement → parent requirement", "derived from", "Component requirement → system requirement, with derivation rationale. Trace can be queried in both directions."],
    ["Requirement → architecture element", "allocated to", "System performance requirement → responsible component(s), with a budget or responsibility split."],
    ["Design element → requirement", "satisfies", "MCU control design → allocated torque-control requirement. A link expresses design intent; it is not proof of passing verification."],
    ["Verification case → requirement", "verifies", "Component/system check → acceptance criterion. Use case-level links, not only a whole TestSpec-to-SPEC link."],
    ["Result → case + tested configuration", "execution of / tested on", "Result references the exact case revision, DUT serial/build, software, calibration and environment."],
    ["Validation case → stakeholder need / use case", "validates", "Vehicle operating scenario → intended use and acceptance; retain execution evidence."],
    ["Interface record → both endpoints", "connects", "Identify producer/consumer or mating endpoints, ownership, units, limits, timing and revision compatibility."],
    ["Change / problem → affected items", "impacts / observed in", "Impact review covers requirements, design, interfaces, tests and released variants; retain resolution and retest links."],
    ["Baseline → CI + exact revision", "contains", "A frozen manifest pins every included artifact; product-to-component composition uses a separate part-of relation."],
  ];
  const table = (headers, rows) => `<div class="ev-table-scroll" tabindex="0" aria-label="Scrollable review table"><table class="ev-review-table"><thead><tr>${headers.map(h => `<th scope="col">${h}</th>`).join("")}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  return { render() { return `
    <div class="workspace-page ev-review">
      <div class="breadcrumb"><a href="#/home">Home</a><span>/</span><a href="#/organization-units">Organization Units</a><span>/</span><a href="#/organization-units/ev-power-train">EV power train</a><span>/</span><span>Configuration structure</span></div>
      <section class="ev-review-hero">
        <div class="ev-eyebrow">MOBILITY / EV POWER TRAIN <span>Draft for review</span></div>
        <h1>Configuration structure</h1>
        <a href="#/organization-units/ev-power-train/configuration-structure" style="color: #dfebf1">← View recreated structure</a>
        <p class="ev-lede">A review of the artifact hierarchy, its missing branches and the links needed to connect requirements to configuration evidence.</p>
        <div class="ev-verdict"><strong>Review verdict: a useful starting point, incomplete for a controlled release.</strong><p>The supplied diagram describes an artifact outline. Product composition, ownership, traceability semantics and the released configuration still need explicit definition.</p></div>
      </section>
      <div class="ev-review-columns">
        <aside class="ev-section-nav" aria-label="Review sections">
          <strong>IN THIS REVIEW</strong>
          <button type="button" data-ev-scroll="ev-findings">01 · Accuracy review</button>
          <button type="button" data-ev-scroll="ev-structure">02 · Proposed structure</button>
          <button type="button" data-ev-scroll="ev-links">03 · Traceability links</button>
          <button type="button" data-ev-scroll="ev-baseline">04 · Baseline & release</button>
          <button type="button" data-ev-scroll="ev-source">05 · Original & assumptions</button>
        </aside>
        <div class="ev-review-body">
          <section class="info-block" id="ev-findings"><div class="ev-section-kicker">01 / ACCURACY REVIEW</div><h2>What to retain, correct and add</h2>
            <p>Findings refer to what is visible in the attachment; an omitted branch may exist elsewhere. Recommendations below are a proposed project structure, not a compliance assessment.</p>
            <div class="ev-findings">${findings.map(([status,title,observation,action],i)=>`<details${i<3 ? " open" : ""}><summary><span class="ev-tag ev-tag-${status.toLowerCase()}">${status}</span><strong>${title}</strong></summary><div class="ev-finding-detail"><p><b>In the draft.</b> ${observation}</p><p><b>Recommendation.</b> ${action}</p></div></details>`).join("")}</div>
          </section>
          <section class="info-block" id="ev-structure"><div class="ev-section-kicker">02 / PROPOSED STRUCTURE</div><h2>One product configuration, connected artifact views</h2>
            <p>The physical product tree contains components. The views below organize their artifacts and evidence; they are not additional physical parts.</p>
            <div class="ev-variant-box"><strong>Confirmed variant model</strong><p><b>IDT — Integrated Drive Train:</b> 3-in-1 / 4-in-1 / 5-in-1 / 6-in-1<br><b>Power class (PF):</b> HP — High Power / LP — Low Power, for each IDT option.</p><p>Six-in-one membership is confirmed. Smaller configurations and numeric power ranges remain to be defined. Integration Test and Industrialization are excluded from this review as requested.</p></div>
            <div class="ev-tree-root"><strong>EV power train product configuration</strong><span>Product ID · variant · system boundary · baseline ID</span></div>
            <ol class="ev-artifact-tree">${branches.map(([n,title,body])=>`<li><span class="ev-tree-number">${n}</span><div><h3>${title}</h3><p>${body}</p></div></li>`).join("")}</ol>
            <h3>A common artifact pack for each component</h3>
            <p>Apply to MCU, motor, gearbox, OBC, DC-DC and PDU. For bought-in items, record supplier-controlled versions and acceptance evidence; mark unavailable design detail and the agreed evidence responsibility. Suggested software coverage within the relevant specifications includes application/control logic, bootloader, diagnostics and calibration; confirm what is already included in the generic BSW package.</p>
            <div class="ev-pack-grid">${packs.map(([title,body])=>`<article><h4>${title}</h4><p>${body}</p></article>`).join("")}</div>
            <details class="ev-extra"><summary>Suggested interface coverage</summary><p>MCU ↔ motor: phase power, position/temperature feedback and control assumptions. Motor ↔ gearbox: torque, speed, shaft and mounting. PDU ↔ MCU/OBC/DC-DC: HV distribution and protection, subject to the actual topology. Vehicle ↔ product: HV/LV power, communications/diagnostics, charging, mechanical mounts and coolant connections. Include electrical, logical, mechanical and thermal interface types as applicable.</p></details>
          </section>
          <section class="info-block" id="ev-links"><div class="ev-section-kicker">03 / TRACEABILITY LINKS</div><h2>Give each relationship a precise meaning</h2>
            <div class="ev-trace-chain" aria-label="Illustrative trace chain"><span>Stakeholder need</span><b aria-hidden="true">→</b><span>System requirement</span><b aria-hidden="true">→</b><span>Component requirement</span><b aria-hidden="true">→</b><span>Design + verification</span><b aria-hidden="true">→</b><span>Result + baseline</span></div>
            <p>This overview follows the engineering flow. The table defines the stored link direction. All relationships should support reverse lookup for impact and coverage review.</p>
            ${table(["From → to", "Relationship", "Proposed use"],links)}
            <p class="ev-reference">Terminology basis: OMG distinguishes requirement derivation, design satisfaction and verification relationships. <a href="https://www.omg.org/sysml/sysmlv1/" target="_blank" rel="noopener">OMG SysML overview ↗</a>. Other labels in this table are proposed project conventions.</p>
          </section>
          <section class="info-block" id="ev-baseline"><div class="ev-section-kicker">04 / BASELINE & RELEASE</div><h2>Wrap the hierarchy in configuration control</h2>
            <p class="ev-reference">Automotive SPICE 4.0 SUP.8 addresses item identification, properties, controlled changes, baselines, status, consistency and recovery. <a href="https://vda-qmc.de/wp-content/uploads/2023/12/Automotive-SPICE-PAM-v40.pdf" target="_blank" rel="noopener">VDA QMC reference, §4.8.2 ↗</a>. The following fields and release checks are tailored recommendations for this draft.</p>
            ${table(["Controlled record", "Proposed content"],[
              ["CI register", "Unique ID; artifact type; owner; repository/location; revision; lifecycle status; reviewer/approver; product/component; applicability; dependencies; linked change record."],
              ["Variant definition", "IDT = 3/4/5/6-in-one; power class = HP/LP; selected component IDs and generic artifact references; compatibility and exclusion rules; applicability on requirements, parts, software, calibration and cases."],
              ["Baseline manifest", "Baseline ID and purpose; pinned artifact revisions and link snapshot; included component versions; approval/date; evidence references; known deviations. Store immutable release copies or resolvable version references."],
              ["Execution configuration", "DUT ID/serial; HW/BOM revision; software build; calibration dataset; test case revision; bench/environment and tool versions; timestamp; raw data and reviewed result."],
              ["Change and release record", "Reason and impact; affected CIs/variants; decision owner; approved revisions; regression scope; closure evidence; release notes and recipients."],
              ["Repository controls", "Access roles; review rules; revision retention; branch/merge or checkout procedure; backup/restore owner and recorded recovery check."],
            ])}
            <h3>Proposed artifact baseline review</h3><ul class="clean-list"><li>Every included item resolves to an approved revision and an owner; variant membership and cross-component compatibility are checked.</li><li>Each in-scope requirement has reviewed allocation and verification coverage, or a documented exception. Broken links and stale evidence are resolved.</li><li>Verification and validation evidence identifies the tested baseline. Open problems and deviations have a disposition and release authority.</li><li>Shared BSW, mechanical structure, mechanical thermal and Systems references resolve to compatible revisions for the selected IDT and power class.</li></ul>
            <p><b>Keep status meanings separate.</b> The existing requirements workflow’s “Agreed” state means ready for implementation and testing. It does not mean implemented, verified or released. Link it to evidence and CI release status rather than overloading it.</p>
          </section>
          <section class="info-block" id="ev-source"><div class="ev-section-kicker">05 / ORIGINAL & ASSUMPTIONS</div><h2>Confirmed scope and remaining decisions</h2>
            <ul class="clean-list"><li><b>Confirmed:</b> MCU means Motor Control Unit in this review; the six-in-one boundary is MCU, motor, gearbox, OBC, DC-DC and PDU.</li><li><b>Confirmed:</b> IDT means Integrated Drive Train, with 3/4/5/6-in-one options; HP means High Power and LP means Low Power, selectable for each option.</li><li><b>Confirmed:</b> BSW, Mechanical structure, Mechanical thermal and Systems are generic branches; no division among the six components is proposed.</li><li><b>Excluded:</b> Integration Test and Industrialization, per your instruction. They remain visible only in the unchanged source image.</li><li><b>To define:</b> component sets for 3/4/5-in-one, power ranges, shared housing/controller boundaries, artifact owners, supplier evidence obligations and applicable assurance scope.</li></ul>
            <details class="ev-extra"><summary>View supplied configuration drawing</summary><p>Source: Sys_Struct-Draft_1.jpg. Preserved unchanged for comparison.</p><a href="assets/ev-power-train-configuration-source.jpg" target="_blank" rel="noopener">Open original at full size ↗</a><img class="ev-source-image" src="assets/ev-power-train-configuration-source.jpg" alt="Original draft: stakeholder inputs, a six-in-one system, MCU, motor and gearbox specifications with test links, followed by OBC, DC-DC, PDU, BSW, mechanical, systems, integration test and industrialization branches." loading="lazy"></details>
          </section>
        </div>
      </div>
    </div>`; }};
})();

document.addEventListener("click", event => {
  const link = event.target.closest("[data-ev-scroll]");
  if (!link) return;
  event.preventDefault();
  const section = document.getElementById(link.dataset.evScroll);
  if (section) { section.tabIndex = -1; section.focus({ preventScroll: true }); section.scrollIntoView({ block: "start" }); }
});
