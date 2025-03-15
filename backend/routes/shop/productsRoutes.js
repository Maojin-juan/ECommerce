const express = require("express");

const {
  getFilterProduct,
} = require("../../controllers/shop/productsController");

const router = express.Router();

router.get("/get", getFilterProduct);

module.exports = router;
