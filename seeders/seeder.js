const dotenv = require("dotenv");

const { Sequelize } = require("sequelize");

const ProductModel = require("../models/Product");
const ShopModel = require("../models/Shop");
const UserModel = require("../models/User");

dotenv.config({ path: "../config/.env" }); // have to put it at the top so that the db conenction can be used on api

const sequelize = new Sequelize(process.env.DB_URL);

const Product = ProductModel(sequelize, Sequelize);
const Shop = ShopModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

User.hasMany(Shop);
Shop.belongsTo(User);

Shop.hasMany(Product);
Product.belongsTo(Shop);

(async () => {
  try {
    await sequelize.query(`CREATE TABLE "session"(
      "sid" varchar NOT NULL COLLATE "default",
      "sess" json NOT NULL,
      "expire" timestamp(6) NOT NULL
    )
    WITH (OIDS=FALSE);
    
    ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;
    
    CREATE INDEX "IDX_session_expire" ON "session" ("expire");`);

    await sequelize.sync({ alter: true });
    console.log(`Database & tables created!`);

    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
