import * as express from 'express';
import routesLogin from './login';

const router = express.Router();

router.use('/login', routesLogin);

export default router;
