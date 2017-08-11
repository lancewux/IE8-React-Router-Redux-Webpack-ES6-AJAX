const React = require('react')
import { connect } from 'react-redux'
import { togglePerson } from 'src/redux/actionCreators'

//这里的state是用过下面的connect()传递进来的，可以理解为在src/redux/reducers里定义的state集合，
const mapStateToProps = (state) => {
	switch(state.personFilter) {
		case 'ALL':
			return {persons: state.persons}
		case 'PASSED':
			return {persons: state.persons.filter(p => p.passed)}
		default:
			return {persons: state.persons}
	}
}

// 这里的dispatch是用过下面的connect()传递进来的
const mapDispatchToProps = (dispatch) => {
  return {
    changeFilter: (id) => {
      dispatch(togglePerson(id))
    }
  }
}

// 生成组件
let PersonList = ({ persons, changeFilter}) => {
	const handleClick = (e, id) => {
		e.preventDefault && e.preventDefault()
		changeFilter(id)
	}
	return <ul>{persons.map(p => (<li key={p.id} onClick={handleClick.bind(this, event, p.id)} style={{ textDecoration: p.passed ? 'line-through' : 'none' }}>{p.name}</li>))}</ul>
}

PersonList.propTypes = {
  persons: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      passed: React.PropTypes.bool.isRequired,
      name: React.PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
}

//用connect给组件映射action和state
//https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
PersonList = connect(mapStateToProps, mapDispatchToProps)(PersonList)

export default PersonList