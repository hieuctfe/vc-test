import Vue from "vue";
import VueRouter from "vue-router";
import Question1 from "../views/Question1.vue";
import Question2 from "../views/Question2.vue";
import Question3 from "../views/Question3.vue";
import WelcomePage from "../views/Welcome.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: WelcomePage,
  },
  {
    path: "/question1",
    name: "question1",
    component: Question1,
  },
  {
    path: "/question2",
    name: "question2",
    component: Question2,
  },
  {
    path: "/question3",
    name: "question3",
    component: Question3,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
