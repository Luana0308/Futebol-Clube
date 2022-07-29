import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';

class Teams extends Model {
  id?: number;
  teamName: string;
}
Teams.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  teamName: {
    allowNull: false,
    type: STRING(255),
  },
}, {
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
  underscored: true,
});

export default Teams;
