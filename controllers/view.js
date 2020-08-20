exports.getLandingPage = (req, res) => {
  res.render("landing");
};

exports.getIndexPage = (req, res) => {
  res.render("index");
};

exports.getSignupPage = (req, res) => {
  res.render("signup");
};

exports.getLoginPage = (req, res) => {
  res.render("login");
};

exports.getErrorPage = (req, res) => {
  res.render("404");
};
