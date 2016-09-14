var React = require('react');
var ColorPicker = require('rc-color-picker');
require('rc-color-picker/assets/index.css');
require('./color-picker.css');

var MyColorPicker = React.createClass({
  getInitialState: function(){
    return {
      color1: '#3366cc',
      color2: '#cc9933',
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
  updateColorPicker1: function(e){
    var color = e.target.value;
    this.setState({
      color1: color
    });
  },
  updateColorPicker2: function(e){
    var color = e.target.value;
    this.setState({
      color2: color
    });
  },
  render: function(){
    return (<div className="col-sm-4 color-picker">
        <h2>ColorPicker</h2>
        <div className="form-group col-sm-12">
          <label for="color1">Color 1
            <input id="color1" className="form-control" value={this.state.color1} onChange={this.updateColorPicker1} />
            </label>
          <ColorPicker onChange={this.handlerColor1} color={this.state.color1}/>
        </div>

        <div className="form-group col-sm-12">
          <label for="color2">Color 2
            <input id="color2" type="text" className="form-control" value={this.state.color2} onChange={this.updateColorPicker1}/>
          </label>
          <ColorPicker onChange={this.handlerColor2} color={this.state.color2}/>
        </div>

      </div>);
  }
});

module.exports = MyColorPicker;
