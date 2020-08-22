const ShopService = require("../services/shop");

exports.createShop = async (req, res) => {
  try {
    const shop = await ShopService.createShop(req.body);

    res.redirect("/shop");
  } catch (error) {
    console.log(error);

    res.json({ message: "Failed to create shop" });
  }
};
