const { Posts, Comment } = require("../models");

const getComment = async (req, res) => {
  try {
    const Cates = await Comment.findAll({
      // include: [{ model: Posts, as: "posts" }],
    });
    res.status(200).json(200, Cates);
  } catch (error) {
    console.log(error);
  }
};

const createComment = async (req, res) => {
  const { content } = req.body;
  //   if (!content) return res.status(400, "Name is required");
  try {
    const Comments = await Comment.create({
      content,
    });
    res.status(201).json(201, "Create Comment Successfully", Comments);
  } catch (err) {
    if (err.name === "SequelizeValidationError") {
      res.status(400).json(400, err.errors);
    }
    console.log(err);
  }
};

module.exports = {
  getComment,
  createComment,
};
