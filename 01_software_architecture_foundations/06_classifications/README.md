# 06. Architecture Classifications

## Introduction

> Software architecture becomes easier to study when its concepts are classified clearly. 

That matters because architecture discussions often mix together broad structural forms, reusable design solutions, and repository-level code layout as if they were the same kind of thing. Major architecture sources do not present one single universal classroom taxonomy, but they do consistently distinguish among different architectural concerns and different kinds of architectural views, especially module views, component-and-connector views, and allocation views. (Clements et al., 2004; ISO/IEC/IEEE, 2022).

---

## Why Classification Helps

Classification helps because a software system can be described through multiple structures for different stakeholders and concerns. 

ISO/IEC/IEEE 42010 frames architecture description around stakeholders, concerns, viewpoints, and views, while SEI’s Views and Beyond work groups architecture documentation into major viewtypes rather than treating architecture as one flat diagram. This means that different classifications can all be valid, as long as they are clear about their purpose. (Clements et al., 2004; ISO/IEC/IEEE, 2022).

---

## The Working Distinction Used in This Course

Being strict here helps because these terms often get mixed together in class notes, blog posts, and even some professional discussions. In this course, we will use the following working distinction:

| Concept | Definition | Scope & Examples |
| :--- | :--- | :--- |
| **Architectural styles** | The **high-level organization of a software system**. | Major elements, their relationships, and principles shaping interactions. May suggest deployment tendencies. |
| **Architectural patterns** | **Reusable solutions to recurring architectural design problems**. | Responsibilities, boundaries, and dependencies. (e.g., Clean Architecture, Hexagonal Architecture). |
| **Code organization** | How **source files, modules, folders, packages, or namespaces** are arranged. | A lower-level concern that should align with intended architectural structure. |

> **Course Taxonomy**: A teaching-oriented classification designed to reduce confusion. It is compatible with the broader architecture literature because that literature already distinguishes among different structures, views, and concerns, even though it does not standardize the exact same three top-level labels. (Clements & Northrop, 1996; Clements et al., 2004; ISO/IEC/IEEE, 2022).

---

## The Classification Used in This Course

### 1. Architectural Styles

In this course, architectural styles are grouped into three subfamilies based on the main structural question they answer:

| Style Subfamily | Primary Focus | Literature Mapping |
| :--- | :--- | :--- |
| **Runtime Interaction Styles** | How active parts of the system collaborate during execution. | Component-and-connector concerns |
| **Deployment / System Composition** | How larger system parts are separated, composed, and deployed. | Allocation & environment-mapping concerns |
| **Internal Application Structure** | How the inside of an application is organized (layers, modules, etc.). | Module concerns |

This grouping is not an official standards taxonomy, but it maps fairly well to distinctions that already appear in architecture literature. (Clements et al., 2004; Clements & Northrop, 1996).

### 2. Architectural Patterns

In this course, architectural patterns are treated as reusable, named solution forms for recurring architectural design problems. 

Their emphasis is less on cataloging every possible large-scale system shape and more on how responsibilities, boundaries, and dependency directions should be arranged to address recurring concerns. That makes them a good category to place after styles: styles give broad structural families, while patterns give more problem-oriented architectural guidance inside or across those families. (Bachmann et al., 2000; Clements & Northrop, 1996).

### 3. Code Organization

Code organization is treated separately because it refers to the arrangement of implementation artifacts such as files, folders, packages, namespaces, and modules. 

That makes it relevant to architecture, especially where module structures are concerned, but it is still narrower than architecture as a whole. A repository layout can reflect an architecture well or poorly, but it is not identical to the full architecture of the system. (Clements et al., 2004; Bachmann et al., 2000).

---

## Other Common Classifications

To provide a broader context, here are other common ways architecture is classified in the industry and literature:

| Classification Approach | Key Categories / Concepts | Primary Purpose |
| :--- | :--- | :--- |
| **By Viewtype** (SEI) | Module, Component-and-connector, Allocation views | Tied directly to architecture documentation practice and stakeholder concerns. *(Clements et al., 2004)* |
| **By Stakeholders** (ISO 42010) | Stakeholders, Concerns, Viewpoints, Views | Explains why different architectural descriptions exist and why no single diagram is enough. *(ISO/IEC/IEEE, 2022)* |
| **By System Modularity** | Monolithic, Microservices, Service-Based, SOA | Focuses on the size, autonomy, and boundaries of independently deployable units. *(Richards & Ford, 2020)* |
| **By Named Style Catalogs** | Client-server, Layered, Service-oriented, Multi-tier | Industry-friendly communication matching how architects talk informally. *(Clements & Northrop, 1996)* |
| **By Quality Attributes** | High Availability, High Performance, Secure | Classifies architectures by the primary non-functional requirements driving the design. *(Bass et al., 2012)* |
| **By Deployment Topology** | Cloud-native, On-premises, Edge, Serverless | Focuses on the physical or virtual infrastructure where the software executes. |
| **By Data Flow & Computation** | Pipe-and-filter, Batch sequential, Event-driven | Categorizes systems based on how data moves and is processed between components. *(Garlan & Shaw, 1993)* |
| **By State Management** | Stateful, Stateless, Actor Model | Differentiates systems based on how and where user or session state is maintained. |
| **By Interaction Synchronicity** | Synchronous RPC, Asynchronous Messaging, Reactive | Focuses on the temporal coupling, blocking behavior, and responsiveness of communications. |
| **By Control Flow** | Orchestrated (Centralized), Choreographed (Decentralized) | Categorizes how distributed workflows and business processes are coordinated. |
| **By Scaling Strategy** | X-Axis (Cloning), Y-Axis (Services), Z-Axis (Data Partitioning) | Classifies designs by how they distribute load to accommodate growth (The Scale Cube). *(Abbott & Fisher, 2015)* |
| **By Domain Boundaries** (DDD) | Core Domain, Bounded Contexts, Subdomains | Aligns architectural boundaries directly with the business capabilities and language. *(Evans, 2003)* |
| **By Abstraction Depth / Zoom** (C4) | Context, Containers, Components, Code | Provides a hierarchical, map-like approach to architecture diagrams and documentation. *(Brown, 2020)* |
| **By Dependency Rule / Isolation** | Clean, Hexagonal (Ports & Adapters), Onion | Isolates core business logic from frameworks and UI by enforcing inward-pointing dependencies. *(Martin, 2017)* |
| **By System Evolution** | Evolutionary Architecture, Fitness Functions | Focuses on how the structural design supports constant, incremental, and guided change. *(Ford et al., 2017)* |
| **By Resilience & Failure Modes** | Bulkheads, Circuit Breakers, Fallbacks | Categorizes structures by how they isolate faults, degrade gracefully, and recover. *(Nygard, 2018)* |
| **By Documentation Focus** | Layers, Interfaces, Structures | Connects classification to documentation artifacts and practical communication needs. *(Bachmann et al., 2000)* |

---

## Why This Classification Is Decent

This classification is decent for several reasons:

1. **Separates Different Abstraction Levels**: Architectural styles, architectural patterns, and code organization do not answer exactly the same question, so putting them in separate top-level groups reduces conceptual confusion. That is especially useful in a course, where students often blur together runtime structure, design guidance, and folder layout. (Clements et al., 2004; ISO/IEC/IEEE, 2022).
2. **Pedagogically Aligned**: Your subgroups under architectural styles — runtime interaction, deployment/system composition, and internal application structure — correspond reasonably well to distinctions that the SEI literature already makes among runtime interaction structures, implementation-oriented structures, and environment mappings. (Clements et al., 2004; Clements & Northrop, 1996).
3. **Addresses a Real Teaching Problem**: Students often confuse broad structural forms, reusable architectural solution forms, and repository layout. Your taxonomy gives each of those a separate place, which makes the course easier to explain and navigate. (Bachmann et al., 2000; ISO/IEC/IEEE, 2022).
4. **Flexible for Real Systems**: A system can have a runtime interaction style, an internal structural style, architectural patterns, and a code organization strategy at the same time. Your taxonomy supports that layered way of thinking instead of pretending that one label fully describes the system. (Bachmann et al., 2000; Clements et al., 2004).

---

## What to Be Careful About

Your classification should still be presented with two caveats:

> **Caveat 1: Course-Specific Focus**  
> It should be introduced as **the classification used in this course**, not as the one official universal classification of software architecture. The major standards use other organizing principles. (ISO/IEC/IEEE, 2022; Clements et al., 2004).

> **Caveat 2: Combined Categories in Practice**  
> Real systems combine categories. A system may use a layered internal structure, a client-server runtime style, and package-by-feature code organization at the same time. These categories are not mutually exclusive. (Bachmann et al., 2000).

---

## Key Takeaways

- Architecture can be classified in multiple legitimate ways depending on whether the goal is documentation, design, analysis, or teaching. (ISO/IEC/IEEE, 2022).
- A common formal classification is the SEI / Views and Beyond grouping into **module**, **component-and-connector**, and **allocation** views. (Clements et al., 2004).
- Your classification is a good **course taxonomy** because it separates broad structural forms, reusable architectural solution forms, and repository-level organization. (Clements et al., 2004; Bachmann et al., 2000).
- The best way to defend it is to present it as a **pedagogical working classification**, not as the only official standard. (ISO/IEC/IEEE, 2022).

---

## References

- Abbott, M. L., & Fisher, M. T. (2015). *The art of scalability: Scalable web architecture, processes, and organizations for the modern enterprise* (2nd ed.). Addison-Wesley Professional.
- Bachmann, F., Clements, P., Bass, L., Carriere, J., Klein, M., & Nord, R. (2000). *Software architecture documentation in practice*. Software Engineering Institute, Carnegie Mellon University.
- Bass, L., Clements, P., & Kazman, R. (2012). *Software architecture in practice* (3rd ed.). Addison-Wesley Professional.
- Brown, S. (2020). *The C4 model for visualising software architecture*. leanpub.com.
- Clements, P. C., Bachmann, F., Bass, L., Garlan, D., Ivers, J., Little, R., Nord, R., & Stafford, J. (2004). *Documenting component and connector views with UML 2.0* (CMU/SEI-2004-TR-008). Software Engineering Institute, Carnegie Mellon University.
- Clements, P. C., & Northrop, L. M. (1996). *Software architecture: An executive overview* (CMU/SEI-96-TR-003). Software Engineering Institute, Carnegie Mellon University.
- Evans, E. (2003). *Domain-driven design: Tackling complexity in the heart of software*. Addison-Wesley Professional.
- Ford, N., Parsons, R., & Kua, P. (2017). *Building evolutionary architectures: Support constant change*. O'Reilly Media.
- Garlan, D., & Shaw, M. (1993). *An introduction to software architecture*. In Advances in software engineering and knowledge engineering (pp. 1-39). World Scientific.
- ISO/IEC/IEEE. (2022). *ISO/IEC/IEEE 42010:2022: Software, systems and enterprise—Architecture description*. International Organization for Standardization.
- Martin, R. C. (2017). *Clean architecture: A craftsman's guide to software structure and design*. Prentice Hall.
- Nygard, M. T. (2018). *Release it!: Design and deploy production-ready software* (2nd ed.). Pragmatic Bookshelf.
- Richards, M., & Ford, N. (2020). *Fundamentals of software architecture: An engineering approach*. O'Reilly Media.