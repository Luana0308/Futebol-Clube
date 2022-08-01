import { Request, Response } from 'express';
import service from '../services/matches.service';

const getAllMatches = async (req: Request, res: Response): Promise<Response> => {
  const matches = await service.getAllMatches(req.query);
  return res.status(200).json(matches);
};

const matchesInProgress = async (req: Request, res: Response): Promise<Response> => {
  const matches = await service.matchesInProgress(req.body);
  return res.status(201).json(matches);
};

export default {
  getAllMatches,
  matchesInProgress,

};
