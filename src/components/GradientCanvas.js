var React = require('react');
var rgbHex = require('rgb-hex');

var Gradient = React.createClass({
  getInitialState: function(){
    return{
      color1Per: 0,
      color2Per: 1,
      rotate: 0
    }
  },
  _renderCanvas: function(){
    var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
     grd;

     // Create gradient
     var coords = this._handleRotate(300, 300);
     grd = ctx.createLinearGradient(coords[0], coords[1], coords[2], coords[3])

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
  _handleRotate: function(width, height){
    var rotateDegrees = this.state.rotate,
    x1,y1,x2,y2;

    if(rotateDegrees >= 0 && rotateDegrees < 45){
      x1 = 0;
      y1 = height / 2 * (45 - rotateDegrees) / 45;
      x2 = width;
      y2 = height - y1;
    }else if(rotateDegrees >= 45 && rotateDegrees < 135){
      x1 = width * (rotateDegrees - 45) / (135 - 45);
      y1 = 0;
      x2 = width - x1;
      y2 = height;
    }else if(rotateDegrees >= 135 && rotateDegrees < 225){
      x1 = width;
      y1 = height * (rotateDegrees - 135) / (225 - 135);
      x2 = 0;
      y2 = height - y1;
    }else if(rotateDegrees >=225 && rotateDegrees < 315){
      x1 = width * (1 - (rotateDegrees - 225) / (315 - 225));
      y1 = height;
      x2 = width - x1;
      y2 = 0;
    }else if( rotateDegrees >= 315){
      x1 = 0;
      y1 = height - height / 2 * (rotateDegrees - 315) / (360 - 315);
      x2 = width;
      y2 = height - y1;
    }
    return [x1, y1, x2, y2];
  },
  _updateRotateDegrees: function(e){
    var rotate = e.target.value;
    this.setState({
      rotate: rotate
    });
  },
  _updateColor1Percent: function(e){
      var percent = e.target.value / 100;
      this.setState({
        color1Per: percent
      });
  },
  _updateColor2Percent: function(e){
    var percent = e.target.value / 100;
    this.setState({
      color2Per : percent
    });
  },
  render: function(){
      return (<div>
        <canvas id="canvas" width="300" height="300"></canvas>
        <label> Color 1
          <input type="range" min="0" max="100" value={this.state.color1Per * 100} className="form-control" onChange={this._updateColor1Percent}/>
        </label>
        <label> Color 2
          <input type="range" min="0" max="100" value={this.state.color2Per * 100} className="form-control" onChange={this._updateColor2Percent}/>
        </label>
        <label> Rotate
          <input type="range" min="0" max="359" value={this.state.rotate} className="form-control" onChange={this._updateRotateDegrees}/>
        </label>
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
