import Teams from '../database/models/Teams';
import Matches from '../database/models/Matches';
import { IMacthesFilter } from '../interfaces/Matches';

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

export default {
  getAllMatches,
};
