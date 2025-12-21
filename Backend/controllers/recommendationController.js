const { getRecommendedProducts } = require("../services/recommendationService");
const { generateExplanation } = require("../utils/perplexity");

const getRecommendations = async (req, res) => {
  try {
    const { userId } = req.params;

    const products = await getRecommendedProducts(userId);
    const recommendations = [];

    for (const product of products) {
      const tags = product.tags.join(", ");

      const prompt = `
You are a UX copywriter for an e-commerce app.

Write ONE short sentence explaining why this product is recommended.

Rules:
- Do NOT use *, -, bullet points, brackets, or numbers.
- Do NOT use marketing language.
- Do NOT mention product quality or features.
- Max 25 words.
- Focus only on user's past interactions and similarity.

User context:
User has interacted with products sharing similar tags.

Product:
Name: ${product.name}
Category: ${product.category}
Tags: ${tags}

Return only the sentence.
`;

      const rawReason = await generateExplanation(prompt);

      const reason =
        rawReason?.replace(/\s+/g, " ").trim() ||
        `Recommended because it matches products you interacted with in ${product.category}.`;

      recommendations.push({
        product,
        reason
      });
    }

    res.json({ recommendations });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Recommendation failed" });
  }
};

module.exports = { getRecommendations };
