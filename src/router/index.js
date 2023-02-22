import { createRouter, createWebHistory } from "vue-router";
import LogIn from "@/views/LogIn.vue";
import MiPrincipal from "@/views/MiPrincipal.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "LogIn",
      component: LogIn,
    },
    {
      path: "/principal/:nombre",
      name: "Principal",
      component: MiPrincipal,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: () => ({ name: "home" }),
    },
  ],
});

export default router;
