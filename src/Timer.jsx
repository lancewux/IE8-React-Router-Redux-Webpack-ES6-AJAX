const React = require('react');

const Timer = React.createClass({
	getInitialState: function () {
		return {secondsElapsed: 0}
	},
	tick: function () {
		this.setState({secondsElapsed: this.state.secondsElapsed + 1});
	},
	componentDidMount: function () {
		this.interval = setInterval(this.tick, 1000);
	},
	componentWillUnmount: function () {
		clearInterval(this.interval);
	},
	render: function() {
		return (
			<div>
				<h3>welcome {this.props.name}</h3>
				<h3>Time Elapsed: {this.state.secondsElapsed} seconds.</h3>
			</div>
		);
	}
});