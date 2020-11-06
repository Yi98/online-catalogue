const express = require("express");
const dotenv = require("dotenv");
const responseTime = require("response-time");
const session = require("express-session");
const pgSession = require("connect-pg-simple")(session);
const app = express();

dotenv.config({ path: "./config/.env" }); // have to put it at the top so that the db conenction can be used on api

const viewApi = require("./api/view");
const productApi = require("./api/product");
const userApi = require("./api/user");
const shopApi = require("./api/shop");

var sess = {
  store: new pgSession({
    conString: process.env.DB_URL,
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 },
};

app.set("view engine", "ejs");
app.use(session(sess));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(responseTime());

app.use("/qrcode", express.static(__dirname + "/node_modules/qrcode/build"));
app.use("/api/products", productApi);
app.use("/api/users", userApi);
app.use("/api/shops", shopApi);
app.use("/", viewApi);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
