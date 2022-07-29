import { NextFunction, Request, Response } from 'express';
import HttpException from '../utils/httpExpeption';

const httpErrorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log('oi');
  const { status, message } = err as HttpException;
  console.log('chegou na linha 7');
  res.status(status || 500).json({ message });
  next();
};

export default httpErrorMiddleware;
