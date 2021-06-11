import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home'),
    meta: {layout: 'main'},
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login'),
    meta: {layout: 'main'},
  },
  {
    path: '/password-reset',
    name: 'password reset',
    component: () => import('../views/PasswordReset'),
    meta: {layout: 'main'},
  },
  {
    path: '/select-role',
    name: 'select role',
    component: () => import('../views//SelectRole'),
    meta: {layout: 'main'},
  },
        ///Admin-layout

  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin/AdminPage'),
    meta: {layout: 'admin'},
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('../views/Admin/Registration'),
    meta: {layout: 'admin'},
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import('../views/Admin/Orders'),
    meta: {layout: 'admin'},
  },
  {
    path: '/order-info/:id',
    name: 'order info',
    component: () => import('../views/Admin/OrderInfo'),
    meta: {layout: 'admin'},
  },
  {
    path: '/add-order',
    name: 'add order',
    component: () => import('../views/Admin/AddOrder'),
    meta: {layout: 'admin'},
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Admin/Profile'),
    meta: {layout: 'admin'},
  },
  {
    path: '/user-list',
    name: 'user list',
    component: () => import('../views/Admin/Users'),
    meta: {layout: 'admin'},
  },
  {
    path: '/user-info/:id',
    name: 'user info',
    component: () => import('../views/Admin/UserInfo'),
    meta: {layout: 'admin'},
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('../views/Admin/Category'),
    meta: {layout: 'admin'},
  },



  ////Customer-layout
  {
    path: '/customer',
    name: 'customer',
    component: () => import('../views/Customer/CustomerPage'),
    meta: {layout: 'customer'},
  },
  {
    path: '/customer-orders',
    name: 'customer orders',
    component: () => import('../views/Customer/CustomerOrders'),
    meta: {layout: 'customer'},
  },
  
  {
    path: '/customer-order-info/:id',
    name: 'customer order info',
    component: () => import('../views/Customer/CustomerOrderInfo'),
    meta: {layout: 'customer'},
  },


  ///Executor-layout
  {
    path: '/executor',
    name: 'executor',
    component: () => import('../views/Executor/ExecutorPage'),
    meta: {layout: 'executor'},
  },
  {
    path: '/executor-orders',
    name: 'executor orders',
    component: () => import('../views//Executor/ExecutorOrders'),
    meta: {layout: 'executor'},
  },
  {
    path: '/executor-order-info/:id',
    name: 'executor order info',
    component: () => import('../views/Executor/ExecutorOrderInfo'),
    meta: {layout: 'executor'},
  },
  
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
