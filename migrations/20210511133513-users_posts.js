"use strict";

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("users_posts", {
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
        references: { model: "users", key: "idUser" },
      },
      idPost: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "posts", key: "idPost" },
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    });
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable("users_posts");
  },
};
