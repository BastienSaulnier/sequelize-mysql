"use strict";
const faker = require("faker");
const posts = [...Array(50)].map((post) => ({
  content: faker.lorem.paragraph(),
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Posts", posts, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Posts", null, {});
  },
};
