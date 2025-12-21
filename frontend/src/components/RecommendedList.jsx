export default function RecommendedList({
  items,
  loading,
  hasEverRecommended
}) {
  if (loading) {
    return (
      <div className="recommended-box">
        <div className="rec-loader">
          Generating personalized recommendations…
        </div>
      </div>
    );
  }

  if (!hasEverRecommended) {
    return (
      <div className="recommended-box muted">
        Start interacting with products to get recommendations.
      </div>
    );
  }

  return (
    <div className="recommended-box">
      <div className="recommended-grid">
        {items.map(({ product, reason }) => (
          <div key={product.productId} className="rec-card">
            <img src={product.image} />
            <div className="rec-name">{product.name}</div>
            <div className="rec-cat">{product.category}</div>
            <div className="rec-price">₹ {product.price}</div>
            <div className="rec-reason">{reason}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
