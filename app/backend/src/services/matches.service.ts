import HttpException from '../utils/httpExpeption';
import Teams from '../database/models/Teams';
import Matches from '../database/models/Matches';
import { IMacthesFilter, IMatchesBody, IMatchesCreate } from '../interfaces/Matches';

const getAllMatches = async (query: IMacthesFilter) => {
  const include = [
    { model: Teams, as: 'teamHome', attributes: ['teamName'] },
    { model: Teams, as: 'teamAway', attributes: ['teamName'] },
  ];

  if (query.inProgress !== undefined) {
    const value = (query.inProgress === 'true');

    const filterMatches = await Matches.findAll({
      where: { inProgress: +value },
      include,
    });
    return filterMatches;
  }
  const matches = await Matches.findAll({
    include,
  });
  return matches;
};

const matchesInProgress = async (body: IMatchesBody): Promise<IMatchesCreate> => {
  const createMatches = await Matches.create({
    homeTeam: body.homeTeam,
    homeTeamGoals: body.homeTeamGoals,
    awayTeam: body.awayTeam,
    awayTeamGoals: body.homeTeamGoals,
    inProgress: true,
  });
  return createMatches;
};

const matchesUpdateFinish = async (id: number) => {
  const matches = await Matches.findOne({ where: { id } });
  if (!matches) throw new HttpException(400, 'not found matches');

  await Matches.update({ inProgress: false }, { where: { id } });

  return { message: 'Finished' };
};

export default {
  getAllMatches,
  matchesInProgress,
  matchesUpdateFinish,
};
