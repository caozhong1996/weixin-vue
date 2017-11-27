import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import test from '@/components/test/test'
import addresslist from '@/components/addresslist/addresslist'
import singlechat from '@/components/singlechat/singlechat'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.config.productionTip = false

Vue.use(VueRouter)
let app = Vue.extend(app)

const routes = [
  { path: '/', component: App },
  { path: '/addresslist', component: addresslist },
  { path: '/singlechat', component: singlechat },
  { path: '/seller', component: seller }
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