// This file is auto gererated by build/bin/build-entry.js
import progress from 'nprogress'

function wrapper(component) {
  return function(r) {
    progress.start()
    component(r).then(() => {
      progress.done()
    }).catch(() => {
      progress.done()
    })
  }
}

export default {
  'intro': wrapper(r => require.ensure([], () => r(require('./intro.md')), 'intro')),
  'quickstart': wrapper(r => require.ensure([], () => r(require('./quickstart.md')), 'quickstart')),
  'select-filter': wrapper(r => require.ensure([], () => r(require('./select-filter.md')), 'select-filter'))
}
