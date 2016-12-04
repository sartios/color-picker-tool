var React = require('react');

var Range = React.createClass({
  getInitialState: function(){
    return ({
      rangeValue: this.props.options.default || 0
    });
  },
  _handleChange: function(e){
    var value = e.target.value;
    this.setState({
      rangeValue: value
    });
    this.props.updateValue(value);
  },
  render: function(){
    var options = this.props.options;
    return (
      <label> {options.label}
        <input id={options.id} className="form-control" type="range" min={options.min} max={options.max}
        value={this.state.rangeValue} onChange={this._handleChange}/>
      </label>
    )
  }
});

module.exports = Range;
