// This file is auto gererated by build/bin/build-entry.js
import Pagination from './pagination';
import Select from './select';

const version = '1.0.0';
const components = [
  Pagination,
  Select
];

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  Pagination,
  Select
};

export default {
  install,
  version
};
