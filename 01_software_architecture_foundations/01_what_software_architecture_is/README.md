# 01. What Software Architecture Is

---

## Introduction

> *Software architecture refers to the important structure or structures of a software system.*

In software architecture literature, it is described in terms of the system’s elements, the externally visible properties of those elements, and the relationships among them. This means architecture is not just “having many files” or “having a diagram”; it is the meaningful organization of the parts that matter for understanding, building, and evolving a system (Bass et al., 2021; Northrop, 2007).

---

## A Simple Definition

A practical way to understand software architecture is this:

> **Software architecture is the important structural organization of a software system.**

That structure is comprised of three core components:

| Component | Description |
| :--- | :--- |
| **Elements** | The main parts of the system. |
| **Relationships** | How those parts interact and communicate. |
| **Properties** | What is externally visible or important about those parts. |

In other words, architecture focuses on the parts that matter for reasoning about the system, not on every small implementation detail (Northrop, 2007).

---

## What Counts as an Element?

An architectural element can vary depending on the structure being described. In one view, the elements may be *modules* or *layers*. In another, they may be *processes*, *services*, *containers*, or *deployment nodes*. The key point is that architecture focuses on the parts that are important for understanding the system at a higher level (Clements & Northrop, 1996; Northrop, 2007).

In a small web application, examples of architectural elements might include:

- `Route handlers`
- `Controllers`
- `Services`
- `Repositories`
- `Databases`
- `API servers`

*Note: Not every file or folder is automatically an architectural element. The important thing is to identify the parts and interactions that are significant for system understanding, change, and communication.*

---

## Architecture Is About Relationships

Architecture is not only about identifying parts. It is also about understanding how those parts relate to one another. For example: 

1. A **route** may call a **controller**. 
2. The **controller** may call a **service**.
3. The **service** may depend on a **repository**. 

These interaction paths and dependencies are architectural information because they shape how the system behaves and changes over time (Bass et al., 2021; Clements & Northrop, 1996).

This is one reason architecture is often represented with **boxes** and **lines**: boxes represent important elements, and lines represent relationships among them. That form is useful because it helps people reason about the system at a level higher than raw code (Northrop, 2007).

---

## One System Can Have Many Structures

A central idea in software architecture is that a system does not have only *one* structure. Architecture literature emphasizes that systems can and do have *many* structures, and that different stakeholders may need different views of those structures (Northrop, 2007; Clements et al., 2010).

For example, the same system can be described through various views:

| View Type | Focus Area |
| :--- | :--- |
| **Module View** | Shows code units and responsibilities. |
| **Runtime View** | Shows interactions during execution. |
| **Deployment View** | Shows where the software runs. |

Because of this, one single diagram usually does not represent the entire architecture; it typically shows only one view of it (Clements & Northrop, 1996; Clements et al., 2010).

---

## Architecture Is Not the Same as Implementation

Architecture is related to implementation, but it is **not** the same thing as implementation. Clements and Northrop explain that architecture embodies early design decisions and places constraints on implementation. An implementation exhibits an architecture when it conforms to those structural decisions, including the prescribed components and their interactions (Clements & Northrop, 1996).

So two systems may use the same programming language and still have very different architectures depending on how responsibilities, boundaries, and dependencies are organized. Likewise, source files alone do not explain the architecture unless the structural decisions behind them are clear (Clements & Northrop, 1996; Northrop, 2007).

---

## Why This Matters

Software architecture matters because it:
- **Supports stakeholder communication**
- **Captures early design decisions**
- **Strongly influences qualities** such as performance, modifiability, reliability, and security. 

Architectural decisions are among the hardest to change and have far-reaching consequences during development, deployment, and maintenance (Clements & Northrop, 1996; Northrop, 2007; Bass et al., 2021).

Architecture also provides a common high-level language for different stakeholders. It helps customers, managers, developers, testers, and users discuss the system in a way that is manageable even when the system is large and complex (Clements & Northrop, 1996).

---

## What This Folder’s Demo Is Supposed to Show

The coding demo for this section should not try to be advanced. Its purpose is to make the definition of architecture concrete.

A small demo project in this folder should help you identify:

1. **The main elements** of the system.
2. **The responsibilities** of those elements.
3. **The relationships** among them.
4. **The boundaries** between parts of the application.

For example, in a tiny task API, you might identify that `routes` receive requests, `controllers` coordinate actions, `services` contain application logic, `repositories` manage data access, and the `data layer` stores records. That is already enough to begin reasoning about the system architecturally (Northrop, 2007; Clements & Northrop, 1996).

---

## How to Read the Demo Architecturally

When you open the demo project, do not look at it only as a collection of files. Instead, ask questions like these:

> - What are the main parts of the system?
> - What is each part responsible for?
> - Which parts depend on which other parts?
> - Where are the boundaries?
> - If one part changed, what else would likely be affected?

These questions reflect the core purpose of architecture: helping us reason about a system through its important structures rather than through isolated code fragments (Northrop, 2007).

---

## Key Takeaways

| 🔑 Key Concept | Summary |
| :--- | :--- |
| **Structure** | Software architecture is the structure or structures of a software system (Bass et al., 2021; Northrop, 2007). |
| **Components** | It includes elements, relationships, and externally visible properties (Northrop, 2007). |
| **Views** | A system can have multiple architectural views, not just one diagram (Clements & Northrop, 1996; Clements et al., 2010). |
| **Constraints** | Architecture is not identical to raw implementation; it constrains and guides it (Clements & Northrop, 1996). |
| **Impact** | Architecture matters because it shapes communication, quality attributes, and future change (Bass et al., 2021; Clements & Northrop, 1996). |

---

## References

- Bass, L., Clements, P. C., & Kazman, R. (2021). *Software architecture in practice* (4th ed.). Addison-Wesley Professional.
- Clements, P. C., Bachmann, F., Bass, L., Garlan, D., Ivers, J., Little, R., Merson, P., Nord, R., & Stafford, J. A. (2010). *Documenting software architectures: Views and beyond* (2nd ed.). Addison-Wesley Professional.
- Clements, P. C., & Northrop, L. M. (1996). *Software architecture: An executive overview* (CMU/SEI-96-TR-003). Software Engineering Institute, Carnegie Mellon University.
- Northrop, L. M. (2007, September). *The role of software architecture in system development and beyond*. Software Engineering Institute, Carnegie Mellon University.
 University.