"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  createServer: true,
  request: true,
  get: true,
  Server: true,
  OutgoingMessage: true,
  ClientRequest: true,
  Agent: true,
  globalAgent: true,
  validateHeaderName: true,
  validateHeaderValue: true,
  setMaxIdleHTTPParsers: true
};
exports.validateHeaderValue = exports.validateHeaderName = exports.setMaxIdleHTTPParsers = exports.request = exports.globalAgent = exports.get = exports.default = exports.createServer = exports.Server = exports.OutgoingMessage = exports.ClientRequest = exports.Agent = void 0;

var _utils = require("../../_internal/utils.cjs");

var _proxy = _interopRequireDefault(require("../../mock/proxy.cjs"));

var consts = _interopRequireWildcard(require("./_consts.cjs"));

Object.keys(consts).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === consts[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return consts[key];
    }
  });
});

var _request = require("./_request.cjs");

Object.keys(_request).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _request[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _request[key];
    }
  });
});

var _response = require("./_response.cjs");

Object.keys(_response).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _response[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _response[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createServer = (0, _utils.notImplemented)("http.createServer");
exports.createServer = createServer;
const request = (0, _utils.notImplemented)("http.request");
exports.request = request;
const get = (0, _utils.notImplemented)("http.get");
exports.get = get;

const Server = _proxy.default.__createMock__("http.Server");

exports.Server = Server;

const OutgoingMessage = _proxy.default.__createMock__("http.OutgoingMessage");

exports.OutgoingMessage = OutgoingMessage;

const ClientRequest = _proxy.default.__createMock__("http.ClientRequest");

exports.ClientRequest = ClientRequest;

const Agent = _proxy.default.__createMock__("http.Agent");

exports.Agent = Agent;
const globalAgent = new Agent();
exports.globalAgent = globalAgent;
const validateHeaderName = (0, _utils.notImplemented)("http.validateHeaderName");
exports.validateHeaderName = validateHeaderName;
const validateHeaderValue = (0, _utils.notImplemented)("http.validateHeaderValue");
exports.validateHeaderValue = validateHeaderValue;
const setMaxIdleHTTPParsers = (0, _utils.notImplemented)("http.setMaxIdleHTTPParsers");
exports.setMaxIdleHTTPParsers = setMaxIdleHTTPParsers;
var _default = { ...consts,
  IncomingMessage: _request.IncomingMessage,
  ServerResponse: _response.ServerResponse,
  createServer,
  request,
  get,
  Server,
  OutgoingMessage,
  ClientRequest,
  Agent,
  globalAgent,
  validateHeaderName,
  validateHeaderValue,
  setMaxIdleHTTPParsers
};
module.exports = _default;