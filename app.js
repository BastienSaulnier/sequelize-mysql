require("dotenv").config();
const { sequelize } = require("./models");
const express = require("express");
const logger = require("morgan");
const colors = require("colors");
const app = express();

const PORT = process.env.PORT || 5000;
const serverListeningSuccess =
  colors.red("***** ") +
  colors.white("Server is now listening on port : ") +
  colors.green("[ ") +
  colors.yellow(PORT) +
  colors.green(" ]") +
  colors.red(" *****");

const dbSynchronisationSuccess = "Synced to database with success...";
const dbConnectionSuccess = "Connected to database with success...";

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(serverListeningSuccess);
    sequelize
      .authenticate()
      .then(() => console.log(colors.green(dbConnectionSuccess)))
      .then(() => sequelize.sync({ force: true }))
      .then(() => console.log(colors.green(dbSynchronisationSuccess)))
      .catch((err) => console.log(colors.red(err)));
  }
});
