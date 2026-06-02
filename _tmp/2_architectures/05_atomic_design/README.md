# 04 -- Atomic Design (component hierarchy)

## Theory and historical context

**Atomic Design** is a **methodology for UI**, not a data or deployment architecture: it classifies interface pieces into **atoms** (minimal building blocks), **molecules** (simple groups), **organisms** (complex sections), **templates** (page-level layout without real content), and **pages** (specific instances with data). Brad Frost introduced it in the **early 2010s** as a response to ever-growing design systems and pattern libraries; it parallels chemistry metaphors to teach **composition** and **reuse** in design systems.

It is orthogonal to "feature vs. layer" folders: you can combine Atomic folders *inside* a feature or globally under `components/`. Teams often adopt atoms-organisms for **design system** work while using **feature folders** for product logic.

**References (theory):**

- Frost, B. *Atomic Design* (book, 2016) -- canonical definition of five levels.  
- Frost, B. "Atomic Design Methodology" (atomicdesign.bradfrost.com) -- online chapter structure.  
- Design systems literature (e.g. Alla Kholmatova, *Design Systems*) -- related practice.

---

## Other common names

- Atomic UI / atomic components  
- Atoms, molecules, organisms (often shortened; templates/pages dropped in casual speech)  
- Nested design system taxonomy

---

## Description

This demo keeps state in `pages/HomePage.jsx`, passes props into **organisms** (`LoginForm`, `CatalogList`), which use **molecules** (`FormField`, `ProductItem`) built from **atoms** (`Button`, `Input`, `Text`). `templates/MainTemplate.jsx` provides the chrome around page content. Product data lives in `data/` alongside `formatPrice`.

---

## Pros

- Clear vocabulary for design-dev handoff and design systems.  
- Encourages small, testable building blocks.  
- Reusable atoms/molecules across products.

---

## Cons

- Can feel heavy for tiny apps; debate over "atom vs. molecule" overhead.  
- Does not replace feature or domain structure -- only UI taxonomy.  
- Wrong abstraction if team treats levels as organizational silos instead of composition.

---

## Folder structure

```
04_atomic_design/
├── README.md
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data/
    │   ├── products.js
    │   └── format.js
    ├── pages/
    │   └── HomePage.jsx
    ├── templates/
    │   └── MainTemplate.jsx
    └── components/
        ├── atoms/
        │   ├── Button.jsx
        │   ├── Input.jsx
        │   └── Text.jsx
        ├── molecules/
        │   ├── FormField.jsx
        │   └── ProductItem.jsx
        └── organisms/
            ├── LoginForm.jsx
            └── CatalogList.jsx
```

---

## Related patterns

- **Design system / pattern library** -- Atoms-organisms often live there.  
- **Feature-based folders** -- can host `components/` trees per feature.  
- **Storybook** -- common tool for documenting atoms upward.

---

## Quick glossary

| Term | Meaning |
|------|--------|
| Atom | Smallest UI unit (button, input, label). |
| Molecule | Simple combination of atoms (form field, product row). |
| Organism | Distinct UI section built from molecules/atoms (login form, catalog list). |
| Template | Page layout with placeholders. |
| Page | Template filled with real content/state. |

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

1. Frost, B. (2016). *Atomic Design*. http://atomicdesign.bradfrost.com/chapter-2/  
2. Frost, B. "Atomic Design Methodology." https://atomicdesign.bradfrost.com/  
3. Kholmatova, A. (2017). *Design Systems*. Smashing Magazine.  
4. React Docs -- "Passing Props to a Component" -- composition model underlying Atomic Design.
