const express = require("express");
const router = express.Router();

const itemContoller = require("../controllers/item");

router.post("/", itemContoller.createItem);

module.exports = router;
