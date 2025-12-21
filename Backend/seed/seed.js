require("dotenv").config();
const connectDB = require("../config/db");
const Product = require("../models/Product");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const DUMMY_IMAGE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRePPIeYS4u1HX9klM5qKIFVcevOVZNIGxRjQ&s";

const products = [

  {
    productId: "FS-1",
    name: "Fjallraven Backpack",
    category: "mens_clothing",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    tags: ["men", "backpack", "travel", "outdoor"]
  },
  {
    productId: "FS-2",
    name: "Mens Casual Premium Slim Fit T-Shirts",
    category: "mens_clothing",
    price: 22.3,
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    tags: ["men", "tshirt", "casual", "dailywear"]
  },
  {
    productId: "FS-3",
    name: "Mens Cotton Jacket",
    category: "mens_clothing",
    price: 55.99,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    tags: ["men", "jacket", "cotton", "outerwear"]
  },
  {
    productId: "FS-4",
    name: "Mens Casual Slim Fit",
    category: "mens_clothing",
    price: 15.99,
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
    tags: ["men", "casual", "shirt", "dailywear"]
  },
  {
    productId: "FS-5",
    name: "Women's Gold & Silver Bracelet",
    category: "jewellery",
    price: 695,
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
    tags: ["jewellery", "bracelet", "women", "fashion"]
  },
  {
    productId: "FS-6",
    name: "Solid Gold Petite Micropave Ring",
    category: "jewellery",
    price: 168,
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
    tags: ["jewellery", "ring", "gold", "women"]
  },
  {
    productId: "FS-7",
    name: "White Gold Plated Princess Ring",
    category: "jewellery",
    price: 9.99,
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
    tags: ["jewellery", "ring", "women", "fashion"]
  },
  {
    productId: "FS-8",
    name: "Rose Gold Plated Earrings",
    category: "jewellery",
    price: 10.99,
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
    tags: ["jewellery", "earrings", "women", "fashion"]
  },
  {
    productId: "FS-9",
    name: "WD 2TB Portable Hard Drive",
    category: "electronics",
    price: 64,
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
    tags: ["electronics", "storage", "hdd", "portable"]
  },
  {
    productId: "FS-10",
    name: "SanDisk SSD PLUS 1TB",
    category: "electronics",
    price: 109,
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
    tags: ["electronics", "storage", "ssd", "performance"]
  },
  {
    productId: "FS-11",
    name: "Silicon Power 256GB SSD",
    category: "electronics",
    price: 109,
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
    tags: ["electronics", "storage", "ssd"]
  },
  {
    productId: "FS-12",
    name: "WD 4TB Gaming Drive",
    category: "electronics",
    price: 114,
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
    tags: ["electronics", "storage", "gaming"]
  },
  {
    productId: "FS-13",
    name: "Acer 21.5 Inch Full HD Monitor",
    category: "electronics",
    price: 599,
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
    tags: ["electronics", "monitor", "display"]
  },
  {
    productId: "FS-14",
    name: "Samsung 49 Inch Curved Monitor",
    category: "electronics",
    price: 999.99,
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
    tags: ["electronics", "monitor", "display", "premium"]
  },
  {
    productId: "FS-15",
    name: "Women's Snowboard Jacket",
    category: "womens_clothing",
    price: 56.99,
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
    tags: ["women", "jacket", "winter", "sports"]
  },
  {
    productId: "FS-16",
    name: "Women's Faux Leather Jacket",
    category: "womens_clothing",
    price: 29.95,
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
    tags: ["women", "jacket", "leather", "fashion"]
  },
  {
    productId: "FS-17",
    name: "Rain Jacket Women Windbreaker",
    category: "womens_clothing",
    price: 39.99,
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
    tags: ["women", "jacket", "rainwear", "outdoor"]
  },
  {
    productId: "FS-18",
    name: "Women's Solid Short Sleeve Top",
    category: "womens_clothing",
    price: 9.85,
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
    tags: ["women", "top", "casual", "summer"]
  },
  {
    productId: "FS-19",
    name: "Women's Moisture Short Sleeve Tee",
    category: "womens_clothing",
    price: 7.95,
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
    tags: ["women", "tshirt", "fitness", "sports"]
  },
  {
    productId: "FS-20",
    name: "Women's Casual Cotton T-Shirt",
    category: "womens_clothing",
    price: 12.99,
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
    tags: ["women", "tshirt", "casual", "dailywear"]
  },

  /* ================= ADDITIONAL DUMMY PRODUCTS (21–40) ================= */

  {
    productId: "FS-21",
    name: "Men's Running Shoes",
    category: "footwear",
    price: 3499,
    image: DUMMY_IMAGE,
    tags: ["men", "shoes", "running", "sports"]
  },
  {
    productId: "FS-22",
    name: "Women's Sports Shoes",
    category: "footwear",
    price: 3299,
    image: DUMMY_IMAGE,
    tags: ["women", "shoes", "fitness", "sports"]
  },
  {
    productId: "FS-23",
    name: "Casual Sneakers",
    category: "footwear",
    price: 2999,
    image: DUMMY_IMAGE,
    tags: ["shoes", "casual", "dailywear"]
  },
  {
    productId: "FS-24",
    name: "Wireless Bluetooth Headphones",
    category: "electronics",
    price: 2999,
    image: DUMMY_IMAGE,
    tags: ["electronics", "audio", "wireless"]
  },
  {
    productId: "FS-25",
    name: "Smart Fitness Watch",
    category: "electronics",
    price: 5999,
    image: DUMMY_IMAGE,
    tags: ["electronics", "fitness", "wearable"]
  },
  {
    productId: "FS-26",
    name: "Laptop Backpack",
    category: "accessories",
    price: 2499,
    image: DUMMY_IMAGE,
    tags: ["accessories", "bag", "laptop", "travel"]
  },
  {
    productId: "FS-27",
    name: "Men's Leather Wallet",
    category: "accessories",
    price: 999,
    image: DUMMY_IMAGE,
    tags: ["men", "wallet", "leather"]
  },
  {
    productId: "FS-28",
    name: "Women's Handbag",
    category: "accessories",
    price: 1999,
    image: DUMMY_IMAGE,
    tags: ["women", "handbag", "fashion"]
  },
  {
    productId: "FS-29",
    name: "Yoga Mat",
    category: "fitness",
    price: 1299,
    image: DUMMY_IMAGE,
    tags: ["fitness", "yoga", "exercise"]
  },
  {
    productId: "FS-30",
    name: "Dumbbell Set",
    category: "fitness",
    price: 2499,
    image: DUMMY_IMAGE,
    tags: ["fitness", "gym", "strength"]
  },
  {
    productId: "FS-31",
    name: "Resistance Bands",
    category: "fitness",
    price: 799,
    image: DUMMY_IMAGE,
    tags: ["fitness", "workout"]
  },
  {
    productId: "FS-32",
    name: "Office Desk Organizer",
    category: "home",
    price: 1199,
    image: DUMMY_IMAGE,
    tags: ["home", "office", "workspace"]
  },
  {
    productId: "FS-33",
    name: "Study Table Lamp",
    category: "home",
    price: 1599,
    image: DUMMY_IMAGE,
    tags: ["home", "lighting", "study"]
  },
  {
    productId: "FS-34",
    name: "Coffee Mug Set",
    category: "home",
    price: 699,
    image: DUMMY_IMAGE,
    tags: ["home", "kitchen", "dailyuse"]
  },
  {
    productId: "FS-35",
    name: "Travel Duffel Bag",
    category: "travel",
    price: 2999,
    image: DUMMY_IMAGE,
    tags: ["travel", "bag", "outdoor"]
  },
  {
    productId: "FS-36",
    name: "Cabin Trolley Bag",
    category: "travel",
    price: 5499,
    image: DUMMY_IMAGE,
    tags: ["travel", "luggage", "vacation"]
  },
  {
    productId: "FS-37",
    name: "Winter Woolen Scarf",
    category: "accessories",
    price: 899,
    image: DUMMY_IMAGE,
    tags: ["accessories", "winter", "fashion"]
  },
  {
    productId: "FS-38",
    name: "Men's Formal Belt",
    category: "accessories",
    price: 999,
    image: DUMMY_IMAGE,
    tags: ["men", "belt", "formal"]
  },
  {
    productId: "FS-39",
    name: "Women's Fashion Watch",
    category: "accessories",
    price: 2999,
    image: DUMMY_IMAGE,
    tags: ["women", "watch", "fashion"]
  },
  {
    productId: "FS-40",
    name: "Laptop Sleeve",
    category: "accessories",
    price: 1199,
    image: DUMMY_IMAGE,
    tags: ["laptop", "accessories", "dailyuse"]
  }
];

const seedProducts = async () => {
  try {
    await connectDB();
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("40 products seeded successfully.");
    process.exit();
  } catch (err) {
    console.error("Seed failed:", err);
    process.exit(1);
  }
};

seedProducts();
