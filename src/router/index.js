import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const proxylist = () => import('@/view/proxy-list')
const proxydetail = () => import('@/view/proxy-detail')

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'proxylist'
    },
    {
      path: '/proxylist',
      name: 'proxylist',
      component: proxylist,
      meta: {
        title: '代理列表'
      }
    },
    {
      path: '/proxydetail',
      name: 'proxydetail',
      component: proxydetail,
      meta: {
        title: '代理详情'
      }
    },
  ],
});
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router;
