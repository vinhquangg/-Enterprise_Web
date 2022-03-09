// const {posts,category} = require("../models")

// const getPost = async(req,res)=>{
//     try {
//         const getPost= await posts.findAll({
//           include: [{model: category,as: "category"}]
//         })  
//         res.status(200).json(200,getPost)
//     } catch (error) {
//         console.log(error)
//     }
// }

// const getPostById = async (req,res) =>{
//     const id = Number(req.params.id);
//     if(!id){
//         res.status(200).json(400,"Invalid request")
//     }
//     try {
//         const post = await posts.findByPk(id)
//         if(post){
//             res.status(200).json(200,post)
//         }
//         res.status(200).json(400),"Posts has't found"
//     } catch (error) {
//         console.log(error)
//     }
// }

// const createPost = async(req,res)=>{
//     const{title,description,content} = req.body;
//     if(!title)
//     return res.status(400,"Title is required")
//     if(!content)
//     return res.status(400,"Content is required")
//     try {
//         const newPost= await posts.create({
//             title,description,content
//         })
//         res.json(200, "Create Posts Successfully");
//     } catch (error) {
//         if (err.name === "SequelizeValidationError") {
//             res.status(400).json(400, err.errors);
//           }
//         console.log(err);
//     }
// }


// const updatePost = async (req, res) => {
//     const id = Number(req.params.id);
//     const{title,description,content} = req.body;
  
//     if (!id) {
//       res.status(400).json(400, "Invalid request");
//     }
  
//     const newPost = {title,description,content} 
  
//     try {
//       await posts.update(newPost, {
//         where: {
//           id,
//         },
//       });
//       res.status(200).json(200, "Update Post Successfully");
//     } catch (err) {
//       if (err.name === "SequelizeValidationError") {
//         res.status(400).json(400, err.errors);
//       }
//       console.log(err);
//     }
//   };


//   const deletePost = async (req, res) => {
//     const id = Number(req.params.id);
//     if (!id) {
//       res.status(400).json(400, "Invalid request");
//     }
//     try {
//       const post = await posts.findByPk(id);
//       if (!post) {
//         res.status(400).json(400, "Post not found");
//       }
//       await posts.destroy({ where: { id } });
//       res.status(204).json(204, "Delete Posts Successfully");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   module.exports = {
//     getPost,
//     getPostById,
//     createPost,
//     updatePost,
//     deletePost,
//   };



const { posts, category } = require("../models");

const getPost = async (req, res) => {
  try {
    const posts = await posts.findAll({
      include: [{ model: category, as: "category" }],
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
    const posts = await posts.findByPk(id);
    if (posts) {
      res.status(200).json(200, posts);
    }
    res.status(200).json(400, "Posts not found");
  } catch (error) {
    console.log(error);
  }
};

const createPost = async (req, res) => {
  const { title,description,content} = req.body;
  if(!title||!content)
  res.status(200).json(400, "Title or content missing");
  try {
    const posts = await posts.create({
      title,
      description,
      content,
    });
    res.json(201, "Create Posts Successfully", posts);
  } catch (err) {
    if (err.name === "SequelizeValidationError") {
      res.status(400).json(400, err.errors);
    }
    console.log(err);
  }
};

const updatePost = async (req, res) => {
  const id = Number(req.params.id);
  const { title, description, content } = req.body;

  if (!id) {
    res.status(400).json(400, "Invalid request");
  }

  const newPost = { title, description,content };

  try {
    await posts.update(newPost, {
      where: {
        id,
      },
    });
    res.status(200).json(200, "Update Pos[ts Successfully");
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
  updatePost,
  deletePost,
};