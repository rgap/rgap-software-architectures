## Project purpose

The software architecture course is a modular course that covers different topics in software architecture.

The main goal is to provide a comprehensive guide to software architecture that can be used by students and professionals to learn about the topic.  

**IMPORTANT**: 
- Every section must have a README.md file that explains the topic. 
- Every section must have a demo directory that contains a working example of the topic. 
- The demo should be a simple and easy-to-understand example that can be used to illustrate the concepts discussed in the README.md file.
- The demo should be a complete and working example that can be run by the user.

## Repository structure

├── 01_software_architecture_foundations/
│   ├── 01_what_software_architecture_is/
│   │   ├── README.md
│   │   └── demo/
│   ├── 02_why_architecture_matters/
│   │   ├── README.md
│   │   └── demo/
│   ├── 03_core_concepts/
│   │   ├── README.md
│   │   └── demo/
│   ├── 04_quality_attributes/
│   │   ├── README.md
│   │   └── demo/
│   ├── 05_tradeoffs_and_constraints/
│   │   ├── README.md
│   │   └── demo/
│   └── 06_architecture_classifications/
│       ├── README.md
│       └── demo/
│
├── 02_architectural_styles/
│   ├── README.md
│   ├── 01_runtime_interaction_styles/
│   │   ├── README.md
│   │   ├── 01_client_server/
│   │   │   ├── README.md
│   │   │   └── demo/
│   │   ├── 02_request_response/
│   │   │   ├── README.md
│   │   │   └── demo/
│   │   ├── 03_pipe_and_filter/
│   │   │   ├── README.md
│   │   │   └── demo/
│   │   ├── 04_event_driven/
│   │   │   ├── README.md
│   │   │   └── demo/
│   │   ├── 05_publish_subscribe/
│   │   │   ├── README.md
│   │   │   └── demo/
│   │   └── 06_peer_to_peer/
│   │       ├── README.md
│   │       └── demo/
│   │
│   ├── 02_deployment_system_composition_styles/
│   │   ├── README.md
│   │   ├── 01_monolith/
│   │   │   ├── README.md
│   │   │   └── demo/
│   │   ├── 02_modular_monolith/
│   │   │   ├── README.md
│   │   │   └── demo/
│   │   ├── 03_service_oriented_architecture/
│   │   │   ├── README.md
│   │   │   └── demo/
│   │   ├── 04_microservices/
│   │   │   ├── README.md
│   │   │   └── demo/
│   │   ├── 05_microkernel/
│   │   │   ├── README.md
│   │   │   └── demo/
│   │   └── 06_serverless/
│   │       ├── README.md
│   │       └── demo/
│   │
│   └── 03_internal_application_structure_styles/
│       ├── README.md
│       ├── 01_layered_architecture/
│       │   ├── README.md
│       │   └── demo/
│       ├── 02_component_based_architecture/
│       │   ├── README.md
│       │   └── demo/
│       ├── 03_plugin_based_architecture/
│       │   ├── README.md
│       │   └── demo/
│       ├── 04_domain_centered_structure/
│       │   ├── README.md
│       │   └── demo/
│       └── 05_data_centered_structure/
│           ├── README.md
│           └── demo/
│
├── 03_architectural_patterns/
│   ├── README.md
│   ├── 01_boundary_and_dependency_patterns/
│   │   ├── README.md
│   │   ├── 01_clean_architecture/
│   │   │   ├── README.md
│   │   │   └── demo/
│   │   ├── 02_hexagonal_architecture/
│   │   │   ├── README.md
│   │   │   └── demo/
│   │   ├── 03_onion_architecture/
│   │   │   ├── README.md
│   │   │   └── demo/
│   │   ├── 04_ports_and_adapters/
│   │   │   ├── README.md
│   │   │   └── demo/
│   │   └── 05_screaming_architecture/
│   │       ├── README.md
│   │       └── demo/
│   │
│   └── 02_other_reusable_architectural_patterns/
│       ├── README.md
│       ├── 01_cqrs/
│       │   ├── README.md
│       │   └── demo/
│       ├── 02_event_sourcing/
│       │   ├── README.md
│       │   └── demo/
│       ├── 03_saga/
│       │   ├── README.md
│       │   └── demo/
│       ├── 04_strangler_fig/
│       │   ├── README.md
│       │   └── demo/
│       ├── 05_backend_for_frontend/
│       │   ├── README.md
│       │   └── demo/
│       ├── 06_api_gateway/
│       │   ├── README.md
│       │   └── demo/
│       ├── 07_anti_corruption_layer/
│       │   ├── README.md
│       │   └── demo/
│       └── 08_circuit_breaker/
│           ├── README.md
│           └── demo/
│
└── 04_code_organization/
    ├── README.md
    ├── 00_basic_monolith_layouts/
    │   ├── README.md
    │   ├── 01_single_file_monolith/
    │   │   ├── README.md
    │   │   └── demo/
    │   └── 02_flat_monolith/
    │       ├── README.md
    │       └── demo/
    │
    ├── 01_package_by_layer/
    │   ├── README.md
    │   ├── 01_layered_by_type/
    │   │   ├── README.md
    │   │   └── demo/
    │   └── 02_classic_layered_folders/
    │       ├── README.md
    │       └── demo/
    │
    ├── 02_package_by_feature/
    │   ├── README.md
    │   ├── 01_vertical_feature_slices/
    │   │   ├── README.md
    │   │   └── demo/
    │   ├── 02_route_colocated_feature_structure/
    │   │   ├── README.md
    │   │   └── demo/
    │   └── 03_feature_modules_with_public_api/
    │       ├── README.md
    │       └── demo/
    │
    ├── 03_hybrid_approaches/
    │   ├── README.md
    │   ├── 01_feature_first_with_internal_layers/
    │   │   ├── README.md
    │   │   └── demo/
    │   ├── 02_domain_modules_with_shared_kernel/
    │   │   ├── README.md
    │   │   └── demo/
    │   ├── 03_route_first_with_shared_modules/
    │   │   ├── README.md
    │   │   └── demo/
    │   └── 04_practical_hybrid_example/
    │       ├── README.md
    │       └── demo/
    │
    └── 04_frontend_component_organization/
        ├── README.md
        └── 01_atomic_design/
            ├── README.md
            └── demo/