import { ILeaderboard, IResultGames } from '../interfaces/leaderboard';
import Teams from '../database/models/Teams';
import Matches from '../database/models/Matches';

const calculateGamePoints = (item: ILeaderboard) => {
  if (item.homeTeamGoals > item.awayTeamGoals) {
    return 3;
  } if (item.homeTeamGoals === item.awayTeamGoals) {
    return 1;
  }
  return 0;
};

const calculateTotalGames = (item: ILeaderboard, currentTeam: number) => {
  if (item.homeTeam === currentTeam) {
    return 1;
  } return 0;
};

const calculateTotalVitories = (item: ILeaderboard) => {
  if (item.homeTeamGoals > item.awayTeamGoals) {
    return 1;
  } return 0;
};

const calculateTotalDraws = (item: ILeaderboard) => {
  if (item.homeTeamGoals === item.awayTeamGoals) {
    return 1;
  } return 0;
};

const getMatches = async (): Promise<ILeaderboard[]> => await Matches.findAll({
  include: [
    { model: Teams, as: 'teamHome', attributes: ['teamName'] },
  ],
  where: { inProgress: false },
}) as unknown as ILeaderboard[];

const createNewResult = (
  currentTeam: number,
  item: ILeaderboard,
): IResultGames => {
  const data: Record<string, string | number> = {};
  data.name = item.teamHome.teamName;
  data.totalPoints = calculateGamePoints(item);
  data.totalGames = calculateTotalGames(item, currentTeam);
  data.totalVictories = calculateTotalVitories(item);
  data.totalDraws = calculateTotalDraws(item);
  return data as unknown as IResultGames;
};

const updateResult = (previousValue: IResultGames, item: ILeaderboard, currentTeam: number) => {
  const data = previousValue;
  data.totalPoints += calculateGamePoints(item);
  data.totalGames += calculateTotalGames(item, currentTeam);
  data.totalVictories += calculateTotalVitories(item);
  data.totalDraws += calculateTotalDraws(item);
  return data;
};

const buildLeaderboard = (matches: ILeaderboard[]) => {
  const resultLeaderBoard: IResultGames[] = [];
  matches.forEach((item: ILeaderboard) => {
    const position = item.homeTeam;
    const currentTeam = resultLeaderBoard[position];
    if (currentTeam === undefined) {
      resultLeaderBoard[position] = createNewResult(position, item);
    } else {
      resultLeaderBoard[position] = updateResult(currentTeam, item, position);
    }
  });
  return resultLeaderBoard;
};

const getAllLeaderboard = async () => {
  const matches = await getMatches();
  const resultLeaderBoard = buildLeaderboard(matches);

  return resultLeaderBoard;
};

export default {
  getAllLeaderboard,
};
