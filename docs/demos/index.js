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
  'select-filter': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/select-filter'), 'select-filter')), 'select-filter'))
}
