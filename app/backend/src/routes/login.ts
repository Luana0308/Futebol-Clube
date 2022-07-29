import * as express from 'express';
import controller from '../controllers/login.controllers';
import validateEmail from '../middlewares/validateEmail';
import validatePassword from '../middlewares/ValidatePassword';

const routesLogin = express.Router();

routesLogin.post('/', validateEmail, validatePassword, controller.loginController);

export default routesLogin;
