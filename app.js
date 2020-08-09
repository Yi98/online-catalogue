const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const app = express();

dotenv.config({ path: "./config/.env" });
app.set("view engine", "ejs");

app.use(express.static("/static"));
app.use(express.json());

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "/views/index"));
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
