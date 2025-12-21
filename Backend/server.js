const express=require("express");
const cors=require("cors");
const connectDB=require("./config/db");
const productRoutes = require("./routes/productRoutes");
const interactionRoutes = require("./routes/interactionRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");
require("dotenv").config();


const app=express();
require("dotenv").config();
app.use(express.json());
app.use(cors());
connectDB();

app.use(cors({
    origin:"*"
}));


app.use("/api/products", productRoutes);
app.use("/api/interactions", interactionRoutes);
app.use("/api/recommendations", recommendationRoutes);

const PORT=process.env.PORT;
app.listen(PORT,()=>{
console.log('Server Started .......');
})