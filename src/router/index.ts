import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Projects from "../views/Projects.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/task",
    name: "Tasks",
    // route level code-splitting
    // this generates a separate chunk (task.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "task" */ "../views/Tasks.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
