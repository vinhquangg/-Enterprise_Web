const express = require("express");
const authRouter = require("./auth.routes");
const userRouter = require("./users.routes");
const departmentRouter = require("./department.routes");

//url: api/v1
const rootRouter = express.Router();

// authRouter
rootRouter.use("/auth", authRouter);
// userRouter
rootRouter.use("/users", userRouter);
// departmentRouter
rootRouter.use("/department", departmentRouter);

module.exports = rootRouter;
