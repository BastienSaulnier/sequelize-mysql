require("dotenv").config();

const { sequelize } = require("./models");
const express = require("express");
const logger = require("morgan");
const colors = require("colors");

const indexRouter = require("./routes/index");
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
app.use("/", indexRouter);

app.listen(PORT, async (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(serverListeningSuccess);
    try {
      await sequelize.authenticate();
      await console.log(colors.green(dbConnectionSuccess));
      /*    await sequelize.sync({ force: true });
      await console.log(colors.green(dbSynchronisationSuccess)); */
    } catch (err) {
      console.log(err);
    }
  }
});
