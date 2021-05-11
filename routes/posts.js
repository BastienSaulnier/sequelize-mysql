const express = require("express");
const router = express.Router();

const {
  createPost,
  getAllPosts,
  getPostsByIdUser,
  updatePost,
  deletePost,
} = require("../controllers/posts");

router.post("/create", createPost);
router.get("/all", getAllPosts);
router.post("/:id", getPostsByIdUser);
router.patch("/update/:id", updatePost);
router.delete("/delete/:id", deletePost);

module.exports = router;
