const { Posts, Category } = require("../models");

const getCategory = async (req, res) => {
  try {
    const Cates = await Category.findAll({
      // include: [{ model: Posts, as: "posts" }],
    });
    res.status(200).json(200, Cates);
  } catch (error) {
    console.log(error);
  }
};

const getCategoryById = async (req, res) => {
  const id = Number(req.params.id);

  if (!id) {
    res.status(400).json(400, "Invalid request");
  }

  try {
    const Cates = await Category.findByPk(id);
    if (Cates) {
      res.status(200).json(200, Cates);
    }
    res.status(200).json(400, "Cates not found");
  } catch (error) {
    console.log(error);
  }
};

const createCategory = async (req, res) => {
  const { name, description } = req.body;
  if (!name) return res.status(400, "Name is required");
  try {
    const Cates = await Category.create({
      name,
      description,
    });
    res.status(201).json(201, "Create Category Successfully", Cates);
  } catch (err) {
    if (err.name === "SequelizeValidationError") {
      res.status(400).json(400, err.errors);
    }
    console.log(err);
  }
};

const deleteCategory = async (req, res) => {
  const id = Number(req.params.id);
  if (!id) {
    res.status(400).json(400, "Invalid request");
  }
  try {
    const cate = await Category.findByPk(id);
    if (!cate) {
      res.status(400).json(400, "Category not found");
    }
    await Category.destroy({ where: { id } });
    res.status(204).json(204, "Delete Category Successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getCategory,
  getCategoryById,
  createCategory,
  deleteCategory,
};
