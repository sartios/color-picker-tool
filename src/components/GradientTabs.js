var React = require('react');
var $ = require('jquery');

var GradientTabs = React.createClass({
  handleClick: function(e){
    var instance = this;
    e.preventDefault();
    var id = e.target.id;
    if(id === 'linear'){
      $('#linear').parent().addClass('active');
      $('#radical').parent().removeClass('active');
      instance.props.updateTab('linear');
    }else if(id === 'radical'){
      $('#radical').parent().addClass('active');
      $('#linear').parent().removeClass('active');
      instance.props.updateTab('radical');
    }
  },
  render: function(){
    return (<div className="row">
      <div className="col-sm-3 col-sm-offset-4">
        <ul className="nav nav-tabs">
          <li className="active"><a href="#" id="linear" onClick={this.handleClick}>Linear</a></li>
          <li><a href="#" id="radical" onClick={this.handleClick}>Radical</a></li>
        </ul>
      </div>
    </div>);
  }
});

module.exports = GradientTabs;
