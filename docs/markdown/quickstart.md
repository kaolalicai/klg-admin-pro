## 快速上手

### 安装

```shell
npm i klg-admin-pro
```

### 引入组件

#### 方式一. 导入所有组件
配置 babel-plugin-import 插件后将不允许导入所有组件的方式

```js
import Vue from 'vue';
import KlgPro from 'klg-admin-pro';
import 'klg-admin-pro/lib/klg-css/index.css';

Vue.use(KlgPro);
```

```html
// 导入后直接使用
<klg-router-pagination :total="20"/>
```

#### 方式二. 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (推荐)
```bash
# 安装 babel-plugin-import 插件
npm i babel-plugin-import -D
```

```js
// 在 .babelrc 或 babel-loader 中添加插件配置
// 注意：webpack 1 无需设置 libraryDirectory。
{
  "plugins": [
    ["import", {
      "libraryName": "klg-admin-pro",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}
```

接着你可以在代码中直接引入 Vant 组件，插件会自动将代码转化为方式二中的按需引入形式。

```js
import { Select } from 'klg-admin-pro';
```

#### 方式三. 按需引入组件

```js
import Select from 'klg-admin-pro/lib/select';
import 'klg-admin-pro/lib/klg-css/select.css';
```
