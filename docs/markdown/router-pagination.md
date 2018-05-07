## RouterPagination 分页器

RouterPagination是基于 [Pagination](http://element-cn.eleme.io/#/zh-CN/component/pagination) 分页组件衍生出来的高阶组件，主要是解决一些通用的翻页、同步路由（Vue Router）场景。

### 代码演示

#### 基础单选

组件会根据选中项来同步页面路由，譬如选中进行中选项时，路由会更新为`?status=pending`

```html
<klg-select-filter
  filter-key="status"
  placeholder="按订单状态筛选"
  :options="ORDER_STATUS_OPTIONS"
  @change="handleChange"
/>
```

```javascript
export default {
  data() {
    return {
      ORDER_STATUS_OPTIONS: [
        {label: '进行中', value: 'pending'},
        {label: '完成', value: 'done'},
        {label: '失败', value: 'fail'}
      ]
    }
  },
  methods: {
    handleChange(value) {
      // 通常这时可以根据更新后的路由信息去获取后端数据
      this.$message(`当前选中：${value}`)
    }
  }
}
```

#### 基础多选
只需要设置 `multiple` 即可开启多选模式，此模式下，路由会更新为 `?role=INVESTOR&role=BORROWSER`

```html
<klg-select-filter
  filter-key="role"
  placeholder="按用户角色筛选"
  :options="USER_ROLES_OPTIONS"
  :multiple="true"
/>
```

```javascript
export default {
  data() {
    return {
      USER_ROLES_OPTIONS: [
        {label: '投资人', value: 'INVESTOR'},
        {label: '借款人', value: 'BORROWSER'},
        {label: '合作机构', value: 'COLLABORATOR'}
      ]
    }
  }
}
```

### Pagination API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| defaultValue | 默认值 | `String` | - | - |
| filterKey | 需要更新的路由查询键名 | `String` | - | - |
| size | 选择框尺寸 | `String` | `medium` | `medium/small/mini` |
| placeholder | 占位符 | `String` | `请选择` | - |
| multiple | 是否多选 | `Boolean` | `false` | - |
| clearable | 单选时是否可以清空选项 | `Boolean` | `true` | - |
| filterable | 是否可搜索 | `Boolean` | `false` | - |
| loading | 是否正在从远程获取数据 | `Boolean` | `false` | - |
| options | 选项键值数据[{label:'x',value:'x'}] | `Array` | - | - |
| popperClass | Select 下拉框的类名 | `String` | - | - |

### Pagination Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| change | 选中值发生变化时触发 | 目前的选中值 |
