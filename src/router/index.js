import Vue from "vue";
import VueRouter from "vue-router";
import Register from "../views/Register.vue";
import Login from '../views/Login.vue';
import Main from '../views/Main.vue'


Vue.use(VueRouter);

// const ifNotAuthenticated = (to, from, next) => {
//   if (!store.getters.isAuthenticated) {
//     next()
//     return
//   }
//   next('/login')
// }

// const ifAuthenticated = (to, from, next) => {
//   if (store.getters.isAuthenticated) {
//     next()
//     return
//   }
//   next('/main')
// }

const routes = [
  {
    path: "/",
    name: "basic",
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
},
];

export const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
//   else next()
// })

export default router;
