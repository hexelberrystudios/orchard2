import Vue from 'vue'
import LoginPage from '../components/pages/LoginPage.vue'
import RegisterPage from '../components/pages/RegisterPage.vue'
import HomePage from '../components/pages/HomePage.vue'
import StyleGuide from '../components/pages/StyleGuide.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/home', component: HomePage },
    { path: '/style-guide', component: StyleGuide }
  ]
})

export default router
