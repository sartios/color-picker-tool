require('normalize.css/normalize.css');
require('styles/App.css');
var React = require('react');
var ColorPicker = require('./ColorPicker');
var ComplementaryColors = require('./ComplementaryColors');
var Gradient = require('./Gradient');
var Tints = require('./Tints');

var AppComponent = React.createClass({
  render: function(){
    return (<div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <ColorPicker />
          <ComplementaryColors/>
          <Gradient/>
          <Tints />
        </div>
      </div>
    </div>);
  }
});

module.exports = AppComponent;
