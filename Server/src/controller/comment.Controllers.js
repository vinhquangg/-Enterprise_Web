const { posts, comments } = require("../models");

const createComment = async (req, res) => {
  const { comment } = req.body;
  try {
    const Comments = await comments.create({
      comment,
    });
    res.json(201, "Create Category Successfully", Comments);
  } catch (err) {
    if (err.name === "SequelizeValidationError") {
      res.status(400).json(400, err.errors);
    }
    console.log(err);
  }
};

module.exports = {
  createComment,
};
