'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
    async login() {
        const { ctx, service } = this;
        if (ctx.request.body.userName === 'admin') {
            ctx.body = {
                code: 'success',
                message: '',
                data: {
                    token: 'ILoveAngular',
                    role: 'admin',
                },
            };
        } else if (ctx.request.body.userName === 'visitor') {
            ctx.body = {
                code: 'success',
                message: '',
                data: {
                    token: 'ILoveAngular',
                    role: 'visiter',
                },
            };
        }
    }
}

module.exports = LoginController;
