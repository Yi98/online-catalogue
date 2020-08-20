const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const responseTime = require("response-time");
const { Sequelize } = require("sequelize");
const app = express();

const itemApi = require("./api/item");

dotenv.config({ path: "./config/.env" });

const sequelize = new Sequelize(
  "postgres://postgres:ny339383@localhost:5432/online_catalogue",
  {
    dialect: "postgres",
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(responseTime());

app.use("/api/items", itemApi);

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "/views/index"));
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
