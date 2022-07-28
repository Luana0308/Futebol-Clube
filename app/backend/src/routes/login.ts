import * as express from 'express';
import controller from '../controllers/login.controllers';

const routesLogin = express.Router();

routesLogin.post('/', controller.loginController);

export default routesLogin;
