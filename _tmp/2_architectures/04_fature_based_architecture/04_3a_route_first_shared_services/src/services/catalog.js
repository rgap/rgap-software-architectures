const PRODUCTS = [
  { id: "p1", name: "Alpine Daypack", category: "Gear", price: 89 },
  { id: "p2", name: "Trail Map: Northern Ridge", category: "Maps", price: 14 },
  { id: "p3", name: "Insulated Bottle 750ml", category: "Gear", price: 32 },
  { id: "p4", name: "Field Notes -- Weather", category: "Books", price: 22 },
  { id: "p5", name: "Merino Base Layer", category: "Apparel", price: 64 },
];

export function getProducts() {
  return PRODUCTS;
}

export function filterProducts(products, query) {
  const q = query.trim().toLowerCase();
  if (!q) return products;
  return products.filter(
    (p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
  );
}
