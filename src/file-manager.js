"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var path = require("path");
var jspm = require("jspm");
var jspm_config = require('jspm/lib/config');
jspm_config.loadSync();

exports.factory = function (less) {
  return (function (_less$FileManager) {
    _inherits(_class, _less$FileManager);

    function _class(options) {
      _classCallCheck(this, _class);

      _get(Object.getPrototypeOf(_class.prototype), "constructor", this).call(this);
      this.options = options;
    }

    _createClass(_class, [{
      key: "supports",
      value: function supports(filename) {
        return filename.startsWith(this.options.prefix);
      }
    }, {
      key: "supportsSync",
      value: function supportsSync(filename) {
        return this.supports(filename);
      }
    }, {
      key: "resolve",
      value: function resolve(filename, currentDirectory) {
        return jspm.locate(filename.slice(this.options.prefix.length)).then(function (filename) {
          var filepath = path.resolve(filename).replace(/\.js$/, '');
          return path.relative(currentDirectory, filepath);
        });
      }
    }, {
      key: "resolveSync",
      value: function resolveSync(filename, currentDirectory) {
        filename = jspm.locateSync(filename.slice(this.options.prefix.length));
        filename = path.resolve(filename).replace(/\.js$/, '');
        return path.relative(currentDirectory, filename);
      }
    }, {
      key: "loadFile",
      value: function loadFile(filename, currentDirectory) {
        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        var _this = this;

        return this.resolve(filename, currentDirectory).then(function (filename) {
          var _get2;

          return (_get2 = _get(Object.getPrototypeOf(_class.prototype), "loadFile", _this)).call.apply(_get2, [_this, filename, currentDirectory].concat(args));
        });
      }
    }, {
      key: "loadFileSync",
      value: function loadFileSync(filename, currentDirectory) {
        var _get3;

        filename = this.resolveSync(filename, currentDirectory);

        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        return (_get3 = _get(Object.getPrototypeOf(_class.prototype), "loadFileSync", this)).call.apply(_get3, [this, filename, currentDirectory].concat(args));
      }
    }]);

    return _class;
  })(less.FileManager);
};
