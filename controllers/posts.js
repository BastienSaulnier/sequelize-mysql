const { Post, User_Post } = require("../models");

const createPost = async (req, res) => {
  const { idUser, content } = req.body;

  try {
    const post = await Post.create({ content: content });

    await User_Post.create({
      idUser: idUser,
      idPost: post.idPost,
    });

    return res.send(post);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Erreur lors de la création du post.");
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();

    res.send(posts);
  } catch (err) {
    console.log(err);
    res.status(500).send("Erreur lors de la récupération des posts.");
  }
};

const getPostsByIdUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user_posts = await User_Post.findAll({
      where: {
        idUser: id,
      },
      include: [{ model: Post }],
    });

    res.send(user_posts);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send("Erreur lors de la récupération des posts de l'utilisateur.");
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  const values = { content: content };
  try {
    await Post.update(values, { where: { idPost: id } });

    const updatedPost = await Post.findAll({
      where: {
        idPost: id,
      },
    });

    res.send(updatedPost);
  } catch (err) {
    console.log(err);
    res.status(500).send("Erreur lors de la mise à jour du post.");
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    await Post.destroy({
      where: {
        idPost: id,
      },
    });

    return res.send("Post supprimé.");
  } catch (err) {
    console.log(err);
    res.status(500).send("Erreur lors de la supression du post.");
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostsByIdUser,
  updatePost,
  deletePost,
};
