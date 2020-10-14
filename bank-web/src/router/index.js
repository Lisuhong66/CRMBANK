import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'
// import Login from '../pages/home/login/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      requireAuth: true,            // 添加该字段，表示进入这个路由是需要登录的
    },
    component: App
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/home/login/Login')
  },
  {
    path: '/logout',
    name: 'Logout',
    meta: {
      requireAuth: true,            // 添加该字段，表示进入这个路由是需要登录的
    },
    component: () => import('../pages/home/logout/Logout')
  },
  {
    path: '/404',
    component: () => import('../pages/common/Notfind')
  },
  {
    path: "*", // 此处需特别注意置于最底部
    redirect: "/404"
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) {
//     if (localStorage.getItem('isLogin')) {
//       if (to.path === '/login') {
//         next('/');
//       } else {
//         next();
//       }
//     } else {
//       console.log('没有');
//       next('/login');
//     }
//   } else {
//     next();
//   }
// });


export default router
