# 📘 E-commerce Product Recommendation System (Single-User Demo)

---

## 📌 Overview

This project is a **E-commerce product recommendation system** built to demonstrate **clear recommendation logic, clean backend design, and explainable AI usage**.

The system uses:

- User interactions (view & favourite)
- Content-based recommendation using **product tags**
- LLM (Perplexity / PPX) **only for explanation**, not for decision making

---

## 🎯 Key Features

- MongoDB-based product catalog
- User interaction tracking (view, favourite, unfavourite)
- Content-based recommendations using semantic tags
- LLM-generated “Why recommended?” explanations
- Backend in Node.js + Express
- Frontend in React (Vite)
- Hosted on **Render**

---

## 🧠 Recommendation Logic

### Assumptions

- This is a **single-user demo system**
- Personalization starts **only after user interaction**
- Before interaction, default curated products are shown

---

### Signals Used

**View**  
→ Indicates interest (+1 weight)

**Favourite**  
→ Indicates stronger interest (+3 weight)

**Unfavourite**  
→ Removes favourite signal

**Product Tags**  
→ Used to compute similarity between products

---

### How Recommendations Work

1. Each product has **predefined semantic tags**, for example:

```text
men, tshirt, casual, cotton
```

2. When the user:
   - views a product → its tags add +1
   - favourites a product → its tags add +3

3. A **user interest profile** is built dynamically at runtime, for example:

```text
casual: 5
men: 4
tshirt: 4
electronics: 2
```

4. All products are scored based on **tag overlap** with this profile.

5. Products are sorted by score and the **top N** are returned.

Already interacted products are allowed to appear if they naturally rank high.

---

## 🤖 LLM-Based Explanations

The recommendation engine decides **what to recommend**.  
The LLM is used **only to explain why**.

Example explanation:

```text
Recommended because it matches the casual clothing items you recently viewed.
```

---

## ⚙️ Installation & Setup (Local)

### Clone Repository

```bash
git clone <repository-url>
cd project-root
```

---

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
PPX_API_KEY=your_perplexity_api_key
```

---

### Seed Product Data

```bash
node seed/seedProducts.js
```

This inserts **40 tagged products** into MongoDB.

---

### Start Backend

```bash
npm start
```

Backend runs at:

```text
http://localhost:5000
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

## 🔌 API Endpoints

### Get All Products

```text
GET /api/products
```

---

### Record Product View

```text
POST /api/interactions/view
```

Body:

```text
userId
productId
```

---

### Toggle Favourite / Unfavourite

```text
POST /api/interactions/favourite
```

Body:

```text
userId
productId
```

---

### Get Recommendations

```text
GET /api/recommendations/:userId
```

Response structure:

```text
recommendations
- product
- reason (LLM explanation or fallback)
```

---

## 🏁 Conclusion

This project demonstrates:

- Practical recommendation system thinking
- Explainable AI usage
- Clean backend architecture
