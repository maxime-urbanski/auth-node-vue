import Users from "../models/users.js";
import express from "express";
import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv'

dotenv.config()

const Router = express.Router()
const JWT_SECRET = process.env.JWT_SECRET

Router.post('/', async (req,res) => {
  const { email, password } = req.body

  try {
    const login = await Users.findOne({
      email
    }).exec()
    const goodPassword = await login.comparePassword(password)

    if (login && goodPassword) {
      const { firstname, lastname, email, isAdmin } = login

      const payload = {
        firstname, lastname, email, isAdmin
      }

      const token = jwt.sign(payload, JWT_SECRET, {
      'expiresIn': '24h'
      })

      delete login._doc.password

      res.header('Access-Control-Allow-Origin', '*')
      res.status(200).json({token, login})
    }
  } catch (e) {
    res.status(401).json(e)
  }
})


export default Router
