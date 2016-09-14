var React = require('react');
var Values = require('values.js');
var rgbHex = require('rgb-hex');

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
  handleshade1: function(e){
    var percent = e.target.value;
    var color = new Values('#' + rgbHex(this.state.rgb1[0],this.state.rgb1[1],this.state.rgb1[2]));
    var color1 = color.shade(percent).hexString();
    this.setState({shade1: percent});
    this.setState({color1: color1});
  },
  handleshade2: function(e){
    var percent = e.target.value;
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
  render: function(){
    return (<div className="col-sm-12">
      <h3>Shades</h3>
      <div className="row">
        <div className="col-sm-12">
          <div className="shade1" style={{height: '100px', width: '100%', backgroundColor: this.state.color1}}>
            <p style={{textAlign: 'center'}}>{this.state.shade1}%</p>
            <p style={{textAlign: 'center'}}>{this.state.color1}</p>
          </div>
          <input id="shade1" className="form-control" type="range" min="0" max="100" value={this.state.shade1} onChange={this.handleshade1}/>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="shade2" style={{height: '100px', width: '100%', backgroundColor: this.state.color2}}>
            <p style={{textAlign: 'center'}}>{this.state.shade2}%</p>
            <p style={{textAlign: 'center'}}>{this.state.color2}</p>
          </div>
          <input id="shade2" className="form-control" type="range" min="0" max="100" value={this.state.shade2} onChange={this.handleshade2}/>
        </div>
      </div>
    </div>);
  }
});

module.exports = Shades;
