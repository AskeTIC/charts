var utils = require('asketic-utils');
var Circle = require ('../elements/circle');

function Pie(canvas, attr, ctx) {
  this.can = canvas;
  this.attr = {x:this.can.width/2, y:this.can.height/2, radius:attr.radius}; //x, y & radius
  this.ctx = this.can.getContext(ctx);
  this.circle = new Circle(attr.circle, this.can, ctx);
  this.circle.makeCircle();
}

//var cmz=0,x=0,y=0,z=2;
//ctxb.strokeStyle="fuchsia";
//var centerX=cb.width/2;
//var centerY=cb.height/2;
//var radius=130;
//var total=0;
//TODO: recoger eventos y cambiar los atributos
Pie.prototype.defined = function(line){
  this.can.lineWidth = line.width;
  this.can.strokeStyle = line.color;
}


Pie.prototype.makePie = function(entities, start){
  var startAngle= start || 0; //radianes
  var endAngle=0; //radianes

  for (i = 0; i < entities.length; i++) {
    endAngle = utils.toRadians(entities[i].deg);
    this.ctx.beginPath();
    this.ctx.moveTo(this.attr.x,this.attr.y);
    this.ctx.arc(this.attr.x, this.attr.y, this.attr.radius, startAngle, startAngle+endAngle, false);
    this.ctx.fillStyle = entities[i].color;
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
    startAngle+=endAngle;

  }
}

module.exports = Pie;
