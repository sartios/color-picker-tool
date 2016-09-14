var React = require('react');
var rgbHex = require('rgb-hex');
var Harmonizer = require('color-harmony').Harmonizer;
var harmonizer = new Harmonizer();

var ComplementaryColos = React.createClass({
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
    var color1 = harmonizer.harmonize(hex1, 'complementary');
    var color2 = harmonizer.harmonize(hex2, 'complementary');
    var prim1 = color1[0];
    var comp1 = color1[1];
    var prim2 = color2[0];
    var comp2 = color2[1];

    return (<div className="col-sm-8">
        <h2>ComplementaryColors</h2>
        <div className="row">
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6">
                <div style={{height: '100px', width:'100px',backgroundColor:prim1}}></div>
                <p>{prim1}</p>
              </div>
              <div className="col-sm-6">
                <div style={{height: '100px', width:'100px',backgroundColor:comp1}}></div>
                <p>{comp1}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6">
                <div style={{height: '100px', width:'100px',backgroundColor:prim2}}></div>
                <p>{prim2}</p>
              </div>
              <div className="col-sm-6">
                <div style={{height: '100px', width:'100px',backgroundColor:comp2}}></div>
                <p>{comp2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>);
  }
});

module.exports = ComplementaryColos;
