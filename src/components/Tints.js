var React = require('react');

var Tints = React.createClass({
  getInitialState: function(){
    return {
      tint1: '100',
      opacity1: 1,
      opacity2: 1,
      tint2: '100'
    };
  },
  handleChange: function(e){
    var tint1 = e.target.value;
    var opacity1 = tint1/100;
    this.setState({tint1: tint1});
    this.setState({opacity1: opacity1});
  },
  handleTint2: function(e){
    var tint2 = e.target.value;
    var opacity2 = tint2/100;
    this.setState({tint2: tint2});
    this.setState({opacity2: opacity2});
  },
  render: function(){
    var instance = this;
    return (<div className="col-sm-12">
      <h3>Tints</h3>
      <div className="row">
        <div className="col-sm-12">
          <div className="tint1" style={{height: '100px', width: '100%', backgroundColor: '#354', opacity: this.state.opacity1}}>
            <p style={{textAlign: 'center'}}>{this.state.tint1}%</p>
          </div>
          <input id="tint1" type="range" min="0" max="100" value={this.state.tint1} onChange={this.handleChange}/>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="tint2" style={{height: '100px', width: '100%', backgroundColor: '#435', opacity: this.state.opacity2}}>
            <p style={{textAlign: 'center'}}>{this.state.tint2}%</p>
          </div>
          <input id="tint2" type="range" min="0" max="100" value={this.state.tint2} onChange={this.handleTint2}/>
        </div>
      </div>
    </div>);
  }
});

module.exports = Tints;
