// This file is auto gererated by build/bin/build-entry.js
import RouterPagination from './router-pagination'
import RouterSelect from './router-select'

const version = '1.0.1'
const components = [
  RouterPagination,
  RouterSelect
]

const install = Vue => {
  components.forEach(Component => {
    Vue.component(Component.name, Component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  version,
  RouterPagination,
  RouterSelect
}

export default {
  install,
  version
}
