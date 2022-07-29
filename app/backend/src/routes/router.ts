import * as express from 'express';
import routesLogin from './login';
import routesTeams from './teams';

const router = express.Router();

router.use('/login', routesLogin);
router.use('/teams', routesTeams);

export default router;
