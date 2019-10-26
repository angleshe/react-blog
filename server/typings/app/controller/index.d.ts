// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportApiHome from '../../../app/controller/api/home';
import ExportApiIndex from '../../../app/controller/api/index';

declare module 'egg' {
  interface IController {
    api: {
      home: ExportApiHome;
      index: ExportApiIndex;
    }
  }
}
