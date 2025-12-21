const axios = require("axios");

const generateExplanation = async (prompt) => {
  try {
    const response = await axios.post(
      "https://api.perplexity.ai/chat/completions",
      {
        model: "sonar-pro",
        messages: [
          {
            role: "system",
            content:
              "You are an e-commerce recommendation assistant. Explain recommendations clearly and briefly."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.3,
        max_tokens: 150
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PERPLEXITY_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Perplexity API error:", error.message);
    return null;
  }
};

module.exports = { generateExplanation };
