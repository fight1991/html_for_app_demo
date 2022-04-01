import { createWebHistory, createRouter } from "vue-router";
const InitPage = () => import(/* webpackChunkName: "init" */ '@/pages/initPage');
const routes = [
  {
    path: '/',
    component: InitPage 
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
