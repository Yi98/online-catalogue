const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");
const app = express();

dotenv.config({ path: "./config/.env" });

const sequelize = new Sequelize(process.env.DB_URL);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

app.set("view engine", "ejs");
app.use(express.static("/static"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "/views/index"));
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
