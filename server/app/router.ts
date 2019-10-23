import { Application } from 'egg';
import apiRouter from './route/api'

export default (app: Application) => {
  const { controller, router } = app;
  router.get('/', controller.home.index);
  apiRouter(app);
};
