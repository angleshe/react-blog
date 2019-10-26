import { Application } from 'egg';
import apiRouter from './route/api'

export default (app: Application) => {
  apiRouter(app);
};
