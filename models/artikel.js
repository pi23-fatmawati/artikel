"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class artikel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  artikel.init(
    {
      title: DataTypes.STRING,
      short_content: DataTypes.TEXT,
      content: DataTypes.TEXT,
      pic: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "artikel",
    }
  );
  return artikel;
};
