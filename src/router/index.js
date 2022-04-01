import { createWebHistory, createRouter } from "vue-router";
import fullRoutes from "./fullRoutes";
const routes = [
  ...fullRoutes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  next();
})

export default router;
