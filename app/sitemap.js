import pool from "@/lib/db";

export default async function sitemap() {
  const { rows: products } = await pool.query(
    "SELECT slug, created_at FROM products"
  );

  const base = "http://localhost:3000";

  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
    },
    {
      url: `${base}/products`,
      lastModified: new Date(),
    },
    ...products.map((product) => ({
      url: `${base}/products/${product.slug}`,
      lastModified: product.created_at,
    })),
  ];
}