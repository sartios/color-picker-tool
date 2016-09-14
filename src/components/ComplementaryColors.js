var React = require('react');
var compColors = require('complementary-colors');
var rgbHex = require('rgb-hex');

var ComplementaryColos = React.createClass({
  getInitialState: function(){
    var rgb1 = [this.props.color1[0],this.props.color1[1],this.props.color1[2]];
    var rgb2 = [this.props.color2[0],this.props.color2[1],this.props.color2[2]];
    return {
      rgb1: rgb1,
      rgb2: rgb2
    };
  },
  render: function(){
    var hex1 = '#' + rgbHex(this.state.rgb1[0],this.state.rgb1[1],this.state.rgb1[2]);
    var hex2 = '#' + rgbHex(this.state.rgb2[0],this.state.rgb2[1],this.state.rgb2[2]);
    var color1 = new compColors(hex1);
    var color2 = new compColors(hex2);
    var complementary1 = color1.complementary();
    var complementary2 = color2.complementary();
    var prim1 = complementary1[0];
    var comp1 = complementary1[1];
    var prim2 = complementary2[0];
    var comp2 = complementary2[1];

    return (<div className="col-sm-8">
        <h2>ComplementaryColors</h2>
        <div className="row">
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6">
                <div style={{height: '100px', width:'100px',backgroundColor:'rgb('+prim1.r+','+prim1.g+','+prim1.b+')'}}></div>
                <p>#{rgbHex(prim1.r,prim1.g,prim1.b)}</p>
              </div>
              <div className="col-sm-6">
                <div style={{height: '100px', width:'100px',backgroundColor:'rgb('+comp1.r+','+comp1.g+','+comp1.b+')'}}></div>
                <p>#{rgbHex(comp1.r,comp1.g,comp1.b)}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6">
                <div style={{height: '100px', width:'100px',backgroundColor:'rgb('+prim2.r+','+prim2.g+','+prim2.b+')'}}></div>
                <p>#{rgbHex(prim2.r,prim2.g,prim2.b)}</p>
              </div>
              <div className="col-sm-6">
                <div style={{height: '100px', width:'100px',backgroundColor:'rgb('+comp2.r+','+comp2.g+','+comp2.b+')'}}></div>
                <p>#{rgbHex(comp2.r,comp2.g,comp2.b)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>);
  }
});

module.exports = ComplementaryColos;
