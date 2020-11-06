module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Shop", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
    },
  });
};
