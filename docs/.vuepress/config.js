const technicalDirConfig = require('../technical/dir')
module.exports = {

    title: 'lyyh的博客',
    description: '记录生活，记录成长',
    base: '/',
    host: '0.0.0.0',
    //mac下port未生效
    port: 8081,

    themeConfig: {
        //gitc 仓库地址
        repo: 'github/lyyh/blog',
        sidebarDepth:2,
        //导航栏
        nav: [
            {text: '首页', link: '/'},
            {text:'技术博客',link:'/technical/'},
            {text: '课外阅读', link: '/article/'},
            {text: '生活随记', link: '/life/'},
        ],
        sidebar: [
            ['/', '起点'],
            {
                title: '技术博客',
                collapsable: true,
                children: [
                    '/technical/技术整理/四种前端渲染方式'
                ]
            },
            ['/article/', '课外阅读'],
            ['/life/', '生活随记'],
        ],
        //搜索
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: 'Last Updated', // string | boolean
    }
}
