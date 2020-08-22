const express = require("express");
const router = express.Router();

const viewController = require("../controllers/view");

router.get("/", viewController.getLandingPage);

router.get("/signup", viewController.getSignupPage);

router.get("/login", viewController.getLoginPage);

router.get("/shop", viewController.getShopPage);

router.get("/products", viewController.getProductPage);

router.get("/menu", viewController.getMenuPage);

router.get("*", viewController.getErrorPage);

module.exports = router;
