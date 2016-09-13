var React = require('react');


var ComplementaryColos = React.createClass({
  render: function(){
    return (<div className="col-sm-8">
        <h2>ComplementaryColors</h2>
        <div className="row">
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6">
                <div style={{height: '100px', width:'100px',backgroundColor: '#354'}}></div>
                <p style={{textAlign: "center"}}>#354</p>
              </div>
              <div className="col-sm-6">
                <div style={{height: '100px', width:'100px',backgroundColor: '#435'}}></div>
                <p style={{textAlign: "center"}}>#435</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6">
                <div style={{height: '100px', width:'100px',backgroundColor: '#435'}}></div>
                <p style={{textAlign: "center"}}>#435</p>
              </div>
              <div className="col-sm-6">
                <div style={{height: '100px', width:'100px',backgroundColor: '#354'}}></div>
                <p style={{textAlign: "center"}}>#354</p>
              </div>
            </div>
          </div>
        </div>
      </div>);
  }
});

module.exports = ComplementaryColos;
