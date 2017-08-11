
import React from 'react'
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory} from 'react-router'

import Home from 'src/pages/Home'

//异步加载
//https://github.com/ReactTraining/react-router/blob/v2.8.1/docs/guides/DynamicRouting.md
const getPerson = (nextState, callback) => {
	require.ensure([], function (require) {
		callback(null, require('src/pages/Person'))
	})
}
const getComment = (nextState, callback) => {
	require.ensure([], function (require) {
		callback(null, require('src/pages/Comment'))
	})
}

// IE9及IE9以下版本用hashHistory，其他用browserHistory
// 实际开发中应该都用browserHistory，然后配置服务器把相关url重定向到发布的index.html文件，因为不支持browserHistory的会重新发送url
// https://github.com/ReactTraining/react-router/blob/v2.8.1/docs/guides/Histories.md
const isLTIE9 = navigator.appName == "Microsoft Internet Explorer" && /[7, 8, 9]./i.test(navigator.appVersion)
let history = browserHistory
let indexUrl = process.env.PUBLIC_URL //打包路径作为根目录
if(process.env.NODE_ENV === 'development') {//测试环境的根目录为'/'
	indexUrl = '/'
}
if(isLTIE9) {//IE9及以下使用hashHistory
	history = hashHistory
	indexUrl = '/'
}

const router = (
	<Router history={history}>
		<Route path={indexUrl} component={Home}></Route>
        <Route path={'/person'} getComponent={getPerson}></Route>
        <Route path={'/comment'} getComponent={getComment}></Route>
    </Router>
)

export default router
