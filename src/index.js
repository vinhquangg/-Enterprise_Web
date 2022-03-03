const express = require("express");
const rootRouter = require("./routes/v1");

const app = express();

app.use("/api/v1", rootRouter);

app.listen(8080, () => {
  console.log("Listening at port 8080");
});
