// This file is auto gererated by build/bin/build-entry.js
import './common'

import progress from 'nprogress'

function asyncWrapper(component) {
  return function(r) {
    progress.start()
    component(r).then(() => {
      progress.done()
    }).catch(() => {
      progress.done()
    })
  }
}

function componentWrapper(component, name) {
  component = component.default
  component.name = 'demo-' + name
  return component
}

export default {
  'router-pagination': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/router-pagination'), 'router-pagination')), 'router-pagination')),
  'router-select': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/router-select'), 'router-select')), 'router-select'))
}
