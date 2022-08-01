export interface IMacthesFilter {
  inProgress?: string
}

export interface IMatchesBody {
  homeTeam: number,
  awayTeam: number,
  homeTeamGoals: number,
  awayTeamGoals: number,
}

export interface IMatchesCreate {
  homeTeam: number,
  awayTeam: number,
  homeTeamGoals: number,
  awayTeamGoals: number,
  inProgress: boolean,

}

export interface IMacthesId {
  id: number | undefined
}
