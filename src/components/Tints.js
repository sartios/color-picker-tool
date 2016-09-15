var React = require('react');
var Values = require('values.js');
var rgbHex = require('rgb-hex');
var ShadeCanvas = require('./ShadeCanvas');
var Range = require('./Range');

var Tints = React.createClass({
  getInitialState: function(){
    var rgb1 = this.props.color1;
    var rgb2 = this.props.color2;
    var color1 = '#' + rgbHex(rgb1[0],rgb1[1],rgb1[2]);
    var color2 = '#' + rgbHex(rgb2[0],rgb2[1],rgb2[2]);

    return {
      color1: color1,
      color2: color2,
      tint1: 0,
      tint2: 0
    };
  },
  handleTint1: function(percent){
    this.setState({tint1: percent});
  },
  handleTint2: function(percent){
    this.setState({tint2: percent});
  },
  componentWillReceiveProps: function(newProps){
    var color1 = '#' + rgbHex(newProps.color1[0],newProps.color1[1],newProps.color1[2]);
    var color2 = '#' + rgbHex(newProps.color2[0],newProps.color2[1],newProps.color2[2]);
    this.setState({
      color1: color1,
      color2: color2
    });
  },
  _getTintCanvasOptions: function(id, width, height, color){
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
  _getTintColor(color, percent){
    var value = new Values(color);
    return value.tint(percent).hexString();
  },
  render: function(){
    var color1 = this._getTintColor(this.state.color1, this.state.tint1);
    var color2 = this._getTintColor(this.state.color2, this.state.tint2);
    return (<div className="col-sm-12">
      <h2>Color Tints</h2>
  <div className="row">
        <div className="col-sm-12">
        <div className="col-sm-3">
          <div className="col-sm-12">
              <Range options={this._getRangeOptions('tint1', 0, 100,0,'Tint 1')} updateValue={this.handleTint1}/>
              <span className="badge" style={{backgroundColor: this.state.color1}}>{this.state.tint1}</span>
          </div>
        </div>
        <div className="col-sm-9">
          <div className="col-sm-12 col-sm-offset-1">
            <ShadeCanvas options={this._getTintCanvasOptions('tintCanvas1', 300, 100, color1)}/>
          </div>
          <div className="col-sm-6">
            <p style={{textAlign: 'center'}}>{this.state.tint1}%</p>
            <p style={{textAlign: 'center'}}>
              <span className="label label-danger">{color1}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
      <div className="row">
        <div className="col-sm-12">
        <div className="col-sm-3">
          <div className="col-sm-12">
              <Range options={this._getRangeOptions('tint2', 0, 100,0,'Tint2')} updateValue={this.handleTint2}/>
              <span className="badge" style={{backgroundColor: this.state.color2}}>{this.state.tint2}</span>
          </div>
        </div>
        <div className="col-sm-9">
          <div className="col-sm-12 col-sm-offset-1">
            <ShadeCanvas options={this._getTintCanvasOptions('tintCanvas2', 300, 100, color2)}/>
          </div>
          <div className="col-sm-6">
            <p style={{textAlign: 'center'}}>{this.state.tint2}%</p>
            <p style={{textAlign: 'center'}}>
              <span className="label label-danger">{color2}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
</div>);
  }
});

module.exports = Tints;
