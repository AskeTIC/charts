var utils = require('asketic-utils');

var Bars = function(element, options, entities){
    this.entities = this._sortEntities(entities);
    this.element = this._setElementStyles(element, options); //HTML element
    //console.log(this.element);
    this.bar = {};
    this._setBarWidth(this.entities.length, options); //establece el ancho de this.bar
    //console.log(document);
    this.appendBars(this.entities.length); //inserta tantos this.bar como entidades haya.
    this._setBarsHeight(this.entities);
}

Bars.prototype._setElementStyles = function(element, options){
    element.style.display = "flex";
    element.style.flexFlow = "row nowrap";
    element.style.alignItems = 'flex-end';
    element.style.width = "100%";
    element.width = element.offsetWidth;
    element.style.height = "100%";
    element.height = element.offsetHeight;
    //console.log(element.height);
    //element = this.setElementWidth(element, options.element.width);
    //element = this.setElementHeight(element, options.element.height);
    return element;
}

//si nos pasan el ancho en lugar de 0, las barras y espacios se ajustarán a este.
Bars.prototype._setBarWidth = function(count, options){
    //console.log(options); //bar: 3, space: 1
    //Tantos espacios como barras +1
    var countSpaces = count + 1;
    //cuanto ocupan los espacios.
    console.log(this.element.width);
    var utilWidthForSpaces = this.element.width * options.width.space / options.width.bar;
    console.log(utilWidthForSpaces);
    var space = utilWidthForSpaces / countSpaces;
    var utilWidthForBars = this.element.width - utilWidthForSpaces;
    console.log(utilWidthForBars);
    var width = utilWidthForBars / count;

    //Cuanto queda de espacio para barras
    //Cuanto será el ancho de cada barra.
    this.bar.width = `${width}px`;
    this.bar.marginLeft = `${space}px`;
    //console.log(this.bar);
}

Bars.prototype._setBarsHeight = function(entities){

    var lastHeight = this.element.height - 30; //px
    console.log(lastHeight);
    var firstBarPoints = entities[0].points;
    for (i = 0; i < this.element.children.length; i++) {
        if(i > 0){
            lastHeight = (entities[i].points * (this.element.height-30) / firstBarPoints);
            //console.log(lastHeight);
        }
        this.element.children[i].style.height = `${utils.round(lastHeight)}px`;
        this.element.children[i].style.backgroundColor = entities[i].color;
        //this.element.children[i].innerHTML = `<span class='entity-siglas'>${entities[i].points}</span>`;
    }
}

//Se crean las barras dandole a la primera el alto totar y la siguientes un porcentaje acorde a los puntos que tiene cada entity
Bars.prototype.appendBars = function (numBars){
    for (i = 0; i < numBars; i++) {
        var article = document.createElement("article");
        article.style.width = this.bar.width;
        article.style.marginLeft = this.bar.marginLeft;
        article.style.botton = "0";
        console.log(article);
        this.element.append(article);
    }
    console.log(this.element);
}

//establecer ancho de elemento
Bars.prototype.setElementWidth = function(element, width){
    //si es 0, ocupará lo que necesiten las barras y espacios.
    if(width === 0){ //ancho de canvas
        /*console.log("setCanvasWidthNecesario");*/
        var totalSpaces = this.entities.length + 2 ;
        var widthBars = this.entities.length * this.width;
        var widthSpaces = totalSpaces * this.sep;
        element.width = widthSpaces + widthBars;
        return element;
        /*No hace falta establecer el ancho de barras y espacios por que el ancho de canvas es ha medida y
        con el setBars() quedará bien repartido.*/
    //si es 1 ocupará el 100%
    }else if(width === 1){
        /*console.log("setCanvasWidth100%");*/
        element.style.width = "100%";
        element.width = element.offsetWidth;
        console.log(element.width);
        return element;
    }else{
        element.style.width = `${width}%`;
        element.width = element.offsetWidth;
        console.log(element.width);
        return element;
    }
}

//establecer alto de elemento
Bars.prototype.setElementHeight = function(element, height){
    //si es 1 ocupará el 100%
    if(height === 1){
        element.style.height = "100%";
        element.height = element.offsetHeight;
        /*console.log(this.can.height);*/
        return element;
    //si es otra cosa de 0 o 1 ocupará lo que se ha indicado.
    }else{
        element.style.height = `${height}%`;
        element.height = element.offsetHeight;
        return element;
    }
}


//Se necesita tener en varias ramas de componentes incluso en vistas diferentes,
//TODO: más adelante debería estar en un service en algún objeto que trabaje con entities.
Bars.prototype._sortEntities = function(entities){
    //ordenar el array de menor a mayor e invertir
    //TODO: mejorar arraySort() para invertir en los 2 ordenes y por X atributo.
    utils.arraySort(entities);
    entities.reverse();
    return entities;
}
module.exports = Bars;
