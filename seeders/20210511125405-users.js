"use strict";
const faker = require("faker");
const users = [...Array(10)].map((user) => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", users, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
