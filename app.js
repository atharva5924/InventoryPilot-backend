import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRouter from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";
import analyticsRoutes from "./routes/analytics.routes.js";
import swaggerUi from "swagger-ui-express";
import cookieParser from "cookie-parser";
// import swaggerDoc from "./docs/swagger.json" assert { type: "json" };
import fs from "fs";
const swaggerDoc = JSON.parse(fs.readFileSync("./docs/swagger.json", "utf-8"));

dotenv.config();
connectDB();
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use("/users", userRouter);
app.use("/products", productRoutes);
app.use("/analytics", analyticsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
