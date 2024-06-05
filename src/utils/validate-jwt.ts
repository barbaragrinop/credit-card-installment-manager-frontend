import jwt from 'jsonwebtoken'

export function validateteJWT(token: string): boolean {
  try {
    const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET as string)
    return true
  } catch (error) {
    console.error('Invalid JWT: ', error)
    return false
  }
}