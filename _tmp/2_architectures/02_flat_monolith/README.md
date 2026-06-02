# 01 — Flat architecture (single package, no role folders)

## Theory and historical context

**Flat structure** means many modules live side by side in one directory (e.g. `src/`) without subfolders that encode *technical role* (components vs. hooks) or *business feature*. This is the natural second step after a single file: separate files for separate concerns, but keep the filesystem shallow.

Historically, small open-source demos, early SPAs, and internal tools often stayed flat until file count made listing noisy—often in the **10–30 file** range depending on team tolerance. The React ecosystem did not mandate a folder convention; Create React App only suggested `src/` with flat or lightly nested trees. Research on **program comprehension** shows that developers use both *file name* and *folder path* as retrieval cues; flat layouts trade path depth for a longer single-level list.

**References (theory):**

- Parnas (1972) — information hiding between modules; flat folders still use separate files as module boundaries.  
- Scheller, T. et al. (2014). “Do Code Structures Affect Comprehension?” — structure impacts navigation.  
- React community practices (pre-2018) — many tutorials used flat `components/` only later.

---

## Other common names

- Flat folder structure / flat `src`  
- “No folders” (colloquial; strictly: no *nested* role folders)  
- Single-directory module layout

---

## Description

This project splits the same auth + catalog app into several modules—**entry** (`main.jsx`), **composition** (`App.jsx`), **auth logic** (`auth.js`), **login UI** (`LoginForm.jsx`), **catalog data** (`catalog.js`), **catalog UI** (`CatalogList.jsx`), and a **pure helper** (`format.js`)—all directly under `src/`. It demonstrates the smallest filesystem investment after a monolith: **file-level** modularity without **directory-level** taxonomy.

---

## Pros

- Simple mental model: open `src/` and see every top-level module.  
- Low ceremony; easy onboarding for beginners.  
- Imports stay short (`./Counter.jsx`).

---

## Cons

- `src/` becomes crowded as features grow; hard to scan 50+ files.  
- No convention for where “pages” vs. “widgets” live—naming must carry meaning alone.  
- Encourages cross-imports between unrelated features because everything is “nearby.”

---

## Folder structure

```
01_flat_architecture/
├── README.md
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── LoginForm.jsx
    ├── CatalogList.jsx
    ├── auth.js
    ├── catalog.js
    └── format.js
```

---

## Related patterns

- **Single-file monolith** — predecessor: one file for everything.  
- **Layered / package-by-type** — next: `components/`, `hooks/`, `utils/`.  
- **Feature-based** — alternative axis: group by product feature instead of flat or layers.

---

## Quick glossary

| Term | Meaning |
|------|--------|
| Flat | One directory depth for app modules (aside from entry). |
| Module boundary | A file; imports define dependencies between modules. |
| Taxonomy | Classification scheme (here: none at folder level). |

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

1. Parnas, D. L. (1972). “On the Criteria To Be Used in Decomposing Systems into Modules.” *CACM*.  
2. Scheller, T., Kuhrmann, M., Pfeiffer, R., & Jürgens, P. (2014). “A taxonomy of software project risks and its impact on project success.” *EASE* (related work on structure and outcomes).  
3. React Docs — “File structure” recommendations (react.dev/learn).  
4. Vite — project structure (vite.dev/guide).
