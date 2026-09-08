/* Proposed review questions matched to the exact output names in maturity.js. */
window.ReviewQuestions = {
  "Opportunity statement": [
    "Is the customer or user problem stated clearly enough to distinguish it from a proposed solution?",
    "Is the target user or customer segment identified?",
    "Is the intended value supported by a cited opportunity signal or customer observation?",
    "Are the opportunity scope and exclusions stated?",
    "Are the initial constraints and urgency consistent with the available evidence?"
  ],
  "Assumption and question log": [
    "Are assumptions clearly distinguished from verified facts?",
    "Does each material assumption identify its supporting source or the evidence still needed?",
    "Are the questions prioritized by their impact on the opportunity decision?",
    "Does each priority question have an accountable owner and target resolution date?",
    "Is a method for validating or rejecting each critical assumption defined?"
  ],
  "Screening decision": [
    "Does the record state whether the opportunity proceeds to business-case evaluation?",
    "Are the screening criteria and supporting evidence identified?",
    "Is the decision rationale consistent with the opportunity statement and known constraints?",
    "Are conditions for proceeding or reconsidering the opportunity explicit?",
    "Has the authorized decision maker recorded the decision and date?"
  ],
  "Approved business case": [
    "Is the proposed value supported by documented customer or market evidence?",
    "Are lifecycle cost and investment estimates accompanied by their assumptions?",
    "Are the delivery schedule and resource estimates supported by feasibility evidence?",
    "Has the sensitivity of the business outcome to major assumptions been evaluated?",
    "Are approval conditions and funding authority recorded?"
  ],
  "Project charter": [
    "Are project objectives expressed with measurable success criteria?",
    "Are the scope, exclusions and principal deliverables agreed?",
    "Are governance roles and decision authorities named?",
    "Are the main milestones consistent with the approved business case?",
    "Are key dependencies and escalation arrangements defined?"
  ],
  "Initial risk register": [
    "Are material business, technical, schedule and supply risks captured?",
    "Is each risk described with its cause and potential consequence?",
    "Are likelihood and impact rated using an agreed assessment method?",
    "Does each significant risk have an owner and treatment plan?",
    "Are escalation triggers and the next review date defined?"
  ],
  "Selected product concept": [
    "Does the selected concept address the approved business need?",
    "Were feasible alternatives compared using documented selection criteria?",
    "Is the selection rationale supported by technical feasibility evidence?",
    "Are the principal operating scenarios and product boundaries described?",
    "Are unresolved concept assumptions assigned for confirmation before requirements baselining?"
  ],
  "High-level product architecture": [
    "Are the major product elements and their responsibilities identified?",
    "Is the system boundary distinguished from the external environment?",
    "Are external interfaces and dependencies identified?",
    "Does the architecture support the selected concept and principal operating scenarios?",
    "Are major architectural constraints and trade-offs documented?"
  ],
  "Feature, cost, and mission-profile targets": [
    "Are the target features prioritized against stakeholder needs?",
    "Are cost targets stated with their scope and estimating assumptions?",
    "Does the mission profile describe the relevant usage and environmental conditions?",
    "Are measurable limits and units defined for the performance targets?",
    "Are target conflicts and feasibility concerns resolved or explicitly assigned for resolution?"
  ],
  "System requirements baseline": [
    "Are all agreed stakeholder needs and applicable constraints addressed by the baseline?",
    "Are individual requirements unambiguous and uniquely identified?",
    "Do requirements contain measurable acceptance criteria or another defined verification basis?",
    "Have requirement conflicts and feasibility concerns been assessed?",
    "Is the approved requirement set frozen at an identifiable baseline revision?"
  ],
  "Verification strategy": [
    "Are verification levels and methods defined for the in-scope requirements?",
    "Are the required environments, equipment and supporting data identified?",
    "Are verification responsibilities and independence needs assigned?",
    "Are entry, exit and acceptance criteria defined for each planned verification level?",
    "Does the strategy address schedule dependencies and regression after changes?"
  ],
  "Requirements traceability baseline": [
    "Does each in-scope stakeholder need link to the system requirements that address it?",
    "Does each system requirement identify its source or derivation rationale?",
    "Are system requirements connected to their planned verification methods or measures?",
    "Have orphaned, broken and inconsistent links been reviewed and dispositioned?",
    "Are the requirement revisions and trace relationships reproducible for this baseline?"
  ],
  "System architecture baseline": [
    "Are system elements and their responsibilities defined?",
    "Is requirement allocation to architecture elements complete for the baseline scope?",
    "Are system modes and dynamic interactions described?",
    "Are architecture decisions supported by analysis and recorded rationale?",
    "Are the architecture and referenced interface revisions consistent?"
  ],
  "Allocated discipline requirements": [
    "Does each allocated requirement identify its parent system requirement or design constraint?",
    "Has the receiving discipline accepted ownership of each allocation?",
    "Are allocated performance budgets consistent with the system targets?",
    "Are discipline requirements verifiable at the intended level?",
    "Have gaps or conflicts across software, hardware and mechanical allocations been resolved?"
  ],
  "Interface baseline": [
    "Are internal and external interfaces uniquely identified?",
    "Are both endpoint owners identified for each interface?",
    "Are relevant data, electrical, mechanical and thermal characteristics specified?",
    "Are timing, units, tolerances and failure behaviour defined where applicable?",
    "Have affected endpoint owners approved compatible interface revisions?"
  ],
  "Software design baseline": [
    "Does the software architecture address the allocated software requirements?",
    "Are component interfaces and execution behaviour defined?",
    "Is detailed design sufficient to support unit implementation and verification?",
    "Have resource, timing and concurrency constraints been analysed?",
    "Are software design deviations explicitly assessed and accepted for implementation?"
  ],
  "Hardware design baseline": [
    "Is the hardware design traceable to allocated requirements?",
    "Are schematics, component selections and relevant interface definitions consistent?",
    "Do design analyses cover critical electrical, thermal and tolerance constraints?",
    "Are manufacturing and verification constraints incorporated in the released design?",
    "Are the approved design revisions sufficient to reproduce the intended hardware build?"
  ],
  "Mechanical design baseline": [
    "Is the mechanical design traceable to its allocated requirements?",
    "Are materials, dimensions and tolerances specified for the intended sample build?",
    "Are mating interfaces and packaging constraints consistent with the interface baseline?",
    "Are critical structural and thermal assumptions supported by analysis?",
    "Are sample-build acceptance criteria defined?"
  ],
  "Implemented units and samples": [
    "Are all planned units and samples present for the agreed implementation scope?",
    "Can each delivered unit or sample be identified by its build or part revision?",
    "Does each delivered item correspond to the approved design baseline?",
    "Are build records sufficient to reproduce or identify the delivered configuration?",
    "Are deviations from the planned implementation visible to the receiving integration owner?"
  ],
  "Unit verification evidence": [
    "Does the evidence identify the exact unit revision that was verified?",
    "Are applicable reviews, static checks and unit tests recorded?",
    "Are actual results compared against defined acceptance criteria?",
    "Is coverage against the intended unit design or requirements reviewed?",
    "Are failed checks linked to tracked defects and subsequent retest evidence?"
  ],
  "Implementation issue status": [
    "Does the status report include all known unresolved implementation defects?",
    "Is the affected unit or build revision identified for each defect?",
    "Are severity and integration impact assessed?",
    "Are containment actions defined for defects that remain open?",
    "Has the integration owner accepted the stated restrictions on using affected units?"
  ],
  "Integrated product baseline": [
    "Does the baseline identify every integrated element and its exact revision?",
    "Are included elements consistent with the approved integration scope?",
    "Are hardware, software and calibration versions compatible?",
    "Can the integrated configuration be reconstructed from controlled references?",
    "Are interface deviations and configuration restrictions recorded?"
  ],
  "Integration test report": [
    "Does the report identify the integrated product configuration under test?",
    "Are the executed tests traceable to the planned interface and interaction coverage?",
    "Are test conditions and environment versions recorded?",
    "Do results state actual outcomes against acceptance criteria?",
    "Are failures and omitted tests linked to defects or justified deviations?"
  ],
  "Resolved integration issues": [
    "Does each closed issue identify its affected configuration and resolution?",
    "Is closure supported by reviewed retest or other verification evidence?",
    "Has regression impact on neighbouring interfaces or components been assessed?",
    "Are accepted residual actions distinguished from verified closures?",
    "Has the responsible authority accepted any residual restrictions before qualification?"
  ],
  "Qualification and validation report": [
    "Does the report identify the exact qualified product baseline?",
    "Is coverage demonstrated against requirements and intended-use scenarios?",
    "Are relevant operating and environmental conditions represented?",
    "Are results supported by identifiable execution evidence?",
    "Are deviations and failures assessed for their effect on product acceptance?"
  ],
  "Validation sign-off": [
    "Does the sign-off identify the product configuration being accepted?",
    "Is the acceptance decision supported by the qualification and validation report?",
    "Are residual risks and use restrictions explicitly stated?",
    "Are approval conditions and their closure criteria defined?",
    "Has the authorized product or decision authority signed and dated the acceptance?"
  ],
  "Residual issue plan": [
    "Does the plan capture all remaining issues relevant to production readiness?",
    "Does each issue have an accountable owner and due date?",
    "Is the production or customer impact of each issue assessed?",
    "Are interim containment and escalation arrangements defined?",
    "Are closure evidence and approval criteria specified for each remaining action?"
  ],
  "Production readiness approval": [
    "Is readiness supported by manufacturing, supply and pilot-build evidence?",
    "Are capacity and material availability adequate for the planned production entry?",
    "Are quality controls and unresolved pilot-build issues dispositioned?",
    "Are readiness conditions and any production restrictions explicit?",
    "Has the authorized operations authority approved the readiness decision?"
  ],
  "Released production definition": [
    "Is the production BOM consistent with the approved product baseline?",
    "Are manufacturing instructions released at controlled revisions?",
    "Are inspection and end-of-line acceptance limits defined?",
    "Are packaging and identification requirements included?",
    "Can the released definition identify the correct product, process and inspection revisions for production?"
  ],
  "Service and support readiness": [
    "Is service information available for the released product configuration?",
    "Are diagnostic tools and procedures ready for the intended support scope?",
    "Have the required service and support personnel completed planned training?",
    "Are spare-part and repair arrangements established where applicable?",
    "Are customer support ownership and escalation routes operational?"
  ],
  "SOP authorization": [
    "Does the authorization identify the product and production configuration released for SOP?",
    "Is the effective SOP date aligned with the approved launch plan?",
    "Are prerequisite production-readiness conditions closed or explicitly accepted?",
    "Are remaining launch restrictions and escalation triggers stated?",
    "Has the authorized decision maker recorded approval to start production?"
  ],
  "Operations handover": [
    "Are operational responsibilities explicitly accepted by receiving owners?",
    "Are required product and production records accessible to operations?",
    "Are open risks and remaining actions transferred with ownership?",
    "Are support and escalation arrangements agreed between project and operations teams?",
    "Is completion of the handover recorded by both sending and receiving authorities?"
  ],
  "Early-life monitoring plan": [
    "Are launch quality and performance metrics defined with data sources?",
    "Are monitoring responsibilities and review cadence assigned?",
    "Are thresholds for containment or escalation specified?",
    "Is the issue-response process linked to problem and change management?",
    "Are measurable exit criteria defined for ending enhanced early-life monitoring?"
  ]
};
