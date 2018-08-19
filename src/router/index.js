import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const proxylist = () => import('@/view/proxy-list')
const proxysearch = () => import('@/view/proxy-search')

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
      path: '/proxysearch',
      name: 'proxysearch',
      component: proxysearch,
    },
  ],
});
