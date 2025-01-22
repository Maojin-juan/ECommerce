const mongoose = require("mongoose");

const ProductSchema = new mongoose.SchemaType(
  {
    image: String,
    title: String,
    description: String,
    category: String,
    brand: String,
    price: Number,
    salePrice: Number,
    totalStock: Number,
  },
  { timestamps: true } // 自動添加 createdAt 和 updatedAt 欄位
);

module.exports = mongoose.model("Product", ProductSchema);
