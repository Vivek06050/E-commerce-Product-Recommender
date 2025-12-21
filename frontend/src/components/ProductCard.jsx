export default function ProductCard({
  product,
  isFavourited,
  onView,
  onFavourite
}) {
  return (
    <div className="product-card">
      <img className="product-img" src={product.image} />
      <div className="card-body">
        <div className="card-title">{product.name}</div>
        <div className="card-meta">
          <span>{product.category}</span>
          <span className="price">₹ {product.price}</span>
        </div>

        <div className="card-actions">
          <button className="btn btn-view" onClick={onView}>View</button>
          <button
            className={`btn btn-fav ${isFavourited ? "favourited" : ""}`}
            onClick={onFavourite}
          >
            {isFavourited ? "♥" : "♡"}
          </button>
        </div>
      </div>
    </div>
  );
}
