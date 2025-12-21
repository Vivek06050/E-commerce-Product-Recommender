const Product = require("../models/Product");
const Interaction = require("../models/Interaction");


const WEIGHTS = {
  view: 1,
  favourite: 3
};


async function getRecommendedProducts(userId, limit = 5) {
  const interactions = await Interaction.find({ userId });
  const products = await Product.find({});

  // Build user tag profile
  const tagScore = {};
  const viewedSet = new Set();
  const favouritedSet = new Set();

  for (const i of interactions) {
    const product = products.find(p => p.productId === i.productId);
    if (!product) continue;

    if (i.action === "view") viewedSet.add(i.productId);
    if (i.action === "favourite") favouritedSet.add(i.productId);

    for (const tag of product.tags) {
      tagScore[tag] = (tagScore[tag] || 0) + WEIGHTS[i.action];
    }
  }

  // Score all products
  const scored = products.map(product => {
    let score = 0;

    for (const tag of product.tags) {
      score += tagScore[tag] || 0;
    }


    return {
      product,
      score,
      seen: viewedSet.has(product.productId) || favouritedSet.has(product.productId)
    };
  });

  // Sort by score
  scored.sort((a, b) => b.score - a.score);

  // Diversity mixing (important)
  const result = [];
  let unseenCount = 0;

  for (const item of scored) {
    if (result.length >= limit) break;

    if (!item.seen) unseenCount++;

    result.push(item);
  }

  // ensure at least 2 unseen if possible
  if (unseenCount < 2) {
    const unseen = scored.filter(i => !i.seen);
    for (const u of unseen) {
      if (result.find(r => r.product.productId === u.product.productId)) continue;
      result.pop();
      result.push(u);
      unseenCount++;
      if (unseenCount >= 2) break;
    }
  }

  return result.map(r => r.product);
}

module.exports = { getRecommendedProducts };
