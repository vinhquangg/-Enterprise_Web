const express = require("express");
const postControllers = require("../../controller/post.Controllers");
const postRouter = express.Router();

postRouter.get("/", postControllers.getPost);
postRouter.get("/:id", postControllers.getPostsById);
postRouter.post("/", postControllers.createPost);
postRouter.put("/:id", postControllers.updatePost);
postRouter.delete("/:id", postControllers.deletePost);

module.exports = postRouter;