var Bars = function(canvas, options, entities){
  this.can = canvas;
  this.entities = entities;
  this.width = options.width;
  this.sep = options.width / options.div ; //separacion entre barras
  console.log(this.sep);
  if(this.can.width === 0){
    this._setCanvasWidth(entities.length);
  }else{
    this._setBarWidth(entities.length);
  }
  this.ctx = this.can.getContext(options.ctx);
  this.setBars(entities);
}
  //var wd=20; var sp=wd+wd/2; var plc=0;
Bars.prototype.setBars = function (entities){
  var ent = entities || this.entities;
  var x = this.sep;
  for (i = 0; i < ent.length; i++) {
    this.ctx.fillStyle = ent[i].color;
    console.log(this.width);
    this.ctx.fillRect(x, 0, this.width, ent[i].points);
    x += this.sep + this.width;
    console.log(x);
  }
}

//calcular anchura canvas
Bars.prototype._setCanvasWidth = function(count){
  var totalSpaces = count + 2 ;
  var widthBars = count * this.width;
  var widthSpaces = totalSpaces * this.sep;
  this.can.width = widthSpaces + widthBars;
}

//establecer ancho de bar
Bars.prototype._setBarWidth = function(count){
  var countSpaces = count + 1 ;
  var totalWidthSpaces = this.sep * countSpaces;
  var utilWidht = this.can.width - totalWidthSpaces;
  this.width =  utilWidht / count;
  console.log(this.width);
}

module.exports = Bars;
