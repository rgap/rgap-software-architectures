# 03_6 — Internal layers inside a feature (ui / model / api)

## Theory and historical context

Some teams keep **vertical slices** (`features/auth`, `features/catalog`) but **subdivide** each slice by technical concern: **`ui/`** (view), **`model/`** (state + pure logic), **`api/`** (network or IO adapters). This is a **hybrid**: globally you are feature-first; locally you are **layered** -- similar to **screaming architecture** inside a boundary.

It relates to **hexagonal / ports and adapters** in miniature: `api/` holds adapters; `model/` holds core logic; `ui/` drives user actions. For large features, this avoids a single crowded folder without returning to global `hooks/` and `services/` trees.

**References (theory):**

- Cockburn, A. "Hexagonal Architecture" -- ports and adapters. https://alistair.cockburn.us/hexagonal-architecture/  
- Freeman, E. et al. *Head First Design Patterns* -- facade and separation of concerns.  
- Community articles on "feature folders with ui/model/api" (React + Redux patterns).

---

## Other common names

- Mini layered architecture per feature  
- Feature-local DDD / clean architecture  
- Sliced layering (informal)

---

## Description

`features/auth/` and `features/catalog/` each contain `ui/` (React components), `model/` (hooks + formatters), and `api/` (credentials / product data). Each feature's `index.js` re-exports only the public surface. The internal layering mirrors hexagonal "ports and adapters" at feature scale.

---

## Pros

- Large features stay navigable without global layer folders.  
- Clear place for IO (`api/`) vs. state (`model/`).  
- Reusable across teams that already think in layers.

---

## Cons

- Nested structure for small features feels heavy.  
- Risk of inconsistent names (`model` vs `state` vs `domain`).  
- Cross-feature reuse of `model/` code may duplicate until extracted to `entities/` or `shared/`.

---

## Folder structure

```
03_6_feature_internal_layers/
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
    │   │   ├── ui/
    │   │   │   ├── AuthPanel.jsx
    │   │   │   └── LoginForm.jsx
    │   │   ├── model/
    │   │   │   └── useAuth.js
    │   │   └── api/
    │   │       └── credentials.js
    │   └── catalog/
    │       ├── index.js
    │       ├── ui/
    │       │   ├── CatalogPanel.jsx
    │       │   └── CatalogList.jsx
    │       ├── model/
    │       │   ├── useCatalogFilter.js
    │       │   └── format.js
    │       └── api/
    │           └── products.js
    └── shared/
        └── ui/
            └── Shell.jsx
```

---

## Related patterns

- **03_4** -- Global `entities/` for reuse; internal layers here stay feature-local.  
- **Hexagonal architecture** -- same idea at larger scale.  
- **03_1** -- flat inside feature when the feature stays tiny.

---

## Quick glossary

| Term | Meaning |
|------|--------|
| Model | State + rules (here: hook + pure format). |
| API | Boundary to external world (HTTP, storage). |
| Adapter | Implements a port to external systems (here: stub). |

---

## Run it

```bash
npm install
npm run dev
```

---

## References

1. Cockburn, A. Hexagonal architecture. https://alistair.cockburn.us/hexagonal-architecture/  
2. Evans, E. *Domain-Driven Design* -- layered architecture in bounded contexts.  
3. Martin, R. C. *Clean Architecture* -- dependency rule (conceptual parallel).
