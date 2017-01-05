var React = require('react');


var LinearGradientRotation = React.createClass({
  getInitialState: function(){
    return {
      rotate: 0
    }
  },
  _updateRotateDegrees: function(e){
    var rotate = e.target.value;
    this.setState({
      rotate: rotate
    });
    this.props.updateRotateCoords(this._calcRotateCoords());
  },
  _calcRotateCoords: function(){
    var rotateDegrees = this.state.rotate,
    x1,y1,x2,y2, width = this.props.canvasWidth, height = this.props.canvasHeight;

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
    return [x1, y1, x2, y2, rotateDegrees];
  },
  render: function(){
    return (
      <label> Rotate
        <input type="range" min="0" max="359" value={this.state.rotate} className="form-control" onChange={this._updateRotateDegrees}/>
      </label>
    )
  }
});

module.exports = LinearGradientRotation;
