const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("bodyParser");
const cookieParser = require("cookie-parser");
require("dotenv").config();
//import routes
const userRoutes = require("./routes/user");

//app
const app = express();

//db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("db connected"));

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

//routes middleware
app.use("/api", userRoutes);

const port = process.env.PORT || 8001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
