# 03_3a -- Route-first with shared services, components, and models

## Theory and historical context

This variant uses **`routes/`** as the top-level navigation axis, but keeps **domain logic and reusable UI at the `src/` root** in shared folders: `services/`, `models/`, `contexts/`, `providers/`, `components/`, and `lib/`. Routes are **thin screens** that compose shared pieces -- they own layout and orchestration, not business rules.

This pattern is common in **medium-to-large SPAs** that use React Router, TanStack Router, or similar libraries. It mirrors the split often seen in **Next.js Pages Router** projects or classic **Create React App** setups where routes import from global `services/` and `components/`.

**References (theory):**

- React Router -- "Feature overview." https://reactrouter.com/en/main  
- Dodds, K. C. "How I structure my React projects." (blog, colocation principles)  
- Richards, M. & Ford, N. *Fundamentals of Software Architecture* -- separation into presentation + service layers.

---

## Other common names

- Route-first with shared layer  
- Classic SPA folder structure  
- Pages + services (CRA-era)

---

## Description

- **`routes/`** -- one subfolder per URL: `root/` (layout + nav), `home/` (catalog), `login/`, `not-found/`.  
- **`services/`** -- data access: `auth.js` (credential validation), `catalog.js` (product data + filter).  
- **`models/`** -- shared domain types (here, a JSDoc `Product` typedef).  
- **`contexts/` + `providers/`** -- React context for auth session, consumed by any route.  
- **`components/`** -- reusable UI: `LoginForm`, `ProductList`.  
- **`lib/`** -- pure helpers: `formatPrice`.

A minimal state-based "router" in `router.jsx` switches between routes. In production you would use React Router or TanStack Router.

---

## Pros

- Routes stay small -- easy to understand each screen in isolation.  
- Services and models are shared without duplication.  
- Natural path to code-splitting per route.

---

## Cons

- Global folders can grow into dumping grounds without discipline.  
- Auth logic not colocated with login route -- scattered across `contexts/`, `providers/`, `services/`.  
- Needs a real router library for production (file-based routing or config).

---

## Folder structure

```
03_3a_route_first_shared_services/
├── README.md
├── package.json
├── vite.config.js
├── index.html
└── src/
    ├── main.jsx
    ├── router.jsx
    ├── routes/
    │   ├── root/
    │   │   ├── index.jsx          # layout + outlet
    │   │   └── components/
    │   │       └── Nav.jsx
    │   ├── home/
    │   │   └── index.jsx          # catalog screen
    │   ├── login/
    │   │   └── index.jsx          # sign-in screen
    │   └── not-found/
    │       └── index.jsx
    ├── models/
    │   └── product.js             # shared domain type
    ├── services/
    │   ├── auth.js                # credential validation
    │   └── catalog.js             # product data + filter
    ├── contexts/
    │   └── AuthContext.js
    ├── providers/
    │   └── AuthProvider.jsx
    ├── components/
    │   ├── LoginForm.jsx
    │   └── ProductList.jsx
    └── lib/
        └── format.js
```

---

## Related patterns

- **03_3b** -- Deep route colocation (everything under the route, no shared root folders).  
- **02 Layered by type** -- similar global buckets but without route-first navigation axis.  
- **03_1** -- Feature folders instead of routes as the primary axis.

---

## Quick glossary

| Term | Meaning |
|------|--------|
| Route-first | Primary file axis is URL / navigation, not domain feature. |
| Thin screen | Route component that composes shared pieces without owning logic. |
| Provider | React component that supplies context to the subtree. |
| Service | Module that encapsulates data access or domain rules. |

---

## Run it

```bash
npm install
npm run dev
```

---

## References

1. React Router -- Feature overview. https://reactrouter.com/en/main  
2. Dodds, K. C. "How I structure my React projects." kentcdodds.com  
3. Richards, M. & Ford, N. *Fundamentals of Software Architecture.* O'Reilly, 2020.
