import {Schema, model} from 'mongoose'
import bcrypt from 'bcrypt'

const SALT_FACTOR = 10

const usersSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: false,
    default: false
  }
})

usersSchema.pre('save', function (next) {
    const user = this
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
      if (err) next(err)

      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) next(err)
        user.password = hash
        next()
      })
    })
  }
)

usersSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
}

const Users = model('users', usersSchema)

export default Users

