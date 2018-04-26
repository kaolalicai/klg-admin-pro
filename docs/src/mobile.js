import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './WapApp'
import routes from './router'
import KlgPro from 'packages'
import ElementUI from 'element-ui'
import VantDoc from 'vant-doc'
import 'element-ui/lib/theme-chalk/index.css'
import 'packages/klg-css/src/index.css'
import 'vant-doc/src/helper/touch-simulator'
import './components/nprogress.css'

Vue
  .use(ElementUI)
  .use(KlgPro)
  .use(VantDoc)
  .use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: '/examples',
  routes: routes(true)
})

router.afterEach(() => {
  if (router.currentRoute.name) {
    window.scrollTo(0, 0)
  }
  if (!router.currentRoute.redirectedFrom) {
    Vue.nextTick(() => window.syncPath())
  }
})

window.vueRouter = router

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App),
  router
})
