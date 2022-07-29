import Teams from '../database/models/Teams';

const getAllTeams = async () => {
  const teams = await Teams.findAll({
    attributes: ['id', 'teamName'],
  });
  return teams;
};

const getTeamById = async (id: string) => {
  const Team = await Teams.findOne({
    attributes: ['id', 'teamName'],
    where: { id },
  });
  return Team;
};

export default {
  getAllTeams,
  getTeamById,
};
