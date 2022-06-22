import db from './models/index.mjs';

import initUsersController from './controllers/users.mjs';

export default function bindRoutes(app) {
  const UsersController = initUsersController(db);

  app.get('/', UsersController.root);
  app.get('/playerInfo', UsersController.player);
  app.get('/login', UsersController.loginpage);
  app.post('/login', UsersController.login);
  app.post('/signup', UsersController.signup);
  app.get('/logout', UsersController.logout);
}
