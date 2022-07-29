import { NextFunction, Request, Response } from 'express';
import HttpException from '../utils/httpExpeption';

const validateEmail = (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    throw new HttpException(400, 'All fields must be filled');
  }
  if (!regexEmail.test(email)) {
    throw new HttpException(400, '"email" must be a valid email');
  }
  next();
};

export default validateEmail;
