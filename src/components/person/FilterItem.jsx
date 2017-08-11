const React = require('react')
import { connect } from 'react-redux'
import { setFilter } from 'src/redux/actionCreators'

// 当前的filter是否被选中
const mapStateToProps = (state, ownProps) => {
	return { selected: ownProps.filter === state.personFilter }
}

// 通过action设置personFilter
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeFilter: () => {
      dispatch(setFilter(ownProps.filter))
    }
  }
}

let FilterItem = ({selected, changeFilter, children}) => {
	const handleClick = (e) => {
		e.preventDefault && e.preventDefault()
		changeFilter()
	}
	if(selected) { //已经被选中，直接展示文本
		return <span>{children}</span>
	} else { // 未选中，展示链接
		return <a href="#" onClick={handleClick.bind(this)}> {children} </a>
	}
}

FilterItem.propTypes = {
  selected: React.PropTypes.bool.isRequired,
  children: React.PropTypes.node.isRequired,
  changeFilter: React.PropTypes.func.isRequired
}

//用connect给组件传递数据，原来组件的入参为props, children；现在为selected, changeFilter, children
//https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
FilterItem = connect(mapStateToProps, mapDispatchToProps)(FilterItem)

export default FilterItem