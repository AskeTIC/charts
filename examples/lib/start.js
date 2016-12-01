(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['asketic-utils', '../index-es5'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('asketic-utils'), require('../index-es5'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.asketicUtils, global.indexEs5);
    global.start = mod.exports;
  }
})(this, function (_asketicUtils, _indexEs) {
  'use strict';

  var _asketicUtils2 = _interopRequireDefault(_asketicUtils);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var entities = [{ points: 250, percent: null, color: "brown" }, { points: 200, percent: null, color: "pink" }, { points: 30, percent: null, color: "blue" }, { points: 50, percent: null, color: "lightgreen" }, { points: 250, percent: null, color: "violet" }, { points: 130, percent: null, color: "orange" }, { points: 25, percent: null, color: "yellow" }, { points: 340, percent: null, color: "green" }, { points: 400, percent: null, color: "red" }, { points: 450, percent: null, color: "lightblue" }];

  var total = 0;

  _asketicUtils2.default.arraySort(entities);

  for (var i = 0; i < entities.length; i++) {
    total += entities[i].points;
  }

  for (var i = 0; i < entities.length; i++) {
    entities[i].percent = _asketicUtils2.default.round(entities[i].points * 100 / total);
    entities[i].deg = _asketicUtils2.default.round(entities[i].percent * 360 / 100);
  }

  var barsChartCanvas = document.getElementById('barsChart');
  var barsChart = new _indexEs.Bars(barsChartCanvas, '2d', 20);
  barsChart.makeBars(entities);

  var piesChartCanvas = document.getElementById('piesChart');
  var piesChart = new _indexEs.Pie(piesChartCanvas, { radius: 140, circle: { radius: 40, color: "#fff" } }, '2d');
  piesChart.defined({ width: 1, color: '#ccc' });
  piesChart.makePie(entities);

  acomodar(barsChartCanvas);
  acomodar(piesChartCanvas);
  //agujero();

  function acomodar(c) {
    //acomodo canvas correctamente
    c.style.transform = "rotate(180deg)";
    c.style.transform = "scale(1,-1)";
    c.style.webkitTransform = "rotate(180deg)";
    c.style.webkitTransform = "scale(1,-1)";
    c.style.mozTransform = "rotate(180deg)";
    c.style.mozTransform = "scale(1,-1)";
    //acomodo canvas correctamente
  }
});