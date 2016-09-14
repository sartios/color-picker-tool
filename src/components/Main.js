require('normalize.css/normalize.css');
require('styles/App.css');
var React = require('react');
var ColorPicker = require('./ColorPicker');
var ComplementaryColors = require('./ComplementaryColors');
var Gradient = require('./Gradient');
var Tints = require('./Tints');
var Shades = require('./Shades');

var AppComponent = React.createClass({
  render: function(){
    return (<div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <ColorPicker />
          <ComplementaryColors color1={[8,106,0]} color2={[0,213,255]}/>
          <Gradient color1={[8,106,0]} color2={[0,213,255]}/>
          <Tints color1={[8,106,0]} color2={[0,213,255]}/>
          <Shades color1={[8,106,0]} color2={[0,213,255]}/>
        </div>
      </div>
    </div>);
  }
});

module.exports = AppComponent;
