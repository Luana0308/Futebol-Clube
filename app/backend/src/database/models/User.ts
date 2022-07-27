import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';

class Users extends Model {
    id: number;
    username: string;
    role: string;
    email: string;
    password: string; 
}
    Users.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: INTEGER
          },
        username: {
            allowNull: false,
            type: STRING(255),
          },
          role: {
            allowNull: false,
            type: STRING(255),
          },
          email: {
            allowNull: false,
            type: STRING(255)
          },
          password: {
            allowNull: false,
            type: STRING(255)
          },
}, {
    underscored: true,
    sequelize: db,
    modelName: 'Users',
    timestamps: false,
})

export default Users;