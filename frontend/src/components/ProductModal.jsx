export default function ProductModal({
  product,
  onClose,
  isFavourited,
  onFavourite
}) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-grid">
          <img className="modal-img" src={product.image} />
          <div>
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <h2>₹ {product.price}</h2>

            <button className="btn btn-view" onClick={onFavourite}>
              {isFavourited ? "Unfavourite" : "Favourite"}
            </button>
          </div>
        </div>

        <button className="modal-close" onClick={onClose}>✕</button>
      </div>
    </div>
  );
}
