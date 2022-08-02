import * as express from 'express';
import controller from '../controllers/leaderboard.controllers';

const routesLeaderboard = express.Router();

routesLeaderboard.get('/home', controller.getAllLeaderboard);

export default routesLeaderboard;
