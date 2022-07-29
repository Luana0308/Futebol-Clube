import Teams from '../database/models/Teams';

const getAllTeams = async () => {
  const teams = await Teams.findAll({
    attributes: ['id', 'teamName'],
  });
  return teams;
};

export default {
  getAllTeams,
};
