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
    makeMaturity("M0", "Customer Award", "Acquisition / Quotation · P1 and P2",
      "Confirms the customer award and establishes the agreed delivery scope, commercial and technical commitments, project ownership, and authorization to start the project. Applies to project types P1 and P2.",
      [
  {
    "name": "Customer award or nomination",
    "owner": "Customer interface",
    "responsibility": "Provide the documented award, scope, conditions, and customer contacts."
  },
  {
    "name": "Quotation and feasibility assessment",
    "owner": "Sales and engineering leads",
    "responsibility": "Provide the offered solution, estimates, assumptions, exclusions, and feasibility conclusions."
  },
  {
    "name": "Customer requirements and delivery expectations",
    "owner": "Requirements owner",
    "responsibility": "Capture the requested functions, interfaces, acceptance needs, and delivery dates."
  },
  {
    "name": "Business case and resource estimates",
    "owner": "Business and project leads",
    "responsibility": "Provide the cost, investment, staffing, and supplier assumptions supporting the award."
  }
],
      [
  {
    "name": "Accepted award and commitment record",
    "owner": "Business owner",
    "responsibility": "Record the agreed scope, conditions, open clarifications, and accountable owners."
  },
  {
    "name": "Project charter and lifecycle plan",
    "owner": "Project manager",
    "responsibility": "Define the P1 or P2 route, deliverables, maturity dates, governance, and responsibilities."
  },
  {
    "name": "Initial requirements and assumptions baseline",
    "owner": "Requirements owner",
    "responsibility": "Baseline the known customer needs and assign owners for unresolved requirements."
  },
  {
    "name": "Risk and action register",
    "owner": "Project manager",
    "responsibility": "Record delivery risks, treatments, owners, and due dates."
  }
],
      ["project-management","requirements-elicitation","risk-management","supplier-monitoring"],
      {
  "actions": [
    "Review the award against the quotation and identify changed commitments.",
    "Resolve scope, feasibility, delivery, and acceptance ambiguities with the customer.",
    "Select the P1 or P2 lifecycle and assign the project team and maturity owners.",
    "Plan resources, suppliers, milestones, and risk treatments.",
    "Approve the project charter and baseline the award commitments for architecture work."
  ],
  "checklist": [
    "Customer award and delivery scope are documented.",
    "Quotation differences and open commitments have owners.",
    "The project type, responsibilities, resources, and maturity dates are agreed.",
    "Initial requirements, constraints, and risks are recorded.",
    "The authorized project baseline is available to the development team."
  ],
  "roles": [
    {
      "role": "Maturity Owner",
      "assignment": "Project manager",
      "responsibility": "Coordinates award review, project setup, resources, and delivery commitments."
    },
    {
      "role": "Artifact and Execution Owners",
      "assignment": "Customer interface and engineering lead",
      "responsibility": "Clarify customer expectations and confirm feasibility and acceptance assumptions."
    },
    {
      "role": "Quality and Configuration",
      "assignment": "Quality lead and configuration manager",
      "responsibility": "Review M0 evidence, deviations, traceability, and baseline control."
    },
    {
      "role": "Decision Authority",
      "assignment": "Appointed review forum and customer approver where applicable",
      "responsibility": "Approve the Customer Award decision, conditions, and downstream handover."
    }
  ]
}),
    makeMaturity("M1", "Architecture Freeze", "Concept Refinement · P1 and P2",
      "Approves the product architecture, requirements allocation, and interface baseline for detailed design. Subsequent architecture changes are evaluated and controlled. Applies to project types P1 and P2.",
      [
  {
    "name": "Customer Award baseline",
    "owner": "Project manager",
    "responsibility": "Provide the M0 scope, project commitments, and customer clarifications."
  },
  {
    "name": "System requirements baseline",
    "owner": "Requirements owner",
    "responsibility": "Provide reviewed functional, performance, interface, and applicable specialty requirements."
  },
  {
    "name": "Architecture alternatives and feasibility evidence",
    "owner": "System architect",
    "responsibility": "Compare candidate structures, allocations, and critical technical risks."
  },
  {
    "name": "Interface and discipline constraints",
    "owner": "Discipline leads",
    "responsibility": "Provide hardware, software, mechanical, supplier, and integration constraints."
  }
],
      [
  {
    "name": "Frozen system architecture",
    "owner": "System architect",
    "responsibility": "Baseline system elements, boundaries, interfaces, and rationale for the selected solution."
  },
  {
    "name": "Allocated requirements and interface baseline",
    "owner": "Requirements and interface owners",
    "responsibility": "Link requirements to responsible elements and agree internal and external interfaces."
  },
  {
    "name": "Integration and verification strategy",
    "owner": "Integration and verification leads",
    "responsibility": "Plan integration order, verification methods, environments, and responsibilities."
  },
  {
    "name": "Architecture review and freeze record",
    "owner": "Configuration manager",
    "responsibility": "Retain review findings, accepted deviations, approval, and the controlled baseline identifier."
  }
],
      ["system-requirements-analysis","system-architectural-design","hardware-software-interface","configuration-management","change-request-management"],
      {
  "actions": [
    "Confirm the requirements baseline and architecture decision drivers.",
    "Evaluate architecture alternatives and allocate requirements to product elements.",
    "Review interfaces and cross-discipline feasibility with affected stakeholders.",
    "Define integration and verification strategies and address critical review findings.",
    "Approve the architecture freeze and place subsequent changes under change control."
  ],
  "checklist": [
    "Requirements are allocated to architectural elements.",
    "Interfaces, assumptions, and dependencies are agreed.",
    "Architecture decisions have documented rationale and review evidence.",
    "Integration and verification strategies address the selected architecture.",
    "The frozen architecture and approved exceptions are version controlled."
  ],
  "roles": [
    {
      "role": "Maturity Owner",
      "assignment": "System architect",
      "responsibility": "Owns the architecture baseline, allocation, interfaces, and freeze recommendation."
    },
    {
      "role": "Artifact and Execution Owners",
      "assignment": "Discipline and integration leads",
      "responsibility": "Review feasibility, interfaces, integration sequencing, and verification coverage."
    },
    {
      "role": "Quality and Configuration",
      "assignment": "Quality lead and configuration manager",
      "responsibility": "Review M1 evidence, deviations, traceability, and baseline control."
    },
    {
      "role": "Decision Authority",
      "assignment": "Appointed review forum and customer approver where applicable",
      "responsibility": "Approve the Architecture Freeze decision, conditions, and downstream handover."
    }
  ]
}),
    makeMaturity("M2", "Design Freeze", "Conceptualization · P1 and P2",
      "Approves the detailed product design and configuration to be built and evaluated in design validation (DV). The design, interfaces, and planned validation configuration are controlled, with explicit disposition of remaining changes. Applies to P1 and P2.",
      [
  {
    "name": "Architecture Freeze baseline",
    "owner": "System architect",
    "responsibility": "Provide the approved M1 architecture, requirements allocations, and interfaces."
  },
  {
    "name": "Detailed design package",
    "owner": "Discipline design owners",
    "responsibility": "Provide drawings, schematics, software design, bill of materials, and interface specifications as applicable."
  },
  {
    "name": "Design review and analysis results",
    "owner": "Engineering leads",
    "responsibility": "Provide calculations, simulations, design checks, and identified risks."
  },
  {
    "name": "DV plan and prototype configuration",
    "owner": "Validation lead",
    "responsibility": "Define test coverage, acceptance criteria, samples, environments, and schedule."
  }
],
      [
  {
    "name": "Frozen product design baseline",
    "owner": "Design owners and configuration manager",
    "responsibility": "Identify the approved design revisions and product configuration."
  },
  {
    "name": "Prototype build and release package",
    "owner": "Engineering build owner",
    "responsibility": "Release the controlled instructions and configuration for DV samples."
  },
  {
    "name": "Approved DV plan",
    "owner": "Validation lead",
    "responsibility": "Baseline test cases, requirement links, methods, acceptance criteria, and responsibilities."
  },
  {
    "name": "Design freeze review and action record",
    "owner": "Project manager",
    "responsibility": "Record approval, remaining deviations, owners, and closure dates."
  }
],
      ["hardware-design","software-detailed-design-and-unit-construction","mee-component-design","configuration-management","change-request-management"],
      {
  "actions": [
    "Complete detailed design and check consistency with the frozen architecture.",
    "Review discipline designs and interfaces, including build and test feasibility.",
    "Resolve critical design findings and evaluate remaining deviations.",
    "Confirm DV coverage and the exact prototype and test configuration.",
    "Freeze the design baseline and release the controlled DV build package."
  ],
  "checklist": [
    "Detailed designs trace to the architecture and allocated requirements.",
    "Design reviews are completed with critical findings resolved.",
    "Design revisions and the DV build configuration are identifiable.",
    "DV methods, acceptance criteria, samples, and responsibilities are agreed.",
    "Post-freeze changes require impact assessment and approval."
  ],
  "roles": [
    {
      "role": "Maturity Owner",
      "assignment": "Engineering design lead",
      "responsibility": "Coordinates detailed design completion and the design freeze decision."
    },
    {
      "role": "Artifact and Execution Owners",
      "assignment": "Design owners and validation lead",
      "responsibility": "Verify discipline designs and prepare representative DV samples and coverage."
    },
    {
      "role": "Quality and Configuration",
      "assignment": "Quality lead and configuration manager",
      "responsibility": "Review M2 evidence, deviations, traceability, and baseline control."
    },
    {
      "role": "Decision Authority",
      "assignment": "Appointed review forum and customer approver where applicable",
      "responsibility": "Approve the Design Freeze decision, conditions, and downstream handover."
    }
  ]
}),
    makeMaturity("M3", "DV Pass", "Conceptualization · P1 and P2",
      "Confirms that design validation (DV) of the identified product configuration meets the agreed acceptance criteria. P1 concludes its depicted maturity route at M3; P2 transfers the validated design into sequential development and industrialization.",
      [
  {
    "name": "Design Freeze and DV sample baseline",
    "owner": "Configuration manager",
    "responsibility": "Identify the M2 design, sample revisions, software versions, and approved changes."
  },
  {
    "name": "Approved DV plan and acceptance criteria",
    "owner": "Validation lead",
    "responsibility": "Provide agreed requirement coverage, procedures, and pass criteria."
  },
  {
    "name": "DV execution results",
    "owner": "Test engineers",
    "responsibility": "Provide traceable test records, measurements, environments, and sample identification."
  },
  {
    "name": "Defect, deviation, and change records",
    "owner": "Problem and change owners",
    "responsibility": "Provide failure analyses, corrections, retests, and unresolved exceptions."
  }
],
      [
  {
    "name": "DV completion report",
    "owner": "Validation lead",
    "responsibility": "Summarize coverage, results against criteria, exceptions, and the validation conclusion."
  },
  {
    "name": "Validated product configuration",
    "owner": "Configuration manager",
    "responsibility": "Baseline the product revisions associated with the accepted evidence."
  },
  {
    "name": "Defect closure and deviation decisions",
    "owner": "Engineering and quality leads",
    "responsibility": "Record corrective action verification and authorized residual deviations."
  },
  {
    "name": "DV Pass and handover record",
    "owner": "Project manager",
    "responsibility": "Record acceptance and the P1 completion or P2 industrialization handover, including open obligations."
  }
],
      ["system-qualification-test","software-qualification-test","verification-against-hardware-requirements","mee-test-against-mechanical-component-requirements","problem-resolution-management","product-release"],
      {
  "actions": [
    "Verify that tested samples match the controlled DV configuration.",
    "Complete planned DV activities and assess results against acceptance criteria.",
    "Analyze failures, implement controlled corrections, and execute required retests.",
    "Review coverage and residual deviations with engineering, quality, and customer representatives as applicable.",
    "Approve DV Pass and record the P1 completion or P2 handover decision."
  ],
  "checklist": [
    "DV evidence identifies the tested configuration and conditions.",
    "Planned coverage is complete or exceptions are explicitly approved.",
    "Acceptance criteria are satisfied with documented disposition of deviations.",
    "Critical defects are closed and corrections are verified.",
    "The DV Pass decision and route-specific handover are recorded."
  ],
  "roles": [
    {
      "role": "Maturity Owner",
      "assignment": "Validation lead",
      "responsibility": "Owns DV coverage, evidence completeness, and the pass recommendation."
    },
    {
      "role": "Artifact and Execution Owners",
      "assignment": "Test and engineering owners",
      "responsibility": "Execute DV, analyze failures, implement corrections, and verify retests."
    },
    {
      "role": "Quality and Configuration",
      "assignment": "Quality lead and configuration manager",
      "responsibility": "Review M3 evidence, deviations, traceability, and baseline control."
    },
    {
      "role": "Decision Authority",
      "assignment": "Appointed review forum and customer approver where applicable",
      "responsibility": "Approve the DV Pass decision, conditions, and downstream handover."
    }
  ]
}),
    makeMaturity("M4", "Sequential Dev/Industrialization", "Industrialization · P2 and P3",
      "Confirms readiness of the product and manufacturing process for production validation. P2 carries forward the DV-approved design; P3 starts from an accepted incoming product and development evidence package. Both routes establish controlled production processes, tooling, tests, and supplier readiness.",
      [
  {
    "name": "Validated product and handover package",
    "owner": "Engineering lead",
    "responsibility": "For P2 provide the M3 baseline; for P3 review and accept the incoming design, validation evidence, and outstanding obligations."
  },
  {
    "name": "Manufacturing concept and capacity plan",
    "owner": "Industrial engineering lead",
    "responsibility": "Provide the process flow, site assumptions, capacity, equipment, and tooling needs."
  },
  {
    "name": "Supplier and purchased-part readiness",
    "owner": "Supplier quality and purchasing",
    "responsibility": "Provide part status, tooling schedules, supplier risks, and delivery commitments."
  },
  {
    "name": "Production quality and test requirements",
    "owner": "Manufacturing quality lead",
    "responsibility": "Provide inspection needs, process risks, test coverage, and production validation expectations."
  }
],
      [
  {
    "name": "Industrialized product and process baseline",
    "owner": "Industrial engineering lead",
    "responsibility": "Control the production configuration, process flow, tooling, equipment, and work instructions."
  },
  {
    "name": "Production test and inspection package",
    "owner": "Test engineering and quality",
    "responsibility": "Release test methods, inspection instructions, controls, and acceptance criteria."
  },
  {
    "name": "PV and PPAP readiness plan",
    "owner": "Launch and quality leads",
    "responsibility": "Agree trial builds, validation scope, submission requirements, owners, and schedule."
  },
  {
    "name": "Industrialization readiness review",
    "owner": "Project manager",
    "responsibility": "Record readiness, capacity and supplier status, risks, and authorized open actions."
  }
],
      ["project-management","supplier-monitoring","quality-assurance","configuration-management","change-request-management","product-release"],
      {
  "actions": [
    "Accept the P2 or P3 product handover and assess evidence gaps.",
    "Complete production-oriented development and control any product changes.",
    "Prepare tooling, equipment, process flow, work instructions, and production tests.",
    "Review supplier, capacity, training, and quality-control readiness.",
    "Approve the trial-build baseline and plan the PV/PPAP activities."
  ],
  "checklist": [
    "The incoming design and validation evidence are accepted for the selected route.",
    "Product and process changes are evaluated and controlled.",
    "Tooling, equipment, work instructions, and test systems are ready for planned trials.",
    "Supplier and capacity risks have agreed owners and treatments.",
    "PV/PPAP scope, trial configuration, and readiness decision are documented."
  ],
  "roles": [
    {
      "role": "Maturity Owner",
      "assignment": "Industrial engineering lead",
      "responsibility": "Owns process preparation, tooling, manufacturing readiness, and industrialization evidence."
    },
    {
      "role": "Artifact and Execution Owners",
      "assignment": "Launch, supplier quality, and test engineering leads",
      "responsibility": "Coordinate trial builds, supplier readiness, and production test capability."
    },
    {
      "role": "Quality and Configuration",
      "assignment": "Quality lead and configuration manager",
      "responsibility": "Review M4 evidence, deviations, traceability, and baseline control."
    },
    {
      "role": "Decision Authority",
      "assignment": "Appointed review forum and customer approver where applicable",
      "responsibility": "Approve the Sequential Dev/Industrialization decision, conditions, and downstream handover."
    }
  ]
}),
    makeMaturity("M5", "PV/PPAP", "Product Validation / Series Production · P2 and P3",
      "Confirms production validation (PV) and the applicable Production Part Approval Process (PPAP) disposition for the intended series-production configuration. The readiness decision is supported by production-representative evidence and customer-specific submission requirements. Applies to P2 and P3.",
      [
  {
    "name": "Industrialization baseline",
    "owner": "Industrial engineering lead",
    "responsibility": "Provide the M4 product, process, equipment, tooling, and test configuration."
  },
  {
    "name": "PV plan and production trial records",
    "owner": "Production validation lead",
    "responsibility": "Provide production-representative samples, trial conditions, coverage, and acceptance criteria."
  },
  {
    "name": "PPAP submission requirements and evidence",
    "owner": "Customer and supplier quality",
    "responsibility": "Identify applicable customer requirements and assemble the agreed submission evidence."
  },
  {
    "name": "Process performance and issue records",
    "owner": "Manufacturing quality lead",
    "responsibility": "Provide trial results, measurement evidence, defects, deviations, and corrective actions."
  }
],
      [
  {
    "name": "PV completion and acceptance report",
    "owner": "Production validation lead",
    "responsibility": "Record production validation results, configuration, coverage, and exceptions."
  },
  {
    "name": "PPAP package and customer disposition",
    "owner": "Customer quality owner",
    "responsibility": "Retain the submitted package and approval, conditional disposition, or outstanding requirements."
  },
  {
    "name": "Series-production release record",
    "owner": "Release authority",
    "responsibility": "Authorize the defined product and process configuration with documented release conditions."
  },
  {
    "name": "Production control and monitoring handover",
    "owner": "Operations and quality leads",
    "responsibility": "Transfer control plans, escalation paths, monitoring, and remaining actions."
  }
],
      ["quality-assurance","supplier-monitoring","product-release","configuration-management","problem-resolution-management"],
      {
  "actions": [
    "Validate the product using production-representative parts and processes.",
    "Assess production trial results and resolve or disposition deviations.",
    "Compile and review the applicable PPAP evidence against customer requirements.",
    "Obtain and record the required customer disposition and internal release decision.",
    "Handover the released configuration and monitoring responsibilities to series production."
  ],
  "checklist": [
    "PV evidence represents the intended series-production configuration.",
    "Validation and production acceptance criteria are satisfied or exceptions approved.",
    "PPAP evidence and customer disposition are recorded as applicable.",
    "Release conditions and outstanding actions have accountable owners.",
    "Operations has accepted the control, monitoring, and escalation handover."
  ],
  "roles": [
    {
      "role": "Maturity Owner",
      "assignment": "Launch and quality leads",
      "responsibility": "Coordinate PV completion, PPAP submission, and production release readiness."
    },
    {
      "role": "Artifact and Execution Owners",
      "assignment": "Production, supplier quality, and customer quality owners",
      "responsibility": "Provide trial evidence and coordinate part approval and production handover."
    },
    {
      "role": "Quality and Configuration",
      "assignment": "Quality lead and configuration manager",
      "responsibility": "Review M5 evidence, deviations, traceability, and baseline control."
    },
    {
      "role": "Decision Authority",
      "assignment": "Appointed review forum and customer approver where applicable",
      "responsibility": "Approve the PV/PPAP decision, conditions, and downstream handover."
    }
  ]
}),
    makeMaturity("M6", "End of Life", "Spare Parts / End of Life · P2 and P3",
      "Approves the planned product phase-out and transition or closure of remaining supply and support obligations. Customer commitments, spare parts, service needs, tooling, inventory, and records are dispositioned before final closure. Applies to P2 and P3.",
      [
  {
    "name": "End-of-life request and customer commitments",
    "owner": "Product and customer owners",
    "responsibility": "Provide phase-out timing, last-order expectations, service commitments, and approvals."
  },
  {
    "name": "Production and service demand forecast",
    "owner": "Operations and service owners",
    "responsibility": "Assess final production, spare parts, repair needs, and remaining demand."
  },
  {
    "name": "Inventory, tooling, and supplier status",
    "owner": "Supply chain and industrial engineering",
    "responsibility": "Identify stocks, work in progress, equipment, tools, and supplier obligations."
  },
  {
    "name": "Open issues and controlled product records",
    "owner": "Quality and configuration owners",
    "responsibility": "Provide unresolved claims, support issues, released baselines, and applicable retention requirements."
  }
],
      [
  {
    "name": "Approved phase-out and support plan",
    "owner": "Product owner",
    "responsibility": "Record last-order and last-build dates, communications, and remaining service ownership."
  },
  {
    "name": "Spare parts and inventory disposition",
    "owner": "Supply chain and service leads",
    "responsibility": "Agree final supply, stock allocation, obsolescence, and disposal or transfer decisions."
  },
  {
    "name": "Archived product and process baseline",
    "owner": "Configuration manager",
    "responsibility": "Retain approved records with retrieval ownership and access arrangements."
  },
  {
    "name": "End-of-life closure and handover record",
    "owner": "Decision authority",
    "responsibility": "Record fulfillment or transfer of remaining obligations and approve the closure decision."
  }
],
      ["project-management","supplier-monitoring","configuration-management","problem-resolution-management","product-release"],
      {
  "actions": [
    "Agree the phase-out scope and timing with customer and internal stakeholders.",
    "Plan final supply and spare parts against remaining support commitments.",
    "Disposition inventory, tooling, equipment, and supplier obligations.",
    "Resolve or transfer open quality and service issues to named owners.",
    "Archive controlled records and approve end-of-life closure or residual support handover."
  ],
  "checklist": [
    "Customer phase-out commitments and communications are agreed.",
    "Final production and spare parts arrangements cover remaining obligations.",
    "Inventory, tooling, and supplier dispositions are approved.",
    "Open service and quality obligations are closed or assigned to continuing owners.",
    "Records remain retrievable and the end-of-life decision is recorded."
  ],
  "roles": [
    {
      "role": "Maturity Owner",
      "assignment": "Product lifecycle owner",
      "responsibility": "Coordinates phase-out timing, customer commitments, and closure approval."
    },
    {
      "role": "Artifact and Execution Owners",
      "assignment": "Operations, service, and supply chain leads",
      "responsibility": "Manage final supply, spare parts, inventory, tooling, and support handover."
    },
    {
      "role": "Quality and Configuration",
      "assignment": "Quality lead and configuration manager",
      "responsibility": "Review M6 evidence, deviations, traceability, and baseline control."
    },
    {
      "role": "Decision Authority",
      "assignment": "Appointed review forum and customer approver where applicable",
      "responsibility": "Approve the End of Life decision, conditions, and downstream handover."
    }
  ]
})
  ];

  // Book3.xlsx is the source of truth for the updated M0-M5 maturity names and
  // output artifacts. Keep the page model compact while preserving the existing
  // detail-page sections and navigation.
  const book3Roles = {
    requirements: ["Requirements Manager", "System Engineering", "Owns requirements completeness, traceability, and approval evidence."],
    systems: ["Systems Engineer", "System Engineering", "Owns system definition, interfaces, architecture, and technical consistency."],
    technical: ["Technical Lead", "System Engineering", "Coordinates technical decisions and cross-functional closure."],
    safety: ["Project Functional Safety Manager", "System Engineering", "Owns functional-safety planning, analysis, and evidence."],
    ee: ["EE Lead Engineer", "Electronic Engineering", "Owns electronic design, verification, and release evidence."],
    me: ["ME Engineer", "Mechanical Engineering", "Owns mechanical definition, analysis, and release evidence."],
    software: ["SW Solution Manager", "Software Engineering", "Owns software scope, architecture, integration, and release evidence."],
    config: ["Configuration Manager", "Supporting Processes", "Controls baselines, revisions, and configuration records."],
    quality: ["Quality Manager Project (QMP)", "Quality", "Confirms process compliance, review evidence, and quality readiness."],
    validation: ["Test & Validation Lead Engineer", "Validation and Verification", "Owns verification, validation, test readiness, and reports."],
    supplier: ["Quality Manager Project (QMP)", "Quality", "Owns supplier sourcing, qualification, and supplier release evidence."],
    customerQuality: ["Customer Product Quality Manager (CPQM)", "Quality", "Owns customer quality acceptance and product validation evidence."]
  };
  const book3Role = (key) => {
    const [role, assignment, responsibility] = book3Roles[key];
    return { role, assignment, responsibility };
  };
  const book3Artifact = (name, key) => ({ name, owner: book3Roles[key][0], responsibility: book3Roles[key][2] });
  const book3Input = (name, key) => book3Artifact(name, key);
  const book3Outputs = [
    `BOM: Bill of Material (initial)|Deviation List|Feasibility Study|Functional Safety Concept|Hazard Analysis (initial)|Impact Analysis (initial)|System Architecture (initial)|System Requirements Specification|Technical Safety Requirements|Technical Quotation Package|HW Schematic|ME Drawing and Data`,
    `CM Plan: Configuration Management Plan|FSM 1 Project Setup Review|Control Plan (prototype)|Embedded Test Software Concept and Requirements|FTA: Fault Tree Analysis|DIA: Development Interface Agreement|DFA: Dependent Failure Analysis|Special Characteristics List (SE)|System Test Schedule|Technical Safety Concept|ISO26262 Methods Documentation|EE Architecture|EE Component Specification|EE Design FMEA|EE Requirements|EE Test Strategy|HW Component Qualification Report|3D Model (concept)|ME Drawing and Data|ME Design FMEA|Special Characteristics List (ME)|ME Requirements|ME Test Strategy|SW Architecture|SW/Algo Integration Strategy|SW/Algo Requirements Specification|SW/Algo Test Strategy|SW Safety Analysis|SW Supplier Monitoring Plan|Algo Release Note`,
    `BOM (completed)|HSI: Hardware /Software Interface|DFM and Feasibility Analysis (manufacturability of design approved)|System Integration Test Environment|System Integration Test Specification|System Test Automation Code|System Test Automation Release Note|System Test Environment|System Test Specification|Service Part Concept|Supplier RFQ Package|FSM Review Report (FSM2)|Order for Long Lead Parts/Tooling|Sourcing Decision|System Integration Test Report|System Test Report|EE Architecture|EE Change List|EE Design Report|Schematic|PCB Drawing and Data|EE Test Environment|FEA: Failure Effect Analysis Report|FMEDA (for safety relevant products)|EE Test Report|EE Test Specifications|FEM Analysis Report|ME Tolerance Calculation|ME Test Report|ME Test Specifications|ME Delivery Review and Release|SW Unit Design and Units (to support DV and EMC)|SW Verified, Issues and Risks Identified|SW & Calibration Release Note|3rd Party SW (List of Open Issues)|Free Open Source SW (License Compliance Check)|SW Configuration Described|SW Info in PPTS`,
    `BQR: Build Q Gate Report|DV: Design Validation Report|FSM Review Report (FSM3)|PTS: Production Process Test Specification|DTP: Data to Production|SW Units (PV Version)`,
    `FSM Review Report (FSM4)|IMDS Record (released)|Process Audit Report|Supplier PSW (released)|ISIR (checked)|IMDS Record|Recycling Passport|SW Units (final version)|SW Configuration for Final Series Verified|3rd Party SW: Final Release Review`,
    `CQM: Component Qualification Matrix|Product Validation (PV) Report|PSW (signed by Customer)|Supplier PSW`
  ];
  const book3OutputRole = (name) => {
    const n = name.toLowerCase();
    if (n.includes("psw") || n.includes("cqm") || n.includes("product validation") || n.includes("qualification matrix")) return "quality";
    if (n.includes("sw") || n.includes("algo")) return "software";
    if (n.includes("ee") || n.includes("pcb") || n.includes("schematic")) return "ee";
    if (n.includes("me ") || n.includes("fem") || n.includes("3d model") || n.includes("drawing")) return "me";
    if (n.includes("safety") || n.includes("fault tree") || n.includes("fmeda") || n.includes("fsm")) return "safety";
    if (n.includes("test") || n.startsWith("dv:") || n.startsWith("bqr:")) return "validation";
    if (n.includes("supplier") || n.includes("sourcing") || n.includes("rfq") || n.includes("long lead")) return "supplier";
    if (n.includes("configuration") || n.includes("cm plan") || n.startsWith("dtp:")) return "config";
    if (n.includes("isir") || n.includes("imds") || n.includes("process audit") || n.includes("qualification")) return "quality";
    if (n.includes("requirement")) return "requirements";
    return "systems";
  };
  const book3Titles = ["Prototype Defined", "Prototype Readiness", "Development Approved", "Material Verified/Validated", "PPAP Readiness", "Material Approved"];
  const book3Stages = ["G0 · Opportunity / Quote", "G1 · Product Conceptualization", "G2 · Design Freeze", "G3 · Design Validation", "G4 · Production Readiness", "G5 · Series Production"];
  const book3Definitions = [
    "The material is defined enough for quotation, customer information, prototype planning, and initial procurement.",
    "The material is mature enough to be delivered to an external customer for a dedicated prototyping purpose and volume.",
    "The design and supporting documentation are complete enough to start material sourcing, integration, and introduction activities.",
    "Verification and validation evidence is available; purchased material is sourced, non-purchased design is mature for production planning, and the final component specification is fixed.",
    "Tooling, equipment, process evidence, and supplier records are complete enough for limited-series production and PPAP activities.",
    "Product validation is complete and the material is approved by the customer for series production."
  ];
  const book3Inputs = [
    ["Approved opportunity and quotation package","Customer requirements and delivery expectations","Initial scope, assumptions, and feasibility","Project award and commercial conditions"],
    ["M0 technical quotation package and initial BOM","System requirements and initial architecture","Functional safety concept and technical safety requirements","Initial HW schematic and ME drawing/data","Approved project setup and configuration baseline"],
    ["M1 prototype readiness package","Approved system, EE, ME, and SW requirements","Architecture, FMEA, safety, and test strategies","Configuration baseline and interface agreements","Supplier and long-lead procurement assumptions"],
    ["M2 development-approved design package","Integration and system test reports","Completed BOM, sourcing decision, and tooling orders","EE, ME, and SW design reports and release notes","Configuration baseline and safety evidence"],
    ["M3 verified/validated material specification","Design validation and build quality reports","Production-process test specification and data-to-production package","Supplier sourcing and qualification evidence","PV-version software units"],
    ["M4 PPAP-readiness package","Supplier PSW and checked ISIR","Product validation and process audit evidence","Final-series software and configuration evidence","Customer-specific quality and release requirements"]
  ];
  const book3InputRoles = [["technical","requirements","systems","quality"],["technical","requirements","safety","ee","config"],["technical","requirements","safety","config","supplier"],["technical","validation","supplier","systems","config"],["systems","validation","config","supplier","software"],["quality","supplier","validation","software","customerQuality"]];
  const book3ResponsibleRoles = [["technical","requirements","systems","safety","config","quality"],["requirements","systems","safety","ee","me","software","validation","config","quality","supplier"],["systems","requirements","ee","me","software","validation","safety","supplier","config","quality"],["validation","quality","safety","systems","software","config","supplier"],["quality","supplier","safety","software","config","validation","customerQuality"],["customerQuality","quality","validation","supplier","config","systems"]];
  const book3Actions = [
    ["Confirm the awarded scope, quotation assumptions, and project route.","Capture customer requirements, interfaces, constraints, and acceptance expectations.","Prepare the initial BOM, architecture, safety concepts, and feasibility evidence.","Record deviations, risks, assumptions, and ownership in controlled records.","Review the technical quotation package and baseline the accepted outputs."],
    ["Complete project setup, interface agreements, and configuration planning.","Refine system, electronic, mechanical, and software requirements into controlled baselines.","Complete architecture, FMEA, safety, and special-characteristic analyses.","Define prototype control plans, test strategies, schedules, and qualification evidence.","Review prototype readiness across all disciplines and suppliers.","Baseline the material definition and release the prototype package."],
    ["Complete the design definition and freeze the approved architecture and interfaces.","Complete DFM, FMEA, tolerance, safety, and feasibility analysis.","Prepare completed BOMs, sourcing decisions, RFQ packages, and long-lead orders.","Build and qualify integration and system test environments and automation.","Review EE, ME, and SW design reports, test specifications, and release notes.","Record the M2 document update and baseline the development-approved package."],
    ["Execute design verification and validation against approved requirements.","Confirm purchased material sourcing and production-planning readiness.","Complete the build quality review and resolve critical defects and deviations.","Release production-process test specifications and data-to-production package.","Review functional-safety evidence and PV-version software units.","Baseline the verified/validated material specification for PPAP readiness."],
    ["Complete process audits, supplier release evidence, and material traceability records.","Verify ISIR, IMDS, recycling, and customer-specific quality documentation.","Release final-series software units and verify final configuration.","Complete the FSM4 review and resolve production-readiness findings.","Prepare the PPAP submission package and limited-series readiness decision.","Baseline PPAP evidence and hand over approved production controls."],
    ["Complete product validation and confirm all customer acceptance criteria.","Review the component qualification matrix and supplier PPAP evidence.","Resolve remaining quality, validation, and production-release actions.","Obtain customer signature on the PSW and release the approved material baseline.","Record the G5 series-production decision and production handover inputs."]
  ];
  const book3Checklists = [
    ["Award and quotation scope are approved.","Initial requirements and architecture are traceable.","Feasibility, safety, and impact analyses are recorded.","Initial BOM, schematic, and mechanical data are controlled.","Open deviations and risks have owners and disposition dates.","The Technical Quotation Package is baselined for the next maturity."],
    ["System, EE, ME, and SW requirements are approved.","Architecture and safety analyses have review evidence.","Prototype test strategies and schedules are released.","Prototype control plan and special characteristics are defined.","Configuration and interface baselines are established.","Prototype package is ready for the agreed customer purpose and volume."],
    ["Completed BOM and interfaces are approved.","Design-for-manufacture and safety analyses are accepted.","Sourcing and long-lead decisions are documented.","Integration and system test environments are available.","EE, ME, and SW release evidence is controlled.","Development approval and design-freeze decision are recorded."],
    ["Design validation evidence covers approved requirements.","Build quality review is complete with critical actions closed.","Purchased material is sourced and non-purchased design is production-planning ready.","Production-process test specification is released.","Data-to-production and PV software units are controlled.","Final component specification is fixed and approved for the next gate."],
    ["Process audit findings are closed or formally accepted.","Supplier PSW and ISIR evidence are released and checked.","IMDS and recycling records are complete.","Final software version and configuration are verified.","Functional-safety review evidence is approved.","PPAP package is complete for the production-readiness decision."],
    ["Product validation report is approved.","Component qualification matrix is complete.","Customer-signed PSW is available.","Supplier PSW is released and traceable.","Open critical quality and validation actions are closed.","Material baseline is approved for series production."]
  ];
  const legacyM6 = maturities.find((maturity) => maturity.code === "M6");
  maturities.splice(0, maturities.length, ...book3Titles.map((title, index) => {
    const outputs = book3Outputs[index].split("|").map((name) => book3Artifact(name, book3OutputRole(name)));
    return makeMaturity(`M${index}`, title, book3Stages[index], book3Definitions[index], book3Inputs[index].map((name, inputIndex) => book3Input(name, book3InputRoles[index][inputIndex] || book3InputRoles[index][0])), outputs, ["project-management","requirements-elicitation","configuration-management","quality-assurance","product-release"], { roles: book3ResponsibleRoles[index].map(book3Role), actions: book3Actions[index], checklist: book3Checklists[index] });
  }));
  if (legacyM6) {
    legacyM6.title = "SPARE PARTS & EOL";
    legacyM6.stage = "Post-production · Spare Parts / End of Life";
    maturities.push(legacyM6);
  }

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
    // Each occurrence links to the same maturity page across the three project routes.
    const projectRows = [
      { type: "P1", y: 365, blocks: [[0,275],[1,478],[2,678],[3,854]] },
      { type: "P2", y: 475, blocks: [[0,275],[1,478],[2,678],[3,854],[4,1033],[5,1192],[6,1345]] },
      { type: "P3", y: 582, blocks: [[4,1033],[5,1192],[6,1345]] }
    ];
    return `
      <section class="milestone-image-section" aria-label="Product development phases and milestones">
        <div class="milestone-image-scroll" role="region" aria-label="Interactive maturity diagram" tabindex="0">
          <div class="milestone-image-map">
            <img src="assets/phases-and-milestones.png" width="1422" height="682" alt="Gates G0 to G5 and maturity routes for P1, P2, and P3. Select a gate or M0 to M6 maturity flag to open its definition, artifacts, actions, and readiness checklist." />
            ${[
              ["G0", 42, 46, 274, 59],
              ["G1", 458, 124, 82, 70],
              ["G2", 659, 124, 82, 70],
              ["G3", 835, 124, 82, 70],
              ["G4", 1000, 124, 82, 70],
              ["G5", 1160, 124, 82, 70]
            ].map(([code, x, y, width, height]) => `<a class="gate-image-link" data-code="${code}" href="#/phases-and-milestones/${code.toLowerCase()}" style="left:${x/1422*100}%;top:${y/682*100}%;width:${width/1422*100}%;height:${height/682*100}%;" aria-label="Open ${code} stage gate" title="${code} stage gate"></a>`).join("")}
            ${projectRows.map(row => row.blocks.map(([index,x]) => {
              const maturity = maturities[index];
              return `<a class="milestone-image-link" data-code="${maturity.code}" href="${maturityHref(maturity.id)}" style="left:${x/1422*100}%;top:${row.y/682*100}%;width:${45/1422*100}%;height:${72/682*100}%;" aria-label="${row.type}: Open ${maturity.code} - ${escapeHtml(maturity.title)}" title="${row.type}: ${maturity.code} - ${escapeHtml(maturity.title)}"></a>`;
            }).join('')).join('')}
          </div>
        </div>
      </section>`;
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
          <h2>Responsible roles</h2>
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
          <span>Draft guidance aligned to the updated M0–M5 definitions and the retained M6 spare-parts and end-of-life page. Review the proposed criteria, roles, and artifacts against your approved project lifecycle before use.</span>
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
