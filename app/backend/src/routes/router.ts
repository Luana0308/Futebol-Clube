import * as express from 'express';
import routesLeaderboard from './leaderboard';
import routesLogin from './login';
import routesMatches from './matches';
import routesTeams from './teams';

const router = express.Router();

router.use('/login', routesLogin);
router.use('/teams', routesTeams);
router.use('/matches', routesMatches);
router.use('/leaderboard', routesLeaderboard);

export default router;
