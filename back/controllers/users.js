import express from "express";
import Users from "../models/users.js";
import auth from "../middlewares/auth.js";

const Router = express.Router()

Router.get('/', async (req, res) => {
  try {
    const getUsers = await Users.find()
    res.header('Access-Control-Allow-Origin', '*')
    res.status(200).json(getUsers)
  } catch (e) {
    res.status(401).json(e)
  }
})

Router.get('/:id', async (req, res) => {
  const {id} = req.params
  try {
    const getUser = await Users.findById(id)
    if (id === getUser['_id'].toString()) res.status(200).json(getUser)
  } catch (e) {
    res.status(401).json(e)
  }
})

Router.post('/', async (req, res) => {
  try {
    const postUsers = await new Users({
      ...req.body
    }).save()
    res.status(200).json(postUsers)

  } catch (error) {
    res.status(401).json(error)
  }
})

export default Router
