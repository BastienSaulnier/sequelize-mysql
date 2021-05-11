"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ User_Post }) {
      this.hasMany(User_Post, {
        foreignKey: "idUser",
      });
    }
  }

  User.init(
    {
      idUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
      },
      firstName: { type: DataTypes.STRING(55), allowNull: false },
      lastName: { type: DataTypes.STRING(55), allowNull: false },
    },
    {
      sequelize,
      tableName: "users",
      modelName: "User",
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "idUser" }],
        },
      ],
    }
  );
  return User;
};
