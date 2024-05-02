const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/user.route");

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ urlencoded: true }));

mongoose
  .connect("mongodb://127.0.0.1:27017/web-project")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(`MongoDB connection error ${error}`);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
