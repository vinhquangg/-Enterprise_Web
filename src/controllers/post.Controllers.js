const { Post, Category } = require("../models");

const getPost = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        { model: Category, as: "category" },
        // { model: comments, as: "comments" },
      ],
    });
    res.status(200).json(200, posts);
  } catch (error) {
    console.log(error);
  }
};

const getPostsById = async (req, res) => {
  const id = Number(req.params.id);

  if (!id) {
    res.status(400).json(400, "Invalid request");
  }

  try {
    const posts = await Post.findByPk(id);
    if (posts) {
      res.status(200).json(200, posts);
    }
    res.status(200).json(400, "Posts not found");
  } catch (error) {
    console.log(error);
  }
};

const createPost = async (req, res) => {
  const { title, description } = req.body;
  try {
    const posts = await Post.create({
      title,
      description,
    });
    res.json(201, "Create Posts Successfully", posts);
  } catch (err) {
    if (err.name === "SequelizeValidationError") {
      res.status(400).json(400, err.errors);
    }
    console.log(err);
  }
};

const deletePost = async (req, res) => {
  const id = Number(req.params.id);
  if (!id) {
    res.status(400).json(400, "Invalid request");
  }
  try {
    const posts = await Post.findByPk(id);
    if (!posts) {
      res.status(400).json(400, "Posts not found");
    }
    await posts.destroy({ where: { id } });
    res.status(204).json(204, "Delete Posts Successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPost,
  getPostsById,
  createPost,
  deletePost,
};
