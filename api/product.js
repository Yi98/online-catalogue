const express = require("express");
const router = express.Router();

const productContoller = require("../controllers/product");

router.post("/", productContoller.createProduct);

module.exports = router;
