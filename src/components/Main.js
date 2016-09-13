require('normalize.css/normalize.css');
require('styles/App.css');
var React = require('react');

var AppComponent = React.createClass({
  render: function(){
    return (<div className="index">
      <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
    </div>);
  }
});

module.exports = AppComponent;
