import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

export default (role) => (req,res,next) => {
  const token = req.headers.authorization.split('')[1]
  if (!token) {
    res.sendStatus(403)
    next()
  }
  if (token) {
    jwt.verify(token, JWT_SECRET, (err, payload) => {
      if (err) {
        res.sendStatus(403)
        next()
      }
      if (role === payload.usertype) {
        req.user = payload
        next()
      } else {
        res.sendStatus(401);
        next()
      }
    })
  }
}
