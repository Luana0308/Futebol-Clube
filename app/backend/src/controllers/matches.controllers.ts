import { Request, Response } from 'express';
import service from '../services/matches.service';

const getAllMatches = async (_req: Request, res: Response): Promise<Response> => {
  const matches = await service.getAllMatches();
  return res.status(200).json(matches);
};

export default {
  getAllMatches,
};
