import HttpException from '../utils/httpExpeption';
import { IUser, IUserLogin } from '../interfaces/User';
import Users from '../database/models/User';
import { generateJwtToken } from '../utils/token';

const loginUser = async (body: IUserLogin) => {
  const { email, password } = body;

  const userLogin = await Users.findOne({
    attributes: ['id', 'username', 'role', 'email'],
    where: { email, password },
  });

  if (!userLogin) {
    throw new HttpException(401, 'Incorrect email or password');
  }

  const user : Omit<IUser, 'password'> = {
    id: userLogin.id,
    username: userLogin.username,
    role: userLogin.role,
    email: userLogin.email,

  };

  const tokenCreate = generateJwtToken(user);
  return tokenCreate;
};

export default {
  loginUser,
};
