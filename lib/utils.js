function Utils() {
  this.foo = null;
}

//redondea con 2 decimales
//TODO: Poder pasarle un atributo para indicar número de decimales
Utils.prototype.round = function (num){
  num = Math.round(num * 100) / 100;
  return num;
};

//ordena de mayor a menor
Utils.prototype.arraySort = function (arrayObjects){
  arrayObjects.sort(function(a, b){return a.points-b.points});
};

//convierte grados a radianes
Utils.prototype.toRadians = function (deg){
  return deg * Math.PI / 180 ;
};

//(Utils)();
