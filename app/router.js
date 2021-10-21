'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
    const { router, controller } = app;
    router.get('/list', controller.home.index);
    router.get('/list/:id', controller.home.index);
    router.post('/new', controller.home.create);
    router.put('/update/:id', controller.home.update);
    router.get('/user', controller.home.user);
    router.post('/error', controller.error.create);
    router.post('/login', controller.login.login);
};
