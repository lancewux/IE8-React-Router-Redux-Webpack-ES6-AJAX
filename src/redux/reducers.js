// action 只记录了用于改变state的信息，并没有改变state
// reducer 用action和上个state为参数，返回新的state：(previousState, action) => newState
// 一个state可以理解为一个全局变量，这里定义了两个state，即persons和personFilter；state的初始化是在reducer里完成的

import { combineReducers } from 'redux'

const persons = (state = [], action) => {
	switch (action.type) {
		case 'ADD': 
			return [...state, {id: action.id, name: action.name, passed: false}]
		case 'TOGGLE':
			return state.map(person => 
				(person.id === action.id) //找到指定的person，并改变其状态
					? Object.assign({}, person, {passed: !person.passed})
					: person
			)
		default:
			return state
	}
}

const personFilter = (state = 'ALL', action) => {
	switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}

export default combineReducers({
  persons,
  personFilter
})