# 02. Architectural Styles

---

## Introduction

> **Architectural styles** are families of architectures defined by a vocabulary of component and connector types, together with rules about how those types can be combined.

In this course, architectural styles are organized into three teaching-oriented groups. This grouping is **pedagogical** rather than a formal standards taxonomy. It is meant to make the subject easier to learn by separating styles according to the main structural concern they emphasize. That approach is consistent with the broader architecture idea that different structures and views answer different kinds of questions about a system (Clements et al., 2004).

---

## The Three Style Groups in This Course

| Style Group | Primary Focus | Literature Mapping |
| :--- | :--- | :--- |
| **Runtime Interaction Styles** | How active parts of the system collaborate during execution. | Component-and-connector concerns |
| **Deployment / System Composition Styles** | How larger system parts are separated, composed, and deployed. | Allocation & environment-mapping concerns |
| **Internal Application Structure Styles** | How the inside of an application is organized (layers, modules, etc.). | Module concerns |

> **Why this grouping?** Different structures and views answer different kinds of questions about a system. Separating styles by their main structural concern makes comparison and learning easier (Clements et al., 2004).

---

### 1. Runtime Interaction Styles

These styles focus on **how active parts of a system collaborate while the system is running**. Their main concern is runtime communication: requests, responses, data flow, event propagation, signaling, streaming, or message exchange. They are closely related to **component-and-connector thinking** because the emphasis is on executing elements and the connectors through which they interact (Clements et al., 2004).

| Style | Core Idea |
| :--- | :--- |
| **Client-Server** | Centralized resources serving distributed requesters. |
| **Request-Response** | Synchronous, explicit invocations expecting a reply. |
| **Pipe-and-Filter** | Sequential data transformation through processing stages. |
| **Event-Driven Interaction** | Highly decoupled, reactive state changes. |
| **Publish-Subscribe** | Broadcasting messages to multiple unknown listeners. |
| **Peer-to-Peer** | Decentralized, symmetric collaboration among equals. |

> These styles are useful when the central architectural question is _"How is behavior coordinated at runtime?"_

---

### 2. Deployment / System Composition Styles

These styles focus on **how larger parts of the system are separated, packaged, and combined into a whole system**. Here the concern is less about one single message path and more about system boundaries, independently developed or deployed units, infrastructure assumptions, and the overall composition of the solution. This kind of structural reasoning is related to **allocation concerns** and to broader architectural decomposition choices (Clements et al., 2004).

| Style | Core Idea |
| :--- | :--- |
| **Monolith** | A single deployable unit containing all functionality. |
| **Modular Monolith** | One deployment unit, but with well-defined internal module boundaries. |
| **Microservices** | Small, independently deployable services with separate data ownership. |
| **Service-Oriented (SOA)** | Shared enterprise services with standardized contracts. |
| **Serverless** | Functions or event handlers managed entirely by cloud infrastructure. |

> These styles are especially important when architectural decisions affect **scalability, team autonomy, operations, and deployment complexity**.

---

### 3. Internal Application Structure Styles

These styles focus on **how the inside of an application is structurally organized**. Their main concern is the decomposition of responsibilities inside the software: layers, modules, components, plugins, or domain-centered partitions. In Views and Beyond terms, these often align most naturally with **module-oriented concerns**, because they emphasize implementation units and structural relationships among them (Clements et al., 2004).

| Style | Core Idea |
| :--- | :--- |
| **Layered Structure** | Organizing code into horizontal layers with directional dependencies. |
| **Component-Based** | Self-contained, replaceable units with explicit interfaces. |
| **Plugin-Based** | A stable core extended through dynamically loaded plugins. |
| **Data-Centered** | A shared data store at the center, accessed by independent components. |

> These styles are especially useful when the goal is to improve **clarity, modifiability, or responsibility separation** inside a system.

---

## Comparing the Three Groups at a Glance

| Dimension | Runtime Interaction | Deployment / System Composition | Internal Application Structure |
| :--- | :--- | :--- | :--- |
| **Main question** | _How do parts communicate at runtime?_ | _How are parts separated and deployed?_ | _How is the inside of the app organized?_ |
| **Typical concerns** | Latency, coupling, data flow, event propagation | Scalability, team autonomy, deployment boundaries | Modifiability, clarity, responsibility separation |
| **SEI viewtype mapping** | Component-and-connector | Allocation | Module |
| **Example styles** | Client-server, Pub-sub, Pipe-and-filter | Monolith, Microservices, Serverless | Layered, Plugin-based, Data-centered |

---

## Key Takeaways

- **Architectural styles** define families of architectures through component types, connector types, and combination rules (Clements et al., 2004).
- The three groups in this course — **runtime interaction, deployment/composition, and internal structure** — separate styles by the main structural concern they address.
- This grouping is a **pedagogical classification**, not an official standard, but it maps well to distinctions already present in the architecture literature (Clements et al., 2004; Clements & Northrop, 1996).
- Real systems typically **combine styles** from more than one group simultaneously.

---

## References

Bachmann, F., Clements, P., Bass, L., Carriere, J., Klein, M., & Nord, R. (2000). *Software architecture documentation in practice*. Software Engineering Institute, Carnegie Mellon University.

Clements, P. C., Bachmann, F., Bass, L., Garlan, D., Ivers, J., Little, R., Nord, R., & Stafford, J. (2004). *Creating and using software architecture documentation using web-based tool support* (CMU/SEI-2004-TN-037). Software Engineering Institute, Carnegie Mellon University.

Clements, P. C., & Northrop, L. M. (1996). *Software architecture: An executive overview* (CMU/SEI-96-TR-003). Software Engineering Institute, Carnegie Mellon University.