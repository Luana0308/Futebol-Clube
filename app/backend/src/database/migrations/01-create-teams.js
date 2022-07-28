module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('teams', { 
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        teamName: {
          allowNull: false,
          type: Sequelize.STRING(255),
        },
      });  
    },
  
    down: async (queryInterface, Sequelize) => {
       await queryInterface.dropTable('teams'); 
    }
  };