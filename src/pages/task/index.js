const Task = () => import(/* webpackChunkName: "task" */ '@/pages/task/task')
export default {
  path: "/task",
  name: "task",
  meta: {
    title: '首页'
  },
  component: Task
}