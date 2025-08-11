import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";

import productRoutes from "./routes/product.routes.js"

dotenv.config({
  path: './.env'
});
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000

app.use("/api/products",productRoutes)

app.listen(PORT, () => {
  connectDb();
  console.log("Server started at http://localhost:"+PORT);
  
});

