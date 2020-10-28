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
      href: "/",
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
      href: "/",
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
})(["position:-webkit-sticky;position:sticky;top:120px;height:360px;display:flex;flex-direction:column;@media (max-width:", "){display:none;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[1]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dyaWQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vdGhlcnByb2plY3RzLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpZGViYXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2lkZWJhcjIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdG9wc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9qZWN0MS50c3giLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2dsb2JhbHN0eWxlcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3RoZW1lLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZyYW1lci1tb3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWxvdHRpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiXSwibmFtZXMiOlsiRm9vdGVyIiwiUmVhY3QiLCJyZW5kZXIiLCJGb290ZXJDb250YWluZXIiLCJzdHlsZWQiLCJmb290ZXIiLCJ0aGVtZSIsInNwYWNlIiwiY29sb3JzIiwiZ3JleTMiLCJicmVha3BvaW50IiwiU29jaWFscyIsImRpdiIsIlNvY2lhbEljb24iLCJzdmciLCJncmV5MiIsImFuaW1hdGlvbnMiLCJkZWZhdWx0IiwiRm9vdGVyMiIsImRlZmF1bHRPcHRpb25zIiwibG9vcCIsImF1dG9wbGF5IiwiYW5pbWF0aW9uRGF0YSIsInJlbmRlcmVyU2V0dGluZ3MiLCJwcmVzZXJ2ZUFzcGVjdFJhdGlvIiwiVGV4dENvbnRhaW5lciIsInB4IiwibnVtYmVyIiwiR3JpZENvbnRhaW5lciIsInByb3BzIiwiZ2FwIiwiY29sdW1ucyIsIkdyaWQiLCJMaW5rcyIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbG9yIiwicGF0aG5hbWUiLCJIZWFkZXIiLCJtYXJnaW5Cb3R0b20iLCJzaG93SW5mbyIsInRleHRTZWNvbmRhcnkiLCJTaWRlYmFyQ29udGFpbmVyIiwiTG9nbyIsImEiLCJOYW1lIiwiTmF2IiwibW90aW9uIiwiTmF2TGluayIsIlNob3dJbmZvIiwic2Nyb2xsWSIsInVzZVZpZXdwb3J0U2Nyb2xsIiwiZmlyc3RSYW5nZSIsInNlY29uZFJhbmdlIiwib3BhY2l0eVJhbmdlIiwiTW92ZVJhbmdlIiwiZmlyc3RPcCIsInVzZVRyYW5zZm9ybSIsImZpcnN0TW92ZSIsInNlY29uZE9wIiwic2Vjb25kTW92ZSIsImRpc3BsYXkiLCJob21lIiwibWFyZ2luVG9wIiwib3BhY2l0eSIsInRyYW5zbGF0ZVkiLCJTY3JvbGxJbmRpY2F0b3IiLCJ3aWR0aCIsInNldFdpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInNjcm9sbFlQcm9ncmVzcyIsIlNjcm9sbFJhbmdlIiwiV2lkdGhSYW5nZSIsIlNjcm9sbFdpZHRoIiwiTGF5b3V0IiwidGl0bGUiLCJwcm9qZWN0IiwiY2hpbGRyZW4yIiwiY2hpbGRyZW4iLCJhYm91dCIsIkJvZHlDb250YWluZXIiLCJDb250ZW50Q29udGFpbmVyIiwibWF4V2lkdGgiLCJUaW1lUmFuZ2UiLCJoNiIsImZvbnRXZWlnaHRzIiwic2VtaWJvbGQiLCJncmV5NCIsIkNvbXBhbnlUaXRsZSIsImgyIiwiQ29tcGFueURlc2MiLCJoNCIsInJlZ3VsYXIiLCJsaWdodGdyZXkxIiwiTGF5b3V0R3JpZCIsIlRpbWVTZWN0aW9uIiwiU2Nyb2xsRGl2IiwiT3RoZXJQcm9qZWN0cyIsInVybDEiLCJwcm9qMSIsInVybDIiLCJwcm9qMiIsInVybDMiLCJwcm9qMyIsImZvbnRTaXplcyIsInRleHRMaW5rIiwiZm9udFdlaWdodCIsIm1lZGl1bSIsIlNpZGViYXIiLCJEaXZpZGVyIiwiU2lkZWJhcjIiLCJUb3BTZWN0aW9uIiwidGl0bGUyIiwidGl0bGUzIiwic3VidGl0bGUiLCJUb3BDb250YWluZXIiLCJBY2NlbnRUaXRsZSIsImgxIiwiRGFya1RpdGxlIiwiU3VidGl0bGUiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJfcmVhY3QiLCJfdXJsIiwiX3V0aWxzIiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiaXNMb2NhbCIsImhyZWYiLCJ1cmwiLCJwYXJzZSIsIm9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwiaG9zdCIsInByb3RvY29sIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRGdW5jIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRVcmwiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIm9ic2VydmVyIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJ1bmRlZmluZWQiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaGFzIiwidGFyZ2V0IiwiY2IiLCJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiZGVsZXRlIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImVsIiwib2JzZXJ2ZSIsInNldCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIkxpbmsiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInAiLCJjbGVhblVwTGlzdGVuZXJzIiwiZm9ybWF0VXJscyIsImFzSHJlZiIsImFkZEJhc2VQYXRoIiwibGlua0NsaWNrZWQiLCJlIiwibm9kZU5hbWUiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsb2NhdGlvbiIsInJlc29sdmUiLCJwcmV2ZW50RGVmYXVsdCIsInNjcm9sbCIsImluZGV4T2YiLCJyZXBsYWNlIiwic2hhbGxvdyIsInRoZW4iLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJkb2N1bWVudCIsImJvZHkiLCJmb2N1cyIsInByZWZldGNoIiwid2FybiIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJwYXJzZWRIcmVmIiwicGFyc2VkQXMiLCJyZXNvbHZlZEhyZWYiLCJoYW5kbGVSZWYiLCJyZWYiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwiam9pbiIsIm9wdGlvbnMiLCJwYXRocyIsImNhdGNoIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY3VycmVudCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJwYXNzSHJlZiIsInR5cGUiLCJwcm9jZXNzIiwiY2xvbmVFbGVtZW50IiwiZXhlY09uY2UiLCJQcm9wVHlwZXMiLCJleGFjdCIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJib29sIiwiZWxlbWVudCIsInByb3BOYW1lIiwidmFsdWUiLCJfZGVmYXVsdCIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsImNyZWF0ZVJvdXRlciIsIndpdGhSb3V0ZXIiLCJSb3V0ZXIiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwiYXJndW1lbnRzIiwiZXZlbnQiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJFcnJvciIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiX2xlbiIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiYXNzaWduIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJtaXR0IiwiYWxsIiwiY3JlYXRlIiwiaGFuZGxlciIsInB1c2giLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsInNsaWNlIiwibWFwIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwidXJsXzEiLCJtaXR0XzEiLCJ1dGlsc18xIiwiaXNfZHluYW1pY18xIiwicm91dGVfbWF0Y2hlcl8xIiwicm91dGVfcmVnZXhfMSIsImJhc2VQYXRoIiwicGF0aCIsImRlbEJhc2VQYXRoIiwic3Vic3RyIiwidG9Sb3V0ZSIsInByZXBhcmVSb3V0ZSIsImZldGNoTmV4dERhdGEiLCJxdWVyeSIsImlzU2VydmVyUmVuZGVyIiwiYXR0ZW1wdHMiLCJnZXRSZXNwb25zZSIsImZldGNoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJjcmVkZW50aWFscyIsInJlcyIsIm9rIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJjb2RlIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwic2RjIiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJpc1NzciIsImFzUGF0aCIsIl9icHMiLCJfZ2V0U3RhdGljRGF0YSIsIlByb21pc2UiLCJfZ2V0U2VydmVyRGF0YSIsInJvdXRlIiwiY29tcG9uZW50cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiaXNEeW5hbWljUm91dGUiLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJfcmV3cml0ZVVybEZvck5leHRFeHBvcnQiLCJ1cGRhdGUiLCJuZXdEYXRhIiwibm90aWZ5IiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJjaGFuZ2UiLCJtZXRob2QiLCJfYXMiLCJyZWplY3QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwidXJsSXNOZXciLCJhc1BhdGhuYW1lIiwicm91dGVSZWdleCIsImdldFJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwiZ2V0Um91dGVNYXRjaGVyIiwibWlzc2luZ1BhcmFtcyIsImtleXMiLCJncm91cHMiLCJmaWx0ZXIiLCJwYXJhbSIsImdldFJvdXRlSW5mbyIsInJvdXRlSW5mbyIsImNhbmNlbGxlZCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwibG9hZEVycm9yRmFpbCIsImZldGNoQ29tcG9uZW50IiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsIl9nZXREYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic3BsaXQiLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJURVNUX1JPVVRFIiwidGVzdCIsInJlIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIl8iLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwicmVwZWF0IiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJub3JtYWxpemVkUm91dGUiLCJlc2NhcGVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiJDEiLCJpc0NhdGNoQWxsIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwidXNlZCIsImhvc3RuYW1lIiwicG9ydCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9hIiwicHJvdG90eXBlIiwicGFnZVByb3BzIiwidXJsT2JqZWN0S2V5cyIsImZvcm1hdCIsIlNQIiwibWVhc3VyZSIsIlByb2plY3QxIiwiSW50cm9kdWN0aW9uIiwiY3JlYXRlUmVmIiwiUmVzZWFyY2giLCJEZXNpZ24iLCJGaXgiLCJSZXN1bHQiLCJzY3JvbGxJbnRybyIsInRvcCIsIm9mZnNldFRvcCIsImJlaGF2aW9yIiwic2Nyb2xsUmVzZWFyY2giLCJzY3JvbGxEZXNpZ24iLCJzY3JvbGxGaXgiLCJzY3JvbGxSZXN1bHQiLCJsaWdodGdyZXkzIiwiUGFyYWdyYXBoIiwiUGFyYWdyYXBoMiIsIlBhcmFncmFwaDMiLCJMaXN0IiwidWwiLCJMaXN0SXRlbSIsImxpIiwiUXVvdGUyIiwiaDMiLCJGdWxsSW1nIiwiRnVsbEltZzIiLCJGdWxsSW1nMyIsIkZ1bGxJbWc0IiwiRnVsbEltZzUiLCJGdWxsSW1nNiIsIkZ1bGxJbWc3IiwiR2xvYmFsU3R5bGVzIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJsaWdodGdyZXkyIiwiYm9sZCIsImxpZ2h0Z3JleTQiLCJncmV5MSIsInRleHQiLCJob3ZlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxNQUFOLFNBQXFCQywr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QUNEO0FBQ1IsWUFGUyxFQUVHO0FBQ1osVUFIUyxFQUdDO0FBQ1YsV0FKUyxFQUlFO0FBQ1gsWUFMUyxFQUtHO0FBQ1osUUFOUyxFQU1EO0FBQ1IsWUFQUyxFQU9HO0FBQ1osV0FSUyxDQVFFO0FBUkYsR0FyQkM7QUErQlpuQixhQUFXLEVBQUU7QUFDWE8sV0FBTyxFQUFFLEdBREU7QUFFWGUsVUFBTSxFQUFFLEdBRkc7QUFHWHJCLFlBQVEsRUFBRSxHQUhDO0FBSVhzWixRQUFJLEVBQUU7QUFKSyxHQS9CRDtBQXFDWnJlLFFBQU0sRUFBRTtBQUNOc2UsY0FBVSxFQUFFLFNBRE47QUFFTnJCLGNBQVUsRUFBRSxTQUZOO0FBR05tQixjQUFVLEVBQUUsU0FITjtBQUlOOVksY0FBVSxFQUFFLFNBSk47QUFLTk4sU0FBSyxFQUFFLFNBTEQ7QUFNTi9FLFNBQUssRUFBRSxTQU5EO0FBT05NLFNBQUssRUFBRSxTQVBEO0FBUU5nZSxTQUFLLEVBQUUsU0FSRDtBQVNOQyxRQUFJLEVBQUUsU0FUQTtBQVVOdmMsaUJBQWEsRUFBRSxTQVZUO0FBV05pRSxZQUFRLEVBQUU7QUFYSixHQXJDSTtBQWtEWjFGLFlBQVUsRUFBRTtBQUNWQyxXQUFPLEVBQUUsWUFEQztBQUVWZ2UsU0FBSyxFQUFFO0FBRkc7QUFsREEsQ0FBZDtBQXdEZTNlLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERBLDBDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpYy9kZXZlbG9wbWVudC9wYWdlcy9wcm9qZWN0MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuXG5leHBvcnQgY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9vdGVyQ29udGFpbmVyPlxuICAgICAgICA8U29jaWFscz5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2pvbGVuZW5nL1wiPlxuICAgICAgICAgICAgPFNvY2lhbEljb25cbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgICAgICAgICAgICBkYXRhLXByZWZpeD1cImZhYlwiXG4gICAgICAgICAgICAgIGRhdGEtaWNvbj1cImxpbmtlZGluLWluXCJcbiAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMTAwLjI4IDQ0OEg3LjRWMTQ4LjloOTIuODh6TTUzLjc5IDEwOC4xQzI0LjA5IDEwOC4xIDAgODMuNSAwIDUzLjhhNTMuNzkgNTMuNzkgMCAwIDEgMTA3LjU4IDBjMCAyOS43LTI0LjEgNTQuMy01My43OSA1NC4zek00NDcuOSA0NDhoLTkyLjY4VjMwMi40YzAtMzQuNy0uNy03OS4yLTQ4LjI5LTc5LjItNDguMjkgMC01NS42OSAzNy43LTU1LjY5IDc2LjdWNDQ4aC05Mi43OFYxNDguOWg4OS4wOHY0MC44aDEuM2MxMi40LTIzLjUgNDIuNjktNDguMyA4Ny44OC00OC4zIDk0IDAgMTExLjI4IDYxLjkgMTExLjI4IDE0Mi4zVjQ0OHpcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8L1NvY2lhbEljb24+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vam9sZW5lbmp5L1wiPlxuICAgICAgICAgICAgPFNvY2lhbEljb25cbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgICAgICAgICAgICBkYXRhLXByZWZpeD1cImZhYlwiXG4gICAgICAgICAgICAgIGRhdGEtaWNvbj1cImluc3RhZ3JhbVwiXG4gICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0NDggNTEyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICBkPVwiTTIyNC4xIDE0MWMtNjMuNiAwLTExNC45IDUxLjMtMTE0LjkgMTE0LjlzNTEuMyAxMTQuOSAxMTQuOSAxMTQuOVMzMzkgMzE5LjUgMzM5IDI1NS45IDI4Ny43IDE0MSAyMjQuMSAxNDF6bTAgMTg5LjZjLTQxLjEgMC03NC43LTMzLjUtNzQuNy03NC43czMzLjUtNzQuNyA3NC43LTc0LjcgNzQuNyAzMy41IDc0LjcgNzQuNy0zMy42IDc0LjctNzQuNyA3NC43em0xNDYuNC0xOTQuM2MwIDE0LjktMTIgMjYuOC0yNi44IDI2LjgtMTQuOSAwLTI2LjgtMTItMjYuOC0yNi44czEyLTI2LjggMjYuOC0yNi44IDI2LjggMTIgMjYuOCAyNi44em03Ni4xIDI3LjJjLTEuNy0zNS45LTkuOS02Ny43LTM2LjItOTMuOS0yNi4yLTI2LjItNTgtMzQuNC05My45LTM2LjItMzctMi4xLTE0Ny45LTIuMS0xODQuOSAwLTM1LjggMS43LTY3LjYgOS45LTkzLjkgMzYuMXMtMzQuNCA1OC0zNi4yIDkzLjljLTIuMSAzNy0yLjEgMTQ3LjkgMCAxODQuOSAxLjcgMzUuOSA5LjkgNjcuNyAzNi4yIDkzLjlzNTggMzQuNCA5My45IDM2LjJjMzcgMi4xIDE0Ny45IDIuMSAxODQuOSAwIDM1LjktMS43IDY3LjctOS45IDkzLjktMzYuMiAyNi4yLTI2LjIgMzQuNC01OCAzNi4yLTkzLjkgMi4xLTM3IDIuMS0xNDcuOCAwLTE4NC44ek0zOTguOCAzODhjLTcuOCAxOS42LTIyLjkgMzQuNy00Mi42IDQyLjYtMjkuNSAxMS43LTk5LjUgOS0xMzIuMSA5cy0xMDIuNyAyLjYtMTMyLjEtOWMtMTkuNi03LjgtMzQuNy0yMi45LTQyLjYtNDIuNi0xMS43LTI5LjUtOS05OS41LTktMTMyLjFzLTIuNi0xMDIuNyA5LTEzMi4xYzcuOC0xOS42IDIyLjktMzQuNyA0Mi42LTQyLjYgMjkuNS0xMS43IDk5LjUtOSAxMzIuMS05czEwMi43LTIuNiAxMzIuMSA5YzE5LjYgNy44IDM0LjcgMjIuOSA0Mi42IDQyLjYgMTEuNyAyOS41IDkgOTkuNSA5IDEzMi4xczIuNyAxMDIuNy05IDEzMi4xelwiXG4gICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8L1NvY2lhbEljb24+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxTb2NpYWxJY29uXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgZGF0YS1wcmVmaXg9XCJmYXNcIlxuICAgICAgICAgICAgICBkYXRhLWljb249XCJlbnZlbG9wZVwiXG4gICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1MTIgNTEyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICBkPVwiTTUwMi4zIDE5MC44YzMuOS0zLjEgOS43LS4yIDkuNyA0LjdWNDAwYzAgMjYuNS0yMS41IDQ4LTQ4IDQ4SDQ4Yy0yNi41IDAtNDgtMjEuNS00OC00OFYxOTUuNmMwLTUgNS43LTcuOCA5LjctNC43IDIyLjQgMTcuNCA1Mi4xIDM5LjUgMTU0LjEgMTEzLjYgMjEuMSAxNS40IDU2LjcgNDcuOCA5Mi4yIDQ3LjYgMzUuNy4zIDcyLTMyLjggOTIuMy00Ny42IDEwMi03NC4xIDEzMS42LTk2LjMgMTU0LTExMy43ek0yNTYgMzIwYzIzLjIuNCA1Ni42LTI5LjIgNzMuNC00MS40IDEzMi43LTk2LjMgMTQyLjgtMTA0LjcgMTczLjQtMTI4LjcgNS44LTQuNSA5LjItMTEuNSA5LjItMTguOXYtMTljMC0yNi41LTIxLjUtNDgtNDgtNDhINDhDMjEuNSA2NCAwIDg1LjUgMCAxMTJ2MTljMCA3LjQgMy40IDE0LjMgOS4yIDE4LjkgMzAuNiAyMy45IDQwLjcgMzIuNCAxNzMuNCAxMjguNyAxNi44IDEyLjIgNTAuMiA0MS44IDczLjQgNDEuNHpcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8L1NvY2lhbEljb24+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L1NvY2lhbHM+XG5cbiAgICAgICAgPHNwYW4+RGVzaWduZWQgJiBidWlsdCB3aXRoIOKZoTwvc3Bhbj5cbiAgICAgIDwvRm9vdGVyQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgRm9vdGVyQ29udGFpbmVyID0gc3R5bGVkLmZvb3RlcmBcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiAxMDQwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2VbOV19IDhweCAxNTBweCAwO1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZ3JleTN9O1xuICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzBdfSkge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsxXX0pIHtcbiAgICBwYWRkaW5nOiAxMDJweCA4cHggMTAycHggMDtcbiAgfVxuYDtcblxuY29uc3QgU29jaWFscyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBTb2NpYWxJY29uID0gc3R5bGVkLnN2Z2BcbiAgaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiAwIDE2cHggMCA4cHg7XG4gIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ncmV5Mn07XG4gIHRyYW5zaXRpb246ICR7dGhlbWUuYW5pbWF0aW9ucy5kZWZhdWx0fTtcbiAgOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsxXX0pIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IExvdHRpZSBmcm9tIFwicmVhY3QtbG90dGllXCI7XG5pbXBvcnQgYW5pbWF0aW9uRGF0YSBmcm9tIFwiLi4vcHVibGljL2RhdGEuanNvblwiO1xuXG5leHBvcnQgY2xhc3MgRm9vdGVyMiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICBhbmltYXRpb25EYXRhOiBhbmltYXRpb25EYXRhLFxuICAgICAgcmVuZGVyZXJTZXR0aW5nczoge1xuICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiBcInhNaWRZTWlkIHNsaWNlXCIsXG4gICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxGb290ZXJDb250YWluZXI+XG4gICAgICAgICAgPExvdHRpZVxuICAgICAgICAgICAgb3B0aW9ucz17ZGVmYXVsdE9wdGlvbnN9XG4gICAgICAgICAgICBoZWlnaHQ9ezM4MH1cbiAgICAgICAgICAgIHdpZHRoPXsyNDAwfVxuICAgICAgICAgICAgcmVzaXplTW9kZT1cImNvdmVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvb3RlckNvbnRhaW5lcj5cbiAgICAgICAgPFRleHRDb250YWluZXI+XG4gICAgICAgICAgPFNvY2lhbHM+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2pvbGVuZW5nL1wiPlxuICAgICAgICAgICAgICA8U29jaWFsSWNvblxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgIGRhdGEtcHJlZml4PVwiZmFiXCJcbiAgICAgICAgICAgICAgICBkYXRhLWljb249XCJsaW5rZWRpbi1pblwiXG4gICAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0NDggNTEyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMTAwLjI4IDQ0OEg3LjRWMTQ4LjloOTIuODh6TTUzLjc5IDEwOC4xQzI0LjA5IDEwOC4xIDAgODMuNSAwIDUzLjhhNTMuNzkgNTMuNzkgMCAwIDEgMTA3LjU4IDBjMCAyOS43LTI0LjEgNTQuMy01My43OSA1NC4zek00NDcuOSA0NDhoLTkyLjY4VjMwMi40YzAtMzQuNy0uNy03OS4yLTQ4LjI5LTc5LjItNDguMjkgMC01NS42OSAzNy43LTU1LjY5IDc2LjdWNDQ4aC05Mi43OFYxNDguOWg4OS4wOHY0MC44aDEuM2MxMi40LTIzLjUgNDIuNjktNDguMyA4Ny44OC00OC4zIDk0IDAgMTExLjI4IDYxLjkgMTExLjI4IDE0Mi4zVjQ0OHpcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICA8L1NvY2lhbEljb24+XG4gICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2pvbGVuZW5qeS9cIj5cbiAgICAgICAgICAgICAgPFNvY2lhbEljb25cbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICBkYXRhLXByZWZpeD1cImZhYlwiXG4gICAgICAgICAgICAgICAgZGF0YS1pY29uPVwiaW5zdGFncmFtXCJcbiAgICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgZD1cIk0yMjQuMSAxNDFjLTYzLjYgMC0xMTQuOSA1MS4zLTExNC45IDExNC45czUxLjMgMTE0LjkgMTE0LjkgMTE0LjlTMzM5IDMxOS41IDMzOSAyNTUuOSAyODcuNyAxNDEgMjI0LjEgMTQxem0wIDE4OS42Yy00MS4xIDAtNzQuNy0zMy41LTc0LjctNzQuN3MzMy41LTc0LjcgNzQuNy03NC43IDc0LjcgMzMuNSA3NC43IDc0LjctMzMuNiA3NC43LTc0LjcgNzQuN3ptMTQ2LjQtMTk0LjNjMCAxNC45LTEyIDI2LjgtMjYuOCAyNi44LTE0LjkgMC0yNi44LTEyLTI2LjgtMjYuOHMxMi0yNi44IDI2LjgtMjYuOCAyNi44IDEyIDI2LjggMjYuOHptNzYuMSAyNy4yYy0xLjctMzUuOS05LjktNjcuNy0zNi4yLTkzLjktMjYuMi0yNi4yLTU4LTM0LjQtOTMuOS0zNi4yLTM3LTIuMS0xNDcuOS0yLjEtMTg0LjkgMC0zNS44IDEuNy02Ny42IDkuOS05My45IDM2LjFzLTM0LjQgNTgtMzYuMiA5My45Yy0yLjEgMzctMi4xIDE0Ny45IDAgMTg0LjkgMS43IDM1LjkgOS45IDY3LjcgMzYuMiA5My45czU4IDM0LjQgOTMuOSAzNi4yYzM3IDIuMSAxNDcuOSAyLjEgMTg0LjkgMCAzNS45LTEuNyA2Ny43LTkuOSA5My45LTM2LjIgMjYuMi0yNi4yIDM0LjQtNTggMzYuMi05My45IDIuMS0zNyAyLjEtMTQ3LjggMC0xODQuOHpNMzk4LjggMzg4Yy03LjggMTkuNi0yMi45IDM0LjctNDIuNiA0Mi42LTI5LjUgMTEuNy05OS41IDktMTMyLjEgOXMtMTAyLjcgMi42LTEzMi4xLTljLTE5LjYtNy44LTM0LjctMjIuOS00Mi42LTQyLjYtMTEuNy0yOS41LTktOTkuNS05LTEzMi4xcy0yLjYtMTAyLjcgOS0xMzIuMWM3LjgtMTkuNiAyMi45LTM0LjcgNDIuNi00Mi42IDI5LjUtMTEuNyA5OS41LTkgMTMyLjEtOXMxMDIuNy0yLjYgMTMyLjEgOWMxOS42IDcuOCAzNC43IDIyLjkgNDIuNiA0Mi42IDExLjcgMjkuNSA5IDk5LjUgOSAxMzIuMXMyLjcgMTAyLjctOSAxMzIuMXpcIlxuICAgICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICAgIDwvU29jaWFsSWNvbj5cbiAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPFNvY2lhbEljb25cbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICBkYXRhLXByZWZpeD1cImZhc1wiXG4gICAgICAgICAgICAgICAgZGF0YS1pY29uPVwiZW52ZWxvcGVcIlxuICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICBkPVwiTTUwMi4zIDE5MC44YzMuOS0zLjEgOS43LS4yIDkuNyA0LjdWNDAwYzAgMjYuNS0yMS41IDQ4LTQ4IDQ4SDQ4Yy0yNi41IDAtNDgtMjEuNS00OC00OFYxOTUuNmMwLTUgNS43LTcuOCA5LjctNC43IDIyLjQgMTcuNCA1Mi4xIDM5LjUgMTU0LjEgMTEzLjYgMjEuMSAxNS40IDU2LjcgNDcuOCA5Mi4yIDQ3LjYgMzUuNy4zIDcyLTMyLjggOTIuMy00Ny42IDEwMi03NC4xIDEzMS42LTk2LjMgMTU0LTExMy43ek0yNTYgMzIwYzIzLjIuNCA1Ni42LTI5LjIgNzMuNC00MS40IDEzMi43LTk2LjMgMTQyLjgtMTA0LjcgMTczLjQtMTI4LjcgNS44LTQuNSA5LjItMTEuNSA5LjItMTguOXYtMTljMC0yNi41LTIxLjUtNDgtNDgtNDhINDhDMjEuNSA2NCAwIDg1LjUgMCAxMTJ2MTljMCA3LjQgMy40IDE0LjMgOS4yIDE4LjkgMzAuNiAyMy45IDQwLjcgMzIuNCAxNzMuNCAxMjguNyAxNi44IDEyLjIgNTAuMiA0MS44IDczLjQgNDEuNHpcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICA8L1NvY2lhbEljb24+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9Tb2NpYWxzPlxuXG4gICAgICAgICAgPHNwYW4+RGVzaWduZWQgJiBidWlsdCB3aXRoIOKZoTwvc3Bhbj5cbiAgICAgICAgPC9UZXh0Q29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBGb290ZXJDb250YWluZXIgPSBzdHlsZWQuZm9vdGVyYFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAgYXV0bztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDgwcHg7XG5gO1xuXG5jb25zdCBUZXh0Q29udGFpbmVyID0gc3R5bGVkLmZvb3RlcmBcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogLTgwcHg7XG4gIHBhZGRpbmc6IDBweCA4cHggMTUwcHggOHB4O1xuICBtYXgtd2lkdGg6IDEwNDBweDtcbiAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmdyZXkzfTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsxXX0pIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi10b3A6IC02MHB4O1xuICAgIHBhZGRpbmc6IDBweCA4cHggODBweCA4cHg7XG4gIH1cbmA7XG5cbmNvbnN0IFNvY2lhbHMgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgU29jaWFsSWNvbiA9IHN0eWxlZC5zdmdgXG4gIGhlaWdodDogMjBweDtcbiAgcGFkZGluZzogMCAxNnB4IDAgOHB4O1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZ3JleTJ9O1xuICB0cmFuc2l0aW9uOiAke3RoZW1lLmFuaW1hdGlvbnMuZGVmYXVsdH07XG4gIDpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMV19KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyMjtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZ2FwPzogbnVtYmVyO1xuICBjb2x1bW5zPzogc3RyaW5nO1xuICBbcHJvcE5hbWU6IHN0cmluZ106IHt9O1xufVxuXG5mdW5jdGlvbiBweChudW1iZXIpIHtcbiAgcmV0dXJuIGAke251bWJlcn1weGA7XG59XG5cbmNvbnN0IEdyaWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogMTAwJTtcbiAgZ2FwOiAkeyhwcm9wcykgPT4gcHgocHJvcHMuZ2FwKX07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogJHsocHJvcHMpID0+IHByb3BzLmNvbHVtbnN9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3JpZChwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyBnYXAgPSAwLCBjb2x1bW5zID0gXCIxZnJcIiB9ID0gcHJvcHM7XG4gIHJldHVybiA8R3JpZENvbnRhaW5lciBnYXA9e2dhcH0gY29sdW1ucz17Y29sdW1uc30gey4uLnByb3BzfSAvPjtcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNob3dJbmZvPzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gTGlua3MoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICByZXR1cm4gKFxuICAgIDxOYXY+XG4gICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8TmF2TGlua1xuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBjb2xvcjogcm91dGVyLnBhdGhuYW1lID09IFwiL1wiID8gXCJ3aGl0ZVwiIDogdGhlbWUuY29sb3JzLmdyZXkzLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBIb21lXG4gICAgICAgIDwvTmF2TGluaz5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvcGxheWdyb3VuZFwiPlxuICAgICAgICA8TmF2TGlua1xuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL3BsYXlncm91bmRcIiA/IFwid2hpdGVcIiA6IHRoZW1lLmNvbG9ycy5ncmV5MyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgUGxheWdyb3VuZFxuICAgICAgICA8L05hdkxpbms+XG4gICAgICA8L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGNvbG9yOiByb3V0ZXIucGF0aG5hbWUgPT0gXCIvYWJvdXRcIiA/IFwid2hpdGVcIiA6IHRoZW1lLmNvbG9ycy5ncmV5MyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgQWJvdXRcbiAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgPC9MaW5rPlxuICAgIDwvTmF2PlxuICApO1xufVxuXG5leHBvcnQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNpZGViYXJDb250YWluZXJcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiB0aGlzLnByb3BzLnNob3dJbmZvID8gNTUgOiAtODIgfX1cbiAgICAgID5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8TG9nbz5cbiAgICAgICAgICAgIDxOYW1lIHZpZXdCb3g9XCIwIDAgMzMzIDE2MVwiPlxuICAgICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICAgIGlkPVwiUGFnZS0xXCJcbiAgICAgICAgICAgICAgICBzdHJva2U9e3RoZW1lLmNvbG9ycy50ZXh0U2Vjb25kYXJ5fVxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICAgICAgaWQ9XCJBc3NldC0zXCJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzLjAwMDAwMCwgNC4wMDAwMDApXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiNlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0yNC4yMSw2Mi41NyBMODguMjEsMzQuNTcgQzg4LjIxLDM0LjU3IDQzLjAyLDE2NS4zMiAyLjIxLDE1Mi41NyBDLTEzLjc5LDE0Ny41NyA4Ny41OSw3Ni41NyA5NS4yMSw3Ni41NyBDMTEwLjIxLDc2LjU3IDEwMC4zOSwxMTkuODIgODIuMjEsMTA4LjU3IEM2MS4yMSw5NS41NyAxNDQuMjEsMjEuNTcgMTQ2LjIxLDIuNTcgQzE0OC4yMSwtMTYuNDMgMTA0LjIxLDEwMS41NyAxMTkuMjEsMTExLjU3IEMxMzQuMjEsMTIxLjU3IDE3MC4yMSw1Ni41NyAxNjMuMjEsNTQuNTcgQzE1Ni4yMSw1Mi41NyAxMzEuMjEsOTQuNTcgMTQ0LjIxLDEwNi41NyBDMTU3LjIxLDExOC41NyAxNzQuMjEsNjUuNTcgMTc0LjIxLDY1LjU3IEwxNjUuMjEsMTAzLjU3IEMxNjUuMjEsMTAzLjU3IDE4OC4yMSw1OS41NyAxOTIuMjEsOTUuNTcgQzE5Ni4yMSwxMzEuNTcgMjIwLjIxLDY3LjU3IDIxNS4yMSw1OC41NyBDMjEwLjIxLDQ5LjU3IDE5NC4yMSwxMDAuNTcgMjExLjIxLDEwMS41NyBDMjI4LjIxLDEwMi41NyAyNDguMjEsODUuNTcgMjYxLjIxLDg1LjU3IEMyNzQuMjEsODUuNTcgMjgxLjIxLDg5LjU3IDI4OC4yMSw4OS41NyBDMjk1LjIxLDg5LjU3IDMwNy4yMSw4NS41NyAzMDcuMjEsODUuNTdcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cIlBhdGhcIlxuICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgIDxsaW5lXG4gICAgICAgICAgICAgICAgICAgIHgxPVwiMzI2LjMxXCJcbiAgICAgICAgICAgICAgICAgICAgeTE9XCI3OC4wMVwiXG4gICAgICAgICAgICAgICAgICAgIHgyPVwiMzI2LjIxXCJcbiAgICAgICAgICAgICAgICAgICAgeTI9XCI3Ny41N1wiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aFwiXG4gICAgICAgICAgICAgICAgICA+PC9saW5lPlxuICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9OYW1lPlxuICAgICAgICAgIDwvTG9nbz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvU2lkZWJhckNvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IFNpZGViYXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGhzbCgyNDAsIDYwJSwgNSUpO1xuICB6LWluZGV4OiAxMDAwO1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzFdfSkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFszXX0pIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IExvZ28gPSBzdHlsZWQuYWBcbiAgcGFkZGluZzogMCA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzNdfSkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IE5hbWUgPSBzdHlsZWQuc3ZnYFxuICB3aWR0aDogNzBweDtcbmA7XG5cbmNvbnN0IE5hdiA9IHN0eWxlZChtb3Rpb24uZGl2KWBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5jb25zdCBOYXZMaW5rID0gc3R5bGVkKG1vdGlvbi5hKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxMnB4IDEycHg7XG4gIHRyYW5zaXRpb246ICR7dGhlbWUuYW5pbWF0aW9ucy5kZWZhdWx0fTtcbiAgOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vc2lkZWJhclwiO1xuaW1wb3J0IFNpZGViYXIyIGZyb20gXCIuL3NpZGViYXIyXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCBGb290ZXIyIGZyb20gXCIuL2Zvb3RlcjJcIjtcbmltcG9ydCBHcmlkIGZyb20gXCIuLi9jb21wb25lbnRzL2dyaWRcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgR2xvYmFsU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvZ2xvYmFsc3R5bGVzXCI7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZVZpZXdwb3J0U2Nyb2xsLCB1c2VUcmFuc2Zvcm0gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0aXRsZT86IHN0cmluZztcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgY2hpbGRyZW4yPzogUmVhY3QuUmVhY3ROb2RlO1xuICBob21lPzogYm9vbGVhbjtcbiAgYWJvdXQ/OiBib29sZWFuO1xuICBwcm9qZWN0PzogYm9vbGVhbjtcbn1cblxuY29uc3QgU2hvd0luZm8gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBzY3JvbGxZIH0gPSB1c2VWaWV3cG9ydFNjcm9sbCgpO1xuICBjb25zdCBmaXJzdFJhbmdlID0gWzAsIDM0MCwgNDMwLCA1MjBdO1xuICBjb25zdCBzZWNvbmRSYW5nZSA9IFswLCA4NDAsIDkzMCwgMTAyMF07XG4gIGNvbnN0IG9wYWNpdHlSYW5nZSA9IFsxLCAxLCAwLjMsIDBdO1xuICBjb25zdCBNb3ZlUmFuZ2UgPSBbMCwgMCwgLTUwLCAtMTAwXTtcbiAgY29uc3QgZmlyc3RPcCA9IHVzZVRyYW5zZm9ybShzY3JvbGxZLCBmaXJzdFJhbmdlLCBvcGFjaXR5UmFuZ2UpO1xuICBjb25zdCBmaXJzdE1vdmUgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWSwgZmlyc3RSYW5nZSwgTW92ZVJhbmdlKTtcbiAgY29uc3Qgc2Vjb25kT3AgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWSwgc2Vjb25kUmFuZ2UsIG9wYWNpdHlSYW5nZSk7XG4gIGNvbnN0IHNlY29uZE1vdmUgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWSwgc2Vjb25kUmFuZ2UsIE1vdmVSYW5nZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLmhvbWUgPyBcImNvbnRlbnRzXCIgOiBcIm5vbmVcIiB9fT5cbiAgICAgIDxUaW1lU2VjdGlvbiBzdHlsZT17eyBtYXJnaW5Ub3A6IDE4MiB9fT5cbiAgICAgICAgPG1vdGlvbi5kaXYgc3R5bGU9e3sgb3BhY2l0eTogZmlyc3RPcCwgdHJhbnNsYXRlWTogZmlyc3RNb3ZlIH19PlxuICAgICAgICAgIDxUaW1lUmFuZ2U+MjAxOSAtIFByZXNlbnQ8L1RpbWVSYW5nZT5cbiAgICAgICAgICA8Q29tcGFueVRpdGxlPkdyYWI8L0NvbXBhbnlUaXRsZT5cbiAgICAgICAgICA8Q29tcGFueURlc2M+RGVsaXZlcnkgc29sdXRpb25zPC9Db21wYW55RGVzYz5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9UaW1lU2VjdGlvbj5cbiAgICAgIDxUaW1lU2VjdGlvbiBzdHlsZT17eyBtYXJnaW5Ub3A6IDM5NCB9fT5cbiAgICAgICAgPG1vdGlvbi5kaXYgc3R5bGU9e3sgb3BhY2l0eTogc2Vjb25kT3AsIHRyYW5zbGF0ZVk6IHNlY29uZE1vdmUgfX0+XG4gICAgICAgICAgPFRpbWVSYW5nZT4yMDE3IC0gMjAxOTwvVGltZVJhbmdlPlxuICAgICAgICAgIDxDb21wYW55VGl0bGU+R292dGVjaDwvQ29tcGFueVRpdGxlPlxuICAgICAgICAgIDxDb21wYW55RGVzYz5Hb3Zlcm5tZW50IHNlcnZpY2VzPC9Db21wYW55RGVzYz5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9UaW1lU2VjdGlvbj5cbiAgICAgIDxUaW1lU2VjdGlvbiBzdHlsZT17eyBtYXJnaW5Ub3A6IDM5NCB9fT5cbiAgICAgICAgPFRpbWVSYW5nZT4yMDEyIC0gMjAxNjwvVGltZVJhbmdlPlxuICAgICAgICA8Q29tcGFueVRpdGxlPlBhc3QgUHJvamVjdHM8L0NvbXBhbnlUaXRsZT5cbiAgICAgICAgPENvbXBhbnlEZXNjPkluZHVzdHJpYWwgZGVzaWduPC9Db21wYW55RGVzYz5cbiAgICAgIDwvVGltZVNlY3Rpb24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBTY3JvbGxJbmRpY2F0b3IgPSAoKSA9PiB7XG4gIGNvbnN0IFt3aWR0aCwgc2V0V2lkdGhdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xuICB9KTtcbiAgY29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3MgfSA9IHVzZVZpZXdwb3J0U2Nyb2xsKCk7XG4gIGNvbnN0IFNjcm9sbFJhbmdlID0gWzAsIDFdO1xuICBjb25zdCBXaWR0aFJhbmdlID0gWzAsIHdpZHRoXTtcbiAgY29uc3QgU2Nyb2xsV2lkdGggPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBTY3JvbGxSYW5nZSwgV2lkdGhSYW5nZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2Nyb2xsRGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICB3aWR0aDogU2Nyb2xsV2lkdGgsXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEdsb2JhbFN0eWxlcyAvPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+e3RoaXMucHJvcHMudGl0bGV9PC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAge3RoaXMucHJvcHMucHJvamVjdCA/IDxTY3JvbGxJbmRpY2F0b3IgLz4gOiBcIlwifVxuICAgICAgICA8Qm9keUNvbnRhaW5lcj5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgPExheW91dEdyaWQgZ2FwPXswfSBjb2x1bW5zPXtcIjFmciAzZnJcIn0+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5wcm9qZWN0ID8gKFxuICAgICAgICAgICAgICA8U2lkZWJhcjIgc2hvd0luZm89e3RoaXMucHJvcHMuaG9tZX0+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW4yKCl9XG4gICAgICAgICAgICAgIDwvU2lkZWJhcjI+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxTaWRlYmFyIHNob3dJbmZvPXt0aGlzLnByb3BzLmhvbWV9IC8+XG4gICAgICAgICAgICAgICAgPFNob3dJbmZvIGhvbWU9e3RoaXMucHJvcHMuaG9tZX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPENvbnRlbnRDb250YWluZXI+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9Db250ZW50Q29udGFpbmVyPlxuICAgICAgICAgIDwvTGF5b3V0R3JpZD5cbiAgICAgICAgPC9Cb2R5Q29udGFpbmVyPlxuICAgICAgICB7dGhpcy5wcm9wcy5hYm91dCA/IDxGb290ZXIyIC8+IDogPEZvb3RlciAvPn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgQm9keUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1heC13aWR0aDogMTA0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcblxuICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzBdfSkge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbmA7XG5cbmNvbnN0IENvbnRlbnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXgtd2lkdGg6ICR7dGhlbWUubWF4V2lkdGh9O1xuICBwYWRkaW5nOiAwIDhweDtcbiAgbWluLXdpZHRoOiAwO1xuYDtcblxuY29uc3QgVGltZVJhbmdlID0gc3R5bGVkLmg2YFxuICBmb250LXdlaWdodDogJHt0aGVtZS5mb250V2VpZ2h0cy5zZW1pYm9sZH07XG4gIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ncmV5NH07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5gO1xuXG5jb25zdCBDb21wYW55VGl0bGUgPSBzdHlsZWQuaDJgXG4gIG1hcmdpbi10b3A6IDEycHg7XG5gO1xuXG5jb25zdCBDb21wYW55RGVzYyA9IHN0eWxlZC5oNGBcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWUuZm9udFdlaWdodHMucmVndWxhcn07XG4gIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5saWdodGdyZXkxfTtcbiAgbWFyZ2luLXRvcDogNHB4O1xuYDtcblxuY29uc3QgTGF5b3V0R3JpZCA9IHN0eWxlZChHcmlkKWBcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsxXX0pIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuYDtcblxuY29uc3QgVGltZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogOHB4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDQ4MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzFdfSkge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuYDtcblxuY29uc3QgU2Nyb2xsRGl2ID0gc3R5bGVkKG1vdGlvbi5kaXYpYFxuICBwb3NpdGlvbjogc3RpY2t5O1xuICBoZWlnaHQ6IDNweDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5saWdodGdyZXkxfTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB1cmwxPzogc3RyaW5nO1xuICBwcm9qMT86IHN0cmluZztcblxuICB1cmwyPzogc3RyaW5nO1xuICBwcm9qMj86IHN0cmluZztcblxuICB1cmwzPzogc3RyaW5nO1xuICBwcm9qMz86IHN0cmluZztcbn1cblxuY29uc3QgT3RoZXJQcm9qZWN0czogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHtcbiAgdXJsMSA9IFwiL3Byb2plY3QxXCIsXG4gIHByb2oxID0gXCJTZWxmIFBpY2stVXBcIixcbiAgdXJsMiA9IFwiL3Byb2plY3QyXCIsXG4gIHByb2oyID0gXCJEZWxpdmVyeSBmZWF0dXJlc1wiLFxuICB1cmwzID0gXCIvcHJvamVjdDNcIixcbiAgcHJvajMgPSBcIlBhcmVudHMgR2F0ZXdheVwiLFxufSkgPT4gKFxuICA8TmF2PlxuICAgIDxMaW5rIGhyZWY9e3VybDF9IHNoYWxsb3c9e3RydWV9PlxuICAgICAgPE5hdkxpbms+e3Byb2oxfTwvTmF2TGluaz5cbiAgICA8L0xpbms+XG4gICAgPExpbmsgaHJlZj17dXJsMn0gc2hhbGxvdz17dHJ1ZX0+XG4gICAgICA8TmF2TGluaz57cHJvajJ9PC9OYXZMaW5rPlxuICAgIDwvTGluaz5cbiAgICA8TGluayBocmVmPXt1cmwzfSBzaGFsbG93PXt0cnVlfT5cbiAgICAgIDxOYXZMaW5rPntwcm9qM308L05hdkxpbms+XG4gICAgPC9MaW5rPlxuICA8L05hdj5cbik7XG5cbmNvbnN0IE5hdiA9IHN0eWxlZChtb3Rpb24uZGl2KWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIG1hcmdpbjogMjRweCAtOHB4IDAgLThweDtcbmA7XG5cbmNvbnN0IE5hdkxpbmsgPSBzdHlsZWQobW90aW9uLmEpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250U2l6ZXNbNF19O1xuICB3aWR0aDogMjYwcHg7XG4gIHBhZGRpbmc6IDhweCA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246ICR7dGhlbWUuYW5pbWF0aW9ucy5kZWZhdWx0fTtcbiAgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDMxLCAzMSwgNTQsIDAuNCk7XG4gICAgb3BhY2l0eTogMTtcbiAgICA6OmFmdGVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpO1xuICAgIH1cbiAgfVxuICA6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIuKGklwiO1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zaXRpb246ICR7dGhlbWUuYW5pbWF0aW9ucy5kZWZhdWx0fTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgT3RoZXJQcm9qZWN0cztcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNob3dJbmZvPzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gTGlua3MoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICByZXR1cm4gKFxuICAgIDxOYXY+XG4gICAgICA8TGluayBocmVmPVwiL1wiIHNoYWxsb3c9e3RydWV9PlxuICAgICAgICA8TmF2TGlua1xuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBjb2xvcjogcm91dGVyLnBhdGhuYW1lID09IFwiL1wiID8gdGhlbWUuY29sb3JzLnRleHRMaW5rIDogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDpcbiAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL1wiXG4gICAgICAgICAgICAgICAgPyB0aGVtZS5mb250V2VpZ2h0cy5tZWRpdW1cbiAgICAgICAgICAgICAgICA6IHRoZW1lLmZvbnRXZWlnaHRzLnJlZ3VsYXIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEhvbWVcbiAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj1cIi9wbGF5Z3JvdW5kXCIgc2hhbGxvdz17dHJ1ZX0+XG4gICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvcGxheWdyb3VuZFwiXG4gICAgICAgICAgICAgICAgPyB0aGVtZS5jb2xvcnMudGV4dExpbmtcbiAgICAgICAgICAgICAgICA6IFwid2hpdGVcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6XG4gICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9wbGF5Z3JvdW5kXCJcbiAgICAgICAgICAgICAgICA/IHRoZW1lLmZvbnRXZWlnaHRzLm1lZGl1bVxuICAgICAgICAgICAgICAgIDogdGhlbWUuZm9udFdlaWdodHMucmVndWxhcixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgUGxheWdyb3VuZFxuICAgICAgICA8L05hdkxpbms+XG4gICAgICA8L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvYWJvdXRcIiA/IHRoZW1lLmNvbG9ycy50ZXh0TGluayA6IFwid2hpdGVcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6XG4gICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9hYm91dFwiXG4gICAgICAgICAgICAgICAgPyB0aGVtZS5mb250V2VpZ2h0cy5tZWRpdW1cbiAgICAgICAgICAgICAgICA6IHRoZW1lLmZvbnRXZWlnaHRzLnJlZ3VsYXIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEFib3V0XG4gICAgICAgIDwvTmF2TGluaz5cbiAgICAgIDwvTGluaz5cbiAgICA8L05hdj5cbiAgKTtcbn1cblxuZXhwb3J0IGNsYXNzIFNpZGViYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8U2lkZWJhckNvbnRhaW5lclxuICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IHRoaXMucHJvcHMuc2hvd0luZm8gPyAxMDAgOiAtMzggfX1cbiAgICAgID5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8TG9nbz5cbiAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxMjBweFwiIHZpZXdCb3g9XCIwIDAgMzMzIDE2MVwiPlxuICAgICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICAgIGlkPVwiUGFnZS0xXCJcbiAgICAgICAgICAgICAgICBzdHJva2U9e3RoZW1lLmNvbG9ycy50ZXh0U2Vjb25kYXJ5fVxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICAgICAgaWQ9XCJBc3NldC0zXCJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzLjAwMDAwMCwgNC4wMDAwMDApXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiNlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0yNC4yMSw2Mi41NyBMODguMjEsMzQuNTcgQzg4LjIxLDM0LjU3IDQzLjAyLDE2NS4zMiAyLjIxLDE1Mi41NyBDLTEzLjc5LDE0Ny41NyA4Ny41OSw3Ni41NyA5NS4yMSw3Ni41NyBDMTEwLjIxLDc2LjU3IDEwMC4zOSwxMTkuODIgODIuMjEsMTA4LjU3IEM2MS4yMSw5NS41NyAxNDQuMjEsMjEuNTcgMTQ2LjIxLDIuNTcgQzE0OC4yMSwtMTYuNDMgMTA0LjIxLDEwMS41NyAxMTkuMjEsMTExLjU3IEMxMzQuMjEsMTIxLjU3IDE3MC4yMSw1Ni41NyAxNjMuMjEsNTQuNTcgQzE1Ni4yMSw1Mi41NyAxMzEuMjEsOTQuNTcgMTQ0LjIxLDEwNi41NyBDMTU3LjIxLDExOC41NyAxNzQuMjEsNjUuNTcgMTc0LjIxLDY1LjU3IEwxNjUuMjEsMTAzLjU3IEMxNjUuMjEsMTAzLjU3IDE4OC4yMSw1OS41NyAxOTIuMjEsOTUuNTcgQzE5Ni4yMSwxMzEuNTcgMjIwLjIxLDY3LjU3IDIxNS4yMSw1OC41NyBDMjEwLjIxLDQ5LjU3IDE5NC4yMSwxMDAuNTcgMjExLjIxLDEwMS41NyBDMjI4LjIxLDEwMi41NyAyNDguMjEsODUuNTcgMjYxLjIxLDg1LjU3IEMyNzQuMjEsODUuNTcgMjgxLjIxLDg5LjU3IDI4OC4yMSw4OS41NyBDMjk1LjIxLDg5LjU3IDMwNy4yMSw4NS41NyAzMDcuMjEsODUuNTdcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cIlBhdGhcIlxuICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgIDxsaW5lXG4gICAgICAgICAgICAgICAgICAgIHgxPVwiMzI2LjMxXCJcbiAgICAgICAgICAgICAgICAgICAgeTE9XCI3OC4wMVwiXG4gICAgICAgICAgICAgICAgICAgIHgyPVwiMzI2LjIxXCJcbiAgICAgICAgICAgICAgICAgICAgeTI9XCI3Ny41N1wiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aFwiXG4gICAgICAgICAgICAgICAgICA+PC9saW5lPlxuICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9Mb2dvPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rcyAvPlxuXG4gICAgICAgIDxTb2NpYWxzPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vam9sZW5lbmcvXCI+XG4gICAgICAgICAgICA8U29jaWFsSWNvblxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgIGRhdGEtcHJlZml4PVwiZmFiXCJcbiAgICAgICAgICAgICAgZGF0YS1pY29uPVwibGlua2VkaW4taW5cIlxuICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgZD1cIk0xMDAuMjggNDQ4SDcuNFYxNDguOWg5Mi44OHpNNTMuNzkgMTA4LjFDMjQuMDkgMTA4LjEgMCA4My41IDAgNTMuOGE1My43OSA1My43OSAwIDAgMSAxMDcuNTggMGMwIDI5LjctMjQuMSA1NC4zLTUzLjc5IDU0LjN6TTQ0Ny45IDQ0OGgtOTIuNjhWMzAyLjRjMC0zNC43LS43LTc5LjItNDguMjktNzkuMi00OC4yOSAwLTU1LjY5IDM3LjctNTUuNjkgNzYuN1Y0NDhoLTkyLjc4VjE0OC45aDg5LjA4djQwLjhoMS4zYzEyLjQtMjMuNSA0Mi42OS00OC4zIDg3Ljg4LTQ4LjMgOTQgMCAxMTEuMjggNjEuOSAxMTEuMjggMTQyLjNWNDQ4elwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDwvU29jaWFsSWNvbj5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9qb2xlbmVuankvXCI+XG4gICAgICAgICAgICA8U29jaWFsSWNvblxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgIGRhdGEtcHJlZml4PVwiZmFiXCJcbiAgICAgICAgICAgICAgZGF0YS1pY29uPVwiaW5zdGFncmFtXCJcbiAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMjI0LjEgMTQxYy02My42IDAtMTE0LjkgNTEuMy0xMTQuOSAxMTQuOXM1MS4zIDExNC45IDExNC45IDExNC45UzMzOSAzMTkuNSAzMzkgMjU1LjkgMjg3LjcgMTQxIDIyNC4xIDE0MXptMCAxODkuNmMtNDEuMSAwLTc0LjctMzMuNS03NC43LTc0LjdzMzMuNS03NC43IDc0LjctNzQuNyA3NC43IDMzLjUgNzQuNyA3NC43LTMzLjYgNzQuNy03NC43IDc0Ljd6bTE0Ni40LTE5NC4zYzAgMTQuOS0xMiAyNi44LTI2LjggMjYuOC0xNC45IDAtMjYuOC0xMi0yNi44LTI2LjhzMTItMjYuOCAyNi44LTI2LjggMjYuOCAxMiAyNi44IDI2Ljh6bTc2LjEgMjcuMmMtMS43LTM1LjktOS45LTY3LjctMzYuMi05My45LTI2LjItMjYuMi01OC0zNC40LTkzLjktMzYuMi0zNy0yLjEtMTQ3LjktMi4xLTE4NC45IDAtMzUuOCAxLjctNjcuNiA5LjktOTMuOSAzNi4xcy0zNC40IDU4LTM2LjIgOTMuOWMtMi4xIDM3LTIuMSAxNDcuOSAwIDE4NC45IDEuNyAzNS45IDkuOSA2Ny43IDM2LjIgOTMuOXM1OCAzNC40IDkzLjkgMzYuMmMzNyAyLjEgMTQ3LjkgMi4xIDE4NC45IDAgMzUuOS0xLjcgNjcuNy05LjkgOTMuOS0zNi4yIDI2LjItMjYuMiAzNC40LTU4IDM2LjItOTMuOSAyLjEtMzcgMi4xLTE0Ny44IDAtMTg0Ljh6TTM5OC44IDM4OGMtNy44IDE5LjYtMjIuOSAzNC43LTQyLjYgNDIuNi0yOS41IDExLjctOTkuNSA5LTEzMi4xIDlzLTEwMi43IDIuNi0xMzIuMS05Yy0xOS42LTcuOC0zNC43LTIyLjktNDIuNi00Mi42LTExLjctMjkuNS05LTk5LjUtOS0xMzIuMXMtMi42LTEwMi43IDktMTMyLjFjNy44LTE5LjYgMjIuOS0zNC43IDQyLjYtNDIuNiAyOS41LTExLjcgOTkuNS05IDEzMi4xLTlzMTAyLjctMi42IDEzMi4xIDljMTkuNiA3LjggMzQuNyAyMi45IDQyLjYgNDIuNiAxMS43IDI5LjUgOSA5OS41IDkgMTMyLjFzMi43IDEwMi43LTkgMTMyLjF6XCJcbiAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDwvU29jaWFsSWNvbj5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPFNvY2lhbEljb25cbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgICAgICAgICAgICBkYXRhLXByZWZpeD1cImZhc1wiXG4gICAgICAgICAgICAgIGRhdGEtaWNvbj1cImVudmVsb3BlXCJcbiAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIGQ9XCJNNTAyLjMgMTkwLjhjMy45LTMuMSA5LjctLjIgOS43IDQuN1Y0MDBjMCAyNi41LTIxLjUgNDgtNDggNDhINDhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4VjE5NS42YzAtNSA1LjctNy44IDkuNy00LjcgMjIuNCAxNy40IDUyLjEgMzkuNSAxNTQuMSAxMTMuNiAyMS4xIDE1LjQgNTYuNyA0Ny44IDkyLjIgNDcuNiAzNS43LjMgNzItMzIuOCA5Mi4zLTQ3LjYgMTAyLTc0LjEgMTMxLjYtOTYuMyAxNTQtMTEzLjd6TTI1NiAzMjBjMjMuMi40IDU2LjYtMjkuMiA3My40LTQxLjQgMTMyLjctOTYuMyAxNDIuOC0xMDQuNyAxNzMuNC0xMjguNyA1LjgtNC41IDkuMi0xMS41IDkuMi0xOC45di0xOWMwLTI2LjUtMjEuNS00OC00OC00OEg0OEMyMS41IDY0IDAgODUuNSAwIDExMnYxOWMwIDcuNCAzLjQgMTQuMyA5LjIgMTguOSAzMC42IDIzLjkgNDAuNyAzMi40IDE3My40IDEyOC43IDE2LjggMTIuMiA1MC4yIDQxLjggNzMuNCA0MS40elwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDwvU29jaWFsSWNvbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvU29jaWFscz5cblxuICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgPC9TaWRlYmFyQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgU2lkZWJhckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAxMjBweDtcbiAgaGVpZ2h0OiAzNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsxXX0pIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuXG5jb25zdCBMb2dvID0gc3R5bGVkLmFgXG4gIHBhZGRpbmc6IDAgOHB4O1xuYDtcblxuY29uc3QgTmF2ID0gc3R5bGVkKG1vdGlvbi5kaXYpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgbWFyZ2luOiAyNHB4IDBweCAwIDA7XG5gO1xuXG5jb25zdCBOYXZMaW5rID0gc3R5bGVkKG1vdGlvbi5hKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTYwcHg7XG4gIHBhZGRpbmc6IDhweCA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuXG4gIDpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgzMSwgMzEsIDU0LCAwLjQpO1xuICB9XG5gO1xuXG5jb25zdCBTb2NpYWxzID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAzMnB4IDAgMCAwO1xuYDtcblxuY29uc3QgU29jaWFsSWNvbiA9IHN0eWxlZC5zdmdgXG4gIGhlaWdodDogMjBweDtcbiAgcGFkZGluZzogMCAxNnB4IDAgOHB4O1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZ3JleTJ9O1xuICB0cmFuc2l0aW9uOiAke3RoZW1lLmFuaW1hdGlvbnMuZGVmYXVsdH07XG4gIDpob3ZlciB7XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHRMaW5rfTtcbiAgfVxuYDtcblxuY29uc3QgRGl2aWRlciA9IHN0eWxlZC5kaXZgXG4gIG1pbi1oZWlnaHQ6IDNweDtcbiAgbWFyZ2luOiAzMnB4IDBweCAwIDhweDtcbiAgd2lkdGg6IDE2MHB4O1xuICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5ncmV5Mn07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmZ1bmN0aW9uIExpbmtzKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgcmV0dXJuIChcbiAgICA8TmF2PlxuICAgICAgPExpbmsgaHJlZj1cIi9cIiBzaGFsbG93PXt0cnVlfT5cbiAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgY29sb3I6IHJvdXRlci5wYXRobmFtZSA9PSBcIi9cIiA/IHRoZW1lLmNvbG9ycy50ZXh0TGluayA6IFwid2hpdGVcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6XG4gICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9cIlxuICAgICAgICAgICAgICAgID8gdGhlbWUuZm9udFdlaWdodHMubWVkaXVtXG4gICAgICAgICAgICAgICAgOiB0aGVtZS5mb250V2VpZ2h0cy5yZWd1bGFyLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBCYWNrIEhvbWVcbiAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgPC9MaW5rPlxuICAgIDwvTmF2PlxuICApO1xufVxuXG5leHBvcnQgY2xhc3MgU2lkZWJhcjIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8U2lkZWJhckNvbnRhaW5lcj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8TG9nbz5cbiAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxMjBweFwiIHZpZXdCb3g9XCIwIDAgMzMzIDE2MVwiPlxuICAgICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICAgIGlkPVwiUGFnZS0xXCJcbiAgICAgICAgICAgICAgICBzdHJva2U9e3RoZW1lLmNvbG9ycy50ZXh0U2Vjb25kYXJ5fVxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICAgICAgaWQ9XCJBc3NldC0zXCJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzLjAwMDAwMCwgNC4wMDAwMDApXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiNlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0yNC4yMSw2Mi41NyBMODguMjEsMzQuNTcgQzg4LjIxLDM0LjU3IDQzLjAyLDE2NS4zMiAyLjIxLDE1Mi41NyBDLTEzLjc5LDE0Ny41NyA4Ny41OSw3Ni41NyA5NS4yMSw3Ni41NyBDMTEwLjIxLDc2LjU3IDEwMC4zOSwxMTkuODIgODIuMjEsMTA4LjU3IEM2MS4yMSw5NS41NyAxNDQuMjEsMjEuNTcgMTQ2LjIxLDIuNTcgQzE0OC4yMSwtMTYuNDMgMTA0LjIxLDEwMS41NyAxMTkuMjEsMTExLjU3IEMxMzQuMjEsMTIxLjU3IDE3MC4yMSw1Ni41NyAxNjMuMjEsNTQuNTcgQzE1Ni4yMSw1Mi41NyAxMzEuMjEsOTQuNTcgMTQ0LjIxLDEwNi41NyBDMTU3LjIxLDExOC41NyAxNzQuMjEsNjUuNTcgMTc0LjIxLDY1LjU3IEwxNjUuMjEsMTAzLjU3IEMxNjUuMjEsMTAzLjU3IDE4OC4yMSw1OS41NyAxOTIuMjEsOTUuNTcgQzE5Ni4yMSwxMzEuNTcgMjIwLjIxLDY3LjU3IDIxNS4yMSw1OC41NyBDMjEwLjIxLDQ5LjU3IDE5NC4yMSwxMDAuNTcgMjExLjIxLDEwMS41NyBDMjI4LjIxLDEwMi41NyAyNDguMjEsODUuNTcgMjYxLjIxLDg1LjU3IEMyNzQuMjEsODUuNTcgMjgxLjIxLDg5LjU3IDI4OC4yMSw4OS41NyBDMjk1LjIxLDg5LjU3IDMwNy4yMSw4NS41NyAzMDcuMjEsODUuNTdcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cIlBhdGhcIlxuICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgIDxsaW5lXG4gICAgICAgICAgICAgICAgICAgIHgxPVwiMzI2LjMxXCJcbiAgICAgICAgICAgICAgICAgICAgeTE9XCI3OC4wMVwiXG4gICAgICAgICAgICAgICAgICAgIHgyPVwiMzI2LjIxXCJcbiAgICAgICAgICAgICAgICAgICAgeTI9XCI3Ny41N1wiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aFwiXG4gICAgICAgICAgICAgICAgICA+PC9saW5lPlxuICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9Mb2dvPlxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgPC9TaWRlYmFyQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgU2lkZWJhckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAxMjBweDtcbiAgaGVpZ2h0OiAzNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsxXX0pIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuXG5jb25zdCBMb2dvID0gc3R5bGVkLmFgXG4gIHBhZGRpbmc6IDAgOHB4O1xuYDtcblxuY29uc3QgTmF2ID0gc3R5bGVkKG1vdGlvbi5kaXYpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgbWFyZ2luOiAyNHB4IDBweCAwIDA7XG5gO1xuXG5jb25zdCBOYXZMaW5rID0gc3R5bGVkKG1vdGlvbi5hKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTYwcHg7XG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDI4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB0cmFuc2l0aW9uOiAke3RoZW1lLmFuaW1hdGlvbnMuZGVmYXVsdH07XG4gIDpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgzMSwgMzEsIDU0LCAwLjQpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgOjpiZWZvcmUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00cHgpO1xuICAgIH1cbiAgfVxuICA6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCLihpBcIjtcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zaXRpb246ICR7dGhlbWUuYW5pbWF0aW9ucy5kZWZhdWx0fTtcbiAgfVxuYDtcblxuY29uc3QgRGl2aWRlciA9IHN0eWxlZC5kaXZgXG4gIG1pbi1oZWlnaHQ6IDNweDtcbiAgbWFyZ2luOiAzMnB4IDBweCAwIDhweDtcbiAgd2lkdGg6IDE2MHB4O1xuICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5ncmV5Mn07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyMjtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHRpdGxlMjogc3RyaW5nO1xuICB0aXRsZTM6IHN0cmluZztcbiAgc3VidGl0bGU6IHN0cmluZztcbn1cblxuY29uc3QgVG9wU2VjdGlvbjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHtcbiAgdGl0bGUgPSBcIkRlZmF1bHQgdGl0bGVcIixcbiAgdGl0bGUyID0gXCJEZWZhdWx0IHRpdGxlXCIsXG4gIHRpdGxlMyA9IFwiRGVmYXVsdCB0aXRsZVwiLFxuICBzdWJ0aXRsZSA9IFwiRGVmYXVsdCBzdWJ0aXRsZVwiLFxufSkgPT4gKFxuICA8VG9wQ29udGFpbmVyPlxuICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICA8QWNjZW50VGl0bGU+e3RpdGxlMn08L0FjY2VudFRpdGxlPlxuICAgIDxEYXJrVGl0bGU+e3RpdGxlM308L0RhcmtUaXRsZT5cbiAgICA8U3VidGl0bGU+e3N1YnRpdGxlfTwvU3VidGl0bGU+XG4gIDwvVG9wQ29udGFpbmVyPlxuKTtcblxuY29uc3QgVG9wQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxMDJweDtcbmA7XG5cbmNvbnN0IEFjY2VudFRpdGxlID0gc3R5bGVkLmgxYFxuICBjb2xvcjogIzE2NmRlZjtcbmA7XG5cbmNvbnN0IERhcmtUaXRsZSA9IHN0eWxlZC5oMWBcbiAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmdyZXkyfTtcbmA7XG5cbmNvbnN0IFN1YnRpdGxlID0gc3R5bGVkLmg0YFxuICBmb250LXdlaWdodDogJHt0aGVtZS5mb250V2VpZ2h0cy5yZWd1bGFyfTtcbiAgcGFkZGluZzogMTZweCA0OHB4IDAgMnB4O1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcnMubGlnaHRncmV5MX07XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMV19KSB7XG4gICAgcGFkZGluZzogMTZweCAyNHB4IDAgMnB4O1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMl19KSB7XG4gICAgcGFkZGluZzogMTZweCA4cHggMCAycHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFRvcFNlY3Rpb247XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91cmw9cmVxdWlyZShcInVybFwiKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7dmFyIF9yb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yb3V0ZXJcIikpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7ZnVuY3Rpb24gaXNMb2NhbChocmVmKXt2YXIgdXJsPSgwLF91cmwucGFyc2UpKGhyZWYsZmFsc2UsdHJ1ZSk7dmFyIG9yaWdpbj0oMCxfdXJsLnBhcnNlKSgoMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCksZmFsc2UsdHJ1ZSk7cmV0dXJuIXVybC5ob3N0fHx1cmwucHJvdG9jb2w9PT1vcmlnaW4ucHJvdG9jb2wmJnVybC5ob3N0PT09b3JpZ2luLmhvc3Q7fWZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmMpe3ZhciBsYXN0SHJlZj1udWxsO3ZhciBsYXN0QXM9bnVsbDt2YXIgbGFzdFJlc3VsdD1udWxsO3JldHVybihocmVmLGFzKT0+e2lmKGxhc3RSZXN1bHQmJmhyZWY9PT1sYXN0SHJlZiYmYXM9PT1sYXN0QXMpe3JldHVybiBsYXN0UmVzdWx0O312YXIgcmVzdWx0PWZvcm1hdEZ1bmMoaHJlZixhcyk7bGFzdEhyZWY9aHJlZjtsYXN0QXM9YXM7bGFzdFJlc3VsdD1yZXN1bHQ7cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBmb3JtYXRVcmwodXJsKXtyZXR1cm4gdXJsJiZ0eXBlb2YgdXJsPT09J29iamVjdCc/KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh1cmwpOnVybDt9dmFyIG9ic2VydmVyO3ZhciBsaXN0ZW5lcnM9bmV3IE1hcCgpO3ZhciBJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/d2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyOm51bGw7dmFyIHByZWZldGNoZWQ9e307ZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKXsvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuaWYob2JzZXJ2ZXIpe3JldHVybiBvYnNlcnZlcjt9Ly8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG5pZighSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe3JldHVybiB1bmRlZmluZWQ7fXJldHVybiBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2lmKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpe3JldHVybjt9dmFyIGNiPWxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KTtpZihlbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MCl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7bGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpO2NiKCk7fX0pO30se3Jvb3RNYXJnaW46JzIwMHB4J30pO312YXIgbGlzdGVuVG9JbnRlcnNlY3Rpb25zPShlbCxjYik9Pnt2YXIgb2JzZXJ2ZXI9Z2V0T2JzZXJ2ZXIoKTtpZighb2JzZXJ2ZXIpe3JldHVybigpPT57fTt9b2JzZXJ2ZXIub2JzZXJ2ZShlbCk7bGlzdGVuZXJzLnNldChlbCxjYik7cmV0dXJuKCk9Pnt0cnl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGVycik7fWxpc3RlbmVycy5kZWxldGUoZWwpO307fTtjbGFzcyBMaW5rIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3Rvcihwcm9wcyl7c3VwZXIocHJvcHMpO3RoaXMucD12b2lkIDA7dGhpcy5jbGVhblVwTGlzdGVuZXJzPSgpPT57fTt0aGlzLmZvcm1hdFVybHM9bWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsYXNIcmVmKT0+e3JldHVybntocmVmOigwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoaHJlZikpLGFzOmFzSHJlZj8oMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGFzSHJlZikpOmFzSHJlZn07fSk7dGhpcy5saW5rQ2xpY2tlZD1lPT57dmFye25vZGVOYW1lLHRhcmdldH09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYodGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxlLm1ldGFLZXl8fGUuY3RybEtleXx8ZS5zaGlmdEtleXx8ZS5uYXRpdmVFdmVudCYmZS5uYXRpdmVFdmVudC53aGljaD09PTIpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG5yZXR1cm47fXZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO2lmKCFpc0xvY2FsKGhyZWYpKXsvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG5yZXR1cm47fXZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO2hyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxocmVmKTthcz1hcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGFzKTpocmVmO2UucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbnZhcntzY3JvbGx9PXRoaXMucHJvcHM7aWYoc2Nyb2xsPT1udWxsKXtzY3JvbGw9YXMuaW5kZXhPZignIycpPDA7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuX3JvdXRlci5kZWZhdWx0W3RoaXMucHJvcHMucmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93OnRoaXMucHJvcHMuc2hhbGxvd30pLnRoZW4oc3VjY2Vzcz0+e2lmKCFzdWNjZXNzKXJldHVybjtpZihzY3JvbGwpe3dpbmRvdy5zY3JvbGxUbygwLDApO2RvY3VtZW50LmJvZHkuZm9jdXMoKTt9fSk7fTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYocHJvcHMucHJlZmV0Y2gpe2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX10aGlzLnA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTt9Y29tcG9uZW50V2lsbFVubW91bnQoKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt9Z2V0UGF0aHMoKXt2YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjt2YXJ7aHJlZjpwYXJzZWRIcmVmLGFzOnBhcnNlZEFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO3ZhciByZXNvbHZlZEhyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRIcmVmKTtyZXR1cm5bcmVzb2x2ZWRIcmVmLHBhcnNlZEFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkQXMpOnJlc29sdmVkSHJlZl07fWhhbmRsZVJlZihyZWYpe2lmKHRoaXMucCYmSW50ZXJzZWN0aW9uT2JzZXJ2ZXImJnJlZiYmcmVmLnRhZ05hbWUpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO3ZhciBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFt0aGlzLmdldFBhdGhzKCkuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV07aWYoIWlzUHJlZmV0Y2hlZCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzPWxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsKCk9Pnt0aGlzLnByZWZldGNoKCk7fSk7fX19Ly8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4vLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbnByZWZldGNoKG9wdGlvbnMpe2lmKCF0aGlzLnB8fHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJylyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxudmFyIHBhdGhzPXRoaXMuZ2V0UGF0aHMoKTsvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuX3JvdXRlci5kZWZhdWx0LnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8wXSxwYXRoc1svKiBhc1BhdGggKi8xXSxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtwcmVmZXRjaGVkW3BhdGhzLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldPXRydWU7fXJlbmRlcigpe3ZhcntjaGlsZHJlbn09dGhpcy5wcm9wczt2YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG52YXIgY2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO3ZhciBwcm9wcz17cmVmOmVsPT57dGhpcy5oYW5kbGVSZWYoZWwpO2lmKGNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmKXtpZih0eXBlb2YgY2hpbGQucmVmPT09J2Z1bmN0aW9uJyljaGlsZC5yZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkLnJlZj09PSdvYmplY3QnKXtjaGlsZC5yZWYuY3VycmVudD1lbDt9fX0sb25Nb3VzZUVudGVyOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9dGhpcy5wcmVmZXRjaCh7cHJpb3JpdHk6dHJ1ZX0pO30sb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7dGhpcy5saW5rQ2xpY2tlZChlKTt9fX07Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbmlmKHRoaXMucHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtwcm9wcy5ocmVmPWFzfHxocmVmO30vLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4vLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKXt2YXIgcmV3cml0ZVVybEZvck5leHRFeHBvcnQ9cmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JykucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7aWYocHJvcHMuaHJlZiYmdHlwZW9mIF9fTkVYVF9EQVRBX18hPT0ndW5kZWZpbmVkJyYmX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KXtwcm9wcy5ocmVmPXJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpO319cmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxwcm9wcyk7fX1pZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3ZhciB3YXJuPSgwLF91dGlscy5leGVjT25jZSkoY29uc29sZS5lcnJvcik7Ly8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG52YXIgUHJvcFR5cGVzPXJlcXVpcmUoJ3Byb3AtdHlwZXMnKTt2YXIgZXhhY3Q9cmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpOy8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbkxpbmsucHJvcFR5cGVzPWV4YWN0KHtocmVmOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsYXM6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkscHJlZmV0Y2g6UHJvcFR5cGVzLmJvb2wscmVwbGFjZTpQcm9wVHlwZXMuYm9vbCxzaGFsbG93OlByb3BUeXBlcy5ib29sLHBhc3NIcmVmOlByb3BUeXBlcy5ib29sLHNjcm9sbDpQcm9wVHlwZXMuYm9vbCxjaGlsZHJlbjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwocHJvcHMscHJvcE5hbWUpPT57dmFyIHZhbHVlPXByb3BzW3Byb3BOYW1lXTtpZih0eXBlb2YgdmFsdWU9PT0nc3RyaW5nJyl7d2FybihcIldhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5cIik7fXJldHVybiBudWxsO31dKS5pc1JlcXVpcmVkfSk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovdmFyIHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbnZhciB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnXTt2YXIgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO3ZhciBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT1mdW5jdGlvbigpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JvdXRlckV2ZW50cy5mb3JFYWNoKGV2ZW50PT57c2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57X3JvdXRlcjIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsZnVuY3Rpb24oKXt2YXIgZXZlbnRGaWVsZD1cIm9uXCIrZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZXZlbnQuc3Vic3RyaW5nKDEpO3ZhciBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmd1bWVudHMpO31jYXRjaChlcnIpey8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKFwiRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6IFwiK2V2ZW50RmllbGQpOy8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKGVyci5tZXNzYWdlK1wiXFxuXCIrZXJyLnN0YWNrKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXt2YXIgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbnZhciBjcmVhdGVSb3V0ZXI9ZnVuY3Rpb24gY3JlYXRlUm91dGVyKCl7Zm9yKHZhciBfbGVuPWFyZ3VtZW50cy5sZW5ndGgsYXJncz1uZXcgQXJyYXkoX2xlbiksX2tleT0wO19rZXk8X2xlbjtfa2V5Kyspe2FyZ3NbX2tleV09YXJndW1lbnRzW19rZXldO31zaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7dmFyIF9yb3V0ZXI9cm91dGVyO3ZhciBpbnN0YW5jZT17fTtmb3IodmFyIHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oe30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPWZ1bmN0aW9uKCl7cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fSIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9XCJ3aXRoUm91dGVyKFwiK25hbWUrXCIpXCI7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIG1pdHQoKSB7XG4gICAgY29uc3QgYWxsID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvbih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcik7XG4gICAgICAgIH0sXG4gICAgICAgIG9mZih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW1pdCh0eXBlLCAuLi5ldnRzKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoLi4uZXZ0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gbWl0dDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuY29uc3QgbWl0dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBpc19keW5hbWljXzEgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xuY29uc3Qgcm91dGVfbWF0Y2hlcl8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbmNvbnN0IHJvdXRlX3JlZ2V4XzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGg7XG59XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICAgICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgICAgICA6IHBhdGg7XG59XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5mdW5jdGlvbiB0b1JvdXRlKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJztcbn1cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoKSA9PiB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aCk7XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgaXNTZXJ2ZXJSZW5kZXIsIGNiKSB7XG4gICAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMTtcbiAgICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gKSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9KSwge1xuICAgICAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGE7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGVyci5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUic7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZSwgcXVlcnksIGFzLCB7IGluaXRpYWxQcm9wcywgcGFnZUxvYWRlciwgQXBwLCB3cmFwQXBwLCBDb21wb25lbnQsIGVyciwgc3Vic2NyaXB0aW9uLCBpc0ZhbGxiYWNrLCB9KSB7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge307XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgdXRpbHNfMS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmIChlLnN0YXRlICYmXG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgICAgICAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICAgICAgICAgICAgdXJsXzEucGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZSh1cmxfMS5wYXJzZShhc1BhdGgpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgICAgICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgICAgICAgICAgICA6IGZldGNoTmV4dERhdGEocGF0aG5hbWUsIG51bGwsIHRoaXMuaXNTc3IsIGRhdGEgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U2VydmVyRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdXJsXzEucGFyc2UoYXNQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1Nzcik7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgdGhpcy5hc1BhdGggPVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgYXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gICAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKHJvdXRlLCBtb2QpIHtcbiAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gbW9kLmRlZmF1bHQgfHwgbW9kO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIHsgQ29tcG9uZW50LCBfX05fU1NHOiBtb2QuX19OX1NTRywgX19OX1NTUDogbW9kLl9fTl9TU1AgfSk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhO1xuICAgICAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICAgICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgICAqL1xuICAgIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwdXNoKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHJlcGxhY2UodXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGNoYW5nZShtZXRob2QsIF91cmwsIF9hcywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICAgICAgaWYgKHV0aWxzXzEuU1QpIHtcbiAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAgICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsO1xuICAgICAgICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXM7XG4gICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpO1xuICAgICAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAgICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGlmIChpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gdXJsXzEucGFyc2UoYXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSByb3V0ZV9yZWdleF8xLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByb3V0ZV9tYXRjaGVyXzEuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbSA9PiAhcXVlcnlbcGFyYW1dKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2ApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4ocm91dGVJbmZvID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcyk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgdXRpbHNfMS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgICAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlcnIsIGxvYWRFcnJvckZhaWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGdpcEVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzID0+IHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICAgIH0pLCByZWplY3QpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGEoKCkgPT4gX19OX1NTR1xuICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICB9KSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpO1xuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHRoaXMubm90aWZ5KGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAgICovXG4gICAgYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICovXG4gICAgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSk7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgICAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuIHV0aWxzXzEubG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKTtcbiAgICAgICAgICAgIGUuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEpIHtcbiAgICAgICAgdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuUm91dGVyLmV2ZW50cyA9IG1pdHRfMS5kZWZhdWx0KCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztcbmZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKSB7XG4gICAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7XG59XG5leHBvcnRzLmlzRHluYW1pY1JvdXRlID0gaXNEeW5hbWljUm91dGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KSB7XG4gICAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4O1xuICAgIHJldHVybiAocGF0aG5hbWUpID0+IHtcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWNvZGUgPSAocGFyYW0pID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO1xuICAgICAgICAgICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdO1xuICAgICAgICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdO1xuICAgICAgICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICAgICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKGVudHJ5ID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGVjb2RlKG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9O1xufVxuZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXIgPSBnZXRSb3V0ZU1hdGNoZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpO1xufVxuZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpIHtcbiAgICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gICAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKTtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBsZXQgZ3JvdXBJbmRleCA9IDE7XG4gICAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgIGdyb3Vwc1skMVxuICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9O1xuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbCA/ICcvKC4rPyknIDogJy8oW14vXSs/KSc7XG4gICAgfSk7XG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlO1xuICAgIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAgIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKTtcbiAgICAgICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLCBncm91cHMgfSwgKG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICAgID8ge1xuICAgICAgICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgICAgICB9XG4gICAgICAgIDoge30pKTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVSZWdleCA9IGdldFJvdXRlUmVnZXg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbi8qKlxuICogVXRpbHNcbiAqL1xuZnVuY3Rpb24gZXhlY09uY2UoZm4pIHtcbiAgICBsZXQgdXNlZCA9IGZhbHNlO1xuICAgIGxldCByZXN1bHQ7XG4gICAgcmV0dXJuICgoLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoIXVzZWQpIHtcbiAgICAgICAgICAgIHVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZXhlY09uY2UgPSBleGVjT25jZTtcbmZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICAgIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YDtcbn1cbmV4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbjtcbmZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTtcbn1cbmV4cG9ydHMuZ2V0VVJMID0gZ2V0VVJMO1xuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgICAgID8gQ29tcG9uZW50XG4gICAgICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbn1cbmV4cG9ydHMuZ2V0RGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZTtcbmZ1bmN0aW9uIGlzUmVzU2VudChyZXMpIHtcbiAgICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudDtcbn1cbmV4cG9ydHMuaXNSZXNTZW50ID0gaXNSZXNTZW50O1xuYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIGN0eCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoKF9hID0gQXBwLnByb3RvdHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gICAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcyk7XG4gICAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH1cbiAgICBpZiAoIXByb3BzKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wcztcbn1cbmV4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcyA9IGxvYWRHZXRJbml0aWFsUHJvcHM7XG5leHBvcnRzLnVybE9iamVjdEtleXMgPSBbXG4gICAgJ2F1dGgnLFxuICAgICdoYXNoJyxcbiAgICAnaG9zdCcsXG4gICAgJ2hvc3RuYW1lJyxcbiAgICAnaHJlZicsXG4gICAgJ3BhdGgnLFxuICAgICdwYXRobmFtZScsXG4gICAgJ3BvcnQnLFxuICAgICdwcm90b2NvbCcsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnc2VhcmNoJyxcbiAgICAnc2xhc2hlcycsXG5dO1xuZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsLCBvcHRpb25zKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChleHBvcnRzLnVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVybF8xLmZvcm1hdCh1cmwsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uO1xuZXhwb3J0cy5TUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCc7XG5leHBvcnRzLlNUID0gZXhwb3J0cy5TUCAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbic7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgVG9wU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy90b3BzZWN0aW9uXCI7XG5pbXBvcnQgT3RoZXJQcm9qZWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9vdGhlcnByb2plY3RzXCI7XG5pbXBvcnQgeyB1c2VWaWV3cG9ydFNjcm9sbCB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0MSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLkludHJvZHVjdGlvbiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIHRoaXMuUmVzZWFyY2ggPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICB0aGlzLkRlc2lnbiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIHRoaXMuRml4ID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgdGhpcy5SZXN1bHQgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzY3JvbGxZIH0gPSB1c2VWaWV3cG9ydFNjcm9sbCgpO1xuXG4gICAgY29uc3Qgc2Nyb2xsSW50cm8gPSAoKSA9PlxuICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiB0aGlzLkludHJvZHVjdGlvbi5jdXJyZW50Lm9mZnNldFRvcCAtIDI5MCxcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICB9KTtcbiAgICBjb25zdCBzY3JvbGxSZXNlYXJjaCA9ICgpID0+XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IHRoaXMuUmVzZWFyY2guY3VycmVudC5vZmZzZXRUb3AgLSAxMjAsXG4gICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgfSk7XG4gICAgY29uc3Qgc2Nyb2xsRGVzaWduID0gKCkgPT5cbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogdGhpcy5EZXNpZ24uY3VycmVudC5vZmZzZXRUb3AgLSAxMjAsXG4gICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgfSk7XG4gICAgY29uc3Qgc2Nyb2xsRml4ID0gKCkgPT5cbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogdGhpcy5GaXguY3VycmVudC5vZmZzZXRUb3AgLSAxMjAsXG4gICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgfSk7XG5cbiAgICBjb25zdCBzY3JvbGxSZXN1bHQgPSAoKSA9PlxuICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiB0aGlzLlJlc3VsdC5jdXJyZW50Lm9mZnNldFRvcCAtIDEyMCxcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICB9KTtcblxuICAgIGNvbnN0IHRlc3QgPSAoKSA9PiAoXG4gICAgICA8TmF2PlxuICAgICAgICA8TmF2TGluayBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19IG9uQ2xpY2s9e3Njcm9sbEludHJvfT5cbiAgICAgICAgICBJbnRyb2R1Y3Rpb25cbiAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8TmF2TGluayBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19IG9uQ2xpY2s9e3Njcm9sbFJlc2VhcmNofT5cbiAgICAgICAgICBGdW5kYW1lbnRhbCBSZXNlYXJjaFxuICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDxOYXZMaW5rIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0gb25DbGljaz17c2Nyb2xsRGVzaWdufT5cbiAgICAgICAgICBEZXNpZ24gQ29uc2lkZXJhdGlvbnNcbiAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8TmF2TGluayBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19IG9uQ2xpY2s9e3Njcm9sbEZpeH0+XG4gICAgICAgICAgUG9zdC1sYXVuY2ggZml4XG4gICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPE5hdkxpbmsgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fSBvbkNsaWNrPXtzY3JvbGxSZXN1bHR9PlxuICAgICAgICAgIFJlc3VsdHNcbiAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgPC9OYXY+XG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dFxuICAgICAgICB0aXRsZT1cIkpvbGVuZSBOZyB8IEZvb2QgU2VsZiBQaWNrLXVwXCJcbiAgICAgICAgcHJvamVjdD17dHJ1ZX1cbiAgICAgICAgY2hpbGRyZW4yPXt0ZXN0fVxuICAgICAgPlxuICAgICAgICA8VG9wU2VjdGlvblxuICAgICAgICAgIHRpdGxlPVwiRm9vZCBzZWxmIHBpY2stdXBcIlxuICAgICAgICAgIHRpdGxlMj1cIlwiXG4gICAgICAgICAgdGl0bGUzPVwiTmV3IGJ1c2luZXNzIHN0cmVhbVwiXG4gICAgICAgICAgc3VidGl0bGU9XCJcIlxuICAgICAgICAvPlxuICAgICAgICA8UGFyYWdyYXBoIHJlZj17dGhpcy5JbnRyb2R1Y3Rpb259PlxuICAgICAgICAgIFNlbGYgcGljay11cCBpcyBhIG5ldyBwcm9kdWN0IGRldmVsb3BlZCBhcyBhbiBleHRlbnNpb24gb2YgR3JhYidzIGZvb2RcbiAgICAgICAgICBkZWxpdmVyeSBzZXJ2aWNlLiBUaGUgaWRlYSBpcyB0byBhbGxvdyBjdXN0b21lcnMgdG8gcGljayB1cCB0aGVpclxuICAgICAgICAgIG9yZGVyIGZyb20gdGhlIHJlc3RhdXJhbnQgdGhlbXNlbHZlcyBpbnN0ZWFkIG9mIGhhdmluZyBhIGRyaXZlclxuICAgICAgICAgIGRlbGl2ZXIgaXQuXG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICA8U3VidGl0bGU+TXkgcm9sZTwvU3VidGl0bGU+XG4gICAgICAgIDxQYXJhZ3JhcGg+XG4gICAgICAgICAgQXMgdGhlIGZpcnN0IGRlc2lnbmVyIG9uIHRoZSBuZXcgYnVzaW5lc3MgdGVhbSwgSSBjb25kdWN0ZWQgdGhlXG4gICAgICAgICAgZnVuZGFtZW50YWwgcmVzZWFyY2gsIHVzYWJpbGl0eSB0ZXN0aW5nIGFuZCBkZXNpZ25lZCB0aGUgZXhwZXJpZW5jZVxuICAgICAgICAgIGZvciBib3RoIGN1c3RvbWVycyBhbmQgbWVyY2hhbnRzLlxuICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgPEZ1bGxJbWcgLz5cbiAgICAgICAgPFN1YnRpdGxlPlRoZSBoeXBvdGhlc2lzPC9TdWJ0aXRsZT5cbiAgICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgICBUaGUgcHJvamVjdCB3YXMgZmlyc3QgaW5pdGlhdGVkIHdoZW4gdGhlIHRlYW0gbG9va2VkIGludG8gdGhlXG4gICAgICAgICAgZGlmZmVyZW50IHdheXMgcGVvcGxlIHdlcmUgZ2V0dGluZyBmb29kLiBBcGFydCBmcm9tIGdldHRpbmcgaXRcbiAgICAgICAgICBkZWxpdmVyZWQsIHRoZXkgY291bGQgYWxzbyBjb29rLCBlYXQgb3V0IG9yIGdldCB0YWtlb3V0LiBXZSByZWFsaXNlZFxuICAgICAgICAgIHRoZXJlIHdhcyBhbiBvcHBvcnR1bml0eSB0byBwcm92aWRlIHVzZXJzIHdpdGggYW4gYWx0ZXJuYXRpdmUgb3B0aW9uXG4gICAgICAgICAgb24gdGhlIGFwcCBieSBhbGxvd2luZyB0aGVtIHRvIG9yZGVyIGZvciBwaWNrdXAuXG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICA8U3VidGl0bGUgcmVmPXt0aGlzLlJlc2VhcmNofT5SZXNlYXJjaDwvU3VidGl0bGU+XG4gICAgICAgIDxQYXJhZ3JhcGg+XG4gICAgICAgICAgQXQgdGhpcyBwb2ludCwgd2UgZm91bmQgdGhhdCB3aGlsZSB3ZSB1bmRlcnN0b29kIHRoZSBwcm9ibGVtcyBwZW9wbGVcbiAgICAgICAgICBmYWNlIHdpdGggZGVsaXZlcnksIHdlIHN0aWxsIGhhZCBhIGxvdCB0byBsZWFybiBob3cgYW5kIHdoeSBhcmUgd291bGRcbiAgICAgICAgICB0aGV5IHRha2VvdXQgZm9vZC4gSGVuY2UsIEkgcGxhbm5lZCBmb3IgaW50ZXJ2aWV3IGFuZCBjb25jZXB0IHRlc3RpbmdcbiAgICAgICAgICBzZXNzaW9ucyBpbiBib3RoIFNpbmdhcG9yZSBhbmQgSW5kb25lc2lhLlxuICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgPEZ1bGxJbWcyIC8+XG4gICAgICAgIDxQYXJhZ3JhcGgzPlxuICAgICAgICAgIFdlIHNwb2tlIHRvIGJvdGggY3VzdG9tZXJzIGFuZCBtZXJjaGFudHMgdG8gZGl2ZSBkZWVwZXIgaW50byB0aGVcbiAgICAgICAgICBjdXJyZW50IHN0cnVnZ2xlcyB0aGV5IGZhY2Ugd2l0aCBnZXR0aW5nIGFuZCBwcmVwYXJpbmcgdGFrZW91dC4gV2VcbiAgICAgICAgICBmb3VuZCB0aGF0OlxuICAgICAgICA8L1BhcmFncmFwaDM+XG4gICAgICAgIDxTdWJ0aXRsZT5LZXkgZmluZGluZ3M8L1N1YnRpdGxlPlxuXG4gICAgICAgIDxMaXN0PlxuICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBUaGUgbWFpbiBpc3N1ZSBwZW9wbGUgZmFjZSB3aGVuIGdldHRpbmcgdGFrZW91dCBpcyB3aXRoIHF1ZXVlaW5nXG4gICAgICAgICAgICAgIGFzIHdlbGwgYXMgaGF2aW5nIHRvIHdhaXQgZm9yIHRoZSBmb29kIHRvIGJlIHByZXBhcmVkLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFBlb3BsZSB0ZW5kIHRvIGJlIGxlc3MgYWR2ZW50dXJvdXMgZm9yIHRha2VvdXQgb3JkZXJzIGFuZCBsaWtlIHRvXG4gICAgICAgICAgICAgIGZpbmQgYSBmZXcgZ29vZCBzcG90cyBuZWFyIHRoZWlyIHN1cnJvdW5kaW5ncyBlLmcuIGhvbWUgJiBvZmZpY2VcbiAgICAgICAgICAgICAgdG8gZnJlcXVlbnQuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgUGVvcGxlIGFyZSBpbnRlcmVzdGVkIGluIGJlaW5nIGFibGUgdG8gYXZvaWQgdGhlIGRlbGl2ZXJ5IGNvc3QgYnlcbiAgICAgICAgICAgICAgcGlja2luZyB1cCB0aGVpciBvcmRlciBvbiB0aGVpciBvd24gYXMgZ2V0dGluZyBkZWxpdmVyeSBhbGwgdGhlXG4gICAgICAgICAgICAgIHRpbWUgd291bGQgYmUgZXhwZW5zaXZlXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgPC9MaXN0PlxuICAgICAgICA8U3VidGl0bGUgcmVmPXt0aGlzLkRlc2lnbn0+RGVzaWduPC9TdWJ0aXRsZT5cbiAgICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgICBXaXRoIHRoYXQsIHdlIHN0YXJ0ZWQgbWFwcGluZyBvdXQgdGhlIGV4cGVjdGVkIGZsb3cgYXMgd2VsbCBhcyBob3dcbiAgICAgICAgICBpbmZvcm1hdGlvbiB3aWxsIHBhc3MgdGhyb3VnaCBmcm9tIHRoZSBjdXN0b21lciB0byB0aGUgbWVyY2hhbnQgYmVmb3JlXG4gICAgICAgICAgd29ya2luZyBvbiB0aGUgZGVzaWduIGRldGFpbHMuXG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICA8U3VidGl0bGU+Q29uc2lkZXJhdGlvbiAjMTo8L1N1YnRpdGxlPlxuICAgICAgICA8UXVvdGUyPkRpc3RhbmNlIG1hdHRlcnM8L1F1b3RlMj5cbiAgICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgICBHaXZlbiB0aGF0IHdoZW4gaXQgY29tZXMgdG8gZ2V0dGluZyB0YWtlb3V0LCBjdXN0b21lcnMgY2FyZSBtb3JlIGFib3V0XG4gICAgICAgICAgaG93IG11Y2ggdGhleSBuZWVkIHRvIHRyYXZlbCwgd2UgbWFkZSB0aGUgY2FsbCB0byBwcmlvcml0aXNlIHNob3dpbmdcbiAgICAgICAgICBob3cgZmFyIHRoZSByZXN0YXVyYW50IGlzIGNvbXBhcmVkIHRvIG90aGVyIGluZm9ybWF0aW9uIHRvIGhlbHAgd2l0aFxuICAgICAgICAgIGRlY2lzb24gbWFraW5nLlxuICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgPEZ1bGxJbWczIC8+XG4gICAgICAgIDxTdWJ0aXRsZT5Db25zaWRlcmF0aW9uICMyOjwvU3VidGl0bGU+XG4gICAgICAgIDxRdW90ZTI+T3JkZXIgY29sbGVjdGlvbjwvUXVvdGUyPlxuICAgICAgICA8UGFyYWdyYXBoPlxuICAgICAgICAgIFdoZW4gaXQgY2FtZSB0byBvcmRlciBjb2xsZWN0aW9uLCB0aGVyZSB3YXMgYSB0cmFkZS1vZmYgdG8gbWFrZVxuICAgICAgICAgIGJldHdlZW4gYWNjdXJhY3kgKGkuZS4gY29sbGVjdGluZyB0aGUgcmlnaHQgb3JkZXIpIGFuZCBlYXNlIG9mIHVzZVxuICAgICAgICAgIChpLmUuIGhvdyBtdWNoIGVmZm9ydCBpcyByZXF1aXJlZCB0byBjb2xsZWN0KS5cbiAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgIDxQYXJhZ3JhcGgyPlxuICAgICAgICAgIFdlIGNvbnNpZGVyZWQgcmVxdWlyaW5nIHRoZSBjdXN0b21lciB0byBzY2FuIGEgcXIgY29kZSBmb3IgYmV0dGVyXG4gICAgICAgICAgYWNjdXJhY3kgYnV0IGRlY2lkZWQgdG8gZ28gd2l0aCBoYXZpbmcgYSBzd2lwZSBidXR0b24gb24gdGhlIG9yZGVyXG4gICAgICAgICAgc2NyZWVuIGluc3RlYWQuIElmIHRoZSBjdXN0b21lciBkb2VzIG5vdCBjb21wbGV0ZSB0aGUgb3JkZXIsIHRoZVxuICAgICAgICAgIHJlc3RhdXJhbnQgd2lsbCBiZSBhYmxlIHRvIGRvIHNvIG9uIHRoZWlyIGVuZCBhZnRlciBzb21lIHRpbWUuXG4gICAgICAgIDwvUGFyYWdyYXBoMj5cbiAgICAgICAgPEZ1bGxJbWc0IC8+XG4gICAgICAgIDxTdWJ0aXRsZSByZWY9e3RoaXMuRml4fT5Qb3N0LWxhdW5jaCBmaXg8L1N1YnRpdGxlPlxuICAgICAgICA8UXVvdGUyPkhpZ2ggY2FuY2VsbGF0aW9uIHJhdGVzPC9RdW90ZTI+XG4gICAgICAgIDxQYXJhZ3JhcGg+XG4gICAgICAgICAgV2hlbiB0aGUgZmVhdHVyZSBmaXJzdCBsYXVuY2hlZCwgd2Ugbm90aWNlZCBhbiB1bnVzdWFsbHkgaGlnaCBudW1iZXJcbiAgICAgICAgICBvZiBjYW5jZWxsYXRpb25zIGFuZCByZWFsaXNlZCBtb3N0IG9mIGl0IHdhcyBjb21pbmcgZnJvbSBjdXN0b21lcnMgd2hvXG4gICAgICAgICAgd2VyZSB0aG91Z2h0IHRoZXkgd2VyZSBtYWRlIGEgZGVsaXZlcnkgb3JkZXIuIEV2ZW4gdGhvdWdoIHdlIHdlcmVcbiAgICAgICAgICBhd2FyZSBvZiB0aGlzIHBvc3NpYmlsdHkgYmVmb3JlIGxhdW5jaCwgd2UgbWlzdGFrZW5seSB0aG91Z2h0IHRoYXRcbiAgICAgICAgICBzdWJ0bGUgY3VlcyB3ZXJlIHN1ZmZpY2llbnQgdG8gZGlmZmVyZW50aWF0ZSB0aGUgdHdvLlxuICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgPFBhcmFncmFwaDI+XG4gICAgICAgICAgQSBxdWljay1maXggd2FzIGltcGxlbWVudGVkIHRvIGFkZCBpbiBzdG9ybmdlciB2aXN1YWwgY3VlcyB0aGF0IHRoaXNcbiAgICAgICAgICBpcyBhIHNlbGYgcGljay11cCBvcmRlci4gV2l0aCB0aGUgZml4LHtcIiBcIn1cbiAgICAgICAgICA8Yj5jYW5jZWxsYXRpb24gcmF0ZXMgd2VudCBkb3duIGZyb20gMjQlIHRvIDUlIGluIGEgZmV3IHdlZWtzIDwvYj4gYW5kXG4gICAgICAgICAgaXMgbm93YWRheXMgaG9sZGluZyBzdGVhZHkgYXQgMC41JVxuICAgICAgICA8L1BhcmFncmFwaDI+XG4gICAgICAgIDxGdWxsSW1nNSAvPlxuICAgICAgICA8U3VidGl0bGU+RGVzaWduIHNuYXBzaG90IDwvU3VidGl0bGU+XG4gICAgICAgIDxGdWxsSW1nNiAvPlxuICAgICAgICA8U3VidGl0bGUgcmVmPXt0aGlzLlJlc3VsdH0+UmVzdWx0czwvU3VidGl0bGU+XG4gICAgICAgIDxQYXJhZ3JhcGg+XG4gICAgICAgICAgVGhlIFNlbGYgUGljay11cCBwcm9kdWN0IGhhcyBiZWVuIHN0ZWFkaWx5IGdyb3dpbmcgc2luY2UgdGhlIGluaXRhbFxuICAgICAgICAgIHBpbG90IGFuZCBpcyBub3cgYXZhaWxhYmxlIGluIDYgY291bnRyaWVzIGFjcm9zcyBTb3V0aCBFYXN0IEFzaWEgd2l0aFxuICAgICAgICAgIG92ZXIgMzYwayByZXN0dWFyYW50cyBvbmJvYXJkLiBBZGRpdG9uYWxseSwgd2l0aCB0aGUgY3VycmVudFxuICAgICAgICAgIGNvdmlkLXJlYWxpdHksIHNlbGYgcGljay11cCBoYXMgYmVlbiBhIHRpbWVseSBhZGRpdGlvbiB0byBzZXJ2ZSB0aGVcbiAgICAgICAgICBuZWVkcyBvZiBjdXN0b21lcnMgd2hvIHdhbnRlZCB0byB0YWtlb3V0IGZvb2QgYnV0IGRpZCBub3Qgd2FudCB0b1xuICAgICAgICAgIHNwZW5kIHRvbyBtdWNoIHRpbWUgb3V0ZG9vcnMuXG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICA8U3VidGl0bGU+UmVmbGVjdGlvbjwvU3VidGl0bGU+XG4gICAgICAgIDxQYXJhZ3JhcGg+XG4gICAgICAgICAgSXQgaGFzIGJlZW4gYSBmYWNpbmF0aW5nIGpvdXJuZXkgc2VlaW5nIGEgcHJvZHVjdCBncm93IGZyb20gYSBibGFua1xuICAgICAgICAgIHBvd2VyIHBvaW50IHNsaWRlIHRvIHNlcnZpbmcgdGhvdXNhbmRzIG9mIG9yZGVycyBkYWlseS4gSW4gcGFydGljdWxhcixcbiAgICAgICAgICBJIGNoZXJpc2ggdGhlIGV4cGVyaWVuY2Ugb2Ygd29ya2luZyBjbG9zZXNseSB3aXRoIHRoZSB0ZWFtIHRvIHJvbGwgb3V0XG4gICAgICAgICAgZml4ZXMgd2hlbiB0aGluZ3Mgd2VyZSBub3QgZ29pbmcgYXMgcGxhbm5lZCBhZnRlciBsYXVuY2guXG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICA8UGFyYWdyYXBoMj5cbiAgICAgICAgICBTaW5jZSB0aGlzIGl0ZXJhdGlvbiwgd2UgaGF2ZSBzaW5jZSBhbHNvIG1hZGUgZnVydGhlciBpbXByb3ZlbWVudHMgYW5kXG4gICAgICAgICAgZW5oYW5jZW1lbnRzIGxpa2Ugc2hvd2luZyBhIG1hcCB2aWV3IG9mIG5lYXJieSByZXN0YXVyYW50cy4gSSdtXG4gICAgICAgICAgZXhjaXRlZCB0byBzZWUgdG8gc2VlIGhvdyB0aGUgcHJvZHV0IHdpbGwgY29udGludWUgdG8gZ3JvdyBhcyBwYXJ0IG9mXG4gICAgICAgICAgR3JhYidzIHN1cGVyIGFwcC5cbiAgICAgICAgPC9QYXJhZ3JhcGgyPlxuICAgICAgICA8RnVsbEltZzcgLz5cbiAgICAgICAgPFN1YnRpdGxlPk90aGVyIFByb2plY3RzIDwvU3VidGl0bGU+XG4gICAgICAgIDxPdGhlclByb2plY3RzXG4gICAgICAgICAgdXJsMT1cIi9wcm9qZWN0MlwiXG4gICAgICAgICAgcHJvajE9XCJEZWxpdmVyeSBGZWF0dXJlc1wiXG4gICAgICAgICAgdXJsMj1cIi9wcm9qZWN0M1wiXG4gICAgICAgICAgcHJvajI9XCJQYXJlbnRzIEdhdGV3YXlcIlxuICAgICAgICAgIHVybDM9XCIvcHJvamVjdDRcIlxuICAgICAgICAgIHByb2ozPVwiSG91c2luZyByZXNhbGUgcG9ydGFsXCJcbiAgICAgICAgLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgTmF2ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIG1hcmdpbjogMTZweCAwcHggMCAwO1xuYDtcblxuY29uc3QgTmF2TGluayA9IHN0eWxlZC5hYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMDBweDtcbiAgcGFkZGluZzogOHB4IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHRyYW5zaXRpb246ICR7dGhlbWUuYW5pbWF0aW9ucy5kZWZhdWx0fTtcbiAgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDMxLCAzMSwgNTQsIDAuNCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcblxuY29uc3QgU3VidGl0bGUgPSBzdHlsZWQuaDRgXG4gIG1hcmdpbi10b3A6IDQ4cHg7XG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lLmZvbnRXZWlnaHRzLnNlbWlib2xkfTtcbiAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmxpZ2h0Z3JleTN9O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMl19KSB7XG4gICAgbWFyZ2luLXRvcDogNDhweDtcbiAgfVxuYDtcblxuY29uc3QgUGFyYWdyYXBoID0gc3R5bGVkLnBgXG4gIG1hcmdpbi10b3A6IDhweDtcbiAgYSB7XG4gICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnRTaXplc1s0XX07XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsyXX0pIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG5gO1xuXG5jb25zdCBQYXJhZ3JhcGgyID0gc3R5bGVkLnBgXG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5saWdodGdyZXkxfTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsyXX0pIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG4gIGEge1xuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250U2l6ZXNbNF19O1xuICB9XG5gO1xuXG5jb25zdCBQYXJhZ3JhcGgzID0gc3R5bGVkLnBgXG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMl19KSB7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgfVxuYDtcblxuY29uc3QgTGlzdCA9IHN0eWxlZC51bGBcbiAgbWFyZ2luLWxlZnQ6IDIxcHg7XG4gIG1hcmdpbi10b3A6IC04cHg7XG5gO1xuY29uc3QgTGlzdEl0ZW0gPSBzdHlsZWQubGlgXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuYDtcblxuY29uc3QgUXVvdGUyID0gc3R5bGVkLmgzYFxuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcnMubGlnaHRncmV5MX07XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMl19KSB7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgfVxuYDtcblxuY29uc3QgRnVsbEltZyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBtYXJnaW4tdG9wOiA0OHB4O1xuICBtYXJnaW4tYm90dG9tOiA2NHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMxLCAzMSwgNTQsIDAuNCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3BrLTEucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzJdfSkge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGhlaWdodDogMTkwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IEZ1bGxJbWcyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3BrLTIucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzJdfSkge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGhlaWdodDogMTUwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IEZ1bGxJbWczID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDU2cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzEsIDMxLCA1NCwgMC40KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcGstMy5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMl19KSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgaGVpZ2h0OiAxNzBweDtcbiAgfVxuYDtcblxuY29uc3QgRnVsbEltZzQgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTZweDtcbiAgYmFja2dyb3VuZDogcmdiYSgzMSwgMzEsIDU0LCAwLjQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3Nway00LnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsyXX0pIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IDE3MHB4O1xuICB9XG5gO1xuXG5jb25zdCBGdWxsSW1nNSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM3MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1NnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMxLCAzMSwgNTQsIDAuNCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3BrLTUucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzJdfSkge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGhlaWdodDogMTcwcHg7XG4gIH1cbmA7XG5jb25zdCBGdWxsSW1nNiA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1NnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMxLCAzMSwgNTQsIDAuNCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3BrLTYucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzJdfSkge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGhlaWdodDogNTAwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IEZ1bGxJbWc3ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbi10b3A6IDQ4cHg7XG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzEsIDMxLCA1NCwgMC40KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcGstNy5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMl19KSB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDE7XG4iLCJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcblxuY29uc3QgR2xvYmFsU3R5bGVzID0gY3JlYXRlR2xvYmFsU3R5bGVgXG5cbmh0bWx7XG4gICAgYmFja2dyb3VuZDogaHNsKDI0MCwgNjAlLCA1JSk7XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmxpZ2h0Z3JleTJ9O1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMF19KXtcbiAgYm9keTpiZWZvcmUsIGJvZHk6YWZ0ZXJ7IFxuICAgIG1heC13aWR0aDogOTB2dztcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgwZGVnLCMyNDJBMkUgMXB4LHRyYW5zcGFyZW50IDBweCkgMCAwIC8gY2FsYyg5MHZ3LzQpIGF1dG87XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsxXX0pe1xuYm9keTpiZWZvcmUsIGJvZHk6YWZ0ZXJ7IFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDBkZWcsIzE5MUQyMCAxcHgsdHJhbnNwYXJlbnQgMHB4KSAwIDAgLyBjYWxjKDkwdncvMikgYXV0bztcbiAgfVxufVxuXG5oMSB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLmZvbnRXZWlnaHRzLmJvbGR9O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzFdfSl7XG5oMSB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLmZvbnRXZWlnaHRzLmJvbGR9O1xufVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzJdfSl7XG5oMSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLmZvbnRXZWlnaHRzLmJvbGR9O1xufVxufVxuXG5oMiB7XG4gICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnRTaXplc1sxXX07XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxNGVtO1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLmZvbnRXZWlnaHRzLnNlbWlib2xkfTtcbn1cblxuaDMge1xuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250U2l6ZXNbMl19O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMTJlbTtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbn1cblxuaDQge1xuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250U2l6ZXNbNF19O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMTBlbTtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBmb250LXdlaWdodDogJHt0aGVtZS5mb250V2VpZ2h0cy5yZWd1bGFyfTtcbn1cblxuaDUge1xuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250U2l6ZXNbNV19O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMDhlbTtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuaDYge1xuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250U2l6ZXNbNl19O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMDJlbTtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBmb250LXdlaWdodDogJHt0aGVtZS5mb250V2VpZ2h0cy5zZW1pYm9sZH07XG59XG5cbnAge1xuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250U2l6ZXNbNF19O1xuICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDEwZW07XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUuZm9udFdlaWdodHMucmVndWxhcn07XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHRTZWNvbmRhcnl9O1xufVxuXG5zcGFuIHtcbiAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udFNpemVzWzZdfTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDA0ZW07XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUuZm9udFdlaWdodHMucmVndWxhcn07XG59XG5cbmEge1xuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250U2l6ZXNbNV19O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMDZlbTtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBmb250LXdlaWdodDogJHt0aGVtZS5mb250V2VpZ2h0cy5yZWd1bGFyfTtcbiAgICBjb2xvcjogcmdiKDY0LDE1NiwyNTUpO1xufVxuXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZXM7XG4iLCJjb25zdCB0aGVtZSA9IHtcbiAgbWF4V2lkdGg6IFwiODAwcHhcIixcbiAgYnJlYWtwb2ludDogW1xuICAgIFwiMTE1MHB4XCIsIC8vIDBcbiAgICBcIjg5MHB4XCIsIC8vIDFcbiAgICBcIjYwMHB4XCIsIC8vIDJcbiAgICBcIjM2MHB4XCIsIC8vIDNcbiAgXSxcbiAgc3BhY2U6IFtcbiAgICBcIjBweFwiLCAvLyAwXG4gICAgXCI0cHhcIiwgLy8gMVxuICAgIFwiOHB4XCIsIC8vIDJcbiAgICBcIjE2cHhcIiwgLy8gM1xuICAgIFwiMjRweFwiLCAvLyA0XG4gICAgXCIzMnB4XCIsIC8vIDVcbiAgICBcIjQ4cHhcIiwgLy8gNlxuICAgIFwiNjRweFwiLCAvLyA3XG4gICAgXCI5NnB4XCIsIC8vIDhcbiAgICBcIjEyOHB4XCIsIC8vIDlcbiAgICBcIjE2MHB4XCIsIC8vIDEwXG4gIF0sXG4gIGZvbnRTaXplczogW1xuICAgIFwiMnJlbVwiLCAvLyAwIDMycHhcbiAgICBcIjEuODc1cmVtXCIsIC8vIDEgMzBweFxuICAgIFwiMS41cmVtXCIsIC8vIDIgMjRweFxuICAgIFwiMS4yNXJlbVwiLCAvLyAzIDIwcHhcbiAgICBcIjEuMTI1cmVtXCIsIC8vIDQgMThweFxuICAgIFwiMXJlbVwiLCAvLyA1IDE2cHhcbiAgICBcIjAuODc1cmVtXCIsIC8vIDYgMTRweFxuICAgIFwiMC43NXJlbVwiLCAvLyA3IDEycHhcbiAgXSxcbiAgZm9udFdlaWdodHM6IHtcbiAgICByZWd1bGFyOiA0MDAsXG4gICAgbWVkaXVtOiA1MDAsXG4gICAgc2VtaWJvbGQ6IDYwMCxcbiAgICBib2xkOiA3MDAsXG4gIH0sXG4gIGNvbG9yczoge1xuICAgIGxpZ2h0Z3JleTQ6IFwiI0Y5RkFGQlwiLFxuICAgIGxpZ2h0Z3JleTM6IFwiI0Y0RjZGOFwiLFxuICAgIGxpZ2h0Z3JleTI6IFwiI0RGRTNFOFwiLFxuICAgIGxpZ2h0Z3JleTE6IFwiI0M0Q0RENVwiLFxuICAgIGdyZXk0OiBcIiM5MTlFQUJcIixcbiAgICBncmV5MzogXCIjNjM3MzgxXCIsXG4gICAgZ3JleTI6IFwiIzQ1NEY1QlwiLFxuICAgIGdyZXkxOiBcIiMyMTJCMzZcIixcbiAgICB0ZXh0OiBcIiNGOUZBRkJcIixcbiAgICB0ZXh0U2Vjb25kYXJ5OiBcIiNERkUzRThcIixcbiAgICB0ZXh0TGluazogXCJyZ2IoNjQsMTU2LDI1NSlcIixcbiAgfSxcbiAgYW5pbWF0aW9uczoge1xuICAgIGRlZmF1bHQ6IFwiZWFzZSAwLjRzO1wiLFxuICAgIGhvdmVyOiBcIjAuMzVzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSlcIixcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxvdHRpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==