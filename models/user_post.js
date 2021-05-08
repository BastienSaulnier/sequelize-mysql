"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User_Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: { model: "users", key: "id" },
      },
      post_id: {
        type: DataTypes.INTEGER,
        references: { model: "posts", key: "id" },
      },
    },
    {
      sequelize,
      tableName: "users_posts",
      modelName: "User_Post",
    }
  );
  return User_Post;
};
