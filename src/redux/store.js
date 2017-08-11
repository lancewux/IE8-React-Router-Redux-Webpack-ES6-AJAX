// 全局只有一个store，它是一个state树，保存了多个state
// store需要用reducer来初始化

import { createStore} from 'redux'
import reducer from './reducers'

const store = createStore(reducer)

export default store
