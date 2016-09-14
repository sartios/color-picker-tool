var React = require('react');

var LinearGradientColorPercent = React.createClass({
  getInitialState: function(){
    return {
      percent1: 50,
      percent2: 50
    }
  },
  handleChange: function(e){
    var id = e.target.id,
    value = e.target.value;
    if(id === 'color1Percent'){
      this.props.updateGradientColor1Percent(value);
      this.setState({
        percent1: value
      });
    }else if(id === 'color2Percent'){
      this.props.updateGradientColor2Percent(value);
      this.setState({
        percent2: value
      });
    }
  },
  render: function(){
    return (<div>
      <div className="col-sm-3">
        Percents
      </div>
      <div className="col-sm-3">
      <div>
        <label for="color1Percent">Color 1</label>
        <input id="color1Percent" type="range" min="0" max="100" className="form-control" onChange={this.handleChange}/>
        <p>{this.state.percent1}</p>
      </div>
      <div>
        <label for="color2Percent">Color 2</label>
        <input id="color2Percent" type="range" min="0" max="100" className="form-control" onChange={this.handleChange}/>
        <p>{this.state.percent2}</p>
      </div>
      </div>
    </div>);
  }
});


module.exports = LinearGradientColorPercent;
