module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Olark = function (_React$Component) {
    _inherits(Olark, _React$Component);

    function Olark() {
        _classCallCheck(this, Olark);

        return _possibleConstructorReturn(this, (Olark.__proto__ || Object.getPrototypeOf(Olark)).apply(this, arguments));
    }

    _createClass(Olark, [{
        key: 'windowExists',
        value: function windowExists() {
            return typeof window !== 'undefined';
        }
    }, {
        key: 'snippetExists',
        value: function snippetExists() {
            return this.windowExists() && !!window.olarkReact;
        }
    }, {
        key: 'olarkExists',
        value: function olarkExists() {
            return this.windowExists() && !!window.olark;
        }
    }, {
        key: 'olarkWasLaunched',
        value: function olarkWasLaunched() {
            return this.snippetExists() && !!window.olarkReact.olarkWasLaunched;
        }
    }, {
        key: 'containerExists',
        value: function containerExists() {
            return this.windowExists() && !!document.getElementById('olark-box-container');
        }
    }, {
        key: 'injectSnippet',
        value: function injectSnippet() {
            if (!this.props.siteId) {
                throw new Error("Olark component requires a `siteId` prop.");
            }

            if (this.windowExists() && !this.snippetExists()) {
                var siteId = this.props.siteId;
                var script = document.createElement('script');
                script.setAttribute('id', 'olark-react-snippet');
                script.setAttribute('type', 'type/javascript');
                script.setAttribute('async', true);
                script.innerHTML = '\n                window.olarkReact = function(systemConfig, localeConfig, boxConfig ) {\n                  ;(function(o,l,a,r,k,y){if(o.olark)return;\n                  r="script";y=l.createElement(r);r=l.getElementsByTagName(r)[0];\n                  y.async=1;y.src="//"+a;r.parentNode.insertBefore(y,r);\n                  y=o.olark=function(){k.s.push(arguments);k.t.push(+new Date)};\n                  y.extend=function(i,j){y("extend",i,j)};\n                  y.identify=function(i){y("identify",k.i=i)};\n                  y.configure=function(i,j){y("configure",i,j);k.c[i]=j};\n                  k=y._={s:[],t:[+new Date],c:{},l:a};\n                  })(window,document,"static.olark.com/jsclient/loader.js");\n\n                  // Run through all the system config.\n                  Object.keys(systemConfig || {}).forEach(function (key) {\n                    olark.configure(\'system.\' + key, systemConfig[key]);\n                  });\n\n                  // Run through all the local config.\n                  Object.keys(localeConfig || {}).forEach(function (key) {\n                    olark.configure(\'locale.\' + key, localeConfig[key]);\n                  });\n\n                  // Run through all the box config.\n                  Object.keys(boxConfig || {}).forEach(function (key) {\n                    olark.configure(\'box.\' + key, boxConfig[key]);\n                  });\n\n                  // Identify the site and mark the script as launched.\n                  olark.identify(\'' + siteId + '\');\n                  window.olarkReact.olarkWasLaunched = true;\n              };\n            ';
                document.body.appendChild(script);
            }
        }
    }, {
        key: 'launchOlark',
        value: function launchOlark() {
            if (this.snippetExists() && !this.olarkWasLaunched()) {
                window.olarkReact(this.props.systemConfig, this.props.localeConfig, this.props.boxConfig);
                window.olark('api.chat.onReady', function () {
                    var container = document.getElementById('olark-box-container');
                    var classes = container.className;
                    if (classes.indexOf('olark-loaded') === -1) {
                        container.className = container.className + ' olark-loaded';
                    }
                });
            }
        }
    }, {
        key: 'resetOlark',
        value: function resetOlark() {
            if (this.olarkExists()) {
                olark._.reset();
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.injectSnippet();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!this.olarkWasLaunched()) {
                this.launchOlark();
            } else if (!this.containerExists()) {
                this.resetOlark();
            }
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {
            return false;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { id: 'olark-box-container' });
        }
    }]);

    return Olark;
}(_react2.default.Component);

module.exports = exports = Olark;

/***/ })
/******/ ]);