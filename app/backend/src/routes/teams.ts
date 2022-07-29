import * as express from 'express';
import controller from '../controllers/teams.controllers';

const routesTeams = express.Router();

routesTeams.get('/', controller.getAllTeams);

export default routesTeams;
