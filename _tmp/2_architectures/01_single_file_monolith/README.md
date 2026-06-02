# 00 — Monolithic Architecture

## Theory and historical context

In software architecture, a **monolith** is a system whose components are **developed, deployed, and evolved as a single unit** (Bass et al., 2013; Fowler, n.d.). At a smaller structural scale, a **single-file** or **single-module** application represents an extreme case of this style, where UI, state, and helper logic are colocated within a single compilation unit. This does not define the monolith itself, but rather a minimal form of internal organization within it. Such an approach reflects the lowest level of _explicit structural separation_: although the runtime may still perform optimizations like code splitting, the developer’s mental model and codebase organization remain centered on a single file.

Historically, early React tutorials and Create React App–style starters often began with `index.js` containing bootstrap plus a tiny `App` inline, mirroring how many frameworks start with “one place to look.” As apps grew, teams split files not because React required it, but because **cognitive load** and **merge conflicts** forced a move toward modularization (see Parnas, 1972, on module decomposition by change drivers).

**References (theory):**

- Bass, L., Clements, P., & Kazman, R. (2013). _Software architecture in practice_ (3rd ed.). Addison-Wesley.
- Parnas, D. L. (1972). “On the Criteria To Be Used in Decomposing Systems into Modules.” _Communications of the ACM_.
- Fowler, M. “MonolithFirst” (martinfowler.com) — when a single deployable unit is acceptable before distribution.
- React docs (legacy and current) — single root render and one component as the minimal mental model.

---

## Other common names

- Single-file application / single-module application
- One-file React application (informal, practice-oriented term)
- All-in-one entry point (informal; e.g., everything defined in index.jsx or main.jsx)

---

## Description

This project is intentionally **minimal**: `src/main.jsx` holds React bootstrap (`createRoot`), the root component, and all app logic in one place. The sample domain is a tiny **auth gate** (demo user/password, in-memory session) and a **product catalog** with search—enough moving parts to feel like a real mini-app, still without splitting files. No folders, no imports between app modules—only third-party imports. It is the simplest _architectural_ choice after “HTML + CDN” and matches the first step of many curricula: prove the toolchain, then add structure.

---

## Pros

- Fastest to read and navigate for tiny demos and learning.
- No indirection: no barrel files, no import path debates.
- Zero structural ceremony; ideal for prototypes of a few dozen lines.

---

## Cons

- Does not scale: merge conflicts, naming collisions, and test difficulty grow quickly.
- Hard to reuse pieces without copy-paste or later extraction.
- Boundaries (UI vs. domain vs. IO) are invisible in the filesystem.

---

## Folder structure

```
00_single_file_monolith/
├── README.md
├── index.html
├── package.json
├── vite.config.js
└── src/
    └── main.jsx          # entry, App, helpers — all in one file
```

---

## Related patterns

- **Flat architecture** — next step: multiple files, one directory.
- **Layered architecture** — separate by technical role (components, hooks, services).
- **Modular monolith** — one deployable unit but many internal modules (later).

---

## Quick glossary

| Term      | Meaning                                                            |
| --------- | ------------------------------------------------------------------ |
| Monolith  | One deployable application; here, one file carrying the whole app. |
| Module    | A file; in JS, each file is typically one module.                  |
| Bootstrap | Code that mounts the React tree to the DOM (`createRoot`).         |

---

## Run it

From this folder:

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).
