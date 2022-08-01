import HttpException from '../utils/httpExpeption';
import Teams from '../database/models/Teams';
import Matches from '../database/models/Matches';
import {
  IMacthesFilter,
  IMatchesBody,
  IMatchesCreate,
  IMatchesGoalsBody } from '../interfaces/Matches';

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
  const { homeTeam, homeTeamGoals, awayTeam, awayTeamGoals } = body;

  if (homeTeam === awayTeam) {
    throw new HttpException(401, 'It is not possible to create a match with two equal teams');
  }

  const matchesId = await Matches.findOne({ where: { homeTeam } });
  if (!matchesId) { throw new HttpException(404, 'There is no team with such id!'); }

  const createMatches = await Matches.create({
    homeTeam,
    homeTeamGoals,
    awayTeam,
    awayTeamGoals,
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

const macthesUpdateGoals = async (id: number, body: IMatchesGoalsBody) => {
  const { homeTeamGoals, awayTeamGoals } = body;
  const matches = await Matches.findOne({ where: { id } });
  if (!matches) throw new HttpException(400, 'not found matches');

  const updateGoals = await Matches.update({
    homeTeamGoals,
    awayTeamGoals,
  }, { where: { id } });
  return updateGoals;
};

export default {
  getAllMatches,
  matchesInProgress,
  matchesUpdateFinish,
  macthesUpdateGoals,
};
