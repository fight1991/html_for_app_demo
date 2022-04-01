const Login = () => import(/* webpackChunkName: "login" */ '@/login/login');
const Home = () => import(/* webpackChunkName: "home" */ '@/home/home');
const Research = () => import(/* webpackChunkName: "research" */ '@/research/research');
const DegreePage = () => import(/* webpackChunkName: "degreePage" */ '@/research/degreePage');
const FlowPage = () => import(/* webpackChunkName: "flowPage" */ '@/research/flowPage');


import taskRoutes from '@/pages/task/index';
import researchRoutes from '@/research/index';

export default [
  { // 首页
    redirect: '/login',
    component: Home,
    children: [
      taskRoutes
    ]
  }, { // 企业调研
    component: Research,
    children: [
      ...researchRoutes
    ]
  }, { // 学历信息录入
    path: '/degreePage',
    name: 'degreePage',
    meta: {
      title: '学历信息录入'
    },
    component: DegreePage
  }, { // 流程信息录入
    path: '/flowPage',
    name: 'flowPage',
    meta: {
      title: '流程信息录入'
    },
    component: FlowPage
  }, { // 登录
  path: "/login",
  name: "login",
  component: Login
}];
