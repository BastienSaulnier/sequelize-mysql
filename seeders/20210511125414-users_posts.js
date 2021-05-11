"use strict";
"use strict";
const users_posts = [...Array(50)].map((user_post) => ({
  idUser: Math.floor(Math.random() * 10) + 1,
  idPost: Math.floor(Math.random() * 50) + 1,
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users_Posts", users_posts, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users_Posts", null, {});
  },
};
