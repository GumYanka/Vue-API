import Vue from "vue";
import VueRouter from "vue-router";
import Register from "../views/Register.vue";
import Login from '../views/Login.vue';
import Main from '../views/Main.vue'
import store from '../store'

Vue.use(VueRouter);

// const ifNotAuthenticated = (to, from, next) => {
//   if (!store.getters.isAuthenticated) {
//     next()
//     return
//   }
//   next('/main')
// }

// const ifAuthenticated = (to, from, next) => {
//   if (store.getters.isAuthenticated) {
//     next()
//     return
//   }
//   next('/login')
// }

const routes = [
  {
    path: "/",
    name: "basic",
    // beforeEnter: ifAuthenticated,
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
    // beforeEnter: ifAuthenticated,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    // beforeEnter: ifAuthenticated,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    // beforeEnter: ifNotAuthenticated,
},
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
//   else next()
// })

export default router;
