'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx, service } = this;
        // const list = await service.articles.list();
        // const list = await this.ctx.model.articles.findAndCountAll();
        // console.log(list);
        // ctx.body = list;
        const array = [
            {
                id: '01',
                title: '文章标题01',
                content:
                    '在项目中，我们或多或少都会经历一些长列表渲染的难题，本篇文章就为大家详细的解析这类场景的解决方案。内容相对易上手，并不涉及复杂的逻辑，效果立竿见影。还等什么呢',
                comments: 10,
                likes: 10,
                writer: 'lemon',
                time: '2小时前',
                looks: 10,
                articlePicture: 'https://img01.yzcdn.cn/vant/cat.jpeg',
            },
            {
                id: '02',
                title: '文章标题02',
                content:
                    '在项目中，我们或多或少都会经历一些长列表渲染的难题，本篇文章就为大家详细的解析这类场景的解决方案。内容相对易上手，并不涉及复杂的逻辑，效果立竿见影。还等什么呢',
                comments: 10,
                likes: 10,
                looks: 10,
                writer: 'lemon',
                time: '2小时前',
                articlePicture: 'https://img01.yzcdn.cn/vant/cat.jpeg',
            },
            {
                id: '03',
                title: '文章标题03',
                content:
                    '在项目中，我们或多或少都会经历一些长列表渲染的难题，本篇文章就为大家详细的解析这类场景的解决方案。内容相对易上手，并不涉及复杂的逻辑，效果立竿见影。还等什么呢',
                comments: 10,
                likes: 10,
                looks: 10,
                writer: 'lemon',
                time: '2小时前',
                articlePicture: 'https://img01.yzcdn.cn/vant/cat.jpeg',
            },
            {
                id: '04',
                title: '文章标题04',
                content:
                    '在项目中，我们或多或少都会经历一些长列表渲染的难题，本篇文章就为大家详细的解析这类场景的解决方案。内容相对易上手，并不涉及复杂的逻辑，效果立竿见影。还等什么呢',
                comments: 10,
                likes: 10,
                looks: 10,
                writer: 'lemon',
                time: '2小时前',
                articlePicture: 'https://img01.yzcdn.cn/vant/cat.jpeg',
            },
            {
                id: '05',
                title: '文章标题05',
                content:
                    '在项目中，我们或多或少都会经历一些长列表渲染的难题，本篇文章就为大家详细的解析这类场景的解决方案。内容相对易上手，并不涉及复杂的逻辑，效果立竿见影。还等什么呢',
                comments: 10,
                likes: 10,
                looks: 10,
                writer: 'lemon',
                time: '2小时前',
                articlePicture: 'https://img01.yzcdn.cn/vant/cat.jpeg',
            },
            {
                id: '06',
                title: '文章标题06',
                content:
                    '在项目中，我们或多或少都会经历一些长列表渲染的难题，本篇文章就为大家详细的解析这类场景的解决方案。内容相对易上手，并不涉及复杂的逻辑，效果立竿见影。还等什么呢',
                comments: 10,
                likes: 10,
                looks: 10,
                writer: 'lemon',
                time: '2小时前',
                articlePicture: 'https://img01.yzcdn.cn/vant/cat.jpeg',
            },
            {
                id: '07',
                title: '文章标题07',
                content:
                    '在项目中，我们或多或少都会经历一些长列表渲染的难题，本篇文章就为大家详细的解析这类场景的解决方案。内容相对易上手，并不涉及复杂的逻辑，效果立竿见影。还等什么呢',
                comments: 10,
                likes: 10,
                looks: 10,
                writer: 'lemon',
                time: '2小时前',
                articlePicture: 'https://img01.yzcdn.cn/vant/cat.jpeg',
            },
            {
                id: '08',
                title: '文章标题08',
                content:
                    '在项目中，我们或多或少都会经历一些长列表渲染的难题，本篇文章就为大家详细的解析这类场景的解决方案。内容相对易上手，并不涉及复杂的逻辑，效果立竿见影。还等什么呢',
                comments: 10,
                likes: 10,
                looks: 10,
                writer: 'lemon',
                time: '2小时前',
                articlePicture: 'https://img01.yzcdn.cn/vant/cat.jpeg',
            },
            {
                id: '09',
                title: '文章标题09',
                content:
                    '在项目中，我们或多或少都会经历一些长列表渲染的难题，本篇文章就为大家详细的解析这类场景的解决方案。内容相对易上手，并不涉及复杂的逻辑，效果立竿见影。还等什么呢',
                comments: 10,
                likes: 10,
                looks: 10,
                writer: 'lemon',
                time: '2小时前',
                articlePicture: 'https://img01.yzcdn.cn/vant/cat.jpeg',
            },
            {
                id: '10',
                title: '文章标题10',
                content:
                    '在项目中，我们或多或少都会经历一些长列表渲染的难题，本篇文章就为大家详细的解析这类场景的解决方案。内容相对易上手，并不涉及复杂的逻辑，效果立竿见影。还等什么呢',
                comments: 10,
                likes: 10,
                looks: 10,
                writer: 'lemon',
                time: '2小时前',
                articlePicture: 'https://img01.yzcdn.cn/vant/cat.jpeg',
            },
        ];
        console.log(this.ctx.params.id); // user/:id是params
        console.log(this.ctx.query.page, this.ctx.query.limit); //users/?name=jack是query
        let copyArray = JSON.parse(JSON.stringify(array));
        if (this.ctx.params.id) {
            console.log(this.ctx.params.id);
            // 请求的是单体item
            ctx.body = {
                code: 'success',
                message: '',
                data: copyArray.find((item) => {
                    return this.ctx.params.id === item.id;
                }),
            };
        } else {
            // 请求的是List
            const data = array.splice(
                (this.ctx.query.page - 1) * this.ctx.query.limit,
                this.ctx.query.limit
            );
            const isEnd =
                !copyArray[this.ctx.query.page * this.ctx.query.limit];

            ctx.body = {
                code: 'success',
                message: '',
                data: { list: data, isEnd },
            };
            // ctx.throw(500, '故意出错');
        }
    }
    async create() {
        const { ctx } = this;
        let user = ctx.request.body;
        console.log(user);
        ctx.body = { code: 0, data: 'success', message: '' };
        this.ctx.cookies.set('userInfo', '张三', {
            maxAge: 1000 * 3600 * 24, // cookie存储一天 设置过期时间后关闭浏览器重新打开cookie还存在
            httpOnly: false, // 仅允许服务获取,不允许js获取
            signed: true, // 对cookie进行签名 防止用户修改cookie
            encrypt: true, // 是否对cookie进行加密 如果cookie加密那么获取的时候要对cookie进行解密
        });
    }
    async update() {
        const { ctx } = this;
        let id = ctx.params.id;
        console.log(id);
        console.log(ctx.request.body);
        ctx.body = { code: 0, data: 'success' };
    }
    async user() {
        const { ctx } = this;
        console.log('user');
        ctx.body = { code: 0, data: 'success' };
        // throw 'error happen';
    }
}

module.exports = HomeController;
