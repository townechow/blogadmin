const routers = [
  {
    path: '/admin/login',
    meta: {
      title: "登录",
      noAuth: true
    },
    component: (resolve) => require(['../views/login.vue'], resolve),
  },
  {
    path: '/admin',
    component(resolve) {
      require(['../views/layout.vue'], resolve);
    },
    children: [
      {
        //todo: 首页
        path: '/admin',
        name: 'index',
        meta: {module: "/", title: '首页'},
        component(resolve) {
          require(['../views/index.vue'], resolve);
        }
      },

      //todo: 管理员
      {
        path: 'admin',
        name: 'admin',
        meta: {module: "/admin", group: "set", title: '管理员 - 列表'},
        component: (resolve) => require(['../views/admin/index.vue'], resolve),
      },
      //todo: 分类管理
      {
        path: '/admin/category',
        name: 'category',
        meta: {module: "/category", group: "category", title: '分类 - 列表'},
        component: (resolve) => require(['../views/category/list.vue'], resolve),
      },
      {
        path: '/admin/category/create',
        name: 'category/create',
        meta: {module: "/category/create", group: "category", title: '分类 - 创建'},
        component: (resolve) => require(['../views/category/create.vue'], resolve),
      },
      {
        path: '/admin/category/update/:id',
        name: 'category/update',
        meta: {edit: true, module: "/category", group: "category", title: '分类 - 更新'},
        component: (resolve) => require(['../views/category/update.vue'], resolve),
      },
      //todo: 广告管理
      {
        path: '/admin/advertise',
        name: 'advertise',
        meta: {module: "/advertise", group: "advertise", title: '广告 - 列表'},
        component: (resolve) => require(['../views/advertise/list.vue'], resolve),
      },
      {
        path: '/admin/advertise/create',
        name: 'advertise/create',
        meta: {module: "/advertise/create", group: "advertise", title: '广告 - 创建'},
        component: (resolve) => require(['../views/advertise/create.vue'], resolve),
      },
      {
        path: '/admin/advertise/update/:id',
        name: 'advertise/update',
        meta: {edit: true, module: "/advertise", group: "advertise", title: '广告 - 更新'},
        component: (resolve) => require(['../views/advertise/update.vue'], resolve),
      },
      //todo: 文章管理
      {
        path: '/admin/article',
        name: 'article',
        meta: {module: "/article", group: "article", title: '文章 - 列表'},
        component: (resolve) => require(['../views/article/list.vue'], resolve),
      },
      {
        path: '/admin/article/create',
        name: 'article/create',
        meta: {module: "/article/create", group: "article", title: '文章 - 创建'},
        component: (resolve) => require(['../views/article/create.vue'], resolve),
      },
      {
        path: '/admin/article/update/:id',
        name: 'article/update',
        meta: {edit: true, module: "/article", group: "article", title: '文章 - 更新'},
        component: (resolve) => require(['../views/article/update.vue'], resolve),
      },
      //todo: 评论管理
      {
        path: '/admin/comments',
        name: 'comments',
        meta: {module: "/comments", group: "comments", title: '评论 - 列表'},
        component: (resolve) => require(['../views/comments/list.vue'], resolve),
      },
      //todo: 回复评论管理
      {
        path: '/admin/reply/:comment_id',
        name: 'reply',
        meta: {module: "/comments", group: "comments", title: '回复评论 - 列表'},
        component: (resolve) => require(['../views/reply/list.vue'], resolve),
      },
      {
        //todo: 404
        path: '/403',
        name: '403',
        meta: {module: "/", title: '403 - 权限不足'},
        component(resolve) {
          require(['../views/403.vue'], resolve);
        }
      },
      {
        //todo: 404
        path: '*',
        name: '404',
        meta: {module: "/", title: '404 - 页面不存在'},
        component(resolve) {
          require(['../views/404.vue'], resolve);
        }
      }
    ]
  }
];

export default routers;
