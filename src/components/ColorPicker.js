var React = require('react');


var ColorPicker = React.createClass({
  render: function(){
    return (<div className="col-sm-4">
        <h2>ColorPicker</h2>
        <div className="form-group">
          <label for="color1">Color 1</label>
          <input id="color1" type="text" value="#354" className="form-control"/>
        </div>
        <div className="form-group">
          <label for="color2">Color 2</label>
          <input id="color2" type="text" value="#435" className="form-control"/>
        </div>
      </div>);
  }
});

module.exports = ColorPicker;
