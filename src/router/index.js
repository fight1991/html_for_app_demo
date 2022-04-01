import { createWebHistory, createRouter } from "vue-router";
const InitPage = () => import(/* webpackChunkName: "init" */ '@/pages/initPage');
const GuidPage = () => import(/* webpackChunkName: "guid" */ '@/pages/guidPage');

const routes = [
  {
    path: '/',
    name: 'index',
    component: InitPage 
  },
  {
    path: '/guid',
    name: 'guid',
    component: GuidPage 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  next();
})

export default router;
