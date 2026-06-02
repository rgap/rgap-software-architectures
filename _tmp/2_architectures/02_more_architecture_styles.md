---

## 4. Service-Oriented Architecture (SOA)

SOA structures a system as **interacting services**, typically at a coarser grain than microservices. In practice, SOA often emphasizes enterprise integration, interoperability, and service coordination across business domains (Richards & Ford, 2020; Sommerville, 2021).

### Typical characteristics

- Services represent business capabilities
- Common emphasis on integration across enterprise systems
- Often uses more centralized coordination or shared infrastructure than microservices do (Bass et al., 2021; Richards & Ford, 2020)

---

## 5. Microservices architecture

Microservices architecture is a style built from **small, autonomous, independently deployable services**, each typically aligned to a business capability or bounded context. This style emphasizes service autonomy, decentralization, and independent change (Bass et al., 2021; Richards & Ford, 2020).

### Typical characteristics

- Small autonomous services
- Independent deployment
- Often decentralized data ownership
- Strong alignment with DevOps, containers, and team autonomy (Bass et al., 2021; Richards & Ford, 2020)

### Difference from SOA

A strict summary is:

- **SOA** usually refers to broader enterprise service integration
- **Microservices** emphasize smaller services, stronger autonomy, and independent deployment (Bass et al., 2021; Richards & Ford, 2020)

---

## 6. Event-driven architecture

An event-driven architecture is organized around **event producers, event consumers, and communication through events rather than only direct request-response interactions**. It is commonly associated with loose coupling and asynchronous collaboration between components (Bass et al., 2021; Richards & Ford, 2020).

### Typical characteristics

- Loose coupling
- Asynchronous communication
- Components react to events rather than relying only on direct calls
- Useful for scalability, integration, and reactive systems (Bass et al., 2021; Richards & Ford, 2020)

### Important note

Event-driven architecture can coexist with other styles. For example, a microservices system may also be event-driven. So this is a style, but it is not always exclusive (Bass et al., 2021; Richards & Ford, 2020).

---

## 7. Serverless architecture

Serverless architecture, often associated with **Function as a Service (FaaS)** and managed cloud services, treats functions or event-triggered units as the main deployable execution units while much of the infrastructure management is delegated to the platform provider (Bass et al., 2021; Richards & Ford, 2020).

### Typical characteristics

- Fine-grained deployment units
- Managed runtime and infrastructure
- Event-triggered execution is common
- Strong fit for bursty workloads and platform-managed operations (Bass et al., 2021; Richards & Ford, 2020)

---

# 2. Architectural Patterns

> **Definition:** architectural patterns are reusable ways of organizing responsibilities, dependencies, and component interactions inside a system. They usually do **not**, by themselves, define deployment topology (Buschmann et al., 1996; Martin, 2017).

## 1. Layered pattern

This pattern divides code into layers such as presentation, application or service, domain, and infrastructure. It is one of the most common ways to structure internal responsibilities (Martin, 2017; Sommerville, 2021).

---

## 2. MVC (Model-View-Controller)

MVC separates:

- **Model**: domain or data
- **View**: presentation
- **Controller**: input and interaction handling

It is mainly used to structure interactive applications, especially UI-oriented systems. It is a classic example of an architectural or application-level organizational pattern (Buschmann et al., 1996; Fowler, 2002; Sommerville, 2021).

---

## 3. MVVM (Model-View-ViewModel)

MVVM is a UI-oriented pattern commonly used where binding mechanisms are important. It separates the view from state and presentation logic more explicitly than classic MVC. It is especially common in frameworks that support declarative data binding (Fowler, 2002; Martin, 2017).

---

## 4. Repository pattern

Repository abstracts access to persistence so domain or application logic is less coupled to database details. This is not usually treated as a full system-wide architecture style; it is a reusable structural pattern inside an architecture (Fowler, 2002; Martin, 2017).

---

## 5. Modular / feature-based pattern

This organizes the system around **features or business areas** rather than technical layers alone. It is closer to a higher-level structural pattern because it shapes how responsibilities are grouped, but it still usually remains below the level of deployment architecture. This kind of decomposition is consistent with classic modularization principles in software design (Fowler, 2002; Martin, 2017; Sommerville, 2021).

---

## 6. Hexagonal architecture (Ports and Adapters)

Hexagonal architecture isolates the application core from databases, UIs, and external systems through ports and adapters. Its main concern is dependency direction and infrastructure isolation. It belongs to the same family of approaches that prioritize separation of concerns and protection of the domain core (Martin, 2017; Richards & Ford, 2020).

---

## 7. Onion architecture

Onion architecture places the domain at the center and pushes infrastructure outward. Like Hexagonal and Clean Architecture, it enforces dependency rules so inner business rules do not depend on outer technical details. The shared concern across these patterns is the preservation of an independent business core (Martin, 2017; Richards & Ford, 2020).

---

## 8. Clean Architecture

Clean Architecture emphasizes that business rules should remain independent from frameworks, databases, and UI technologies, with dependencies pointing inward toward the core. It is designed to preserve testability, maintainability, and separation of concerns (Martin, 2017).

### Why it is a pattern, not a style

Clean Architecture tells you **how to organize responsibilities and dependencies inside the system**, but it does not by itself say whether the system is a monolith, microservice, client-server system, or serverless system. A microservice can internally use Clean Architecture, and so can a monolith (Bass et al., 2021; Martin, 2017).

---

# 3. Code Organization

> **Definition:** code organization concerns how source code is physically arranged into files, folders, modules, and packages. It is related to architecture, but it is not the same thing. Software engineering literature consistently distinguishes between large-scale architecture decisions and lower-level source code structuring decisions (Fowler, 2002; Martin, 2017; Sommerville, 2021).

This is the section that the earlier version was missing.

## What belongs here

These are **code organization choices**, not architecture styles or architectural patterns by themselves:

### 1. Single-file organization

Everything is placed in one file or a very small number of files.

- Fine for tiny demos or scripts
- Not a reusable architectural solution
- Does not define system responsibilities or deployment structure (Sommerville, 2021)

### 2. Flat organization

Files exist at roughly one directory level with little hierarchy.

- May work for very small projects
- Usually weakens navigability as complexity grows
- Still not an architecture in the formal sense (Fowler, 2002; Sommerville, 2021)

### 3. Package/module-based organization

Code is divided into modules or packages.

- Better reflects modular design
- Helps separate concerns
- Still describes source layout, not full architecture by itself (Fowler, 2002; Sommerville, 2021)

### 4. Layer-based folder organization

Folders mirror technical layers, such as:

- `controllers/`
- `services/`
- `repositories/`
- `models/`

This is a **code-level reflection** of a layered pattern, but the folder structure alone is not the architecture (Martin, 2017; Sommerville, 2021).

### 5. Feature-based folder organization

Folders are organized around business capabilities, such as:

- `users/`
- `orders/`
- `payments/`

This is often a stronger organizational strategy for medium and large systems because it keeps related code together. But again, it is still a source-organization choice unless tied to stronger architectural rules (Fowler, 2002; Martin, 2017).

---

## Why code organization is not architecture by itself

A folder layout does not automatically define:

- runtime communication
- deployment boundaries
- system-wide constraints
- responsibility rules between components

That is why **single-file** and **flat structure** should not be classified as architectural patterns. They are simply organizational states of the codebase. The architecture may be poor, good, implicit, or absent regardless of whether the files are flat or nested (Bass et al., 2021; Fowler, 2002; Sommerville, 2021).

---

# 4. What should be removed from the “architectural patterns” list

These should be removed from a strict architectural-pattern classification:

- **Single-file**
- **Flat structure**

They are not reusable architectural patterns in the same sense as MVC, Hexagonal, or Clean Architecture. They say almost nothing about dependency direction, separation of concerns, or component responsibility (Fowler, 2002; Martin, 2017; Sommerville, 2021).

---

# 5. The main nuance that causes confusion

The most confusing case is **layered**.

It can appear in both categories because:

- as an **architecture style**, it describes large-scale organization into layers or tiers across the system (Bass et al., 2021; Shaw & Garlan, 1996)
- as an **architectural pattern**, it describes an internal way to separate responsibilities within code and components (Martin, 2017)

So the overlap is real. The difference depends on the **scope of discussion**.

---

# 6. Final clean distinction

| Category                  | What it defines                                                        | Examples                                                                              |
| ------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| **Architecture style**    | High-level system structure, communication, sometimes deployment shape | Monolith, Client-Server, SOA, Microservices, Event-Driven, Serverless, Layered/n-tier |
| **Architectural pattern** | Reusable internal organization of responsibilities and dependencies    | Layered, MVC, MVVM, Repository, Hexagonal, Onion, Clean                               |
| **Code organization**     | Physical arrangement of source files, modules, folders, packages       | Single-file, flat, module-based, layer-based folders, feature-based folders           |

---

# 7. Stronger “perfect sentence” for your document

> Architectural styles define the system’s high-level structure and interaction model, architectural patterns define reusable internal ways of organizing responsibilities and dependencies, and code organization defines how source files and modules are physically arranged; although related, these operate at different levels of abstraction (Bass et al., 2021; Martin, 2017; Richards & Ford, 2020).

---

# 8. References

Bass, L., Clements, P., & Kazman, R. (2021). _Software architecture in practice_ (4th ed.). Addison-Wesley Professional.

Buschmann, F., Meunier, R., Rohnert, H., Sommerlad, P., & Stal, M. (1996). _Pattern-oriented software architecture: A system of patterns_ (Vol. 1). Wiley.

Fowler, M. (2002). _Patterns of enterprise application architecture_. Addison-Wesley Professional.

Martin, R. C. (2017). _Clean architecture: A craftsman’s guide to software structure and design_. Pearson.

Richards, M., & Ford, N. (2020). _Fundamentals of software architecture: An engineering approach_. O’Reilly Media.

Shaw, M., & Garlan, D. (1996). _Software architecture: Perspectives on an emerging discipline_. Prentice Hall.

Sommerville, I. (2021). _Software engineering_ (10th ed.). Pearson.
