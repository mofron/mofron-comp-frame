/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @file   frame.js
	 * @brief  frame component class
	 * @author simpart
	 */

	mofron.comp.Frame = function (_mofron$comp$Base) {
	    _inherits(_class, _mofron$comp$Base);

	    function _class() {
	        _classCallCheck(this, _class);

	        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	    }

	    _createClass(_class, [{
	        key: 'getTarget',
	        value: function getTarget() {
	            try {
	                return this.vdom.getChild(0);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }

	        /**
	         * initialize contents
	         * 
	         * @param disp : (bool) visible flag
	         */

	    }, {
	        key: 'initContents',
	        value: function initContents(vd, prm) {
	            try {
	                var frame = new mofron.util.Vdom('div');
	                frame.setStyle('border', 'solid 1px black');
	                vd.addChild(frame);

	                if ('number' === typeof prm) {
	                    this.size(prm, prm);
	                } else {
	                    this.size(100, 100);
	                }
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'size',
	        value: function size(hei, wid) {
	            try {
	                var _hei = hei === undefined ? null : hei;
	                var _wid = wid === undefined ? null : wid;
	                var style = this.getStyleTgt();

	                if (null === _hei && null === _wid) {
	                    return [style.getStyle('height'), style.getStyle('width')];
	                }

	                if ('number' != typeof _hei || 'number' != typeof _wid) {
	                    throw new Error('invalid parameter');
	                }

	                style.setStyle('height', _hei + 'px');
	                style.setStyle('width', _wid + 'px');
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'radius',
	        value: function radius(val) {
	            try {
	                var _val = val === undefined ? null : val;
	                var style = this.getStyleTgt();

	                if (null === _val) {
	                    var ret_val = style.getStyle('webkit-border-radius');
	                    if (null != ret_val) {
	                        return ret_val;
	                    }
	                    ret_val = style.getStyle('-moz-border-radius');
	                    if (null != ret_val) {
	                        return ret_val;
	                    }
	                    ret_val = style.getStyle('border-radius');
	                    if (null != ret_val) {
	                        return ret_val;
	                    }
	                    return null;
	                }

	                if ('number' != typeof val) {
	                    throw new Error('invalid parameter');
	                }

	                style.setStyle('webkit-border-radius', _val + 'px');
	                style.setStyle('-moz-border-radius', _val + 'px');
	                style.setStyle('border-radius', _val + 'px');
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'shadow',
	        value: function shadow(val) {
	            try {
	                var _val = val === undefined ? null : val;
	                var style = this.getStyleTgt();

	                if (null === _val) {
	                    return style.getStyle('box-shadow');
	                }

	                if ('number' != typeof val) {
	                    throw new Error('invalid parameter');
	                }
	                style.setStyle('box-shadow', val / 2 + 'px ' + val / 2 + 'px ' + val + 'px ' + '0px gray');
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}(mofron.comp.Base);

/***/ }
/******/ ]);