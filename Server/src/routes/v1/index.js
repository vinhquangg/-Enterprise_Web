const express = require("express");
const postRouter = require("./posts.route");
const cateRouter= require("./cate.route")

//url: api/v1
const rootRouter = express.Router();
// postRouter
rootRouter.use("/posts", postRouter);
rootRouter.use("/category",cateRouter)

module.exports = rootRouter;