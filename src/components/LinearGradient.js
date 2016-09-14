var React = require('react');
var LinearGradientDirection = require('./LinearGradientDirection');

var LinearGradient = React.createClass({
  render: function(){
    var instance = this;
    return (<div>
              <LinearGradientDirection handleClick={this.props.handleClick}/>
            </div>
          );
  }
});

module.exports = LinearGradient;
