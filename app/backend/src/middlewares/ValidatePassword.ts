import { NextFunction, Request, Response } from 'express';
import HttpException from '../utils/httpExpeption';

const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (!password) {
    throw new HttpException(400, 'All fields must be filled');
  }
  if (password.length < 6) {
    throw new HttpException(422, '"password" length must be at least 6 characters long');
  }
  next();
};

export default validatePassword;
