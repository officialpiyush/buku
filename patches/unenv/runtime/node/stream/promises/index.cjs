"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pipeline = exports.finished = exports.default = void 0;

var _utils = require("../../../_internal/utils.cjs");

const finished = (0, _utils.notImplemented)("stream.promises.finished");
exports.finished = finished;
const pipeline = (0, _utils.notImplemented)("stream.promises.pipeline");
exports.pipeline = pipeline;
var _default = {
  finished,
  pipeline
};
module.exports = _default;