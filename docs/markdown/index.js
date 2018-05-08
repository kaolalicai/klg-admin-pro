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
  'changelog': wrapper(r => require.ensure([], () => r(require('./changelog.md')), 'changelog')),
  'intro': wrapper(r => require.ensure([], () => r(require('./intro.md')), 'intro')),
  'quickstart': wrapper(r => require.ensure([], () => r(require('./quickstart.md')), 'quickstart')),
  'router-pagination': wrapper(r => require.ensure([], () => r(require('./router-pagination.md')), 'router-pagination')),
  'router-select': wrapper(r => require.ensure([], () => r(require('./router-select.md')), 'router-select'))
}
