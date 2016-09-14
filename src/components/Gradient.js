var React = require('react');
var rgbHex = require('rgb-hex');
var LinearGradient = require('./LinearGradient');
var RadicalGradient = require('./RadicalGradient');
var GradientTabs = require('./GradientTabs');


var Gradient = React.createClass({
  getInitialState: function(){
    var color1 = '#' + rgbHex(this.props.color1[0],this.props.color1[1],this.props.color1[2]);
    var color2 = '#' + rgbHex(this.props.color2[0],this.props.color2[1],this.props.color2[2]);
    return {
        gradient: 'linear-gradient('+color1+', '+color2+')',
        color1: color1,
        color2: color2,
        tab: 'linear',
        position: 'left',
        color1percent: '50',
        color2percent: '50'
    };
  },
  handleClick: function(position){
    if(position){
      var gradient = 'linear-gradient(to '+position+', '+this.state.color1+' '+this.state.color1percent+'%, '+this.state.color2+' '+this.state.color2percent+'%)';
      this.setState({gradient: gradient, position: position});
    }
  },
  componentWillReceiveProps: function(newProps){
      var color1 = '#' + rgbHex(newProps.color1[0],newProps.color1[1],newProps.color1[2]);
      var color2 = '#' + rgbHex(newProps.color2[0],newProps.color2[1],newProps.color2[2]);
      this.setState({
        color1: color1,
        color2: color2,
        gradient: 'linear-gradient('+color1+' '+this.state.color1percent+'%, '+color2+' '+this.state.color2percent+'%)'
      });
    },
    updateTab: function(tabName){
      this.setState({
        tab: tabName
      });
    },
    updateGradientColor1Percent: function(percent){
      var gradient = 'linear-gradient(to '+this.state.position+', '+this.state.color1+' '+percent+'%, '+this.state.color2+' '+this.state.color2percent+'%)';
      this.setState({
        gradient: gradient,
        color1percent: percent
      });
    },
    updateGradientColor2Percent: function(percent){
      var gradient = 'linear-gradient(to '+this.state.position+', '+this.state.color1+' '+this.state.color1percent+'%, '+this.state.color2+' '+percent+'%)';
      this.setState({
        gradient: gradient,
        color2percent: percent
      });
    },
  render: function(){
    if(this.state.tab == 'linear'){
      return (<div className="col-sm-12">
        <h2>Gradient</h2>
        <div className="row">
          <div className="col-sm-12">
            <div style={{height: '100px', width: '100%', background: this.state.gradient}}></div>
          </div>
        </div>
        <GradientTabs updateTab={this.updateTab}/>
        <div className="row">
          <LinearGradient handleClick={this.handleClick} updateGradientColor1Percent={this.updateGradientColor1Percent} updateGradientColor2Percent={this.updateGradientColor2Percent}/>
        </div>
      </div>);
    }else{
      return (<div className="col-sm-12">
        <h2>Gradient</h2>
        <div className="row">
          <div className="col-sm-12">
            <div style={{height: '100px', width: '100%', background: this.state.gradient}}></div>
          </div>
        </div>
        <GradientTabs updateTab={this.updateTab}/>
        <div className="row">
          <RadicalGradient/>
        </div>
      </div>);
    }
  }
});

module.exports = Gradient;
