## CellSwipe 滑动单元格

### 使用指南
``` javascript
import { CellSwipe } from 'vant';

Vue.use(CellSwipe);
```

### 代码演示

#### 基础用法

```html
<van-cell-swipe :right-width="65" :left-width="65">
  <span slot="left">选择</span>
  <van-cell-group>
    <van-cell title="单元格" value="内容" />
  </van-cell-group>
  <span slot="right">删除</span>
</van-cell-swipe>
```

#### 异步关闭

```html
<van-cell-swipe :right-width="65" :left-width="65" :on-close="onClose">
  <span slot="left">选择</span>
  <van-cell-group>
    <van-cell title="单元格" value="内容" />
  </van-cell-group>
  <span slot="right">删除</span>
</van-cell-swipe>
```

```js
export default {
  methods: {
    onClose(clickPosition, instance) {
      switch (clickPosition) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          Dialog.confirm({
            message: '确定删除吗？'
          }).then(() => {
            instance.close();
          });
          break;
      }
    }
  }
}
```

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| left-width | 左侧滑动区域宽度 | `Number` | `0` | - |
| right-width | 右侧滑动区域宽度 | `Number` | `0` | - |
| on-close | 关闭时的回调函数 | `Function` | - | - |

### Slot

| 名称 | 说明 |
|-----------|-----------|
| - | 自定义显示内容 |
| left | 左侧滑动内容 |
| right | 右侧滑动内容 |

### onClose 参数
| 参数 | 类型 | 说明 |
|-----------|-----------|-----------|
| clickPosition | `String` | 关闭时的点击位置 (`left` `right` `cell` `outside`) |
| instance | `Object` | CellSwipe 实例，挂载有 close 方法 |
