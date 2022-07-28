const sequelize = require("sequelize");

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('matches', { 
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        homeTeam: {
          field: 'home_team',
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'teams',
            key: 'id',
          },
          ondelete: 'CASCADE',
          onupdate: 'CASCADE',
        },
        homeTeamGoals: {
          field: 'home_team_goals',
          allowNull: false,
          type: Sequelize.INTEGER
        },
        awayTeam: {
          field: 'away_team',
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'teams',
            key: 'id',
          },
          ondelete: 'CASCADE',
          onupdate: 'CASCADE',
        },
        awayTeamGoals: {
          field: 'away_team_goals',
          allowNull: false,
          type: Sequelize.INTEGER
        },
        inProgress: {
            field: 'in_progress',
            type: sequelize.BOOLEAN,
        }
      });  
    },
  
    down: async (queryInterface, Sequelize) => {
       await queryInterface.dropTable('matches'); 
    }
  };