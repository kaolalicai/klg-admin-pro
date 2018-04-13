## Features

* 50+ Reusable components
* 90%+ Unit test coverage
* Extensive documentation and demos
* Support [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)
* Support TypeScript
* Support SSR

## Install

```shell
npm i -S klg-admin-pro
```

## Quickstart

#### 1. Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (Recommended)

```bash
# Install babel-plugin-import
npm i babel-plugin-import -D
```

```js
// set babel config in .babelrc or babel-loader
{
  "plugins": [
    ["import", { "libraryName": "klg-admin-pro", "style": true }]
  ]
}
```

Then you can import components from klg-admin-pro, equivalent to import manually below.

```js
import { SelectFilter } from 'klg-admin-pro';
```

#### 2. Manually import

```js
import SelectFilter from 'klg-admin-pro/lib/select-filter';
import 'klg-admin-pro/lib/klg-admin-pro-css/base.css';
import 'klg-admin-pro/lib/klg-admin-pro-css/select-filter.css';
```

#### 3. Import all components

```js
import Vue from 'vue';
import klgAdminPro from 'klg-admin-pro';
import 'klg-admin-pro/lib/klg-admin-pro-css/index.css';

Vue.use(klgAdminPro);
```

## Contribution

Please make sure to read the [Contributing Guide](./.github/CONTRIBUTING.md) before making a pull request.
