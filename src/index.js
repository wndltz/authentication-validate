import jwt from 'jsonwebtoken'
import config from '@rplan/config'

const JWT_PUBLIC_KEY = config.get('authentication:public-key')

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
