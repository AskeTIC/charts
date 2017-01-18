var Bars = function(canvas, options, entities){
    this.can = canvas;
    this.entities = entities;
    this.width = options.bar.width; //ancho de bar
    this.sep = options.bar.width / options.bar.div ; //separacion entre barras
    this.setCanvasWidth(options.canvas.width);
    this.setCanvasHeight(options.canvas.height);
    this.ctx = this.can.getContext(options.canvas.ctx);
    this.setBars(entities);
}

//establecer ancho de canvas
Bars.prototype.setCanvasWidth = function(width){
    //si es 0, ocupará lo que necesiten las barras y espacios.
    if(width === 0){ //ancho de canvas
        console.log("setCanvasWidthNecesario");
        var totalSpaces = this.entities.length + 2 ;
        var widthBars = this.entities.length * this.width;
        var widthSpaces = totalSpaces * this.sep;
        this.can.width = widthSpaces + widthBars;
        /*No hace falta establecer el ancho de barras y espacios por que el ancho de canvas es ha medida y
        con el setBars() quedará bien repartido.*/
    //si es 1 ocupará el 100%
    }else if(width === 1){
        console.log("setCanvasWidth100%");
        this.can.style.width = "100%";
        this.can.width = this.can.offsetWidth;
        //Se necesita reestablecer el ancho de las barras pasado en options, el divisor será con el que jugar.
        this._setBarWidth(this.entities.length);
    //Si es otro valor así se quedará.
    }else{
        console.log("setBarWidth");
        //Se necesita reestablecer el ancho de las barras pasado en options, el divisor será con el que jugar.
        this._setBarWidth(this.entities.length);
    }
}

//establecer alto de canvas
Bars.prototype.setCanvasHeight = function(height){
    //si es 1 ocupará el 100%
    if(height === 1){
        this.can.style.height = "100%";
        this.can.height = this.can.offsetHeight;
        console.log(this.can.height);
    //si es otra cosa de 0 o 1 ocupará lo que se ha indicado.
    }else{
        this.can.height = height;
    }
}

//Se crean las barras dandole a la primera el alto totar y la siguientes un porcentaje acorde a los puntos que tiene cada entity
Bars.prototype.setBars = function (entities){
    var ent = entities || this.entities;
    var x = this.sep;
    var lastHeight = this.can.height; //100%
    var firstBarPoints = ent[0].points;
    for (i = 0; i < ent.length; i++) {
        if(i > 0){
            lastHeight = (ent[i].points * this.can.height / firstBarPoints);
            console.log(lastHeight);
        }
        this.ctx.fillStyle = ent[i].color;
        console.log(this.width);
        this.ctx.fillRect(x, this.can.height, this.width, -lastHeight);
        x += this.sep + this.width;
    }
}

//si nos pasan el ancho en lugar de 0, las barras y espacios se ajustarán a este.
Bars.prototype._setBarWidth = function(count){
  var countSpaces = count + 1 ;
  var totalWidthSpaces = this.sep * countSpaces;
  var utilWidht = this.can.width - totalWidthSpaces;
  this.width =  utilWidht / count;
  console.log(this.width);
}

module.exports = Bars;
