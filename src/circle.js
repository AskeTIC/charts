export default function Circle(attr, can, ctx) {
  console.log(ctx);
  this.x = can.width/2; //x, y & radius
  this.y = can.height/2;
  console.log(can);
  this.ctx = can.getContext(ctx);
  console.log(this.ctx);
  this.defined(attr);
}

Circle.prototype.defined = function(attr){
  this.color = attr.color;
  this.radius = attr.radius;
}

//hole
Circle.prototype.makeCircle = function(){
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
  this.ctx.stroke();
  this.ctx.fillStyle = this.color;
  this.ctx.fill();
  this.ctx.closePath();
}

//(Circle)();
