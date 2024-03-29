"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
module.exports = exports.WritableStreamDefaultWriter = exports.WritableStreamDefaultController = exports.WritableStream = exports.TransformStreamDefaultController = exports.TransformStream = exports.TextEncoderStream = exports.TextDecoderStream = exports.ReadableStreamDefaultReader = exports.ReadableStreamDefaultController = exports.ReadableStreamBYOBRequest = exports.ReadableStreamBYOBReader = exports.ReadableStream = exports.ReadableByteStreamController = exports.CountQueuingStrategy = exports.ByteLengthQueuingStrategy = void 0;

var _utils = require("../../../_internal/utils.cjs");

const ReadableStream = globalThis.ReadableStream || (0, _utils.notImplemented)("stream.web.ReadableStream");
exports.ReadableStream = ReadableStream;
const ReadableStreamDefaultReader = globalThis.ReadableStreamDefaultReader || (0, _utils.notImplemented)("stream.web.ReadableStreamDefaultReader");
exports.ReadableStreamDefaultReader = ReadableStreamDefaultReader;
const ReadableStreamBYOBReader = globalThis.ReadableStreamBYOBReader || (0, _utils.notImplemented)("stream.web.ReadableStreamBYOBReader");
exports.ReadableStreamBYOBReader = ReadableStreamBYOBReader;
const ReadableStreamBYOBRequest = globalThis.ReadableStreamBYOBRequest || (0, _utils.notImplemented)("stream.web.ReadableStreamBYOBRequest");
exports.ReadableStreamBYOBRequest = ReadableStreamBYOBRequest;
const ReadableByteStreamController = globalThis.ReadableByteStreamController || (0, _utils.notImplemented)("stream.web.ReadableByteStreamController");
exports.ReadableByteStreamController = ReadableByteStreamController;
const ReadableStreamDefaultController = globalThis.ReadableStreamDefaultController || (0, _utils.notImplemented)("stream.web.ReadableStreamDefaultController");
exports.ReadableStreamDefaultController = ReadableStreamDefaultController;
const TransformStream = globalThis.TransformStream || (0, _utils.notImplemented)("stream.web.TransformStream");
exports.TransformStream = TransformStream;
const TransformStreamDefaultController = globalThis.TransformStreamDefaultController || (0, _utils.notImplemented)("stream.web.TransformStreamDefaultController");
exports.TransformStreamDefaultController = TransformStreamDefaultController;
const WritableStream = globalThis.WritableStream || (0, _utils.notImplemented)("stream.web.WritableStream");
exports.WritableStream = WritableStream;
const WritableStreamDefaultWriter = globalThis.WritableStreamDefaultWriter || (0, _utils.notImplemented)("stream.web.WritableStreamDefaultWriter");
exports.WritableStreamDefaultWriter = WritableStreamDefaultWriter;
const WritableStreamDefaultController = globalThis.WritableStreamDefaultController || (0, _utils.notImplemented)("stream.web.WritableStreamDefaultController");
exports.WritableStreamDefaultController = WritableStreamDefaultController;
const ByteLengthQueuingStrategy = globalThis.ByteLengthQueuingStrategy || (0, _utils.notImplemented)("stream.web.ByteLengthQueuingStrategy");
exports.ByteLengthQueuingStrategy = ByteLengthQueuingStrategy;
const CountQueuingStrategy = globalThis.CountQueuingStrategy || (0, _utils.notImplemented)("stream.web.CountQueuingStrategy");
exports.CountQueuingStrategy = CountQueuingStrategy;
const TextEncoderStream = globalThis.TextEncoderStream || (0, _utils.notImplemented)("stream.web.TextEncoderStream");
exports.TextEncoderStream = TextEncoderStream;
const TextDecoderStream = globalThis.TextDecoderStream || (0, _utils.notImplemented)("stream.web.TextDecoderStream");
exports.TextDecoderStream = TextDecoderStream;
var _default = {
  ReadableStream,
  ReadableStreamDefaultReader,
  ReadableStreamBYOBReader,
  ReadableStreamBYOBRequest,
  ReadableByteStreamController,
  ReadableStreamDefaultController,
  TransformStream,
  TransformStreamDefaultController,
  WritableStream,
  WritableStreamDefaultWriter,
  WritableStreamDefaultController,
  ByteLengthQueuingStrategy,
  CountQueuingStrategy,
  TextEncoderStream,
  TextDecoderStream
};
module.exports = _default;