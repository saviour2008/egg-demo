'use strict';

const Controller = require('egg').Controller;

class ErrorController extends Controller {
    async create() {
        const { ctx, service } = this;
        ctx.body = {
            code: 'success',
            data: 'success',
            message: '错误信息已经保存',
        };
    }
}

module.exports = ErrorController;
