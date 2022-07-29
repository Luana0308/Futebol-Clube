/* eslint-disable import/no-import-module-exports */
import { NextFunction, Request, Response } from 'express';
import HttpException from '../utils/httpExpeption';
import { authenticateToken } from '../utils/token';

const authToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  const payload = authenticateToken(token);
  if (!payload) {
    throw new HttpException(401, 'Expired or invalid token');
  }
  res.locals.payload = payload;

  next();
};

export default authToken;
