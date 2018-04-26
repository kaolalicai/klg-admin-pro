import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './DocsApp'
import routes from './router'
import VantDoc from 'vant-doc'
import {isMobile} from './utils'
import './components/nprogress.css'

Vue.use(VueRouter).use(VantDoc)

const router = new VueRouter({
  mode: 'hash',
  routes: routes()
})

router.beforeEach((route, redirect, next) => {
  if (isMobile) {
    location.replace('/examples' + location.hash)
  }
  document.title = route.meta.title || document.title
  next()
})

router.afterEach(() => {
  window.scrollTo(0, 0)
  Vue.nextTick(() => window.syncPath())
})

window.vueRouter = router

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App),
  router
})
