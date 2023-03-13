import express from "express";
import Users from "../controllers/users.js";

const Router = express.Router()

Router.use('/users', Users)

export default Router
