import { Request, Response } from 'express';
import service from '../services/leaderboard.service';

const getAllLeaderboard = async (req: Request, res: Response): Promise<Response> => {
  const leaderboard = await service.getAllLeaderboard();
  return res.status(200).json(leaderboard);
};

export default {
  getAllLeaderboard,
};
