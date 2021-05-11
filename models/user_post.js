"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User_Post extends Model {
    static associate({ User, Post }) {
      this.belongsTo(User, { foreignKey: "idUser" });
      this.belongsTo(Post, { foreignKey: "idPost" });
    }
  }

  User_Post.init(
    {
      idUserPost: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
      },
      idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      idPost: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "users_posts",
      modelName: "User_Post",
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "idUserPost" }],
        },
      ],
    }
  );
  return User_Post;
};
