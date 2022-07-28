import { Response, Request } from 'express';

const loginController = async (req: Request, res: Response): Promise<Response | void> => {
  const token = await (req.body);
  return res.status(200).json({ token });
};

export default { loginController };
