import { Schema, model } from 'mongoose'

const usersSchema = new Schema({
  id: Number,
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  isAdmin: Boolean
})

const users = model('users', usersSchema)

export default users

