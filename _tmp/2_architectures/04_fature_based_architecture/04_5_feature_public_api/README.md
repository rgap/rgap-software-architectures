# 03_5 — Feature module with **public API** (barrel + path alias)

## Theory and historical context

A **public API** for a feature means other packages import from a **single entry** (usually `index.js` / `index.ts`) rather than reaching into `useCounter.js`, `internal/`, etc. This mirrors **information hiding** (Parnas, 1972): callers depend on a stable surface; internals can refactor without churn.

**Feature-Sliced Design** formalizes this with **public API per slice** and often **ESLint** to forbid deep imports. **Path aliases** (`@/features/counter`) keep call sites readable. **Barrel files** have trade-offs (tree-shaking and DX debates), but for teaching, they make the contract obvious.

**References (theory):**

- Parnas, D. L. (1972). “On the Criteria To Be Used in Decomposing Systems into Modules.”  
- Feature-Sliced Design — Public API. https://feature-sliced.design/docs/reference/public-api  
- TypeScript handbook — module resolution and `paths` (similar idea for `@/`).

---

## Other common names

- Barrel export / index file as façade  
- Facade module for a feature  
- Package-style exports inside a monorepo

---

## Description

`App.jsx` imports `AuthPanel`, `useAuth` from `@/features/auth` and `CatalogPanel` from `@/features/catalog` (resolved to each feature's `index.js`). Internal files are never imported from outside a feature folder. Vite `resolve.alias` maps `@` → `src`.

---

## Pros

- Clear boundary for what is “supported” for external use.  
- Easier refactors inside the feature folder.  
- Pairs well with ESLint `no-restricted-imports`.

---

## Cons

- Barrel files can hurt tree-shaking if misused (use named exports; avoid `export *` abuse).  
- Another layer of indirection for small demos.  
- Teams must agree what the public API includes.

---

## Folder structure

```
03_5_feature_public_api/
├── README.md
├── package.json
├── vite.config.js          # resolve.alias: "@" → src
├── index.html
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── features/
    │   ├── auth/
    │   │   ├── index.js           # public API
    │   │   ├── AuthPanel.jsx
    │   │   ├── LoginForm.jsx
    │   │   ├── useAuth.js
    │   │   └── credentials.js
    │   └── catalog/
    │       ├── index.js           # public API
    │       ├── CatalogPanel.jsx
    │       ├── CatalogList.jsx
    │       ├── useCatalogFilter.js
    │       ├── products.js
    │       └── format.js
    └── shared/
        └── ui/
            └── Shell.jsx
```

---

## Related patterns

- **03_4** — FSD layers + public API rules in full projects.  
- **npm / workspace packages** — public API via `package.json` `exports`.  
- **03_1** — same feature folder idea without `@/` alias.

---

## Quick glossary

| Term | Meaning |
|------|--------|
| Public API | Supported exports of a module or slice. |
| Barrel | `index.js` that re-exports siblings. |
| Alias | Short import prefix (`@/`) mapped to a path. |

---

## Run it

```bash
npm install
npm run dev
```

---

## References

1. Feature-Sliced Design — Public API. https://feature-sliced.design/docs/reference/public-api  
2. Parnas, D. L. (1972). *CACM* — module decomposition.  
3. Vite — `resolve.alias`. https://vitejs.dev/config/shared-options.html#resolve-alias
