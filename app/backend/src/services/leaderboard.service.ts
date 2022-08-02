import { ILeaderboard } from '../interfaces/leaderboard';
import Teams from '../database/models/Teams';
import Matches from '../database/models/Matches';
// import { ILeaderboard } from '../interfaces/leaderboard';

const calculateGamePoints = (item: ILeaderboard) => {
  if (item.homeTeamGoals > item.awayTeamGoals) return 3;
  if (item.homeTeamGoals === item.awayTeamGoals) return 1;
  if (item.homeTeamGoals < item.awayTeamGoals) return 0;
};

const getMatches = async (): Promise<ILeaderboard[]> => await Matches.findAll({
  include: [
    { model: Teams, as: 'teamHome', attributes: ['teamName'] },
  ],
  where: { inProgress: false },
}) as unknown as ILeaderboard[];

const getAllLeaderboard = async () => {
  const matches = await getMatches();
  const resultLeaderBoard: any = [];

  matches.forEach((item: ILeaderboard) => {
    const currentTeam = item.homeTeam;
    if (resultLeaderBoard[currentTeam] === undefined) {
      const data: any = {};
      data.name = item.teamHome.teamName;
      data.totalPoints = calculateGamePoints(item);
      resultLeaderBoard[currentTeam] = data;
    } else {
      resultLeaderBoard[currentTeam].totalPoints += calculateGamePoints(item);
    }
  });

  return resultLeaderBoard;
};

export default {
  getAllLeaderboard,
};
