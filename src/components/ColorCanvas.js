var React = require('react');

var ColorCanvas = React.createClass({
  _renderCanvas : function(){
    var canvas = document.getElementById(this.props.canvasId),
    ctx = canvas.getContext('2d');
    ctx.fillStyle = this.props.canvasColor;
    ctx.fillRect(0,0,100,100);
  },
  render: function(){
    return (<div>
      <canvas id={this.props.canvasId} width="100" height="100"></canvas>
      <p>{this.props.canvasColor}</p>
    </div>);
  },
  componentDidMount: function(){
    this._renderCanvas();
  },
  componentWillUpdate: function(){
    this._renderCanvas();
  }
});

module.exports = ColorCanvas;
