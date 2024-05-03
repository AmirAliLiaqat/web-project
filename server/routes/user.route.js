const express = require("express");
const {
  createUser,
  getAllUsers,
  deleteUserById,
  getUserById,
} = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.get("/", getAllUsers);
userRouter.delete("/:id", deleteUserById);
userRouter.get("/:id", getUserById);

module.exports = userRouter;
