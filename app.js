const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const responseTime = require("response-time");
const app = express();

dotenv.config({ path: "./config/.env" });  // have to put it at the top so that the db conenction can be used on api

const viewApi = require("./api/view");
const itemApi = require("./api/item");
const userApi = require("./api/user");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(responseTime());

app.use("/", viewApi);
app.use("/api/items", itemApi);
app.use("/api/users", userApi);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
