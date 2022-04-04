import { createWebHistory, createRouter } from "vue-router";
const InitPage = () => import(/* webpackChunkName: "init" */ '@/pages/initPage');
const GuidPage = () => import(/* webpackChunkName: "guid" */ '@/pages/guidPage');
const HollandPage = () => import(/* webpackChunkName: "holland" */ '@/pages/hollandPage');
const LocationPage = () => import(/* webpackChunkName: "location" */ '@/pages/locationPage');
const AccountPage = () => import(/* webpackChunkName: "accountPage" */ '@/pages/accountPage');
const MorePage = () => import(/* webpackChunkName: "morePage" */ '@/pages/morePage');
const MaxDetailPage = () => import(/* webpackChunkName: "maxDetail" */ '@/pages/maxDetailPage');
const ContactPage = () => import(/* webpackChunkName: "contactPage" */ '@/pages/contactPage');


const MainPage = () => import(/* webpackChunkName: "mainPage" */ '@/pages/mainPage');
const HomePage = () => import(/* webpackChunkName: "mainHomePage" */ '@/pages/bottomNavPages/home');
const WorkPage = () => import(/* webpackChunkName: "mainWorkPage" */ '@/pages/bottomNavPages/work');
const MessagePage = () => import(/* webpackChunkName: "mainMessagePage" */ '@/pages/bottomNavPages/message');
const MinePage = () => import(/* webpackChunkName: "mainMinePage" */ '@/pages/bottomNavPages/mine');
const MaxviewPage = () => import(/* webpackChunkName: "maxviewPage" */ '@/pages/bottomNavPages/maxview');


const routes = [
  {
    path: '/',
    name: 'index',
    component: InitPage 
  }, {
    path: '/guid',
    name: 'guid',
    component: GuidPage 
  }, {
    path: '/holland',
    name: 'holland',
    component: HollandPage 
  }, {
    path: '/location',
    name: 'location',
    component: LocationPage 
  }, {
    path: '/account',
    name: 'account',
    component: AccountPage 
  }, {
    path: '/more',
    name: 'more',
    component: MorePage 
  }, {
    path: '/maxDetail',
    name: 'maxDetail',
    component: MaxDetailPage 
  }, {
    path: '/contact',
    name: 'contact',
    component: ContactPage 
  }, {
    path: '/main',
    name: 'main',
    component: MainPage,
    children: [{
      name: 'main-home',
      path: '/main/home',
      component: HomePage
    }, {
      name: 'main-work',
      path: '/main/work',
      component: WorkPage
    }, {
      name: 'main-message',
      path: '/main/message',
      component: MessagePage
    }, {
      name: 'main-mine',
      path: '/main/mine',
      component: MinePage
    }, {
      name: 'main-maxview',
      path: '/main/maxview',
      component: MaxviewPage
    }]
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
