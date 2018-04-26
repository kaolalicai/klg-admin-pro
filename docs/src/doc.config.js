/* eslint-disable */
module.exports = {
  header: {
    logo: {
      image: 'https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png',
      title: 'Koala',
      href: '/'
    },
    nav: {
      github: 'https://github.com/kaolalicai/klg-admin-pro'
    }
  },
  nav: [
    {
      name: '开发指南',
      groups: [
        {
          list: [
            {
              path: '/intro',
              title: '介绍',
              noExample: true
            },
            {
              path: '/quickstart',
              title: '快速上手',
              noExample: true
            },
            {
              path: '/changelog',
              title: '更新日志',
              noExample: true
            }
          ]
        }
      ]
    },
    {
      name: '组件',
      showInMobile: true,
      groups: [
        {
          groupName: '业务组件',
          list: [
            {
              path: '/select-filter',
              title: 'SelectFilter - 过滤选择'
            }
          ]
        }
      ]
    }
  ]
}
