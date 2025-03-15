// External modules
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/authRoutes.js");
const adminProductsRouter = require("./routes/admin/productsRoutes.js");
const shopProductsRouter = require("./routes/shop/productsRoutes.js");

// Internal modules
const connectDB = require("./config/dbConnection.js");

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// 配置 CORS 中間件，允許來自 http://localhost:5173 的請求
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

// 使用 cookieParser 中間件來解析請求中的 cookies
app.use(cookieParser());
// 使用 express.json 中間件來解析 JSON 格式的請求
app.use(express.json());
// 註冊路由
app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/shop/products", shopProductsRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
