# 02 — Layered architecture (package by technical type)

## Theory and historical context

**Layered** or **n-tier** thinking divides code by *technical* responsibility: presentation (components/pages), application hooks, infrastructure (services), and pure helpers (utils). In front-end projects this is often called **package by type** or **bucket folders** (`components/`, `hooks/`, `services/`).

The pattern mirrors classical enterprise layering (presentation → application → domain → infrastructure) mapped to React idioms. It became widespread in **mid-2010s** SPA codebases as teams outgrew flat folders and wanted predictable places for new files. A known tension: layers optimize for *role* clarity, not for *feature* locality—changing one user story can touch many folders.

**References (theory):**

- Richards, M. (2020). *Fundamentals of Software Architecture* — layering and trade-offs.  
- Fowler, M. “PresentationDomainDataLayering” — conceptual layering vs. folder structure.  
- React docs — suggested groupings (components, hooks) as your app grows.

---

## Other common names

- Package by type / technical layering  
- Bucket / layer folders (components, hooks, utils)  
- Horizontal slicing (contrasts with vertical “feature” slices)

---

## Description

The same auth + catalog app is now distributed across **technical buckets**: `pages/` for screen composition, `components/` for `LoginForm` and `CatalogList`, `hooks/` for `useAuth` and `useCatalogFilter`, `services/` for credential validation and product data, and `utils/` for `formatPrice`. `App.jsx` delegates to `HomePage`.

---

## Pros

- New contributors know *where* to add a hook vs. a presentational piece.  
- Encourages reuse of generic components across pages.  
- Aligns with many job-market and tutorial expectations.

---

## Cons

- A single feature’s code is scattered across folders—harder end-to-end refactors.  
- Risk of “god” `components/` or `utils/` dumping grounds.  
- Import paths can get long (`../../components/...`) without path aliases.

---

## Folder structure

```
02_layered_by_type/
├── README.md
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── components/
    │   ├── LoginForm.jsx
    │   └── CatalogList.jsx
    ├── hooks/
    │   ├── useAuth.js
    │   └── useCatalogFilter.js
    ├── pages/
    │   └── HomePage.jsx
    ├── services/
    │   ├── auth.js
    │   └── catalog.js
    └── utils/
        └── format.js
```

---

## Related patterns

- **Flat architecture** — fewer directories; less ceremony.  
- **Feature-based / vertical slice** — colocate by product feature instead of layer.  
- **Clean/hexagonal (frontend)** — stricter ports/adapters (often overkill for small apps).

---

## Quick glossary

| Term | Meaning |
|------|--------|
| Layer | A level of responsibility (e.g. UI vs. service). |
| Package by type | Folders named after technical kind, not business area. |
| Horizontal slice | Cutting across roles at the same “height” in the stack. |

---

## Run it

From this folder:

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

---

## References

1. Richards, M., & Ford, N. (2020). *Fundamentals of Software Architecture*. O’Reilly.  
2. Fowler, M. “PresentationDomainDataLayering.” https://martinfowler.com/bliki/PresentationDomainDataLayering.html  
3. React Docs — “File structure” (react.dev/learn/thinking-in-react).  
4. Feature-Sliced Design — contrast with layers (feature-sliced.design).
