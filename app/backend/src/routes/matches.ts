import * as express from 'express';
import authToken from '../middlewares/authToken';
import controller from '../controllers/matches.controllers';

const routesMatches = express.Router();

routesMatches.get('/', controller.getAllMatches);
routesMatches.post('/', authToken, controller.matchesInProgress);
routesMatches.patch('/:id/finish', controller.matchesUpdateFinish);

export default routesMatches;
