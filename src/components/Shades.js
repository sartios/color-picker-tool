var React = require('react');
var Values = require('values.js');
var rgbHex = require('rgb-hex');
var ShadeCanvas = require('./ShadeCanvas');
var Range = require('./Range');

var Shades = React.createClass({
  getInitialState: function(){
    var color1 = '#' + rgbHex(this.props.color1[0],this.props.color1[1],this.props.color1[2]);
    var color2 = '#' + rgbHex(this.props.color2[0],this.props.color2[1],this.props.color2[2]);
    var rgb1 = this.props.color1;
    var rgb2 = this.props.color2;
    return {
      rgb1: rgb1,
      rgb2: rgb2,
      color1: color1,
      color2: color2,
      shade1: 0,
      shade2: 0
    };
  },
  handleshade1: function(percent){
    var color = new Values('#' + rgbHex(this.state.rgb1[0],this.state.rgb1[1],this.state.rgb1[2]));
    var color1 = color.shade(percent).hexString();
    this.setState({shade1: percent});
    this.setState({color1: color1});
  },
  handleshade2: function(percent){
    var color = new Values('#' + rgbHex(this.state.rgb2[0],this.state.rgb2[1],this.state.rgb2[2]));
    var color2 = color.shade(percent).hexString();
    this.setState({shade2: percent});
    this.setState({color2: color2});
  },
  componentWillReceiveProps: function(newProps){
    var color1 = '#' + rgbHex(newProps.color1[0],newProps.color1[1],newProps.color1[2]);
    var color2 = '#' + rgbHex(newProps.color2[0],newProps.color2[1],newProps.color2[2]);
    var rgb1 = newProps.color1;
    var rgb2 = newProps.color2;
    this.setState({
      color1: color1,
      color2: color2,
      rgb1: rgb1,
      rgb2: rgb2
    });
  },
  _getShadeCanvasOptions: function(id, width, height, color){
    var options={
      id: id,
      width: width,
      height: height,
      color: color
    }
    return options;
  },
  _getRangeOptions: function(id, min, max, defaultValue){
    var options = {
      id: id,
      min: min,
      max: max,
      default: defaultValue
    };
    return options;
  },
  render: function(){
    return (<div className="col-sm-12">
      <h3>Shades</h3>
      <div className="row">
        <div className="col-sm-12">
          <ShadeCanvas options={this._getShadeCanvasOptions("shadeCanvas1", 300, 100, this.state.color1)}/>
          <div>
            <p style={{textAlign: 'center'}}>{this.state.shade1}%</p>
            <p style={{textAlign: 'center'}}>{this.state.color1}</p>
          </div>
          <Range options={this._getRangeOptions('shade1', 0, 100)} updateValue={this.handleshade1}/>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <ShadeCanvas options={this._getShadeCanvasOptions("shadeCanvas2", 300, 100, this.state.color2)}/>
          <div>
            <p style={{textAlign: 'center'}}>{this.state.shade2}%</p>
            <p style={{textAlign: 'center'}}>{this.state.color2}</p>
          </div>
          <Range options={this._getRangeOptions('shade1', 0, 100)} updateValue={this.handleshade2}/>
        </div>
      </div>
    </div>);
  }
});

module.exports = Shades;
