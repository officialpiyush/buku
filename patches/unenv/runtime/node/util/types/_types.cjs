"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isWeakSet = exports.isWeakMap = exports.isUint8ClampedArray = exports.isUint8Array = exports.isUint32Array = exports.isUint16Array = exports.isTypedArray = exports.isSymbolObject = exports.isStringObject = exports.isSharedArrayBuffer = exports.isSetIterator = exports.isSet = exports.isRegExp = exports.isProxy = exports.isPromise = exports.isNumberObject = exports.isNativeError = exports.isModuleNamespaceObject = exports.isMapIterator = exports.isMap = exports.isKeyObject = exports.isInt8Array = exports.isInt32Array = exports.isInt16Array = exports.isGeneratorObject = exports.isGeneratorFunction = exports.isFloat64Array = exports.isFloat32Array = exports.isExternal = exports.isDate = exports.isDataView = exports.isCryptoKey = exports.isBoxedPrimitive = exports.isBooleanObject = exports.isBigUint64Array = exports.isBigIntObject = exports.isBigInt64Array = exports.isAsyncFunction = exports.isArrayBufferView = exports.isArrayBuffer = exports.isArgumentsObject = exports.isAnyArrayBuffer = void 0;

var _utils = require("../../../_internal/utils.cjs");

const isExternal = (0, _utils.notImplemented)("util.types.isExternal");
exports.isExternal = isExternal;

const isDate = val => val instanceof Date;

exports.isDate = isDate;
const isArgumentsObject = (0, _utils.notImplemented)("util.types.isArgumentsObject");
exports.isArgumentsObject = isArgumentsObject;

const isBigIntObject = val => val instanceof BigInt;

exports.isBigIntObject = isBigIntObject;

const isBooleanObject = val => val instanceof Boolean;

exports.isBooleanObject = isBooleanObject;

const isNumberObject = val => val instanceof Number;

exports.isNumberObject = isNumberObject;

const isStringObject = val => val instanceof String;

exports.isStringObject = isStringObject;

const isSymbolObject = val => val instanceof Symbol;

exports.isSymbolObject = isSymbolObject;
const isNativeError = (0, _utils.notImplemented)("util.types.isNativeError");
exports.isNativeError = isNativeError;

const isRegExp = val => val instanceof RegExp;

exports.isRegExp = isRegExp;
const isAsyncFunction = (0, _utils.notImplemented)("util.types.isAsyncFunction");
exports.isAsyncFunction = isAsyncFunction;
const isGeneratorFunction = (0, _utils.notImplemented)("util.types.isGeneratorFunction");
exports.isGeneratorFunction = isGeneratorFunction;
const isGeneratorObject = (0, _utils.notImplemented)("util.types.isGeneratorObject");
exports.isGeneratorObject = isGeneratorObject;

const isPromise = val => val instanceof Promise;

exports.isPromise = isPromise;

const isMap = val => val instanceof Map;

exports.isMap = isMap;

const isSet = val => val instanceof Set;

exports.isSet = isSet;
const isMapIterator = (0, _utils.notImplemented)("util.types.isMapIterator");
exports.isMapIterator = isMapIterator;
const isSetIterator = (0, _utils.notImplemented)("util.types.isSetIterator");
exports.isSetIterator = isSetIterator;

const isWeakMap = val => val instanceof WeakMap;

exports.isWeakMap = isWeakMap;

const isWeakSet = val => val instanceof WeakSet;

exports.isWeakSet = isWeakSet;

const isArrayBuffer = val => val instanceof ArrayBuffer;

exports.isArrayBuffer = isArrayBuffer;

const isDataView = val => val instanceof DataView;

exports.isDataView = isDataView;

const isSharedArrayBuffer = val => val instanceof SharedArrayBuffer;

exports.isSharedArrayBuffer = isSharedArrayBuffer;
const isProxy = (0, _utils.notImplemented)("util.types.isProxy");
exports.isProxy = isProxy;
const isModuleNamespaceObject = (0, _utils.notImplemented)("util.types.isModuleNamespaceObject");
exports.isModuleNamespaceObject = isModuleNamespaceObject;
const isAnyArrayBuffer = (0, _utils.notImplemented)("util.types.isAnyArrayBuffer");
exports.isAnyArrayBuffer = isAnyArrayBuffer;
const isBoxedPrimitive = (0, _utils.notImplemented)("util.types.isBoxedPrimitive");
exports.isBoxedPrimitive = isBoxedPrimitive;
const isArrayBufferView = (0, _utils.notImplemented)("util.types.isArrayBufferView");
exports.isArrayBufferView = isArrayBufferView;
const isTypedArray = (0, _utils.notImplemented)("util.types.isTypedArray");
exports.isTypedArray = isTypedArray;
const isUint8Array = (0, _utils.notImplemented)("util.types.isUint8Array");
exports.isUint8Array = isUint8Array;
const isUint8ClampedArray = (0, _utils.notImplemented)("util.types.isUint8ClampedArray");
exports.isUint8ClampedArray = isUint8ClampedArray;
const isUint16Array = (0, _utils.notImplemented)("util.types.isUint16Array");
exports.isUint16Array = isUint16Array;
const isUint32Array = (0, _utils.notImplemented)("util.types.isUint32Array");
exports.isUint32Array = isUint32Array;
const isInt8Array = (0, _utils.notImplemented)("util.types.isInt8Array");
exports.isInt8Array = isInt8Array;
const isInt16Array = (0, _utils.notImplemented)("util.types.isInt16Array");
exports.isInt16Array = isInt16Array;
const isInt32Array = (0, _utils.notImplemented)("util.types.isInt32Array");
exports.isInt32Array = isInt32Array;
const isFloat32Array = (0, _utils.notImplemented)("util.types.isFloat32Array");
exports.isFloat32Array = isFloat32Array;
const isFloat64Array = (0, _utils.notImplemented)("util.types.isFloat64Array");
exports.isFloat64Array = isFloat64Array;
const isBigInt64Array = (0, _utils.notImplemented)("util.types.isBigInt64Array");
exports.isBigInt64Array = isBigInt64Array;
const isBigUint64Array = (0, _utils.notImplemented)("util.types.isBigUint64Array");
exports.isBigUint64Array = isBigUint64Array;
const isKeyObject = (0, _utils.notImplemented)("util.types.isKeyObject");
exports.isKeyObject = isKeyObject;
const isCryptoKey = (0, _utils.notImplemented)("util.types.isCryptoKey");
exports.isCryptoKey = isCryptoKey;