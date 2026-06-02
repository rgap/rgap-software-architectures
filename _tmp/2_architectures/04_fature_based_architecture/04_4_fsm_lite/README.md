# 03_4 — Feature-Sliced Design (**lite**): app · pages · features · entities · shared

## Theory and historical context

**Feature-Sliced Design (FSD)** is a front-end methodology (not React-specific) that standardizes **layers** and **slices**. Layers (top to bottom: `app`, `processes`, `pages`, `widgets`, `features`, `entities`, `shared`) express **stability** and **allowed dependency direction**—higher layers may depend on lower ones, not the reverse.

This repo’s example is **intentionally small**: it includes `app/`, `pages/`, `features/`, `entities/`, `shared/` to show the **idea** without full FSD tooling (public APIs per slice, segment naming everywhere). Real FSD projects add **slice isolation** and **import rules** (often enforced by ESLint).

**References (theory):**

- Feature-Sliced Design — official docs. https://feature-sliced.design/  
- “Layers” and “Slices” reference. https://feature-sliced.design/docs/reference/layers  
- Stepanenko, I. et al. — FSD community methodology (see site authors).

---

## Other common names

- FSD (abbreviation)  
- Layered feature architecture (informal)  
- “Slices” architecture (colloquial)

---

## Description

- **`app/`** — application shell (`App.jsx`).  
- **`pages/`** — full screens composing features.  
- **`features/`** — user scenarios: `auth` (login/session) and `catalog` (product list with search).  
- **`entities/`** — reusable business nouns (`product` data and `formatPrice`).  
- **`shared/`** — generic UI (`Shell`).

`formatPrice` and product data live in **entities** because they could be reused by other features; feature-specific UI stays under each feature.

---

## Pros

- Clear dependency direction (pages → features → entities → shared).  
- Scales to large teams with lintable import rules.  
- Shared vocabulary across React + other frameworks.

---

## Cons

- Heavier than plain feature folders for tiny apps.  
- Learning curve; debates on “entity vs feature.”  
- Full FSD needs discipline and often ESLint plugins.

---

## Folder structure

```
03_4_fsm_lite/
├── README.md
├── package.json
├── vite.config.js
├── index.html
└── src/
    ├── main.jsx
    ├── app/
    │   └── App.jsx
    ├── pages/
    │   └── home/
    │       └── HomePage.jsx
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
    │       └── useCatalogFilter.js
    ├── entities/
    │   └── product/
    │       ├── products.js
    │       └── format.js
    └── shared/
        └── ui/
            └── Shell.jsx
```

---

## Related patterns

- **Full FSD** — processes, widgets, public API per slice.  
- **03_1** — features only, no global layer stack.  
- **Clean architecture** — similar dependency rule, different naming.

---

## Quick glossary

| Term | Meaning |
|------|--------|
| Layer | Stability tier; lower layers change less often. |
| Slice | Vertical cut inside a layer (e.g. `counter` feature). |
| Entity | Business object reused across features (FSD sense). |

---

## Run it

```bash
npm install
npm run dev
```

---

## References

1. Feature-Sliced Design. https://feature-sliced.design/docs/get-started/overview  
2. Feature-Sliced Design — Layers. https://feature-sliced.design/docs/reference/layers  
3. Feature-Sliced Design — Public API rule. https://feature-sliced.design/docs/reference/public-api
