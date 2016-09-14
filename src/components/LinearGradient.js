var React = require('react');

var LinearGradient = React.createClass({
  render: function(){
    var instance = this;
    return (<div>
              <div className="col-sm-3">
                Direction
              </div>
              <div className="col-sm-9">
                <div className="btn-row">
                  <button className="btn btn-default btn-sm" onClick={function(){
                    instance.props.handleClick('left top')
                  }}>
                    <span className="glyphicon glyphicon-arrow-left" style={{transform: 'rotate(45deg)'}}></span>
                  </button>
                  <button className="btn btn-default btn-sm" onClick={function(){
                    instance.props.handleClick('top')
                  }}>
                    <span className="glyphicon glyphicon-arrow-up"></span>
                  </button>
                  <button className="btn btn-default btn-sm" onClick={function(){
                    instance.props.handleClick('right top')
                  }}>
                    <span className="glyphicon glyphicon-arrow-right" style={{transform: 'rotate(-45deg)'}}></span>
                  </button>
                </div>
                <div className="btn-row">
                  <button className="btn btn-default btn-sm" onClick={function(){
                    instance.props.handleClick('left')
                  }}>
                    <span className="glyphicon glyphicon-arrow-left"></span>
                  </button>
                  <button className="btn btn-default btn-sm" style={{visibility: 'hidden'}}>
                    <span className="glyphicon glyphicon-arrow-left"></span>
                  </button>
                  <button className="btn btn-default btn-sm">
                    <span className="glyphicon glyphicon-arrow-right" onClick={function(){
                      instance.props.handleClick('right')
                    }}></span>
                  </button>
                </div>
                <div className="btn-row">
                  <button className="btn btn-default btn-sm" onClick={function(){
                    instance.props.handleClick('left bottom')
                  }}>
                    <span className="glyphicon glyphicon-arrow-left" style={{transform: 'rotate(-45deg)'}}></span>
                  </button>
                  <button className="btn btn-default btn-sm" onClick={function(){
                    instance.props.handleClick('bottom')
                  }}>
                    <span className="glyphicon glyphicon-arrow-down"></span>
                  </button>
                  <button className="btn btn-default btn-sm" onClick={function(){
                    instance.props.handleClick('right bottom')
                  }}>
                    <span className="glyphicon glyphicon-arrow-right" style={{transform: 'rotate(45deg)'}}></span>
                  </button>
                </div>
              </div>
            </div>
          );
  }
});

module.exports = LinearGradient;
