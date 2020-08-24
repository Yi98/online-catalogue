const express = require("express");
const router = express.Router();

const viewController = require("../controllers/view");

router.get("/", viewController.getLandingPage);

router.get("/signup/account", viewController.getAccountPage);

router.get("/signup/shop", viewController.getShopPage);

router.get("/login", viewController.getLoginPage);

router.get("/products", viewController.getProductPage);

router.get("/menu/:shopId", viewController.getMenuPage);

router.get("*", viewController.getErrorPage);

module.exports = router;
