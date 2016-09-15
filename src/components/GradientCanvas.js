var React = require('react');
var rgbHex = require('rgb-hex');
var LinearGradientRotation = require('./LinearGradientRotation');
var LinearGradientColorPercent = require('./LinearGradientColorPercent');

var Gradient = React.createClass({
  getInitialState: function(){
    return{
      color1Per: 0,
      color2Per: 1,
      coords: [0, 150, 300, 150]
    }
  },
  _renderCanvas: function(){
    var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
     grd;

     // Create gradient
     grd = ctx.createLinearGradient(this.state.coords[0],
       this.state.coords[1],
       this.state.coords[2],
       this.state.coords[3]);

     // Add colors
     var rgb1 = this.props.color1;
     var rgb2 = this.props.color2;
     var hex1 = '#' + rgbHex(rgb1[0],rgb1[1],rgb1[2]);
     var hex2 = '#' + rgbHex(rgb2[0],rgb2[1],rgb2[2]);
     grd.addColorStop(this.state.color1Per, hex1);
     grd.addColorStop(this.state.color2Per, hex2);


     ctx.fillStyle = grd;
     ctx.fillRect(0, 0, 300.000, 300.000);
  },
  _updateRotateCoords: function(coords){
    this.setState({
      coords: coords
    });
  },
  _updateColor1Percent: function(percent){
      this.setState({
        color1Per: percent
      });
  },
  _updateColor2Percent: function(percent){
    this.setState({
      color2Per : percent
    });
  },
  render: function(){
      return (
        <div className="row">
        <div className="col-sm-12">
        <div className="col-sm-3">
          <div className="col-sm-12">
              <LinearGradientColorPercent initPercent="0" propLabel="color 1" updateColor={this._updateColor1Percent}/>
          </div>
          <div className="col-sm-12">
              <LinearGradientColorPercent initPercent="1" propLabel="color 2" updateColor={this._updateColor2Percent}/>
          </div>
          <div className="col-sm-12">
              <LinearGradientRotation updateRotateCoords={this._updateRotateCoords} canvasWidth="300" canvasHeight="300"/>
          </div>
        </div>
        <div className="col-sm-9">
          <div className="col-sm-12 col-sm-offset-1">
            <canvas id="canvas" width="300" height="300"></canvas>
          </div>
        </div>
      </div>
    </div>)
  },
  componentDidMount: function(){
    this._renderCanvas();
  },
  componentWillUpdate: function(){
    this._renderCanvas();
  }
});

module.exports = Gradient;
