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

const adasPrograms = [
  {
    id: "aras", name: "ARAS", label: "ARAS", description: "Baseline ADAS resource view for the ARAS program.",
    functions: [
      ["Program Management", [["Program Manager", 1, 0]]],
      ["System Engineering", [["System Lead", 0, 0], ["System Engineer", 0, 0], ["System Architect", 0, 1], ["PFSM", 0, 0], ["PSPM", 0, 0]]],
      ["Hardware Engineering", [["HW Lead", 0, 0], ["HW Architect", 0, 0], ["HW Engineer", 0, 0], ["PCB Layout Engineer (outsourced)", 0, 0]]],
      ["Perception and Fusion", [["Radar Perception Lead", 0, 0], ["Radar Perception Expert", 1, 1], ["Environment Model", 0, 0], ["Driving Function Architect", 1, 0], ["Motion Planner & Controller", 1, 1]]],
      ["Test and Validation", [["HIL Experts", 1, 1], ["Test Engineer", 2, 2], ["Vehicle Integration Lead", 1, 1], ["Vehicle Test Expert", 1, 1], ["Vehicle Test Engineers", 2, 2]]],
      ["Process and Quality", [["Process & Quality Lead", 1, 1]]]
    ]
  },
  {
    id: "aras-x", name: "ARAS-X (Connectivity)", label: "ARAS-X", description: "Connectivity-enabled ARAS resource view.",
    functions: [
      ["Program Management", [["Program Manager", 1, 0]]],
      ["System Engineering", [["System Lead", 1, 0], ["System Engineer", 1, 0], ["System Architect", 1, 1], ["PFSM", 1, 1], ["PSPM", 1, 1]]],
      ["Hardware Engineering", [["HW Lead", 1, 0], ["HW Architect", 0, 1], ["HW Engineer", 0, 2], ["PCB Layout Engineer (outsourced)", 0, 1]]],
      ["Perception and Fusion", [["Radar Perception Lead", 0, 0], ["Radar Perception Expert", 1, 1], ["Environment Model", 1, 1], ["Driving Function Architect", 1, 0], ["Motion Planner & Controller", 1, 1]]],
      ["Test and Validation", [["HIL Experts", 1, 1], ["Test Engineer", 2, 2], ["Vehicle Integration Lead", 1, 1], ["Vehicle Test Expert", 1, 1], ["Vehicle Test Engineers", 2, 2]]],
      ["Process and Quality", [["Process & Quality Lead", 1, 1]]]
    ]
  },
  {
    id: "adas-l2-dms", name: "ADAS L2 + DMS", label: "ADAS L2 + DMS", description: "Smart-camera ADAS L2 with driver monitoring resources.",
    functions: [
      ["Program Management", [["Program Manager", 1, 0]]],
      ["System Engineering", [["System Lead", 1, 0], ["System Engineer", 2, 1], ["System Architect", 1, 1], ["PFSM", 1, 0], ["PSPM", 1, 1]]],
      ["Hardware Engineering", [["HW Lead", 1, 0], ["HW Architect", 1, 1], ["HW Engineer", 3, 2], ["PCB Layout Engineer (outsourced)", 1, 1]]],
      ["Perception and Fusion", [["Perception Lead", 1, 0], ["Deep Learning Experts", 4, 2], ["Calibration Chain", 1, 1], ["L3 Testing Perception", 1, 3], ["Environment Model", 1, 1], ["Driving Function Architect", 2, 1], ["Motion Planner & Controller", 2, 2], ["State Estimation", 2, 2]]],
      ["Development Enablers", [["Data Pipeline", 1, 5], ["Development Enablers", 2, 1], ["MLOPS", 2, 1], ["Dev Enabler / L3 Test", 5, 3], ["SW Integrator + CI/CD", 2, 2]]],
      ["Test and Validation", [["HIL Experts", 1, 1], ["Test Engineer", 3, 0], ["Vehicle Integration Lead", 1, 1], ["Vehicle Test Expert", 2, 2], ["Vehicle Test Engineers", 3, 1]]],
      ["Process and Quality", [["Process & Quality Lead", 1, 1]]]
    ]
  },
  {
    id: "adas-l2-plus", name: "ADAS L2+", label: "ADAS L2+", description: "Higher-content ADAS L2+ resource view.",
    functions: [
      ["Program Management", [["Program Manager", 1, 1]]],
      ["System Engineering", [["System Lead", 3, 2], ["System Engineer", 3, 2], ["System Architect", 1, 1], ["PFSM", 1, 1], ["PSPM", 1, 1]]],
      ["Hardware Engineering", [["HW Lead", 1, 0], ["HW Architect", 1, 1], ["HW Engineer", 3, 2], ["PCB Layout Engineer (outsourced)", 1, 1]]],
      ["Perception and Fusion", [["Perception Lead", 1, 0], ["Deep Learning Experts", 4, 3], ["Calibration Chain", 2, 2], ["L3 Testing Perception", 1, 3], ["Environment Model", 3, 3], ["Driving Function Architect", 2, 1], ["Motion Planner & Controller", 2, 2], ["State Estimation", 2, 2]]],
      ["Development Enablers", [["Data Pipeline", 1, 5], ["Development Enablers", 2, 2], ["MLOPS", 2, 2], ["Dev Enabler / L3 Test", 5, 5], ["SW Integrator + CI/CD", 2, 2]]],
      ["Test and Validation", [["HIL Experts", 1, 1], ["Test Engineer", 4, 0], ["Vehicle Integration Lead", 1, 1], ["Vehicle Test Expert", 2, 2], ["Vehicle Test Engineers", 3, 1]]],
      ["Process and Quality", [["Process & Quality Lead", 1, 1]]]
    ]
  }
];

adasPrograms.push({
  id: "adas-l2-plus-plus", name: "ADAS L2++", label: "ADAS L2++", description: "Highest-content ADAS resource view with expanded perception, platform, and validation scope.",
  functions: [
    ["Program Management", [["Program Manager", 1, 1]]],
    ["System Engineering", [["System Lead", 3, 2], ["System Engineer", 3, 2], ["System Architect", 1, 1], ["PFSM", 1, 1], ["PSPM", 1, 1]]],
    ["Hardware Engineering", [["HW Lead", 1, 0], ["HW Architect", 1, 1], ["HW Engineer", 3, 2], ["PCB Layout Engineer (outsourced)", 1, 1]]],
    ["Perception and Fusion", [["Perception Lead", 1, 0], ["Deep Learning Experts", 4, 3], ["Calibration Chain", 2, 2], ["L3 Testing Perception", 1, 3], ["Environment Model", 3, 3], ["Driving Function Architect", 2, 1], ["Motion Planner & Controller", 2, 2], ["State Estimation", 2, 2]]],
    ["Development Enablers", [["Data Pipeline", 1, 5], ["Development Enablers", 2, 2], ["MLOPS", 2, 2], ["Dev Enabler / L3 Test", 5, 5], ["SW Integrator + CI/CD", 2, 2]]],
    ["Test and Validation", [["HIL Experts", 1, 1], ["Test Engineer", 4, 0], ["Vehicle Integration Lead", 1, 1], ["Vehicle Test Expert", 2, 2], ["Vehicle Test Engineers", 3, 1]]],
    ["Process and Quality", [["Process & Quality Lead", 1, 1]]]
  ]
});

const workbookAdasPrograms = [
  {
    "id": "aras",
    "name": "ARAS",
    "label": "ARAS",
    "description": "Resource matrix view from ADAS_Resource_Planning.xlsx.",
    "functions": [
      [
        "Program Management",
        [
          [
            "Program Manager",
            1,
            0,
            0,
            0,
            false
          ]
        ]
      ],
      [
        "System",
        [
          [
            "Technical Lead",
            1,
            0,
            0,
            0,
            false
          ],
          [
            "System Engineer",
            1,
            0,
            0,
            0,
            false
          ],
          [
            "System Architect",
            1,
            1,
            0,
            0,
            true
          ]
        ]
      ],
      [
        "Hardware",
        [
          [
            "HW Lead",
            1,
            0,
            0,
            0,
            false
          ]
        ]
      ],
      [
        "ASW",
        [
          [
            "Radar Perception Expert",
            1,
            1,
            0,
            0,
            true
          ],
          [
            "RF engineer",
            1,
            1,
            0,
            0,
            false
          ],
          [
            "Driving Funciton Architect",
            1,
            0,
            0,
            0,
            false
          ],
          [
            "Motion planner & Controller",
            1,
            1,
            0,
            0,
            true
          ]
        ]
      ],
      [
        "Platform SW",
        [
          [
            "SW Architect",
            1,
            1,
            0,
            0,
            true
          ],
          [
            "SW Developer (Outsourcing)",
            0,
            0,
            2,
            2,
            true
          ],
          [
            "SW Integrator + CI,CD",
            1,
            1,
            0,
            0,
            true
          ]
        ]
      ],
      [
        "Test & Validation",
        [
          [
            "Vehicle Integration Lead",
            1,
            1,
            0,
            0,
            true
          ],
          [
            "HIL Experts",
            1,
            1,
            0,
            0,
            false
          ],
          [
            "Test Engineer",
            2,
            2,
            0,
            0,
            false
          ],
          [
            "Vehile test Expert",
            1,
            1,
            0,
            0,
            true
          ],
          [
            "Vehicle test Engineers",
            1,
            1,
            0,
            0,
            false
          ]
        ]
      ],
      [
        "Process & QA",
        [
          [
            "Process & Quality Lead",
            1,
            1,
            0,
            0,
            false
          ]
        ]
      ]
    ]
  },
  {
    "id": "aras-x",
    "name": "ARAS-X (Connectivity)",
    "label": "ARAS-X (Connectivity)",
    "description": "Resource matrix view from ADAS_Resource_Planning.xlsx.",
    "functions": [
      [
        "Program Management",
        [
          [
            "Program Manager",
            1,
            0,
            0,
            0,
            false
          ]
        ]
      ],
      [
        "System",
        [
          [
            "Technical Lead",
            1,
            0,
            0,
            0,
            false
          ],
          [
            "System Engineer",
            1,
            0,
            0,
            0,
            false
          ],
          [
            "System Architect",
            1,
            1,
            0,
            0,
            true
          ],
          [
            "Functional Safety",
            1,
            1,
            0,
            0,
            false
          ],
          [
            "Cyber Security",
            1,
            1,
            0,
            0,
            false
          ]
        ]
      ],
      [
        "Hardware",
        [
          [
            "HW Lead",
            1,
            0,
            0,
            0,
            false
          ],
          [
            "HW Archtect",
            0,
            0,
            1,
            1,
            true
          ],
          [
            "HW Engineer",
            0,
            0,
            2,
            2,
            false
          ],
          [
            "PCB Layout Engineer(Outsourced)",
            0,
            0,
            1,
            1,
            false
          ],
          [
            "Mech Engg",
            0,
            0,
            1,
            1,
            true
          ]
        ]
      ],
      [
        "ASW",
        [
          [
            "Radar Perception Expert",
            1,
            1,
            0,
            0,
            true
          ],
          [
            "RF engineer",
            1,
            1,
            0,
            0,
            false
          ],
          [
            "Driving Funciton Architect",
            1,
            0,
            0,
            0,
            false
          ],
          [
            "Environment Model",
            1,
            1,
            0,
            0,
            true
          ],
          [
            "Motion planner & Controller",
            1,
            1,
            0,
            0,
            true
          ]
        ]
      ],
      [
        "Platform SW",
        [
          [
            "SW Architect",
            1,
            1,
            0,
            0,
            true
          ],
          [
            "SW Developer (Outsourcing)",
            0,
            0,
            2,
            2,
            true
          ],
          [
            "SW Integrator + CI,CD",
            1,
            1,
            0,
            0,
            true
          ]
        ]
      ],
      [
        "Test & Validation",
        [
          [
            "Vehicle Integration Lead",
            1,
            1,
            0,
            0,
            true
          ],
          [
            "HIL Experts",
            1,
            1,
            0,
            0,
            false
          ],
          [
            "Test Engineer",
            2,
            0,
            0,
            0,
            false
          ],
          [
            "Vehile test Expert",
            1,
            1,
            0,
            0,
            true
          ],
          [
            "Vehicle test Engineers",
            2,
            1,
            0,
            0,
            false
          ]
        ]
      ],
      [
        "Process & QA",
        [
          [
            "Process & Quality Lead",
            1,
            1,
            0,
            0,
            false
          ]
        ]
      ]
    ]
  },
  {
    "id": "adas-l2-dms",
    "name": "ADAS L2 (Smart camera) + DMS",
    "label": "ADAS L2 (Smart camera) + DMS",
    "description": "Resource matrix view from ADAS_Resource_Planning.xlsx.",
    "functions": [
      [
        "Program Management",
        [
          [
            "Program Manager",
            1,
            0,
            0,
            0,
            false
          ]
        ]
      ],
      [
        "System",
        [
          [
            "Technical Lead",
            1,
            0,
            0,
            0,
            false
          ],
          [
            "System Lead",
            1,
            0,
            0,
            0,
            false
          ],
          [
            "System Engineer",
            2,
            1,
            0,
            0,
            false
          ],
          [
            "System Architect",
            1,
            1,
            0,
            0,
            true
          ],
          [
            "Functional Safety",
            1,
            0,
            0,
            0,
            false
          ],
          [
            "Cyber Security",
            1,
            1,
            0,
            0,
            false
          ]
        ]
      ],
      [
        "Hardware",
        [
          [
            "HW Lead",
            1,
            0,
            0,
            0,
            false
          ],
          [
            "HW Archtect",
            0,
            0,
            1,
            1,
            true
          ],
          [
            "HW Engineer",
            3,
            3,
            2,
            2,
            false
          ],
          [
            "PCB Layout Engineer(Outsourced)",
            0,
            0,
            1,
            1,
            false
          ],
          [
            "Mech Engg",
            0,
            0,
            1,
            1,
            true
          ]
        ]
      ],
      [
        "ASW",
        [
          [
            "Perception Lead*",
            1,
            0,
            0,
            0,
            false
          ],
          [
            "Deep Learning Engineer",
            5,
            2,
            0,
            0,
            false
          ],
          [
            "Calibration Chain",
            1,
            1,
            0,
            0,
            false
          ],
          [
            "L3 Testing Perception",
            1,
            1,
            3,
            3,
            false
          ],
          [
            "Driving Funciton Architect",
            1,
            0,
            0,
            0,
            false
          ],
          [
            "DF Experts",
            2,
            1,
            0,
            0,
            true
          ],
          [
            "DF Developer",
            2,
            1,
            0,
            0,
            false
          ],
          [
            "Environment Model",
            1,
            1,
            0,
            0,
            true
          ],
          [
            "Motion planner & Controller",
            2,
            2,
            0,
            0,
            true
          ],
          [
            "State Estimation",
            2,
            2,
            0,
            0,
            false
          ],
          [
            "*Data Pipeline",
            2,
            0,
            4,
            4,
            false
          ],
          [
            "* Simulation",
            2,
            2,
            0,
            0,
            false
          ],
          [
            "*MLOPS",
            2,
            2,
            0,
            0,
            false
          ],
          [
            "*L3  Test",
            5,
            4,
            0,
            0,
            false
          ]
        ]
      ],
      [
        "Platform SW",
        [
          [
            "SW Architect",
            1,
            1,
            0,
            0,
            true
          ],
          [
            "SW Developer (Outsourcing)",
            0,
            0,
            6,
            6,
            true
          ],
          [
            "SW Integrator + CI,CD",
            2,
            2,
            0,
            0,
            true
          ]
        ]
      ],
      [
        "Test & Validation",
        [
          [
            "Vehicle Integration Lead",
            1,
            1,
            0,
            0,
            true
          ],
          [
            "HIL Experts",
            2,
            1,
            0,
            0,
            false
          ],
          [
            "Test Engineer",
            3,
            0,
            0,
            0,
            false
          ],
          [
            "Vehile test Expert",
            2,
            2,
            0,
            0,
            true
          ],
          [
            "Vehicle test Engineers",
            3,
            1,
            0,
            0,
            false
          ]
        ]
      ],
      [
        "Process & QA",
        [
          [
            "Process & Quality Lead",
            1,
            1,
            0,
            0,
            false
          ]
        ]
      ]
    ]
  },
  {
    "id": "adas-l2-plus",
    "name": "ADAS L2+",
    "label": "ADAS L2+",
    "description": "Resource matrix view from ADAS_Resource_Planning.xlsx.",
    "functions": [
      [
        "Program Management",
        [
          [
            "Program Manager",
            1,
            1,
            0,
            0,
            false
          ]
        ]
      ],
      [
        "System",
        [
          [
            "Technical Lead",
            1,
            0,
            0,
            0,
            false
          ],
          [
            "System Lead",
            1,
            0,
            0,
            0,
            false
          ],
          [
            "System Engineer",
            3,
            2,
            0,
            0,
            false
          ],
          [
            "System Architect",
            1,
            1,
            0,
            0,
            true
          ],
          [
            "Functional Safety",
            1,
            1,
            0,
            0,
            false
          ],
          [
            "Cyber Security",
            1,
            1,
            0,
            0,
            false
          ]
        ]
      ],
      [
        "Hardware",
        [
          [
            "HW Lead",
            1,
            0,
            0,
            0,
            false
          ],
          [
            "HW Archtect",
            0,
            0,
            1,
            1,
            true
          ],
          [
            "HW Engineer",
            3,
            3,
            2,
            2,
            false
          ],
          [
            "PCB Layout Engineer(Outsourced)",
            0,
            0,
            1,
            1,
            false
          ],
          [
            "Mech Engg",
            0,
            0,
            1,
            1,
            true
          ]
        ]
      ],
      [
        "ASW",
        [
          [
            "Perception Lead*",
            1,
            0,
            0,
            0,
            false
          ],
          [
            "Deep Learning Engineer",
            5,
            2,
            0,
            0,
            false
          ],
          [
            "Calibration Chain",
            2,
            2,
            0,
            0,
            false
          ],
          [
            "L3 Testing Perception",
            1,
            1,
            3,
            3,
            false
          ],
          [
            "Radar Perception Lead",
            1,
            1,
            0,
            0,
            false
          ],
          [
            "Radar Perception Expert",
            1,
            1,
            0,
            0,
            true
          ],
          [
            "RF engineer",
            1,
            1,
            0,
            0,
            false
          ],
          [
            "Driving Funciton Architect",
            1,
            0,
            0,
            0,
            false
          ],
          [
            "DF Experts",
            2,
            1,
            0,
            0,
            true
          ],
          [
            "DF Developer",
            2,
            1,
            0,
            0,
            false
          ],
          [
            "Environment Model",
            3,
            3,
            0,
            0,
            true
          ],
          [
            "Motion planner & Controller",
            2,
            2,
            0,
            0,
            true
          ],
          [
            "State Estimation",
            2,
            2,
            0,
            0,
            false
          ],
          [
            "*Data Pipeline",
            2,
            0,
            4,
            4,
            false
          ],
          [
            "* Simulation",
            2,
            2,
            0,
            0,
            false
          ],
          [
            "*MLOPS",
            2,
            2,
            0,
            0,
            false
          ],
          [
            "*L3  Test",
            5,
            4,
            0,
            0,
            false
          ]
        ]
      ],
      [
        "Platform SW",
        [
          [
            "SW Architect",
            2,
            1,
            0,
            0,
            true
          ],
          [
            "SW Developer (Outsourcing)",
            0,
            0,
            6,
            6,
            true
          ],
          [
            "SW Integrator + CI,CD",
            2,
            2,
            0,
            0,
            true
          ]
        ]
      ],
      [
        "Test & Validation",
        [
          [
            "Vehicle Integration Lead",
            1,
            1,
            0,
            0,
            true
          ],
          [
            "HIL Experts",
            2,
            1,
            0,
            0,
            false
          ],
          [
            "Test Engineer",
            4,
            0,
            0,
            0,
            false
          ],
          [
            "Vehile test Expert",
            2,
            2,
            0,
            0,
            true
          ],
          [
            "Vehicle test Engineers",
            3,
            1,
            0,
            0,
            false
          ]
        ]
      ],
      [
        "Process & QA",
        [
          [
            "Process & Quality Lead",
            1,
            1,
            0,
            0,
            false
          ]
        ]
      ]
    ]
  },
  {
    "id": "adas-l2-plus-plus",
    "name": "ADAS L2++",
    "label": "ADAS L2++",
    "description": "Resource matrix view from ADAS_Resource_Planning.xlsx.",
    "functions": [
      [
        "Program Management",
        [
          [
            "Program Manager",
            1,
            1,
            0,
            0,
            false
          ]
        ]
      ],
      [
        "System",
        [
          [
            "Technical Lead",
            1,
            0,
            0,
            0,
            false
          ],
          [
            "System Lead",
            1,
            0,
            0,
            0,
            false
          ],
          [
            "System Engineer",
            3,
            2,
            0,
            0,
            false
          ],
          [
            "System Architect",
            1,
            1,
            0,
            0,
            true
          ],
          [
            "Functional Safety",
            1,
            1,
            0,
            0,
            false
          ],
          [
            "Cyber Security",
            1,
            1,
            0,
            0,
            false
          ]
        ]
      ],
      [
        "Hardware",
        [
          [
            "HW Lead",
            1,
            0,
            0,
            0,
            false
          ],
          [
            "HW Archtect",
            0,
            0,
            1,
            1,
            true
          ],
          [
            "HW Engineer",
            3,
            3,
            2,
            2,
            false
          ],
          [
            "PCB Layout Engineer(Outsourced)",
            0,
            0,
            1,
            1,
            false
          ],
          [
            "Mech Engg",
            0,
            0,
            1,
            1,
            true
          ]
        ]
      ],
      [
        "ASW",
        [
          [
            "Perception Lead*",
            1,
            0,
            0,
            0,
            false
          ],
          [
            "Deep Learning Engineer",
            5,
            2,
            0,
            0,
            false
          ],
          [
            "Calibration Chain",
            2,
            2,
            0,
            0,
            false
          ],
          [
            "L3 Testing Perception",
            1,
            1,
            3,
            3,
            false
          ],
          [
            "Radar Perception Lead",
            1,
            1,
            0,
            0,
            false
          ],
          [
            "Radar Perception Expert",
            1,
            1,
            0,
            0,
            true
          ],
          [
            "RF engineer",
            1,
            1,
            0,
            0,
            false
          ],
          [
            "Driving Funciton Architect",
            1,
            0,
            0,
            0,
            false
          ],
          [
            "DF Experts",
            2,
            1,
            0,
            0,
            true
          ],
          [
            "DF Developer",
            2,
            1,
            0,
            0,
            false
          ],
          [
            "Environment Model",
            3,
            3,
            0,
            0,
            true
          ],
          [
            "Motion planner & Controller",
            2,
            2,
            0,
            0,
            true
          ],
          [
            "State Estimation",
            2,
            2,
            0,
            0,
            false
          ],
          [
            "*Data Pipeline",
            2,
            0,
            4,
            4,
            false
          ],
          [
            "* Simulation",
            2,
            2,
            0,
            0,
            false
          ],
          [
            "*MLOPS",
            2,
            2,
            0,
            0,
            false
          ],
          [
            "*L3  Test",
            5,
            4,
            0,
            0,
            false
          ]
        ]
      ],
      [
        "Platform SW",
        [
          [
            "SW Architect",
            2,
            1,
            0,
            0,
            true
          ],
          [
            "SW Developer (Outsourcing)",
            0,
            0,
            6,
            6,
            true
          ],
          [
            "SW Integrator + CI,CD",
            2,
            2,
            0,
            0,
            true
          ]
        ]
      ],
      [
        "Test & Validation",
        [
          [
            "Vehicle Integration Lead",
            1,
            1,
            0,
            0,
            true
          ],
          [
            "HIL Experts",
            2,
            1,
            0,
            0,
            false
          ],
          [
            "Test Engineer",
            4,
            0,
            0,
            0,
            false
          ],
          [
            "Vehile test Expert",
            2,
            2,
            0,
            0,
            true
          ],
          [
            "Vehicle test Engineers",
            3,
            1,
            0,
            0,
            false
          ]
        ]
      ],
      [
        "Process & QA",
        [
          [
            "Process & Quality Lead",
            1,
            1,
            0,
            0,
            false
          ]
        ]
      ]
    ]
  }
];
adasPrograms.splice(0, adasPrograms.length, ...workbookAdasPrograms);

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

function slugify(value) {
  return String(value).toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const roleDisciplines = [
    ["System Engineering", ["Technical Lead", "System Lead Engineer", "Systems Engineer", "Project Functional Safety Manager", "Project Security and Privacy Manager", "PTS Engineer", "Requirements Manager", "Homologation Engineer"]],
    ["Software Engineering", ["SW Solution Manager", "ART/SW Solution Engineering Team", "SW Solution Train Architect", "SW Solution Train Engineer", "Component Responsible", "Package Owner Team", "Software Project Quality Engineer"]],
    ["Validation and Verification", ["Test & Validation Lead Engineer", "Integration and Verification Manager", "Integration and Verification Engineer", "Test Manager", "Test Engineer", "Function Test Owner", "Validation Engineer"]],
    ["Electronic Engineering", ["EE Lead Engineer", "EE Designer", "PCB Designer", "EMC Engineer", "Test Manager (EE)", "Test Engineer (EE)", "IC Lead Engineer"]],
    ["Quality", ["Quality Manager Project (QMP)", "Quality Manager 3PSW", "Quality Manager Product in Production (QMPP)", "Quality Manager Project Software (QMP - SW)", "Customer Product Quality Manager (CPQM)"]],
    ["Supporting Processes", ["Problem Resolution Manager", "Defect Analysis Engineer", "Configuration Manager", "Change/Problem Requestor", "Change/Problem Manager", "Change/Problem Analyst", "Change/Problem Coordinator"]],
    ["Mechanical Engineering", ["Mechanics Lead Engineer", "ME Engineer", "FEA Engineer"]],
    ["Sensor Technology Engineering", ["Sensor Technology Lead Engineer", "Sensor Technology Engineer"]],
    ["Lean Agile Role", ["Agile Team Member", "Product Manager", "Product Owner", "Release Train Architect", "Release Train Engineer", "Scrum Master"]]
];

function roleDescription(role, discipline) {
  return `The ${role} contributes to ${discipline.toLowerCase()} activities across the product lifecycle, applying the approved engineering methods, reviews, and work-product controls.`;
}

function roleResponsibilities(role) {
  return `Own the ${role.toLowerCase()} responsibilities assigned to the project, coordinate with affected disciplines, maintain traceability and objective evidence, raise risks and deviations early, and support maturity and release decisions.`;
}

function renderRolesPage() {
  app.innerHTML = `
    <div class="roles-theme-page">${renderWorkspaceIntro("Roles", "Engineering roles are organized by discipline to clarify participation across development, verification, quality, supporting processes, and agile delivery.")}
      <section class="info-block engineering-roles-section"><h2>Engineering Roles</h2><div class="engineering-discipline-grid">
        ${roleDisciplines.map(([discipline, roles]) => `<article class="engineering-discipline-card"><h3><a href="#/roles/${slugify(discipline)}">${escapeHtml(discipline)}</a></h3><ul>${roles.map(role => `<li>${escapeHtml(role)}</li>`).join("")}</ul><a class="card-link" href="#/roles/${slugify(discipline)}">View descriptions and responsibilities →</a></article>`).join("")}
      </div></section>
    </div></div>`;
}

function renderRoleDisciplinePage(disciplineId) {
  const entry = roleDisciplines.find(([discipline]) => slugify(discipline) === disciplineId) || roleDisciplines[0];
  const [discipline, roles] = entry;
  app.innerHTML = `
    <div class="roles-theme-page">${renderWorkspaceIntro(discipline, `Role descriptions and responsibilities for the ${discipline} discipline.`)}
      <section class="info-block"><div class="section-heading"><span>Role catalogue</span><h2>${escapeHtml(discipline)}</h2></div><div class="table-scroll"><table class="workspace-table"><thead><tr><th>Role</th><th>Description</th><th>Responsibilities</th></tr></thead><tbody>
        ${roles.map(role => `<tr><td><strong>${escapeHtml(role)}</strong></td><td>${escapeHtml(roleDescription(role, discipline))}</td><td>${escapeHtml(roleResponsibilities(role))}</td></tr>`).join("")}
      </tbody></table></div></section>
      <nav class="maturity-pager" aria-label="Role discipline navigation"><a href="#/roles"><small>Return</small><strong>All roles</strong></a></nav>
    </div></div>`;
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
          ["Mobility", "mobility", ["ADAS", "EV power train", "Telematics Control Unit (TCU)"]],
          ["Industrial Robotics & Automation", "robotics", ["Construction Robots", "Industry 5.0 IoT automation products & services"]],
          ["Electronics System Design & Manufacturing", "esdm", ["Design & Engineering", "Manufacturing", "Testing & Validation", "Sourcing"]],
          ["Strategic Electronics", "strategic", ["RFSC Systems", "C2 Systems", "Avionics", "CBRNE", "UDA / Sonar Systems"]]
        ].map(([title, icon, items]) => `
          <article class="organization-card organization-${icon}">
            <header><span class="organization-icon ${icon}-icon" aria-hidden="true"></span><h2>${escapeHtml(title)}</h2></header>
            <div class="organization-content"><ul>${items.map((item) => `<li>${item === "EV power train" ? `<a href="#/organization-units/ev-power-train">${escapeHtml(item)}</a>` : item === "ADAS" ? `<a href="#/organization-units/adas">${escapeHtml(item)}</a>` : escapeHtml(item)}</li>`).join("")}</ul></div>
          </article>`).join("")}
      </section>
    </div>`;
}

function adasTotals(program) {
  const rows = program.functions.flatMap(([, roles]) => roles);
  const metrics = rows.map(adasRoleMetrics);
  const calculated = { functions: program.functions.length, roles: rows.length, required: metrics.reduce((sum, row) => sum + row.needs, 0), gap: metrics.reduce((sum, row) => sum + row.open, 0), internalNeeds: metrics.reduce((sum, row) => sum + row.internalNeeds, 0), internalOpen: metrics.reduce((sum, row) => sum + row.internalOpen, 0), externalNeeds: metrics.reduce((sum, row) => sum + row.externalNeeds, 0), externalOpen: metrics.reduce((sum, row) => sum + row.externalOpen, 0) };
  return calculated;
}

function adasRoleMetrics(row) {
  const needs = Number(row[1] || 0);
  const open = Number(row[2] || 0);
  const hasSplit = row.length >= 5;
  const internalNeeds = hasSplit ? Number(row[1] || 0) : needs;
  const internalOpen = hasSplit ? Number(row[2] || 0) : open;
  const externalNeeds = hasSplit ? Number(row[3] || 0) : (/outsource|external|data pipeline/i.test(String(row[0] || "")) ? needs : 0);
  const externalOpen = hasSplit ? Number(row[4] || 0) : (/outsource|external|data pipeline/i.test(String(row[0] || "")) ? open : 0);
  return { needs: internalNeeds + externalNeeds, open: internalOpen + externalOpen, internalNeeds, internalOpen, externalNeeds, externalOpen, mandatory: Boolean(row[5]) || /\*$/.test(String(row[0] || "")) };
}

function adasChart(program) {
  const totals = adasTotals(program);
  return `<article class="adas-chart-card"><header><h3><a href="#/organization-units/adas/${program.id}">${escapeHtml(program.name)}</a></h3><span>${totals.gap} open of ${totals.required} needed</span></header><div class="adas-chart-legend"><span class="legend-filled">Needed</span><span class="legend-missing">Open</span></div><p class="chart-card-meta">Internal ${totals.internalNeeds - totals.internalOpen}/${totals.internalNeeds} · External ${totals.externalNeeds - totals.externalOpen}/${totals.externalNeeds}</p>${program.functions.map(([discipline, roles]) => { const required = roles.reduce((s, r) => s + adasRoleMetrics(r).needs, 0); const gap = roles.reduce((s, r) => s + adasRoleMetrics(r).open, 0); const filled = required - gap; const width = required ? (filled / required) * 100 : 0; return `<div class="adas-bar-row"><span class="adas-bar-label">${escapeHtml(discipline)}</span><span class="adas-bar-track"><span class="adas-bar-filled" style="width:${width}%"></span><span class="adas-bar-missing" style="width:${100 - width}%"></span></span><span class="adas-bar-value">${filled}/${required}</span></div>`; }).join("")}</article>`;
}

function renderAdasHierarchy(program) {
  const display = [["Program Management", "Program Management"], ["System", "System Engineering"], ["Hardware", "HW & MECH"], ["ASW", "ASW: Perception Stack Partnership *"], ["Platform SW", "Platform SW"], ["Test & Validation", "Test & Validation"], ["Process & QA", "Process & QA"]];
  const byName = new Map(program.functions);
  const roleCard = row => { const m = adasRoleMetrics(row); return `<li class="org-tree-role${m.open > 0 ? " role-open" : ""}${m.mandatory ? " role-mandatory" : ""}"><span>${escapeHtml(row[0])}</span><b>${m.needs}/${m.open}</b></li>`; };
  const disciplineCard = ([key, label]) => { const roles = byName.get(key) || []; const needed = roles.filter(r => adasRoleMetrics(r).needs > 0); const needs = needed.reduce((s,r) => s + adasRoleMetrics(r).needs,0); const open = needed.reduce((s,r) => s + adasRoleMetrics(r).open,0); return `<article class="org-tree-discipline${open ? " tree-open" : ""}"><header><h3>${escapeHtml(label)}</h3><span>${needs} needs · ${open} open</span></header><ul>${needed.length ? needed.map(roleCard).join("") : "<li class=\"org-tree-empty\">No roles needed</li>"}</ul></article>`; };
  const totals = adasTotals(program);
  return `<div class="org-tree"><div class="org-tree-root"><small>PROGRAM</small><h3>${escapeHtml(program.name)}</h3><p>${totals.required} needs · ${totals.gap} open</p></div><div class="org-tree-branch"></div><div class="org-tree-grid">${display.map(disciplineCard).join("")}</div><div class="org-tree-key"><strong>Key</strong><span>Role counts are shown as NEEDS / OPEN.</span><span>Pink role labels indicate mandatory execution roles.</span></div></div>`;
}

function renderAdasPage() {
  app.innerHTML = `
    <div class="workspace-page adas-resource-page">
      <div class="breadcrumb"><a href="#/home">Home</a><span>/</span><a href="#/organization-units">Organization Units</a><span>/</span><span>ADAS</span></div>
      <section class="detail-hero"><div class="hero-panel"><h1>ADAS Resource Planning</h1><p>Program-level needs and open resource counts for five ADAS programs, split between internal and external capacity.</p></div></section>
      <section class="info-block"><h2>Program summary</h2><div class="adas-program-grid">${adasPrograms.map(program => { const totals = adasTotals(program); const rows = program.functions.flatMap(([, roles]) => roles); const mandatory = rows.filter(r => adasRoleMetrics(r).mandatory).length; const mandatoryMissing = rows.filter(r => adasRoleMetrics(r).mandatory && adasRoleMetrics(r).open > 0).length; return `<article class="adas-program-card"><h3><a href="#/organization-units/adas/${program.id}">${escapeHtml(program.name)}</a></h3><dl><div><dt>Internal needs / open</dt><dd>${totals.internalNeeds} / ${totals.internalOpen}</dd></div><div><dt>External needs / open</dt><dd>${totals.externalNeeds} / ${totals.externalOpen}</dd></div><div><dt>Mandatory roles</dt><dd>${mandatory}</dd></div><div><dt>Mandatory missing</dt><dd class="gap-value">${mandatoryMissing}</dd></div></dl><a class="card-link" href="#/organization-units/adas/${program.id}">View detailed breakdown →</a></article>`; }).join("")}</div></section>
      <section class="info-block org-roles-entry"><h2>Organization roles</h2><p>Explore the disciplines, role descriptions, responsibilities, and expected work products used in ADAS planning.</p><a class="card-link" href="#/organization-units/adas/org-roles">Org Roles →</a></section>
    </div>`;
}

const adasRoleGroups = (() => {
  const groups = new Map();
  adasPrograms.forEach(program => program.functions.forEach(([discipline, roles]) => {
    if (!groups.has(discipline)) groups.set(discipline, new Map());
    roles.forEach(row => groups.get(discipline).set(row[0].trim(), row));
  }));
  // The resource views omit zero-need rows; the role catalogue retains them.
  [["ASW", "ISP(Outsourced)"], ["ASW", "*Data Labelling(Outsourced)"]].forEach(([discipline, role]) => {
    if (!groups.get(discipline).has(role)) groups.get(discipline).set(role, [role, 0, 0, 0, 0, false]);
  });
  return [...groups].map(([discipline, roles]) => [discipline, [...roles.values()]]);
})();

const adasRoleDetails = {
  "Program Manager": ["Leads program delivery and coordinates decisions across disciplines.", "Program schedule, resources, budget, risks, and customer commitments.", "Set the delivery plan; track dependencies and actions; prepare gate decisions; escalate deviations.", "Program plan, schedule, resource plan, risk register, status reports, gate decision package."],
  "Technical Lead": ["Leads the technical direction of the system.", "Cross-discipline requirements, architecture, integration, and technical decisions.", "Align system, hardware, and software solutions; resolve technical tradeoffs; review technical baselines.", "Technical roadmap, design decisions, architecture review records, integration issue log."],
  "System Lead": ["Coordinates system engineering execution.", "System requirements, interfaces, architecture, and verification planning.", "Assign system work; review traceability and interfaces; coordinate technical reviews.", "System engineering plan, reviewed system baselines, interface and review records."],
  "System Engineer": ["Develops and maintains system requirements and behavior.", "Stakeholder needs through system requirements and verification evidence.", "Analyze requirements; define interfaces and use cases; maintain traceability; support integration.", "System requirements specification, use cases, interface definitions, traceability matrix."],
  "System Architect": ["Defines the system structure and allocates functions.", "System elements, interfaces, functional allocation, and architecture constraints.", "Develop architecture views; assess alternatives; allocate requirements; review design consistency.", "System architecture description, allocation matrix, interface control documents, design review."],
  "Functional Safety": ["Coordinates functional safety engineering.", "Hazards, safety goals, safety requirements, and safety case evidence.", "Perform safety analyses; allocate safety requirements; review implementation and verification evidence.", "HARA, safety concept, safety requirements, FMEA/FTA, safety case."],
  "Cyber Security": ["Coordinates product cybersecurity engineering.", "Threat analysis, security requirements, controls, and validation evidence.", "Perform threat and risk analysis; define controls; review security testing and residual risk.", "TARA, cybersecurity concept, security requirements, test evidence, risk disposition."],
  "HW Lead": ["Leads hardware and mechanical development.", "Hardware requirements, electronics, mechanical interfaces, and design release.", "Plan HW work; coordinate specialists and suppliers; review design and verification readiness.", "Hardware plan, reviewed schematics, design baseline, verification status."],
  "HW Archtect": ["Defines the hardware architecture.", "Electronic partitioning, interfaces, component selection, and constraints.", "Allocate HW requirements; develop architecture; review interfaces, feasibility, and risks.", "Hardware architecture, block diagrams, component selection record, interface specification."],
  "HW Engineer": ["Designs and verifies electronic hardware.", "Circuits, components, PCB interfaces, and hardware tests.", "Prepare schematics; analyze electrical performance; support prototype bring-up and verification.", "Schematics, bill of materials, calculations, hardware test reports, change records."],
  "PCB Layout Engineer(Outsourced)": ["Produces the PCB layout against approved design inputs.", "Board placement, routing, manufacturing rules, and layout release.", "Apply layout constraints; resolve design rule issues; support PCB review and fabrication handoff.", "PCB layout files, design rule check results, fabrication data, layout review record."],
  "Mech Engg": ["Develops mechanical packaging and interfaces.", "Enclosure, mounting, thermal, tolerance, and manufacturability considerations.", "Design mechanical parts; check fit and tolerances; coordinate prototype and manufacturing feedback.", "3D models, drawings, tolerance analysis, mechanical verification reports."],
  "Perception Lead*": ["Leads camera perception development.", "Perception requirements, model performance, datasets, and release readiness.", "Coordinate perception development; set performance targets; review evaluation and safety evidence.", "Perception plan, model baseline, performance reports, release recommendation."],
  "Deep Learning Engineer": ["Develops and evaluates perception models.", "Training data, model architecture, optimization, and performance.", "Train and tune models; analyze failures; document experiments; support deployment constraints.", "Model artifacts, experiment records, evaluation reports, model documentation."],
  "Calibration Chain": ["Defines and validates sensor calibration.", "Camera and sensor alignment, parameters, and calibration workflow.", "Develop calibration method; measure accuracy; manage parameters and regression checks.", "Calibration specification, parameter set, calibration reports, regression evidence."],
  "ISP(Outsourced)": ["Develops image signal processing components under the agreed supplier scope.", "Image processing pipeline, tuning, and camera interface constraints.", "Tune image processing; verify output quality; resolve integration findings.", "ISP configuration, tuning records, image quality results, supplier delivery evidence."],
  "L3 Testing Perception": ["Tests perception behavior in representative scenarios.", "Perception datasets, scenario coverage, and model validation.", "Define scenarios; execute tests; analyze misses and false detections; report regressions.", "Test cases, annotated results, defect reports, validation summary."],
  "Radar Perception Lead": ["Leads radar perception development.", "Radar processing, object outputs, performance, and integration.", "Coordinate radar algorithms; review requirements and performance; manage interface issues.", "Radar perception plan, algorithm baseline, performance and review reports."],
  "Radar Perception Expert": ["Develops radar signal and object perception.", "Radar detections, tracking, classification, and sensor interfaces.", "Design processing methods; tune performance; analyze scenario failures; support integration.", "Radar algorithm specifications, calibration data, evaluation reports."],
  "RF engineer": ["Develops the RF aspects of radar sensing.", "Antenna, radio performance, interference, and RF verification.", "Analyze RF design; test performance; investigate interference; document compliance evidence.", "RF design analysis, measurements, test reports, issue records."],
  "Driving Funciton Architect": ["Architects driving functions and their interfaces.", "Function behavior, control interactions, modes, and safety constraints.", "Define function architecture; allocate requirements; review interfaces and design tradeoffs.", "Function architecture, behavior models, interface specification, design decisions."],
  "DF Experts": ["Defines and assesses driving function behavior.", "Feature logic, operational scenarios, and performance targets.", "Refine function requirements; assess scenarios; review algorithms and test outcomes.", "Function requirements, scenario catalogue, analysis and review records."],
  "DF Developer": ["Implements driving function software.", "Feature logic, interfaces, and unit-level behavior.", "Implement and review code; write unit tests; resolve defects; maintain traceability.", "Source code, unit tests, code review records, defect fixes."],
  "Environment Model": ["Builds the fused representation of the driving environment.", "Object, lane, and scene state from sensor inputs.", "Define fusion behavior; integrate sensor data; evaluate accuracy and uncertainty.", "Environment model specification, fusion implementation, validation reports."],
  "Motion planner & Controller": ["Develops trajectory planning and vehicle control.", "Trajectory selection, control behavior, constraints, and safety limits.", "Design planning and control logic; tune behavior; verify scenario performance.", "Planning and control design, implementation, simulation results, verification evidence."],
  "State Estimation": ["Estimates vehicle and environment state.", "Localization, motion state, uncertainty, and signal fusion.", "Develop estimation algorithms; assess sensor quality; verify stability and accuracy.", "Estimator design, parameter baseline, performance and test reports."],
  "*Data Pipeline": ["Builds the data flow for training and validation.", "Ingestion, curation, versioning, quality, and dataset delivery.", "Automate data processing; validate quality; track dataset lineage and access.", "Pipeline code, dataset manifests, quality reports, lineage records."],
  "*Data Labelling(Outsourced)": ["Provides annotated data for model training and evaluation.", "Annotation guidelines, supplier delivery, and label quality.", "Apply labelling rules; assess annotation quality; correct disputed labels.", "Annotated datasets, label quality reports, supplier acceptance records."],
  "* Simulation": ["Provides scenario simulation capability.", "Simulation scenarios, models, execution, and correlation.", "Build scenarios; maintain simulation assets; compare simulated and real results.", "Scenario library, simulation models, execution reports, correlation evidence."],
  "*MLOPS": ["Maintains the model development and release pipeline.", "Training automation, model registry, reproducibility, and deployment.", "Automate builds; version models and data; monitor evaluation gates; prepare releases.", "ML pipelines, model registry entries, reproducibility logs, release records."],
  "*L3  Test": ["Executes L3-level testing and analysis.", "Integrated feature scenarios, test coverage, and result triage.", "Prepare test campaigns; execute and analyze runs; raise defects and track closure.", "Test plan, cases, run logs, defects, test summary."],
  "SW Architect": ["Defines the platform software structure.", "Base software, interfaces, integration patterns, and technical constraints.", "Allocate software requirements; design interfaces; review component integration.", "Software architecture, interface definitions, allocation and design reviews."],
  "SW Developer (Outsourcing)": ["Implements assigned platform software components.", "Base software and integration deliverables under agreed supplier scope.", "Implement and unit-test components; resolve findings; provide traceable delivery evidence.", "Source code, unit tests, integration package, review and defect records."],
  "SW Integrator + CI,CD": ["Integrates software and maintains build automation.", "Builds, continuous integration, deployment, and release packaging.", "Maintain pipelines; integrate components; investigate build failures; baseline releases.", "CI/CD configuration, build logs, integration results, software release package."],
  "Vehicle Integration Lead": ["Coordinates vehicle-level integration.", "Vehicle readiness, interfaces, configuration, and test entry criteria.", "Plan integration; align subsystem teams; resolve interface issues; approve test readiness.", "Vehicle integration plan, configuration record, issue log, readiness review."],
  "HIL Experts": ["Develops and runs hardware-in-the-loop tests.", "HIL benches, plant models, automation, and test coverage.", "Maintain benches; create HIL tests; analyze failures and correlate results.", "HIL test environment, automated cases, execution logs, defect reports."],
  "Test Engineer": ["Executes verification tests and reports results.", "Defined test cases, environments, coverage, and defects.", "Prepare and run tests; record evidence; investigate failures; maintain traceability.", "Test cases, execution records, defect reports, verification summary."],
  "Vehile test Expert": ["Defines and evaluates vehicle test campaigns.", "Road or proving-ground scenarios, safety controls, and test results.", "Plan tests; review instrumentation; analyze outcomes; recommend corrective actions.", "Vehicle test plan, measurement data, test analysis, issue reports."],
  "Vehicle test Engineers": ["Runs and documents vehicle tests.", "Vehicle setup, data collection, execution, and observations.", "Prepare vehicles; perform test runs; capture data; report anomalies and retests.", "Vehicle test logs, datasets, defect reports, retest evidence."],
  "Process & Quality Lead": ["Leads process and quality assurance for the program.", "Process compliance, audits, quality risks, and release evidence.", "Plan quality activities; assess compliance; track corrective actions; support gate reviews.", "Quality plan, audit records, nonconformity log, corrective actions, release assessment."]
};

function adasRoleHref(discipline, role) {
  return `#/organization-units/adas/org-roles/${slugify(discipline)}/${slugify(role)}`;
}

function renderAdasOrgRolesPage() {
  app.innerHTML = `<div class="workspace-page adas-resource-page"><div class="breadcrumb"><a href="#/home">Home</a><span>/</span><a href="#/organization-units/adas">ADAS</a><span>/</span><span>Org Roles</span></div><section class="detail-hero"><div class="hero-panel"><h1>Org Roles</h1><p>Disciplines and roles in the ADAS resource matrix. Select a role for its scope, responsibilities, and expected work products.</p></div></section><section class="info-block"><div class="adas-org-role-grid">${adasRoleGroups.map(([discipline, roles]) => `<article class="adas-org-role-card"><h2>${escapeHtml(discipline)}</h2><ul>${roles.map(row => `<li><a href="${adasRoleHref(discipline,row[0].trim())}">${escapeHtml(row[0].trim())}</a></li>`).join("")}</ul></article>`).join("")}</div></section></div>`;
}

function renderAdasOrgRoleDetail(disciplineId, roleId) {
  const group = adasRoleGroups.find(([name]) => slugify(name) === disciplineId);
  const row = group?.[1].find(item => slugify(item[0].trim()) === roleId);
  if (!row) { renderAdasOrgRolesPage(); return; }
  const discipline = group[0], role = row[0].trim();
  const [description, scope, responsibilities, workProducts] = adasRoleDetails[role] || [`Supports ${discipline} engineering activities.`, `${discipline} tasks assigned by the program.`, "Plan assigned work; coordinate interfaces; review results and resolve findings.", "Reviewed engineering outputs, traceability, issue records, and release evidence."];
  app.innerHTML = `<div class="workspace-page adas-resource-page"><div class="breadcrumb"><a href="#/home">Home</a><span>/</span><a href="#/organization-units/adas">ADAS</a><span>/</span><a href="#/organization-units/adas/org-roles">Org Roles</a><span>/</span><span>${escapeHtml(role)}</span></div><section class="detail-hero"><div class="hero-panel"><h1>${escapeHtml(role)}</h1><p>${escapeHtml(discipline)}</p></div></section><section class="adas-role-detail-grid"><section class="info-block"><h2>Description</h2><p>${escapeHtml(description)}</p></section><section class="info-block"><h2>Scope</h2><p>${escapeHtml(scope)}</p></section><section class="info-block"><h2>Responsibilities</h2><p>${escapeHtml(responsibilities)}</p></section><section class="info-block"><h2>Work products expected</h2><p>${escapeHtml(workProducts)}</p></section></section><nav class="maturity-pager"><a href="#/organization-units/adas/org-roles"><small>Return</small><strong>Org Roles</strong></a></nav></div>`;
}

function renderAdasProgramPage(programId) {
  const program = adasPrograms.find(item => item.id === programId) || adasPrograms[0];
  app.innerHTML = `
    <div class="workspace-page adas-resource-page">
      <div class="breadcrumb"><a href="#/home">Home</a><span>/</span><a href="#/organization-units">Organization Units</a><span>/</span><a href="#/organization-units/adas">ADAS</a><span>/</span><span>${escapeHtml(program.name)}</span></div>
      <section class="detail-hero"><div class="hero-panel"><h1>${escapeHtml(program.name)}</h1><p>${escapeHtml(program.description)} Required and gap headcounts are shown by function and role.</p></div></section>
      <section class="info-block"><h2>Organization structure</h2>${renderAdasHierarchy(program)}</section>
      <section class="info-block"><h2>Discipline and role headcount</h2><p class="chart-note">Only roles needed by this program are shown. Pink-highlighted roles are mandatory for execution. Open roles are highlighted in the hierarchy and table.</p><div class="table-scroll"><table class="workspace-table adas-resource-table"><thead><tr><th>Discipline</th><th>Role</th><th>Internal needs</th><th>Internal open</th><th>External needs</th><th>External open</th></tr></thead><tbody>${program.functions.map(([fn, allRoles]) => { const roles = allRoles.filter(row => adasRoleMetrics(row).needs > 0); return roles.map((row, index) => { const m = adasRoleMetrics(row); return `<tr class="${m.mandatory ? "mandatory-role" : ""} ${m.open > 0 ? "open-role" : ""}">${index === 0 ? `<td rowspan="${roles.length}"><strong>${escapeHtml(fn)}</strong></td>` : ""}<td>${escapeHtml(row[0])}${m.mandatory ? " <em>Mandatory</em>" : ""}</td><td>${m.internalNeeds}</td><td class="${m.internalOpen > 0 ? "gap-cell" : "ok-cell"}">${m.internalOpen}</td><td>${m.externalNeeds}</td><td class="${m.externalOpen > 0 ? "gap-cell" : "ok-cell"}">${m.externalOpen}</td></tr>`; }).join(""); }).join("")}</tbody></table></div></section>
      <nav class="maturity-pager" aria-label="ADAS program navigation"><a href="#/organization-units/adas"><small>Return</small><strong>ADAS summary</strong></a></nav>
    </div>`;
}

function renderEvPowerTrainPage() {
  app.innerHTML = `
    <div class="workspace-page">
      <div class="breadcrumb">
        <a href="#/home">Home</a><span>/</span>
        <a href="#/organization-units">Organization Units</a><span>/</span>
        <span>EV power train</span>
      </div>
      <section class="detail-hero"><div class="hero-panel">
        <h1>EV power train</h1><p>Mobility engineering processes and workflows.</p>
      </div></section>
      <section class="info-block">
        <h2>Configuration and artifacts</h2>
        <p>Review the product hierarchy, artifact coverage and traceability relationships.</p>
        <a class="ev-page-link" href="#/organization-units/ev-power-train/configuration-structure">Configuration structure <span aria-hidden="true">→</span></a>
      </section>
      <section class="info-block" aria-labelledby="requirements-management">
        <h2 id="requirements-management">Requirements management</h2>
        <p>Requirements status workflow.</p>
        <figure class="requirements-workflow">
          <a href="assets/ev-power-train-requirements-workflow.png" target="_blank" rel="noopener" aria-label="Open requirements status workflow at full size in a new tab">
            <img src="assets/ev-power-train-requirements-workflow.png" width="853" height="624" alt="Requirements status workflow: TBD, NEW, Follow Up, Ready for Review, Agr for Impl, and Agreed, with NA, Changed, Rejected, and Deleted states and rework transitions.">
          </a>
          <figcaption><a href="assets/ev-power-train-requirements-workflow.png" target="_blank" rel="noopener">View workflow at full size (opens in a new tab)</a></figcaption>
        </figure>
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


// Coordinates use the original, unmodified 1097 x 682 image.
const imageProcessGroups = [
  {id:'requirements', title:'Requirements Engineering', ids:['requirements-elicitation','system-requirements-analysis']},
  {id:'electronics', title:'Electronic Engineering', ids:['hardware-requirement-analysis','hardware-design','verification-against-hardware-design','verification-against-hardware-requirements','hardware-software-interface']},
  {id:'mechanical', title:'Mechanical Engineering', ids:['mee-component-requirement-analysis','mee-component-design','mee-component-sample-production','mee-test-against-mechanical-component-design','mee-test-against-mechanical-component-requirements']},
  {id:'software', title:'Software Engineering', ids:['software-requirements-analysis','software-architectural-design','software-detailed-design-and-unit-construction','software-unit-verification','software-integration-and-integration-test','software-qualification-test']}
];
const imageHotspots = [
  ['Project Management',36+286*820/1187,288+16*820/1187,880*820/1187,30*820/1187,'project-management'],
  ['Risk Management',36+515*820/1187,288+53*820/1187,195*820/1187,25*820/1187,'risk-management'],
  ['Change Management',36+743*820/1187,288+53*820/1187,195*820/1187,25*820/1187,'change-request-management'],
  ['Problem Resolution Management',36+972*820/1187,288+53*820/1187,194*820/1187,25*820/1187,'problem-resolution-management'],
  // Engineering image coordinates (1242 x 446), scaled to the existing map.
  ...[
    ['Engineering Releases',48,55,222,27,'product-release'],
    ['System Analysis',48,126,222,27,'analysis'],
    ['DV/PV — Calibration',48,231,222,28,'calibration'],
    ['Configuration Management',48,338,222,27,'configuration-management'],
    ['Quality Assurance',302,27,787,28,'quality-assurance'],
    ['Safety Management',334,77,694,27,'functional-safety-management'],
    ['Cyber Security Management',334,111,694,26,'cyber-security-management'],
    ['Requirements Engineering',350,165,95,65,'@requirements'],
    ['System Architecture',480,165,65,65,'system-architectural-design'],
    ['System Integration & Integration Test',805,165,82,68,'system-integration-and-integration-test'],
    ['System Verification & Validation',920,165,82,65,'system-qualification-test'],
    ['Electronic Engineering',485,255,400,26,'@electronics'],
    ['Mechanical Engineering',492,284,384,26,'@mechanical'],
    ['Software Engineering',502,313,365,26,'@software']
  ].map(([label,x,y,w,h,target]) => [label,36+x*820/1242,369+y*820/1242,w*820/1242,h*820/1242,target]),
  ...[
    ['Supplier Management',9,474,193,27,'supplier-monitoring'],
    ['Structured Problem Solving',9,696,193,27,'problem-resolution-management'],
    ['Process Management',9,84,193,28,'process-development-team'],
    ['Innovation Management',9,385,193,27,'process-improvement-management']
  ].map(([label,x,y,w,h,target]) => [label,900+x*170/210,255+y*170/210,w*170/210,h*170/210,target,true]),
  ...[
    ['Training Courses — ASPICE Trainings',16,161,199,30,'aspice-trainings'],
    ['Rule Overview — Glossary',16,263,199,30,'glossary']
  ].map(([label,x,y,w,h,target]) => [label,900+x*170/229,10+y*170/229,w*170/229,h*170/229,target,true])
];

function renderDiagram() {
  const grouped = new Set(imageProcessGroups.flatMap(group => group.ids));
  const remaining = processes.filter(process => !grouped.has(process.id));
  const links = items => items.map(item => `<a href="${processHref(item.id)}">${escapeHtml(item.title)}</a>`).join('');
  return `
    <p class="image-map-help">Select a highlighted area to explore its processes. Engineering areas contain multiple process stages. All original process links are also available below.</p>
    <div class="reference-map-scroll" role="region" aria-label="Interactive engineering process map" tabindex="0">
      <div class="reference-process-map">
        <img class="reference-map-quick" src="assets/quick-links.png" width="229" height="312" alt="Quick Links: Update Information, Rule Manager, Training Courses, KPIs, and Rule Overview." />
        <img class="reference-map-business" src="assets/business-processes.png" width="210" height="758" alt="Company strategy, business review, innovation, supplier management, customer management, and continuous improvement." />
        <img class="reference-map-top" src="assets/engineering-lifecycle-top.png" width="1225" height="484" alt="Engineering lifecycle gates G0 to G5 and material maturity milestones M0 to M6." />
        <img class="reference-map-management" src="assets/project-management-section.png" width="1187" height="97" alt="Project Management, Tailoring for Reuse, Gate Releases, Risk Management, Change Management, and Problem Resolution." />
        <img class="reference-map-engineering" src="assets/engineering-section.png" width="1242" height="446" alt="Engineering processes, Quality Assurance, Safety Management, Cyber Security Management, and the systems engineering V-model." />
        <img class="reference-map-operations" src="assets/operations-section.png" width="1404" height="210" alt="Operations: Gate Releases, New Product Launch Management, Industrial Engineering: Test Engineering, and Industrial Engineering: Process Engineering." />
        ${imageHotspots.map(([label,x,y,w,h,target,sidebar = false]) => {
          const attributes = target.startsWith('@')
            ? `type="button" data-image-group="${target.slice(1)}" aria-controls="image-group-${target.slice(1)}"`
            : `href="${processHref(target)}"`;
          const tag = target.startsWith('@') ? 'button' : 'a';
          return `<${tag} class="image-hotspot" ${attributes} style="left:${x/1097*100}%;top:${(y + (sidebar ? 0 : 36))/900*100}%;width:${w/1097*100}%;height:${h/900*100}%;" aria-label="${escapeHtml(label)}" title="${escapeHtml(label)}"></${tag}>`;
        }).join('')}
        <a class="image-hotspot" href="#/phases-and-milestones" style="left:3.2817%;top:0;width:74.7493%;height:29.0323%;" aria-label="Explore phases and milestones" title="Explore phases and milestones"></a>
      </div>
    </div>
    <section class="image-process-directory" aria-label="All original process links">
      <h2>Explore process stages</h2>
      ${imageProcessGroups.map(group => `<details id="image-group-${group.id}"><summary>${group.title}<span>${group.ids.length} processes</span></summary><div class="image-process-links">${links(group.ids.map(id => processById.get(id)))}</div></details>`).join('')}
      <details open><summary>Management, system and support processes<span>${remaining.length} processes</span></summary><div class="image-process-links">${links(remaining)}</div></details>
    </section>`;
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

function renderHomeSubPage() {
  app.innerHTML = `
    <div class="governance-page">
      <div class="breadcrumb"><a href="#/home">Home</a><span>/</span><span>Home-Sub</span></div>
      <header class="governance-hero">
        <h1>Mapping of Governance decisions to Material status</h1>
        <p>Project milestone decisions mapped to the corresponding material maturity status.</p>
      </header>
      <section class="governance-card governance-map-card" aria-label="Governance decisions and material status mapping">
        <img class="governance-image" src="assets/governance-material-status.png" alt="Project milestones and material status mapping from G0 through post production and M0 through M6." />
      </section>
      <section class="governance-card governance-flyer-card" aria-labelledby="governance-flyer-heading">
        <h2 id="governance-flyer-heading">Gate and material status work products</h2>
        <img class="governance-image" src="assets/governance-flyer.png" alt="Gate releases, project work products, and material maturity outputs from G0 through M6." />
      </section>
    </div>
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
      ${
        viewMode === "list"
          ? listHtml
          : renderDiagram()
      }
    </div>
  `;
}

function renderPhasesAndMilestonesPage() {
  app.innerHTML = `
    <div class="workspace-page phases-page">
      <div class="breadcrumb"><a href="#/home">Home</a><span>/</span><span>Phases and Milestones</span></div>
      ${window.MaturityMap.renderRail()}
      <section class="project-type-descriptions" aria-label="Project type descriptions">
        <a href="assets/project-type-descriptions.png" target="_blank" rel="noopener" aria-label="Open P1, P2, and P3 project descriptions at full size">
          <div class="project-description-row">
            <div class="project-type-badge"><span>PROJECT TYPE</span><b>P1</b></div>
            <div class="project-description-copy">
              <strong>P1: Base Projects: &gt; Base Development</strong>
              <p>Development of new products and technologies - either out of internal innovation or out of customer idea</p>
              <p>Scope of a Base Project is to establish a technical and commercial generic product which can be used for customer specific application projects</p>
            </div>
          </div>
          <div class="project-description-row">
            <div class="project-type-badge"><span>PROJECT TYPE</span><b>P2</b></div>
            <div class="project-description-copy">
              <strong>P2: Application Projects: &gt; Customer Development &gt; Application Engineering</strong>
              <p>Application of an existing product or technology to the individual needs of a customer. Product, customer, car-model or platform are identified.</p>
              <p>All projects that require a new Design/Product Validation / a PLC Gate process (e.g. customer triggered changes, Cost Reduction Process activities)</p>
            </div>
          </div>
          <div class="project-description-row">
            <div class="project-type-badge"><span>PROJECT TYPE</span><b>P3</b></div>
            <div class="project-description-copy">
              <strong>P3: DFM (Design for Manufacturability)Projects: &gt; Skipping product design maturity levels</strong>
              <p>Existing or proven product designs adapted for manufacturability, localization, cost optimization, or production constraints. Selected development maturity levels may be skipped or consolidated based on reuse level, change impact, and risk assessment, while maintaining mandatory validation, compliance, and production-readiness activities.</p>
            </div>
          </div>
        </a>
      </section>
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
  const isMaturity = location.hash.startsWith("#/phases-and-milestones/") || location.hash.startsWith("#/maturity/");
  const section = (location.hash || "#/home").replace("#/", "").split("/")[0];
  document.querySelectorAll("[data-nav]").forEach((link) => {
    const shouldActivate = ["roles", "tools", "trainings", "organization-units", "phases-and-milestones", "review-system", "home-sub"].includes(section)
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
  if (hash === "#/home-sub") {
    renderHomeSubPage();
  } else if (hash === "#/review-system" || hash.startsWith("#/review-system/")) {
    app.innerHTML = window.ReviewSystem.renderRoute(hash);
  } else if (hash.startsWith("#/aspice")) {
    app.innerHTML = window.AspiceMatrix.renderRoute(hash, searchInput.value);
  } else if (hash === "#/phases-and-milestones") {
    renderPhasesAndMilestonesPage();
  } else if (hash.startsWith("#/phases-and-milestones/g") && window.GateMap) {
    app.innerHTML = window.GateMap.renderRoute(hash);
  } else if (hash.startsWith("#/phases-and-milestones/") || hash.startsWith("#/maturity/")) {
    app.innerHTML = window.MaturityMap.renderRoute(hash);
  } else if (hash.startsWith("#/process/")) {
    renderDetail(hash.replace("#/process/", ""));
  } else if (hash.startsWith("#/roles/")) {
    renderRoleDisciplinePage(hash.replace("#/roles/", "").split(/[/?]/)[0]);
  } else if (hash === "#/roles") {
    renderRolesPage();
  } else if (hash === "#/tools") {
    renderToolsPage();
  } else if (hash === "#/trainings") {
    renderTrainingsPage();
  } else if (hash === "#/organization-units/ev-power-train/configuration-structure/review" && window.EvConfiguration) {
    app.innerHTML = window.EvConfiguration.render();
  } else if (hash === "#/organization-units/ev-power-train/configuration-structure" && window.EvStructure) {
    app.innerHTML = window.EvStructure.render();
  } else if (hash.startsWith("#/organization-units/adas/org-roles/")) {
    const [disciplineId, roleId] = hash.replace("#/organization-units/adas/org-roles/", "").split(/[/?]/);
    renderAdasOrgRoleDetail(disciplineId, roleId);
  } else if (hash === "#/organization-units/adas/org-roles") {
    renderAdasOrgRolesPage();
  } else if (hash.startsWith("#/organization-units/adas/")) {
    renderAdasProgramPage(hash.replace("#/organization-units/adas/", "").split(/[/?]/)[0]);
  } else if (hash === "#/organization-units/adas") {
    renderAdasPage();
  } else if (hash === "#/organization-units/ev-power-train") {
    renderEvPowerTrainPage();
  } else if (hash === "#/organization-units") {
    renderOrganizationUnitsPage();
  } else {
    renderHome();
  }
}

document.addEventListener("click", (event) => {
  const imageGroup = event.target.closest('[data-image-group]');
  if (imageGroup) {
    const panel = document.getElementById('image-group-' + imageGroup.dataset.imageGroup);
    panel.open = true;
    panel.scrollIntoView({block:'center'});
    panel.querySelector('summary').focus({preventScroll:true});
    return;
  }
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
