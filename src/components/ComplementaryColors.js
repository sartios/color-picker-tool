var React = require('react');
var converter = require('hsl-to-hex');


var ComplementaryColos = React.createClass({
  getInitialState: function(){
    return {
      rgb1: [255,106,0],
      rgb2: [0,213,255],
    }
  },
  rgbToHsl: function(rgb){
    var r = rgb[0] / 255,
    g = rgb[1] / 255,
    b = rgb[2] / 255,
    rgbDiv = [r, g, b],
    min = Math.min(r,g,b),
    max = Math.max(r,g,b),
    l = ((min + max)/2) * 100,
    s = this.getSaturation(min, max, l) * 100,
    h = this.getHue(min, max, rgbDiv);
    return [h,s,l];
  },
  getSaturation: function(min, max, l){
    if(min === max){
      return 0;
    }else if(l < 0.5){
      return (max - min)/(max + min);
    }else if(l >= 0.5){
      return (max - min)/(2.0 - max - min);
    }
  },
  getHue: function(min, max, rgb){
    var maxIndex = rgb.indexOf(Math.max(rgb[0], rgb[1], rgb[2])),hue;
    if(maxIndex === 0){
      hue = (rgb[1] - rgb[2])/ (max - min);
    }else if(maxIndex === 1){
      hue = 2.0 + ((rgb[2] - rgb[0]) / (max - min));
    }else if(maxIndex === 2){
      hue = 4.0 + ((rgb[0] - rgb[1]) / (max - min));
    }
    return hue * 60;
  },
  getComplementary: function(hsl){
    var complementary = [];
    if((hsl[0] + 180) <= 359){
      complementary.push(hsl[0] + 180);
    }else{
      complementary.push(hsl[0] - 180);
    }
    complementary.push(hsl[1]);
    complementary.push(hsl[2]);
    return complementary;
  },
  render: function(){
    var hsl1 = this.rgbToHsl(this.state.rgb1),
        compl1 = this.getComplementary(hsl1),
        hsl2 = this.rgbToHsl(this.state.rgb2),
        compl2 = this.getComplementary(hsl2);
    return (<div className="col-sm-8">
        <h2>ComplementaryColors</h2>
        <div className="row">
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6">
                <div style={{height: '100px', width:'100px',backgroundColor: 'hsl('+hsl1[0]+','+hsl1[1]+'%,'+hsl1[2]+'%)'}}></div>
                <p>#{converter(hsl1[0], hsl1[1], hsl1[2])}</p>
              </div>
              <div className="col-sm-6">
                <div style={{height: '100px', width:'100px',backgroundColor: 'hsl('+compl1[0]+','+compl1[1]+'%,'+compl1[2]+'%)'}}></div>
                <p>#{converter(compl1[0], compl1[1], compl1[2])}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6">
                <div style={{height: '100px', width:'100px',backgroundColor: 'hsl('+hsl2[0]+','+hsl2[1]+'%,'+hsl2[2]+'%)'}}></div>
                <p>#{converter(hsl2[0], hsl2[1], hsl2[2])}</p>
              </div>
              <div className="col-sm-6">
                <div style={{height: '100px', width:'100px',backgroundColor: 'hsl('+compl2[0]+','+compl2[1]+'%,'+compl2[2]+'%)'}}></div>
                <p>#{converter(compl2[0], compl2[1], compl2[2])}</p>
              </div>
            </div>
          </div>
        </div>
      </div>);
  }
});

module.exports = ComplementaryColos;
