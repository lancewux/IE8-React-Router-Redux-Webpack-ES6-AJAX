require('es5-shim');
require('es5-shim/es5-sham');
const React = require('react');
const ReactDOM = require('react-dom');

const { Router, Route, hashHistory, browserHistory, IndexRoute, Link, Redirect } = require('react-router')

const App = (props) => (
  <div>
    <p>app...</p>
    <li><Link to="/home">home</Link></li>
    <li><Link to="/about">About</Link></li>
  </div>
)

const Home = () => (<div><p>home....</p></div>)

const About = () => (<div><p>about....</p></div>)

console.log(process.env.PUBLIC_URL);

//https://github.com/reactjs/react-router-tutorial/tree/master/lessons/10-clean-urls

ReactDOM.render(
  (
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/home" component={Home}/>
    <Route path="/about" component={About}/>
    
  </Router>

),
  document.getElementById('root')
);