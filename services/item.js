const Item = require("../models/Item");

exports.getItem = () => {};

exports.getItems = async () => {
  const items = await Item.findAll();

  console.log(items);

  return items;
};

exports.createItem = async (data) => {
  const item = await Item.create({
    name: "test name",
    description: "Test description",
    price: 100,
    imageUrl: "test url",
  });

  console.log(item);
  return item;
};

exports.updateItem = () => {};

exports.deleteItem = () => {};
