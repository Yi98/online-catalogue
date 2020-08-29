const express = require("express");
const router = express.Router();

const productContoller = require("../controllers/product");

router.post("/", productContoller.createProduct);

router.patch("/:id", productContoller.editProduct);

router.delete("/:id", productContoller.deleteProduct);

module.exports = router;
