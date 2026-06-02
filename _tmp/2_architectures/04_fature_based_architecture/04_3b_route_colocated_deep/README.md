# 03_3b -- Route-colocated deep nesting (everything under the route)

## Theory and historical context

**Deep route colocation** pushes the idea of "route owns its code" to the limit: not only the screen component but also its **domain logic, hooks, and data** nest under the route directory. Auth logic? Under `routes/home/auth/`. Catalog data? Under `routes/home/catalog/`. There is **no** global `services/`, `hooks/`, or `features/` tree -- the route is the boundary.

This was the natural outcome of **Remix's** philosophy that every route is a self-contained module (loader + action + component). It also echoes the **Rails** convention of "fat controllers" -- though here the routes folder acts more like bounded contexts keyed to URLs.

**References (theory):**

- Remix -- route modules and colocation. https://remix.run/docs/en/main/discussion/routes  
- Next.js -- "Colocation" in App Router. https://nextjs.org/docs/app/building-your-application/routing  
- Ryan Florence talks on nested routing and data loading.

---

## Other common names

- Deep route colocation  
- Full-stack route modules (Remix)  
- Screen-scoped architecture

---

## Description

`App.jsx` mounts `HomeRoute`. All UI **and** logic for the home path sits under `routes/home/`, with `auth/` and `catalog/` subdirectories that each contain components, hooks, and data. There are no shared folders at the `src/` root.

Compare with **03_3a** which keeps routes as thin screens and lifts services, models, and components to the `src/` root.

---

## Pros

- Maximum locality: deleting a route removes all its code.  
- Easy mental model per URL.  
- Aligns with file-system routing frameworks.

---

## Cons

- Shared logic between routes must be duplicated or later extracted.  
- Deep folder nesting grows with each subsection.  
- No shared design-system or service layer out of the box.

---

## Folder structure

```
03_3b_route_colocated_deep/
├── README.md
├── package.json
├── vite.config.js
├── index.html
└── src/
    ├── main.jsx
    ├── App.jsx
    └── routes/
        └── home/
            ├── HomeRoute.jsx
            ├── auth/
            │   ├── AuthSection.jsx
            │   ├── LoginForm.jsx
            │   ├── useAuth.js
            │   └── credentials.js
            └── catalog/
                ├── CatalogSection.jsx
                ├── CatalogList.jsx
                ├── products.js
                └── format.js
```

---

## Related patterns

- **03_3a** -- Route-first but with shared `services/`, `components/`, `models/`.  
- **03_1** -- Global `features/` tree instead of route-first.  
- **Remix / Next route folders** -- production-grade versions with loaders.

---

## Quick glossary

| Term | Meaning |
|------|--------|
| Deep colocation | All concerns (data, hooks, UI) live under the route. |
| Route module | Bundle of UI + data hooks for one URL segment. |

---

## Run it

```bash
npm install
npm run dev
```

---

## References

1. Remix Documentation -- Routing. https://remix.run/docs/en/main/discussion/routes  
2. Next.js -- Project organization and colocation. https://nextjs.org/docs/app/building-your-application/routing  
3. Florence, R. "Everything you need to know about React Router." (talks and blog).
