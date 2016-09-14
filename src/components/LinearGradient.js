var React = require('react');
var LinearGradientDirection = require('./LinearGradientDirection');
var LinearGradientColorPercent = require('./LinearGradientColorPercent');

var LinearGradient = React.createClass({
  render: function(){
    var instance = this;
    return (<div>
              <LinearGradientDirection handleClick={this.props.handleClick}/>
              <LinearGradientColorPercent updateGradientColor1Percent={this.props.updateGradientColor1Percent} updateGradientColor2Percent={this.props.updateGradientColor2Percent} />
            </div>
          );
  }
});

module.exports = LinearGradient;
