var React = require('react');
var Values = require('values.js');
var rgbHex = require('rgb-hex');

var Shades = React.createClass({
  getInitialState: function(){
    var color1 = '#' + rgbHex(8,106,0);
    var color2 = '#' + rgbHex(0,213,255);
    return {
      rgb1: [8,106,0],
      rgb2: [0,213,255],
      color1: color1,
      color2: color2,
      tint1: 0,
      tint2: 0
    };
  },
  handleTint1: function(e){
    var percent = e.target.value;
    var color = new Values('#' + rgbHex(this.state.rgb1[0],this.state.rgb1[1],this.state.rgb1[2]));
    var color1 = color.shade(percent).hexString();
    this.setState({tint1: percent});
    this.setState({color1: color1});
  },
  handleTint2: function(e){
    var percent = e.target.value;
    var color = new Values('#' + rgbHex(this.state.rgb2[0],this.state.rgb2[1],this.state.rgb2[2]));
    var color2 = color.shade(percent).hexString();
    this.setState({tint2: percent});
    this.setState({color2: color2});
  },
  render: function(){
    return (<div className="col-sm-12">
      <h3>Shades</h3>
      <div className="row">
        <div className="col-sm-12">
          <div className="tint1" style={{height: '100px', width: '100%', backgroundColor: this.state.color1}}>
            <p style={{textAlign: 'center'}}>{this.state.tint1}%</p>
            <p style={{textAlign: 'center'}}>{this.state.color1}</p>
          </div>
          <input id="tint1" type="range" min="0" max="100" value={this.state.tint1} onChange={this.handleTint1}/>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="tint2" style={{height: '100px', width: '100%', backgroundColor: this.state.color2}}>
            <p style={{textAlign: 'center'}}>{this.state.tint2}%</p>
            <p style={{textAlign: 'center'}}>{this.state.color2}</p>
          </div>
          <input id="tint2" type="range" min="0" max="100" value={this.state.tint2} onChange={this.handleTint2}/>
        </div>
      </div>
    </div>);
  }
});

module.exports = Shades;
