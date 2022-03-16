const { posts, view,category } = require("../models");
const getPost = async (req, res) => {
  try {
    const post = await posts.findAll({
      include: [
        { model: category, as: "category" },
        // { model: comments, as: "comments" },
        {model:view,as:"View"},
      ],
    });
    res.status(200).json(200, post);
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
    const post = await posts.findByPk(id);
    if (posts) {
      res.status(200).json(200, post);
    }
    res.status(200).json(400, "Posts not found");
  } catch (error) {
    console.log(error);
  }
};

const createPost = async (req, res) => {
  const { title, description, content,viewId} = req.body;
  try {
    const post = await posts.create({
      title,
      description,
      content,
      viewId
    });
    res.json(201, "Create Posts Successfully", post);
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
    const posts = await posts.findByPk(id);
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