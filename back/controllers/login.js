import Users from "../models/users.js";
import express from "express";

const Router = express.Router()

Router.post('/', async (req,res) => {
  const { email, password } = req.body
  try {
    const login = await Users.findOne({
      email
    }).exec()
    console.log(login)
  } catch (e) {
    res.status(401).json(e)
  }
})
