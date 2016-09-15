var React = require('react');

var LinearGradientColorPercent = React.createClass({
  getInitialState: function(){
    return {
      percent: this.props.initPercent
    }
  },
  _updateColorPercent: function(e){
    var percent = e.target.value / 100;
    this.setState({
      percent : percent
    });
    this.props.updateColor(percent);
  },
  render: function(){
    return (
      <label> {this.props.propLabel}
        <input type="range" min="0" max="100" value={this.state.percent * 100} className="form-control" onChange={this._updateColorPercent}/>
        {Math.floor(this.state.percent * 100)}
      </label>
    );
  }
});


module.exports = LinearGradientColorPercent;
