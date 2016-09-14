var React = require('react');
var rgbHex = require('rgb-hex');
var Harmonizer = require('color-harmony').Harmonizer;
var harmonizer = new Harmonizer();
var ColorCanvas = require('./ColorCanvas');
var ComplementaryCanvas = require('./ComplementaryCanvas');

var ComplementaryColos = React.createClass({
  componentDidMount: function(){
    var hex1 = '#' + rgbHex(this.state.rgb1[0],this.state.rgb1[1],this.state.rgb1[2]);
    var hex2 = '#' + rgbHex(this.state.rgb2[0],this.state.rgb2[1],this.state.rgb2[2]);
  },
  getInitialState: function(){
    var rgb1 = this.props.color1;
    var rgb2 = this.props.color2;
    return {
      rgb1: rgb1,
      rgb2: rgb2
    };
  },
  componentWillReceiveProps: function(newProps){
      var rgb1 = newProps.color1;
      var rgb2 = newProps.color2;
      this.setState({
        rgb1: rgb1,
        rgb2: rgb2
      });
    },
  render: function(){
    var hex1 = '#' + rgbHex(this.state.rgb1[0],this.state.rgb1[1],this.state.rgb1[2]);
    var hex2 = '#' + rgbHex(this.state.rgb2[0],this.state.rgb2[1],this.state.rgb2[2]);

    return (<div className="col-sm-8">
        <h2>ComplementaryColors</h2>
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-3">
                <ColorCanvas canvasId="prim1" canvasColor={hex1}/>
              </div>
              <div className="col-sm-3">
                <ComplementaryCanvas canvasId="comp1" canvasColor={hex1}/>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6">
                <ColorCanvas canvasId="prim2" canvasColor={hex2}/>
              </div>
              <div className="col-sm-6">
                <ComplementaryCanvas canvasId="comp2" canvasColor={hex2}/>
              </div>
            </div>
          </div>
        </div>
      </div>);
  }
});

module.exports = ComplementaryColos;
