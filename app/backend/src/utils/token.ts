import { sign, SignOptions, verify } from 'jsonwebtoken';
import 'dotenv/config';
import { IUser } from '../interfaces/User';
import HttpException from './httpExpeption';

const SECRET = process.env.JWT_SECRET || 'jwt_secret';

const jwtConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateJwtToken = (user: Omit<IUser, 'password'>) => sign(user, SECRET, jwtConfig);

const authenticateToken = (token: string | undefined) => {
  if (!token) {
    throw new HttpException(401, 'Token not found');
  }
  try {
    const introspection = verify(token, SECRET, jwtConfig);
    return introspection;
  } catch (erro) {
    throw new HttpException(401, 'Token must be a valid token');
  }
};

export {
  generateJwtToken,
  authenticateToken };
