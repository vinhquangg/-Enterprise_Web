const express = require("express");
const commentController = require("../../controller/comment.Controllers");
const commentRouter = express.Router();

commentRouter.post("/", commentController.createComment);

module.exports = commentRouter;
