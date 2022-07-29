import * as express from 'express';
import controller from '../controllers/login.controllers';
import validateEmail from '../middlewares/validateEmail';
import validatePassword from '../middlewares/ValidatePassword';
import authToken from '../middlewares/authToken';

const routesLogin = express.Router();

routesLogin.post('/', validateEmail, validatePassword, controller.loginController);
routesLogin.get('/validate', authToken, controller.roleUserController);

export default routesLogin;
