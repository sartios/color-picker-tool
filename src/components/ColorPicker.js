var React = require('react');
var ColorPicker = require('rc-color-picker');
require('rc-color-picker/assets/index.css');

var MyColorPicker = React.createClass({
  getInitialState: function(){
    return {
      color1: '#36c',
      color2: '#36c',
    }
  },
  handlerColor1: function(colors){
    var color1 = colors.color;
    this.setState({
      color1: color1
    });
    this.props.updateColor1(colors.color);
  },
  handlerColor2: function(colors){
    var color2 = colors.color;
    this.setState({
      color2: color2
    });
    this.props.updateColor2(colors.color);
  },
  render: function(){
    return (<div className="col-sm-4">
        <h2>ColorPicker</h2>
        <div className="form-group">
          <label for="color1">Color 1</label>
          <input id="color1" type="text" className="form-control" value={this.state.color1} />
          <ColorPicker onChange={this.handlerColor1} color={this.state.color1}/>
        </div>
        <div className="form-group">
          <label for="color2">Color 2</label>
          <input id="color2" type="text" className="form-control" value={this.state.color2}/>
          <ColorPicker onChange={this.handlerColor2} color={this.state.color2}/>
        </div>
      </div>);
  }
});

module.exports = MyColorPicker;
