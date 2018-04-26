## Field 输入框

`input`或`textarea`的输入框。

### 使用指南
``` javascript
import { Field } from 'vant';

Vue.use(Field);
```

### 代码演示

#### 基础用法
通过 v-model 绑定输入框的值

```html
<van-cell-group>
  <van-field v-model="value" placeholder="请输入用户名" />
</van-cell-group>
```

#### 自定义类型
根据`type`属性定义不同类型的输入框

```html
<van-cell-group>
  <van-field
    v-model="username"
    label="用户名"
    icon="clear"
    placeholder="请输入用户名"
    required
    @click-icon="username = ''"
  />

  <van-field
    v-model="password"
    type="password"
    label="密码"
    placeholder="请输入密码"
    required
  />
</van-cell-group>
```

#### 禁用输入框

```html
<van-cell-group>
  <van-field
    value="输入框已禁用"
    label="用户名"
    disabled
  />
</van-cell-group>
```

#### 错误提示
通过`error`或者`error-message`属性增加对应的错误提示

```html
<van-cell-group>
  <van-field
    v-model="username"
    label="用户名"
    placeholder="请输入用户名"
    error
  />
  <van-field
    v-model="phone"
    label="手机号"
    placeholder="请输入手机号"
    error-message="手机号格式错误"
  />
</van-cell-group>
```

#### 高度自适应
对于 textarea，可以通过`autosize`属性设置高度自适应

```html
<van-cell-group>
  <van-field
    v-model="message"
    label="留言"
    type="textarea"
    placeholder="请输入留言"
    rows="1"
    autosize
  />
</van-cell-group>
```

#### 插入按钮
通过 button slot 可以在输入框尾部插入按钮

```html
<van-cell-group>
  <van-field
    center
    v-model="sms"
    label="短信验证码"
    placeholder="请输入短信验证码"
    icon="clear"
    @click-icon="sms = ''"
  >
    <van-button slot="button" size="small" type="primary">发送验证码</van-button>
  </van-field>
</van-cell-group>
```

### API
Filed 默认支持 Input 标签所有的原生属性，比如 `maxlength`、`placeholder`、`readonly`、`autofocus` 等

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| type | 输入框类型 | `String` | `text` | `number` `email` `textarea` `tel` `datetime` `date` `password` `url` |
| value | 输入框的值 | `String` | - | - |
| label | 输入框标签 | `String` | - | - |
| disabled | 是否禁用输入框 | `Boolean` | `false` | - |
| error | 输入框是否有错误 | `Boolean` | `false` | - |
| error-message | 输入框底部错误提示文案 | `String` | `''` | - |
| autosize | 自适应内容高度，只对 textarea 有效，可传入对象，如 { maxHeight: 100, minHeight: 50 }，单位为 px | `Boolean | Object` | `false` | - |
| icon | 输入框尾部图标 | `String` | - |  Icon 组件支持的类型 |

### Event
Filed 默认支持 Input 标签所有的原生事件，如 `focus`、`blur`、`keypress` 等

| 事件 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| click-icon | 点击尾部图标时触发 | - |

### Slot

| 名称 | 说明 |
|-----------|-----------|
| icon | 自定义输入框尾部图标 |
| button | 自定义输入框尾部按钮 |
