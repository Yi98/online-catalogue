const bcrypt = require("bcrypt");

const User = require("../models/User");

exports.getUser = async (email) => {
  const user = await User.findOne({ where: { email: email } });

  return user;
};

exports.createUser = async (data) => {
  const user = await User.create({
    email: data.email,
    password: data.password,
  });

  return user;
};

exports.checkPassword = async (data) => {
  const user = await this.getUser(data.email);
  let isValid = null;

  if (user) {
    isValid = await bcrypt.compare(data.password, user.password);
  }

  return isValid;
};

exports.hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(
    password,
    Number(process.env.HASH_SALT)
  );

  return hashedPassword;
};
