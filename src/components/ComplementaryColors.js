var React = require('react');
var rgbHex = require('rgb-hex');
var ColorCanvas = require('./ColorCanvas');
var ComplementaryCanvas = require('./ComplementaryCanvas');

var ComplementaryColos = React.createClass({
  getInitialState: function(){
    var rgb1 = this.props.color1;
    var rgb2 = this.props.color2;
    var hex1 = '#' + rgbHex(rgb1[0],rgb1[1],rgb1[2]);
    var hex2 = '#' + rgbHex(rgb2[0],rgb2[1],rgb2[2]);
    return {
      hex1: hex1,
      hex2: hex2
    };
  },
  componentWillReceiveProps: function(newProps){
      var rgb1 = newProps.color1;
      var rgb2 = newProps.color2;
      var hex1 = '#' + rgbHex(rgb1[0],rgb1[1],rgb1[2]);
      var hex2 = '#' + rgbHex(rgb2[0],rgb2[1],rgb2[2]);
      this.setState({
        hex1: hex1,
        hex2: hex2
      });
    },
  render: function(){
    return (<div className="col-sm-8">
        <h2>ComplementaryColors</h2>
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-2">
              <ColorCanvas canvasId="prim1" canvasColor={this.state.hex1}/>
            </div>
            <div className="col-sm-2">
              <ComplementaryCanvas canvasId="comp1" canvasColor={this.state.hex1}/>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="col-sm-2">
              <ColorCanvas canvasId="prim2" canvasColor={this.state.hex2}/>
            </div>
            <div className="col-sm-2">
              <ComplementaryCanvas canvasId="comp2" canvasColor={this.state.hex2}/>
            </div>
          </div>
        </div>
      </div>);
  }
});

module.exports = ComplementaryColos;
