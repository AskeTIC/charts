(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './src/bars', './src/pie'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./src/bars'), require('./src/pie'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.bars, global.pie);
    global.index = mod.exports;
  }
})(this, function (exports, _bars, _pie) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Bars = exports.Pie = undefined;

  var _bars2 = _interopRequireDefault(_bars);

  var _pie2 = _interopRequireDefault(_pie);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.Pie = _pie2.default;
  exports.Bars = _bars2.default;
});
