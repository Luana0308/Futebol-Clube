import { sign, SignOptions, verify } from 'jsonwebtoken';
import 'dotenv/config';
import { IUser } from '../interfaces/User';

const SECRET = process.env.JWT_SECRET || 'jwt_secret';

const jwtConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateJWTToken = (user: Omit<IUser, 'password'>) => sign(user, SECRET, jwtConfig);

const authenticateToken = (token: string) => {
  if (!token) {
    const messageError = { status: 401, message: 'Token not found'}
    throw messageError;
  }
  try {
    const introspection = verify(token, SECRET, jwtConfig);
    return introspection;
  } catch (erro) {
    const invalidToken = { status: 401, message: 'Expired or invalid token' }
    throw invalidToken;
  }
};

export default {
  generateJWTToken,
  authenticateToken };
