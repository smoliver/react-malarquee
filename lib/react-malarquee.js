(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define("ReactMalarquee", ["react", "react-dom", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["ReactMalarquee"] = factory(require("react"), require("react-dom"), require("prop-types"));
	else
		root["ReactMalarquee"] = factory(root["React"], root["ReactDOM"], root["PropTypes"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = {
  hoverToPause: false,
  fill: true,
  rate: 100
};

var containerStyle = {
  overflow: 'hidden',
  whiteSpace: 'nowrap'
};

var Marquee = function (_React$Component) {
  _inherits(Marquee, _React$Component);

  function Marquee(props) {
    _classCallCheck(this, Marquee);

    var _this = _possibleConstructorReturn(this, (Marquee.__proto__ || Object.getPrototypeOf(Marquee)).call(this, props));

    _this.state = {
      offset: 0,
      coppies: props.fill ? 2 : 1
    };

    _this.containerWidth = 0;
    _this.contentWidth = 0;

    _this.pauseOnEnter = _this.pauseOnEnter.bind(_this);
    _this.resumeOnLeave = _this.resumeOnLeave.bind(_this);
    _this.animate = _this.animate.bind(_this);
    _this.startAnimation = _this.startAnimation.bind(_this);
    _this.stopAnimation = _this.stopAnimation.bind(_this);
    _this.setupContentMeasuring = _this.setupContentMeasuring.bind(_this);
    _this.measureContent = _this.measureContent.bind(_this);
    _this.forceUpdate = _this.forceUpdate.bind(_this);
    return _this;
  }

  _createClass(Marquee, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.startAnimation();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stopAnimation();
      window.removeEventListener('resize', this.measurementCallback);
    }
  }, {
    key: 'pauseOnEnter',
    value: function pauseOnEnter() {
      this.stopAnimation();
    }
  }, {
    key: 'resumeOnLeave',
    value: function resumeOnLeave() {
      this.startAnimation();
    }
  }, {
    key: 'animate',
    value: function animate(lastStamp, curStamp) {
      var timeDif = (curStamp - lastStamp) / 1000;
      var offset = this.state.offset - this.props.rate * timeDif;
      if (-offset >= this.contentWidth) {
        if (this.props.fill) offset = offset % this.contentWidth;else offset = this.containerWidth + offset % this.contentWidth;
      }
      this.setState({
        offset: offset
      });

      // Make recursive call to animate to continue animation
      this.frameId = window.requestAnimationFrame(this.animate.bind(this, curStamp));
    }
  }, {
    key: 'startAnimation',
    value: function startAnimation() {
      var _this2 = this;

      if (this.frameId) return;
      this.frameId = window.requestAnimationFrame(function (timeStamp) {
        _this2.frameId = window.requestAnimationFrame(_this2.animate.bind(_this2, timeStamp));
      });
    }
  }, {
    key: 'stopAnimation',
    value: function stopAnimation() {
      window.cancelAnimationFrame(this.frameId);
      this.frameId = null;
    }
  }, {
    key: 'setupContentMeasuring',
    value: function setupContentMeasuring(container) {
      if (container === null) return;

      this.measureContent(container);
      this.measurementCallback = this.measureContent.bind(this, container);
      window.addEventListener('resize', this.measurementCallback);
    }
  }, {
    key: 'measureContent',
    value: function measureContent(container) {
      var content = container.firstChild;

      var containerWidth = container.offsetWidth;
      var contentWidth = content.offsetWidth;

      if (this.containerWidth != containerWidth || this.contentWidth != contentWidth) {
        this.containerWidth = containerWidth;
        this.contentWidth = contentWidth;

        if (this.props.fill) {
          var coppies = Math.ceil(containerWidth / contentWidth) + 1;

          if (coppies === this.state.coppies) return;

          this.setState({
            coppies: coppies
          });
        }
      }
    }
  }, {
    key: 'content',
    value: function content(_ref) {
      var offset = _ref.offset,
          coppies = _ref.coppies;

      var contentCoppies = [];
      for (var i = 0; i < coppies; ++i) {
        var style = {
          'display': 'inline-block',
          'transform': 'translateX(' + offset + 'px)',
          'whiteSpace': 'nowrap'
        };
        contentCoppies.push(_react2.default.createElement(
          'span',
          {
            style: style,
            key: i
          },
          this.props.children
        ));
      }
      return contentCoppies;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          hoverToPause = _props.hoverToPause,
          fill = _props.fill,
          rate = _props.rate,
          _props$className = _props.className,
          className = _props$className === undefined ? '' : _props$className,
          _props$style = _props.style,
          style = _props$style === undefined ? {} : _props$style,
          props = _objectWithoutProperties(_props, ['hoverToPause', 'fill', 'rate', 'className', 'style']);

      var handleMouseEnter = hoverToPause ? this.pauseOnEnter : null;
      var handleMouseLeave = hoverToPause ? this.resumeOnLeave.bind(this) : null;

      return _react2.default.createElement(
        'div',
        _extends({
          className: '' + className,
          style: _extends({}, containerStyle, style),
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
          ref: this.setupContentMeasuring
        }, props),
        this.content(this.state)
      );
    }
  }]);

  return Marquee;
}(_react2.default.Component);

Marquee.defaultProps = defaultProps;

exports.default = Marquee;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ })
/******/ ]);
});