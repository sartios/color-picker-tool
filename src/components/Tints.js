var React = require('react');

var Tints = React.createClass({
  getInitialState: function(){
    return {
      tint1: '100',
      tint2: '100',
      r1: 51,
      g1: 81,
      b1: 48,
      r2: 68,
      g2: 51,
      b2: 85,
      color1: 'rgba(51,81,48,1)',
      color2: 'rgba(68,51,85,1)'
    };
  },
  handleChange: function(e){
    var tint1 = e.target.value;
    var color1 = 'rgba('+this.state.r1+','+this.state.g1+','+this.state.b1+','+tint1/100+')';
    this.setState({tint1: tint1});
    this.setState({color1: color1});
  },
  handleTint2: function(e){
    var tint2 = e.target.value;
    var color2 = 'rgba('+this.state.r2+','+this.state.g2+','+this.state.b2+','+tint2/100+')';
    this.setState({tint2: tint2});
    this.setState({color2: color2});
  },
  render: function(){
    return (<div className="col-sm-12">
      <h3>Tints/Shadows</h3>
      <div className="row">
        <div className="col-sm-12">
          <div className="tint1" style={{height: '100px', width: '100%', backgroundColor: this.state.color1}}>
            <p style={{textAlign: 'center'}}>{this.state.tint1}%</p>
          </div>
          <input id="tint1" type="range" min="0" max="100" value={this.state.tint1} onChange={this.handleChange}/>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="tint2" style={{height: '100px', width: '100%', backgroundColor: this.state.color2}}>
            <p style={{textAlign: 'center'}}>{this.state.tint2}%</p>
          </div>
          <input id="tint2" type="range" min="0" max="100" value={this.state.tint2} onChange={this.handleTint2}/>
        </div>
      </div>
    </div>);
  }
});

module.exports = Tints;
