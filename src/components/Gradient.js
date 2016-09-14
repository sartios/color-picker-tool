var React = require('react');
var rgbHex = require('rgb-hex');


var Gradient = React.createClass({
  getInitialState: function(){
    var color1 = '#' + rgbHex(this.props.color1[0],this.props.color1[1],this.props.color1[2]);
    var color2 = '#' + rgbHex(this.props.color2[0],this.props.color2[1],this.props.color2[2]);
    return {
        gradient: 'linear-gradient('+color1+', '+color2+')',
        color1: color1,
        color2: color2
    };
  },
  handleClick: function(position){
    if(position){
      var gradient = 'linear-gradient(to '+position+', '+this.state.color1+', '+this.state.color2+')';
      this.setState({gradient: gradient});
    }
  },
  componentWillReceiveProps: function(newProps){
      var color1 = '#' + rgbHex(newProps.color1[0],newProps.color1[1],newProps.color1[2]);
      var color2 = '#' + rgbHex(newProps.color2[0],newProps.color2[1],newProps.color2[2]);
      this.setState({
        color1: color1,
        color2: color2,
        gradient: 'linear-gradient('+color1+', '+color2+')'
      });
    },
  render: function(){
    var instance = this;
    return (<div className="col-sm-12">
        <h2>Gradient</h2>
        <div className="row">
          <div className="col-sm-12">
            <div style={{height: '100px', width: '100%', background: this.state.gradient}}></div>
          </div>
          <div className="col-sm-3">
            Direction
          </div>
          <div className="col-sm-9">
            <div className="btn-row">
              <button className="btn btn-default btn-sm" onClick={function(){
                instance.handleClick('left top')
              }}>
                <span className="glyphicon glyphicon-arrow-left" style={{transform: 'rotate(45deg)'}}></span>
              </button>
              <button className="btn btn-default btn-sm" onClick={function(){
                instance.handleClick('top')
              }}>
                <span className="glyphicon glyphicon-arrow-up"></span>
              </button>
              <button className="btn btn-default btn-sm" onClick={function(){
                instance.handleClick('right top')
              }}>
                <span className="glyphicon glyphicon-arrow-right" style={{transform: 'rotate(-45deg)'}}></span>
              </button>
            </div>
            <div className="btn-row">
              <button className="btn btn-default btn-sm" onClick={function(){
                instance.handleClick('left')
              }}>
                <span className="glyphicon glyphicon-arrow-left"></span>
              </button>
              <button className="btn btn-default btn-sm" style={{visibility: 'hidden'}}>
                <span className="glyphicon glyphicon-arrow-left"></span>
              </button>
              <button className="btn btn-default btn-sm">
                <span className="glyphicon glyphicon-arrow-right" onClick={function(){
                  instance.handleClick('right')
                }}></span>
              </button>
            </div>
            <div className="btn-row">
              <button className="btn btn-default btn-sm" onClick={function(){
                instance.handleClick('left bottom')
              }}>
                <span className="glyphicon glyphicon-arrow-left" style={{transform: 'rotate(-45deg)'}}></span>
              </button>
              <button className="btn btn-default btn-sm" onClick={function(){
                instance.handleClick('bottom')
              }}>
                <span className="glyphicon glyphicon-arrow-down"></span>
              </button>
              <button className="btn btn-default btn-sm" onClick={function(){
                instance.handleClick('right bottom')
              }}>
                <span className="glyphicon glyphicon-arrow-right" style={{transform: 'rotate(45deg)'}}></span>
              </button>
            </div>
          </div>
        </div>
      </div>);
  }
});

module.exports = Gradient;
