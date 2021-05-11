"use strict";

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("users", {
      idUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
      },
      firstName: { type: DataTypes.STRING(55), allowNull: false },
      lastName: { type: DataTypes.STRING(55), allowNull: false },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    });
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable("users");
  },
};
