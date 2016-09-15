var React = require('react');
var Values = require('values.js');
var rgbHex = require('rgb-hex');
var ShadeCanvas = require('./ShadeCanvas');
var Range = require('./Range');

var Shades = React.createClass({
  getInitialState: function(){
    var rgb1 = this.props.color1;
    var rgb2 = this.props.color2;
    var color1 = '#' + rgbHex(rgb1[0],rgb1[1],rgb1[2]);
    var color2 = '#' + rgbHex(rgb2[0],rgb2[1],rgb2[2]);

    return {
      color1: color1,
      color2: color2,
      shade1: 0,
      shade2: 0
    };
  },
  handleshade1: function(percent){
    this.setState({shade1: percent});
  },
  handleshade2: function(percent){
    this.setState({shade2: percent});
  },
  componentWillReceiveProps: function(newProps){
    var color1 = '#' + rgbHex(newProps.color1[0],newProps.color1[1],newProps.color1[2]);
    var color2 = '#' + rgbHex(newProps.color2[0],newProps.color2[1],newProps.color2[2]);
    this.setState({
      color1: color1,
      color2: color2
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
  _getRangeOptions: function(id, min, max, defaultValue, label){
    var options = {
      id: id,
      min: min,
      max: max,
      default: defaultValue,
      label: label
    };
    return options;
  },
  _getShadeColor(color, percent){
    var value = new Values(color);
    return value.shade(percent).hexString();
  },
  render: function(){
    var color1 = this._getShadeColor(this.state.color1, this.state.shade1);
    var color2 = this._getShadeColor(this.state.color2, this.state.shade2);
    return (<div className="col-sm-12">
  <div className="row">
        <div className="col-sm-12">
        <div className="col-sm-3">
          <div className="col-sm-12">
              <Range options={this._getRangeOptions('shade1', 0, 100,0,'Shade 1')} updateValue={this.handleshade1}/>
          </div>
        </div>
        <div className="col-sm-9">
          <div className="col-sm-12 col-sm-offset-1">
            <ShadeCanvas options={this._getShadeCanvasOptions('shadeCanvas1', 300, 100, color1)}/>
          </div>
          <div className="col-sm-6">
            <p style={{textAlign: 'center'}}>{this.state.shade1}%</p>
            <p style={{textAlign: 'center'}}>{color1}</p>
          </div>
        </div>
      </div>
    </div>
      <div className="row">
        <div className="col-sm-12">
        <div className="col-sm-3">
          <div className="col-sm-12">
              <Range options={this._getRangeOptions('shade1', 0, 100,0,'Shade 2')} updateValue={this.handleshade2}/>
          </div>
        </div>
        <div className="col-sm-9">
          <div className="col-sm-12 col-sm-offset-1">
            <ShadeCanvas options={this._getShadeCanvasOptions('shadeCanvas2', 300, 100, color2)}/>
          </div>
          <div className="col-sm-6">
            <p style={{textAlign: 'center'}}>{this.state.shade2}%</p>
            <p style={{textAlign: 'center'}}>{color2}</p>
          </div>
        </div>
      </div>
    </div>
</div>);
  }
});

module.exports = Shades;
