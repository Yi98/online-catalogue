const ShopService = require("../services/shop");
const UserService = require("../services/user");

exports.createShop = async (req, res) => {
  try {
    req.body.UserId = req.session.userId;

    const shop = await ShopService.createShop(req.body);

    res.redirect("/products");
  } catch (error) {
    console.log(error);

    res.json({ message: "Failed to create shop" });
  }
};
