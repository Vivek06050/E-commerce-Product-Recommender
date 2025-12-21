import ProductCard from "./ProductCard";

export default function ProductList({
  products,
  favourites,
  onView,
  onFavourite
}) {
  return (
    <div className="product-grid">
      {products.map(p => (
        <ProductCard
          key={p.productId}
          product={p}
          isFavourited={favourites.has(p.productId)}
          onView={() => onView(p.productId)}
          onFavourite={() => onFavourite(p.productId)}
        />
      ))}
    </div>
  );
}
