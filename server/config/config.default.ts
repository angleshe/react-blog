import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1571650689880_1154';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  const mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      password: 'anqishe',
      database: 'react_blog',
      user: 'root'
    },
    app: true,
    agent: false
  }

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
    mysql
  };
};
