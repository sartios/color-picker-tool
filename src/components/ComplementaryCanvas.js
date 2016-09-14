var React = require('react');
var Harmonizer = require('color-harmony').Harmonizer;
var harmonizer = new Harmonizer();

var ComplementaryCanvas = React.createClass({
  _renderCanvas : function(){
    var instance = this;
    var canvas = document.getElementById(this.props.canvasId),
    ctx = canvas.getContext('2d');
    var color = harmonizer.harmonize(this.props.canvasColor, 'complementary');
    ctx.fillStyle = color[1];
    ctx.fillRect(0,0,100,100);
  },
  render: function(){
    return (<div>
      <canvas id={this.props.canvasId}  width="100" height="100"></canvas>
      <p>{harmonizer.harmonize(this.props.canvasColor, 'complementary')[1]}</p>
    </div>);
  },
  componentDidMount: function(){
    this._renderCanvas();
  },
  componentWillUpdate: function(nextProps){
    this._renderCanvas();
  }
});

module.exports = ComplementaryCanvas;
