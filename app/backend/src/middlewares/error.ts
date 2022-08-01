import { NextFunction, Request, Response } from 'express';
import HttpException from '../utils/httpExpeption';

const httpErrorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log('entrou no midd');
  const { status, message } = err as HttpException;
  console.log(err);
  res.status(status || 500).json({ message });
  next();
};

export default httpErrorMiddleware;
