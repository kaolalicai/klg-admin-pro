/**
 * Build style entry of all components
 */

const fs = require('fs-extra');
const path = require('path');
const components = require('./get-components')();
const dependencyTree = require('dependency-tree');
const SEP = path.sep;

components.forEach(componentName => {
  const libDir = path.resolve(__dirname, '../../lib');
  const content = analyzeDependencies(componentName, libDir).map(component => `require('../../klg-css/${component}.css');`);
  fs.outputFileSync(path.join(libDir, componentName, './style/index.js'), content.join('\n'));
});

// Analyze component dependencies
function analyzeDependencies(componentName, libDir) {
  const checkList = ['base'];
  const whiteList = ['icon'];
  search(dependencyTree({
    directory: libDir,
    filename: path.resolve(libDir, componentName, 'index.js'),
    filter: path => path.indexOf(`klg${SEP}lib${SEP}`) !== -1
  }), checkList, whiteList);
  return checkList.filter(component => checkComponentHasStyle(component));
}

function search(tree, checkList, whiteList) {
  tree && Object.keys(tree).forEach(key => {
    search(tree[key], checkList, whiteList);
    const component = key.split(`${SEP}klg-admin-pro${SEP}lib${SEP}`)[1].replace(`${SEP}index.js`, '').replace(`mixins${SEP}`, '');
    if (checkList.indexOf(component) === -1 && whiteList.indexOf(component) === -1) {
      checkList.push(component);
    }
  });
}

function checkComponentHasStyle(componentName) {
  return fs.existsSync(path.join(__dirname, '../../lib/klg-css/', `${componentName}.css`));
}
