var React = require('react');
var Values = require('values.js');
var rgbHex = require('rgb-hex');

var Tints = React.createClass({
  getInitialState: function(){
    var color1 = '#' + rgbHex(this.props.color1[0],this.props.color1[1],this.props.color1[2]);
    var color2 = '#' + rgbHex(this.props.color2[0],this.props.color2[1],this.props.color2[2]);
    var rgb1 = [this.props.color1[0],this.props.color1[1],this.props.color1[2]];
    var rgb2 = [this.props.color2[0],this.props.color2[1],this.props.color2[2]];
    return {
      rgb1: rgb1,
      rgb2: rgb2,
      color1: color1,
      color2: color2,
      tint1: 0,
      tint2: 0
    };
  },
  handleTint1: function(e){
    var percent = e.target.value;
    var color = new Values('#' + rgbHex(this.state.rgb1[0],this.state.rgb1[1],this.state.rgb1[2]));
    var color1 = color.tint(percent).hexString();
    this.setState({tint1: percent});
    this.setState({color1: color1});
  },
  handleTint2: function(e){
    var percent = e.target.value;
    var color = new Values('#' + rgbHex(this.state.rgb2[0],this.state.rgb2[1],this.state.rgb2[2]));
    var color2 = color.tint(percent).hexString();
    this.setState({tint2: percent});
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
  render: function(){
    return (<div className="col-sm-12">
      <h3>Tints</h3>
      <div className="row">
        <div className="col-sm-12">
          <div className="tint1" style={{height: '100px', width: '100%', backgroundColor: this.state.color1}}>
            <p style={{textAlign: 'center'}}>{this.state.tint1}%</p>
            <p style={{textAlign: 'center'}}>{this.state.color1}</p>
          </div>
          <input id="tint1" className="form-control" type="range" min="0" max="100" value={this.state.tint1} onChange={this.handleTint1}/>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="tint2" style={{height: '100px', width: '100%', backgroundColor: this.state.color2}}>
            <p style={{textAlign: 'center'}}>{this.state.tint2}%</p>
            <p style={{textAlign: 'center'}}>{this.state.color2}</p>
          </div>
          <input id="tint2" className="form-control" type="range" min="0" max="100" value={this.state.tint2} onChange={this.handleTint2}/>
        </div>
      </div>
    </div>);
  }
});

module.exports = Tints;
