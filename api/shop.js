const express = require("express");
const router = express.Router();

const shopContoller = require("../controllers/shop");

router.post("/", shopContoller.createShop);

module.exports = router;
