# 03_2 — Feature slices + **shared kernel taxonomy**

## Theory and historical context

This variant keeps **feature folders** (`features/*`) but splits the **shared kernel** into predictable buckets: for example `shared/ui` (presentational primitives and layout), `shared/lib` (pure utilities), `shared/config` (constants and environment-facing config). That mirrors how **design systems** and **platform teams** think: shared code is not a single dumping ground but a small **taxonomy**.

DDD’s **shared kernel** (Evans, 2003) is an explicitly negotiated set of models shared between bounded contexts; on the front end, “negotiated” becomes team convention—what may live in `shared/*` versus what must stay feature-local.

**References (theory):**

- Evans, E. (2003). *Domain-Driven Design* — shared kernel between contexts.  
- Feature-Sliced Design — `shared/` layer with segments (feature-sliced.design).  
- Frost, B. — design systems often separate tokens, primitives, and patterns.

---

## Other common names

- Partitioned shared layer  
- Shared ui / lib / config split  
- Platform vs. product folders (informal)

---

## Description

Features remain vertically sliced (`features/auth`, `features/catalog`); anything **reused and domain-agnostic** moves to `shared/lib` (here, `formatPrice`). Layout chrome lives in `shared/ui`. App-wide constants sit in `shared/config`. Feature-specific data stays under each feature.

---

## Pros

- Clearer rules than a flat `shared/` folder.  
- Aligns with design-system and platform boundaries.  
- Still keeps feature code colocated.

---

## Cons

- More directories; debates over “is this `lib` or `ui`?”  
- Risk of everything drifting into `shared/lib`.  
- Slightly longer import paths without aliases.

---

## Folder structure

```
03_2_shared_kernel_taxonomy/
├── README.md
├── package.json
├── vite.config.js
├── index.html
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── features/
    │   ├── auth/
    │   │   ├── index.js
    │   │   ├── AuthPanel.jsx
    │   │   ├── LoginForm.jsx
    │   │   ├── useAuth.js
    │   │   └── credentials.js
    │   └── catalog/
    │       ├── index.js
    │       ├── CatalogPanel.jsx
    │       ├── CatalogList.jsx
    │       ├── useCatalogFilter.js
    │       └── products.js
    └── shared/
        ├── ui/
        │   └── Shell.jsx
        ├── lib/
        │   └── format.js       ← cross-feature helper
        └── config/
            └── app.js
```

---

## Related patterns

- **03_1** — Single `shared/layout` without segment taxonomy.  
- **Feature-Sliced Design `shared`** — stricter segment rules.  
- **03_5** — Public API + aliases can shorten `shared` imports.

---

## Quick glossary

| Term | Meaning |
|------|--------|
| Shared kernel | Agreed cross-cutting subset of models or utilities. |
| Taxonomy | Classification (`ui` vs `lib` vs `config`). |
| Segment | A subfolder category inside a layer (FSD terminology). |

---

## Run it

```bash
npm install
npm run dev
```

---

## References

1. Evans, E. *Domain-Driven Design.* Addison-Wesley, 2003.  
2. Feature-Sliced Design — “Shared layer.” https://feature-sliced.design/docs/reference/layers#shared  
3. Feature-Sliced Design — “Segments.” https://feature-sliced.design/docs/reference/slices-segments
