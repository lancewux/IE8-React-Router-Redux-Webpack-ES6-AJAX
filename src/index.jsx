//注意要在IE8标准模式下运行
/**
 * CANNOT use `import` to import `es5-shim`,
 * because `import` will be transformed to `Object.defineProperty` by babel,
 * `Object.defineProperty` doesn't exists in IE8,
 * (but will be polyfilled after `require('es5-shim')` executed).
*/
//  es5-shim.js是给Javascript engine打补丁的, 所以必须最先加载。
//  es5-shim 如实地模拟EcmaScript 5的函数，比如Array.prototype.forEach；而es5-sham是尽可能地模拟EcmaScript 5的函数，比如 Object.create
require('es5-shim')
require('es5-shim/es5-sham')

require('src/static/css/base.css')

/**
 * CANNOT use `import` to import `react` or `react-dom`,
 * because `import` will run `react` before `require('es5-shim')`.
*/
// import React from 'react';
// import ReactDOM from 'react-dom';

const React = require('react')
const ReactDOM = require('react-dom')

const { Provider } = require('react-redux')

// 本文件所有的模块引入都要用require()
const store = require('src/redux/store')
const router = require('src/router')


// <Provider store>使得组件里的connect()函数可以获得Redux store
// connect()函数连接组件和Redux store
ReactDOM.render(
  	<Provider store={store}>
  		{router}
  	</Provider>,
  	document.getElementById('root')
);