import { Request, Response } from 'express';
import service from '../services/matches.service';

const getAllMatches = async (req: Request, res: Response): Promise<Response> => {
  const matches = await service.getAllMatches(req.query);
  return res.status(200).json(matches);
};

// const getMatchesByQuery = async (req: Request, res: Response): Promise<Response | void> => {
//   const matchesFilter = await service.getMatchesByQuery(req.query);
//   return res.status(200).json(matchesFilter);
// };

export default {
  getAllMatches,
  // getMatchesByQuery,
};
