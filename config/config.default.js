/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = (exports = {});

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1626767705687_7431';

    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    config.sequelize = {
        dialect: 'mysql',
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '123456',
        database: 'egg_demo',
        define: {
            // 锁定表名和模型名一致，不自动转为复数
            freezeTableName: true,
        },
    };

    return {
        ...config,
        ...userConfig,
        security: {
            csrf: {
                enable: false,
            },
        },
    };
};
