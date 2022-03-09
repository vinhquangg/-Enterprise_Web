// const {posts,category} = require("../models")

// const getCategory = async(req,res)=>{
//     try {
//         const getCategory= await category.findAll({
//           include: [{model: posts,as: "posts"}]
//         })
//         res.status(200).json(200,getCategory)
//     } catch (error) {
//         console.log(error)
//     }
// }

// const getCategoryId = async (req,res) =>{
//     const id = Number(req.params.id);
//     if(!id){
//         res.status(200).json(400,"Invalid request")
//     }
//     try {
//         const cate = await category.findByPk(id)
//         if(category){
//             res.status(200).json(200,cate)
//         }
//         res.status(200).json(400),"Category has't found"
//     } catch (error) {
//         console.log(error)
//     }
// }

// const createCategory = async(req,res)=>{
//     const{name,description} = req.body;
//     if(!title)
//     return res.status(400,"Name is required")
//     try {
//         const newCate= await category.create({
//             name,description
//         })
//         res.json(200, newCate.id);
//     } catch (error) {
//         if (err.name === "SequelizeValidationError") {
//             res.status(400).json(400, err.errors);
//           }
//         console.log(err);
//     }
// }


//   const deleteCategory = async (req, res) => {
//     const id = Number(req.params.id);
//     if (!id) {
//       res.status(400).json(400, "Invalid request");
//     }
//     try {
//       const cate = await category.findByPk(id);
//       if (!cate) {
//         res.status(400).json(400, "Category not found");
//       }
//       await category.destroy({ where: { id } });
//       res.status(204).json(204, "Delete Category Successfully");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   module.exports = {
//     getCategory,
//     getCategoryId,
//     createCategory,
//     deleteCategory,
//   };



const { posts, category } = require("../models");

const getCategory = async (req, res) => {
  try {
    const Cates = await category.findAll({
      include: [{ model: posts, as: "posts" }],
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
    const Cates = await category.findByPk(id);
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
  if(!name)
    return res.status(400,"Name is required")
  try {
    const Cates = await Cates.create({
      name,
      description
    });
    res.json(201, "Create Category Successfully", user);
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
    const cate = await category.findByPk(id);
    if (!cate) {
      res.status(400).json(400, "Category not found");
    }
    await category.destroy({ where: { id } });
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