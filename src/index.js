import jwt from 'jsonwebtoken'

const { JWT_PUBLIC_KEY } = process.env

export function validateToken(token) {
  try {
    jwt.verify(token, JWT_PUBLIC_KEY)
    return true
  } catch (e) {
    return false
  }
}

export function decodeToken(token) {
  return jwt.decode(token)
}
