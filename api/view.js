const express = require("express");
const router = express.Router();

const viewController = require("../controllers/view");

router.get("/", viewController.getLandingPage);

router.get("/index", viewController.getIndexPage);

router.get("/signup", viewController.getSignupPage);

router.get("/login", viewController.getLoginPage);

router.get("*", viewController.getErrorPage);

module.exports = router;
