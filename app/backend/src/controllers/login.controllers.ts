import { Response, Request } from 'express';
import service from '../services/login.service';

const loginController = async (req: Request, res: Response): Promise<Response | void> => {
  const token = await service.loginUser(req.body);
  return res.status(200).json({ token });
};

const roleUserController = async (_req: Request, res: Response): Promise<Response | void> => {
  const role = await service.roleUserService(res.locals.payload);
  return res.status(200).json(role);
};

export default { loginController, roleUserController };
