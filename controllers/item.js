const ItemService = require("../services/item");

exports.createItem = async (req, res) => {
  try {
    const item = await ItemService.createItem(req.body);

    console.log(item);

    res.json({ message: "New item created" });
  } catch (error) {
    console.log(error);

    res.json({ message: "Failed to create item" });
  }
};
