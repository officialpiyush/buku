"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
module.exports = void 0;

var _index = _interopRequireDefault(require("../node/process/index.cjs"));

var _globalThis = _interopRequireDefault(require("./global-this.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_globalThis.default.process = _globalThis.default.process || _index.default;
var _default = _globalThis.default.process;
module.exports = _default;