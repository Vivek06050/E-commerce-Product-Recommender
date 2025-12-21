import { useEffect, useState } from "react";
import Header from "./components/Header";
import RecommendedList from "./components/RecommendedList";
import ProductList from "./components/ProductList";
import ProductModal from "./components/ProductModal";
import { api } from "./api/api";

const USER_ID = "U001";

export default function App() {
  const [products, setProducts] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [recLoading, setRecLoading] = useState(false);
  const [hasEverRecommended, setHasEverRecommended] = useState(false);
  const [favourites, setFavourites] = useState(new Set());
  const [modalProduct, setModalProduct] = useState(null);

  useEffect(() => {
    async function init() {
      const products = await api.getProducts();
      setProducts(products);
      const interactions = await api.getInteractions(USER_ID);
      const favSet = new Set(
        interactions
          .filter((i) => i.action === "favourite")
          .map((i) => i.productId)
      );
      setFavourites(favSet);

      fetchRecommendations();
    }

    init();
  }, []);

  const fetchRecommendations = async () => {
    try {
      setRecLoading(true);
      const res = await api.getRecommendations(USER_ID);

      if (res.recommendations?.length) {
        setRecommended(res.recommendations);
        setHasEverRecommended(true);
      }
    } finally {
      setRecLoading(false);
    }
  };

  const handleView = async (productId) => {
    const product = await api.getProduct(productId);
    setModalProduct(product);

    await api.recordView({ userId: USER_ID, productId });
    fetchRecommendations();
  };

  const toggleFavourite = async (productId) => {
    const res = await api.toggleFavourite({
      userId: USER_ID,
      productId,
    });

    const next = new Set(favourites);
    res.favourited ? next.add(productId) : next.delete(productId);
    setFavourites(next);

    fetchRecommendations();
  };

  return (
    <>
      <Header />

      <main className="container">
        <section className="recommended-section">
          <h2>Recommended for you</h2>
          <RecommendedList
            items={recommended}
            loading={recLoading}
            hasEverRecommended={hasEverRecommended}
          />
        </section>

        <section>
          <h2>All Products</h2>
          <ProductList
            products={products}
            favourites={favourites}
            onView={handleView}
            onFavourite={toggleFavourite}
          />
        </section>
      </main>

      {modalProduct && (
        <ProductModal
          product={modalProduct}
          onClose={() => setModalProduct(null)}
          isFavourited={favourites.has(modalProduct.productId)}
          onFavourite={() => toggleFavourite(modalProduct.productId)}
        />
      )}
    </>
  );
}
