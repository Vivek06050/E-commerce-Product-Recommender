const BASE = import.meta.env.VITE_API_URL;

async function request(path, options = {}) {
  const res = await fetch(BASE + path, options);
  return res.json();
}

export const api = {
  getProducts: () => request("/api/products"),
  getProduct: (id) => request(`/api/products/${id}`),

  recordView: (body) =>
    request("/api/interactions/view", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }),

  toggleFavourite: (body) =>
    request("/api/interactions/favourite", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }),

  
  getInteractions: (userId) =>
    request(`/api/interactions/${userId}`),

  getRecommendations: (userId) =>
    request(`/api/recommendations/${userId}`),
};
