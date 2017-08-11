// action是一个json对象，记录了用于改变state的相关信息。比如 {type: ADD_TODO; text: 'Build my first Redux app'}
// action creator，是用来生成action的函数，主要是为了给action传递参数。比如 const add = (text) => ({type: ADD_TODO; text: text})
// bound action creator，生成的action自带dispatch，这样就不用手动调用dispatch来触发action。比如 (text) => dispatch(add(text))
//下面的函数是action creator

let nextPersonId = 0

export const addPerson = name => ({
	type: 'ADD',
	name: name,
	id: nextPersonId++
})

export const setFilter = filter => {
  return {
    type: 'SET_FILTER',
    filter: filter
  }
}

export const togglePerson = id => {
  return {
    type: 'TOGGLE',
    id: id
  }
}
