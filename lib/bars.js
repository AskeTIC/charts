function Bars(canvas, ctx, width){
    this.can = canvas;
    this.width = width;
    this.sep = width+width/2; //media
    this.place = 0;
    this.ctx = this.can.getContext(ctx);

}
  //var wd=20; var sp=wd+wd/2; var plc=0;
Bars.prototype.makeBars = function (entities){
  for (i = 0; i < entities.length; i++) {
    this.ctx.fillStyle = entities[i].color;
    this.ctx.fillRect(this.place, 0, this.width, entities[i].points);
    this.place+=this.sep;
  }
}

//(Bars)();
