import express from "express";
import Users from "../controllers/users.js";
import Login from  "../controllers/login.js"

const Router = express.Router()

Router.use('/users', Users)
Router.use('/login', Login)

export default Router
