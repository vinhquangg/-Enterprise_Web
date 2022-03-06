const { User } = require("../models");

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ["password"] },
    });
    res.status(200).json(200, users);
  } catch (error) {
    console.log(error);
  }
};

const getUsersById = async (req, res) => {
  const id = Number(req.params.id);

  if (!id) {
    res.status(400).json(400, "Invalid request");
  }

  try {
    const user = await User.findByPk(id);
    if (user) {
      res.status(200).json(200, user);
    }
    res.status(200).json(400, "User not found");
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {
  const { name, email, password, departmentId, role } = req.body;

  try {
    const user = await User.create({
      name,
      email,
      password,
      departmentId,
      role,
    });
    res.json(201, "Create User Successfully");
  } catch (err) {
    if (err.name === "SequelizeValidationError") {
      res.status(400).json(400, err.errors);
    }
    console.log(err);
  }
};

const updateUser = async (req, res) => {
  const id = Number(req.params.id);
  const { name, email, departmentId, role } = req.body;

  if (!id) {
    res.status(400).json(400, "Invalid request");
  }

  const newUser = { name, email, departmentId, role };

  try {
    await User.update(newUser, {
      where: {
        id,
      },
    });
    res.status(200).json(200, "Update User Successfully");
  } catch (err) {
    if (err.name === "SequelizeValidationError") {
      res.status(400).json(400, err.errors);
    }
    console.log(err);
  }
};

const deleteUser = async (req, res) => {
  const id = Number(req.params.id);
  if (!id) {
    res.status(400).json(400, "Invalid request");
  }
  try {
    const user = await User.findByPk(id);
    if (!user) {
      res.status(400).json(400, "User not found");
    }
    await User.destroy({ where: { id } });
    res.status(204).json(204, "Delete User Successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser,
};
