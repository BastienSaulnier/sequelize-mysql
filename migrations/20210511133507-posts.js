"use strict";
const { User_Post } = require("../models");

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("posts", {
      idPost: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
      },
      content: { type: DataTypes.TEXT, allowNull: false },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    });
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable("posts");
  },
};
