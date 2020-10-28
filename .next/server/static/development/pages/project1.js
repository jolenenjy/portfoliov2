module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/footer.tsx":
/*!*******************************!*\
  !*** ./components/footer.tsx ***!
  \*******************************/
/*! exports provided: Footer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.ts");
var _jsxFileName = "/Users/jolene.ng/portfoliov2/components/footer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(FooterContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }
    }, __jsx(Socials, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }, __jsx("a", {
      href: "https://www.linkedin.com/in/joleneng/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }
    }, __jsx(SocialIcon, {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fab",
      "data-icon": "linkedin-in",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }, __jsx("path", {
      fill: "currentColor",
      d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 15
      }
    }))), __jsx("a", {
      href: "https://www.instagram.com/jolenenjy/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }
    }, __jsx(SocialIcon, {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fab",
      "data-icon": "instagram",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, __jsx("path", {
      fill: "currentColor",
      d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 15
      }
    }))), __jsx("a", {
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    }, __jsx(SocialIcon, {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fas",
      "data-icon": "envelope",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }
    }, __jsx("path", {
      fill: "currentColor",
      d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z",
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 15
      }
    })))), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }
    }, "Designed & built with \u2661"));
  }

}
const FooterContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.footer.withConfig({
  displayName: "footer__FooterContainer",
  componentId: "i4zd6h-0"
})(["display:flex;max-width:1040px;margin:0 auto;justify-content:space-between;align-items:center;padding:", " 8px 150px 0;color:", ";@media (max-width:", "){width:90%;}@media (max-width:", "){padding:102px 8px 102px 0;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].space[9], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.grey3, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[0], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[1]);
const Socials = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "footer__Socials",
  componentId: "i4zd6h-1"
})(["display:flex;align-items:center;"]);
const SocialIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.withConfig({
  displayName: "footer__SocialIcon",
  componentId: "i4zd6h-2"
})(["height:20px;padding:0 16px 0 8px;color:", ";transition:", ";:hover{color:white;}@media (min-width:", "){display:none;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.grey2, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].animations.default, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[1]);
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/footer2.tsx":
/*!********************************!*\
  !*** ./components/footer2.tsx ***!
  \********************************/
/*! exports provided: Footer2, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer2", function() { return Footer2; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.ts");
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lottie */ "react-lottie");
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lottie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/data.json */ "./public/data.json");
var _public_data_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/data.json */ "./public/data.json", 1);
var _jsxFileName = "/Users/jolene.ng/portfoliov2/components/footer2.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];





class Footer2 extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: _public_data_json__WEBPACK_IMPORTED_MODULE_4__,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }
    }, __jsx(FooterContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, __jsx(react_lottie__WEBPACK_IMPORTED_MODULE_3___default.a, {
      options: defaultOptions,
      height: 380,
      width: 2400,
      resizeMode: "cover",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }
    })), __jsx(TextContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    }, __jsx(Socials, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }
    }, __jsx("a", {
      href: "https://www.linkedin.com/in/joleneng/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, __jsx(SocialIcon, {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fab",
      "data-icon": "linkedin-in",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 15
      }
    }, __jsx("path", {
      fill: "currentColor",
      d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    }))), __jsx("a", {
      href: "https://www.instagram.com/jolenenjy/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    }, __jsx(SocialIcon, {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fab",
      "data-icon": "instagram",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 15
      }
    }, __jsx("path", {
      fill: "currentColor",
      d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }))), __jsx("a", {
      href: "mailto:hello@joleneng.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, __jsx(SocialIcon, {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fas",
      "data-icon": "envelope",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      }
    }, __jsx("path", {
      fill: "currentColor",
      d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z",
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }
    })))), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }
    }, "Designed & built with \u2661")));
  }

}
const FooterContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.footer.withConfig({
  displayName: "footer2__FooterContainer",
  componentId: "sc-17nwbmk-0"
})(["display:flex;margin:0 auto;justify-content:flex-end;align-items:center;padding-top:80px;"]);
const TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.footer.withConfig({
  displayName: "footer2__TextContainer",
  componentId: "sc-17nwbmk-1"
})(["display:flex;margin:0 auto;justify-content:space-between;align-items:center;margin-top:-80px;padding:0px 8px 150px 8px;max-width:1040px;color:", ";@media (max-width:", "){width:90%;margin-top:-60px;padding:0px 8px 80px 8px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.grey3, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[1]);
const Socials = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "footer2__Socials",
  componentId: "sc-17nwbmk-2"
})(["display:flex;align-items:center;"]);
const SocialIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.withConfig({
  displayName: "footer2__SocialIcon",
  componentId: "sc-17nwbmk-3"
})(["height:20px;padding:0 16px 0 8px;color:", ";transition:", ";:hover{color:white;}@media (min-width:", "){display:none;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.grey2, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].animations.default, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[1]);
/* harmony default export */ __webpack_exports__["default"] = (Footer2);

/***/ }),

/***/ "./components/grid.tsx":
/*!*****************************!*\
  !*** ./components/grid.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Grid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jolene.ng/portfoliov2/components/grid.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function px(number) {
  return `${number}px`;
}

const GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "grid__GridContainer",
  componentId: "piem6t-0"
})(["display:grid;width:100%;gap:", ";grid-template-columns:", ";"], props => px(props.gap), props => props.columns);
function Grid(props) {
  const {
    gap = 0,
    columns = "1fr"
  } = props;
  return __jsx(GridContainer, _extends({
    gap: gap,
    columns: columns
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 10
    }
  }));
}

/***/ }),

/***/ "./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/*! exports provided: Header, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/jolene.ng/portfoliov2/components/header.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];







function Links() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return __jsx(Nav, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(NavLink, {
    style: {
      color: router.pathname == "/" ? "white" : _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.grey3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/playground",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx(NavLink, {
    style: {
      color: router.pathname == "/playground" ? "white" : _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.grey3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "Playground")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(NavLink, {
    style: {
      color: router.pathname == "/about" ? "white" : _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.grey3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "About")));
}

class Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(SidebarContainer, {
      style: {
        marginBottom: this.props.showInfo ? 55 : -82
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 7
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }
    }, __jsx(Logo, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }
    }, __jsx(Name, {
      viewBox: "0 0 333 161",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }
    }, __jsx("g", {
      id: "Page-1",
      stroke: _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.textSecondary,
      fill: "none",
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 15
      }
    }, __jsx("g", {
      id: "Asset-3",
      transform: "translate(3.000000, 4.000000)",
      strokeWidth: "6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }, __jsx("path", {
      d: "M24.21,62.57 L88.21,34.57 C88.21,34.57 43.02,165.32 2.21,152.57 C-13.79,147.57 87.59,76.57 95.21,76.57 C110.21,76.57 100.39,119.82 82.21,108.57 C61.21,95.57 144.21,21.57 146.21,2.57 C148.21,-16.43 104.21,101.57 119.21,111.57 C134.21,121.57 170.21,56.57 163.21,54.57 C156.21,52.57 131.21,94.57 144.21,106.57 C157.21,118.57 174.21,65.57 174.21,65.57 L165.21,103.57 C165.21,103.57 188.21,59.57 192.21,95.57 C196.21,131.57 220.21,67.57 215.21,58.57 C210.21,49.57 194.21,100.57 211.21,101.57 C228.21,102.57 248.21,85.57 261.21,85.57 C274.21,85.57 281.21,89.57 288.21,89.57 C295.21,89.57 307.21,85.57 307.21,85.57",
      id: "Path",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 19
      }
    }), __jsx("line", {
      x1: "326.31",
      y1: "78.01",
      x2: "326.21",
      y2: "77.57",
      id: "Path",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 19
      }
    })))))), __jsx(Links, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }
    }));
  }

}
const SidebarContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "header__SidebarContainer",
  componentId: "sc-1m3v38v-0"
})(["position:-webkit-sticky;position:sticky;top:0px;height:100px;display:flex;justify-content:space-between;align-items:center;background:hsl(240,60%,5%);z-index:1000;@media (min-width:", "){display:none;}@media (max-width:", "){justify-content:center;height:80px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[1], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[3]);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "header__Logo",
  componentId: "sc-1m3v38v-1"
})(["padding:0 8px;display:flex;justify-content:center;align-items:center;@media (max-width:", "){display:none;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[3]);
const Name = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.withConfig({
  displayName: "header__Name",
  componentId: "sc-1m3v38v-2"
})(["width:70px;"]);
const Nav = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div).withConfig({
  displayName: "header__Nav",
  componentId: "sc-1m3v38v-3"
})(["display:flex;justify-content:space-between;cursor:pointer;"]);
const NavLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].a).withConfig({
  displayName: "header__NavLink",
  componentId: "sc-1m3v38v-4"
})(["position:relative;padding:12px 12px;transition:", ";:hover{color:white !important;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].animations.default);
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/layout.tsx":
/*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
/*! exports provided: Layout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar */ "./components/sidebar.tsx");
/* harmony import */ var _sidebar2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar2 */ "./components/sidebar2.tsx");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header */ "./components/header.tsx");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer */ "./components/footer.tsx");
/* harmony import */ var _footer2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer2 */ "./components/footer2.tsx");
/* harmony import */ var _components_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/grid */ "./components/grid.tsx");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _styles_globalstyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/globalstyles */ "./styles/globalstyles.tsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "/Users/jolene.ng/portfoliov2/components/layout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];













const ShowInfo = props => {
  const {
    scrollY
  } = Object(framer_motion__WEBPACK_IMPORTED_MODULE_11__["useViewportScroll"])();
  const firstRange = [0, 340, 430, 520];
  const secondRange = [0, 840, 930, 1020];
  const opacityRange = [1, 1, 0.3, 0];
  const MoveRange = [0, 0, -50, -100];
  const firstOp = Object(framer_motion__WEBPACK_IMPORTED_MODULE_11__["useTransform"])(scrollY, firstRange, opacityRange);
  const firstMove = Object(framer_motion__WEBPACK_IMPORTED_MODULE_11__["useTransform"])(scrollY, firstRange, MoveRange);
  const secondOp = Object(framer_motion__WEBPACK_IMPORTED_MODULE_11__["useTransform"])(scrollY, secondRange, opacityRange);
  const secondMove = Object(framer_motion__WEBPACK_IMPORTED_MODULE_11__["useTransform"])(scrollY, secondRange, MoveRange);
  return __jsx("div", {
    style: {
      display: props.home ? "contents" : "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(TimeSection, {
    style: {
      marginTop: 182
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
    style: {
      opacity: firstOp,
      translateY: firstMove
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(TimeRange, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, "2019 - Present"), __jsx(CompanyTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, "Grab"), __jsx(CompanyDesc, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, "Delivery solutions"))), __jsx(TimeSection, {
    style: {
      marginTop: 394
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
    style: {
      opacity: secondOp,
      translateY: secondMove
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(TimeRange, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "2017 - 2019"), __jsx(CompanyTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "Govtech"), __jsx(CompanyDesc, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, "Government services"))), __jsx(TimeSection, {
    style: {
      marginTop: 394
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(TimeRange, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, "2012 - 2016"), __jsx(CompanyTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, "Past Projects"), __jsx(CompanyDesc, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "Industrial design")));
};

const ScrollIndicator = () => {
  const [width, setWidth] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](0);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    setWidth(window.innerWidth);
  });
  const {
    scrollYProgress
  } = Object(framer_motion__WEBPACK_IMPORTED_MODULE_11__["useViewportScroll"])();
  const ScrollRange = [0, 1];
  const WidthRange = [0, width];
  const ScrollWidth = Object(framer_motion__WEBPACK_IMPORTED_MODULE_11__["useTransform"])(scrollYProgress, ScrollRange, WidthRange);
  return __jsx(ScrollDiv, {
    style: {
      width: ScrollWidth
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  });
};

class Layout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 7
      }
    }, __jsx(_styles_globalstyles__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }
    }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }
    }, this.props.title), __jsx("meta", {
      charSet: "utf-8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "viewport",
      content: "initial-scale=1.0, width=device-width",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 11
      }
    })), this.props.project ? __jsx(ScrollIndicator, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 31
      }
    }) : "", __jsx(BodyContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }
    }, __jsx(_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }
    }), __jsx(LayoutGrid, {
      gap: 0,
      columns: "1fr 3fr",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }
    }, this.props.project ? __jsx(_sidebar2__WEBPACK_IMPORTED_MODULE_4__["default"], {
      showInfo: this.props.home,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 15
      }
    }, this.props.children2()) : __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 15
      }
    }, __jsx(_sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      showInfo: this.props.home,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }
    }), __jsx(ShowInfo, {
      home: this.props.home,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }
    })), __jsx(ContentContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }
    }, this.props.children))), this.props.about ? __jsx(_footer2__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 29
      }
    }) : __jsx(_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 43
      }
    }));
  }

}
const BodyContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "layout__BodyContainer",
  componentId: "vg5axk-0"
})(["max-width:1040px;margin:0 auto;@media (max-width:", "){width:90%;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_9__["default"].breakpoint[0]);
const ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "layout__ContentContainer",
  componentId: "vg5axk-1"
})(["max-width:", ";padding:0 8px;min-width:0;"], _styles_theme__WEBPACK_IMPORTED_MODULE_9__["default"].maxWidth);
const TimeRange = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h6.withConfig({
  displayName: "layout__TimeRange",
  componentId: "vg5axk-2"
})(["font-weight:", ";color:", ";text-transform:uppercase;"], _styles_theme__WEBPACK_IMPORTED_MODULE_9__["default"].fontWeights.semibold, _styles_theme__WEBPACK_IMPORTED_MODULE_9__["default"].colors.grey4);
const CompanyTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h2.withConfig({
  displayName: "layout__CompanyTitle",
  componentId: "vg5axk-3"
})(["margin-top:12px;"]);
const CompanyDesc = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h4.withConfig({
  displayName: "layout__CompanyDesc",
  componentId: "vg5axk-4"
})(["font-weight:", ";color:", ";margin-top:4px;"], _styles_theme__WEBPACK_IMPORTED_MODULE_9__["default"].fontWeights.regular, _styles_theme__WEBPACK_IMPORTED_MODULE_9__["default"].colors.lightgrey1);
const LayoutGrid = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_components_grid__WEBPACK_IMPORTED_MODULE_8__["default"]).withConfig({
  displayName: "layout__LayoutGrid",
  componentId: "vg5axk-5"
})(["@media (max-width:", "){grid-template-columns:1fr;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_9__["default"].breakpoint[1]);
const TimeSection = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "layout__TimeSection",
  componentId: "vg5axk-6"
})(["margin-left:8px;position:sticky;top:480px;overflow:hidden;@media (max-width:", "){display:none !important;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_9__["default"].breakpoint[1]);
const ScrollDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div).withConfig({
  displayName: "layout__ScrollDiv",
  componentId: "vg5axk-7"
})(["position:sticky;height:3px;top:0;background:", ";"], _styles_theme__WEBPACK_IMPORTED_MODULE_9__["default"].colors.lightgrey1);
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/otherprojects.tsx":
/*!**************************************!*\
  !*** ./components/otherprojects.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/jolene.ng/portfoliov2/components/otherprojects.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];






const OtherProjects = ({
  url1 = "/project1",
  proj1 = "Self Pick-Up",
  url2 = "/project2",
  proj2 = "Delivery features",
  url3 = "/project3",
  proj3 = "Parents Gateway"
}) => __jsx(Nav, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 3
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: url1,
  shallow: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }
}, __jsx(NavLink, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 7
  }
}, proj1)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: url2,
  shallow: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }
}, __jsx(NavLink, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 7
  }
}, proj2)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: url3,
  shallow: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }
}, __jsx(NavLink, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 7
  }
}, proj3)));

const Nav = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div).withConfig({
  displayName: "otherprojects__Nav",
  componentId: "sc-1qi6aik-0"
})(["display:flex;flex-direction:row;justify-content:space-between;margin:24px -8px 0 -8px;"]);
const NavLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].a).withConfig({
  displayName: "otherprojects__NavLink",
  componentId: "sc-1qi6aik-1"
})(["position:relative;font-size:", ";width:260px;padding:8px 8px;cursor:pointer;border-radius:8px;color:white;transition:", ";:hover{background:rgba(31,31,54,0.4);opacity:1;::after{transform:translateX(4px);}}::after{content:\"\u2192\";margin-left:8px;position:absolute;transition:", ";}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].fontSizes[4], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].animations.default, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].animations.default);
/* harmony default export */ __webpack_exports__["default"] = (OtherProjects);

/***/ }),

/***/ "./components/sidebar.tsx":
/*!********************************!*\
  !*** ./components/sidebar.tsx ***!
  \********************************/
/*! exports provided: Sidebar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/jolene.ng/portfoliov2/components/sidebar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];







function Links() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return __jsx(Nav, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    shallow: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(NavLink, {
    style: {
      color: router.pathname == "/" ? _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.textLink : "white",
      fontWeight: router.pathname == "/" ? _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].fontWeights.medium : _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].fontWeights.regular
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/playground",
    shallow: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(NavLink, {
    style: {
      color: router.pathname == "/playground" ? _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.textLink : "white",
      fontWeight: router.pathname == "/playground" ? _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].fontWeights.medium : _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].fontWeights.regular
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, "Playground")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx(NavLink, {
    style: {
      color: router.pathname == "/about" ? _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.textLink : "white",
      fontWeight: router.pathname == "/about" ? _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].fontWeights.medium : _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].fontWeights.regular
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, "About")));
}

class Sidebar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(SidebarContainer, {
      style: {
        marginBottom: this.props.showInfo ? 100 : -38
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 7
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }
    }, __jsx(Logo, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }
    }, __jsx("svg", {
      width: "120px",
      viewBox: "0 0 333 161",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }
    }, __jsx("g", {
      id: "Page-1",
      stroke: _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.textSecondary,
      fill: "none",
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 15
      }
    }, __jsx("g", {
      id: "Asset-3",
      transform: "translate(3.000000, 4.000000)",
      strokeWidth: "6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }
    }, __jsx("path", {
      d: "M24.21,62.57 L88.21,34.57 C88.21,34.57 43.02,165.32 2.21,152.57 C-13.79,147.57 87.59,76.57 95.21,76.57 C110.21,76.57 100.39,119.82 82.21,108.57 C61.21,95.57 144.21,21.57 146.21,2.57 C148.21,-16.43 104.21,101.57 119.21,111.57 C134.21,121.57 170.21,56.57 163.21,54.57 C156.21,52.57 131.21,94.57 144.21,106.57 C157.21,118.57 174.21,65.57 174.21,65.57 L165.21,103.57 C165.21,103.57 188.21,59.57 192.21,95.57 C196.21,131.57 220.21,67.57 215.21,58.57 C210.21,49.57 194.21,100.57 211.21,101.57 C228.21,102.57 248.21,85.57 261.21,85.57 C274.21,85.57 281.21,89.57 288.21,89.57 C295.21,89.57 307.21,85.57 307.21,85.57",
      id: "Path",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 19
      }
    }), __jsx("line", {
      x1: "326.31",
      y1: "78.01",
      x2: "326.21",
      y2: "77.57",
      id: "Path",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 19
      }
    })))))), __jsx(Links, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }
    }), __jsx(Socials, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }
    }, __jsx("a", {
      href: "https://www.linkedin.com/in/joleneng/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 11
      }
    }, __jsx(SocialIcon, {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fab",
      "data-icon": "linkedin-in",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }
    }, __jsx("path", {
      fill: "currentColor",
      d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 15
      }
    }))), __jsx("a", {
      href: "https://www.instagram.com/jolenenjy/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 11
      }
    }, __jsx(SocialIcon, {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fab",
      "data-icon": "instagram",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 13
      }
    }, __jsx("path", {
      fill: "currentColor",
      d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 15
      }
    }))), __jsx("a", {
      href: "mailto:hello@joleneng.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 11
      }
    }, __jsx(SocialIcon, {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fas",
      "data-icon": "envelope",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 13
      }
    }, __jsx("path", {
      fill: "currentColor",
      d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z",
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 15
      }
    })))), __jsx(Divider, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }
    }));
  }

}
const SidebarContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "sidebar__SidebarContainer",
  componentId: "sc-1ggffpa-0"
})(["position:-webkit-sticky;position:sticky;top:120px;height:360px;display:flex;flex-direction:column;@media (max-width:", "){display:none;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[1]);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "sidebar__Logo",
  componentId: "sc-1ggffpa-1"
})(["padding:0 8px;"]);
const Nav = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div).withConfig({
  displayName: "sidebar__Nav",
  componentId: "sc-1ggffpa-2"
})(["display:flex;flex-direction:column;justify-content:space-between;margin:24px 0px 0 0;"]);
const NavLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].a).withConfig({
  displayName: "sidebar__NavLink",
  componentId: "sc-1ggffpa-3"
})(["position:relative;width:160px;padding:8px 8px;cursor:pointer;border-radius:8px;:hover{background:rgba(31,31,54,0.4);}"]);
const Socials = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "sidebar__Socials",
  componentId: "sc-1ggffpa-4"
})(["display:flex;align-items:center;margin:32px 0 0 0;"]);
const SocialIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.withConfig({
  displayName: "sidebar__SocialIcon",
  componentId: "sc-1ggffpa-5"
})(["height:20px;padding:0 16px 0 8px;color:", ";transition:", ";:hover{color:", ";}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.grey2, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].animations.default, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.textLink);
const Divider = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "sidebar__Divider",
  componentId: "sc-1ggffpa-6"
})(["min-height:3px;margin:32px 0px 0 8px;width:160px;background:", ";"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.grey2);
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./components/sidebar2.tsx":
/*!*********************************!*\
  !*** ./components/sidebar2.tsx ***!
  \*********************************/
/*! exports provided: Sidebar2, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar2", function() { return Sidebar2; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/jolene.ng/portfoliov2/components/sidebar2.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];







function Links() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return __jsx(Nav, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    shallow: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(NavLink, {
    style: {
      color: router.pathname == "/" ? _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.textLink : "white",
      fontWeight: router.pathname == "/" ? _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].fontWeights.medium : _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].fontWeights.regular
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "Back Home")));
}

class Sidebar2 extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(SidebarContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }
    }, __jsx(Logo, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }
    }, __jsx("svg", {
      width: "120px",
      viewBox: "0 0 333 161",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }, __jsx("g", {
      id: "Page-1",
      stroke: _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.textSecondary,
      fill: "none",
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 15
      }
    }, __jsx("g", {
      id: "Asset-3",
      transform: "translate(3.000000, 4.000000)",
      strokeWidth: "6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }, __jsx("path", {
      d: "M24.21,62.57 L88.21,34.57 C88.21,34.57 43.02,165.32 2.21,152.57 C-13.79,147.57 87.59,76.57 95.21,76.57 C110.21,76.57 100.39,119.82 82.21,108.57 C61.21,95.57 144.21,21.57 146.21,2.57 C148.21,-16.43 104.21,101.57 119.21,111.57 C134.21,121.57 170.21,56.57 163.21,54.57 C156.21,52.57 131.21,94.57 144.21,106.57 C157.21,118.57 174.21,65.57 174.21,65.57 L165.21,103.57 C165.21,103.57 188.21,59.57 192.21,95.57 C196.21,131.57 220.21,67.57 215.21,58.57 C210.21,49.57 194.21,100.57 211.21,101.57 C228.21,102.57 248.21,85.57 261.21,85.57 C274.21,85.57 281.21,89.57 288.21,89.57 C295.21,89.57 307.21,85.57 307.21,85.57",
      id: "Path",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 19
      }
    }), __jsx("line", {
      x1: "326.31",
      y1: "78.01",
      x2: "326.21",
      y2: "77.57",
      id: "Path",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 19
      }
    })))))), __jsx(Links, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }
    }), this.props.children, __jsx(Divider, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }
    }));
  }

}
const SidebarContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "sidebar2__SidebarContainer",
  componentId: "qybiy2-0"
})(["position:-webkit-sticky;position:sticky;top:120px;height:400px;display:flex;flex-direction:column;@media (max-width:", "){display:none;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[1]);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "sidebar2__Logo",
  componentId: "qybiy2-1"
})(["padding:0 8px;"]);
const Nav = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div).withConfig({
  displayName: "sidebar2__Nav",
  componentId: "qybiy2-2"
})(["display:flex;flex-direction:column;justify-content:space-between;margin:24px 0px 0 0;"]);
const NavLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].a).withConfig({
  displayName: "sidebar2__NavLink",
  componentId: "qybiy2-3"
})(["position:relative;width:160px;padding:8px 8px 8px 28px;cursor:pointer;border-radius:8px;transition:", ";:hover{background:rgba(31,31,54,0.4);opacity:1;::before{transform:translateX(-4px);}}::before{content:\"\u2190\";margin-left:-20px;position:absolute;transition:", ";}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].animations.default, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].animations.default);
const Divider = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "sidebar2__Divider",
  componentId: "qybiy2-4"
})(["min-height:3px;margin:32px 0px 0 8px;width:160px;background:", ";"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.grey2);
/* harmony default export */ __webpack_exports__["default"] = (Sidebar2);

/***/ }),

/***/ "./components/topsection.tsx":
/*!***********************************!*\
  !*** ./components/topsection.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.ts");
var _jsxFileName = "/Users/jolene.ng/portfoliov2/components/topsection.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




const TopSection = ({
  title = "Default title",
  title2 = "Default title",
  title3 = "Default title",
  subtitle = "Default subtitle"
}) => __jsx(TopContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 3
  }
}, __jsx("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }
}, title), __jsx(AccentTitle, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }
}, title2), __jsx(DarkTitle, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }
}, title3), __jsx(Subtitle, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }
}, subtitle));

const TopContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "topsection__TopContainer",
  componentId: "sc-9qcv5k-0"
})(["width:100%;padding-top:102px;"]);
const AccentTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "topsection__AccentTitle",
  componentId: "sc-9qcv5k-1"
})(["color:#166def;"]);
const DarkTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "topsection__DarkTitle",
  componentId: "sc-9qcv5k-2"
})(["color:", ";"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.grey2);
const Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h4.withConfig({
  displayName: "topsection__Subtitle",
  componentId: "sc-9qcv5k-3"
})(["font-weight:", ";padding:16px 48px 0 2px;color:", ";@media (max-width:", "){padding:16px 24px 0 2px;}@media (max-width:", "){padding:16px 8px 0 2px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].fontWeights.regular, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.lightgrey1, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[1], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[2]);
/* harmony default export */ __webpack_exports__["default"] = (TopSection);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/project1.tsx":
/*!****************************!*\
  !*** ./pages/project1.tsx ***!
  \****************************/
/*! exports provided: Project1, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project1", function() { return Project1; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.tsx");
/* harmony import */ var _components_topsection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/topsection */ "./components/topsection.tsx");
/* harmony import */ var _components_otherprojects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/otherprojects */ "./components/otherprojects.tsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/jolene.ng/portfoliov2/pages/project1.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class Project1 extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.Introduction = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.Research = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.Design = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.Fix = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.Result = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  }

  render() {
    const {
      scrollY
    } = Object(framer_motion__WEBPACK_IMPORTED_MODULE_6__["useViewportScroll"])();

    const scrollIntro = () => window.scrollTo({
      top: this.Introduction.current.offsetTop - 290,
      behavior: "smooth"
    });

    const scrollResearch = () => window.scrollTo({
      top: this.Research.current.offsetTop - 120,
      behavior: "smooth"
    });

    const scrollDesign = () => window.scrollTo({
      top: this.Design.current.offsetTop - 120,
      behavior: "smooth"
    });

    const scrollFix = () => window.scrollTo({
      top: this.Fix.current.offsetTop - 120,
      behavior: "smooth"
    });

    const scrollResult = () => window.scrollTo({
      top: this.Result.current.offsetTop - 120,
      behavior: "smooth"
    });

    const test = () => __jsx(Nav, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 7
      }
    }, __jsx(NavLink, {
      style: {
        color: "white"
      },
      onClick: scrollIntro,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }
    }, "Introduction"), __jsx(NavLink, {
      style: {
        color: "white"
      },
      onClick: scrollResearch,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }
    }, "Fundamental Research"), __jsx(NavLink, {
      style: {
        color: "white"
      },
      onClick: scrollDesign,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }
    }, "Design Considerations"), __jsx(NavLink, {
      style: {
        color: "white"
      },
      onClick: scrollFix,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }
    }, "Post-launch fix"), __jsx(NavLink, {
      style: {
        color: "white"
      },
      onClick: scrollResult,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }
    }, "Results"));

    return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "Jolene Ng | Food Self Pick-up",
      project: true,
      children2: test,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 7
      }
    }, __jsx(_components_topsection__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Food self pick-up",
      title2: "",
      title3: "New business stream",
      subtitle: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }
    }), __jsx(Paragraph, {
      ref: this.Introduction,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }
    }, "Self pick-up is a new product developed as an extension of Grab's food delivery service. The idea is to allow customers to pick up their order from the restaurant themselves instead of having a driver deliver it."), __jsx(Subtitle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }
    }, "My role"), __jsx(Paragraph, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }
    }, "As the first designer on the new business team, I conducted the fundamental research, usability testing and designed the experience for both customers and merchants."), __jsx(FullImg, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }
    }), __jsx(Subtitle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }
    }, "The hypothesis"), __jsx(Paragraph, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }
    }, "The project was first initiated when the team looked into the different ways people were getting food. Apart from getting it delivered, they could also cook, eat out or get takeout. We realised there was an opportunity to provide users with an alternative option on the app by allowing them to order for pickup."), __jsx(Subtitle, {
      ref: this.Research,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }
    }, "Research"), __jsx(Paragraph, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }
    }, "At this point, we found that while we understood the problems people face with delivery, we still had a lot to learn how and why are would they takeout food. Hence, I planned for interview and concept testing sessions in both Singapore and Indonesia."), __jsx(FullImg2, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }
    }), __jsx(Paragraph3, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }
    }, "We spoke to both customers and merchants to dive deeper into the current struggles they face with getting and preparing takeout. We found that:"), __jsx(Subtitle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }
    }, "Key findings"), __jsx(List, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }
    }, __jsx(ListItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 11
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 13
      }
    }, "The main issue people face when getting takeout is with queueing as well as having to wait for the food to be prepared.")), __jsx(ListItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 11
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 13
      }
    }, "People tend to be less adventurous for takeout orders and like to find a few good spots near their surroundings e.g. home & office to frequent.")), __jsx(ListItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 11
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 13
      }
    }, "People are interested in being able to avoid the delivery cost by picking up their order on their own as getting delivery all the time would be expensive"))), __jsx(Subtitle, {
      ref: this.Design,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }
    }, "Design"), __jsx(Paragraph, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }
    }, "With that, we started mapping out the expected flow as well as how information will pass through from the customer to the merchant before working on the design details."), __jsx(Subtitle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }
    }, "Consideration #1:"), __jsx(Quote2, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }
    }, "Distance matters"), __jsx(Paragraph, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }
    }, "Given that when it comes to getting takeout, customers care more about how much they need to travel, we made the call to prioritise showing how far the restaurant is compared to other information to help with decison making."), __jsx(FullImg3, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 9
      }
    }), __jsx(Subtitle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }
    }, "Consideration #2:"), __jsx(Quote2, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }
    }, "Order collection"), __jsx(Paragraph, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }
    }, "When it came to order collection, there was a trade-off to make between accuracy (i.e. collecting the right order) and ease of use (i.e. how much effort is required to collect)."), __jsx(Paragraph2, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }
    }, "We considered requiring the customer to scan a qr code for better accuracy but decided to go with having a swipe button on the order screen instead. If the customer does not complete the order, the restaurant will be able to do so on their end after some time."), __jsx(FullImg4, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 9
      }
    }), __jsx(Subtitle, {
      ref: this.Fix,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }
    }, "Post-launch fix"), __jsx(Quote2, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }
    }, "High cancellation rates"), __jsx(Paragraph, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 9
      }
    }, "When the feature first launched, we noticed an unusually high number of cancellations and realised most of it was coming from customers who were thought they were made a delivery order. Even though we were aware of this possibilty before launch, we mistakenly thought that subtle cues were sufficient to differentiate the two."), __jsx(Paragraph2, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }
    }, "A quick-fix was implemented to add in stornger visual cues that this is a self pick-up order. With the fix,", " ", __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 11
      }
    }, "cancellation rates went down from 24% to 5% in a few weeks "), " and is nowadays holding steady at 0.5%"), __jsx(FullImg5, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 9
      }
    }), __jsx(Subtitle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 9
      }
    }, "Design snapshot "), __jsx(FullImg6, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }
    }), __jsx(Subtitle, {
      ref: this.Result,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }
    }, "Results"), __jsx(Paragraph, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 9
      }
    }, "The Self Pick-up product has been steadily growing since the inital pilot and is now available in 6 countries across South East Asia with over 360k restuarants onboard. Additonally, with the current covid-reality, self pick-up has been a timely addition to serve the needs of customers who wanted to takeout food but did not want to spend too much time outdoors."), __jsx(Subtitle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 9
      }
    }, "Reflection"), __jsx(Paragraph, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 9
      }
    }, "It has been a facinating journey seeing a product grow from a blank power point slide to serving thousands of orders daily. In particular, I cherish the experience of working closesly with the team to roll out fixes when things were not going as planned after launch."), __jsx(Paragraph2, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 9
      }
    }, "Since this iteration, we have since also made further improvements and enhancements like showing a map view of nearby restaurants. I'm excited to see to see how the produt will continue to grow as part of Grab's super app."), __jsx(FullImg7, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 9
      }
    }), __jsx(Subtitle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 9
      }
    }, "Other Projects "), __jsx(_components_otherprojects__WEBPACK_IMPORTED_MODULE_5__["default"], {
      url1: "/project2",
      proj1: "Delivery Features",
      url2: "/project3",
      proj2: "Parents Gateway",
      url3: "/project4",
      proj3: "Housing resale portal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 9
      }
    }));
  }

}
const Nav = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "project1__Nav",
  componentId: "wgu7m9-0"
})(["display:flex;flex-direction:column;justify-content:space-between;margin:16px 0px 0 0;"]);
const NavLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "project1__NavLink",
  componentId: "wgu7m9-1"
})(["position:relative;width:200px;padding:8px 8px;cursor:pointer;border-radius:8px;transition:", ";:hover{background:rgba(31,31,54,0.4);opacity:1;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].animations.default);
const Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h4.withConfig({
  displayName: "project1__Subtitle",
  componentId: "wgu7m9-2"
})(["margin-top:48px;font-weight:", ";color:", ";@media (max-width:", "){margin-top:48px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].fontWeights.semibold, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.lightgrey3, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[2]);
const Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "project1__Paragraph",
  componentId: "wgu7m9-3"
})(["margin-top:8px;a{font-size:", ";}@media (max-width:", "){margin-top:16px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].fontSizes[4], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[2]);
const Paragraph2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "project1__Paragraph2",
  componentId: "wgu7m9-4"
})(["margin-top:16px;color:", ";@media (max-width:", "){margin-top:16px;}a{font-size:", ";}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.lightgrey1, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[2], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].fontSizes[4]);
const Paragraph3 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "project1__Paragraph3",
  componentId: "wgu7m9-5"
})(["margin-top:40px;@media (max-width:", "){margin-top:16px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[2]);
const List = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "project1__List",
  componentId: "wgu7m9-6"
})(["margin-left:21px;margin-top:-8px;"]);
const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
  displayName: "project1__ListItem",
  componentId: "wgu7m9-7"
})(["padding-top:16px;"]);
const Quote2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "project1__Quote2",
  componentId: "wgu7m9-8"
})(["margin-top:12px;margin-bottom:12px;color:", ";@media (max-width:", "){margin-top:24px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.lightgrey1, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[2]);
const FullImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "project1__FullImg",
  componentId: "wgu7m9-9"
})(["width:100%;height:320px;border-radius:12px;margin-top:48px;margin-bottom:64px;background:rgba(31,31,54,0.4);background-image:url(/spk-1.png);background-size:cover;background-position:center;@media (max-width:", "){background-size:contain;background-repeat:no-repeat;height:190px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[2]);
const FullImg2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "project1__FullImg2",
  componentId: "wgu7m9-10"
})(["width:100%;height:270px;border-radius:12px;margin-top:40px;margin-bottom:40px;background-image:url(/spk-2.png);background-size:cover;background-position:center;@media (max-width:", "){background-size:contain;background-repeat:no-repeat;height:150px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[2]);
const FullImg3 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "project1__FullImg3",
  componentId: "wgu7m9-11"
})(["width:100%;height:270px;border-radius:12px;margin-top:40px;margin-bottom:56px;background:rgba(31,31,54,0.4);background-image:url(/spk-3.png);background-size:cover;background-position:center;@media (max-width:", "){background-size:contain;background-repeat:no-repeat;height:170px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[2]);
const FullImg4 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "project1__FullImg4",
  componentId: "wgu7m9-12"
})(["width:100%;height:270px;border-radius:12px;margin-top:40px;margin-bottom:56px;background:rgba(31,31,54,0.4);background-image:url(/spk-4.png);background-size:cover;background-position:center;@media (max-width:", "){background-size:contain;background-repeat:no-repeat;height:170px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[2]);
const FullImg5 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "project1__FullImg5",
  componentId: "wgu7m9-13"
})(["width:100%;height:370px;border-radius:12px;margin-top:40px;margin-bottom:56px;background:rgba(31,31,54,0.4);background-image:url(/spk-5.png);background-size:cover;background-position:center;@media (max-width:", "){background-size:contain;background-repeat:no-repeat;height:170px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[2]);
const FullImg6 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "project1__FullImg6",
  componentId: "wgu7m9-14"
})(["width:100%;height:800px;border-radius:12px;margin-top:40px;margin-bottom:56px;background:rgba(31,31,54,0.4);background-image:url(/spk-6.png);background-size:cover;background-position:center;@media (max-width:", "){background-size:contain;background-repeat:no-repeat;height:500px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[2]);
const FullImg7 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "project1__FullImg7",
  componentId: "wgu7m9-15"
})(["width:100%;height:300px;border-radius:12px;margin-top:48px;margin-bottom:48px;background:rgba(31,31,54,0.4);background-image:url(/spk-7.png);background-size:cover;background-position:center;@media (max-width:", "){height:200px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[2]);
/* harmony default export */ __webpack_exports__["default"] = (Project1);

/***/ }),

/***/ "./public/data.json":
/*!**************************!*\
  !*** ./public/data.json ***!
  \**************************/
/*! exports provided: v, fr, ip, op, w, h, nm, ddd, assets, layers, markers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.7.1\",\"fr\":29.9700012207031,\"ip\":0,\"op\":89.0000036250443,\"w\":2559,\"h\":400,\"nm\":\"about\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"torso Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1287.464,88.858,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[70.297,35.416,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.474,1.332],[10.683,-3.273],[14.601,-3.014],[0,0],[-17.101,5.096],[-9.774,3.464],[-1.528,-3.291]],\"o\":[[-1.441,-4.058],[-19.012,5.825],[3.889,6.04],[0,0],[7.861,-2.344],[0.949,1.589],[-0.329,-2.491]],\"v\":[[44.48,-7.182],[31.453,-13.705],[-45.738,4.298],[-39.387,14.673],[13.041,1.755],[41.845,-7.892],[45.737,-0.475]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.999999940162,0.999999940162,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":6,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[77.447,55.909],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-29.553,4.442],[-11.9,-32.164],[17.101,-5.097],[0,0],[15.632,11.259]],\"o\":[[0,0],[0,0],[-17.1,5.096],[0,0],[-3.971,-2.86]],\"v\":[[31.252,-35.166],[70.047,4.976],[20.192,22.248],[-32.235,35.166],[-66.075,-8.157]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.086274509804,0.427450980392,0.937254901961,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[70.296,35.416],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":90.0000036657751,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"head Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1378.18,81.999,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[49.034,36.719,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-1.885,2.089],[-6.893,1.858],[-0.429,-2.874],[0.805,-3.105],[0.44,-2.719],[2.33,0.697]],\"o\":[[0,0],[1.885,-2.088],[5.151,-1.389],[0.573,3.824],[-1.443,5.568],[-0.44,2.719],[-2.329,-0.698]],\"v\":[[-11.088,0.74],[-11.206,-3.104],[1.924,-11.334],[12.518,-9.296],[7.973,2.026],[11.124,9.743],[1.337,12.025]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.886274509804,0.721568627451,0.666666666667,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[13.341,16.617],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[12.786,2.91],[13.225,10.168],[-3.298,-3.884],[-10.717,-3.848],[-4.652,9.237],[0.182,2.514]],\"o\":[[-9.233,-2.101],[-12.335,-9.487],[8.396,9.873],[22.125,7.945],[1.235,-2.452],[-3.556,7.494]],\"v\":[[8.826,2.71],[-17.945,-10.295],[-36.082,-12.233],[-0.39,13.641],[35.226,0.815],[36.724,-6.708]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.999999940162,0.999999940162,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":9,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[57.94,51.601],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-13.085,-3.027],[-8.42,-4.117],[-12.891,-5.785],[4.653,-9.237],[22.125,7.945],[2.665,9.767]],\"o\":[[0,0],[13.084,3.027],[8.421,4.116],[9.551,4.286],[-4.652,9.237],[-14.007,-5.03],[-1.643,-6.023]],\"v\":[[-43.696,-29.694],[-23.362,-33.442],[-2.732,-19.256],[27.681,-8.553],[39.043,15.698],[3.427,28.524],[-37.285,-5.494]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.095291107776,0.109411075068,0.264730715284,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[54.123,36.719],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":90.0000036657751,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"right arm Outlines 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":11,\"s\":[25.364]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":38,\"s\":[25.364]},{\"t\":49.0000019958109,\"s\":[0]}],\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":0,\"s\":[1274.463,52.435,0],\"to\":[1.011,-2.167,0],\"ti\":[-0.212,0.169,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":11,\"s\":[1280.826,40.799,0],\"to\":[0.487,-0.387,0],\"ti\":[-0.212,-0.331,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":38,\"s\":[1280.826,40.799,0],\"to\":[0.335,0.524,0],\"ti\":[-1.167,2.5,0]},{\"t\":49.0000019958109,\"s\":[1274.463,52.435,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[49.186,11.914,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":0,\"s\":[{\"i\":[[-2.429,-0.883],[0,0],[13.587,-3.371]],\"o\":[[0,0],[0,0],[3.378,1.194]],\"v\":[[-2.855,2.85],[11.753,-2.713],[-11.752,-0.339]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":11,\"s\":[{\"i\":[[-2.429,-0.883],[0,0],[16.991,-9.455]],\"o\":[[0,0],[0,0],[3.378,1.194]],\"v\":[[0.905,3.613],[12.98,-3.792],[-6.339,1.576]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":38,\"s\":[{\"i\":[[-2.429,-0.883],[0,0],[16.991,-9.455]],\"o\":[[0,0],[0,0],[3.378,1.194]],\"v\":[[0.905,3.613],[12.98,-3.792],[-6.339,1.576]],\"c\":true}]},{\"t\":49.0000019958109,\"s\":[{\"i\":[[-2.429,-0.883],[0,0],[13.587,-3.371]],\"o\":[[0,0],[0,0],[3.378,1.194]],\"v\":[[-2.855,2.85],[11.753,-2.713],[-11.752,-0.339]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":4,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.095291107776,0.109411075068,0.264730715284,1],\"ix\":4},\"o\":{\"a\":0,\"k\":77,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[71.453,18.796],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":0,\"s\":[{\"i\":[[0.683,0.55],[7.423,1.26],[0,0],[-7.261,-3.247]],\"o\":[[-9.327,-7.51],[0,0],[10.544,2.977],[-0.235,-0.555]],\"v\":[[19.273,6.198],[-16.697,-7.357],[-17.757,-3.681],[15.921,7.842]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":11,\"s\":[{\"i\":[[0.683,0.55],[7.423,1.26],[0,0],[-7.261,-3.247]],\"o\":[[-9.327,-7.51],[0,0],[9.494,2.328],[-0.235,-0.555]],\"v\":[[19.273,6.198],[-13.238,-12.317],[-15.523,-8.89],[15.921,7.842]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":38,\"s\":[{\"i\":[[0.683,0.55],[7.423,1.26],[0,0],[-7.261,-3.247]],\"o\":[[-9.327,-7.51],[0,0],[9.494,2.328],[-0.235,-0.555]],\"v\":[[19.273,6.198],[-13.238,-12.317],[-15.523,-8.89],[15.921,7.842]],\"c\":true}]},{\"t\":49.0000019958109,\"s\":[{\"i\":[[0.683,0.55],[7.423,1.26],[0,0],[-7.261,-3.247]],\"o\":[[-9.327,-7.51],[0,0],[10.544,2.977],[-0.235,-0.555]],\"v\":[[19.273,6.198],[-16.697,-7.357],[-17.757,-3.681],[15.921,7.842]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.999999940162,0.999999940162,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":7,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[56.313,15.134],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":0,\"s\":[{\"i\":[[36.525,2.913],[0,0],[0,0],[0,0]],\"o\":[[0,0],[12.482,3.525],[0,0],[-14.284,-6.327]],\"v\":[[-28.399,-10.087],[-30.581,-2.523],[6.325,10.087],[30.581,1.569]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":11,\"s\":[{\"i\":[[31.657,8.731],[0,0],[0,0],[0,0]],\"o\":[[0,0],[11.247,4.264],[0,0],[-15.707,-1.899]],\"v\":[[-24.088,-14.639],[-26.27,-7.076],[6.325,10.087],[30.828,-5.338]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":38,\"s\":[{\"i\":[[31.657,8.731],[0,0],[0,0],[0,0]],\"o\":[[0,0],[11.247,4.264],[0,0],[-15.707,-1.899]],\"v\":[[-24.088,-14.639],[-26.27,-7.076],[6.325,10.087],[30.828,-5.338]],\"c\":true}]},{\"t\":49.0000019958109,\"s\":[{\"i\":[[36.525,2.913],[0,0],[0,0],[0,0]],\"o\":[[0,0],[12.482,3.525],[0,0],[-14.284,-6.327]],\"v\":[[-28.399,-10.087],[-30.581,-2.523],[6.325,10.087],[30.581,1.569]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":4,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.086274509804,0.427450980392,0.937254901961,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[67.541,13.492],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":90.0000036657751,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"right arm Outlines 3\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":11,\"s\":[35.364]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":38,\"s\":[35.364]},{\"t\":49.0000019958109,\"s\":[0]}],\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":0,\"s\":[1274.463,52.435,0],\"to\":[1.011,-2.167,0],\"ti\":[-0.212,0.169,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":11,\"s\":[1284.576,39.299,0],\"to\":[0.487,-0.387,0],\"ti\":[-0.212,0.169,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":38,\"s\":[1284.576,39.299,0],\"to\":[0.487,-0.387,0],\"ti\":[-1.167,2.5,0]},{\"t\":49.0000019958109,\"s\":[1274.463,52.435,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[49.186,11.914,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":11,\"s\":[{\"i\":[[0,0],[10.031,-0.811],[3.239,-2.584],[-3.293,-0.176],[-3.508,0.025],[-4.036,-1.004]],\"o\":[[0,0],[-5.776,0.467],[-3.033,2.42],[3.222,0.173],[3.508,-0.026],[4.037,1.004]],\"v\":[[19.728,-2.566],[-6.48,-3.754],[-17.341,-3.277],[-15.326,2.462],[-6.448,1.735],[16.336,4.858]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":17,\"s\":[{\"i\":[[0,0],[10.591,3.014],[3.59,-0.969],[-1.592,-1.987],[-3.385,-0.92],[-4.036,-1.004]],\"o\":[[0,0],[-5.574,-1.586],[-3.746,1.011],[2.161,2.697],[3.864,1.05],[4.037,1.004]],\"v\":[[19.728,-2.566],[-5.803,-6.688],[-13.691,-9.28],[-14.923,-3.384],[-5.771,-1.199],[16.336,4.858]],\"c\":true}]},{\"i\":{\"x\":0.452,\"y\":1},\"o\":{\"x\":0.181,\"y\":0},\"t\":22,\"s\":[{\"i\":[[0,0],[10.031,-0.811],[3.239,-2.584],[-3.293,-0.176],[-3.508,0.025],[-4.036,-1.004]],\"o\":[[0,0],[-5.776,0.467],[-3.033,2.42],[3.222,0.173],[3.508,-0.026],[4.037,1.004]],\"v\":[[19.728,-2.566],[-6.48,-3.754],[-16.223,-3.254],[-14.208,2.486],[-6.448,1.735],[16.336,4.858]],\"c\":true}]},{\"i\":{\"x\":0.462,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":24,\"s\":[{\"i\":[[0,0],[10.031,-0.811],[3.239,-2.584],[-3.293,-0.176],[-3.508,0.025],[-4.036,-1.004]],\"o\":[[0,0],[-5.776,0.467],[-3.033,2.42],[3.222,0.173],[3.508,-0.026],[4.037,1.004]],\"v\":[[19.728,-2.566],[-6.48,-3.754],[-16.591,-1.696],[-14.576,4.044],[-6.448,1.735],[16.336,4.858]],\"c\":true}]},{\"i\":{\"x\":0.461,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":31,\"s\":[{\"i\":[[0,0],[10.591,3.014],[3.59,-0.969],[-1.592,-1.987],[-3.385,-0.92],[-4.036,-1.004]],\"o\":[[0,0],[-5.574,-1.586],[-3.746,1.011],[2.161,2.697],[3.864,1.05],[4.037,1.004]],\"v\":[[19.728,-2.566],[-5.803,-6.688],[-13.691,-9.28],[-14.923,-3.384],[-5.771,-1.199],[16.336,4.858]],\"c\":true}]},{\"i\":{\"x\":0.7,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":36,\"s\":[{\"i\":[[0,0],[10.031,-0.811],[3.239,-2.584],[-3.293,-0.176],[-3.508,0.025],[-4.036,-1.004]],\"o\":[[0,0],[-5.776,0.467],[-3.033,2.42],[3.222,0.173],[3.508,-0.026],[4.037,1.004]],\"v\":[[19.728,-2.566],[-6.48,-3.754],[-17.341,-3.277],[-15.326,2.462],[-6.448,1.735],[16.336,4.858]],\"c\":true}]},{\"t\":39.0000015885026,\"s\":[{\"i\":[[0,0],[10.031,-0.811],[3.239,-2.584],[-3.293,-0.176],[-3.508,0.025],[-4.036,-1.004]],\"o\":[[0,0],[-5.776,0.467],[-3.033,2.42],[3.222,0.173],[3.508,-0.026],[4.037,1.004]],\"v\":[[19.728,-2.566],[-6.48,-3.754],[-17.341,-3.277],[-15.326,2.462],[-6.448,1.735],[16.336,4.858]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":4,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.884375,0.719890579523,0.668022784065,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[20.623,6.111],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":90.0000036657751,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"left arm Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1350.011,114.935,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[15.004,52.616,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.163,-24.887],[0,0],[10.552,19.388],[0,0]],\"o\":[[-0.247,0.824],[2.01,-16.071],[-12.849,-23.605],[0,0]],\"v\":[[-1.524,40.047],[6.595,39.856],[4.202,-17.266],[-14.754,-3.9]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.086274509804,0.427450980392,0.937254901961,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[15.004,41.121],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.084,-4.004],[-1.249,-2.74],[-2.165,4.28],[-0.667,3.283],[0.242,2.816]],\"o\":[[0,0],[0.067,3.194],[1.231,2.701],[2.166,-4.281],[0.666,-3.283],[-0.243,-2.816]],\"v\":[[-1.858,-10.374],[-1.727,0.726],[-5.192,11.758],[4.1,10.537],[5.503,-0.41],[6.199,-12.001]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.886274509804,0.721568627451,0.666666666667,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[15.315,90.165],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":90.0000036657751,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\"left leg Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1196.625,122.978,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[61.028,24.431,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-2.671,-4.819],[-1.324,0.203],[-0.095,0.223],[0,0],[2.525,-0.574]],\"o\":[[3.853,-0.614],[0.101,-0.225],[0,0],[0,0],[5.136,8.125]],\"v\":[[2.399,11.244],[10.519,9.973],[10.812,9.3],[-6.851,-11.245],[-10.812,-10.411]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.144646797928,0.095291107776,0.264730715284,1],\"ix\":4},\"o\":{\"a\":0,\"k\":33,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[110.516,11.494],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[4.812,-3.4],[-0.578,-0.716],[-15.199,3.296],[0,0]],\"o\":[[-48.987,4.604],[1.171,1.547],[14.54,-6.418],[15.198,-3.297],[0,0]],\"v\":[[38.905,-13.85],[-42.948,10.389],[-40.341,13.851],[-0.951,0.084],[42.948,-7.553]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.999999940162,0.999999940162,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":9,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[78.857,28.904],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[30.832,-24.49],[-1.271,-1.572],[-15.199,3.297],[0,0]],\"o\":[[0,0],[4.351,4.847],[14.541,-6.418],[15.198,-3.297],[0,0]],\"v\":[[27.621,-21.252],[-45.762,10.938],[-37.527,21.252],[1.862,7.485],[45.762,-0.151]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.095291107776,0.110475240969,0.264730715284,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[76.044,21.502],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[1.888,-0.571],[3.515,-1.196],[-7.539,-2.485],[-1.643,1.38],[0,0]],\"o\":[[0,0],[-1.888,0.571],[-3.515,1.195],[7.54,2.485],[1.644,-1.381],[0,0]],\"v\":[[13.659,-6.005],[6.522,-3.121],[-16.13,-7.72],[2.537,6.431],[12.771,5.724],[19.646,0.686]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.886274509804,0.721568627451,0.666666666667,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[19.895,39.696],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":90.0000036657751,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":7,\"ty\":4,\"nm\":\"right leg Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1180.643,103.64,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[60.247,23.139,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[1.515,-0.271],[-4.994,-7.879],[0,0],[0,0]],\"o\":[[1.198,1.85],[3.978,-0.753],[0,0],[0,0]],\"v\":[[-8.588,-8.162],[2.124,8.554],[8.585,7.374],[-6.233,-8.554]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.095291107776,0.109411075068,0.264730715284,1],\"ix\":4},\"o\":{\"a\":0,\"k\":33,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[111.659,8.804],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[7.884,-5.368],[0,0],[-14.859,4.592],[0,0]],\"o\":[[-38.876,3.458],[1.983,2.164],[14.541,-6.418],[18.729,-5.788],[0,0]],\"v\":[[40.625,-16.079],[-42.225,13.218],[-39.685,16.08],[-4.073,1.077],[42.225,-9.454]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.999999940162,0.999999940162,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":9,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[78.019,25.633],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[29.428,-25.674],[0,0],[-14.859,4.592],[0,0]],\"o\":[[0,0],[6.96,7.274],[14.541,-6.418],[18.729,-5.788],[0,0]],\"v\":[[30.362,-20.731],[-45.18,11.585],[-36.73,20.731],[-1.118,5.728],[45.18,-4.803]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.095291107776,0.109411075068,0.264730715284,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[75.064,20.981],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[3.771,0.902],[4.175,-1.088],[-3.766,-2.264],[-4.148,1.629],[0,0]],\"o\":[[0,0],[-3.771,-0.902],[-4.175,1.088],[3.767,2.265],[4.149,-1.63],[0,0]],\"v\":[[12.614,-4.067],[5.951,-2.85],[-14.547,-7.993],[-2.377,3.912],[10.267,7.452],[18.722,2.761]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.886274509804,0.721568627451,0.666666666667,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[18.972,36.947],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":90.0000036657751,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":8,\"ty\":4,\"nm\":\"bg Outlines 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1279.3,300.792,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[1279.551,305.773,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.36,-0.754],[-0.795,0.469],[0,0]],\"o\":[[0,0],[1.805,3.789],[5.055,-2.985],[0,0]],\"v\":[[-14.458,-22.29],[-17.693,-21.413],[16.284,22.285],[11.382,2.203]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.144646797928,0.095291107776,0.264730715284,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[1239.196,106.72],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":90.0000036657751,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":9,\"ty\":4,\"nm\":\"bg Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1279.3,336.792,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[1279.551,305.773,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-792.633,0],[0,0],[0,0]],\"o\":[[792.633,0],[0,0],[0,0]],\"v\":[[30.678,-305.218],[1279.301,305.829],[-1279.301,305.829]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"gf\",\"o\":{\"a\":0,\"k\":100,\"ix\":10},\"r\":2,\"bm\":0,\"g\":{\"p\":3,\"k\":{\"a\":0,\"k\":[0,0.051,0.051,0.114,0.5,0.051,0.051,0.114,1,0.051,0.051,0.114,0,0,0.478,0.5,1,1],\"ix\":9}},\"s\":{\"a\":0,\"k\":[25.18,35.883],\"ix\":5},\"e\":{\"a\":0,\"k\":[26.117,-222.492],\"ix\":6},\"t\":1,\"nm\":\"Gradient Fill 1\",\"mn\":\"ADBE Vector Graphic - G-Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[1279.551,305.468],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":90.0000036657751,\"st\":0,\"bm\":0}],\"markers\":[]}");

/***/ }),

/***/ "./styles/globalstyles.tsx":
/*!*********************************!*\
  !*** ./styles/globalstyles.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.ts");


const GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`

html{
    background: hsl(240, 60%, 5%);
    color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.lightgrey2};
}


@media (max-width: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].breakpoint[0]}){
  body:before, body:after{ 
    max-width: 90vw;
    background: -webkit-linear-gradient(0deg,#242A2E 1px,transparent 0px) 0 0 / calc(90vw/4) auto;
  }
}

@media (max-width: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].breakpoint[1]}){
body:before, body:after{ 
    background: -webkit-linear-gradient(0deg,#191D20 1px,transparent 0px) 0 0 / calc(90vw/2) auto;
  }
}

h1 {
    font-size: 60px;
    letter-spacing: -0.02em;
    line-height: 80px;
    font-weight: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].fontWeights.bold};
}

@media (max-width: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].breakpoint[1]}){
h1 {
    font-size: 50px;
    letter-spacing: -0.02em;
    line-height: 60px;
    font-weight: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].fontWeights.bold};
}
}

@media (max-width: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].breakpoint[2]}){
h1 {
    font-size: 30px;
    letter-spacing: -0.02em;
    line-height: 40px;
    font-weight: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].fontWeights.bold};
}
}

h2 {
    font-size: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].fontSizes[1]};
    letter-spacing: -0.014em;
    line-height: 40px;
    font-weight: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].fontWeights.semibold};
}

h3 {
    font-size: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].fontSizes[2]};
    letter-spacing: -0.012em;
    line-height: 30px;
}

h4 {
    font-size: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].fontSizes[4]};
    letter-spacing: -0.010em;
    line-height: 28px;
    font-weight: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].fontWeights.regular};
}

h5 {
    font-size: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].fontSizes[5]};
    letter-spacing: -0.008em;
    line-height: 24px;
}

h6 {
    font-size: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].fontSizes[6]};
    letter-spacing: -0.002em;
    line-height: 20px;
    font-weight: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].fontWeights.semibold};
}

p {
    font-size: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].fontSizes[4]};
     letter-spacing: -0.010em;
    line-height: 28px;
    font-weight: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].fontWeights.regular};
    color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.textSecondary};
}

span {
    font-size: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].fontSizes[6]};
    letter-spacing: -0.004em;
    line-height: 20px;
    font-weight: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].fontWeights.regular};
}

a {
    font-size: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].fontSizes[5]};
    letter-spacing: -0.006em;
    line-height: 28px;
    font-weight: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].fontWeights.regular};
    color: rgb(64,156,255);
}

`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyles);

/***/ }),

/***/ "./styles/theme.ts":
/*!*************************!*\
  !*** ./styles/theme.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const theme = {
  maxWidth: "800px",
  breakpoint: ["1150px", // 0
  "890px", // 1
  "600px", // 2
  "360px" // 3
  ],
  space: ["0px", // 0
  "4px", // 1
  "8px", // 2
  "16px", // 3
  "24px", // 4
  "32px", // 5
  "48px", // 6
  "64px", // 7
  "96px", // 8
  "128px", // 9
  "160px" // 10
  ],
  fontSizes: ["2rem", // 0 32px
  "1.875rem", // 1 30px
  "1.5rem", // 2 24px
  "1.25rem", // 3 20px
  "1.125rem", // 4 18px
  "1rem", // 5 16px
  "0.875rem", // 6 14px
  "0.75rem" // 7 12px
  ],
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },
  colors: {
    lightgrey4: "#F9FAFB",
    lightgrey3: "#F4F6F8",
    lightgrey2: "#DFE3E8",
    lightgrey1: "#C4CDD5",
    grey4: "#919EAB",
    grey3: "#637381",
    grey2: "#454F5B",
    grey1: "#212B36",
    text: "#F9FAFB",
    textSecondary: "#DFE3E8",
    textLink: "rgb(64,156,255)"
  },
  animations: {
    default: "ease 0.4s;",
    hover: "0.35s cubic-bezier(0.165, 0.84, 0.44, 1)"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ 5:
/*!**********************************!*\
  !*** multi ./pages/project1.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jolene.ng/portfoliov2/pages/project1.tsx */"./pages/project1.tsx");


/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-lottie":
/*!*******************************!*\
  !*** external "react-lottie" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lottie");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dyaWQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vdGhlcnByb2plY3RzLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpZGViYXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2lkZWJhcjIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdG9wc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9qZWN0MS50c3giLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2dsb2JhbHN0eWxlcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3RoZW1lLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZyYW1lci1tb3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWxvdHRpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiXSwibmFtZXMiOlsiRm9vdGVyIiwiUmVhY3QiLCJyZW5kZXIiLCJGb290ZXJDb250YWluZXIiLCJzdHlsZWQiLCJmb290ZXIiLCJ0aGVtZSIsInNwYWNlIiwiY29sb3JzIiwiZ3JleTMiLCJicmVha3BvaW50IiwiU29jaWFscyIsImRpdiIsIlNvY2lhbEljb24iLCJzdmciLCJncmV5MiIsImFuaW1hdGlvbnMiLCJkZWZhdWx0IiwiRm9vdGVyMiIsImRlZmF1bHRPcHRpb25zIiwibG9vcCIsImF1dG9wbGF5IiwiYW5pbWF0aW9uRGF0YSIsInJlbmRlcmVyU2V0dGluZ3MiLCJwcmVzZXJ2ZUFzcGVjdFJhdGlvIiwiVGV4dENvbnRhaW5lciIsInB4IiwibnVtYmVyIiwiR3JpZENvbnRhaW5lciIsInByb3BzIiwiZ2FwIiwiY29sdW1ucyIsIkdyaWQiLCJMaW5rcyIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbG9yIiwicGF0aG5hbWUiLCJIZWFkZXIiLCJtYXJnaW5Cb3R0b20iLCJzaG93SW5mbyIsInRleHRTZWNvbmRhcnkiLCJTaWRlYmFyQ29udGFpbmVyIiwiTG9nbyIsImEiLCJOYW1lIiwiTmF2IiwibW90aW9uIiwiTmF2TGluayIsIlNob3dJbmZvIiwic2Nyb2xsWSIsInVzZVZpZXdwb3J0U2Nyb2xsIiwiZmlyc3RSYW5nZSIsInNlY29uZFJhbmdlIiwib3BhY2l0eVJhbmdlIiwiTW92ZVJhbmdlIiwiZmlyc3RPcCIsInVzZVRyYW5zZm9ybSIsImZpcnN0TW92ZSIsInNlY29uZE9wIiwic2Vjb25kTW92ZSIsImRpc3BsYXkiLCJob21lIiwibWFyZ2luVG9wIiwib3BhY2l0eSIsInRyYW5zbGF0ZVkiLCJTY3JvbGxJbmRpY2F0b3IiLCJ3aWR0aCIsInNldFdpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInNjcm9sbFlQcm9ncmVzcyIsIlNjcm9sbFJhbmdlIiwiV2lkdGhSYW5nZSIsIlNjcm9sbFdpZHRoIiwiTGF5b3V0IiwidGl0bGUiLCJwcm9qZWN0IiwiY2hpbGRyZW4yIiwiY2hpbGRyZW4iLCJhYm91dCIsIkJvZHlDb250YWluZXIiLCJDb250ZW50Q29udGFpbmVyIiwibWF4V2lkdGgiLCJUaW1lUmFuZ2UiLCJoNiIsImZvbnRXZWlnaHRzIiwic2VtaWJvbGQiLCJncmV5NCIsIkNvbXBhbnlUaXRsZSIsImgyIiwiQ29tcGFueURlc2MiLCJoNCIsInJlZ3VsYXIiLCJsaWdodGdyZXkxIiwiTGF5b3V0R3JpZCIsIlRpbWVTZWN0aW9uIiwiU2Nyb2xsRGl2IiwiT3RoZXJQcm9qZWN0cyIsInVybDEiLCJwcm9qMSIsInVybDIiLCJwcm9qMiIsInVybDMiLCJwcm9qMyIsImZvbnRTaXplcyIsInRleHRMaW5rIiwiZm9udFdlaWdodCIsIm1lZGl1bSIsIlNpZGViYXIiLCJEaXZpZGVyIiwiU2lkZWJhcjIiLCJUb3BTZWN0aW9uIiwidGl0bGUyIiwidGl0bGUzIiwic3VidGl0bGUiLCJUb3BDb250YWluZXIiLCJBY2NlbnRUaXRsZSIsImgxIiwiRGFya1RpdGxlIiwiU3VidGl0bGUiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJfcmVhY3QiLCJfdXJsIiwiX3V0aWxzIiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiaXNMb2NhbCIsImhyZWYiLCJ1cmwiLCJwYXJzZSIsIm9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwiaG9zdCIsInByb3RvY29sIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRGdW5jIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRVcmwiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIm9ic2VydmVyIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJ1bmRlZmluZWQiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaGFzIiwidGFyZ2V0IiwiY2IiLCJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiZGVsZXRlIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImVsIiwib2JzZXJ2ZSIsInNldCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIkxpbmsiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInAiLCJjbGVhblVwTGlzdGVuZXJzIiwiZm9ybWF0VXJscyIsImFzSHJlZiIsImFkZEJhc2VQYXRoIiwibGlua0NsaWNrZWQiLCJlIiwibm9kZU5hbWUiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsb2NhdGlvbiIsInJlc29sdmUiLCJwcmV2ZW50RGVmYXVsdCIsInNjcm9sbCIsImluZGV4T2YiLCJyZXBsYWNlIiwic2hhbGxvdyIsInRoZW4iLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJkb2N1bWVudCIsImJvZHkiLCJmb2N1cyIsInByZWZldGNoIiwid2FybiIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJwYXJzZWRIcmVmIiwicGFyc2VkQXMiLCJyZXNvbHZlZEhyZWYiLCJoYW5kbGVSZWYiLCJyZWYiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwiam9pbiIsIm9wdGlvbnMiLCJwYXRocyIsImNhdGNoIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY3VycmVudCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJwYXNzSHJlZiIsInR5cGUiLCJwcm9jZXNzIiwiY2xvbmVFbGVtZW50IiwiZXhlY09uY2UiLCJQcm9wVHlwZXMiLCJleGFjdCIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJib29sIiwiZWxlbWVudCIsInByb3BOYW1lIiwidmFsdWUiLCJfZGVmYXVsdCIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsImNyZWF0ZVJvdXRlciIsIndpdGhSb3V0ZXIiLCJSb3V0ZXIiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwiYXJndW1lbnRzIiwiZXZlbnQiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJFcnJvciIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiX2xlbiIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiYXNzaWduIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJtaXR0IiwiYWxsIiwiY3JlYXRlIiwiaGFuZGxlciIsInB1c2giLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsInNsaWNlIiwibWFwIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwidXJsXzEiLCJtaXR0XzEiLCJ1dGlsc18xIiwiaXNfZHluYW1pY18xIiwicm91dGVfbWF0Y2hlcl8xIiwicm91dGVfcmVnZXhfMSIsImJhc2VQYXRoIiwicGF0aCIsImRlbEJhc2VQYXRoIiwic3Vic3RyIiwidG9Sb3V0ZSIsInByZXBhcmVSb3V0ZSIsImZldGNoTmV4dERhdGEiLCJxdWVyeSIsImlzU2VydmVyUmVuZGVyIiwiYXR0ZW1wdHMiLCJnZXRSZXNwb25zZSIsImZldGNoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJjcmVkZW50aWFscyIsInJlcyIsIm9rIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJjb2RlIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwic2RjIiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJpc1NzciIsImFzUGF0aCIsIl9icHMiLCJfZ2V0U3RhdGljRGF0YSIsIlByb21pc2UiLCJfZ2V0U2VydmVyRGF0YSIsInJvdXRlIiwiY29tcG9uZW50cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiaXNEeW5hbWljUm91dGUiLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJfcmV3cml0ZVVybEZvck5leHRFeHBvcnQiLCJ1cGRhdGUiLCJuZXdEYXRhIiwibm90aWZ5IiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJjaGFuZ2UiLCJtZXRob2QiLCJfYXMiLCJyZWplY3QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwidXJsSXNOZXciLCJhc1BhdGhuYW1lIiwicm91dGVSZWdleCIsImdldFJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwiZ2V0Um91dGVNYXRjaGVyIiwibWlzc2luZ1BhcmFtcyIsImtleXMiLCJncm91cHMiLCJmaWx0ZXIiLCJwYXJhbSIsImdldFJvdXRlSW5mbyIsInJvdXRlSW5mbyIsImNhbmNlbGxlZCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwibG9hZEVycm9yRmFpbCIsImZldGNoQ29tcG9uZW50IiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsIl9nZXREYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic3BsaXQiLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJURVNUX1JPVVRFIiwidGVzdCIsInJlIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIl8iLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwicmVwZWF0IiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJub3JtYWxpemVkUm91dGUiLCJlc2NhcGVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiJDEiLCJpc0NhdGNoQWxsIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwidXNlZCIsImhvc3RuYW1lIiwicG9ydCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9hIiwicHJvdG90eXBlIiwicGFnZVByb3BzIiwidXJsT2JqZWN0S2V5cyIsImZvcm1hdCIsIlNQIiwibWVhc3VyZSIsIlByb2plY3QxIiwiSW50cm9kdWN0aW9uIiwiY3JlYXRlUmVmIiwiUmVzZWFyY2giLCJEZXNpZ24iLCJGaXgiLCJSZXN1bHQiLCJzY3JvbGxJbnRybyIsInRvcCIsIm9mZnNldFRvcCIsImJlaGF2aW9yIiwic2Nyb2xsUmVzZWFyY2giLCJzY3JvbGxEZXNpZ24iLCJzY3JvbGxGaXgiLCJzY3JvbGxSZXN1bHQiLCJsaWdodGdyZXkzIiwiUGFyYWdyYXBoIiwiUGFyYWdyYXBoMiIsIlBhcmFncmFwaDMiLCJMaXN0IiwidWwiLCJMaXN0SXRlbSIsImxpIiwiUXVvdGUyIiwiaDMiLCJGdWxsSW1nIiwiRnVsbEltZzIiLCJGdWxsSW1nMyIsIkZ1bGxJbWc0IiwiRnVsbEltZzUiLCJGdWxsSW1nNiIsIkZ1bGxJbWc3IiwiR2xvYmFsU3R5bGVzIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJsaWdodGdyZXkyIiwiYm9sZCIsImxpZ2h0Z3JleTQiLCJncmV5MSIsInRleHQiLCJob3ZlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxNQUFOLFNBQXFCQywr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LEVBQ0Q7QUFDUixZQUZTLEVBRUc7QUFDWixVQUhTLEVBR0M7QUFDVixXQUpTLEVBSUU7QUFDWCxZQUxTLEVBS0c7QUFDWixRQU5TLEVBTUQ7QUFDUixZQVBTLEVBT0c7QUFDWixXQVJTLENBUUU7QUFSRixHQXJCQztBQStCWm5CLGFBQVcsRUFBRTtBQUNYTyxXQUFPLEVBQUUsR0FERTtBQUVYZSxVQUFNLEVBQUUsR0FGRztBQUdYckIsWUFBUSxFQUFFLEdBSEM7QUFJWHNaLFFBQUksRUFBRTtBQUpLLEdBL0JEO0FBcUNacmUsUUFBTSxFQUFFO0FBQ05zZSxjQUFVLEVBQUUsU0FETjtBQUVOckIsY0FBVSxFQUFFLFNBRk47QUFHTm1CLGNBQVUsRUFBRSxTQUhOO0FBSU45WSxjQUFVLEVBQUUsU0FKTjtBQUtOTixTQUFLLEVBQUUsU0FMRDtBQU1OL0UsU0FBSyxFQUFFLFNBTkQ7QUFPTk0sU0FBSyxFQUFFLFNBUEQ7QUFRTmdlLFNBQUssRUFBRSxTQVJEO0FBU05DLFFBQUksRUFBRSxTQVRBO0FBVU52YyxpQkFBYSxFQUFFLFNBVlQ7QUFXTmlFLFlBQVEsRUFBRTtBQVhKLEdBckNJO0FBa0RaMUYsWUFBVSxFQUFFO0FBQ1ZDLFdBQU8sRUFBRSxZQURDO0FBRVZnZSxTQUFLLEVBQUU7QUFGRztBQWxEQSxDQUFkO0FBd0RlM2Usb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4REEsMEM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL3Byb2plY3QxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCI7XG5cbmV4cG9ydCBjbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb290ZXJDb250YWluZXI+XG4gICAgICAgIDxTb2NpYWxzPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vam9sZW5lbmcvXCI+XG4gICAgICAgICAgICA8U29jaWFsSWNvblxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgIGRhdGEtcHJlZml4PVwiZmFiXCJcbiAgICAgICAgICAgICAgZGF0YS1pY29uPVwibGlua2VkaW4taW5cIlxuICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgZD1cIk0xMDAuMjggNDQ4SDcuNFYxNDguOWg5Mi44OHpNNTMuNzkgMTA4LjFDMjQuMDkgMTA4LjEgMCA4My41IDAgNTMuOGE1My43OSA1My43OSAwIDAgMSAxMDcuNTggMGMwIDI5LjctMjQuMSA1NC4zLTUzLjc5IDU0LjN6TTQ0Ny45IDQ0OGgtOTIuNjhWMzAyLjRjMC0zNC43LS43LTc5LjItNDguMjktNzkuMi00OC4yOSAwLTU1LjY5IDM3LjctNTUuNjkgNzYuN1Y0NDhoLTkyLjc4VjE0OC45aDg5LjA4djQwLjhoMS4zYzEyLjQtMjMuNSA0Mi42OS00OC4zIDg3Ljg4LTQ4LjMgOTQgMCAxMTEuMjggNjEuOSAxMTEuMjggMTQyLjNWNDQ4elwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDwvU29jaWFsSWNvbj5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9qb2xlbmVuankvXCI+XG4gICAgICAgICAgICA8U29jaWFsSWNvblxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgIGRhdGEtcHJlZml4PVwiZmFiXCJcbiAgICAgICAgICAgICAgZGF0YS1pY29uPVwiaW5zdGFncmFtXCJcbiAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMjI0LjEgMTQxYy02My42IDAtMTE0LjkgNTEuMy0xMTQuOSAxMTQuOXM1MS4zIDExNC45IDExNC45IDExNC45UzMzOSAzMTkuNSAzMzkgMjU1LjkgMjg3LjcgMTQxIDIyNC4xIDE0MXptMCAxODkuNmMtNDEuMSAwLTc0LjctMzMuNS03NC43LTc0LjdzMzMuNS03NC43IDc0LjctNzQuNyA3NC43IDMzLjUgNzQuNyA3NC43LTMzLjYgNzQuNy03NC43IDc0Ljd6bTE0Ni40LTE5NC4zYzAgMTQuOS0xMiAyNi44LTI2LjggMjYuOC0xNC45IDAtMjYuOC0xMi0yNi44LTI2LjhzMTItMjYuOCAyNi44LTI2LjggMjYuOCAxMiAyNi44IDI2Ljh6bTc2LjEgMjcuMmMtMS43LTM1LjktOS45LTY3LjctMzYuMi05My45LTI2LjItMjYuMi01OC0zNC40LTkzLjktMzYuMi0zNy0yLjEtMTQ3LjktMi4xLTE4NC45IDAtMzUuOCAxLjctNjcuNiA5LjktOTMuOSAzNi4xcy0zNC40IDU4LTM2LjIgOTMuOWMtMi4xIDM3LTIuMSAxNDcuOSAwIDE4NC45IDEuNyAzNS45IDkuOSA2Ny43IDM2LjIgOTMuOXM1OCAzNC40IDkzLjkgMzYuMmMzNyAyLjEgMTQ3LjkgMi4xIDE4NC45IDAgMzUuOS0xLjcgNjcuNy05LjkgOTMuOS0zNi4yIDI2LjItMjYuMiAzNC40LTU4IDM2LjItOTMuOSAyLjEtMzcgMi4xLTE0Ny44IDAtMTg0Ljh6TTM5OC44IDM4OGMtNy44IDE5LjYtMjIuOSAzNC43LTQyLjYgNDIuNi0yOS41IDExLjctOTkuNSA5LTEzMi4xIDlzLTEwMi43IDIuNi0xMzIuMS05Yy0xOS42LTcuOC0zNC43LTIyLjktNDIuNi00Mi42LTExLjctMjkuNS05LTk5LjUtOS0xMzIuMXMtMi42LTEwMi43IDktMTMyLjFjNy44LTE5LjYgMjIuOS0zNC43IDQyLjYtNDIuNiAyOS41LTExLjcgOTkuNS05IDEzMi4xLTlzMTAyLjctMi42IDEzMi4xIDljMTkuNiA3LjggMzQuNyAyMi45IDQyLjYgNDIuNiAxMS43IDI5LjUgOSA5OS41IDkgMTMyLjFzMi43IDEwMi43LTkgMTMyLjF6XCJcbiAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDwvU29jaWFsSWNvbj5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPFNvY2lhbEljb25cbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgICAgICAgICAgICBkYXRhLXByZWZpeD1cImZhc1wiXG4gICAgICAgICAgICAgIGRhdGEtaWNvbj1cImVudmVsb3BlXCJcbiAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIGQ9XCJNNTAyLjMgMTkwLjhjMy45LTMuMSA5LjctLjIgOS43IDQuN1Y0MDBjMCAyNi41LTIxLjUgNDgtNDggNDhINDhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4VjE5NS42YzAtNSA1LjctNy44IDkuNy00LjcgMjIuNCAxNy40IDUyLjEgMzkuNSAxNTQuMSAxMTMuNiAyMS4xIDE1LjQgNTYuNyA0Ny44IDkyLjIgNDcuNiAzNS43LjMgNzItMzIuOCA5Mi4zLTQ3LjYgMTAyLTc0LjEgMTMxLjYtOTYuMyAxNTQtMTEzLjd6TTI1NiAzMjBjMjMuMi40IDU2LjYtMjkuMiA3My40LTQxLjQgMTMyLjctOTYuMyAxNDIuOC0xMDQuNyAxNzMuNC0xMjguNyA1LjgtNC41IDkuMi0xMS41IDkuMi0xOC45di0xOWMwLTI2LjUtMjEuNS00OC00OC00OEg0OEMyMS41IDY0IDAgODUuNSAwIDExMnYxOWMwIDcuNCAzLjQgMTQuMyA5LjIgMTguOSAzMC42IDIzLjkgNDAuNyAzMi40IDE3My40IDEyOC43IDE2LjggMTIuMiA1MC4yIDQxLjggNzMuNCA0MS40elwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDwvU29jaWFsSWNvbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvU29jaWFscz5cblxuICAgICAgICA8c3Bhbj5EZXNpZ25lZCAmIGJ1aWx0IHdpdGgg4pmhPC9zcGFuPlxuICAgICAgPC9Gb290ZXJDb250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBGb290ZXJDb250YWluZXIgPSBzdHlsZWQuZm9vdGVyYFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtd2lkdGg6IDEwNDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogJHt0aGVtZS5zcGFjZVs5XX0gOHB4IDE1MHB4IDA7XG4gIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ncmV5M307XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMF19KSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzFdfSkge1xuICAgIHBhZGRpbmc6IDEwMnB4IDhweCAxMDJweCAwO1xuICB9XG5gO1xuXG5jb25zdCBTb2NpYWxzID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IFNvY2lhbEljb24gPSBzdHlsZWQuc3ZnYFxuICBoZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDAgMTZweCAwIDhweDtcbiAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmdyZXkyfTtcbiAgdHJhbnNpdGlvbjogJHt0aGVtZS5hbmltYXRpb25zLmRlZmF1bHR9O1xuICA6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzFdfSkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgTG90dGllIGZyb20gXCJyZWFjdC1sb3R0aWVcIjtcbmltcG9ydCBhbmltYXRpb25EYXRhIGZyb20gXCIuLi9wdWJsaWMvZGF0YS5qc29uXCI7XG5cbmV4cG9ydCBjbGFzcyBGb290ZXIyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgbG9vcDogZmFsc2UsXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvbkRhdGEsXG4gICAgICByZW5kZXJlclNldHRpbmdzOiB7XG4gICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW86IFwieE1pZFlNaWQgc2xpY2VcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEZvb3RlckNvbnRhaW5lcj5cbiAgICAgICAgICA8TG90dGllXG4gICAgICAgICAgICBvcHRpb25zPXtkZWZhdWx0T3B0aW9uc31cbiAgICAgICAgICAgIGhlaWdodD17MzgwfVxuICAgICAgICAgICAgd2lkdGg9ezI0MDB9XG4gICAgICAgICAgICByZXNpemVNb2RlPVwiY292ZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9vdGVyQ29udGFpbmVyPlxuICAgICAgICA8VGV4dENvbnRhaW5lcj5cbiAgICAgICAgICA8U29jaWFscz5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vam9sZW5lbmcvXCI+XG4gICAgICAgICAgICAgIDxTb2NpYWxJY29uXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgZGF0YS1wcmVmaXg9XCJmYWJcIlxuICAgICAgICAgICAgICAgIGRhdGEtaWNvbj1cImxpbmtlZGluLWluXCJcbiAgICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgZD1cIk0xMDAuMjggNDQ4SDcuNFYxNDguOWg5Mi44OHpNNTMuNzkgMTA4LjFDMjQuMDkgMTA4LjEgMCA4My41IDAgNTMuOGE1My43OSA1My43OSAwIDAgMSAxMDcuNTggMGMwIDI5LjctMjQuMSA1NC4zLTUzLjc5IDU0LjN6TTQ0Ny45IDQ0OGgtOTIuNjhWMzAyLjRjMC0zNC43LS43LTc5LjItNDguMjktNzkuMi00OC4yOSAwLTU1LjY5IDM3LjctNTUuNjkgNzYuN1Y0NDhoLTkyLjc4VjE0OC45aDg5LjA4djQwLjhoMS4zYzEyLjQtMjMuNSA0Mi42OS00OC4zIDg3Ljg4LTQ4LjMgOTQgMCAxMTEuMjggNjEuOSAxMTEuMjggMTQyLjNWNDQ4elwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICAgIDwvU29jaWFsSWNvbj5cbiAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vam9sZW5lbmp5L1wiPlxuICAgICAgICAgICAgICA8U29jaWFsSWNvblxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgIGRhdGEtcHJlZml4PVwiZmFiXCJcbiAgICAgICAgICAgICAgICBkYXRhLWljb249XCJpbnN0YWdyYW1cIlxuICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICBkPVwiTTIyNC4xIDE0MWMtNjMuNiAwLTExNC45IDUxLjMtMTE0LjkgMTE0LjlzNTEuMyAxMTQuOSAxMTQuOSAxMTQuOVMzMzkgMzE5LjUgMzM5IDI1NS45IDI4Ny43IDE0MSAyMjQuMSAxNDF6bTAgMTg5LjZjLTQxLjEgMC03NC43LTMzLjUtNzQuNy03NC43czMzLjUtNzQuNyA3NC43LTc0LjcgNzQuNyAzMy41IDc0LjcgNzQuNy0zMy42IDc0LjctNzQuNyA3NC43em0xNDYuNC0xOTQuM2MwIDE0LjktMTIgMjYuOC0yNi44IDI2LjgtMTQuOSAwLTI2LjgtMTItMjYuOC0yNi44czEyLTI2LjggMjYuOC0yNi44IDI2LjggMTIgMjYuOCAyNi44em03Ni4xIDI3LjJjLTEuNy0zNS45LTkuOS02Ny43LTM2LjItOTMuOS0yNi4yLTI2LjItNTgtMzQuNC05My45LTM2LjItMzctMi4xLTE0Ny45LTIuMS0xODQuOSAwLTM1LjggMS43LTY3LjYgOS45LTkzLjkgMzYuMXMtMzQuNCA1OC0zNi4yIDkzLjljLTIuMSAzNy0yLjEgMTQ3LjkgMCAxODQuOSAxLjcgMzUuOSA5LjkgNjcuNyAzNi4yIDkzLjlzNTggMzQuNCA5My45IDM2LjJjMzcgMi4xIDE0Ny45IDIuMSAxODQuOSAwIDM1LjktMS43IDY3LjctOS45IDkzLjktMzYuMiAyNi4yLTI2LjIgMzQuNC01OCAzNi4yLTkzLjkgMi4xLTM3IDIuMS0xNDcuOCAwLTE4NC44ek0zOTguOCAzODhjLTcuOCAxOS42LTIyLjkgMzQuNy00Mi42IDQyLjYtMjkuNSAxMS43LTk5LjUgOS0xMzIuMSA5cy0xMDIuNyAyLjYtMTMyLjEtOWMtMTkuNi03LjgtMzQuNy0yMi45LTQyLjYtNDIuNi0xMS43LTI5LjUtOS05OS41LTktMTMyLjFzLTIuNi0xMDIuNyA5LTEzMi4xYzcuOC0xOS42IDIyLjktMzQuNyA0Mi42LTQyLjYgMjkuNS0xMS43IDk5LjUtOSAxMzIuMS05czEwMi43LTIuNiAxMzIuMSA5YzE5LjYgNy44IDM0LjcgMjIuOSA0Mi42IDQyLjYgMTEuNyAyOS41IDkgOTkuNSA5IDEzMi4xczIuNyAxMDIuNy05IDEzMi4xelwiXG4gICAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9Tb2NpYWxJY29uPlxuICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmhlbGxvQGpvbGVuZW5nLmNvbVwiPlxuICAgICAgICAgICAgICA8U29jaWFsSWNvblxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgIGRhdGEtcHJlZml4PVwiZmFzXCJcbiAgICAgICAgICAgICAgICBkYXRhLWljb249XCJlbnZlbG9wZVwiXG4gICAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1MTIgNTEyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNNTAyLjMgMTkwLjhjMy45LTMuMSA5LjctLjIgOS43IDQuN1Y0MDBjMCAyNi41LTIxLjUgNDgtNDggNDhINDhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4VjE5NS42YzAtNSA1LjctNy44IDkuNy00LjcgMjIuNCAxNy40IDUyLjEgMzkuNSAxNTQuMSAxMTMuNiAyMS4xIDE1LjQgNTYuNyA0Ny44IDkyLjIgNDcuNiAzNS43LjMgNzItMzIuOCA5Mi4zLTQ3LjYgMTAyLTc0LjEgMTMxLjYtOTYuMyAxNTQtMTEzLjd6TTI1NiAzMjBjMjMuMi40IDU2LjYtMjkuMiA3My40LTQxLjQgMTMyLjctOTYuMyAxNDIuOC0xMDQuNyAxNzMuNC0xMjguNyA1LjgtNC41IDkuMi0xMS41IDkuMi0xOC45di0xOWMwLTI2LjUtMjEuNS00OC00OC00OEg0OEMyMS41IDY0IDAgODUuNSAwIDExMnYxOWMwIDcuNCAzLjQgMTQuMyA5LjIgMTguOSAzMC42IDIzLjkgNDAuNyAzMi40IDE3My40IDEyOC43IDE2LjggMTIuMiA1MC4yIDQxLjggNzMuNCA0MS40elwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICAgIDwvU29jaWFsSWNvbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L1NvY2lhbHM+XG5cbiAgICAgICAgICA8c3Bhbj5EZXNpZ25lZCAmIGJ1aWx0IHdpdGgg4pmhPC9zcGFuPlxuICAgICAgICA8L1RleHRDb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IEZvb3RlckNvbnRhaW5lciA9IHN0eWxlZC5mb290ZXJgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogODBweDtcbmA7XG5cbmNvbnN0IFRleHRDb250YWluZXIgPSBzdHlsZWQuZm9vdGVyYFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAgYXV0bztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAtODBweDtcbiAgcGFkZGluZzogMHB4IDhweCAxNTBweCA4cHg7XG4gIG1heC13aWR0aDogMTA0MHB4O1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZ3JleTN9O1xuICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzFdfSkge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLXRvcDogLTYwcHg7XG4gICAgcGFkZGluZzogMHB4IDhweCA4MHB4IDhweDtcbiAgfVxuYDtcblxuY29uc3QgU29jaWFscyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBTb2NpYWxJY29uID0gc3R5bGVkLnN2Z2BcbiAgaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiAwIDE2cHggMCA4cHg7XG4gIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ncmV5Mn07XG4gIHRyYW5zaXRpb246ICR7dGhlbWUuYW5pbWF0aW9ucy5kZWZhdWx0fTtcbiAgOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsxXX0pIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXIyO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBnYXA/OiBudW1iZXI7XG4gIGNvbHVtbnM/OiBzdHJpbmc7XG4gIFtwcm9wTmFtZTogc3RyaW5nXToge307XG59XG5cbmZ1bmN0aW9uIHB4KG51bWJlcikge1xuICByZXR1cm4gYCR7bnVtYmVyfXB4YDtcbn1cblxuY29uc3QgR3JpZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBnYXA6ICR7KHByb3BzKSA9PiBweChwcm9wcy5nYXApfTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAkeyhwcm9wcykgPT4gcHJvcHMuY29sdW1uc307XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHcmlkKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7IGdhcCA9IDAsIGNvbHVtbnMgPSBcIjFmclwiIH0gPSBwcm9wcztcbiAgcmV0dXJuIDxHcmlkQ29udGFpbmVyIGdhcD17Z2FwfSBjb2x1bW5zPXtjb2x1bW5zfSB7Li4ucHJvcHN9IC8+O1xufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc2hvd0luZm8/OiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBMaW5rcygpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHJldHVybiAoXG4gICAgPE5hdj5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGNvbG9yOiByb3V0ZXIucGF0aG5hbWUgPT0gXCIvXCIgPyBcIndoaXRlXCIgOiB0aGVtZS5jb2xvcnMuZ3JleTMsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEhvbWVcbiAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj1cIi9wbGF5Z3JvdW5kXCI+XG4gICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvcGxheWdyb3VuZFwiID8gXCJ3aGl0ZVwiIDogdGhlbWUuY29sb3JzLmdyZXkzLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBQbGF5Z3JvdW5kXG4gICAgICAgIDwvTmF2TGluaz5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgY29sb3I6IHJvdXRlci5wYXRobmFtZSA9PSBcIi9hYm91dFwiID8gXCJ3aGl0ZVwiIDogdGhlbWUuY29sb3JzLmdyZXkzLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBBYm91dFxuICAgICAgICA8L05hdkxpbms+XG4gICAgICA8L0xpbms+XG4gICAgPC9OYXY+XG4gICk7XG59XG5cbmV4cG9ydCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8U2lkZWJhckNvbnRhaW5lclxuICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IHRoaXMucHJvcHMuc2hvd0luZm8gPyA1NSA6IC04MiB9fVxuICAgICAgPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxMb2dvPlxuICAgICAgICAgICAgPE5hbWUgdmlld0JveD1cIjAgMCAzMzMgMTYxXCI+XG4gICAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgICAgaWQ9XCJQYWdlLTFcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT17dGhlbWUuY29sb3JzLnRleHRTZWNvbmRhcnl9XG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgICAgICBpZD1cIkFzc2V0LTNcIlxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMuMDAwMDAwLCA0LjAwMDAwMClcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI2XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTI0LjIxLDYyLjU3IEw4OC4yMSwzNC41NyBDODguMjEsMzQuNTcgNDMuMDIsMTY1LjMyIDIuMjEsMTUyLjU3IEMtMTMuNzksMTQ3LjU3IDg3LjU5LDc2LjU3IDk1LjIxLDc2LjU3IEMxMTAuMjEsNzYuNTcgMTAwLjM5LDExOS44MiA4Mi4yMSwxMDguNTcgQzYxLjIxLDk1LjU3IDE0NC4yMSwyMS41NyAxNDYuMjEsMi41NyBDMTQ4LjIxLC0xNi40MyAxMDQuMjEsMTAxLjU3IDExOS4yMSwxMTEuNTcgQzEzNC4yMSwxMjEuNTcgMTcwLjIxLDU2LjU3IDE2My4yMSw1NC41NyBDMTU2LjIxLDUyLjU3IDEzMS4yMSw5NC41NyAxNDQuMjEsMTA2LjU3IEMxNTcuMjEsMTE4LjU3IDE3NC4yMSw2NS41NyAxNzQuMjEsNjUuNTcgTDE2NS4yMSwxMDMuNTcgQzE2NS4yMSwxMDMuNTcgMTg4LjIxLDU5LjU3IDE5Mi4yMSw5NS41NyBDMTk2LjIxLDEzMS41NyAyMjAuMjEsNjcuNTcgMjE1LjIxLDU4LjU3IEMyMTAuMjEsNDkuNTcgMTk0LjIxLDEwMC41NyAyMTEuMjEsMTAxLjU3IEMyMjguMjEsMTAyLjU3IDI0OC4yMSw4NS41NyAyNjEuMjEsODUuNTcgQzI3NC4yMSw4NS41NyAyODEuMjEsODkuNTcgMjg4LjIxLDg5LjU3IEMyOTUuMjEsODkuNTcgMzA3LjIxLDg1LjU3IDMwNy4yMSw4NS41N1wiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aFwiXG4gICAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgPGxpbmVcbiAgICAgICAgICAgICAgICAgICAgeDE9XCIzMjYuMzFcIlxuICAgICAgICAgICAgICAgICAgICB5MT1cIjc4LjAxXCJcbiAgICAgICAgICAgICAgICAgICAgeDI9XCIzMjYuMjFcIlxuICAgICAgICAgICAgICAgICAgICB5Mj1cIjc3LjU3XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJQYXRoXCJcbiAgICAgICAgICAgICAgICAgID48L2xpbmU+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L05hbWU+XG4gICAgICAgICAgPC9Mb2dvPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9TaWRlYmFyQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgU2lkZWJhckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogaHNsKDI0MCwgNjAlLCA1JSk7XG4gIHotaW5kZXg6IDEwMDA7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMV19KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzNdfSkge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogODBweDtcbiAgfVxuYDtcblxuY29uc3QgTG9nbyA9IHN0eWxlZC5hYFxuICBwYWRkaW5nOiAwIDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbM119KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgTmFtZSA9IHN0eWxlZC5zdmdgXG4gIHdpZHRoOiA3MHB4O1xuYDtcblxuY29uc3QgTmF2ID0gc3R5bGVkKG1vdGlvbi5kaXYpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmNvbnN0IE5hdkxpbmsgPSBzdHlsZWQobW90aW9uLmEpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDEycHggMTJweDtcbiAgdHJhbnNpdGlvbjogJHt0aGVtZS5hbmltYXRpb25zLmRlZmF1bHR9O1xuICA6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi9zaWRlYmFyXCI7XG5pbXBvcnQgU2lkZWJhcjIgZnJvbSBcIi4vc2lkZWJhcjJcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IEZvb3RlcjIgZnJvbSBcIi4vZm9vdGVyMlwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvZ3JpZFwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCBHbG9iYWxTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9nbG9iYWxzdHlsZXNcIjtcbmltcG9ydCB7IG1vdGlvbiwgdXNlVmlld3BvcnRTY3JvbGwsIHVzZVRyYW5zZm9ybSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICBjaGlsZHJlbjI/OiBSZWFjdC5SZWFjdE5vZGU7XG4gIGhvbWU/OiBib29sZWFuO1xuICBhYm91dD86IGJvb2xlYW47XG4gIHByb2plY3Q/OiBib29sZWFuO1xufVxuXG5jb25zdCBTaG93SW5mbyA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHNjcm9sbFkgfSA9IHVzZVZpZXdwb3J0U2Nyb2xsKCk7XG4gIGNvbnN0IGZpcnN0UmFuZ2UgPSBbMCwgMzQwLCA0MzAsIDUyMF07XG4gIGNvbnN0IHNlY29uZFJhbmdlID0gWzAsIDg0MCwgOTMwLCAxMDIwXTtcbiAgY29uc3Qgb3BhY2l0eVJhbmdlID0gWzEsIDEsIDAuMywgMF07XG4gIGNvbnN0IE1vdmVSYW5nZSA9IFswLCAwLCAtNTAsIC0xMDBdO1xuICBjb25zdCBmaXJzdE9wID0gdXNlVHJhbnNmb3JtKHNjcm9sbFksIGZpcnN0UmFuZ2UsIG9wYWNpdHlSYW5nZSk7XG4gIGNvbnN0IGZpcnN0TW92ZSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZLCBmaXJzdFJhbmdlLCBNb3ZlUmFuZ2UpO1xuICBjb25zdCBzZWNvbmRPcCA9IHVzZVRyYW5zZm9ybShzY3JvbGxZLCBzZWNvbmRSYW5nZSwgb3BhY2l0eVJhbmdlKTtcbiAgY29uc3Qgc2Vjb25kTW92ZSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZLCBzZWNvbmRSYW5nZSwgTW92ZVJhbmdlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuaG9tZSA/IFwiY29udGVudHNcIiA6IFwibm9uZVwiIH19PlxuICAgICAgPFRpbWVTZWN0aW9uIHN0eWxlPXt7IG1hcmdpblRvcDogMTgyIH19PlxuICAgICAgICA8bW90aW9uLmRpdiBzdHlsZT17eyBvcGFjaXR5OiBmaXJzdE9wLCB0cmFuc2xhdGVZOiBmaXJzdE1vdmUgfX0+XG4gICAgICAgICAgPFRpbWVSYW5nZT4yMDE5IC0gUHJlc2VudDwvVGltZVJhbmdlPlxuICAgICAgICAgIDxDb21wYW55VGl0bGU+R3JhYjwvQ29tcGFueVRpdGxlPlxuICAgICAgICAgIDxDb21wYW55RGVzYz5EZWxpdmVyeSBzb2x1dGlvbnM8L0NvbXBhbnlEZXNjPlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L1RpbWVTZWN0aW9uPlxuICAgICAgPFRpbWVTZWN0aW9uIHN0eWxlPXt7IG1hcmdpblRvcDogMzk0IH19PlxuICAgICAgICA8bW90aW9uLmRpdiBzdHlsZT17eyBvcGFjaXR5OiBzZWNvbmRPcCwgdHJhbnNsYXRlWTogc2Vjb25kTW92ZSB9fT5cbiAgICAgICAgICA8VGltZVJhbmdlPjIwMTcgLSAyMDE5PC9UaW1lUmFuZ2U+XG4gICAgICAgICAgPENvbXBhbnlUaXRsZT5Hb3Z0ZWNoPC9Db21wYW55VGl0bGU+XG4gICAgICAgICAgPENvbXBhbnlEZXNjPkdvdmVybm1lbnQgc2VydmljZXM8L0NvbXBhbnlEZXNjPlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L1RpbWVTZWN0aW9uPlxuICAgICAgPFRpbWVTZWN0aW9uIHN0eWxlPXt7IG1hcmdpblRvcDogMzk0IH19PlxuICAgICAgICA8VGltZVJhbmdlPjIwMTIgLSAyMDE2PC9UaW1lUmFuZ2U+XG4gICAgICAgIDxDb21wYW55VGl0bGU+UGFzdCBQcm9qZWN0czwvQ29tcGFueVRpdGxlPlxuICAgICAgICA8Q29tcGFueURlc2M+SW5kdXN0cmlhbCBkZXNpZ248L0NvbXBhbnlEZXNjPlxuICAgICAgPC9UaW1lU2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFNjcm9sbEluZGljYXRvciA9ICgpID0+IHtcbiAgY29uc3QgW3dpZHRoLCBzZXRXaWR0aF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gIH0pO1xuICBjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlVmlld3BvcnRTY3JvbGwoKTtcbiAgY29uc3QgU2Nyb2xsUmFuZ2UgPSBbMCwgMV07XG4gIGNvbnN0IFdpZHRoUmFuZ2UgPSBbMCwgd2lkdGhdO1xuICBjb25zdCBTY3JvbGxXaWR0aCA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFNjcm9sbFJhbmdlLCBXaWR0aFJhbmdlKTtcblxuICByZXR1cm4gKFxuICAgIDxTY3JvbGxEaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHdpZHRoOiBTY3JvbGxXaWR0aCxcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8R2xvYmFsU3R5bGVzIC8+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT57dGhpcy5wcm9wcy50aXRsZX08L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICB7dGhpcy5wcm9wcy5wcm9qZWN0ID8gPFNjcm9sbEluZGljYXRvciAvPiA6IFwiXCJ9XG4gICAgICAgIDxCb2R5Q29udGFpbmVyPlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8TGF5b3V0R3JpZCBnYXA9ezB9IGNvbHVtbnM9e1wiMWZyIDNmclwifT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnByb2plY3QgPyAoXG4gICAgICAgICAgICAgIDxTaWRlYmFyMiBzaG93SW5mbz17dGhpcy5wcm9wcy5ob21lfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbjIoKX1cbiAgICAgICAgICAgICAgPC9TaWRlYmFyMj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFNpZGViYXIgc2hvd0luZm89e3RoaXMucHJvcHMuaG9tZX0gLz5cbiAgICAgICAgICAgICAgICA8U2hvd0luZm8gaG9tZT17dGhpcy5wcm9wcy5ob21lfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Q29udGVudENvbnRhaW5lcj57dGhpcy5wcm9wcy5jaGlsZHJlbn08L0NvbnRlbnRDb250YWluZXI+XG4gICAgICAgICAgPC9MYXlvdXRHcmlkPlxuICAgICAgICA8L0JvZHlDb250YWluZXI+XG4gICAgICAgIHt0aGlzLnByb3BzLmFib3V0ID8gPEZvb3RlcjIgLz4gOiA8Rm9vdGVyIC8+fVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBCb2R5Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWF4LXdpZHRoOiAxMDQwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMF19KSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuYDtcblxuY29uc3QgQ29udGVudENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1heC13aWR0aDogJHt0aGVtZS5tYXhXaWR0aH07XG4gIHBhZGRpbmc6IDAgOHB4O1xuICBtaW4td2lkdGg6IDA7XG5gO1xuXG5jb25zdCBUaW1lUmFuZ2UgPSBzdHlsZWQuaDZgXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lLmZvbnRXZWlnaHRzLnNlbWlib2xkfTtcbiAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmdyZXk0fTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbmA7XG5cbmNvbnN0IENvbXBhbnlUaXRsZSA9IHN0eWxlZC5oMmBcbiAgbWFyZ2luLXRvcDogMTJweDtcbmA7XG5cbmNvbnN0IENvbXBhbnlEZXNjID0gc3R5bGVkLmg0YFxuICBmb250LXdlaWdodDogJHt0aGVtZS5mb250V2VpZ2h0cy5yZWd1bGFyfTtcbiAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmxpZ2h0Z3JleTF9O1xuICBtYXJnaW4tdG9wOiA0cHg7XG5gO1xuXG5jb25zdCBMYXlvdXRHcmlkID0gc3R5bGVkKEdyaWQpYFxuICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzFdfSkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5gO1xuXG5jb25zdCBUaW1lU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogNDgwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMV19KSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5gO1xuXG5jb25zdCBTY3JvbGxEaXYgPSBzdHlsZWQobW90aW9uLmRpdilgXG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGhlaWdodDogM3B4O1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmxpZ2h0Z3JleTF9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHVybDE/OiBzdHJpbmc7XG4gIHByb2oxPzogc3RyaW5nO1xuXG4gIHVybDI/OiBzdHJpbmc7XG4gIHByb2oyPzogc3RyaW5nO1xuXG4gIHVybDM/OiBzdHJpbmc7XG4gIHByb2ozPzogc3RyaW5nO1xufVxuXG5jb25zdCBPdGhlclByb2plY3RzOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAoe1xuICB1cmwxID0gXCIvcHJvamVjdDFcIixcbiAgcHJvajEgPSBcIlNlbGYgUGljay1VcFwiLFxuICB1cmwyID0gXCIvcHJvamVjdDJcIixcbiAgcHJvajIgPSBcIkRlbGl2ZXJ5IGZlYXR1cmVzXCIsXG4gIHVybDMgPSBcIi9wcm9qZWN0M1wiLFxuICBwcm9qMyA9IFwiUGFyZW50cyBHYXRld2F5XCIsXG59KSA9PiAoXG4gIDxOYXY+XG4gICAgPExpbmsgaHJlZj17dXJsMX0gc2hhbGxvdz17dHJ1ZX0+XG4gICAgICA8TmF2TGluaz57cHJvajF9PC9OYXZMaW5rPlxuICAgIDwvTGluaz5cbiAgICA8TGluayBocmVmPXt1cmwyfSBzaGFsbG93PXt0cnVlfT5cbiAgICAgIDxOYXZMaW5rPntwcm9qMn08L05hdkxpbms+XG4gICAgPC9MaW5rPlxuICAgIDxMaW5rIGhyZWY9e3VybDN9IHNoYWxsb3c9e3RydWV9PlxuICAgICAgPE5hdkxpbms+e3Byb2ozfTwvTmF2TGluaz5cbiAgICA8L0xpbms+XG4gIDwvTmF2PlxuKTtcblxuY29uc3QgTmF2ID0gc3R5bGVkKG1vdGlvbi5kaXYpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgbWFyZ2luOiAyNHB4IC04cHggMCAtOHB4O1xuYDtcblxuY29uc3QgTmF2TGluayA9IHN0eWxlZChtb3Rpb24uYSlgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAke3RoZW1lLmZvbnRTaXplc1s0XX07XG4gIHdpZHRoOiAyNjBweDtcbiAgcGFkZGluZzogOHB4IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogJHt0aGVtZS5hbmltYXRpb25zLmRlZmF1bHR9O1xuICA6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMzEsIDMxLCA1NCwgMC40KTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIDo6YWZ0ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCk7XG4gICAgfVxuICB9XG4gIDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwi4oaSXCI7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNpdGlvbjogJHt0aGVtZS5hbmltYXRpb25zLmRlZmF1bHR9O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBPdGhlclByb2plY3RzO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc2hvd0luZm8/OiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBMaW5rcygpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHJldHVybiAoXG4gICAgPE5hdj5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCIgc2hhbGxvdz17dHJ1ZX0+XG4gICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGNvbG9yOiByb3V0ZXIucGF0aG5hbWUgPT0gXCIvXCIgPyB0aGVtZS5jb2xvcnMudGV4dExpbmsgOiBcIndoaXRlXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OlxuICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvXCJcbiAgICAgICAgICAgICAgICA/IHRoZW1lLmZvbnRXZWlnaHRzLm1lZGl1bVxuICAgICAgICAgICAgICAgIDogdGhlbWUuZm9udFdlaWdodHMucmVndWxhcixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgSG9tZVxuICAgICAgICA8L05hdkxpbms+XG4gICAgICA8L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiL3BsYXlncm91bmRcIiBzaGFsbG93PXt0cnVlfT5cbiAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9wbGF5Z3JvdW5kXCJcbiAgICAgICAgICAgICAgICA/IHRoZW1lLmNvbG9ycy50ZXh0TGlua1xuICAgICAgICAgICAgICAgIDogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDpcbiAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL3BsYXlncm91bmRcIlxuICAgICAgICAgICAgICAgID8gdGhlbWUuZm9udFdlaWdodHMubWVkaXVtXG4gICAgICAgICAgICAgICAgOiB0aGVtZS5mb250V2VpZ2h0cy5yZWd1bGFyLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBQbGF5Z3JvdW5kXG4gICAgICAgIDwvTmF2TGluaz5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9hYm91dFwiID8gdGhlbWUuY29sb3JzLnRleHRMaW5rIDogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDpcbiAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL2Fib3V0XCJcbiAgICAgICAgICAgICAgICA/IHRoZW1lLmZvbnRXZWlnaHRzLm1lZGl1bVxuICAgICAgICAgICAgICAgIDogdGhlbWUuZm9udFdlaWdodHMucmVndWxhcixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgQWJvdXRcbiAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgPC9MaW5rPlxuICAgIDwvTmF2PlxuICApO1xufVxuXG5leHBvcnQgY2xhc3MgU2lkZWJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTaWRlYmFyQ29udGFpbmVyXG4gICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogdGhpcy5wcm9wcy5zaG93SW5mbyA/IDEwMCA6IC0zOCB9fVxuICAgICAgPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxMb2dvPlxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjEyMHB4XCIgdmlld0JveD1cIjAgMCAzMzMgMTYxXCI+XG4gICAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgICAgaWQ9XCJQYWdlLTFcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT17dGhlbWUuY29sb3JzLnRleHRTZWNvbmRhcnl9XG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgICAgICBpZD1cIkFzc2V0LTNcIlxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMuMDAwMDAwLCA0LjAwMDAwMClcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI2XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTI0LjIxLDYyLjU3IEw4OC4yMSwzNC41NyBDODguMjEsMzQuNTcgNDMuMDIsMTY1LjMyIDIuMjEsMTUyLjU3IEMtMTMuNzksMTQ3LjU3IDg3LjU5LDc2LjU3IDk1LjIxLDc2LjU3IEMxMTAuMjEsNzYuNTcgMTAwLjM5LDExOS44MiA4Mi4yMSwxMDguNTcgQzYxLjIxLDk1LjU3IDE0NC4yMSwyMS41NyAxNDYuMjEsMi41NyBDMTQ4LjIxLC0xNi40MyAxMDQuMjEsMTAxLjU3IDExOS4yMSwxMTEuNTcgQzEzNC4yMSwxMjEuNTcgMTcwLjIxLDU2LjU3IDE2My4yMSw1NC41NyBDMTU2LjIxLDUyLjU3IDEzMS4yMSw5NC41NyAxNDQuMjEsMTA2LjU3IEMxNTcuMjEsMTE4LjU3IDE3NC4yMSw2NS41NyAxNzQuMjEsNjUuNTcgTDE2NS4yMSwxMDMuNTcgQzE2NS4yMSwxMDMuNTcgMTg4LjIxLDU5LjU3IDE5Mi4yMSw5NS41NyBDMTk2LjIxLDEzMS41NyAyMjAuMjEsNjcuNTcgMjE1LjIxLDU4LjU3IEMyMTAuMjEsNDkuNTcgMTk0LjIxLDEwMC41NyAyMTEuMjEsMTAxLjU3IEMyMjguMjEsMTAyLjU3IDI0OC4yMSw4NS41NyAyNjEuMjEsODUuNTcgQzI3NC4yMSw4NS41NyAyODEuMjEsODkuNTcgMjg4LjIxLDg5LjU3IEMyOTUuMjEsODkuNTcgMzA3LjIxLDg1LjU3IDMwNy4yMSw4NS41N1wiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aFwiXG4gICAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgPGxpbmVcbiAgICAgICAgICAgICAgICAgICAgeDE9XCIzMjYuMzFcIlxuICAgICAgICAgICAgICAgICAgICB5MT1cIjc4LjAxXCJcbiAgICAgICAgICAgICAgICAgICAgeDI9XCIzMjYuMjFcIlxuICAgICAgICAgICAgICAgICAgICB5Mj1cIjc3LjU3XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJQYXRoXCJcbiAgICAgICAgICAgICAgICAgID48L2xpbmU+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L0xvZ28+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmtzIC8+XG5cbiAgICAgICAgPFNvY2lhbHM+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9qb2xlbmVuZy9cIj5cbiAgICAgICAgICAgIDxTb2NpYWxJY29uXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgZGF0YS1wcmVmaXg9XCJmYWJcIlxuICAgICAgICAgICAgICBkYXRhLWljb249XCJsaW5rZWRpbi1pblwiXG4gICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0NDggNTEyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICBkPVwiTTEwMC4yOCA0NDhINy40VjE0OC45aDkyLjg4ek01My43OSAxMDguMUMyNC4wOSAxMDguMSAwIDgzLjUgMCA1My44YTUzLjc5IDUzLjc5IDAgMCAxIDEwNy41OCAwYzAgMjkuNy0yNC4xIDU0LjMtNTMuNzkgNTQuM3pNNDQ3LjkgNDQ4aC05Mi42OFYzMDIuNGMwLTM0LjctLjctNzkuMi00OC4yOS03OS4yLTQ4LjI5IDAtNTUuNjkgMzcuNy01NS42OSA3Ni43VjQ0OGgtOTIuNzhWMTQ4LjloODkuMDh2NDAuOGgxLjNjMTIuNC0yMy41IDQyLjY5LTQ4LjMgODcuODgtNDguMyA5NCAwIDExMS4yOCA2MS45IDExMS4yOCAxNDIuM1Y0NDh6XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPC9Tb2NpYWxJY29uPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2pvbGVuZW5qeS9cIj5cbiAgICAgICAgICAgIDxTb2NpYWxJY29uXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgZGF0YS1wcmVmaXg9XCJmYWJcIlxuICAgICAgICAgICAgICBkYXRhLWljb249XCJpbnN0YWdyYW1cIlxuICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgZD1cIk0yMjQuMSAxNDFjLTYzLjYgMC0xMTQuOSA1MS4zLTExNC45IDExNC45czUxLjMgMTE0LjkgMTE0LjkgMTE0LjlTMzM5IDMxOS41IDMzOSAyNTUuOSAyODcuNyAxNDEgMjI0LjEgMTQxem0wIDE4OS42Yy00MS4xIDAtNzQuNy0zMy41LTc0LjctNzQuN3MzMy41LTc0LjcgNzQuNy03NC43IDc0LjcgMzMuNSA3NC43IDc0LjctMzMuNiA3NC43LTc0LjcgNzQuN3ptMTQ2LjQtMTk0LjNjMCAxNC45LTEyIDI2LjgtMjYuOCAyNi44LTE0LjkgMC0yNi44LTEyLTI2LjgtMjYuOHMxMi0yNi44IDI2LjgtMjYuOCAyNi44IDEyIDI2LjggMjYuOHptNzYuMSAyNy4yYy0xLjctMzUuOS05LjktNjcuNy0zNi4yLTkzLjktMjYuMi0yNi4yLTU4LTM0LjQtOTMuOS0zNi4yLTM3LTIuMS0xNDcuOS0yLjEtMTg0LjkgMC0zNS44IDEuNy02Ny42IDkuOS05My45IDM2LjFzLTM0LjQgNTgtMzYuMiA5My45Yy0yLjEgMzctMi4xIDE0Ny45IDAgMTg0LjkgMS43IDM1LjkgOS45IDY3LjcgMzYuMiA5My45czU4IDM0LjQgOTMuOSAzNi4yYzM3IDIuMSAxNDcuOSAyLjEgMTg0LjkgMCAzNS45LTEuNyA2Ny43LTkuOSA5My45LTM2LjIgMjYuMi0yNi4yIDM0LjQtNTggMzYuMi05My45IDIuMS0zNyAyLjEtMTQ3LjggMC0xODQuOHpNMzk4LjggMzg4Yy03LjggMTkuNi0yMi45IDM0LjctNDIuNiA0Mi42LTI5LjUgMTEuNy05OS41IDktMTMyLjEgOXMtMTAyLjcgMi42LTEzMi4xLTljLTE5LjYtNy44LTM0LjctMjIuOS00Mi42LTQyLjYtMTEuNy0yOS41LTktOTkuNS05LTEzMi4xcy0yLjYtMTAyLjcgOS0xMzIuMWM3LjgtMTkuNiAyMi45LTM0LjcgNDIuNi00Mi42IDI5LjUtMTEuNyA5OS41LTkgMTMyLjEtOXMxMDIuNy0yLjYgMTMyLjEgOWMxOS42IDcuOCAzNC43IDIyLjkgNDIuNiA0Mi42IDExLjcgMjkuNSA5IDk5LjUgOSAxMzIuMXMyLjcgMTAyLjctOSAxMzIuMXpcIlxuICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPC9Tb2NpYWxJY29uPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86aGVsbG9Aam9sZW5lbmcuY29tXCI+XG4gICAgICAgICAgICA8U29jaWFsSWNvblxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgIGRhdGEtcHJlZml4PVwiZmFzXCJcbiAgICAgICAgICAgICAgZGF0YS1pY29uPVwiZW52ZWxvcGVcIlxuICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgZD1cIk01MDIuMyAxOTAuOGMzLjktMy4xIDkuNy0uMiA5LjcgNC43VjQwMGMwIDI2LjUtMjEuNSA0OC00OCA0OEg0OGMtMjYuNSAwLTQ4LTIxLjUtNDgtNDhWMTk1LjZjMC01IDUuNy03LjggOS43LTQuNyAyMi40IDE3LjQgNTIuMSAzOS41IDE1NC4xIDExMy42IDIxLjEgMTUuNCA1Ni43IDQ3LjggOTIuMiA0Ny42IDM1LjcuMyA3Mi0zMi44IDkyLjMtNDcuNiAxMDItNzQuMSAxMzEuNi05Ni4zIDE1NC0xMTMuN3pNMjU2IDMyMGMyMy4yLjQgNTYuNi0yOS4yIDczLjQtNDEuNCAxMzIuNy05Ni4zIDE0Mi44LTEwNC43IDE3My40LTEyOC43IDUuOC00LjUgOS4yLTExLjUgOS4yLTE4Ljl2LTE5YzAtMjYuNS0yMS41LTQ4LTQ4LTQ4SDQ4QzIxLjUgNjQgMCA4NS41IDAgMTEydjE5YzAgNy40IDMuNCAxNC4zIDkuMiAxOC45IDMwLjYgMjMuOSA0MC43IDMyLjQgMTczLjQgMTI4LjcgMTYuOCAxMi4yIDUwLjIgNDEuOCA3My40IDQxLjR6XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPC9Tb2NpYWxJY29uPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9Tb2NpYWxzPlxuXG4gICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICA8L1NpZGViYXJDb250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBTaWRlYmFyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDEyMHB4O1xuICBoZWlnaHQ6IDM2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzFdfSkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IExvZ28gPSBzdHlsZWQuYWBcbiAgcGFkZGluZzogMCA4cHg7XG5gO1xuXG5jb25zdCBOYXYgPSBzdHlsZWQobW90aW9uLmRpdilgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICBtYXJnaW46IDI0cHggMHB4IDAgMDtcbmA7XG5cbmNvbnN0IE5hdkxpbmsgPSBzdHlsZWQobW90aW9uLmEpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxNjBweDtcbiAgcGFkZGluZzogOHB4IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG5cbiAgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDMxLCAzMSwgNTQsIDAuNCk7XG4gIH1cbmA7XG5cbmNvbnN0IFNvY2lhbHMgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDMycHggMCAwIDA7XG5gO1xuXG5jb25zdCBTb2NpYWxJY29uID0gc3R5bGVkLnN2Z2BcbiAgaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiAwIDE2cHggMCA4cHg7XG4gIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ncmV5Mn07XG4gIHRyYW5zaXRpb246ICR7dGhlbWUuYW5pbWF0aW9ucy5kZWZhdWx0fTtcbiAgOmhvdmVyIHtcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dExpbmt9O1xuICB9XG5gO1xuXG5jb25zdCBEaXZpZGVyID0gc3R5bGVkLmRpdmBcbiAgbWluLWhlaWdodDogM3B4O1xuICBtYXJnaW46IDMycHggMHB4IDAgOHB4O1xuICB3aWR0aDogMTYwcHg7XG4gIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmdyZXkyfTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuZnVuY3Rpb24gTGlua3MoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICByZXR1cm4gKFxuICAgIDxOYXY+XG4gICAgICA8TGluayBocmVmPVwiL1wiIHNoYWxsb3c9e3RydWV9PlxuICAgICAgICA8TmF2TGlua1xuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBjb2xvcjogcm91dGVyLnBhdGhuYW1lID09IFwiL1wiID8gdGhlbWUuY29sb3JzLnRleHRMaW5rIDogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDpcbiAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL1wiXG4gICAgICAgICAgICAgICAgPyB0aGVtZS5mb250V2VpZ2h0cy5tZWRpdW1cbiAgICAgICAgICAgICAgICA6IHRoZW1lLmZvbnRXZWlnaHRzLnJlZ3VsYXIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEJhY2sgSG9tZVxuICAgICAgICA8L05hdkxpbms+XG4gICAgICA8L0xpbms+XG4gICAgPC9OYXY+XG4gICk7XG59XG5cbmV4cG9ydCBjbGFzcyBTaWRlYmFyMiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTaWRlYmFyQ29udGFpbmVyPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxMb2dvPlxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjEyMHB4XCIgdmlld0JveD1cIjAgMCAzMzMgMTYxXCI+XG4gICAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgICAgaWQ9XCJQYWdlLTFcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT17dGhlbWUuY29sb3JzLnRleHRTZWNvbmRhcnl9XG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgICAgICBpZD1cIkFzc2V0LTNcIlxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMuMDAwMDAwLCA0LjAwMDAwMClcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI2XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTI0LjIxLDYyLjU3IEw4OC4yMSwzNC41NyBDODguMjEsMzQuNTcgNDMuMDIsMTY1LjMyIDIuMjEsMTUyLjU3IEMtMTMuNzksMTQ3LjU3IDg3LjU5LDc2LjU3IDk1LjIxLDc2LjU3IEMxMTAuMjEsNzYuNTcgMTAwLjM5LDExOS44MiA4Mi4yMSwxMDguNTcgQzYxLjIxLDk1LjU3IDE0NC4yMSwyMS41NyAxNDYuMjEsMi41NyBDMTQ4LjIxLC0xNi40MyAxMDQuMjEsMTAxLjU3IDExOS4yMSwxMTEuNTcgQzEzNC4yMSwxMjEuNTcgMTcwLjIxLDU2LjU3IDE2My4yMSw1NC41NyBDMTU2LjIxLDUyLjU3IDEzMS4yMSw5NC41NyAxNDQuMjEsMTA2LjU3IEMxNTcuMjEsMTE4LjU3IDE3NC4yMSw2NS41NyAxNzQuMjEsNjUuNTcgTDE2NS4yMSwxMDMuNTcgQzE2NS4yMSwxMDMuNTcgMTg4LjIxLDU5LjU3IDE5Mi4yMSw5NS41NyBDMTk2LjIxLDEzMS41NyAyMjAuMjEsNjcuNTcgMjE1LjIxLDU4LjU3IEMyMTAuMjEsNDkuNTcgMTk0LjIxLDEwMC41NyAyMTEuMjEsMTAxLjU3IEMyMjguMjEsMTAyLjU3IDI0OC4yMSw4NS41NyAyNjEuMjEsODUuNTcgQzI3NC4yMSw4NS41NyAyODEuMjEsODkuNTcgMjg4LjIxLDg5LjU3IEMyOTUuMjEsODkuNTcgMzA3LjIxLDg1LjU3IDMwNy4yMSw4NS41N1wiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aFwiXG4gICAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgPGxpbmVcbiAgICAgICAgICAgICAgICAgICAgeDE9XCIzMjYuMzFcIlxuICAgICAgICAgICAgICAgICAgICB5MT1cIjc4LjAxXCJcbiAgICAgICAgICAgICAgICAgICAgeDI9XCIzMjYuMjFcIlxuICAgICAgICAgICAgICAgICAgICB5Mj1cIjc3LjU3XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJQYXRoXCJcbiAgICAgICAgICAgICAgICAgID48L2xpbmU+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L0xvZ28+XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgICA8TGlua3MgLz5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICA8L1NpZGViYXJDb250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBTaWRlYmFyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDEyMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzFdfSkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IExvZ28gPSBzdHlsZWQuYWBcbiAgcGFkZGluZzogMCA4cHg7XG5gO1xuXG5jb25zdCBOYXYgPSBzdHlsZWQobW90aW9uLmRpdilgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICBtYXJnaW46IDI0cHggMHB4IDAgMDtcbmA7XG5cbmNvbnN0IE5hdkxpbmsgPSBzdHlsZWQobW90aW9uLmEpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxNjBweDtcbiAgcGFkZGluZzogOHB4IDhweCA4cHggMjhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHRyYW5zaXRpb246ICR7dGhlbWUuYW5pbWF0aW9ucy5kZWZhdWx0fTtcbiAgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDMxLCAzMSwgNTQsIDAuNCk7XG4gICAgb3BhY2l0eTogMTtcbiAgICA6OmJlZm9yZSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTRweCk7XG4gICAgfVxuICB9XG4gIDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIuKGkFwiO1xuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNpdGlvbjogJHt0aGVtZS5hbmltYXRpb25zLmRlZmF1bHR9O1xuICB9XG5gO1xuXG5jb25zdCBEaXZpZGVyID0gc3R5bGVkLmRpdmBcbiAgbWluLWhlaWdodDogM3B4O1xuICBtYXJnaW46IDMycHggMHB4IDAgOHB4O1xuICB3aWR0aDogMTYwcHg7XG4gIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmdyZXkyfTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXIyO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgdGl0bGUyOiBzdHJpbmc7XG4gIHRpdGxlMzogc3RyaW5nO1xuICBzdWJ0aXRsZTogc3RyaW5nO1xufVxuXG5jb25zdCBUb3BTZWN0aW9uOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAoe1xuICB0aXRsZSA9IFwiRGVmYXVsdCB0aXRsZVwiLFxuICB0aXRsZTIgPSBcIkRlZmF1bHQgdGl0bGVcIixcbiAgdGl0bGUzID0gXCJEZWZhdWx0IHRpdGxlXCIsXG4gIHN1YnRpdGxlID0gXCJEZWZhdWx0IHN1YnRpdGxlXCIsXG59KSA9PiAoXG4gIDxUb3BDb250YWluZXI+XG4gICAgPGgxPnt0aXRsZX08L2gxPlxuICAgIDxBY2NlbnRUaXRsZT57dGl0bGUyfTwvQWNjZW50VGl0bGU+XG4gICAgPERhcmtUaXRsZT57dGl0bGUzfTwvRGFya1RpdGxlPlxuICAgIDxTdWJ0aXRsZT57c3VidGl0bGV9PC9TdWJ0aXRsZT5cbiAgPC9Ub3BDb250YWluZXI+XG4pO1xuXG5jb25zdCBUb3BDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDEwMnB4O1xuYDtcblxuY29uc3QgQWNjZW50VGl0bGUgPSBzdHlsZWQuaDFgXG4gIGNvbG9yOiAjMTY2ZGVmO1xuYDtcblxuY29uc3QgRGFya1RpdGxlID0gc3R5bGVkLmgxYFxuICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZ3JleTJ9O1xuYDtcblxuY29uc3QgU3VidGl0bGUgPSBzdHlsZWQuaDRgXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lLmZvbnRXZWlnaHRzLnJlZ3VsYXJ9O1xuICBwYWRkaW5nOiAxNnB4IDQ4cHggMCAycHg7XG4gIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5saWdodGdyZXkxfTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsxXX0pIHtcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHggMCAycHg7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsyXX0pIHtcbiAgICBwYWRkaW5nOiAxNnB4IDhweCAwIDJweDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgVG9wU2VjdGlvbjtcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3VybD1yZXF1aXJlKFwidXJsXCIpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTt2YXIgX3JvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JvdXRlclwiKSk7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTtmdW5jdGlvbiBpc0xvY2FsKGhyZWYpe3ZhciB1cmw9KDAsX3VybC5wYXJzZSkoaHJlZixmYWxzZSx0cnVlKTt2YXIgb3JpZ2luPSgwLF91cmwucGFyc2UpKCgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSxmYWxzZSx0cnVlKTtyZXR1cm4hdXJsLmhvc3R8fHVybC5wcm90b2NvbD09PW9yaWdpbi5wcm90b2NvbCYmdXJsLmhvc3Q9PT1vcmlnaW4uaG9zdDt9ZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYyl7dmFyIGxhc3RIcmVmPW51bGw7dmFyIGxhc3RBcz1udWxsO3ZhciBsYXN0UmVzdWx0PW51bGw7cmV0dXJuKGhyZWYsYXMpPT57aWYobGFzdFJlc3VsdCYmaHJlZj09PWxhc3RIcmVmJiZhcz09PWxhc3RBcyl7cmV0dXJuIGxhc3RSZXN1bHQ7fXZhciByZXN1bHQ9Zm9ybWF0RnVuYyhocmVmLGFzKTtsYXN0SHJlZj1ocmVmO2xhc3RBcz1hcztsYXN0UmVzdWx0PXJlc3VsdDtyZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGZvcm1hdFVybCh1cmwpe3JldHVybiB1cmwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jz8oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHVybCk6dXJsO312YXIgb2JzZXJ2ZXI7dmFyIGxpc3RlbmVycz1uZXcgTWFwKCk7dmFyIEludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz93aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXI6bnVsbDt2YXIgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBnZXRPYnNlcnZlcigpey8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG5pZihvYnNlcnZlcil7cmV0dXJuIG9ic2VydmVyO30vLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbmlmKCFJbnRlcnNlY3Rpb25PYnNlcnZlcil7cmV0dXJuIHVuZGVmaW5lZDt9cmV0dXJuIG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57aWYoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSl7cmV0dXJuO312YXIgY2I9bGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpO2lmKGVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wKXtvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldCk7Y2IoKTt9fSk7fSx7cm9vdE1hcmdpbjonMjAwcHgnfSk7fXZhciBsaXN0ZW5Ub0ludGVyc2VjdGlvbnM9KGVsLGNiKT0+e3ZhciBvYnNlcnZlcj1nZXRPYnNlcnZlcigpO2lmKCFvYnNlcnZlcil7cmV0dXJuKCk9Pnt9O31vYnNlcnZlci5vYnNlcnZlKGVsKTtsaXN0ZW5lcnMuc2V0KGVsLGNiKTtyZXR1cm4oKT0+e3RyeXtvYnNlcnZlci51bm9ic2VydmUoZWwpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt9bGlzdGVuZXJzLmRlbGV0ZShlbCk7fTt9O2NsYXNzIExpbmsgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKHByb3BzKXtzdXBlcihwcm9wcyk7dGhpcy5wPXZvaWQgMDt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9KCk9Pnt9O3RoaXMuZm9ybWF0VXJscz1tZW1vaXplZEZvcm1hdFVybCgoaHJlZixhc0hyZWYpPT57cmV0dXJue2hyZWY6KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChocmVmKSksYXM6YXNIcmVmPygwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoYXNIcmVmKSk6YXNIcmVmfTt9KTt0aGlzLmxpbmtDbGlja2VkPWU9Pnt2YXJ7bm9kZU5hbWUsdGFyZ2V0fT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJih0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGUubWV0YUtleXx8ZS5jdHJsS2V5fHxlLnNoaWZ0S2V5fHxlLm5hdGl2ZUV2ZW50JiZlLm5hdGl2ZUV2ZW50LndoaWNoPT09Mikpey8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbnJldHVybjt9dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7aWYoIWlzTG9jYWwoaHJlZikpey8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbnJldHVybjt9dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247aHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGhyZWYpO2FzPWFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsYXMpOmhyZWY7ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xudmFye3Njcm9sbH09dGhpcy5wcm9wcztpZihzY3JvbGw9PW51bGwpe3Njcm9sbD1hcy5pbmRleE9mKCcjJyk8MDt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5fcm91dGVyLmRlZmF1bHRbdGhpcy5wcm9wcy5yZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3c6dGhpcy5wcm9wcy5zaGFsbG93fSkudGhlbihzdWNjZXNzPT57aWYoIXN1Y2Nlc3MpcmV0dXJuO2lmKHNjcm9sbCl7d2luZG93LnNjcm9sbFRvKDAsMCk7ZG9jdW1lbnQuYm9keS5mb2N1cygpO319KTt9O2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihwcm9wcy5wcmVmZXRjaCl7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fXRoaXMucD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO31jb21wb25lbnRXaWxsVW5tb3VudCgpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO31nZXRQYXRocygpe3ZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO3ZhcntocmVmOnBhcnNlZEhyZWYsYXM6cGFyc2VkQXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7dmFyIHJlc29sdmVkSHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEhyZWYpO3JldHVybltyZXNvbHZlZEhyZWYscGFyc2VkQXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRBcyk6cmVzb2x2ZWRIcmVmXTt9aGFuZGxlUmVmKHJlZil7aWYodGhpcy5wJiZJbnRlcnNlY3Rpb25PYnNlcnZlciYmcmVmJiZyZWYudGFnTmFtZSl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7dmFyIGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW3RoaXMuZ2V0UGF0aHMoKS5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXTtpZighaXNQcmVmZXRjaGVkKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9bGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwoKT0+e3RoaXMucHJlZmV0Y2goKTt9KTt9fX0vLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbi8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxucHJlZmV0Y2gob3B0aW9ucyl7aWYoIXRoaXMucHx8dHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG52YXIgcGF0aHM9dGhpcy5nZXRQYXRocygpOy8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5fcm91dGVyLmRlZmF1bHQucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLzBdLHBhdGhzWy8qIGFzUGF0aCAqLzFdLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO3ByZWZldGNoZWRbcGF0aHMuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV09dHJ1ZTt9cmVuZGVyKCl7dmFye2NoaWxkcmVufT10aGlzLnByb3BzO3ZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbnZhciBjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7dmFyIHByb3BzPXtyZWY6ZWw9Pnt0aGlzLmhhbmRsZVJlZihlbCk7aWYoY2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWYpe2lmKHR5cGVvZiBjaGlsZC5yZWY9PT0nZnVuY3Rpb24nKWNoaWxkLnJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGQucmVmPT09J29iamVjdCcpe2NoaWxkLnJlZi5jdXJyZW50PWVsO319fSxvbk1vdXNlRW50ZXI6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO310aGlzLnByZWZldGNoKHtwcmlvcml0eTp0cnVlfSk7fSxvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXt0aGlzLmxpbmtDbGlja2VkKGUpO319fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYodGhpcy5wcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe3Byb3BzLmhyZWY9YXN8fGhyZWY7fS8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbi8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpe3ZhciByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydD1yZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKS5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtpZihwcm9wcy5ocmVmJiZ0eXBlb2YgX19ORVhUX0RBVEFfXyE9PSd1bmRlZmluZWQnJiZfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpe3Byb3BzLmhyZWY9cmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZik7fX1yZXR1cm4gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTt9fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dmFyIHdhcm49KDAsX3V0aWxzLmV4ZWNPbmNlKShjb25zb2xlLmVycm9yKTsvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbnZhciBQcm9wVHlwZXM9cmVxdWlyZSgncHJvcC10eXBlcycpO3ZhciBleGFjdD1yZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0Jyk7Ly8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuTGluay5wcm9wVHlwZXM9ZXhhY3Qoe2hyZWY6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxhczpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKSxwcmVmZXRjaDpQcm9wVHlwZXMuYm9vbCxyZXBsYWNlOlByb3BUeXBlcy5ib29sLHNoYWxsb3c6UHJvcFR5cGVzLmJvb2wscGFzc0hyZWY6UHJvcFR5cGVzLmJvb2wsc2Nyb2xsOlByb3BUeXBlcy5ib29sLGNoaWxkcmVuOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LChwcm9wcyxwcm9wTmFtZSk9Pnt2YXIgdmFsdWU9cHJvcHNbcHJvcE5hbWVdO2lmKHR5cGVvZiB2YWx1ZT09PSdzdHJpbmcnKXt3YXJuKFwiV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPlwiKTt9cmV0dXJuIG51bGw7fV0pLmlzUmVxdWlyZWR9KTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi92YXIgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxudmFyIHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCddO3ZhciByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107dmFyIGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPWZ1bmN0aW9uKCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCxmdW5jdGlvbigpe3ZhciBldmVudEZpZWxkPVwib25cIitldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStldmVudC5zdWJzdHJpbmcoMSk7dmFyIF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3VtZW50cyk7fWNhdGNoKGVycil7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogXCIrZXZlbnRGaWVsZCk7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UrXCJcXG5cIitlcnIuc3RhY2spO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe3ZhciBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxudmFyIGNyZWF0ZVJvdXRlcj1mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoKXtmb3IodmFyIF9sZW49YXJndW1lbnRzLmxlbmd0aCxhcmdzPW5ldyBBcnJheShfbGVuKSxfa2V5PTA7X2tleTxfbGVuO19rZXkrKyl7YXJnc1tfa2V5XT1hcmd1bWVudHNbX2tleV07fXNpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXt2YXIgX3JvdXRlcj1yb3V0ZXI7dmFyIGluc3RhbmNlPXt9O2Zvcih2YXIgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbih7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09ZnVuY3Rpb24oKXtyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1cIndpdGhSb3V0ZXIoXCIrbmFtZStcIilcIjt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO30iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gbWl0dCgpIHtcbiAgICBjb25zdCBhbGwgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgb2ZmKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICAgICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbWl0KHR5cGUsIC4uLmV2dHMpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciguLi5ldnRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBtaXR0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG5jb25zdCBtaXR0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IGlzX2R5bmFtaWNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG5jb25zdCByb3V0ZV9tYXRjaGVyXzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xuY29uc3Qgcm91dGVfcmVnZXhfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aDtcbn1cbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgICAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgICAgIDogcGF0aDtcbn1cbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmZ1bmN0aW9uIHRvUm91dGUocGF0aCkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nO1xufVxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGgpID0+IHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKTtcbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCBpc1NlcnZlclJlbmRlciwgY2IpIHtcbiAgICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxO1xuICAgIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2godXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmApLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgIH0pLCB7XG4gICAgICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgZXJyLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lLCBxdWVyeSwgYXMsIHsgaW5pdGlhbFByb3BzLCBwYWdlTG9hZGVyLCBBcHAsIHdyYXBBcHAsIENvbXBvbmVudCwgZXJyLCBzdWJzY3JpcHRpb24sIGlzRmFsbGJhY2ssIH0pIHtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7fTtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCB1dGlsc18xLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKGUuc3RhdGUgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyICYmXG4gICAgICAgICAgICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgICAgICAgICAgICB1cmxfMS5wYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U3RhdGljRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHVybF8xLnBhcnNlKGFzUGF0aCkucGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICAgICAgICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgICAgICAgICAgIDogZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgbnVsbCwgdGhpcy5pc1NzciwgZGF0YSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB1cmxfMS5wYXJzZShhc1BhdGgsIHRydWUpO1xuICAgICAgICAgICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICBpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXM7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCBhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUocm91dGUsIG1vZCkge1xuICAgICAgICBjb25zdCBDb21wb25lbnQgPSBtb2QuZGVmYXVsdCB8fCBtb2Q7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkYXRhKSwgeyBDb21wb25lbnQsIF9fTl9TU0c6IG1vZC5fX05fU1NHLCBfX05fU1NQOiBtb2QuX19OX1NTUCB9KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGE7XG4gICAgICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgICAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAgICovXG4gICAgYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHB1c2godXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcmVwbGFjZSh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgY2hhbmdlKG1ldGhvZCwgX3VybCwgX2FzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgICAgICBpZiAodXRpbHNfMS5TVCkge1xuICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgICAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICAgICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmw7XG4gICAgICAgICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hcztcbiAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybCk7XG4gICAgICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgICAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcyk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgaWYgKGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSB1cmxfMS5wYXJzZShhcyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IHJvdXRlX3JlZ2V4XzEuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJvdXRlX21hdGNoZXJfMS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtID0+ICFxdWVyeVtwYXJhbV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICAgICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihyb3V0ZUluZm8gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCB1dGlsc18xLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKGVyciwgbG9hZEVycm9yRmFpbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZ2lwRXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXMgPT4gcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgfSksIHJlamVjdCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YSgoKSA9PiBfX05fU1NHXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIH0pKS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVFcnJvcik7XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgdGhpcy5ub3RpZnkoZGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgICAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKi9cbiAgICBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKTtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gdXRpbHNfMS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpO1xuICAgICAgICAgICAgZS5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSkge1xuICAgICAgICB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5Sb3V0ZXIuZXZlbnRzID0gbWl0dF8xLmRlZmF1bHQoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO1xuZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpIHtcbiAgICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTtcbn1cbmV4cG9ydHMuaXNEeW5hbWljUm91dGUgPSBpc0R5bmFtaWNSb3V0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpIHtcbiAgICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXg7XG4gICAgcmV0dXJuIChwYXRobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCc7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV07XG4gICAgICAgICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc107XG4gICAgICAgICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgICAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoZW50cnkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICAgICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBkZWNvZGUobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH07XG59XG5leHBvcnRzLmdldFJvdXRlTWF0Y2hlciA9IGdldFJvdXRlTWF0Y2hlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJyk7XG59XG5mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSkge1xuICAgIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpO1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGxldCBncm91cEluZGV4ID0gMTtcbiAgICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgZ3JvdXBzWyQxXG4gICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH07XG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gJy8oLis/KScgOiAnLyhbXi9dKz8pJztcbiAgICB9KTtcbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU7XG4gICAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gICAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpO1xuICAgICAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksIGdyb3VwcyB9LCAobmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgICAgIH1cbiAgICAgICAgOiB7fSkpO1xufVxuZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuLyoqXG4gKiBVdGlsc1xuICovXG5mdW5jdGlvbiBleGVjT25jZShmbikge1xuICAgIGxldCB1c2VkID0gZmFsc2U7XG4gICAgbGV0IHJlc3VsdDtcbiAgICByZXR1cm4gKCguLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmICghdXNlZCkge1xuICAgICAgICAgICAgdXNlZCA9IHRydWU7XG4gICAgICAgICAgICByZXN1bHQgPSBmbiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5leGVjT25jZSA9IGV4ZWNPbmNlO1xuZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gICAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gO1xufVxuZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luO1xuZnVuY3Rpb24gZ2V0VVJMKCkge1xuICAgIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO1xufVxuZXhwb3J0cy5nZXRVUkwgPSBnZXRVUkw7XG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBDb21wb25lbnRcbiAgICAgICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xufVxuZXhwb3J0cy5nZXREaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lO1xuZnVuY3Rpb24gaXNSZXNTZW50KHJlcykge1xuICAgIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50O1xufVxuZXhwb3J0cy5pc1Jlc1NlbnQgPSBpc1Jlc1NlbnQ7XG5hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwgY3R4KSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICgoX2EgPSBBcHAucHJvdG90eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKTtcbiAgICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxuICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BzO1xufVxuZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzID0gbG9hZEdldEluaXRpYWxQcm9wcztcbmV4cG9ydHMudXJsT2JqZWN0S2V5cyA9IFtcbiAgICAnYXV0aCcsXG4gICAgJ2hhc2gnLFxuICAgICdob3N0JyxcbiAgICAnaG9zdG5hbWUnLFxuICAgICdocmVmJyxcbiAgICAncGF0aCcsXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncG9ydCcsXG4gICAgJ3Byb3RvY29sJyxcbiAgICAncXVlcnknLFxuICAgICdzZWFyY2gnLFxuICAgICdzbGFzaGVzJyxcbl07XG5mdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwsIG9wdGlvbnMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4cG9ydHMudXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXJsXzEuZm9ybWF0KHVybCwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uID0gZm9ybWF0V2l0aFZhbGlkYXRpb247XG5leHBvcnRzLlNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydHMuU1QgPSBleHBvcnRzLlNQICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBUb3BTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL3RvcHNlY3Rpb25cIjtcbmltcG9ydCBPdGhlclByb2plY3RzIGZyb20gXCIuLi9jb21wb25lbnRzL290aGVycHJvamVjdHNcIjtcbmltcG9ydCB7IHVzZVZpZXdwb3J0U2Nyb2xsIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuZXhwb3J0IGNsYXNzIFByb2plY3QxIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuSW50cm9kdWN0aW9uID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgdGhpcy5SZXNlYXJjaCA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIHRoaXMuRGVzaWduID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgdGhpcy5GaXggPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICB0aGlzLlJlc3VsdCA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNjcm9sbFkgfSA9IHVzZVZpZXdwb3J0U2Nyb2xsKCk7XG5cbiAgICBjb25zdCBzY3JvbGxJbnRybyA9ICgpID0+XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IHRoaXMuSW50cm9kdWN0aW9uLmN1cnJlbnQub2Zmc2V0VG9wIC0gMjkwLFxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgIH0pO1xuICAgIGNvbnN0IHNjcm9sbFJlc2VhcmNoID0gKCkgPT5cbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogdGhpcy5SZXNlYXJjaC5jdXJyZW50Lm9mZnNldFRvcCAtIDEyMCxcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICB9KTtcbiAgICBjb25zdCBzY3JvbGxEZXNpZ24gPSAoKSA9PlxuICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiB0aGlzLkRlc2lnbi5jdXJyZW50Lm9mZnNldFRvcCAtIDEyMCxcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICB9KTtcbiAgICBjb25zdCBzY3JvbGxGaXggPSAoKSA9PlxuICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiB0aGlzLkZpeC5jdXJyZW50Lm9mZnNldFRvcCAtIDEyMCxcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICB9KTtcblxuICAgIGNvbnN0IHNjcm9sbFJlc3VsdCA9ICgpID0+XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IHRoaXMuUmVzdWx0LmN1cnJlbnQub2Zmc2V0VG9wIC0gMTIwLFxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgIH0pO1xuXG4gICAgY29uc3QgdGVzdCA9ICgpID0+IChcbiAgICAgIDxOYXY+XG4gICAgICAgIDxOYXZMaW5rIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0gb25DbGljaz17c2Nyb2xsSW50cm99PlxuICAgICAgICAgIEludHJvZHVjdGlvblxuICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDxOYXZMaW5rIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0gb25DbGljaz17c2Nyb2xsUmVzZWFyY2h9PlxuICAgICAgICAgIEZ1bmRhbWVudGFsIFJlc2VhcmNoXG4gICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPE5hdkxpbmsgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fSBvbkNsaWNrPXtzY3JvbGxEZXNpZ259PlxuICAgICAgICAgIERlc2lnbiBDb25zaWRlcmF0aW9uc1xuICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDxOYXZMaW5rIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0gb25DbGljaz17c2Nyb2xsRml4fT5cbiAgICAgICAgICBQb3N0LWxhdW5jaCBmaXhcbiAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8TmF2TGluayBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19IG9uQ2xpY2s9e3Njcm9sbFJlc3VsdH0+XG4gICAgICAgICAgUmVzdWx0c1xuICAgICAgICA8L05hdkxpbms+XG4gICAgICA8L05hdj5cbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0XG4gICAgICAgIHRpdGxlPVwiSm9sZW5lIE5nIHwgRm9vZCBTZWxmIFBpY2stdXBcIlxuICAgICAgICBwcm9qZWN0PXt0cnVlfVxuICAgICAgICBjaGlsZHJlbjI9e3Rlc3R9XG4gICAgICA+XG4gICAgICAgIDxUb3BTZWN0aW9uXG4gICAgICAgICAgdGl0bGU9XCJGb29kIHNlbGYgcGljay11cFwiXG4gICAgICAgICAgdGl0bGUyPVwiXCJcbiAgICAgICAgICB0aXRsZTM9XCJOZXcgYnVzaW5lc3Mgc3RyZWFtXCJcbiAgICAgICAgICBzdWJ0aXRsZT1cIlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxQYXJhZ3JhcGggcmVmPXt0aGlzLkludHJvZHVjdGlvbn0+XG4gICAgICAgICAgU2VsZiBwaWNrLXVwIGlzIGEgbmV3IHByb2R1Y3QgZGV2ZWxvcGVkIGFzIGFuIGV4dGVuc2lvbiBvZiBHcmFiJ3MgZm9vZFxuICAgICAgICAgIGRlbGl2ZXJ5IHNlcnZpY2UuIFRoZSBpZGVhIGlzIHRvIGFsbG93IGN1c3RvbWVycyB0byBwaWNrIHVwIHRoZWlyXG4gICAgICAgICAgb3JkZXIgZnJvbSB0aGUgcmVzdGF1cmFudCB0aGVtc2VsdmVzIGluc3RlYWQgb2YgaGF2aW5nIGEgZHJpdmVyXG4gICAgICAgICAgZGVsaXZlciBpdC5cbiAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgIDxTdWJ0aXRsZT5NeSByb2xlPC9TdWJ0aXRsZT5cbiAgICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgICBBcyB0aGUgZmlyc3QgZGVzaWduZXIgb24gdGhlIG5ldyBidXNpbmVzcyB0ZWFtLCBJIGNvbmR1Y3RlZCB0aGVcbiAgICAgICAgICBmdW5kYW1lbnRhbCByZXNlYXJjaCwgdXNhYmlsaXR5IHRlc3RpbmcgYW5kIGRlc2lnbmVkIHRoZSBleHBlcmllbmNlXG4gICAgICAgICAgZm9yIGJvdGggY3VzdG9tZXJzIGFuZCBtZXJjaGFudHMuXG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICA8RnVsbEltZyAvPlxuICAgICAgICA8U3VidGl0bGU+VGhlIGh5cG90aGVzaXM8L1N1YnRpdGxlPlxuICAgICAgICA8UGFyYWdyYXBoPlxuICAgICAgICAgIFRoZSBwcm9qZWN0IHdhcyBmaXJzdCBpbml0aWF0ZWQgd2hlbiB0aGUgdGVhbSBsb29rZWQgaW50byB0aGVcbiAgICAgICAgICBkaWZmZXJlbnQgd2F5cyBwZW9wbGUgd2VyZSBnZXR0aW5nIGZvb2QuIEFwYXJ0IGZyb20gZ2V0dGluZyBpdFxuICAgICAgICAgIGRlbGl2ZXJlZCwgdGhleSBjb3VsZCBhbHNvIGNvb2ssIGVhdCBvdXQgb3IgZ2V0IHRha2VvdXQuIFdlIHJlYWxpc2VkXG4gICAgICAgICAgdGhlcmUgd2FzIGFuIG9wcG9ydHVuaXR5IHRvIHByb3ZpZGUgdXNlcnMgd2l0aCBhbiBhbHRlcm5hdGl2ZSBvcHRpb25cbiAgICAgICAgICBvbiB0aGUgYXBwIGJ5IGFsbG93aW5nIHRoZW0gdG8gb3JkZXIgZm9yIHBpY2t1cC5cbiAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgIDxTdWJ0aXRsZSByZWY9e3RoaXMuUmVzZWFyY2h9PlJlc2VhcmNoPC9TdWJ0aXRsZT5cbiAgICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgICBBdCB0aGlzIHBvaW50LCB3ZSBmb3VuZCB0aGF0IHdoaWxlIHdlIHVuZGVyc3Rvb2QgdGhlIHByb2JsZW1zIHBlb3BsZVxuICAgICAgICAgIGZhY2Ugd2l0aCBkZWxpdmVyeSwgd2Ugc3RpbGwgaGFkIGEgbG90IHRvIGxlYXJuIGhvdyBhbmQgd2h5IGFyZSB3b3VsZFxuICAgICAgICAgIHRoZXkgdGFrZW91dCBmb29kLiBIZW5jZSwgSSBwbGFubmVkIGZvciBpbnRlcnZpZXcgYW5kIGNvbmNlcHQgdGVzdGluZ1xuICAgICAgICAgIHNlc3Npb25zIGluIGJvdGggU2luZ2Fwb3JlIGFuZCBJbmRvbmVzaWEuXG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICA8RnVsbEltZzIgLz5cbiAgICAgICAgPFBhcmFncmFwaDM+XG4gICAgICAgICAgV2Ugc3Bva2UgdG8gYm90aCBjdXN0b21lcnMgYW5kIG1lcmNoYW50cyB0byBkaXZlIGRlZXBlciBpbnRvIHRoZVxuICAgICAgICAgIGN1cnJlbnQgc3RydWdnbGVzIHRoZXkgZmFjZSB3aXRoIGdldHRpbmcgYW5kIHByZXBhcmluZyB0YWtlb3V0LiBXZVxuICAgICAgICAgIGZvdW5kIHRoYXQ6XG4gICAgICAgIDwvUGFyYWdyYXBoMz5cbiAgICAgICAgPFN1YnRpdGxlPktleSBmaW5kaW5nczwvU3VidGl0bGU+XG5cbiAgICAgICAgPExpc3Q+XG4gICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFRoZSBtYWluIGlzc3VlIHBlb3BsZSBmYWNlIHdoZW4gZ2V0dGluZyB0YWtlb3V0IGlzIHdpdGggcXVldWVpbmdcbiAgICAgICAgICAgICAgYXMgd2VsbCBhcyBoYXZpbmcgdG8gd2FpdCBmb3IgdGhlIGZvb2QgdG8gYmUgcHJlcGFyZWQuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgUGVvcGxlIHRlbmQgdG8gYmUgbGVzcyBhZHZlbnR1cm91cyBmb3IgdGFrZW91dCBvcmRlcnMgYW5kIGxpa2UgdG9cbiAgICAgICAgICAgICAgZmluZCBhIGZldyBnb29kIHNwb3RzIG5lYXIgdGhlaXIgc3Vycm91bmRpbmdzIGUuZy4gaG9tZSAmIG9mZmljZVxuICAgICAgICAgICAgICB0byBmcmVxdWVudC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBQZW9wbGUgYXJlIGludGVyZXN0ZWQgaW4gYmVpbmcgYWJsZSB0byBhdm9pZCB0aGUgZGVsaXZlcnkgY29zdCBieVxuICAgICAgICAgICAgICBwaWNraW5nIHVwIHRoZWlyIG9yZGVyIG9uIHRoZWlyIG93biBhcyBnZXR0aW5nIGRlbGl2ZXJ5IGFsbCB0aGVcbiAgICAgICAgICAgICAgdGltZSB3b3VsZCBiZSBleHBlbnNpdmVcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICA8L0xpc3Q+XG4gICAgICAgIDxTdWJ0aXRsZSByZWY9e3RoaXMuRGVzaWdufT5EZXNpZ248L1N1YnRpdGxlPlxuICAgICAgICA8UGFyYWdyYXBoPlxuICAgICAgICAgIFdpdGggdGhhdCwgd2Ugc3RhcnRlZCBtYXBwaW5nIG91dCB0aGUgZXhwZWN0ZWQgZmxvdyBhcyB3ZWxsIGFzIGhvd1xuICAgICAgICAgIGluZm9ybWF0aW9uIHdpbGwgcGFzcyB0aHJvdWdoIGZyb20gdGhlIGN1c3RvbWVyIHRvIHRoZSBtZXJjaGFudCBiZWZvcmVcbiAgICAgICAgICB3b3JraW5nIG9uIHRoZSBkZXNpZ24gZGV0YWlscy5cbiAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgIDxTdWJ0aXRsZT5Db25zaWRlcmF0aW9uICMxOjwvU3VidGl0bGU+XG4gICAgICAgIDxRdW90ZTI+RGlzdGFuY2UgbWF0dGVyczwvUXVvdGUyPlxuICAgICAgICA8UGFyYWdyYXBoPlxuICAgICAgICAgIEdpdmVuIHRoYXQgd2hlbiBpdCBjb21lcyB0byBnZXR0aW5nIHRha2VvdXQsIGN1c3RvbWVycyBjYXJlIG1vcmUgYWJvdXRcbiAgICAgICAgICBob3cgbXVjaCB0aGV5IG5lZWQgdG8gdHJhdmVsLCB3ZSBtYWRlIHRoZSBjYWxsIHRvIHByaW9yaXRpc2Ugc2hvd2luZ1xuICAgICAgICAgIGhvdyBmYXIgdGhlIHJlc3RhdXJhbnQgaXMgY29tcGFyZWQgdG8gb3RoZXIgaW5mb3JtYXRpb24gdG8gaGVscCB3aXRoXG4gICAgICAgICAgZGVjaXNvbiBtYWtpbmcuXG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICA8RnVsbEltZzMgLz5cbiAgICAgICAgPFN1YnRpdGxlPkNvbnNpZGVyYXRpb24gIzI6PC9TdWJ0aXRsZT5cbiAgICAgICAgPFF1b3RlMj5PcmRlciBjb2xsZWN0aW9uPC9RdW90ZTI+XG4gICAgICAgIDxQYXJhZ3JhcGg+XG4gICAgICAgICAgV2hlbiBpdCBjYW1lIHRvIG9yZGVyIGNvbGxlY3Rpb24sIHRoZXJlIHdhcyBhIHRyYWRlLW9mZiB0byBtYWtlXG4gICAgICAgICAgYmV0d2VlbiBhY2N1cmFjeSAoaS5lLiBjb2xsZWN0aW5nIHRoZSByaWdodCBvcmRlcikgYW5kIGVhc2Ugb2YgdXNlXG4gICAgICAgICAgKGkuZS4gaG93IG11Y2ggZWZmb3J0IGlzIHJlcXVpcmVkIHRvIGNvbGxlY3QpLlxuICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgPFBhcmFncmFwaDI+XG4gICAgICAgICAgV2UgY29uc2lkZXJlZCByZXF1aXJpbmcgdGhlIGN1c3RvbWVyIHRvIHNjYW4gYSBxciBjb2RlIGZvciBiZXR0ZXJcbiAgICAgICAgICBhY2N1cmFjeSBidXQgZGVjaWRlZCB0byBnbyB3aXRoIGhhdmluZyBhIHN3aXBlIGJ1dHRvbiBvbiB0aGUgb3JkZXJcbiAgICAgICAgICBzY3JlZW4gaW5zdGVhZC4gSWYgdGhlIGN1c3RvbWVyIGRvZXMgbm90IGNvbXBsZXRlIHRoZSBvcmRlciwgdGhlXG4gICAgICAgICAgcmVzdGF1cmFudCB3aWxsIGJlIGFibGUgdG8gZG8gc28gb24gdGhlaXIgZW5kIGFmdGVyIHNvbWUgdGltZS5cbiAgICAgICAgPC9QYXJhZ3JhcGgyPlxuICAgICAgICA8RnVsbEltZzQgLz5cbiAgICAgICAgPFN1YnRpdGxlIHJlZj17dGhpcy5GaXh9PlBvc3QtbGF1bmNoIGZpeDwvU3VidGl0bGU+XG4gICAgICAgIDxRdW90ZTI+SGlnaCBjYW5jZWxsYXRpb24gcmF0ZXM8L1F1b3RlMj5cbiAgICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgICBXaGVuIHRoZSBmZWF0dXJlIGZpcnN0IGxhdW5jaGVkLCB3ZSBub3RpY2VkIGFuIHVudXN1YWxseSBoaWdoIG51bWJlclxuICAgICAgICAgIG9mIGNhbmNlbGxhdGlvbnMgYW5kIHJlYWxpc2VkIG1vc3Qgb2YgaXQgd2FzIGNvbWluZyBmcm9tIGN1c3RvbWVycyB3aG9cbiAgICAgICAgICB3ZXJlIHRob3VnaHQgdGhleSB3ZXJlIG1hZGUgYSBkZWxpdmVyeSBvcmRlci4gRXZlbiB0aG91Z2ggd2Ugd2VyZVxuICAgICAgICAgIGF3YXJlIG9mIHRoaXMgcG9zc2liaWx0eSBiZWZvcmUgbGF1bmNoLCB3ZSBtaXN0YWtlbmx5IHRob3VnaHQgdGhhdFxuICAgICAgICAgIHN1YnRsZSBjdWVzIHdlcmUgc3VmZmljaWVudCB0byBkaWZmZXJlbnRpYXRlIHRoZSB0d28uXG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICA8UGFyYWdyYXBoMj5cbiAgICAgICAgICBBIHF1aWNrLWZpeCB3YXMgaW1wbGVtZW50ZWQgdG8gYWRkIGluIHN0b3JuZ2VyIHZpc3VhbCBjdWVzIHRoYXQgdGhpc1xuICAgICAgICAgIGlzIGEgc2VsZiBwaWNrLXVwIG9yZGVyLiBXaXRoIHRoZSBmaXgse1wiIFwifVxuICAgICAgICAgIDxiPmNhbmNlbGxhdGlvbiByYXRlcyB3ZW50IGRvd24gZnJvbSAyNCUgdG8gNSUgaW4gYSBmZXcgd2Vla3MgPC9iPiBhbmRcbiAgICAgICAgICBpcyBub3dhZGF5cyBob2xkaW5nIHN0ZWFkeSBhdCAwLjUlXG4gICAgICAgIDwvUGFyYWdyYXBoMj5cbiAgICAgICAgPEZ1bGxJbWc1IC8+XG4gICAgICAgIDxTdWJ0aXRsZT5EZXNpZ24gc25hcHNob3QgPC9TdWJ0aXRsZT5cbiAgICAgICAgPEZ1bGxJbWc2IC8+XG4gICAgICAgIDxTdWJ0aXRsZSByZWY9e3RoaXMuUmVzdWx0fT5SZXN1bHRzPC9TdWJ0aXRsZT5cbiAgICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgICBUaGUgU2VsZiBQaWNrLXVwIHByb2R1Y3QgaGFzIGJlZW4gc3RlYWRpbHkgZ3Jvd2luZyBzaW5jZSB0aGUgaW5pdGFsXG4gICAgICAgICAgcGlsb3QgYW5kIGlzIG5vdyBhdmFpbGFibGUgaW4gNiBjb3VudHJpZXMgYWNyb3NzIFNvdXRoIEVhc3QgQXNpYSB3aXRoXG4gICAgICAgICAgb3ZlciAzNjBrIHJlc3R1YXJhbnRzIG9uYm9hcmQuIEFkZGl0b25hbGx5LCB3aXRoIHRoZSBjdXJyZW50XG4gICAgICAgICAgY292aWQtcmVhbGl0eSwgc2VsZiBwaWNrLXVwIGhhcyBiZWVuIGEgdGltZWx5IGFkZGl0aW9uIHRvIHNlcnZlIHRoZVxuICAgICAgICAgIG5lZWRzIG9mIGN1c3RvbWVycyB3aG8gd2FudGVkIHRvIHRha2VvdXQgZm9vZCBidXQgZGlkIG5vdCB3YW50IHRvXG4gICAgICAgICAgc3BlbmQgdG9vIG11Y2ggdGltZSBvdXRkb29ycy5cbiAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgIDxTdWJ0aXRsZT5SZWZsZWN0aW9uPC9TdWJ0aXRsZT5cbiAgICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgICBJdCBoYXMgYmVlbiBhIGZhY2luYXRpbmcgam91cm5leSBzZWVpbmcgYSBwcm9kdWN0IGdyb3cgZnJvbSBhIGJsYW5rXG4gICAgICAgICAgcG93ZXIgcG9pbnQgc2xpZGUgdG8gc2VydmluZyB0aG91c2FuZHMgb2Ygb3JkZXJzIGRhaWx5LiBJbiBwYXJ0aWN1bGFyLFxuICAgICAgICAgIEkgY2hlcmlzaCB0aGUgZXhwZXJpZW5jZSBvZiB3b3JraW5nIGNsb3Nlc2x5IHdpdGggdGhlIHRlYW0gdG8gcm9sbCBvdXRcbiAgICAgICAgICBmaXhlcyB3aGVuIHRoaW5ncyB3ZXJlIG5vdCBnb2luZyBhcyBwbGFubmVkIGFmdGVyIGxhdW5jaC5cbiAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgIDxQYXJhZ3JhcGgyPlxuICAgICAgICAgIFNpbmNlIHRoaXMgaXRlcmF0aW9uLCB3ZSBoYXZlIHNpbmNlIGFsc28gbWFkZSBmdXJ0aGVyIGltcHJvdmVtZW50cyBhbmRcbiAgICAgICAgICBlbmhhbmNlbWVudHMgbGlrZSBzaG93aW5nIGEgbWFwIHZpZXcgb2YgbmVhcmJ5IHJlc3RhdXJhbnRzLiBJJ21cbiAgICAgICAgICBleGNpdGVkIHRvIHNlZSB0byBzZWUgaG93IHRoZSBwcm9kdXQgd2lsbCBjb250aW51ZSB0byBncm93IGFzIHBhcnQgb2ZcbiAgICAgICAgICBHcmFiJ3Mgc3VwZXIgYXBwLlxuICAgICAgICA8L1BhcmFncmFwaDI+XG4gICAgICAgIDxGdWxsSW1nNyAvPlxuICAgICAgICA8U3VidGl0bGU+T3RoZXIgUHJvamVjdHMgPC9TdWJ0aXRsZT5cbiAgICAgICAgPE90aGVyUHJvamVjdHNcbiAgICAgICAgICB1cmwxPVwiL3Byb2plY3QyXCJcbiAgICAgICAgICBwcm9qMT1cIkRlbGl2ZXJ5IEZlYXR1cmVzXCJcbiAgICAgICAgICB1cmwyPVwiL3Byb2plY3QzXCJcbiAgICAgICAgICBwcm9qMj1cIlBhcmVudHMgR2F0ZXdheVwiXG4gICAgICAgICAgdXJsMz1cIi9wcm9qZWN0NFwiXG4gICAgICAgICAgcHJvajM9XCJIb3VzaW5nIHJlc2FsZSBwb3J0YWxcIlxuICAgICAgICAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBOYXYgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgbWFyZ2luOiAxNnB4IDBweCAwIDA7XG5gO1xuXG5jb25zdCBOYXZMaW5rID0gc3R5bGVkLmFgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDIwMHB4O1xuICBwYWRkaW5nOiA4cHggOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgdHJhbnNpdGlvbjogJHt0aGVtZS5hbmltYXRpb25zLmRlZmF1bHR9O1xuICA6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMzEsIDMxLCA1NCwgMC40KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuXG5jb25zdCBTdWJ0aXRsZSA9IHN0eWxlZC5oNGBcbiAgbWFyZ2luLXRvcDogNDhweDtcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWUuZm9udFdlaWdodHMuc2VtaWJvbGR9O1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcnMubGlnaHRncmV5M307XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsyXX0pIHtcbiAgICBtYXJnaW4tdG9wOiA0OHB4O1xuICB9XG5gO1xuXG5jb25zdCBQYXJhZ3JhcGggPSBzdHlsZWQucGBcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBhIHtcbiAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udFNpemVzWzRdfTtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzJdfSkge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cbmA7XG5cbmNvbnN0IFBhcmFncmFwaDIgPSBzdHlsZWQucGBcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmxpZ2h0Z3JleTF9O1xuICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzJdfSkge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cbiAgYSB7XG4gICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnRTaXplc1s0XX07XG4gIH1cbmA7XG5cbmNvbnN0IFBhcmFncmFwaDMgPSBzdHlsZWQucGBcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsyXX0pIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG5gO1xuXG5jb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxuICBtYXJnaW4tbGVmdDogMjFweDtcbiAgbWFyZ2luLXRvcDogLThweDtcbmA7XG5jb25zdCBMaXN0SXRlbSA9IHN0eWxlZC5saWBcbiAgcGFkZGluZy10b3A6IDE2cHg7XG5gO1xuXG5jb25zdCBRdW90ZTIgPSBzdHlsZWQuaDNgXG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5saWdodGdyZXkxfTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsyXX0pIHtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICB9XG5gO1xuXG5jb25zdCBGdWxsSW1nID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbi10b3A6IDQ4cHg7XG4gIG1hcmdpbi1ib3R0b206IDY0cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzEsIDMxLCA1NCwgMC40KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcGstMS5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMl19KSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgaGVpZ2h0OiAxOTBweDtcbiAgfVxuYDtcblxuY29uc3QgRnVsbEltZzIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcGstMi5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMl19KSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgfVxuYDtcblxuY29uc3QgRnVsbEltZzMgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTZweDtcbiAgYmFja2dyb3VuZDogcmdiYSgzMSwgMzEsIDU0LCAwLjQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3Nway0zLnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsyXX0pIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IDE3MHB4O1xuICB9XG5gO1xuXG5jb25zdCBGdWxsSW1nNCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI3MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1NnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMxLCAzMSwgNTQsIDAuNCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3BrLTQucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzJdfSkge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGhlaWdodDogMTcwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IEZ1bGxJbWc1ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDU2cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzEsIDMxLCA1NCwgMC40KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcGstNS5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMl19KSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgaGVpZ2h0OiAxNzBweDtcbiAgfVxuYDtcbmNvbnN0IEZ1bGxJbWc2ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDU2cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzEsIDMxLCA1NCwgMC40KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcGstNi5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMl19KSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgfVxuYDtcblxuY29uc3QgRnVsbEltZzcgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luLXRvcDogNDhweDtcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcbiAgYmFja2dyb3VuZDogcmdiYSgzMSwgMzEsIDU0LCAwLjQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3Nway03LnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsyXX0pIHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0MTtcbiIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuXG5jb25zdCBHbG9iYWxTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZWBcblxuaHRtbHtcbiAgICBiYWNrZ3JvdW5kOiBoc2woMjQwLCA2MCUsIDUlKTtcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMubGlnaHRncmV5Mn07XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFswXX0pe1xuICBib2R5OmJlZm9yZSwgYm9keTphZnRlcnsgXG4gICAgbWF4LXdpZHRoOiA5MHZ3O1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDBkZWcsIzI0MkEyRSAxcHgsdHJhbnNwYXJlbnQgMHB4KSAwIDAgLyBjYWxjKDkwdncvNCkgYXV0bztcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzFdfSl7XG5ib2R5OmJlZm9yZSwgYm9keTphZnRlcnsgXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMGRlZywjMTkxRDIwIDFweCx0cmFuc3BhcmVudCAwcHgpIDAgMCAvIGNhbGMoOTB2dy8yKSBhdXRvO1xuICB9XG59XG5cbmgxIHtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUuZm9udFdlaWdodHMuYm9sZH07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMV19KXtcbmgxIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUuZm9udFdlaWdodHMuYm9sZH07XG59XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMl19KXtcbmgxIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUuZm9udFdlaWdodHMuYm9sZH07XG59XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udFNpemVzWzFdfTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDE0ZW07XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUuZm9udFdlaWdodHMuc2VtaWJvbGR9O1xufVxuXG5oMyB7XG4gICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnRTaXplc1syXX07XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuXG5oNCB7XG4gICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnRTaXplc1s0XX07XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMGVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLmZvbnRXZWlnaHRzLnJlZ3VsYXJ9O1xufVxuXG5oNSB7XG4gICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnRTaXplc1s1XX07XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAwOGVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG5oNiB7XG4gICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnRTaXplc1s2XX07XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAwMmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLmZvbnRXZWlnaHRzLnNlbWlib2xkfTtcbn1cblxucCB7XG4gICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnRTaXplc1s0XX07XG4gICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMTBlbTtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBmb250LXdlaWdodDogJHt0aGVtZS5mb250V2VpZ2h0cy5yZWd1bGFyfTtcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dFNlY29uZGFyeX07XG59XG5cbnNwYW4ge1xuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250U2l6ZXNbNl19O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMDRlbTtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBmb250LXdlaWdodDogJHt0aGVtZS5mb250V2VpZ2h0cy5yZWd1bGFyfTtcbn1cblxuYSB7XG4gICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnRTaXplc1s1XX07XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAwNmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLmZvbnRXZWlnaHRzLnJlZ3VsYXJ9O1xuICAgIGNvbG9yOiByZ2IoNjQsMTU2LDI1NSk7XG59XG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlcztcbiIsImNvbnN0IHRoZW1lID0ge1xuICBtYXhXaWR0aDogXCI4MDBweFwiLFxuICBicmVha3BvaW50OiBbXG4gICAgXCIxMTUwcHhcIiwgLy8gMFxuICAgIFwiODkwcHhcIiwgLy8gMVxuICAgIFwiNjAwcHhcIiwgLy8gMlxuICAgIFwiMzYwcHhcIiwgLy8gM1xuICBdLFxuICBzcGFjZTogW1xuICAgIFwiMHB4XCIsIC8vIDBcbiAgICBcIjRweFwiLCAvLyAxXG4gICAgXCI4cHhcIiwgLy8gMlxuICAgIFwiMTZweFwiLCAvLyAzXG4gICAgXCIyNHB4XCIsIC8vIDRcbiAgICBcIjMycHhcIiwgLy8gNVxuICAgIFwiNDhweFwiLCAvLyA2XG4gICAgXCI2NHB4XCIsIC8vIDdcbiAgICBcIjk2cHhcIiwgLy8gOFxuICAgIFwiMTI4cHhcIiwgLy8gOVxuICAgIFwiMTYwcHhcIiwgLy8gMTBcbiAgXSxcbiAgZm9udFNpemVzOiBbXG4gICAgXCIycmVtXCIsIC8vIDAgMzJweFxuICAgIFwiMS44NzVyZW1cIiwgLy8gMSAzMHB4XG4gICAgXCIxLjVyZW1cIiwgLy8gMiAyNHB4XG4gICAgXCIxLjI1cmVtXCIsIC8vIDMgMjBweFxuICAgIFwiMS4xMjVyZW1cIiwgLy8gNCAxOHB4XG4gICAgXCIxcmVtXCIsIC8vIDUgMTZweFxuICAgIFwiMC44NzVyZW1cIiwgLy8gNiAxNHB4XG4gICAgXCIwLjc1cmVtXCIsIC8vIDcgMTJweFxuICBdLFxuICBmb250V2VpZ2h0czoge1xuICAgIHJlZ3VsYXI6IDQwMCxcbiAgICBtZWRpdW06IDUwMCxcbiAgICBzZW1pYm9sZDogNjAwLFxuICAgIGJvbGQ6IDcwMCxcbiAgfSxcbiAgY29sb3JzOiB7XG4gICAgbGlnaHRncmV5NDogXCIjRjlGQUZCXCIsXG4gICAgbGlnaHRncmV5MzogXCIjRjRGNkY4XCIsXG4gICAgbGlnaHRncmV5MjogXCIjREZFM0U4XCIsXG4gICAgbGlnaHRncmV5MTogXCIjQzRDREQ1XCIsXG4gICAgZ3JleTQ6IFwiIzkxOUVBQlwiLFxuICAgIGdyZXkzOiBcIiM2MzczODFcIixcbiAgICBncmV5MjogXCIjNDU0RjVCXCIsXG4gICAgZ3JleTE6IFwiIzIxMkIzNlwiLFxuICAgIHRleHQ6IFwiI0Y5RkFGQlwiLFxuICAgIHRleHRTZWNvbmRhcnk6IFwiI0RGRTNFOFwiLFxuICAgIHRleHRMaW5rOiBcInJnYig2NCwxNTYsMjU1KVwiLFxuICB9LFxuICBhbmltYXRpb25zOiB7XG4gICAgZGVmYXVsdDogXCJlYXNlIDAuNHM7XCIsXG4gICAgaG92ZXI6IFwiMC4zNXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKVwiLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcmFtZXItbW90aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbG90dGllXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9