var React = require('react');


var ComplementaryColos = React.createClass({
  getInitialState: function(){
    return {
      rgb1: [51,85,48],
      rgb2: [68,51,85]
    }
  },
  render: function(){
    return (<div className="col-sm-8">
        <h2>ComplementaryColors</h2>
        <div className="row">
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6">
                <div style={{height: '100px', width:'100px',backgroundColor: 'rgb('+this.state.rgb1[0]+','+this.state.rgb1[1]+','+this.state.rgb1[2]+')'}}></div>
                <p style={{textAlign: "center"}}>#354</p>
              </div>
              <div className="col-sm-6">
                <div style={{height: '100px', width:'100px',backgroundColor: 'rgb('+this.state.rgb2[0]+','+this.state.rgb2[1]+','+this.state.rgb2[2]+')'}}></div>
                <p style={{textAlign: "center"}}>#435</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6">
                <div style={{height: '100px', width:'100px',backgroundColor: 'rgb('+this.state.rgb2[0]+','+this.state.rgb2[1]+','+this.state.rgb2[2]+')'}}></div>
                <p style={{textAlign: "center"}}>#435</p>
              </div>
              <div className="col-sm-6">
                <div style={{height: '100px', width:'100px',backgroundColor: 'rgb('+this.state.rgb1[0]+','+this.state.rgb1[1]+','+this.state.rgb1[2]+')'}}></div>
                <p style={{textAlign: "center"}}>#354</p>
              </div>
            </div>
          </div>
        </div>
      </div>);
  }
});

module.exports = ComplementaryColos;
