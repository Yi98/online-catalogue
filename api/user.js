const express = require("express");
const router = express.Router();

const userContoller = require("../controllers/user");

router.post("/login", userContoller.login);

router.post("/signup", userContoller.signup);

module.exports = router;
