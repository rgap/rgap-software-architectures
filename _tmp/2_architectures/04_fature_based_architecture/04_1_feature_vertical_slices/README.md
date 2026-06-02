# 03_1 — Vertical feature slices (classic feature folders)

## Theory and historical context

**Vertical slicing** (often called **feature folders** in React) groups everything that belongs to one **user- or business-facing capability**—UI, hooks, API adapters, formatting—under a single directory such as `features/counter`. This is the most direct translation of Jimmy Bogard’s **vertical slice architecture** to the client: the “slice” is a cohesive module you can reason about and potentially delete as a unit.

It differs from **layered** folders (`components/`, `hooks/` globally) because the primary axis of navigation is **what the product does**, not **what technical role a file plays**. Shared layout and design tokens typically live in `shared/` (or `common/`) only when two or more features need them.

**References (theory):**

- Bogard, J. “Vertical Slice Architecture.” https://www.jimmybogard.com/vertical-slice-architecture/  
- React docs — scaling with feature-oriented structure (react.dev).  
- Fowler, M. “BoundedContext” — analogous idea of a cohesive module boundary.

---

## Other common names

- Feature folders / feature modules  
- Capability folders  
- Colocated vertical slice (frontend)

---

## Description

Two feature slices — `features/auth/` (login form, session hook, credential check) and `features/catalog/` (product list, filter, formatting). `shared/layout/Shell.jsx` is the cross-cutting shell. Each feature's `index.js` re-exports its public surface.

---

## Pros

- Strong locality: one subtree per feature.  
- Easy onboarding (“counter code is under `features/counter`”).  
- Natural fit for team ownership per feature.

---

## Cons

- `shared/` can become a junk drawer without rules.  
- Cross-feature dependencies need explicit guidelines.  
- Duplication if features rarely share abstractions.

---

## Folder structure

```
03_1_feature_vertical_slices/
├── README.md
├── index.html
├── package.json
├── vite.config.js
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
    │       ├── products.js
    │       └── format.js
    └── shared/
        └── layout/
            └── Shell.jsx
```

---

## Related patterns

- **03_2** — Taxonomy inside `shared/` (ui, lib, …).  
- **03_4** — Feature-Sliced Design–style global layers + features.  
- **Layered by type** (`02_*`) — orthogonal: technical buckets instead of features.

---

## Quick glossary

| Term | Meaning |
|------|--------|
| Vertical slice | Full stack of a feature in one module (here: front-end slice). |
| Barrel file | `index.js` that re-exports a module’s public surface. |
| Shared | Code reused by multiple features, not owned by one slice. |

---

## Run it

```bash
npm install
npm run dev
```

---

## References

1. Bogard, J. “Vertical Slice Architecture.” https://www.jimmybogard.com/vertical-slice-architecture/  
2. React Docs — https://react.dev/learn/thinking-in-react  
3. Feature-Sliced Design (contrast). https://feature-sliced.design/
