// This file is auto gererated by build/bin/build-entry.js
import Pagination from './pagination'
import SelectFilter from './select-filter'

const version = '1.0.0'
const components = [
  Pagination,
  SelectFilter
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
  Pagination,
  SelectFilter
}

export default {
  install,
  version
}
