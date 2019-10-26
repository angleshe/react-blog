// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportResponseMessageModel from '../../../app/model/ResponseMessageModel';

declare module 'egg' {
  interface IModel {
    ResponseMessageModel: ReturnType<typeof ExportResponseMessageModel>;
  }
}
