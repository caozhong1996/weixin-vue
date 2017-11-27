// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueRouter1 from './router'
import VueRouter from 'vue-router'
import dialogue from './components/dialogue/dialogue'
import singlechat from '@/components/singlechat/singlechat'
import groupchat from '@/components/groupchat/groupchat'
import addresslist from './components/addresslist/addresslist'
import discover from './components/discover/discover'
import me from './components/me/me'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.config.productionTip = false
Vue.http.options.emulateJSON = true // 跨域

Vue.use(VueRouter)
let app = Vue.extend(app)

const routes = [
  // 在路由中传递meta参数判断是否显示根组件
  { path: '/', component: dialogue , meta: { showframe: true}, name: '/' },
  { path: '/dialogue', component: dialogue , meta: { showframe: true}, name: 'dialogue'},
  { path: '/singlechat', component: singlechat , meta: { showframe: false }, name: 'singlechat'},
  { path: '/groupchat', component: groupchat , meta: { showframe: false }, name: 'groupchat'},
  { path: '/addresslist', component: addresslist , meta: { showframe: true}, name: 'addresslist'},
  { path: '/discover', component: discover , meta: { showframe: true}, name: 'discover'},
  { path: '/me', component: me , meta: { showframe: true}, name: 'me'}
]

const router = new VueRouter({
  routes, // （缩写）相当于 routes: routes
  linkActiveClass: 'active'
})

/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')

