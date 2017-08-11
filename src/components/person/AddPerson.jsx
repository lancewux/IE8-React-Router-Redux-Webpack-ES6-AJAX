import React from 'react'
import { connect } from 'react-redux'
import { addPerson } from 'src/redux/actionCreators'

class AddPerson extends React.Component {
	constructor({props, dispatch}) {
		super(props)
		this.dispatch = dispatch
	}
	render() {
		let input
        return (
        	<div>
				<form
					onSubmit={e => {
						e.preventDefault()
						if (!input.value.trim()) {
							return
						}
						this.dispatch(addPerson(input.value))
						input.value = ''
					}}
				>
					<input ref={node => { input = node }} />
					<button type="submit"> Add Person </button>
				</form>
			</div>
        )
    }
}

// 也可以用Stateless Functions来创建组件
// let AddPerson = ({ dispatch }) => {
// 	let input
// 	return (
// 		<div>
// 			<form
// 				onSubmit={e => {
// 					e.preventDefault()
// 					if (!input.value.trim()) {
// 						return
// 					}
// 					dispatch(addPerson(input.value))
// 					input.value = ''
// 				}}
// 			>
// 				<input ref={node => { input = node }} />
// 				<button type="submit"> Add Person </button>
// 			</form>
// 		</div>
// 	)
// }

//用connect给组件注入redux的dispatch
//https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
AddPerson = connect()(AddPerson)

export default AddPerson