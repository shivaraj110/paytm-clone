const express = require("express");
const app = express();
const mainRouter = require("./routes/index");
const PORT = process.env.PORT || 3000;
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/api/v1", mainRouter);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.listen(PORT);
