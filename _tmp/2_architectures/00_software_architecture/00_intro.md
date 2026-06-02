# Software Architecture in Software Engineering

## 1. Introduction

Software architecture refers to the high-level structure of a software system, defining its components, their relationships, and guiding principles for design and evolution. It acts as a blueprint for both **frontend** and **backend** systems, ensuring scalability, maintainability, and performance.

> _"Software architecture is the set of structures needed to reason about the system."_ (Bass et al., 2013)

---

## 2. Why Architecture Matters

| Attribute | Description |
| :--- | :--- |
| Attribute | Description | Impact |
| :--- | :--- | :--- |
| **Scalability** | Ability to handle growth in users or data | Without proper architecture, systems become slow and unstable as usage increases |
| **Maintainability** | Ease of updating and fixing systems | Poor architecture leads to tangled code that is difficult to modify and debug |
| **Performance** | Efficient response times | Bad design choices can result in slow load times and poor user experience |
| **Security** | Protection of data and operations | Inadequate architecture exposes systems to vulnerabilities and data breaches |
| **Reliability** | System stability under stress | Unstable systems crash frequently, leading to data loss and user frustration |


Poor architectural decisions are expensive to fix later in the lifecycle (Bass et al., 2013).

---

## 3. Core Architectural Concepts

### 3.1 Components and Connectors

Components are blocks of code that perform a specific function, and connectors are how they communicate with each other. In other areas, components are called entities and connectors are called relations.

- **Components**: Independent units (e.g., UI, API, database)
- **Connectors**: Communication paths (e.g., HTTP, WebSockets)

These structures help engineers reason about system behavior (Bass et al., 2013).

### 3.2 Separation of Concerns

Dividing a system into distinct sections to reduce complexity (Dijkstra, 1982).

### 3.3 Abstraction

Hiding implementation details behind interfaces (Sommerville, 2016).

### 3.4 Modularity

Breaking systems into smaller, reusable pieces (Sommerville, 2016).

### 3.5 Coupling and Cohesion

- **Low coupling**: Fewer dependencies between components
- **High cohesion**: Components have focused responsibilities (e.g. a component should only have one responsibility)

These principles improve maintainability and flexibility (Martin, 2017).
