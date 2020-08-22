const UserService = require("../services/user");

exports.login = async (req, res) => {
  try {
    const isPasswordValid = await UserService.checkPassword({
      email: req.body.email,
      password: req.body.password,
    });

    if (!isPasswordValid) {
      return res.json({ message: "Invalid email or password" });
    }

    res.redirect("/products");
  } catch (error) {
    console.log(error);
    res.json({ message: "Failed to log in" });
  }
};

exports.signup = async (req, res) => {
  try {
    const existingUser = await UserService.getUser(req.body.email);

    if (existingUser) {
      return res.json({ message: "User already existed" });
    }

    const password = await UserService.hashPassword(req.body.password);

    await UserService.createUser({
      email: req.body.email,
      password: password,
    });

    res.redirect("/login");
  } catch (error) {
    console.log(error);
    res.json({ message: "Failed to sign up" });
  }
};
