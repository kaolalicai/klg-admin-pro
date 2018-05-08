## RouterPagination 分页器

RouterPagination是基于 [Pagination](http://element-cn.eleme.io/#/zh-CN/component/pagination) 分页组件衍生出来的高阶组件，主要是解决一些通用的翻页、同步路由（Vue Router）场景。

### 代码演示

#### 基础用法

组件会根据选中页码来同步页面路由，譬如选中第二页时，路由会更新为`?page=2`

```html
<klg-router-pagination
  :total="20"
  layout="prev, pager, next"
  @change="handleChange"
/>
```

```javascript
export default {
  methods: {
    handleChange({currentPage, pageSize}) {
      // 通常这时可以根据更新后的路由信息去获取后端数据
      this.$message(`当前选中第${currentPage}页，每页${pageSize}条`)
    }
  }
}
```

#### 显示总数和调整条数
只需要设置 `layout` 即可调整显示内容，譬如选中第二页每页显示十条时，路由会更新为 `?page=2&limit=10`

```html
<klg-router-pagination
  :total="20"
  layout="total, sizes, prev, pager, next"
  @change="handleChange"
/>
```

#### 小型分页

```html
<klg-router-pagination
  :total="20"
  :small="true"
  layout="prev, pager, next"
  @change="handleChange"
/>
```

#### 完整功能

```html
<klg-router-pagination
  :total="20"
  @change="handleChange"
/>
```

### Pagination API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| small | 是否使用小型分页样式 | `Boolean` | `false` | - |
| total | 总条目数 | `Number` | - | - |
| current-page | 当前页数 | `Number` | `1` | - |
| page-size | 每页显示条目个数 | `Number` | `10` | - |
| page-sizes | 每页显示个数选择器的选项设置 | `Number[]` | `[10, 20, 30, 40, 50, 60, 100]` | - |
| layout | 组件布局，子组件名用逗号分隔 | `String` | `total, sizes, prev, pager, next, jumper` | - |
| disabled | 是否禁用 | `Boolean` | `false` | - |
| background | 是否为分页按钮添加背景色 | `Boolean` | `false` | - |
| pager-count | 页码按钮的数量，当总页数超过该值时会折叠 | `Number` | `7` | - |
| popper-class | 每页显示个数选择器的下拉框类名 | `String` | - | - |

### Pagination Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| change | 选中值发生变化时触发 | 当前页和每页条数 |
