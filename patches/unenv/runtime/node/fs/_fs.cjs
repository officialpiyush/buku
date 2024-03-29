"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writevSync = exports.writev = exports.writeSync = exports.writeFileSync = exports.writeFile = exports.write = exports.watchFile = exports.watch = exports.utimesSync = exports.utimes = exports.unwatchFile = exports.unlinkSync = exports.unlink = exports.truncateSync = exports.truncate = exports.symlinkSync = exports.symlink = exports.statSync = exports.stat = exports.rmdirSync = exports.rmdir = exports.rmSync = exports.rm = exports.renameSync = exports.rename = exports.realpathSync = exports.realpath = exports.readvSync = exports.readv = exports.readlinkSync = exports.readlink = exports.readdirSync = exports.readdir = exports.readSync = exports.readFileSync = exports.readFile = exports.read = exports.opendirSync = exports.opendir = exports.openSync = exports.open = exports.mkdtempSync = exports.mkdtemp = exports.mkdirSync = exports.mkdir = exports.lutimesSync = exports.lutimes = exports.lstatSync = exports.lstat = exports.linkSync = exports.link = exports.lchownSync = exports.lchown = exports.lchmodSync = exports.lchmod = exports.futimesSync = exports.futimes = exports.ftruncateSync = exports.ftruncate = exports.fsyncSync = exports.fsync = exports.fstatSync = exports.fstat = exports.fdatasyncSync = exports.fdatasync = exports.fchownSync = exports.fchown = exports.fchmodSync = exports.fchmod = exports.existsSync = exports.exists = exports.createWriteStream = exports.createReadStream = exports.cpSync = exports.cp = exports.copyFileSync = exports.copyFile = exports.closeSync = exports.close = exports.chownSync = exports.chown = exports.chmodSync = exports.chmod = exports.appendFileSync = exports.appendFile = exports.accessSync = exports.access = exports._toUnixTimestamp = void 0;

var _utils = require("../../_internal/utils.cjs");

var fsp = _interopRequireWildcard(require("./promises/index.cjs"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function notImplementedAsync(name) {
  const fn = (0, _utils.notImplemented)(name);

  fn.__promisify__ = () => (0, _utils.notImplemented)(name + ".__promisify__");

  fn.native = fn;
  return fn;
}

function callbackify(fn) {
  const fnc = function (...args) {
    const cb = args.pop();
    fn().catch(error => cb(error)).then(val => cb(void 0, val));
  };

  fnc.__promisify__ = fn;
  fnc.native = fnc;
  return fnc;
}

const access = callbackify(fsp.access);
exports.access = access;
const appendFile = callbackify(fsp.appendFile);
exports.appendFile = appendFile;
const chown = callbackify(fsp.chown);
exports.chown = chown;
const chmod = callbackify(fsp.chmod);
exports.chmod = chmod;
const copyFile = callbackify(fsp.copyFile);
exports.copyFile = copyFile;
const cp = callbackify(fsp.cp);
exports.cp = cp;
const lchown = callbackify(fsp.lchown);
exports.lchown = lchown;
const lchmod = callbackify(fsp.lchmod);
exports.lchmod = lchmod;
const link = callbackify(fsp.link);
exports.link = link;
const lstat = callbackify(fsp.lstat);
exports.lstat = lstat;
const lutimes = callbackify(fsp.lutimes);
exports.lutimes = lutimes;
const mkdir = callbackify(fsp.mkdir);
exports.mkdir = mkdir;
const mkdtemp = callbackify(fsp.mkdtemp);
exports.mkdtemp = mkdtemp;
const realpath = callbackify(fsp.realpath);
exports.realpath = realpath;
const open = callbackify(fsp.open);
exports.open = open;
const opendir = callbackify(fsp.opendir);
exports.opendir = opendir;
const readdir = callbackify(fsp.readdir);
exports.readdir = readdir;
const readFile = callbackify(fsp.readFile);
exports.readFile = readFile;
const readlink = callbackify(fsp.readlink);
exports.readlink = readlink;
const rename = callbackify(fsp.rename);
exports.rename = rename;
const rm = callbackify(fsp.rm);
exports.rm = rm;
const rmdir = callbackify(fsp.rmdir);
exports.rmdir = rmdir;
const stat = callbackify(fsp.stat);
exports.stat = stat;
const symlink = callbackify(fsp.symlink);
exports.symlink = symlink;
const truncate = callbackify(fsp.truncate);
exports.truncate = truncate;
const unlink = callbackify(fsp.unlink);
exports.unlink = unlink;
const utimes = callbackify(fsp.utimes);
exports.utimes = utimes;
const writeFile = callbackify(fsp.writeFile);
exports.writeFile = writeFile;
const close = notImplementedAsync("fs.close");
exports.close = close;
const createReadStream = notImplementedAsync("fs.createReadStream");
exports.createReadStream = createReadStream;
const createWriteStream = notImplementedAsync("fs.createWriteStream");
exports.createWriteStream = createWriteStream;
const exists = notImplementedAsync("fs.exists");
exports.exists = exists;
const fchown = notImplementedAsync("fs.fchown");
exports.fchown = fchown;
const fchmod = notImplementedAsync("fs.fchmod");
exports.fchmod = fchmod;
const fdatasync = notImplementedAsync("fs.fdatasync");
exports.fdatasync = fdatasync;
const fstat = notImplementedAsync("fs.fstat");
exports.fstat = fstat;
const fsync = notImplementedAsync("fs.fsync");
exports.fsync = fsync;
const ftruncate = notImplementedAsync("fs.ftruncate");
exports.ftruncate = ftruncate;
const futimes = notImplementedAsync("fs.futimes");
exports.futimes = futimes;
const lstatSync = notImplementedAsync("fs.lstatSync");
exports.lstatSync = lstatSync;
const read = notImplementedAsync("fs.read");
exports.read = read;
const readv = notImplementedAsync("fs.readv");
exports.readv = readv;
const realpathSync = notImplementedAsync("fs.realpathSync");
exports.realpathSync = realpathSync;
const statSync = notImplementedAsync("fs.statSync");
exports.statSync = statSync;
const unwatchFile = notImplementedAsync("fs.unwatchFile");
exports.unwatchFile = unwatchFile;
const watch = notImplementedAsync("fs.watch");
exports.watch = watch;
const watchFile = notImplementedAsync("fs.watchFile");
exports.watchFile = watchFile;
const write = notImplementedAsync("fs.write");
exports.write = write;
const writev = notImplementedAsync("fs.writev");
exports.writev = writev;

const _toUnixTimestamp = notImplementedAsync("fs._toUnixTimestamp");

exports._toUnixTimestamp = _toUnixTimestamp;
const appendFileSync = (0, _utils.notImplemented)("fs.appendFileSync");
exports.appendFileSync = appendFileSync;
const accessSync = (0, _utils.notImplemented)("fs.accessSync");
exports.accessSync = accessSync;
const chownSync = (0, _utils.notImplemented)("fs.chownSync");
exports.chownSync = chownSync;
const chmodSync = (0, _utils.notImplemented)("fs.chmodSync");
exports.chmodSync = chmodSync;
const closeSync = (0, _utils.notImplemented)("fs.closeSync");
exports.closeSync = closeSync;
const copyFileSync = (0, _utils.notImplemented)("fs.copyFileSync");
exports.copyFileSync = copyFileSync;
const cpSync = (0, _utils.notImplemented)("fs.cpSync");
exports.cpSync = cpSync;

const existsSync = () => false;

exports.existsSync = existsSync;
const fchownSync = (0, _utils.notImplemented)("fs.fchownSync");
exports.fchownSync = fchownSync;
const fchmodSync = (0, _utils.notImplemented)("fs.fchmodSync");
exports.fchmodSync = fchmodSync;
const fdatasyncSync = (0, _utils.notImplemented)("fs.fdatasyncSync");
exports.fdatasyncSync = fdatasyncSync;
const fstatSync = (0, _utils.notImplemented)("fs.fstatSync");
exports.fstatSync = fstatSync;
const fsyncSync = (0, _utils.notImplemented)("fs.fsyncSync");
exports.fsyncSync = fsyncSync;
const ftruncateSync = (0, _utils.notImplemented)("fs.ftruncateSync");
exports.ftruncateSync = ftruncateSync;
const futimesSync = (0, _utils.notImplemented)("fs.futimesSync");
exports.futimesSync = futimesSync;
const lchownSync = (0, _utils.notImplemented)("fs.lchownSync");
exports.lchownSync = lchownSync;
const lchmodSync = (0, _utils.notImplemented)("fs.lchmodSync");
exports.lchmodSync = lchmodSync;
const linkSync = (0, _utils.notImplemented)("fs.linkSync");
exports.linkSync = linkSync;
const lutimesSync = (0, _utils.notImplemented)("fs.lutimesSync");
exports.lutimesSync = lutimesSync;
const mkdirSync = (0, _utils.notImplemented)("fs.mkdirSync");
exports.mkdirSync = mkdirSync;
const mkdtempSync = (0, _utils.notImplemented)("fs.mkdtempSync");
exports.mkdtempSync = mkdtempSync;
const openSync = (0, _utils.notImplemented)("fs.openSync");
exports.openSync = openSync;
const opendirSync = (0, _utils.notImplemented)("fs.opendirSync");
exports.opendirSync = opendirSync;
const readdirSync = (0, _utils.notImplemented)("fs.readdirSync");
exports.readdirSync = readdirSync;
const readSync = (0, _utils.notImplemented)("fs.readSync");
exports.readSync = readSync;
const readvSync = (0, _utils.notImplemented)("fs.readvSync");
exports.readvSync = readvSync;
const readFileSync = (0, _utils.notImplemented)("fs.readFileSync");
exports.readFileSync = readFileSync;
const readlinkSync = (0, _utils.notImplemented)("fs.readlinkSync");
exports.readlinkSync = readlinkSync;
const renameSync = (0, _utils.notImplemented)("fs.renameSync");
exports.renameSync = renameSync;
const rmSync = (0, _utils.notImplemented)("fs.rmSync");
exports.rmSync = rmSync;
const rmdirSync = (0, _utils.notImplemented)("fs.rmdirSync");
exports.rmdirSync = rmdirSync;
const symlinkSync = (0, _utils.notImplemented)("fs.symlinkSync");
exports.symlinkSync = symlinkSync;
const truncateSync = (0, _utils.notImplemented)("fs.truncateSync");
exports.truncateSync = truncateSync;
const unlinkSync = (0, _utils.notImplemented)("fs.unlinkSync");
exports.unlinkSync = unlinkSync;
const utimesSync = (0, _utils.notImplemented)("fs.utimesSync");
exports.utimesSync = utimesSync;
const writeFileSync = (0, _utils.notImplemented)("fs.writeFileSync");
exports.writeFileSync = writeFileSync;
const writeSync = (0, _utils.notImplemented)("fs.writeSync");
exports.writeSync = writeSync;
const writevSync = (0, _utils.notImplemented)("fs.writevSync");
exports.writevSync = writevSync;