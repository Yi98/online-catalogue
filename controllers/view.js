const ProductService = require("../services/product");
const ShopService = require("../services/shop");

exports.getLandingPage = (req, res) => {
  res.render("landing");
};

exports.getAccountPage = (req, res) => {
  res.render("account");
};

exports.getLoginPage = (req, res) => {
  res.render("login");
};

exports.getShopPage = (req, res) => {
  res.render("shop");
};

exports.getProductPage = async (req, res) => {
  try {
    const shop = await ShopService.getUserShop(req.session.userId);
    const products = await ProductService.getProducts(shop.id);

    res.render("products", { products });
  } catch (error) {
    console.log(error);
  }
};

exports.getMenuPage = async (req, res) => {
  try {
    const shop = await ShopService.getUserShop(req.params.shopId);
    const products = await ProductService.getProducts(shop.id);

    res.render("menu", {
      shopName: shop.name,
      products,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getErrorPage = (req, res) => {
  res.render("404");
};
