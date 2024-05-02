const express = require("express");
const { createUser, getAllUsers, deleteUserById } = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.get("/", getAllUsers);
userRouter.delete("/:id", deleteUserById);

module.exports = userRouter;
