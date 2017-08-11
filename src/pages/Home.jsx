// 主要展示state和props的用法
import React from 'react'
import { Link } from 'react-router'
import 'src/static/css/home.css'

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {secondsElapsed: 0}
		this.tick = this.tick.bind(this)
	}
	tick() {
		this.setState({secondsElapsed: this.state.secondsElapsed + 1})
	}
	// 手动url重定向
	// https://github.com/reactjs/react-router-tutorial/tree/master/lessons/12-navigating
	handleClick(e) {
		e.preventDefault && e.preventDefault()
		this.context.router.push('/comment')
	}
	componentDidMount() {
		this.interval = setInterval(this.tick, 1000)
	}
	componentWillUnmount() {
		clearInterval(this.interval)
	}
    render() {
        return (
            <div className='home-div'>
            	<img src={require('src/static/media/pic300.jpg')} />
                <h3 className="red">welcome {this.props.name}</h3>
                <h3 className="gray">Time Elapsed: {this.state.secondsElapsed} seconds.</h3>
                <li><Link to="/person">go to person</Link></li>
                <li><a onClick={this.handleClick.bind(this)} href="javascript:void(0)">goto comment</a></li>
            </div>
        )
    }
}

// 设置props的默认类型和值
// https://facebook.github.io/react/docs/typechecking-with-proptypes.html
Home.propTypes = {name: React.PropTypes.string}
Home.defaultProps = {name: 'Tidy'}
// 设置contextTypes
// https://github.com/reactjs/react-router-tutorial/tree/master/lessons/12-navigating
Home.contextTypes = {router: React.PropTypes.object}

export default Home