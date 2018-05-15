/* eslint-disable */
module.exports = {
  header: {
    logo: {
      image: 'https://dn-kaolalicai.qbox.me/AI_Logo_800.png',
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
              path: '/router-select',
              title: 'RouterSelect - 选择器'
            },
            {
              path: '/router-pagination',
              title: 'RouterPagination - 分页器'
            }
          ]
        }
      ]
    }
  ]
}
