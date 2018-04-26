import docConfig from './doc.config'
import DemoList from './components/DemoList'
import componentDocs from '../markdown'
import componentDemos from '../demos'
import './utils/iframe-router'

const registerRoute = (isExample) => {
  const route = [{
    path: '*',
    redirect: to => `/`
  }]

  if (isExample) {
    route.push({
      path: '/',
      component: DemoList
    })
  } else {
    route.push({
      path: `/`,
      redirect: `/intro`
    })
  }

  const navs = docConfig.nav || []
  navs.forEach(nav => {
    if (nav.groups) {
      nav.groups.forEach(group => {
        group.list.forEach(page => addRoute(page))
      })
    } else {
      addRoute(nav)
    }
  })

  function addRoute (page) {
    if (isExample && page.noExample) {
      return
    }

    const {path} = page
    if (path) {
      const name = path.replace('/', '')
      let component = isExample ? componentDemos[path.replace('/', '')] : componentDocs[name]

      route.push({
        name,
        component,
        path,
        meta: {
          name: page.title
        }
      })
    }
  }

  return route
}

export default registerRoute
