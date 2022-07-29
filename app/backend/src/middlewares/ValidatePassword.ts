import { NextFunction, Request, Response } from 'express';
// import HttpException from '../utils/httpExpeption';

const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json('All fields must be filled');
  }
  if (password.length < 6) {
    return res.status(422).json('"password" length must be at least 6 characters long');
  }
  next();
};

export default validatePassword;
