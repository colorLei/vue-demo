import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const proxylist = () => import('@/view/proxy-list')
const proxydetail = () => import('@/view/proxy-detail')


export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'proxylist'
    },
    {
      path: '/proxylist',
      name: 'proxylist',
      component: proxylist,
    },
    {
      path: '/proxydetail',
      name: 'proxydetail',
      component: proxydetail,
    },
  ],
});
