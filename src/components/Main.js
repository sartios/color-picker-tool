require('normalize.css/normalize.css');
require('styles/App.css');
var React = require('react');
var ColorPicker = require('./ColorPicker');
var ComplementaryColors = require('./ComplementaryColors');
var Gradient = require('./GradientCanvas');
var Tints = require('./Tints');
var Shades = require('./Shades');
var hexRgb = require('hex-rgb');

var AppComponent = React.createClass({
  getInitialState: function(){
    var rgb1 = hexRgb('#3366cc');
    var rgb2 = hexRgb('#cc9933');
    return {
      color1: '#3366cc',
      color2: '#cc9933',
      rgb1: rgb1,
      rgb2: rgb2
    }
  },
  updateColor: function(color1, color2){
    this.setState({
      color1: color1, color2: color2
    });
  },
  updateColor1: function(color){
    var rgb = hexRgb((color));
    this.setState({
      color1 : color,
      rgb1: rgb
    });
  },
  updateColor2: function(color){
    var rgb = hexRgb((color));
    this.setState({
      color2 : color,
      rgb2: rgb
    });
  },
  render: function(){
    return (<div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <ColorPicker updateColors={this.updateColor} updateColor1={this.updateColor1} updateColor2={this.updateColor2}/>
          <ComplementaryColors color1={this.state.rgb1} color2={this.state.rgb2}/>
          <Gradient color1={this.state.rgb1} color2={this.state.rgb2}/>
          <Tints color1={this.state.rgb1} color2={this.state.rgb2}/>
          <Shades color1={this.state.rgb1} color2={this.state.rgb2}/>
        </div>
      </div>
    </div>);
  }
});

module.exports = AppComponent;
