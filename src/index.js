var React =require('react');
var ReactDOM = require('react-dom');
var App = require('./components/Main');
require('bootstrap/dist/css/bootstrap.min.css');

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
