/**
 * 同步父窗口和 iframe 的 vue-router 状态
 */

import {iframeReady, isMobile} from './'

window.syncPath = function (dir) {
  const router = window.vueRouter
  const isInIframe = window !== window.top
  const currentDir = router.history.current.fullPath

  if (!isInIframe && !isMobile) {
    const iframe = document.querySelector('iframe')
    if (iframe) {
      iframeReady(iframe, () => {
        iframe.contentWindow.changePath(currentDir)
      })
    }
  } else if (isInIframe) {
    window.top.changePath(currentDir)
  }
}

window.changePath = function (path = '') {
  window.vueRouter.replace(path)
}
