import { createWebHistory, createRouter } from "vue-router";
const InitPage = () => import(/* webpackChunkName: "init" */ '@/pages/initPage');
const GuidPage = () => import(/* webpackChunkName: "guid" */ '@/pages/guidPage');
const HollandPage = () => import(/* webpackChunkName: "holland" */ '@/pages/hollandPage');
const LocationPage = () => import(/* webpackChunkName: "location" */ '@/pages/locationPage');

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
  },
  {
    path: '/holland',
    name: 'holland',
    component: HollandPage 
  },
  {
    path: '/location',
    name: 'location',
    component: LocationPage 
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
