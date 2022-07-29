import { Request, Response } from 'express';
import service from '../services/teams.service';

const getAllTeams = async (_req: Request, res: Response): Promise<Response> => {
  const teams = await service.getAllTeams();
  return res.status(200).json(teams);
};

const getTeamById = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const team = await service.getTeamById(id);
  return res.status(200).json(team);
};

export default {
  getAllTeams,
  getTeamById,
};
