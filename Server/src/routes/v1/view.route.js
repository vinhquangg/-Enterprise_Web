const express = require("express");
const viewController = require("../../controller/view.Controllers");
const viewRouter = express.Router();

// viewRouter.get("/",viewController.getView)
viewRouter.post("/", viewController.createView);

module.exports = viewRouter;
