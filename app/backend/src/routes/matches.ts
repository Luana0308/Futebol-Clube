import * as express from 'express';
import controller from '../controllers/matches.controllers';

const routesMatches = express.Router();

routesMatches.get('/', controller.getAllMatches);

export default routesMatches;
