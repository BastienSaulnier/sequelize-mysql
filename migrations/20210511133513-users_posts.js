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
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      idPost: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "posts", key: "idPost" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    });
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable("users_posts");
  },
};
