import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

export default (role) => (req, res, next) => {
  const token = req.headers.authorization.split('')[1]
  const multiRole = Array.isArray(role)
  if (!token) {
    res.sendStatus(403)
    next()
  }
  if (token) {
    jwt.verify(token, JWT_SECRET, (err, payload) => {
      if (err) {
        res.status(403).json(err)
        next()
      }
      if (role === payload.userType) {
        req.user = payload
        next()
      } else if (multiRole && role.some(arr => arr === payload.userType)) {
        req.user = payload
        next()
      } else {
        res.sendStatus(401);
        next()
      }
    })
  }
}
