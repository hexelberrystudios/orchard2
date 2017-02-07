import Vue from 'vue'
import LoginPage from '../components/pages/LoginPage.vue'
import RegisterPage from '../components/pages/RegisterPage.vue'
import HomePage from '../components/pages/HomePage.vue'
import NewPage from '../components/pages/NewPage.vue'
import NewItemPageStep1 from '../components/pages/NewItemPageStep1.vue'
import NewItemPageStep2 from '../components/pages/NewItemPageStep2.vue'
import NewTemplatePage from '../components/pages/NewTemplatePage.vue'
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
    { path: '/new', component: NewPage },
    { path: '/new-item', component: NewItemPageStep1 },
    { path: '/new-item-page-2', component: NewItemPageStep2 },
    { path: '/new-template', component: NewTemplatePage },
    { path: '/style-guide', component: StyleGuide }
  ]
})

export default router
