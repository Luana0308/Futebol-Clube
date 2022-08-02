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

const calculateTotalLosses = (item: ILeaderboard) => {
  if (item.homeTeamGoals < item.awayTeamGoals) {
    return 1;
  }
  return 0;
};

const calculateGoalsFavor = (item: ILeaderboard) => {
  if (item.homeTeam) {
    return item.homeTeamGoals;
  }
  return 0;
};

const calculateGoalsOwn = (item:ILeaderboard) => {
  if (item.homeTeam) {
    return item.awayTeamGoals;
  }
  return 0;
};

const calculateGoalsBalance = (item: ILeaderboard) => item.homeTeamGoals - item.awayTeamGoals;

const calculateEfficiency = (totalPoints: number, totalGames: number) :number => {
  const result: number = (totalPoints / (totalGames * 3)) * 100;
  return Number(result.toFixed(2));
};

const getMatches = async (): Promise<ILeaderboard[]> => await Matches.findAll({
  include: [
    { model: Teams, as: 'teamHome', attributes: ['teamName'] },
  ],
  where: { inProgress: false },
}) as unknown as ILeaderboard[];

const createNewResult = (currentTeam: number, item: ILeaderboard): IResultGames => {
  const data: Record<string, string | number> = {};
  data.name = item.teamHome.teamName;
  data.totalPoints = calculateGamePoints(item);
  data.totalGames = calculateTotalGames(item, currentTeam);
  data.totalVictories = calculateTotalVitories(item);
  data.totalDraws = calculateTotalDraws(item);
  data.totalLosses = calculateTotalLosses(item);
  data.goalsFavor = calculateGoalsFavor(item);
  data.goalsOwn = calculateGoalsOwn(item);
  data.goalsBalance = calculateGoalsBalance(item);
  data.efficiency = calculateEfficiency(data.totalPoints, data.totalGames);
  return data as unknown as IResultGames;
};

const updateResult = (previousValue: IResultGames, item: ILeaderboard, currentTeam: number) => {
  const data = previousValue;
  data.totalPoints += calculateGamePoints(item);
  data.totalGames += calculateTotalGames(item, currentTeam);
  data.totalVictories += calculateTotalVitories(item);
  data.totalDraws += calculateTotalDraws(item);
  data.totalLosses += calculateTotalLosses(item);
  data.goalsFavor += calculateGoalsFavor(item);
  data.goalsOwn += calculateGoalsOwn(item);
  data.goalsBalance += calculateGoalsBalance(item);
  data.efficiency = calculateEfficiency(data.totalPoints, data.totalGames);
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

const sortLeaderboard = (resultLeaderBoard: IResultGames[]) => resultLeaderBoard.sort((a, b) =>
  b.totalPoints - a.totalPoints
  || b.totalVictories - a.totalVictories
  || b.goalsBalance - a.goalsBalance
  || b.goalsFavor - a.goalsFavor
  || b.goalsOwn - a.goalsOwn);

const filternotNull = (list: IResultGames[]) => list.filter((item) => item !== null);

const getAllLeaderboard = async () => {
  const matches = await getMatches();
  const resultLeaderBoard = buildLeaderboard(matches);
  const sorted = filternotNull(sortLeaderboard(resultLeaderBoard));

  return sorted;
};

export default {
  getAllLeaderboard,
};
