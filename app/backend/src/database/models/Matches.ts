import { Model, BOOLEAN, INTEGER } from 'sequelize';
import db from '.';
import Teams from './Teams';

class Matches extends Model {
  id: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean;
}
Matches.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  homeTeam: {
    allowNull: false,
    type: INTEGER,
  },
  homeTeamGoals: {
    allowNull: false,
    type: INTEGER,
  },
  awayTeam: {
    allowNull: false,
    type: INTEGER,
  },
  awayTeamGoals: {
    allowNull: false,
    type: INTEGER,
  },
  inProgress: {
    allowNull: false,
    type: BOOLEAN,
  },

}, {
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
  underscored: true,
});

Teams.belongsTo(Matches, { foreignKey: 'homeTeam', as: 'homeTeam' });
Teams.belongsTo(Matches, { foreignKey: 'awayTeam', as: 'awayTeam' });

Matches.hasMany(Teams, { foreignKey: 'homeTeam', as: 'homeTeam' });
Matches.hasMany(Teams, { foreignKey: 'awayTeam', as: 'awayTeam' });

export default Matches;
