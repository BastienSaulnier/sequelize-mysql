"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate({ User_Post }) {
      this.hasOne(User_Post, {
        foreignKey: "idPost",
      });
    }
  }

  Post.init(
    {
      idPost: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
      },
      content: { type: DataTypes.TEXT, allowNull: false },
    },
    {
      sequelize,
      tableName: "posts",
      modelName: "Post",
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "idPost" }],
        },
      ],
    }
  );
  return Post;
};
