// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBaseService from '../../../app/service/baseService';
import ExportArticleArtDetSelectService from '../../../app/service/article/artDetSelectService';
import ExportArticleArtSelectService from '../../../app/service/article/artSelectService';
import ExportShopShopSelectService from '../../../app/service/shop/shopSelectService';

declare module 'egg' {
  interface IService {
    baseService: ExportBaseService;
    article: {
      artDetSelectService: ExportArticleArtDetSelectService;
      artSelectService: ExportArticleArtSelectService;
    }
    shop: {
      shopSelectService: ExportShopShopSelectService;
    }
  }
}
