const { view,posts} = require("../models")

const getView = async (req, res) => {
  try {
    const views = await view.findAll({
      include: [
         { model: posts, as: "posts" },
      ],
    });
    res.status(200).json(200, views);
  } catch (error) {
    console.log(error);
  }
};

const createView = async (req, res) => {
  const {View,postId} = req.body;
  try {
    const views = await view.create({
      View,
      postId
    })
    res.json(201, views);
  } catch (err) {
    if (err.name === "SequelizeValidationError") {
      res.status(400).json(400, err.errors);
    }
    console.log(err);
  }
};

module.exports = {
  getView,
  createView,
};
