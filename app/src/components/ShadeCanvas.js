var React = require('react');

var ShadeCanvas = React.createClass({
  _renderCanvas: function(){
    var canvas = document.getElementById(this.props.options.id),
    ctx = canvas.getContext('2d');

    ctx.fillStyle=this.props.options.color;
    ctx.fillRect(0,0,canvas.width, canvas.height);
  },
  render: function(){
    var options = this.props.options;
    return (<div>
      <canvas id={options.id} width={options.width} height={options.height}></canvas>
    </div>)
  },
  componentDidMount: function(){
    this._renderCanvas();
  },
  componentWillUpdate: function(){
    this._renderCanvas();
  }
});

module.exports = ShadeCanvas;
