// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBaseService from '../../../app/service/baseService';
import ExportArticleArtSelectService from '../../../app/service/article/artSelectService';

declare module 'egg' {
  interface IService {
    baseService: ExportBaseService;
    article: {
      artSelectService: ExportArticleArtSelectService;
    }
  }
}
