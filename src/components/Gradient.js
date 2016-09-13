var React = require('react');


var Gradient = React.createClass({
  render: function(){
    return (<div className="col-sm-12">
        <h2>Gradient</h2>
        <div className="row">
          <div className="col-sm-12">
            <div style={{height: '100px', width: '100%', background: 'linear-gradient(#354, #435)'}}></div>
          </div>
          <div className="col-sm-3">
            Direction
          </div>
          <div className="col-sm-9">
            <div className="btn-row">
              <button className="btn btn-default btn-sm">
                <span className="glyphicon glyphicon-arrow-left" style={{transform: 'rotate(45deg)'}}></span>
              </button>
              <button className="btn btn-default btn-sm">
                <span className="glyphicon glyphicon-arrow-up"></span>
              </button>
              <button className="btn btn-default btn-sm">
                <span className="glyphicon glyphicon-arrow-right" style={{transform: 'rotate(-45deg)'}}></span>
              </button>
            </div>
            <div className="btn-row">
              <button className="btn btn-default btn-sm">
                <span className="glyphicon glyphicon-arrow-left"></span>
              </button>
              <button className="btn btn-default btn-sm" style={{visibility: 'hidden'}}>
                <span className="glyphicon glyphicon-arrow-left"></span>
              </button>
              <button className="btn btn-default btn-sm">
                <span className="glyphicon glyphicon-arrow-right"></span>
              </button>
            </div>
            <div className="btn-row">
              <button className="btn btn-default btn-sm">
                <span className="glyphicon glyphicon-arrow-left" style={{transform: 'rotate(-45deg)'}}></span>
              </button>
              <button className="btn btn-default btn-sm">
                <span className="glyphicon glyphicon-arrow-down"></span>
              </button>
              <button className="btn btn-default btn-sm">
                <span className="glyphicon glyphicon-arrow-right" style={{transform: 'rotate(45deg)'}}></span>
              </button>
            </div>
          </div>
        </div>
      </div>);
  }
});

module.exports = Gradient;
