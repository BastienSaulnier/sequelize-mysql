const { sequelize, User } = require("../models");

const createUser = async (req, res) => {
  const { firstName, lastName } = req.body;

  try {
    const user = await User.create({
      firstName: firstName,
      lastName: lastName,
    });

    return res.send(user);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Erreur lors de la création de l'utilisateur.");
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    return res.send(users);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send("Erreur lors de la récupération des utilisateurs.");
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findAll({
      where: {
        idUser: id,
      },
    });

    return res.send(user);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send("Erreur lors de la récupération de l'utilisateur.");
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName } = req.body;

  const values = { firstName: firstName, lastName: lastName };

  try {
    await User.update(values, { where: { idUser: id } });

    const updatedUser = await User.findAll({
      where: {
        idUser: id,
      },
    });

    return res.send(updatedUser);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send("Erreur lors de la mise à jour de l'utilisateur.");
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await User.destroy({
      where: {
        idUser: id,
      },
    });

    return res.send("Utilisateur supprimé.");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Erreur lors de la supression de utilisateur.");
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
