const BaseResearch = () => import(/* webpackChunkName: "baseResearch" */ '@/research/baseResearch');
const DetailResearch = () => import(/* webpackChunkName: "detailResearch" */ '@/research/detailResearch');

export default [{
  path: '/baseResearch',
  name: 'baseResearch',
  meta: {
    title: '企业基础调研'
  },
  component: BaseResearch
}, {
  path: '/detailResearch',
  name: 'detailResearch',
  meta: {
    title: '企业详细调研'
  },
  component: DetailResearch
}]