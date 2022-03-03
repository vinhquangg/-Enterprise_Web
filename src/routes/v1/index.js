const express = require("express");
const authRouter = require("./auth.routes");

//url: api/v1
const rootRouter = express.Router();

// authRouter
rootRouter.use("/auth", authRouter);

module.exports = rootRouter;
