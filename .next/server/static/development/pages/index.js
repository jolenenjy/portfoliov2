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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "./components/worksection.tsx":
/*!************************************!*\
  !*** ./components/worksection.tsx ***!
  \************************************/
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
var _jsxFileName = "/Users/jolene.ng/portfoliov2/components/worksection.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];





const WorkSection = ({
  title = "default",
  subtitle = "default",
  imgurl = "/grab.png",
  url = "/project1",
  cta = "Read case study",
  title2 = "default",
  subtitle2 = "default",
  imgurl2 = "/grab.png",
  url2 = "/project2",
  cta2 = "Read case study",
  onlyone = false
}) => __jsx(ProjectGrid, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 3
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: url,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }
}, __jsx(ProjectCard, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 7
  }
}, __jsx(ProjectDesc, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }
}, __jsx(ProjectTitle, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 11
  }
}, title), __jsx(ProjectTitle, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 11
  }
}, subtitle), __jsx(ProjectCTA, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 11
  }
}, cta)), __jsx(ProjectImg, {
  src: imgurl,
  alt: "my image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 9
  }
}))), __jsx("div", {
  style: {
    display: onlyone ? "none" : "block"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: url2,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 7
  }
}, __jsx(ProjectCard, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 9
  }
}, __jsx(ProjectDesc, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 11
  }
}, __jsx(ProjectTitle, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 13
  }
}, title2), __jsx(ProjectTitle, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 13
  }
}, subtitle2), __jsx(ProjectCTA, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 13
  }
}, cta2)), __jsx(ProjectImg, {
  src: imgurl2,
  alt: "my image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 11
  }
})))));

const ProjectGrid = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "worksection__ProjectGrid",
  componentId: "sc-1q3py-0"
})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:16px;@media (max-width:", "){grid-template-columns:1fr;grid-gap:48px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[2]);
const ProjectCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "worksection__ProjectCard",
  componentId: "sc-1q3py-1"
})(["background:rgba(31,31,54,0.4);height:380px;border-radius:8px;cursor:pointer;transition:", ";display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].animations.default);
const ProjectDesc = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "worksection__ProjectDesc",
  componentId: "sc-1q3py-2"
})(["padding:24px 32px 8px 32px;"]);
const ProjectImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "worksection__ProjectImg",
  componentId: "sc-1q3py-3"
})(["width:100%;bottom:0;border-radius:0px 0px 8px 8px;opacity:0.5;filter:grayscale(100%);transition:", ";@media (max-width:", "){filter:grayscale(0%);opacity:1;}", ":hover &{filter:grayscale(0%);opacity:1;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].animations.default, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[1], ProjectCard);
const ProjectTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "worksection__ProjectTitle",
  componentId: "sc-1q3py-4"
})(["color:", ";transition:", ";", ":hover &{color:", ";opacity:1;}@media (max-width:", "){color:", ";opacity:1;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.lightgrey1, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].animations.default, ProjectCard, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.lightgrey1, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[1], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.lightgrey1);
const ProjectCTA = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h5.withConfig({
  displayName: "worksection__ProjectCTA",
  componentId: "sc-1q3py-5"
})(["padding:12px 0px;color:", ";font-weight:", ";opacity:1;transition:", ";", ":hover &{opacity:1;::after{transform:translateX(4px);}}::after{content:\"\u2192\";margin-left:4px;position:absolute;transition:", ";}@media (max-width:", "){opacity:1;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.grey4, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].fontWeights.medium, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].animations.default, ProjectCard, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].animations.default, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[1]);
/* harmony default export */ __webpack_exports__["default"] = (WorkSection);

/***/ }),

/***/ "./components/worksection2.tsx":
/*!*************************************!*\
  !*** ./components/worksection2.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.ts");
var _jsxFileName = "/Users/jolene.ng/portfoliov2/components/worksection2.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class WorkSection2 extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      seevideo: false
    });

    _defineProperty(this, "showVideo", () => {
      document.body.style.overflow = "hidden";
      this.refs.video.play();
      this.refs.video.volume = 0.3;
      this.setState({
        seevideo: true
      });
    });

    _defineProperty(this, "hideVideo", () => {
      document.body.style.overflow = "scroll";
      this.refs.video.pause();
      this.refs.video.currentTime = 0;
      this.setState({
        seevideo: false
      });
    });
  }

  render() {
    return __jsx(ProjectGrid, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }
    }, __jsx(VideoContainer, {
      style: {
        display: this.state.seevideo ? "flex" : "none"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }
    }, __jsx(CloseContainer, {
      onClick: this.hideVideo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }, __jsx(CloseIcon, {
      focusable: "false",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }, __jsx("path", {
      d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 15
      }
    }))), __jsx(VideoModal, {
      ref: "video",
      controls: true,
      controlsList: "nodownload",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }
    }, __jsx("source", {
      src: "/aether.mp4",
      type: "video/mp4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }
    }))), __jsx("a", {
      onClick: this.showVideo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }
    }, __jsx(ProjectCard, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }
    }, __jsx(ProjectDesc, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }
    }, __jsx(ProjectTitle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 15
      }
    }, this.props.title), __jsx(ProjectTitle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 15
      }
    }, this.props.subtitle), __jsx(ProjectCTA, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 15
      }
    }, "Watch video")))), __jsx("div", {
      style: {
        display: this.props.onlyone ? "none" : "block"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }
    }, __jsx("a", {
      href: this.props.url2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }
    }, __jsx(ProjectCard2, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, __jsx(ProjectDesc, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      }
    }, __jsx(ProjectTitle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    }, this.props.title2), __jsx(ProjectTitle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }
    }, this.props.subtitle2), __jsx(ProjectCTA2, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }, "View more"))))));
  }

}

const ProjectGrid = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "worksection2__ProjectGrid",
  componentId: "sc-17uujpa-0"
})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:16px;@media (max-width:", "){grid-template-columns:1fr;grid-gap:48px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[2]);
const ProjectCard2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "worksection2__ProjectCard2",
  componentId: "sc-17uujpa-1"
})(["position:relative;height:380px;border-radius:8px;background-color:rgba(31,31,54,0.4);cursor:pointer;transition:", ";display:flex;flex-direction:column;justify-content:space-between;::after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:8px;background-image:url(/matr1sq.jpg);background-size:cover;background-position:center;opacity:0.4;z-index:-1;transition:", ";}:hover{::after{opacity:1;}}@media (max-width:", "){::after{opacity:1;}}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].animations.default, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].animations.default, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[1]);
const ProjectCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "worksection2__ProjectCard",
  componentId: "sc-17uujpa-2"
})(["position:relative;height:380px;border-radius:8px;background-color:rgba(31,31,54,0.4);cursor:pointer;transition:", ";display:flex;flex-direction:column;justify-content:space-between;::after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:8px;background-image:url(/aether1.png);background-size:cover;background-position:center;opacity:0.6;z-index:-1;transition:", ";}:hover{::after{opacity:1;}}@media (max-width:", "){::after{opacity:1;}}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].animations.default, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].animations.default, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[1]);
const ProjectDesc = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "worksection2__ProjectDesc",
  componentId: "sc-17uujpa-3"
})(["padding:24px 32px;"]);
const ProjectCTA2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h5.withConfig({
  displayName: "worksection2__ProjectCTA2",
  componentId: "sc-17uujpa-4"
})(["padding:12px 0px;color:", ";font-weight:", ";opacity:1;transition:", ";", ":hover &{opacity:1;::after{transform:translateX(3px) translateY(-1px) rotate(-40deg);}}::after{content:\"\u2192\";margin-left:4px;position:absolute;transform:rotate(-40deg);transition:", ";}@media (max-width:", "){opacity:1;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.grey4, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].fontWeights.medium, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].animations.default, ProjectCard2, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].animations.default, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[1]);
const ProjectCTA = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h5.withConfig({
  displayName: "worksection2__ProjectCTA",
  componentId: "sc-17uujpa-5"
})(["padding:12px 0px;color:", ";font-weight:", ";opacity:1;transition:", ";", ":hover &{opacity:1;::after{transform:translateX(4px);}}::after{content:\"\u2192\";margin-left:4px;position:absolute;transition:", ";}@media (max-width:", "){opacity:1;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.grey4, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].fontWeights.medium, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].animations.default, ProjectCard, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].animations.default, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[1]);
const ProjectTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "worksection2__ProjectTitle",
  componentId: "sc-17uujpa-6"
})(["color:", ";transition:", ";", ":hover &{color:", ";}", ":hover &{color:", ";}@media (max-width:", "){color:", ";}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.lightgrey1, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].animations.default, ProjectCard, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.lightgrey1, ProjectCard2, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.lightgrey1, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[1], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.lightgrey1);
const VideoContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "worksection2__VideoContainer",
  componentId: "sc-17uujpa-7"
})(["position:fixed;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:rgba(0,0,0,0.7);z-index:2000;"]);
const VideoModal = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.video.withConfig({
  displayName: "worksection2__VideoModal",
  componentId: "sc-17uujpa-8"
})(["width:80%;height:auto;"]);
const CloseContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "worksection2__CloseContainer",
  componentId: "sc-17uujpa-9"
})(["width:60px;height:60px;border-radius:12px;position:absolute;top:40px;right:40px;cursor:pointer;display:flex;align-items:center;justify-content:center;background-color:rgba(31,31,54,0.2);transition:", ";:hover{background-color:rgba(31,31,54,0.4);}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].animations.default);
const CloseIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.withConfig({
  displayName: "worksection2__CloseIcon",
  componentId: "sc-17uujpa-10"
})(["width:32px;fill:rgba(255,255,255,0.6);transition:", ";", ":hover &{fill:rgba(255,255,255,0.8);}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].animations.default, CloseContainer);
/* harmony default export */ __webpack_exports__["default"] = (WorkSection2);

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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.tsx");
/* harmony import */ var _components_topsection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/topsection */ "./components/topsection.tsx");
/* harmony import */ var _components_worksection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/worksection */ "./components/worksection.tsx");
/* harmony import */ var _components_worksection2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/worksection2 */ "./components/worksection2.tsx");
var _jsxFileName = "/Users/jolene.ng/portfoliov2/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const IndexPage = () => __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
  title: "Jolene Ng | Home",
  home: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }
}, __jsx(_components_topsection__WEBPACK_IMPORTED_MODULE_4__["default"], {
  title: "Jolene Ng Jia Ying",
  title2: "Sr. Product Designer",
  title3: "Codes for fun.",
  subtitle: "A designer, researcher and tinkerer. I started designing after realising I could shape the products in my surroundings. My primary interest is in working on product experiences with a clear value proposition.",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}), __jsx(WorkGrid, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }
}, __jsx(_components_worksection__WEBPACK_IMPORTED_MODULE_5__["default"], {
  title: "Food",
  subtitle: "Self Pick-up",
  imgurl: "/spk-0.png",
  url: "/project1",
  title2: "Delivery",
  subtitle2: "features",
  imgurl2: "/grab-0.png",
  url2: "/project2",
  cta2: "View features",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 7
  }
}), __jsx(_components_worksection__WEBPACK_IMPORTED_MODULE_5__["default"], {
  title: "Parents Gateway",
  subtitle: "for Schools",
  imgurl: "/pg-0.png",
  url: "/project3",
  title2: "Housing",
  subtitle2: "Resale Portal",
  imgurl2: "/hdb-0.png",
  url2: "/project4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 7
  }
}), __jsx(_components_worksection2__WEBPACK_IMPORTED_MODULE_6__["default"], {
  title2: "MATr",
  subtitle2: "3D printed object",
  url2: "https://www.stuck.sg/portfolio/matr/",
  title: "Aether",
  subtitle: "Interactive installation",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 7
  }
})));

const WorkGrid = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__WorkGrid",
  componentId: "lrbmwi-0"
})(["display:grid;grid-gap:112px;margin-top:96px;@media (max-width:", "){grid-gap:56px;}@media (max-width:", "){grid-gap:48px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[1], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[2]);
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

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

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jolene.ng/portfoliov2/pages/index.tsx */"./pages/index.tsx");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dyaWQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaWRlYmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpZGViYXIyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RvcHNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvd29ya3NlY3Rpb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvd29ya3NlY3Rpb24yLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvZ2xvYmFsc3R5bGVzLnRzeCIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbG90dGllXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJGb290ZXIiLCJSZWFjdCIsInJlbmRlciIsIkZvb3RlckNvbnRhaW5lciIsInN0eWxlZCIsImZvb3RlciIsInRoZW1lIiwic3BhY2UiLCJjb2xvcnMiLCJncmV5MyIsImJyZWFrcG9pbnQiLCJTb2NpYWxzIiwiZGl2IiwiU29jaWFsSWNvbiIsInN2ZyIsImdyZXkyIiwiYW5pbWF0aW9ucyIsImRlZmF1bHQiLCJGb290ZXIyIiwiZGVmYXVsdE9wdGlvbnMiLCJsb29wIiwiYXV0b3BsYXkiLCJhbmltYXRpb25EYXRhIiwicmVuZGVyZXJTZXR0aW5ncyIsInByZXNlcnZlQXNwZWN0UmF0aW8iLCJUZXh0Q29udGFpbmVyIiwicHgiLCJudW1iZXIiLCJHcmlkQ29udGFpbmVyIiwicHJvcHMiLCJnYXAiLCJjb2x1bW5zIiwiR3JpZCIsIkxpbmtzIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29sb3IiLCJwYXRobmFtZSIsIkhlYWRlciIsIm1hcmdpbkJvdHRvbSIsInNob3dJbmZvIiwidGV4dFNlY29uZGFyeSIsIlNpZGViYXJDb250YWluZXIiLCJMb2dvIiwiYSIsIk5hbWUiLCJOYXYiLCJtb3Rpb24iLCJOYXZMaW5rIiwiU2hvd0luZm8iLCJzY3JvbGxZIiwidXNlVmlld3BvcnRTY3JvbGwiLCJmaXJzdFJhbmdlIiwic2Vjb25kUmFuZ2UiLCJvcGFjaXR5UmFuZ2UiLCJNb3ZlUmFuZ2UiLCJmaXJzdE9wIiwidXNlVHJhbnNmb3JtIiwiZmlyc3RNb3ZlIiwic2Vjb25kT3AiLCJzZWNvbmRNb3ZlIiwiZGlzcGxheSIsImhvbWUiLCJtYXJnaW5Ub3AiLCJvcGFjaXR5IiwidHJhbnNsYXRlWSIsIlNjcm9sbEluZGljYXRvciIsIndpZHRoIiwic2V0V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwic2Nyb2xsWVByb2dyZXNzIiwiU2Nyb2xsUmFuZ2UiLCJXaWR0aFJhbmdlIiwiU2Nyb2xsV2lkdGgiLCJMYXlvdXQiLCJ0aXRsZSIsInByb2plY3QiLCJjaGlsZHJlbjIiLCJjaGlsZHJlbiIsImFib3V0IiwiQm9keUNvbnRhaW5lciIsIkNvbnRlbnRDb250YWluZXIiLCJtYXhXaWR0aCIsIlRpbWVSYW5nZSIsImg2IiwiZm9udFdlaWdodHMiLCJzZW1pYm9sZCIsImdyZXk0IiwiQ29tcGFueVRpdGxlIiwiaDIiLCJDb21wYW55RGVzYyIsImg0IiwicmVndWxhciIsImxpZ2h0Z3JleTEiLCJMYXlvdXRHcmlkIiwiVGltZVNlY3Rpb24iLCJTY3JvbGxEaXYiLCJ0ZXh0TGluayIsImZvbnRXZWlnaHQiLCJtZWRpdW0iLCJTaWRlYmFyIiwiRGl2aWRlciIsIlNpZGViYXIyIiwiVG9wU2VjdGlvbiIsInRpdGxlMiIsInRpdGxlMyIsInN1YnRpdGxlIiwiVG9wQ29udGFpbmVyIiwiQWNjZW50VGl0bGUiLCJoMSIsIkRhcmtUaXRsZSIsIlN1YnRpdGxlIiwiV29ya1NlY3Rpb24iLCJpbWd1cmwiLCJ1cmwiLCJjdGEiLCJzdWJ0aXRsZTIiLCJpbWd1cmwyIiwidXJsMiIsImN0YTIiLCJvbmx5b25lIiwiUHJvamVjdEdyaWQiLCJQcm9qZWN0Q2FyZCIsIlByb2plY3REZXNjIiwiUHJvamVjdEltZyIsImltZyIsIlByb2plY3RUaXRsZSIsImgzIiwiUHJvamVjdENUQSIsImg1IiwiV29ya1NlY3Rpb24yIiwic2VldmlkZW8iLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwicmVmcyIsInZpZGVvIiwicGxheSIsInZvbHVtZSIsInNldFN0YXRlIiwicGF1c2UiLCJjdXJyZW50VGltZSIsInN0YXRlIiwiaGlkZVZpZGVvIiwic2hvd1ZpZGVvIiwiUHJvamVjdENhcmQyIiwiUHJvamVjdENUQTIiLCJWaWRlb0NvbnRhaW5lciIsIlZpZGVvTW9kYWwiLCJDbG9zZUNvbnRhaW5lciIsIkNsb3NlSWNvbiIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsIl9yZWFjdCIsIl91cmwiLCJfdXRpbHMiLCJfcm91dGVyIiwiX3JvdXRlcjIiLCJpc0xvY2FsIiwiaHJlZiIsInBhcnNlIiwib3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJob3N0IiwicHJvdG9jb2wiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdEZ1bmMiLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJhcyIsInJlc3VsdCIsImZvcm1hdFVybCIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwib2JzZXJ2ZXIiLCJsaXN0ZW5lcnMiLCJNYXAiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInByZWZldGNoZWQiLCJnZXRPYnNlcnZlciIsInVuZGVmaW5lZCIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJoYXMiLCJ0YXJnZXQiLCJjYiIsImdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkZWxldGUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZWwiLCJvYnNlcnZlIiwic2V0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiTGluayIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicCIsImNsZWFuVXBMaXN0ZW5lcnMiLCJmb3JtYXRVcmxzIiwiYXNIcmVmIiwiYWRkQmFzZVBhdGgiLCJsaW5rQ2xpY2tlZCIsImUiLCJub2RlTmFtZSIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxvY2F0aW9uIiwicmVzb2x2ZSIsInByZXZlbnREZWZhdWx0Iiwic2Nyb2xsIiwiaW5kZXhPZiIsInJlcGxhY2UiLCJzaGFsbG93IiwidGhlbiIsInN1Y2Nlc3MiLCJzY3JvbGxUbyIsImZvY3VzIiwicHJlZmV0Y2giLCJ3YXJuIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInBhcnNlZEhyZWYiLCJwYXJzZWRBcyIsInJlc29sdmVkSHJlZiIsImhhbmRsZVJlZiIsInJlZiIsInRhZ05hbWUiLCJpc1ByZWZldGNoZWQiLCJqb2luIiwib3B0aW9ucyIsInBhdGhzIiwiY2F0Y2giLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjdXJyZW50Iiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsInBhc3NIcmVmIiwidHlwZSIsInByb2Nlc3MiLCJjbG9uZUVsZW1lbnQiLCJleGVjT25jZSIsIlByb3BUeXBlcyIsImV4YWN0IiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImJvb2wiLCJlbGVtZW50IiwicHJvcE5hbWUiLCJ2YWx1ZSIsIl9kZWZhdWx0IiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiY3JlYXRlUm91dGVyIiwid2l0aFJvdXRlciIsIlJvdXRlciIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJhcmd1bWVudHMiLCJldmVudCIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIkVycm9yIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJfbGVuIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsIm1pdHQiLCJhbGwiLCJjcmVhdGUiLCJoYW5kbGVyIiwicHVzaCIsIm9mZiIsInNwbGljZSIsImVtaXQiLCJldnRzIiwic2xpY2UiLCJtYXAiLCJfX2ltcG9ydERlZmF1bHQiLCJtb2QiLCJ1cmxfMSIsIm1pdHRfMSIsInV0aWxzXzEiLCJpc19keW5hbWljXzEiLCJyb3V0ZV9tYXRjaGVyXzEiLCJyb3V0ZV9yZWdleF8xIiwiYmFzZVBhdGgiLCJwYXRoIiwiZGVsQmFzZVBhdGgiLCJzdWJzdHIiLCJ0b1JvdXRlIiwicHJlcGFyZVJvdXRlIiwiZmV0Y2hOZXh0RGF0YSIsInF1ZXJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJhdHRlbXB0cyIsImdldFJlc3BvbnNlIiwiZmV0Y2giLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImNyZWRlbnRpYWxzIiwicmVzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsImNvZGUiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJzZGMiLCJvblBvcFN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJpc1NzciIsImFzUGF0aCIsIl9icHMiLCJfZ2V0U3RhdGljRGF0YSIsIlByb21pc2UiLCJfZ2V0U2VydmVyRGF0YSIsInJvdXRlIiwiY29tcG9uZW50cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiaXNEeW5hbWljUm91dGUiLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJfcmV3cml0ZVVybEZvck5leHRFeHBvcnQiLCJ1cGRhdGUiLCJuZXdEYXRhIiwibm90aWZ5IiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJjaGFuZ2UiLCJtZXRob2QiLCJfYXMiLCJyZWplY3QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwidXJsSXNOZXciLCJhc1BhdGhuYW1lIiwicm91dGVSZWdleCIsImdldFJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwiZ2V0Um91dGVNYXRjaGVyIiwibWlzc2luZ1BhcmFtcyIsImtleXMiLCJncm91cHMiLCJmaWx0ZXIiLCJwYXJhbSIsImdldFJvdXRlSW5mbyIsInJvdXRlSW5mbyIsImNhbmNlbGxlZCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwibG9hZEVycm9yRmFpbCIsImZldGNoQ29tcG9uZW50IiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsIl9nZXREYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic3BsaXQiLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJURVNUX1JPVVRFIiwidGVzdCIsInJlIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIl8iLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwicmVwZWF0IiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJub3JtYWxpemVkUm91dGUiLCJlc2NhcGVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiJDEiLCJpc0NhdGNoQWxsIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwidXNlZCIsImhvc3RuYW1lIiwicG9ydCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9hIiwicHJvdG90eXBlIiwicGFnZVByb3BzIiwidXJsT2JqZWN0S2V5cyIsImZvcm1hdCIsIlNQIiwibWVhc3VyZSIsIkluZGV4UGFnZSIsIldvcmtHcmlkIiwiR2xvYmFsU3R5bGVzIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJsaWdodGdyZXkyIiwiYm9sZCIsImZvbnRTaXplcyIsImxpZ2h0Z3JleTQiLCJsaWdodGdyZXkzIiwiZ3JleTEiLCJ0ZXh0IiwiaG92ZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7QUNB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RSxHQUhDO0FBSVhvWixRQUFJLEVBQUU7QUFKSyxHQS9CRDtBQXFDWm5lLFFBQU0sRUFBRTtBQUNOcWUsY0FBVSxFQUFFLFNBRE47QUFFTkMsY0FBVSxFQUFFLFNBRk47QUFHTkosY0FBVSxFQUFFLFNBSE47QUFJTjVZLGNBQVUsRUFBRSxTQUpOO0FBS05OLFNBQUssRUFBRSxTQUxEO0FBTU4vRSxTQUFLLEVBQUUsU0FORDtBQU9OTSxTQUFLLEVBQUUsU0FQRDtBQVFOZ2UsU0FBSyxFQUFFLFNBUkQ7QUFTTkMsUUFBSSxFQUFFLFNBVEE7QUFVTnZjLGlCQUFhLEVBQUUsU0FWVDtBQVdOeUQsWUFBUSxFQUFFO0FBWEosR0FyQ0k7QUFrRFpsRixZQUFVLEVBQUU7QUFDVkMsV0FBTyxFQUFFLFlBREM7QUFFVmdlLFNBQUssRUFBRTtBQUZHO0FBbERBLENBQWQ7QUF3RGUzZSxvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWMvZGV2ZWxvcG1lbnQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcblxuZXhwb3J0IGNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZvb3RlckNvbnRhaW5lcj5cbiAgICAgICAgPFNvY2lhbHM+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9qb2xlbmVuZy9cIj5cbiAgICAgICAgICAgIDxTb2NpYWxJY29uXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgZGF0YS1wcmVmaXg9XCJmYWJcIlxuICAgICAgICAgICAgICBkYXRhLWljb249XCJsaW5rZWRpbi1pblwiXG4gICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0NDggNTEyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICBkPVwiTTEwMC4yOCA0NDhINy40VjE0OC45aDkyLjg4ek01My43OSAxMDguMUMyNC4wOSAxMDguMSAwIDgzLjUgMCA1My44YTUzLjc5IDUzLjc5IDAgMCAxIDEwNy41OCAwYzAgMjkuNy0yNC4xIDU0LjMtNTMuNzkgNTQuM3pNNDQ3LjkgNDQ4aC05Mi42OFYzMDIuNGMwLTM0LjctLjctNzkuMi00OC4yOS03OS4yLTQ4LjI5IDAtNTUuNjkgMzcuNy01NS42OSA3Ni43VjQ0OGgtOTIuNzhWMTQ4LjloODkuMDh2NDAuOGgxLjNjMTIuNC0yMy41IDQyLjY5LTQ4LjMgODcuODgtNDguMyA5NCAwIDExMS4yOCA2MS45IDExMS4yOCAxNDIuM1Y0NDh6XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPC9Tb2NpYWxJY29uPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2pvbGVuZW5qeS9cIj5cbiAgICAgICAgICAgIDxTb2NpYWxJY29uXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgZGF0YS1wcmVmaXg9XCJmYWJcIlxuICAgICAgICAgICAgICBkYXRhLWljb249XCJpbnN0YWdyYW1cIlxuICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgZD1cIk0yMjQuMSAxNDFjLTYzLjYgMC0xMTQuOSA1MS4zLTExNC45IDExNC45czUxLjMgMTE0LjkgMTE0LjkgMTE0LjlTMzM5IDMxOS41IDMzOSAyNTUuOSAyODcuNyAxNDEgMjI0LjEgMTQxem0wIDE4OS42Yy00MS4xIDAtNzQuNy0zMy41LTc0LjctNzQuN3MzMy41LTc0LjcgNzQuNy03NC43IDc0LjcgMzMuNSA3NC43IDc0LjctMzMuNiA3NC43LTc0LjcgNzQuN3ptMTQ2LjQtMTk0LjNjMCAxNC45LTEyIDI2LjgtMjYuOCAyNi44LTE0LjkgMC0yNi44LTEyLTI2LjgtMjYuOHMxMi0yNi44IDI2LjgtMjYuOCAyNi44IDEyIDI2LjggMjYuOHptNzYuMSAyNy4yYy0xLjctMzUuOS05LjktNjcuNy0zNi4yLTkzLjktMjYuMi0yNi4yLTU4LTM0LjQtOTMuOS0zNi4yLTM3LTIuMS0xNDcuOS0yLjEtMTg0LjkgMC0zNS44IDEuNy02Ny42IDkuOS05My45IDM2LjFzLTM0LjQgNTgtMzYuMiA5My45Yy0yLjEgMzctMi4xIDE0Ny45IDAgMTg0LjkgMS43IDM1LjkgOS45IDY3LjcgMzYuMiA5My45czU4IDM0LjQgOTMuOSAzNi4yYzM3IDIuMSAxNDcuOSAyLjEgMTg0LjkgMCAzNS45LTEuNyA2Ny43LTkuOSA5My45LTM2LjIgMjYuMi0yNi4yIDM0LjQtNTggMzYuMi05My45IDIuMS0zNyAyLjEtMTQ3LjggMC0xODQuOHpNMzk4LjggMzg4Yy03LjggMTkuNi0yMi45IDM0LjctNDIuNiA0Mi42LTI5LjUgMTEuNy05OS41IDktMTMyLjEgOXMtMTAyLjcgMi42LTEzMi4xLTljLTE5LjYtNy44LTM0LjctMjIuOS00Mi42LTQyLjYtMTEuNy0yOS41LTktOTkuNS05LTEzMi4xcy0yLjYtMTAyLjcgOS0xMzIuMWM3LjgtMTkuNiAyMi45LTM0LjcgNDIuNi00Mi42IDI5LjUtMTEuNyA5OS41LTkgMTMyLjEtOXMxMDIuNy0yLjYgMTMyLjEgOWMxOS42IDcuOCAzNC43IDIyLjkgNDIuNiA0Mi42IDExLjcgMjkuNSA5IDk5LjUgOSAxMzIuMXMyLjcgMTAyLjctOSAxMzIuMXpcIlxuICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPC9Tb2NpYWxJY29uPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8U29jaWFsSWNvblxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgIGRhdGEtcHJlZml4PVwiZmFzXCJcbiAgICAgICAgICAgICAgZGF0YS1pY29uPVwiZW52ZWxvcGVcIlxuICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgZD1cIk01MDIuMyAxOTAuOGMzLjktMy4xIDkuNy0uMiA5LjcgNC43VjQwMGMwIDI2LjUtMjEuNSA0OC00OCA0OEg0OGMtMjYuNSAwLTQ4LTIxLjUtNDgtNDhWMTk1LjZjMC01IDUuNy03LjggOS43LTQuNyAyMi40IDE3LjQgNTIuMSAzOS41IDE1NC4xIDExMy42IDIxLjEgMTUuNCA1Ni43IDQ3LjggOTIuMiA0Ny42IDM1LjcuMyA3Mi0zMi44IDkyLjMtNDcuNiAxMDItNzQuMSAxMzEuNi05Ni4zIDE1NC0xMTMuN3pNMjU2IDMyMGMyMy4yLjQgNTYuNi0yOS4yIDczLjQtNDEuNCAxMzIuNy05Ni4zIDE0Mi44LTEwNC43IDE3My40LTEyOC43IDUuOC00LjUgOS4yLTExLjUgOS4yLTE4Ljl2LTE5YzAtMjYuNS0yMS41LTQ4LTQ4LTQ4SDQ4QzIxLjUgNjQgMCA4NS41IDAgMTEydjE5YzAgNy40IDMuNCAxNC4zIDkuMiAxOC45IDMwLjYgMjMuOSA0MC43IDMyLjQgMTczLjQgMTI4LjcgMTYuOCAxMi4yIDUwLjIgNDEuOCA3My40IDQxLjR6XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPC9Tb2NpYWxJY29uPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9Tb2NpYWxzPlxuXG4gICAgICAgIDxzcGFuPkRlc2lnbmVkICYgYnVpbHQgd2l0aCDimaE8L3NwYW4+XG4gICAgICA8L0Zvb3RlckNvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IEZvb3RlckNvbnRhaW5lciA9IHN0eWxlZC5mb290ZXJgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogMTA0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAke3RoZW1lLnNwYWNlWzldfSA4cHggMTUwcHggMDtcbiAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmdyZXkzfTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFswXX0pIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMV19KSB7XG4gICAgcGFkZGluZzogMTAycHggOHB4IDEwMnB4IDA7XG4gIH1cbmA7XG5cbmNvbnN0IFNvY2lhbHMgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgU29jaWFsSWNvbiA9IHN0eWxlZC5zdmdgXG4gIGhlaWdodDogMjBweDtcbiAgcGFkZGluZzogMCAxNnB4IDAgOHB4O1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZ3JleTJ9O1xuICB0cmFuc2l0aW9uOiAke3RoZW1lLmFuaW1hdGlvbnMuZGVmYXVsdH07XG4gIDpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMV19KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCBMb3R0aWUgZnJvbSBcInJlYWN0LWxvdHRpZVwiO1xuaW1wb3J0IGFuaW1hdGlvbkRhdGEgZnJvbSBcIi4uL3B1YmxpYy9kYXRhLmpzb25cIjtcblxuZXhwb3J0IGNsYXNzIEZvb3RlcjIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICBsb29wOiBmYWxzZSxcbiAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgYW5pbWF0aW9uRGF0YTogYW5pbWF0aW9uRGF0YSxcbiAgICAgIHJlbmRlcmVyU2V0dGluZ3M6IHtcbiAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbzogXCJ4TWlkWU1pZCBzbGljZVwiLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Rm9vdGVyQ29udGFpbmVyPlxuICAgICAgICAgIDxMb3R0aWVcbiAgICAgICAgICAgIG9wdGlvbnM9e2RlZmF1bHRPcHRpb25zfVxuICAgICAgICAgICAgaGVpZ2h0PXszODB9XG4gICAgICAgICAgICB3aWR0aD17MjQwMH1cbiAgICAgICAgICAgIHJlc2l6ZU1vZGU9XCJjb3ZlclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb290ZXJDb250YWluZXI+XG4gICAgICAgIDxUZXh0Q29udGFpbmVyPlxuICAgICAgICAgIDxTb2NpYWxzPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9qb2xlbmVuZy9cIj5cbiAgICAgICAgICAgICAgPFNvY2lhbEljb25cbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICBkYXRhLXByZWZpeD1cImZhYlwiXG4gICAgICAgICAgICAgICAgZGF0YS1pY29uPVwibGlua2VkaW4taW5cIlxuICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICBkPVwiTTEwMC4yOCA0NDhINy40VjE0OC45aDkyLjg4ek01My43OSAxMDguMUMyNC4wOSAxMDguMSAwIDgzLjUgMCA1My44YTUzLjc5IDUzLjc5IDAgMCAxIDEwNy41OCAwYzAgMjkuNy0yNC4xIDU0LjMtNTMuNzkgNTQuM3pNNDQ3LjkgNDQ4aC05Mi42OFYzMDIuNGMwLTM0LjctLjctNzkuMi00OC4yOS03OS4yLTQ4LjI5IDAtNTUuNjkgMzcuNy01NS42OSA3Ni43VjQ0OGgtOTIuNzhWMTQ4LjloODkuMDh2NDAuOGgxLjNjMTIuNC0yMy41IDQyLjY5LTQ4LjMgODcuODgtNDguMyA5NCAwIDExMS4yOCA2MS45IDExMS4yOCAxNDIuM1Y0NDh6XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9Tb2NpYWxJY29uPlxuICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9qb2xlbmVuankvXCI+XG4gICAgICAgICAgICAgIDxTb2NpYWxJY29uXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgZGF0YS1wcmVmaXg9XCJmYWJcIlxuICAgICAgICAgICAgICAgIGRhdGEtaWNvbj1cImluc3RhZ3JhbVwiXG4gICAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0NDggNTEyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMjI0LjEgMTQxYy02My42IDAtMTE0LjkgNTEuMy0xMTQuOSAxMTQuOXM1MS4zIDExNC45IDExNC45IDExNC45UzMzOSAzMTkuNSAzMzkgMjU1LjkgMjg3LjcgMTQxIDIyNC4xIDE0MXptMCAxODkuNmMtNDEuMSAwLTc0LjctMzMuNS03NC43LTc0LjdzMzMuNS03NC43IDc0LjctNzQuNyA3NC43IDMzLjUgNzQuNyA3NC43LTMzLjYgNzQuNy03NC43IDc0Ljd6bTE0Ni40LTE5NC4zYzAgMTQuOS0xMiAyNi44LTI2LjggMjYuOC0xNC45IDAtMjYuOC0xMi0yNi44LTI2LjhzMTItMjYuOCAyNi44LTI2LjggMjYuOCAxMiAyNi44IDI2Ljh6bTc2LjEgMjcuMmMtMS43LTM1LjktOS45LTY3LjctMzYuMi05My45LTI2LjItMjYuMi01OC0zNC40LTkzLjktMzYuMi0zNy0yLjEtMTQ3LjktMi4xLTE4NC45IDAtMzUuOCAxLjctNjcuNiA5LjktOTMuOSAzNi4xcy0zNC40IDU4LTM2LjIgOTMuOWMtMi4xIDM3LTIuMSAxNDcuOSAwIDE4NC45IDEuNyAzNS45IDkuOSA2Ny43IDM2LjIgOTMuOXM1OCAzNC40IDkzLjkgMzYuMmMzNyAyLjEgMTQ3LjkgMi4xIDE4NC45IDAgMzUuOS0xLjcgNjcuNy05LjkgOTMuOS0zNi4yIDI2LjItMjYuMiAzNC40LTU4IDM2LjItOTMuOSAyLjEtMzcgMi4xLTE0Ny44IDAtMTg0Ljh6TTM5OC44IDM4OGMtNy44IDE5LjYtMjIuOSAzNC43LTQyLjYgNDIuNi0yOS41IDExLjctOTkuNSA5LTEzMi4xIDlzLTEwMi43IDIuNi0xMzIuMS05Yy0xOS42LTcuOC0zNC43LTIyLjktNDIuNi00Mi42LTExLjctMjkuNS05LTk5LjUtOS0xMzIuMXMtMi42LTEwMi43IDktMTMyLjFjNy44LTE5LjYgMjIuOS0zNC43IDQyLjYtNDIuNiAyOS41LTExLjcgOTkuNS05IDEzMi4xLTlzMTAyLjctMi42IDEzMi4xIDljMTkuNiA3LjggMzQuNyAyMi45IDQyLjYgNDIuNiAxMS43IDI5LjUgOSA5OS41IDkgMTMyLjFzMi43IDEwMi43LTkgMTMyLjF6XCJcbiAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICA8L1NvY2lhbEljb24+XG4gICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxTb2NpYWxJY29uXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgZGF0YS1wcmVmaXg9XCJmYXNcIlxuICAgICAgICAgICAgICAgIGRhdGEtaWNvbj1cImVudmVsb3BlXCJcbiAgICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgZD1cIk01MDIuMyAxOTAuOGMzLjktMy4xIDkuNy0uMiA5LjcgNC43VjQwMGMwIDI2LjUtMjEuNSA0OC00OCA0OEg0OGMtMjYuNSAwLTQ4LTIxLjUtNDgtNDhWMTk1LjZjMC01IDUuNy03LjggOS43LTQuNyAyMi40IDE3LjQgNTIuMSAzOS41IDE1NC4xIDExMy42IDIxLjEgMTUuNCA1Ni43IDQ3LjggOTIuMiA0Ny42IDM1LjcuMyA3Mi0zMi44IDkyLjMtNDcuNiAxMDItNzQuMSAxMzEuNi05Ni4zIDE1NC0xMTMuN3pNMjU2IDMyMGMyMy4yLjQgNTYuNi0yOS4yIDczLjQtNDEuNCAxMzIuNy05Ni4zIDE0Mi44LTEwNC43IDE3My40LTEyOC43IDUuOC00LjUgOS4yLTExLjUgOS4yLTE4Ljl2LTE5YzAtMjYuNS0yMS41LTQ4LTQ4LTQ4SDQ4QzIxLjUgNjQgMCA4NS41IDAgMTEydjE5YzAgNy40IDMuNCAxNC4zIDkuMiAxOC45IDMwLjYgMjMuOSA0MC43IDMyLjQgMTczLjQgMTI4LjcgMTYuOCAxMi4yIDUwLjIgNDEuOCA3My40IDQxLjR6XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9Tb2NpYWxJY29uPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvU29jaWFscz5cblxuICAgICAgICAgIDxzcGFuPkRlc2lnbmVkICYgYnVpbHQgd2l0aCDimaE8L3NwYW4+XG4gICAgICAgIDwvVGV4dENvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgRm9vdGVyQ29udGFpbmVyID0gc3R5bGVkLmZvb3RlcmBcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA4MHB4O1xuYDtcblxuY29uc3QgVGV4dENvbnRhaW5lciA9IHN0eWxlZC5mb290ZXJgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IC04MHB4O1xuICBwYWRkaW5nOiAwcHggOHB4IDE1MHB4IDhweDtcbiAgbWF4LXdpZHRoOiAxMDQwcHg7XG4gIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ncmV5M307XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMV19KSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tdG9wOiAtNjBweDtcbiAgICBwYWRkaW5nOiAwcHggOHB4IDgwcHggOHB4O1xuICB9XG5gO1xuXG5jb25zdCBTb2NpYWxzID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IFNvY2lhbEljb24gPSBzdHlsZWQuc3ZnYFxuICBoZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDAgMTZweCAwIDhweDtcbiAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmdyZXkyfTtcbiAgdHJhbnNpdGlvbjogJHt0aGVtZS5hbmltYXRpb25zLmRlZmF1bHR9O1xuICA6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzFdfSkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjI7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGdhcD86IG51bWJlcjtcbiAgY29sdW1ucz86IHN0cmluZztcbiAgW3Byb3BOYW1lOiBzdHJpbmddOiB7fTtcbn1cblxuZnVuY3Rpb24gcHgobnVtYmVyKSB7XG4gIHJldHVybiBgJHtudW1iZXJ9cHhgO1xufVxuXG5jb25zdCBHcmlkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGdhcDogJHsocHJvcHMpID0+IHB4KHByb3BzLmdhcCl9O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICR7KHByb3BzKSA9PiBwcm9wcy5jb2x1bW5zfTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyaWQocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgZ2FwID0gMCwgY29sdW1ucyA9IFwiMWZyXCIgfSA9IHByb3BzO1xuICByZXR1cm4gPEdyaWRDb250YWluZXIgZ2FwPXtnYXB9IGNvbHVtbnM9e2NvbHVtbnN9IHsuLi5wcm9wc30gLz47XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzaG93SW5mbz86IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIExpbmtzKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgcmV0dXJuIChcbiAgICA8TmF2PlxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgY29sb3I6IHJvdXRlci5wYXRobmFtZSA9PSBcIi9cIiA/IFwid2hpdGVcIiA6IHRoZW1lLmNvbG9ycy5ncmV5MyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgSG9tZVxuICAgICAgICA8L05hdkxpbms+XG4gICAgICA8L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiL3BsYXlncm91bmRcIj5cbiAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9wbGF5Z3JvdW5kXCIgPyBcIndoaXRlXCIgOiB0aGVtZS5jb2xvcnMuZ3JleTMsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFBsYXlncm91bmRcbiAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICA8TmF2TGlua1xuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBjb2xvcjogcm91dGVyLnBhdGhuYW1lID09IFwiL2Fib3V0XCIgPyBcIndoaXRlXCIgOiB0aGVtZS5jb2xvcnMuZ3JleTMsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEFib3V0XG4gICAgICAgIDwvTmF2TGluaz5cbiAgICAgIDwvTGluaz5cbiAgICA8L05hdj5cbiAgKTtcbn1cblxuZXhwb3J0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTaWRlYmFyQ29udGFpbmVyXG4gICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogdGhpcy5wcm9wcy5zaG93SW5mbyA/IDU1IDogLTgyIH19XG4gICAgICA+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPExvZ28+XG4gICAgICAgICAgICA8TmFtZSB2aWV3Qm94PVwiMCAwIDMzMyAxNjFcIj5cbiAgICAgICAgICAgICAgPGdcbiAgICAgICAgICAgICAgICBpZD1cIlBhZ2UtMVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPXt0aGVtZS5jb2xvcnMudGV4dFNlY29uZGFyeX1cbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGdcbiAgICAgICAgICAgICAgICAgIGlkPVwiQXNzZXQtM1wiXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMy4wMDAwMDAsIDQuMDAwMDAwKVwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjZcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMjQuMjEsNjIuNTcgTDg4LjIxLDM0LjU3IEM4OC4yMSwzNC41NyA0My4wMiwxNjUuMzIgMi4yMSwxNTIuNTcgQy0xMy43OSwxNDcuNTcgODcuNTksNzYuNTcgOTUuMjEsNzYuNTcgQzExMC4yMSw3Ni41NyAxMDAuMzksMTE5LjgyIDgyLjIxLDEwOC41NyBDNjEuMjEsOTUuNTcgMTQ0LjIxLDIxLjU3IDE0Ni4yMSwyLjU3IEMxNDguMjEsLTE2LjQzIDEwNC4yMSwxMDEuNTcgMTE5LjIxLDExMS41NyBDMTM0LjIxLDEyMS41NyAxNzAuMjEsNTYuNTcgMTYzLjIxLDU0LjU3IEMxNTYuMjEsNTIuNTcgMTMxLjIxLDk0LjU3IDE0NC4yMSwxMDYuNTcgQzE1Ny4yMSwxMTguNTcgMTc0LjIxLDY1LjU3IDE3NC4yMSw2NS41NyBMMTY1LjIxLDEwMy41NyBDMTY1LjIxLDEwMy41NyAxODguMjEsNTkuNTcgMTkyLjIxLDk1LjU3IEMxOTYuMjEsMTMxLjU3IDIyMC4yMSw2Ny41NyAyMTUuMjEsNTguNTcgQzIxMC4yMSw0OS41NyAxOTQuMjEsMTAwLjU3IDIxMS4yMSwxMDEuNTcgQzIyOC4yMSwxMDIuNTcgMjQ4LjIxLDg1LjU3IDI2MS4yMSw4NS41NyBDMjc0LjIxLDg1LjU3IDI4MS4yMSw4OS41NyAyODguMjEsODkuNTcgQzI5NS4yMSw4OS41NyAzMDcuMjEsODUuNTcgMzA3LjIxLDg1LjU3XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJQYXRoXCJcbiAgICAgICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICAgICAgICA8bGluZVxuICAgICAgICAgICAgICAgICAgICB4MT1cIjMyNi4zMVwiXG4gICAgICAgICAgICAgICAgICAgIHkxPVwiNzguMDFcIlxuICAgICAgICAgICAgICAgICAgICB4Mj1cIjMyNi4yMVwiXG4gICAgICAgICAgICAgICAgICAgIHkyPVwiNzcuNTdcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cIlBhdGhcIlxuICAgICAgICAgICAgICAgICAgPjwvbGluZT5cbiAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvTmFtZT5cbiAgICAgICAgICA8L0xvZ28+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L1NpZGViYXJDb250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBTaWRlYmFyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBoc2woMjQwLCA2MCUsIDUlKTtcbiAgei1pbmRleDogMTAwMDtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsxXX0pIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbM119KSB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICB9XG5gO1xuXG5jb25zdCBMb2dvID0gc3R5bGVkLmFgXG4gIHBhZGRpbmc6IDAgOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFszXX0pIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuXG5jb25zdCBOYW1lID0gc3R5bGVkLnN2Z2BcbiAgd2lkdGg6IDcwcHg7XG5gO1xuXG5jb25zdCBOYXYgPSBzdHlsZWQobW90aW9uLmRpdilgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuY29uc3QgTmF2TGluayA9IHN0eWxlZChtb3Rpb24uYSlgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTJweCAxMnB4O1xuICB0cmFuc2l0aW9uOiAke3RoZW1lLmFuaW1hdGlvbnMuZGVmYXVsdH07XG4gIDpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL3NpZGViYXJcIjtcbmltcG9ydCBTaWRlYmFyMiBmcm9tIFwiLi9zaWRlYmFyMlwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgRm9vdGVyMiBmcm9tIFwiLi9mb290ZXIyXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiLi4vY29tcG9uZW50cy9ncmlkXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IEdsb2JhbFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2dsb2JhbHN0eWxlc1wiO1xuaW1wb3J0IHsgbW90aW9uLCB1c2VWaWV3cG9ydFNjcm9sbCwgdXNlVHJhbnNmb3JtIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIGNoaWxkcmVuMj86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgaG9tZT86IGJvb2xlYW47XG4gIGFib3V0PzogYm9vbGVhbjtcbiAgcHJvamVjdD86IGJvb2xlYW47XG59XG5cbmNvbnN0IFNob3dJbmZvID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgc2Nyb2xsWSB9ID0gdXNlVmlld3BvcnRTY3JvbGwoKTtcbiAgY29uc3QgZmlyc3RSYW5nZSA9IFswLCAzNDAsIDQzMCwgNTIwXTtcbiAgY29uc3Qgc2Vjb25kUmFuZ2UgPSBbMCwgODQwLCA5MzAsIDEwMjBdO1xuICBjb25zdCBvcGFjaXR5UmFuZ2UgPSBbMSwgMSwgMC4zLCAwXTtcbiAgY29uc3QgTW92ZVJhbmdlID0gWzAsIDAsIC01MCwgLTEwMF07XG4gIGNvbnN0IGZpcnN0T3AgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWSwgZmlyc3RSYW5nZSwgb3BhY2l0eVJhbmdlKTtcbiAgY29uc3QgZmlyc3RNb3ZlID0gdXNlVHJhbnNmb3JtKHNjcm9sbFksIGZpcnN0UmFuZ2UsIE1vdmVSYW5nZSk7XG4gIGNvbnN0IHNlY29uZE9wID0gdXNlVHJhbnNmb3JtKHNjcm9sbFksIHNlY29uZFJhbmdlLCBvcGFjaXR5UmFuZ2UpO1xuICBjb25zdCBzZWNvbmRNb3ZlID0gdXNlVHJhbnNmb3JtKHNjcm9sbFksIHNlY29uZFJhbmdlLCBNb3ZlUmFuZ2UpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBwcm9wcy5ob21lID8gXCJjb250ZW50c1wiIDogXCJub25lXCIgfX0+XG4gICAgICA8VGltZVNlY3Rpb24gc3R5bGU9e3sgbWFyZ2luVG9wOiAxODIgfX0+XG4gICAgICAgIDxtb3Rpb24uZGl2IHN0eWxlPXt7IG9wYWNpdHk6IGZpcnN0T3AsIHRyYW5zbGF0ZVk6IGZpcnN0TW92ZSB9fT5cbiAgICAgICAgICA8VGltZVJhbmdlPjIwMTkgLSBQcmVzZW50PC9UaW1lUmFuZ2U+XG4gICAgICAgICAgPENvbXBhbnlUaXRsZT5HcmFiPC9Db21wYW55VGl0bGU+XG4gICAgICAgICAgPENvbXBhbnlEZXNjPkRlbGl2ZXJ5IHNvbHV0aW9uczwvQ29tcGFueURlc2M+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDwvVGltZVNlY3Rpb24+XG4gICAgICA8VGltZVNlY3Rpb24gc3R5bGU9e3sgbWFyZ2luVG9wOiAzOTQgfX0+XG4gICAgICAgIDxtb3Rpb24uZGl2IHN0eWxlPXt7IG9wYWNpdHk6IHNlY29uZE9wLCB0cmFuc2xhdGVZOiBzZWNvbmRNb3ZlIH19PlxuICAgICAgICAgIDxUaW1lUmFuZ2U+MjAxNyAtIDIwMTk8L1RpbWVSYW5nZT5cbiAgICAgICAgICA8Q29tcGFueVRpdGxlPkdvdnRlY2g8L0NvbXBhbnlUaXRsZT5cbiAgICAgICAgICA8Q29tcGFueURlc2M+R292ZXJubWVudCBzZXJ2aWNlczwvQ29tcGFueURlc2M+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDwvVGltZVNlY3Rpb24+XG4gICAgICA8VGltZVNlY3Rpb24gc3R5bGU9e3sgbWFyZ2luVG9wOiAzOTQgfX0+XG4gICAgICAgIDxUaW1lUmFuZ2U+MjAxMiAtIDIwMTY8L1RpbWVSYW5nZT5cbiAgICAgICAgPENvbXBhbnlUaXRsZT5QYXN0IFByb2plY3RzPC9Db21wYW55VGl0bGU+XG4gICAgICAgIDxDb21wYW55RGVzYz5JbmR1c3RyaWFsIGRlc2lnbjwvQ29tcGFueURlc2M+XG4gICAgICA8L1RpbWVTZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgU2Nyb2xsSW5kaWNhdG9yID0gKCkgPT4ge1xuICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFdpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgfSk7XG4gIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VWaWV3cG9ydFNjcm9sbCgpO1xuICBjb25zdCBTY3JvbGxSYW5nZSA9IFswLCAxXTtcbiAgY29uc3QgV2lkdGhSYW5nZSA9IFswLCB3aWR0aF07XG4gIGNvbnN0IFNjcm9sbFdpZHRoID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgU2Nyb2xsUmFuZ2UsIFdpZHRoUmFuZ2UpO1xuXG4gIHJldHVybiAoXG4gICAgPFNjcm9sbERpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6IFNjcm9sbFdpZHRoLFxuICAgICAgfX1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxHbG9iYWxTdHlsZXMgLz5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPnt0aGlzLnByb3BzLnRpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIHt0aGlzLnByb3BzLnByb2plY3QgPyA8U2Nyb2xsSW5kaWNhdG9yIC8+IDogXCJcIn1cbiAgICAgICAgPEJvZHlDb250YWluZXI+XG4gICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgIDxMYXlvdXRHcmlkIGdhcD17MH0gY29sdW1ucz17XCIxZnIgM2ZyXCJ9PlxuICAgICAgICAgICAge3RoaXMucHJvcHMucHJvamVjdCA/IChcbiAgICAgICAgICAgICAgPFNpZGViYXIyIHNob3dJbmZvPXt0aGlzLnByb3BzLmhvbWV9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVuMigpfVxuICAgICAgICAgICAgICA8L1NpZGViYXIyPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8U2lkZWJhciBzaG93SW5mbz17dGhpcy5wcm9wcy5ob21lfSAvPlxuICAgICAgICAgICAgICAgIDxTaG93SW5mbyBob21lPXt0aGlzLnByb3BzLmhvbWV9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb250ZW50Q29udGFpbmVyPnt0aGlzLnByb3BzLmNoaWxkcmVufTwvQ29udGVudENvbnRhaW5lcj5cbiAgICAgICAgICA8L0xheW91dEdyaWQ+XG4gICAgICAgIDwvQm9keUNvbnRhaW5lcj5cbiAgICAgICAge3RoaXMucHJvcHMuYWJvdXQgPyA8Rm9vdGVyMiAvPiA6IDxGb290ZXIgLz59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IEJvZHlDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXgtd2lkdGg6IDEwNDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFswXX0pIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG5gO1xuXG5jb25zdCBDb250ZW50Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWF4LXdpZHRoOiAke3RoZW1lLm1heFdpZHRofTtcbiAgcGFkZGluZzogMCA4cHg7XG4gIG1pbi13aWR0aDogMDtcbmA7XG5cbmNvbnN0IFRpbWVSYW5nZSA9IHN0eWxlZC5oNmBcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWUuZm9udFdlaWdodHMuc2VtaWJvbGR9O1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZ3JleTR9O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuYDtcblxuY29uc3QgQ29tcGFueVRpdGxlID0gc3R5bGVkLmgyYFxuICBtYXJnaW4tdG9wOiAxMnB4O1xuYDtcblxuY29uc3QgQ29tcGFueURlc2MgPSBzdHlsZWQuaDRgXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lLmZvbnRXZWlnaHRzLnJlZ3VsYXJ9O1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcnMubGlnaHRncmV5MX07XG4gIG1hcmdpbi10b3A6IDRweDtcbmA7XG5cbmNvbnN0IExheW91dEdyaWQgPSBzdHlsZWQoR3JpZClgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMV19KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbmA7XG5cbmNvbnN0IFRpbWVTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiA0ODBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsxXX0pIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbmA7XG5cbmNvbnN0IFNjcm9sbERpdiA9IHN0eWxlZChtb3Rpb24uZGl2KWBcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgaGVpZ2h0OiAzcHg7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMubGlnaHRncmV5MX07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzaG93SW5mbz86IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIExpbmtzKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgcmV0dXJuIChcbiAgICA8TmF2PlxuICAgICAgPExpbmsgaHJlZj1cIi9cIiBzaGFsbG93PXt0cnVlfT5cbiAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgY29sb3I6IHJvdXRlci5wYXRobmFtZSA9PSBcIi9cIiA/IHRoZW1lLmNvbG9ycy50ZXh0TGluayA6IFwid2hpdGVcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6XG4gICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9cIlxuICAgICAgICAgICAgICAgID8gdGhlbWUuZm9udFdlaWdodHMubWVkaXVtXG4gICAgICAgICAgICAgICAgOiB0aGVtZS5mb250V2VpZ2h0cy5yZWd1bGFyLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBIb21lXG4gICAgICAgIDwvTmF2TGluaz5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvcGxheWdyb3VuZFwiIHNoYWxsb3c9e3RydWV9PlxuICAgICAgICA8TmF2TGlua1xuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL3BsYXlncm91bmRcIlxuICAgICAgICAgICAgICAgID8gdGhlbWUuY29sb3JzLnRleHRMaW5rXG4gICAgICAgICAgICAgICAgOiBcIndoaXRlXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OlxuICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvcGxheWdyb3VuZFwiXG4gICAgICAgICAgICAgICAgPyB0aGVtZS5mb250V2VpZ2h0cy5tZWRpdW1cbiAgICAgICAgICAgICAgICA6IHRoZW1lLmZvbnRXZWlnaHRzLnJlZ3VsYXIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFBsYXlncm91bmRcbiAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICA8TmF2TGlua1xuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL2Fib3V0XCIgPyB0aGVtZS5jb2xvcnMudGV4dExpbmsgOiBcIndoaXRlXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OlxuICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvYWJvdXRcIlxuICAgICAgICAgICAgICAgID8gdGhlbWUuZm9udFdlaWdodHMubWVkaXVtXG4gICAgICAgICAgICAgICAgOiB0aGVtZS5mb250V2VpZ2h0cy5yZWd1bGFyLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBBYm91dFxuICAgICAgICA8L05hdkxpbms+XG4gICAgICA8L0xpbms+XG4gICAgPC9OYXY+XG4gICk7XG59XG5cbmV4cG9ydCBjbGFzcyBTaWRlYmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNpZGViYXJDb250YWluZXJcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiB0aGlzLnByb3BzLnNob3dJbmZvID8gMTAwIDogLTM4IH19XG4gICAgICA+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPExvZ28+XG4gICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTIwcHhcIiB2aWV3Qm94PVwiMCAwIDMzMyAxNjFcIj5cbiAgICAgICAgICAgICAgPGdcbiAgICAgICAgICAgICAgICBpZD1cIlBhZ2UtMVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPXt0aGVtZS5jb2xvcnMudGV4dFNlY29uZGFyeX1cbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGdcbiAgICAgICAgICAgICAgICAgIGlkPVwiQXNzZXQtM1wiXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMy4wMDAwMDAsIDQuMDAwMDAwKVwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjZcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMjQuMjEsNjIuNTcgTDg4LjIxLDM0LjU3IEM4OC4yMSwzNC41NyA0My4wMiwxNjUuMzIgMi4yMSwxNTIuNTcgQy0xMy43OSwxNDcuNTcgODcuNTksNzYuNTcgOTUuMjEsNzYuNTcgQzExMC4yMSw3Ni41NyAxMDAuMzksMTE5LjgyIDgyLjIxLDEwOC41NyBDNjEuMjEsOTUuNTcgMTQ0LjIxLDIxLjU3IDE0Ni4yMSwyLjU3IEMxNDguMjEsLTE2LjQzIDEwNC4yMSwxMDEuNTcgMTE5LjIxLDExMS41NyBDMTM0LjIxLDEyMS41NyAxNzAuMjEsNTYuNTcgMTYzLjIxLDU0LjU3IEMxNTYuMjEsNTIuNTcgMTMxLjIxLDk0LjU3IDE0NC4yMSwxMDYuNTcgQzE1Ny4yMSwxMTguNTcgMTc0LjIxLDY1LjU3IDE3NC4yMSw2NS41NyBMMTY1LjIxLDEwMy41NyBDMTY1LjIxLDEwMy41NyAxODguMjEsNTkuNTcgMTkyLjIxLDk1LjU3IEMxOTYuMjEsMTMxLjU3IDIyMC4yMSw2Ny41NyAyMTUuMjEsNTguNTcgQzIxMC4yMSw0OS41NyAxOTQuMjEsMTAwLjU3IDIxMS4yMSwxMDEuNTcgQzIyOC4yMSwxMDIuNTcgMjQ4LjIxLDg1LjU3IDI2MS4yMSw4NS41NyBDMjc0LjIxLDg1LjU3IDI4MS4yMSw4OS41NyAyODguMjEsODkuNTcgQzI5NS4yMSw4OS41NyAzMDcuMjEsODUuNTcgMzA3LjIxLDg1LjU3XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJQYXRoXCJcbiAgICAgICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICAgICAgICA8bGluZVxuICAgICAgICAgICAgICAgICAgICB4MT1cIjMyNi4zMVwiXG4gICAgICAgICAgICAgICAgICAgIHkxPVwiNzguMDFcIlxuICAgICAgICAgICAgICAgICAgICB4Mj1cIjMyNi4yMVwiXG4gICAgICAgICAgICAgICAgICAgIHkyPVwiNzcuNTdcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cIlBhdGhcIlxuICAgICAgICAgICAgICAgICAgPjwvbGluZT5cbiAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvTG9nbz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGlua3MgLz5cblxuICAgICAgICA8U29jaWFscz5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2pvbGVuZW5nL1wiPlxuICAgICAgICAgICAgPFNvY2lhbEljb25cbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgICAgICAgICAgICBkYXRhLXByZWZpeD1cImZhYlwiXG4gICAgICAgICAgICAgIGRhdGEtaWNvbj1cImxpbmtlZGluLWluXCJcbiAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMTAwLjI4IDQ0OEg3LjRWMTQ4LjloOTIuODh6TTUzLjc5IDEwOC4xQzI0LjA5IDEwOC4xIDAgODMuNSAwIDUzLjhhNTMuNzkgNTMuNzkgMCAwIDEgMTA3LjU4IDBjMCAyOS43LTI0LjEgNTQuMy01My43OSA1NC4zek00NDcuOSA0NDhoLTkyLjY4VjMwMi40YzAtMzQuNy0uNy03OS4yLTQ4LjI5LTc5LjItNDguMjkgMC01NS42OSAzNy43LTU1LjY5IDc2LjdWNDQ4aC05Mi43OFYxNDguOWg4OS4wOHY0MC44aDEuM2MxMi40LTIzLjUgNDIuNjktNDguMyA4Ny44OC00OC4zIDk0IDAgMTExLjI4IDYxLjkgMTExLjI4IDE0Mi4zVjQ0OHpcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8L1NvY2lhbEljb24+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vam9sZW5lbmp5L1wiPlxuICAgICAgICAgICAgPFNvY2lhbEljb25cbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgICAgICAgICAgICBkYXRhLXByZWZpeD1cImZhYlwiXG4gICAgICAgICAgICAgIGRhdGEtaWNvbj1cImluc3RhZ3JhbVwiXG4gICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0NDggNTEyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICBkPVwiTTIyNC4xIDE0MWMtNjMuNiAwLTExNC45IDUxLjMtMTE0LjkgMTE0LjlzNTEuMyAxMTQuOSAxMTQuOSAxMTQuOVMzMzkgMzE5LjUgMzM5IDI1NS45IDI4Ny43IDE0MSAyMjQuMSAxNDF6bTAgMTg5LjZjLTQxLjEgMC03NC43LTMzLjUtNzQuNy03NC43czMzLjUtNzQuNyA3NC43LTc0LjcgNzQuNyAzMy41IDc0LjcgNzQuNy0zMy42IDc0LjctNzQuNyA3NC43em0xNDYuNC0xOTQuM2MwIDE0LjktMTIgMjYuOC0yNi44IDI2LjgtMTQuOSAwLTI2LjgtMTItMjYuOC0yNi44czEyLTI2LjggMjYuOC0yNi44IDI2LjggMTIgMjYuOCAyNi44em03Ni4xIDI3LjJjLTEuNy0zNS45LTkuOS02Ny43LTM2LjItOTMuOS0yNi4yLTI2LjItNTgtMzQuNC05My45LTM2LjItMzctMi4xLTE0Ny45LTIuMS0xODQuOSAwLTM1LjggMS43LTY3LjYgOS45LTkzLjkgMzYuMXMtMzQuNCA1OC0zNi4yIDkzLjljLTIuMSAzNy0yLjEgMTQ3LjkgMCAxODQuOSAxLjcgMzUuOSA5LjkgNjcuNyAzNi4yIDkzLjlzNTggMzQuNCA5My45IDM2LjJjMzcgMi4xIDE0Ny45IDIuMSAxODQuOSAwIDM1LjktMS43IDY3LjctOS45IDkzLjktMzYuMiAyNi4yLTI2LjIgMzQuNC01OCAzNi4yLTkzLjkgMi4xLTM3IDIuMS0xNDcuOCAwLTE4NC44ek0zOTguOCAzODhjLTcuOCAxOS42LTIyLjkgMzQuNy00Mi42IDQyLjYtMjkuNSAxMS43LTk5LjUgOS0xMzIuMSA5cy0xMDIuNyAyLjYtMTMyLjEtOWMtMTkuNi03LjgtMzQuNy0yMi45LTQyLjYtNDIuNi0xMS43LTI5LjUtOS05OS41LTktMTMyLjFzLTIuNi0xMDIuNyA5LTEzMi4xYzcuOC0xOS42IDIyLjktMzQuNyA0Mi42LTQyLjYgMjkuNS0xMS43IDk5LjUtOSAxMzIuMS05czEwMi43LTIuNiAxMzIuMSA5YzE5LjYgNy44IDM0LjcgMjIuOSA0Mi42IDQyLjYgMTEuNyAyOS41IDkgOTkuNSA5IDEzMi4xczIuNyAxMDIuNy05IDEzMi4xelwiXG4gICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8L1NvY2lhbEljb24+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxTb2NpYWxJY29uXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgZGF0YS1wcmVmaXg9XCJmYXNcIlxuICAgICAgICAgICAgICBkYXRhLWljb249XCJlbnZlbG9wZVwiXG4gICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1MTIgNTEyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICBkPVwiTTUwMi4zIDE5MC44YzMuOS0zLjEgOS43LS4yIDkuNyA0LjdWNDAwYzAgMjYuNS0yMS41IDQ4LTQ4IDQ4SDQ4Yy0yNi41IDAtNDgtMjEuNS00OC00OFYxOTUuNmMwLTUgNS43LTcuOCA5LjctNC43IDIyLjQgMTcuNCA1Mi4xIDM5LjUgMTU0LjEgMTEzLjYgMjEuMSAxNS40IDU2LjcgNDcuOCA5Mi4yIDQ3LjYgMzUuNy4zIDcyLTMyLjggOTIuMy00Ny42IDEwMi03NC4xIDEzMS42LTk2LjMgMTU0LTExMy43ek0yNTYgMzIwYzIzLjIuNCA1Ni42LTI5LjIgNzMuNC00MS40IDEzMi43LTk2LjMgMTQyLjgtMTA0LjcgMTczLjQtMTI4LjcgNS44LTQuNSA5LjItMTEuNSA5LjItMTguOXYtMTljMC0yNi41LTIxLjUtNDgtNDgtNDhINDhDMjEuNSA2NCAwIDg1LjUgMCAxMTJ2MTljMCA3LjQgMy40IDE0LjMgOS4yIDE4LjkgMzAuNiAyMy45IDQwLjcgMzIuNCAxNzMuNCAxMjguNyAxNi44IDEyLjIgNTAuMiA0MS44IDczLjQgNDEuNHpcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8L1NvY2lhbEljb24+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L1NvY2lhbHM+XG5cbiAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgIDwvU2lkZWJhckNvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IFNpZGViYXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMTIwcHg7XG4gIGhlaWdodDogMzYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMV19KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgTG9nbyA9IHN0eWxlZC5hYFxuICBwYWRkaW5nOiAwIDhweDtcbmA7XG5cbmNvbnN0IE5hdiA9IHN0eWxlZChtb3Rpb24uZGl2KWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIG1hcmdpbjogMjRweCAwcHggMCAwO1xuYDtcblxuY29uc3QgTmF2TGluayA9IHN0eWxlZChtb3Rpb24uYSlgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE2MHB4O1xuICBwYWRkaW5nOiA4cHggOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcblxuICA6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMzEsIDMxLCA1NCwgMC40KTtcbiAgfVxuYDtcblxuY29uc3QgU29jaWFscyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMzJweCAwIDAgMDtcbmA7XG5cbmNvbnN0IFNvY2lhbEljb24gPSBzdHlsZWQuc3ZnYFxuICBoZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDAgMTZweCAwIDhweDtcbiAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmdyZXkyfTtcbiAgdHJhbnNpdGlvbjogJHt0aGVtZS5hbmltYXRpb25zLmRlZmF1bHR9O1xuICA6aG92ZXIge1xuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0TGlua307XG4gIH1cbmA7XG5cbmNvbnN0IERpdmlkZXIgPSBzdHlsZWQuZGl2YFxuICBtaW4taGVpZ2h0OiAzcHg7XG4gIG1hcmdpbjogMzJweCAwcHggMCA4cHg7XG4gIHdpZHRoOiAxNjBweDtcbiAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuZ3JleTJ9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5mdW5jdGlvbiBMaW5rcygpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHJldHVybiAoXG4gICAgPE5hdj5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCIgc2hhbGxvdz17dHJ1ZX0+XG4gICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGNvbG9yOiByb3V0ZXIucGF0aG5hbWUgPT0gXCIvXCIgPyB0aGVtZS5jb2xvcnMudGV4dExpbmsgOiBcIndoaXRlXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OlxuICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvXCJcbiAgICAgICAgICAgICAgICA/IHRoZW1lLmZvbnRXZWlnaHRzLm1lZGl1bVxuICAgICAgICAgICAgICAgIDogdGhlbWUuZm9udFdlaWdodHMucmVndWxhcixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgQmFjayBIb21lXG4gICAgICAgIDwvTmF2TGluaz5cbiAgICAgIDwvTGluaz5cbiAgICA8L05hdj5cbiAgKTtcbn1cblxuZXhwb3J0IGNsYXNzIFNpZGViYXIyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNpZGViYXJDb250YWluZXI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPExvZ28+XG4gICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTIwcHhcIiB2aWV3Qm94PVwiMCAwIDMzMyAxNjFcIj5cbiAgICAgICAgICAgICAgPGdcbiAgICAgICAgICAgICAgICBpZD1cIlBhZ2UtMVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPXt0aGVtZS5jb2xvcnMudGV4dFNlY29uZGFyeX1cbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGdcbiAgICAgICAgICAgICAgICAgIGlkPVwiQXNzZXQtM1wiXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMy4wMDAwMDAsIDQuMDAwMDAwKVwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjZcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMjQuMjEsNjIuNTcgTDg4LjIxLDM0LjU3IEM4OC4yMSwzNC41NyA0My4wMiwxNjUuMzIgMi4yMSwxNTIuNTcgQy0xMy43OSwxNDcuNTcgODcuNTksNzYuNTcgOTUuMjEsNzYuNTcgQzExMC4yMSw3Ni41NyAxMDAuMzksMTE5LjgyIDgyLjIxLDEwOC41NyBDNjEuMjEsOTUuNTcgMTQ0LjIxLDIxLjU3IDE0Ni4yMSwyLjU3IEMxNDguMjEsLTE2LjQzIDEwNC4yMSwxMDEuNTcgMTE5LjIxLDExMS41NyBDMTM0LjIxLDEyMS41NyAxNzAuMjEsNTYuNTcgMTYzLjIxLDU0LjU3IEMxNTYuMjEsNTIuNTcgMTMxLjIxLDk0LjU3IDE0NC4yMSwxMDYuNTcgQzE1Ny4yMSwxMTguNTcgMTc0LjIxLDY1LjU3IDE3NC4yMSw2NS41NyBMMTY1LjIxLDEwMy41NyBDMTY1LjIxLDEwMy41NyAxODguMjEsNTkuNTcgMTkyLjIxLDk1LjU3IEMxOTYuMjEsMTMxLjU3IDIyMC4yMSw2Ny41NyAyMTUuMjEsNTguNTcgQzIxMC4yMSw0OS41NyAxOTQuMjEsMTAwLjU3IDIxMS4yMSwxMDEuNTcgQzIyOC4yMSwxMDIuNTcgMjQ4LjIxLDg1LjU3IDI2MS4yMSw4NS41NyBDMjc0LjIxLDg1LjU3IDI4MS4yMSw4OS41NyAyODguMjEsODkuNTcgQzI5NS4yMSw4OS41NyAzMDcuMjEsODUuNTcgMzA3LjIxLDg1LjU3XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJQYXRoXCJcbiAgICAgICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICAgICAgICA8bGluZVxuICAgICAgICAgICAgICAgICAgICB4MT1cIjMyNi4zMVwiXG4gICAgICAgICAgICAgICAgICAgIHkxPVwiNzguMDFcIlxuICAgICAgICAgICAgICAgICAgICB4Mj1cIjMyNi4yMVwiXG4gICAgICAgICAgICAgICAgICAgIHkyPVwiNzcuNTdcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cIlBhdGhcIlxuICAgICAgICAgICAgICAgICAgPjwvbGluZT5cbiAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvTG9nbz5cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgIDwvU2lkZWJhckNvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IFNpZGViYXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMTIwcHg7XG4gIGhlaWdodDogMzYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMV19KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgTG9nbyA9IHN0eWxlZC5hYFxuICBwYWRkaW5nOiAwIDhweDtcbmA7XG5cbmNvbnN0IE5hdiA9IHN0eWxlZChtb3Rpb24uZGl2KWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIG1hcmdpbjogMjRweCAwcHggMCAwO1xuYDtcblxuY29uc3QgTmF2TGluayA9IHN0eWxlZChtb3Rpb24uYSlgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE2MHB4O1xuICBwYWRkaW5nOiA4cHggOHB4IDhweCAyOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgdHJhbnNpdGlvbjogJHt0aGVtZS5hbmltYXRpb25zLmRlZmF1bHR9O1xuICA6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMzEsIDMxLCA1NCwgMC40KTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIDo6YmVmb3JlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNHB4KTtcbiAgICB9XG4gIH1cbiAgOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwi4oaQXCI7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2l0aW9uOiAke3RoZW1lLmFuaW1hdGlvbnMuZGVmYXVsdH07XG4gIH1cbmA7XG5cbmNvbnN0IERpdmlkZXIgPSBzdHlsZWQuZGl2YFxuICBtaW4taGVpZ2h0OiAzcHg7XG4gIG1hcmdpbjogMzJweCAwcHggMCA4cHg7XG4gIHdpZHRoOiAxNjBweDtcbiAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuZ3JleTJ9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjI7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICB0aXRsZTI6IHN0cmluZztcbiAgdGl0bGUzOiBzdHJpbmc7XG4gIHN1YnRpdGxlOiBzdHJpbmc7XG59XG5cbmNvbnN0IFRvcFNlY3Rpb246IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7XG4gIHRpdGxlID0gXCJEZWZhdWx0IHRpdGxlXCIsXG4gIHRpdGxlMiA9IFwiRGVmYXVsdCB0aXRsZVwiLFxuICB0aXRsZTMgPSBcIkRlZmF1bHQgdGl0bGVcIixcbiAgc3VidGl0bGUgPSBcIkRlZmF1bHQgc3VidGl0bGVcIixcbn0pID0+IChcbiAgPFRvcENvbnRhaW5lcj5cbiAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgPEFjY2VudFRpdGxlPnt0aXRsZTJ9PC9BY2NlbnRUaXRsZT5cbiAgICA8RGFya1RpdGxlPnt0aXRsZTN9PC9EYXJrVGl0bGU+XG4gICAgPFN1YnRpdGxlPntzdWJ0aXRsZX08L1N1YnRpdGxlPlxuICA8L1RvcENvbnRhaW5lcj5cbik7XG5cbmNvbnN0IFRvcENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTAycHg7XG5gO1xuXG5jb25zdCBBY2NlbnRUaXRsZSA9IHN0eWxlZC5oMWBcbiAgY29sb3I6ICMxNjZkZWY7XG5gO1xuXG5jb25zdCBEYXJrVGl0bGUgPSBzdHlsZWQuaDFgXG4gIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ncmV5Mn07XG5gO1xuXG5jb25zdCBTdWJ0aXRsZSA9IHN0eWxlZC5oNGBcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWUuZm9udFdlaWdodHMucmVndWxhcn07XG4gIHBhZGRpbmc6IDE2cHggNDhweCAwIDJweDtcbiAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmxpZ2h0Z3JleTF9O1xuICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzFdfSkge1xuICAgIHBhZGRpbmc6IDE2cHggMjRweCAwIDJweDtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzJdfSkge1xuICAgIHBhZGRpbmc6IDE2cHggOHB4IDAgMnB4O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBUb3BTZWN0aW9uO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIHN1YnRpdGxlPzogc3RyaW5nO1xuICBpbWd1cmw/OiBzdHJpbmc7XG4gIHVybD86IHN0cmluZztcbiAgY3RhPzogc3RyaW5nO1xuICB0aXRsZTI/OiBzdHJpbmc7XG4gIHN1YnRpdGxlMj86IHN0cmluZztcbiAgaW1ndXJsMj86IHN0cmluZztcbiAgdXJsMj86IHN0cmluZztcbiAgY3RhMj86IHN0cmluZztcbiAgb25seW9uZT86IGJvb2xlYW47XG59XG5cbmNvbnN0IFdvcmtTZWN0aW9uOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAoe1xuICB0aXRsZSA9IFwiZGVmYXVsdFwiLFxuICBzdWJ0aXRsZSA9IFwiZGVmYXVsdFwiLFxuICBpbWd1cmwgPSBcIi9ncmFiLnBuZ1wiLFxuICB1cmwgPSBcIi9wcm9qZWN0MVwiLFxuICBjdGEgPSBcIlJlYWQgY2FzZSBzdHVkeVwiLFxuICB0aXRsZTIgPSBcImRlZmF1bHRcIixcbiAgc3VidGl0bGUyID0gXCJkZWZhdWx0XCIsXG4gIGltZ3VybDIgPSBcIi9ncmFiLnBuZ1wiLFxuICB1cmwyID0gXCIvcHJvamVjdDJcIixcbiAgY3RhMiA9IFwiUmVhZCBjYXNlIHN0dWR5XCIsXG4gIG9ubHlvbmUgPSBmYWxzZSxcbn0pID0+IChcbiAgPFByb2plY3RHcmlkPlxuICAgIDxMaW5rIGhyZWY9e3VybH0+XG4gICAgICA8UHJvamVjdENhcmQ+XG4gICAgICAgIDxQcm9qZWN0RGVzYz5cbiAgICAgICAgICA8UHJvamVjdFRpdGxlPnt0aXRsZX08L1Byb2plY3RUaXRsZT5cbiAgICAgICAgICA8UHJvamVjdFRpdGxlPntzdWJ0aXRsZX08L1Byb2plY3RUaXRsZT5cbiAgICAgICAgICA8UHJvamVjdENUQT57Y3RhfTwvUHJvamVjdENUQT5cbiAgICAgICAgPC9Qcm9qZWN0RGVzYz5cbiAgICAgICAgPFByb2plY3RJbWcgc3JjPXtpbWd1cmx9IGFsdD1cIm15IGltYWdlXCIgLz5cbiAgICAgIDwvUHJvamVjdENhcmQ+XG4gICAgPC9MaW5rPlxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogb25seW9uZSA/IFwibm9uZVwiIDogXCJibG9ja1wiIH19PlxuICAgICAgPExpbmsgaHJlZj17dXJsMn0+XG4gICAgICAgIDxQcm9qZWN0Q2FyZD5cbiAgICAgICAgICA8UHJvamVjdERlc2M+XG4gICAgICAgICAgICA8UHJvamVjdFRpdGxlPnt0aXRsZTJ9PC9Qcm9qZWN0VGl0bGU+XG4gICAgICAgICAgICA8UHJvamVjdFRpdGxlPntzdWJ0aXRsZTJ9PC9Qcm9qZWN0VGl0bGU+XG4gICAgICAgICAgICA8UHJvamVjdENUQT57Y3RhMn08L1Byb2plY3RDVEE+XG4gICAgICAgICAgPC9Qcm9qZWN0RGVzYz5cbiAgICAgICAgICA8UHJvamVjdEltZyBzcmM9e2ltZ3VybDJ9IGFsdD1cIm15IGltYWdlXCIgLz5cbiAgICAgICAgPC9Qcm9qZWN0Q2FyZD5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgPC9Qcm9qZWN0R3JpZD5cbik7XG5cbmNvbnN0IFByb2plY3RHcmlkID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLWdhcDogMTZweDtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsyXX0pIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLWdhcDogNDhweDtcbiAgfVxuYDtcblxuY29uc3QgUHJvamVjdENhcmQgPSBzdHlsZWQuYWBcbiAgYmFja2dyb3VuZDogcmdiYSgzMSwgMzEsIDU0LCAwLjQpO1xuICBoZWlnaHQ6IDM4MHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogJHt0aGVtZS5hbmltYXRpb25zLmRlZmF1bHR9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gO1xuXG5jb25zdCBQcm9qZWN0RGVzYyA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDI0cHggMzJweCA4cHggMzJweDtcbmA7XG5cbmNvbnN0IFByb2plY3RJbWcgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDhweCA4cHg7XG4gIG9wYWNpdHk6IDAuNTtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gIHRyYW5zaXRpb246ICR7dGhlbWUuYW5pbWF0aW9ucy5kZWZhdWx0fTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsxXX0pIHtcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwJSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAke1Byb2plY3RDYXJkfTpob3ZlciAmIHtcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwJSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcblxuY29uc3QgUHJvamVjdFRpdGxlID0gc3R5bGVkLmgzYFxuICBjb2xvcjogJHt0aGVtZS5jb2xvcnMubGlnaHRncmV5MX07XG5cbiAgdHJhbnNpdGlvbjogJHt0aGVtZS5hbmltYXRpb25zLmRlZmF1bHR9O1xuICAke1Byb2plY3RDYXJkfTpob3ZlciAmIHtcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMubGlnaHRncmV5MX07XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMV19KSB7XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmxpZ2h0Z3JleTF9O1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbmA7XG5cbmNvbnN0IFByb2plY3RDVEEgPSBzdHlsZWQuaDVgXG4gIHBhZGRpbmc6IDEycHggMHB4O1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZ3JleTR9O1xuICBmb250LXdlaWdodDogJHt0aGVtZS5mb250V2VpZ2h0cy5tZWRpdW19O1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiAke3RoZW1lLmFuaW1hdGlvbnMuZGVmYXVsdH07XG4gICR7UHJvamVjdENhcmR9OmhvdmVyICYge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgOjphZnRlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTtcbiAgICB9XG4gIH1cbiAgOjphZnRlciB7XG4gICAgY29udGVudDogXCLihpJcIjtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2l0aW9uOiAke3RoZW1lLmFuaW1hdGlvbnMuZGVmYXVsdH07XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsxXX0pIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBXb3JrU2VjdGlvbjtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIHN1YnRpdGxlPzogc3RyaW5nO1xuICB1cmw/OiBzdHJpbmc7XG4gIHRpdGxlMj86IHN0cmluZztcbiAgc3VidGl0bGUyPzogc3RyaW5nO1xuICB1cmwyPzogc3RyaW5nO1xuICBvbmx5b25lPzogYm9vbGVhbjtcbiAgc2VldmlkZW8/OiBib29sZWFuO1xufVxuXG5jbGFzcyBXb3JrU2VjdGlvbjIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGUgPSB7IHNlZXZpZGVvOiBmYWxzZSB9O1xuXG4gIHNob3dWaWRlbyA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICB0aGlzLnJlZnMudmlkZW8ucGxheSgpO1xuICAgIHRoaXMucmVmcy52aWRlby52b2x1bWUgPSAwLjM7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlZXZpZGVvOiB0cnVlIH0pO1xuICB9O1xuXG4gIGhpZGVWaWRlbyA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJzY3JvbGxcIjtcbiAgICB0aGlzLnJlZnMudmlkZW8ucGF1c2UoKTtcbiAgICB0aGlzLnJlZnMudmlkZW8uY3VycmVudFRpbWUgPSAwO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWV2aWRlbzogZmFsc2UgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UHJvamVjdEdyaWQ+XG4gICAgICAgIDxWaWRlb0NvbnRhaW5lclxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IHRoaXMuc3RhdGUuc2VldmlkZW8gPyBcImZsZXhcIiA6IFwibm9uZVwiIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Q2xvc2VDb250YWluZXIgb25DbGljaz17dGhpcy5oaWRlVmlkZW99PlxuICAgICAgICAgICAgPENsb3NlSWNvblxuICAgICAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6XCI+PC9wYXRoPlxuICAgICAgICAgICAgPC9DbG9zZUljb24+XG4gICAgICAgICAgPC9DbG9zZUNvbnRhaW5lcj5cbiAgICAgICAgICA8VmlkZW9Nb2RhbCByZWY9XCJ2aWRlb1wiIGNvbnRyb2xzIGNvbnRyb2xzTGlzdD1cIm5vZG93bmxvYWRcIj5cbiAgICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiL2FldGhlci5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCIgLz5cbiAgICAgICAgICA8L1ZpZGVvTW9kYWw+XG4gICAgICAgIDwvVmlkZW9Db250YWluZXI+XG4gICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2hvd1ZpZGVvfT5cbiAgICAgICAgICA8UHJvamVjdENhcmQ+XG4gICAgICAgICAgICA8UHJvamVjdERlc2M+XG4gICAgICAgICAgICAgIDxQcm9qZWN0VGl0bGU+e3RoaXMucHJvcHMudGl0bGV9PC9Qcm9qZWN0VGl0bGU+XG4gICAgICAgICAgICAgIDxQcm9qZWN0VGl0bGU+e3RoaXMucHJvcHMuc3VidGl0bGV9PC9Qcm9qZWN0VGl0bGU+XG4gICAgICAgICAgICAgIDxQcm9qZWN0Q1RBPldhdGNoIHZpZGVvPC9Qcm9qZWN0Q1RBPlxuICAgICAgICAgICAgPC9Qcm9qZWN0RGVzYz5cbiAgICAgICAgICA8L1Byb2plY3RDYXJkPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogdGhpcy5wcm9wcy5vbmx5b25lID8gXCJub25lXCIgOiBcImJsb2NrXCIgfX0+XG4gICAgICAgICAgPGEgaHJlZj17dGhpcy5wcm9wcy51cmwyfT5cbiAgICAgICAgICAgIDxQcm9qZWN0Q2FyZDI+XG4gICAgICAgICAgICAgIDxQcm9qZWN0RGVzYz5cbiAgICAgICAgICAgICAgICA8UHJvamVjdFRpdGxlPnt0aGlzLnByb3BzLnRpdGxlMn08L1Byb2plY3RUaXRsZT5cbiAgICAgICAgICAgICAgICA8UHJvamVjdFRpdGxlPnt0aGlzLnByb3BzLnN1YnRpdGxlMn08L1Byb2plY3RUaXRsZT5cbiAgICAgICAgICAgICAgICA8UHJvamVjdENUQTI+VmlldyBtb3JlPC9Qcm9qZWN0Q1RBMj5cbiAgICAgICAgICAgICAgPC9Qcm9qZWN0RGVzYz5cbiAgICAgICAgICAgIDwvUHJvamVjdENhcmQyPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1Byb2plY3RHcmlkPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgUHJvamVjdEdyaWQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtZ2FwOiAxNnB4O1xuICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzJdfSkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtZ2FwOiA0OHB4O1xuICB9XG5gO1xuXG5jb25zdCBQcm9qZWN0Q2FyZDIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMzgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMSwgMzEsIDU0LCAwLjQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246ICR7dGhlbWUuYW5pbWF0aW9ucy5kZWZhdWx0fTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9tYXRyMXNxLmpwZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgb3BhY2l0eTogMC40O1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRyYW5zaXRpb246ICR7dGhlbWUuYW5pbWF0aW9ucy5kZWZhdWx0fTtcbiAgfVxuICA6aG92ZXIge1xuICAgIDo6YWZ0ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsxXX0pIHtcbiAgICA6OmFmdGVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBQcm9qZWN0Q2FyZCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAzODBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMxLCAzMSwgNTQsIDAuNCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogJHt0aGVtZS5hbmltYXRpb25zLmRlZmF1bHR9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2FldGhlcjEucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgei1pbmRleDogLTE7XG4gICAgdHJhbnNpdGlvbjogJHt0aGVtZS5hbmltYXRpb25zLmRlZmF1bHR9O1xuICB9XG4gIDpob3ZlciB7XG4gICAgOjphZnRlciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMV19KSB7XG4gICAgOjphZnRlciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgUHJvamVjdERlc2MgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAyNHB4IDMycHg7XG5gO1xuXG5jb25zdCBQcm9qZWN0Q1RBMiA9IHN0eWxlZC5oNWBcbiAgcGFkZGluZzogMTJweCAwcHg7XG4gIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ncmV5NH07XG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lLmZvbnRXZWlnaHRzLm1lZGl1bX07XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246ICR7dGhlbWUuYW5pbWF0aW9ucy5kZWZhdWx0fTtcbiAgJHtQcm9qZWN0Q2FyZDJ9OmhvdmVyICYge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgOjphZnRlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KSB0cmFuc2xhdGVZKC0xcHgpIHJvdGF0ZSgtNDBkZWcpO1xuICAgIH1cbiAgfVxuICA6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIuKGklwiO1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00MGRlZyk7XG4gICAgdHJhbnNpdGlvbjogJHt0aGVtZS5hbmltYXRpb25zLmRlZmF1bHR9O1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMV19KSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcblxuY29uc3QgUHJvamVjdENUQSA9IHN0eWxlZC5oNWBcbiAgcGFkZGluZzogMTJweCAwcHg7XG4gIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ncmV5NH07XG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lLmZvbnRXZWlnaHRzLm1lZGl1bX07XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246ICR7dGhlbWUuYW5pbWF0aW9ucy5kZWZhdWx0fTtcbiAgJHtQcm9qZWN0Q2FyZH06aG92ZXIgJiB7XG4gICAgb3BhY2l0eTogMTtcbiAgICA6OmFmdGVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpO1xuICAgIH1cbiAgfVxuICA6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIuKGklwiO1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zaXRpb246ICR7dGhlbWUuYW5pbWF0aW9ucy5kZWZhdWx0fTtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzFdfSkge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbmA7XG5cbmNvbnN0IFByb2plY3RUaXRsZSA9IHN0eWxlZC5oM2BcbiAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmxpZ2h0Z3JleTF9O1xuICB0cmFuc2l0aW9uOiAke3RoZW1lLmFuaW1hdGlvbnMuZGVmYXVsdH07XG4gICR7UHJvamVjdENhcmR9OmhvdmVyICYge1xuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5saWdodGdyZXkxfTtcbiAgfVxuICAke1Byb2plY3RDYXJkMn06aG92ZXIgJiB7XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmxpZ2h0Z3JleTF9O1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMV19KSB7XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmxpZ2h0Z3JleTF9O1xuICB9XG5gO1xuXG5jb25zdCBWaWRlb0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICB6LWluZGV4OiAyMDAwO1xuYDtcblxuY29uc3QgVmlkZW9Nb2RhbCA9IHN0eWxlZC52aWRlb2BcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuYDtcblxuY29uc3QgQ2xvc2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDBweDtcbiAgcmlnaHQ6IDQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzEsIDMxLCA1NCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogJHt0aGVtZS5hbmltYXRpb25zLmRlZmF1bHR9O1xuICA6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzEsIDMxLCA1NCwgMC40KTtcbiAgfVxuYDtcblxuY29uc3QgQ2xvc2VJY29uID0gc3R5bGVkLnN2Z2BcbiAgd2lkdGg6IDMycHg7XG4gIGZpbGw6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgdHJhbnNpdGlvbjogJHt0aGVtZS5hbmltYXRpb25zLmRlZmF1bHR9O1xuICAke0Nsb3NlQ29udGFpbmVyfTpob3ZlciAmIHtcbiAgICBmaWxsOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmtTZWN0aW9uMjtcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3VybD1yZXF1aXJlKFwidXJsXCIpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTt2YXIgX3JvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JvdXRlclwiKSk7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTtmdW5jdGlvbiBpc0xvY2FsKGhyZWYpe3ZhciB1cmw9KDAsX3VybC5wYXJzZSkoaHJlZixmYWxzZSx0cnVlKTt2YXIgb3JpZ2luPSgwLF91cmwucGFyc2UpKCgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSxmYWxzZSx0cnVlKTtyZXR1cm4hdXJsLmhvc3R8fHVybC5wcm90b2NvbD09PW9yaWdpbi5wcm90b2NvbCYmdXJsLmhvc3Q9PT1vcmlnaW4uaG9zdDt9ZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYyl7dmFyIGxhc3RIcmVmPW51bGw7dmFyIGxhc3RBcz1udWxsO3ZhciBsYXN0UmVzdWx0PW51bGw7cmV0dXJuKGhyZWYsYXMpPT57aWYobGFzdFJlc3VsdCYmaHJlZj09PWxhc3RIcmVmJiZhcz09PWxhc3RBcyl7cmV0dXJuIGxhc3RSZXN1bHQ7fXZhciByZXN1bHQ9Zm9ybWF0RnVuYyhocmVmLGFzKTtsYXN0SHJlZj1ocmVmO2xhc3RBcz1hcztsYXN0UmVzdWx0PXJlc3VsdDtyZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGZvcm1hdFVybCh1cmwpe3JldHVybiB1cmwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jz8oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHVybCk6dXJsO312YXIgb2JzZXJ2ZXI7dmFyIGxpc3RlbmVycz1uZXcgTWFwKCk7dmFyIEludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz93aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXI6bnVsbDt2YXIgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBnZXRPYnNlcnZlcigpey8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG5pZihvYnNlcnZlcil7cmV0dXJuIG9ic2VydmVyO30vLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbmlmKCFJbnRlcnNlY3Rpb25PYnNlcnZlcil7cmV0dXJuIHVuZGVmaW5lZDt9cmV0dXJuIG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57aWYoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSl7cmV0dXJuO312YXIgY2I9bGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpO2lmKGVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wKXtvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldCk7Y2IoKTt9fSk7fSx7cm9vdE1hcmdpbjonMjAwcHgnfSk7fXZhciBsaXN0ZW5Ub0ludGVyc2VjdGlvbnM9KGVsLGNiKT0+e3ZhciBvYnNlcnZlcj1nZXRPYnNlcnZlcigpO2lmKCFvYnNlcnZlcil7cmV0dXJuKCk9Pnt9O31vYnNlcnZlci5vYnNlcnZlKGVsKTtsaXN0ZW5lcnMuc2V0KGVsLGNiKTtyZXR1cm4oKT0+e3RyeXtvYnNlcnZlci51bm9ic2VydmUoZWwpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt9bGlzdGVuZXJzLmRlbGV0ZShlbCk7fTt9O2NsYXNzIExpbmsgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKHByb3BzKXtzdXBlcihwcm9wcyk7dGhpcy5wPXZvaWQgMDt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9KCk9Pnt9O3RoaXMuZm9ybWF0VXJscz1tZW1vaXplZEZvcm1hdFVybCgoaHJlZixhc0hyZWYpPT57cmV0dXJue2hyZWY6KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChocmVmKSksYXM6YXNIcmVmPygwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoYXNIcmVmKSk6YXNIcmVmfTt9KTt0aGlzLmxpbmtDbGlja2VkPWU9Pnt2YXJ7bm9kZU5hbWUsdGFyZ2V0fT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJih0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGUubWV0YUtleXx8ZS5jdHJsS2V5fHxlLnNoaWZ0S2V5fHxlLm5hdGl2ZUV2ZW50JiZlLm5hdGl2ZUV2ZW50LndoaWNoPT09Mikpey8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbnJldHVybjt9dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7aWYoIWlzTG9jYWwoaHJlZikpey8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbnJldHVybjt9dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247aHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGhyZWYpO2FzPWFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsYXMpOmhyZWY7ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xudmFye3Njcm9sbH09dGhpcy5wcm9wcztpZihzY3JvbGw9PW51bGwpe3Njcm9sbD1hcy5pbmRleE9mKCcjJyk8MDt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5fcm91dGVyLmRlZmF1bHRbdGhpcy5wcm9wcy5yZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3c6dGhpcy5wcm9wcy5zaGFsbG93fSkudGhlbihzdWNjZXNzPT57aWYoIXN1Y2Nlc3MpcmV0dXJuO2lmKHNjcm9sbCl7d2luZG93LnNjcm9sbFRvKDAsMCk7ZG9jdW1lbnQuYm9keS5mb2N1cygpO319KTt9O2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihwcm9wcy5wcmVmZXRjaCl7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fXRoaXMucD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO31jb21wb25lbnRXaWxsVW5tb3VudCgpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO31nZXRQYXRocygpe3ZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO3ZhcntocmVmOnBhcnNlZEhyZWYsYXM6cGFyc2VkQXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7dmFyIHJlc29sdmVkSHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEhyZWYpO3JldHVybltyZXNvbHZlZEhyZWYscGFyc2VkQXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRBcyk6cmVzb2x2ZWRIcmVmXTt9aGFuZGxlUmVmKHJlZil7aWYodGhpcy5wJiZJbnRlcnNlY3Rpb25PYnNlcnZlciYmcmVmJiZyZWYudGFnTmFtZSl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7dmFyIGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW3RoaXMuZ2V0UGF0aHMoKS5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXTtpZighaXNQcmVmZXRjaGVkKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9bGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwoKT0+e3RoaXMucHJlZmV0Y2goKTt9KTt9fX0vLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbi8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxucHJlZmV0Y2gob3B0aW9ucyl7aWYoIXRoaXMucHx8dHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG52YXIgcGF0aHM9dGhpcy5nZXRQYXRocygpOy8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5fcm91dGVyLmRlZmF1bHQucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLzBdLHBhdGhzWy8qIGFzUGF0aCAqLzFdLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO3ByZWZldGNoZWRbcGF0aHMuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV09dHJ1ZTt9cmVuZGVyKCl7dmFye2NoaWxkcmVufT10aGlzLnByb3BzO3ZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbnZhciBjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7dmFyIHByb3BzPXtyZWY6ZWw9Pnt0aGlzLmhhbmRsZVJlZihlbCk7aWYoY2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWYpe2lmKHR5cGVvZiBjaGlsZC5yZWY9PT0nZnVuY3Rpb24nKWNoaWxkLnJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGQucmVmPT09J29iamVjdCcpe2NoaWxkLnJlZi5jdXJyZW50PWVsO319fSxvbk1vdXNlRW50ZXI6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO310aGlzLnByZWZldGNoKHtwcmlvcml0eTp0cnVlfSk7fSxvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXt0aGlzLmxpbmtDbGlja2VkKGUpO319fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYodGhpcy5wcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe3Byb3BzLmhyZWY9YXN8fGhyZWY7fS8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbi8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpe3ZhciByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydD1yZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKS5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtpZihwcm9wcy5ocmVmJiZ0eXBlb2YgX19ORVhUX0RBVEFfXyE9PSd1bmRlZmluZWQnJiZfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpe3Byb3BzLmhyZWY9cmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZik7fX1yZXR1cm4gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTt9fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dmFyIHdhcm49KDAsX3V0aWxzLmV4ZWNPbmNlKShjb25zb2xlLmVycm9yKTsvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbnZhciBQcm9wVHlwZXM9cmVxdWlyZSgncHJvcC10eXBlcycpO3ZhciBleGFjdD1yZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0Jyk7Ly8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuTGluay5wcm9wVHlwZXM9ZXhhY3Qoe2hyZWY6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxhczpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKSxwcmVmZXRjaDpQcm9wVHlwZXMuYm9vbCxyZXBsYWNlOlByb3BUeXBlcy5ib29sLHNoYWxsb3c6UHJvcFR5cGVzLmJvb2wscGFzc0hyZWY6UHJvcFR5cGVzLmJvb2wsc2Nyb2xsOlByb3BUeXBlcy5ib29sLGNoaWxkcmVuOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LChwcm9wcyxwcm9wTmFtZSk9Pnt2YXIgdmFsdWU9cHJvcHNbcHJvcE5hbWVdO2lmKHR5cGVvZiB2YWx1ZT09PSdzdHJpbmcnKXt3YXJuKFwiV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPlwiKTt9cmV0dXJuIG51bGw7fV0pLmlzUmVxdWlyZWR9KTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi92YXIgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxudmFyIHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCddO3ZhciByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107dmFyIGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPWZ1bmN0aW9uKCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCxmdW5jdGlvbigpe3ZhciBldmVudEZpZWxkPVwib25cIitldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStldmVudC5zdWJzdHJpbmcoMSk7dmFyIF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3VtZW50cyk7fWNhdGNoKGVycil7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogXCIrZXZlbnRGaWVsZCk7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UrXCJcXG5cIitlcnIuc3RhY2spO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe3ZhciBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxudmFyIGNyZWF0ZVJvdXRlcj1mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoKXtmb3IodmFyIF9sZW49YXJndW1lbnRzLmxlbmd0aCxhcmdzPW5ldyBBcnJheShfbGVuKSxfa2V5PTA7X2tleTxfbGVuO19rZXkrKyl7YXJnc1tfa2V5XT1hcmd1bWVudHNbX2tleV07fXNpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXt2YXIgX3JvdXRlcj1yb3V0ZXI7dmFyIGluc3RhbmNlPXt9O2Zvcih2YXIgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbih7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09ZnVuY3Rpb24oKXtyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1cIndpdGhSb3V0ZXIoXCIrbmFtZStcIilcIjt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO30iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gbWl0dCgpIHtcbiAgICBjb25zdCBhbGwgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgb2ZmKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICAgICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbWl0KHR5cGUsIC4uLmV2dHMpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciguLi5ldnRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBtaXR0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG5jb25zdCBtaXR0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IGlzX2R5bmFtaWNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG5jb25zdCByb3V0ZV9tYXRjaGVyXzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xuY29uc3Qgcm91dGVfcmVnZXhfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aDtcbn1cbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgICAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgICAgIDogcGF0aDtcbn1cbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmZ1bmN0aW9uIHRvUm91dGUocGF0aCkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nO1xufVxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGgpID0+IHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKTtcbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCBpc1NlcnZlclJlbmRlciwgY2IpIHtcbiAgICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxO1xuICAgIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2godXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmApLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgIH0pLCB7XG4gICAgICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgZXJyLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lLCBxdWVyeSwgYXMsIHsgaW5pdGlhbFByb3BzLCBwYWdlTG9hZGVyLCBBcHAsIHdyYXBBcHAsIENvbXBvbmVudCwgZXJyLCBzdWJzY3JpcHRpb24sIGlzRmFsbGJhY2ssIH0pIHtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7fTtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCB1dGlsc18xLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKGUuc3RhdGUgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyICYmXG4gICAgICAgICAgICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgICAgICAgICAgICB1cmxfMS5wYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U3RhdGljRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHVybF8xLnBhcnNlKGFzUGF0aCkucGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICAgICAgICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgICAgICAgICAgIDogZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgbnVsbCwgdGhpcy5pc1NzciwgZGF0YSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB1cmxfMS5wYXJzZShhc1BhdGgsIHRydWUpO1xuICAgICAgICAgICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICBpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXM7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCBhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUocm91dGUsIG1vZCkge1xuICAgICAgICBjb25zdCBDb21wb25lbnQgPSBtb2QuZGVmYXVsdCB8fCBtb2Q7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkYXRhKSwgeyBDb21wb25lbnQsIF9fTl9TU0c6IG1vZC5fX05fU1NHLCBfX05fU1NQOiBtb2QuX19OX1NTUCB9KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGE7XG4gICAgICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgICAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAgICovXG4gICAgYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHB1c2godXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcmVwbGFjZSh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgY2hhbmdlKG1ldGhvZCwgX3VybCwgX2FzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgICAgICBpZiAodXRpbHNfMS5TVCkge1xuICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgICAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICAgICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmw7XG4gICAgICAgICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hcztcbiAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybCk7XG4gICAgICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgICAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcyk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgaWYgKGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSB1cmxfMS5wYXJzZShhcyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IHJvdXRlX3JlZ2V4XzEuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJvdXRlX21hdGNoZXJfMS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtID0+ICFxdWVyeVtwYXJhbV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICAgICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihyb3V0ZUluZm8gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCB1dGlsc18xLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKGVyciwgbG9hZEVycm9yRmFpbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZ2lwRXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXMgPT4gcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgfSksIHJlamVjdCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YSgoKSA9PiBfX05fU1NHXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIH0pKS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVFcnJvcik7XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgdGhpcy5ub3RpZnkoZGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgICAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKi9cbiAgICBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKTtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gdXRpbHNfMS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpO1xuICAgICAgICAgICAgZS5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSkge1xuICAgICAgICB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5Sb3V0ZXIuZXZlbnRzID0gbWl0dF8xLmRlZmF1bHQoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO1xuZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpIHtcbiAgICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTtcbn1cbmV4cG9ydHMuaXNEeW5hbWljUm91dGUgPSBpc0R5bmFtaWNSb3V0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpIHtcbiAgICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXg7XG4gICAgcmV0dXJuIChwYXRobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCc7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV07XG4gICAgICAgICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc107XG4gICAgICAgICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgICAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoZW50cnkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICAgICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBkZWNvZGUobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH07XG59XG5leHBvcnRzLmdldFJvdXRlTWF0Y2hlciA9IGdldFJvdXRlTWF0Y2hlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJyk7XG59XG5mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSkge1xuICAgIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpO1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGxldCBncm91cEluZGV4ID0gMTtcbiAgICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgZ3JvdXBzWyQxXG4gICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH07XG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gJy8oLis/KScgOiAnLyhbXi9dKz8pJztcbiAgICB9KTtcbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU7XG4gICAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gICAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpO1xuICAgICAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksIGdyb3VwcyB9LCAobmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgICAgIH1cbiAgICAgICAgOiB7fSkpO1xufVxuZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuLyoqXG4gKiBVdGlsc1xuICovXG5mdW5jdGlvbiBleGVjT25jZShmbikge1xuICAgIGxldCB1c2VkID0gZmFsc2U7XG4gICAgbGV0IHJlc3VsdDtcbiAgICByZXR1cm4gKCguLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmICghdXNlZCkge1xuICAgICAgICAgICAgdXNlZCA9IHRydWU7XG4gICAgICAgICAgICByZXN1bHQgPSBmbiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5leGVjT25jZSA9IGV4ZWNPbmNlO1xuZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gICAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gO1xufVxuZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luO1xuZnVuY3Rpb24gZ2V0VVJMKCkge1xuICAgIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO1xufVxuZXhwb3J0cy5nZXRVUkwgPSBnZXRVUkw7XG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBDb21wb25lbnRcbiAgICAgICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xufVxuZXhwb3J0cy5nZXREaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lO1xuZnVuY3Rpb24gaXNSZXNTZW50KHJlcykge1xuICAgIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50O1xufVxuZXhwb3J0cy5pc1Jlc1NlbnQgPSBpc1Jlc1NlbnQ7XG5hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwgY3R4KSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICgoX2EgPSBBcHAucHJvdG90eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKTtcbiAgICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxuICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BzO1xufVxuZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzID0gbG9hZEdldEluaXRpYWxQcm9wcztcbmV4cG9ydHMudXJsT2JqZWN0S2V5cyA9IFtcbiAgICAnYXV0aCcsXG4gICAgJ2hhc2gnLFxuICAgICdob3N0JyxcbiAgICAnaG9zdG5hbWUnLFxuICAgICdocmVmJyxcbiAgICAncGF0aCcsXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncG9ydCcsXG4gICAgJ3Byb3RvY29sJyxcbiAgICAncXVlcnknLFxuICAgICdzZWFyY2gnLFxuICAgICdzbGFzaGVzJyxcbl07XG5mdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwsIG9wdGlvbnMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4cG9ydHMudXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXJsXzEuZm9ybWF0KHVybCwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uID0gZm9ybWF0V2l0aFZhbGlkYXRpb247XG5leHBvcnRzLlNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydHMuU1QgPSBleHBvcnRzLlNQICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBUb3BTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL3RvcHNlY3Rpb25cIjtcbmltcG9ydCBXb3JrU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy93b3Jrc2VjdGlvblwiO1xuaW1wb3J0IFdvcmtTZWN0aW9uMiBmcm9tIFwiLi4vY29tcG9uZW50cy93b3Jrc2VjdGlvbjJcIjtcblxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4gKFxuICA8TGF5b3V0IHRpdGxlPVwiSm9sZW5lIE5nIHwgSG9tZVwiIGhvbWU9e3RydWV9PlxuICAgIDxUb3BTZWN0aW9uXG4gICAgICB0aXRsZT1cIkpvbGVuZSBOZyBKaWEgWWluZ1wiXG4gICAgICB0aXRsZTI9XCJTci4gUHJvZHVjdCBEZXNpZ25lclwiXG4gICAgICB0aXRsZTM9XCJDb2RlcyBmb3IgZnVuLlwiXG4gICAgICBzdWJ0aXRsZT1cIkEgZGVzaWduZXIsIHJlc2VhcmNoZXIgYW5kIHRpbmtlcmVyLiBJIHN0YXJ0ZWQgZGVzaWduaW5nIGFmdGVyIHJlYWxpc2luZyBJIGNvdWxkIHNoYXBlIHRoZSBwcm9kdWN0cyBpbiBteSBzdXJyb3VuZGluZ3MuIE15IHByaW1hcnkgaW50ZXJlc3QgaXMgaW4gd29ya2luZyBvbiBwcm9kdWN0IGV4cGVyaWVuY2VzIHdpdGggYSBjbGVhciB2YWx1ZSBwcm9wb3NpdGlvbi5cIlxuICAgIC8+XG4gICAgPFdvcmtHcmlkPlxuICAgICAgPFdvcmtTZWN0aW9uXG4gICAgICAgIHRpdGxlPVwiRm9vZFwiXG4gICAgICAgIHN1YnRpdGxlPVwiU2VsZiBQaWNrLXVwXCJcbiAgICAgICAgaW1ndXJsPVwiL3Nway0wLnBuZ1wiXG4gICAgICAgIHVybD1cIi9wcm9qZWN0MVwiXG4gICAgICAgIHRpdGxlMj1cIkRlbGl2ZXJ5XCJcbiAgICAgICAgc3VidGl0bGUyPVwiZmVhdHVyZXNcIlxuICAgICAgICBpbWd1cmwyPVwiL2dyYWItMC5wbmdcIlxuICAgICAgICB1cmwyPVwiL3Byb2plY3QyXCJcbiAgICAgICAgY3RhMj1cIlZpZXcgZmVhdHVyZXNcIlxuICAgICAgLz5cbiAgICAgIDxXb3JrU2VjdGlvblxuICAgICAgICB0aXRsZT1cIlBhcmVudHMgR2F0ZXdheVwiXG4gICAgICAgIHN1YnRpdGxlPVwiZm9yIFNjaG9vbHNcIlxuICAgICAgICBpbWd1cmw9XCIvcGctMC5wbmdcIlxuICAgICAgICB1cmw9XCIvcHJvamVjdDNcIlxuICAgICAgICB0aXRsZTI9XCJIb3VzaW5nXCJcbiAgICAgICAgc3VidGl0bGUyPVwiUmVzYWxlIFBvcnRhbFwiXG4gICAgICAgIGltZ3VybDI9XCIvaGRiLTAucG5nXCJcbiAgICAgICAgdXJsMj1cIi9wcm9qZWN0NFwiXG4gICAgICAvPlxuICAgICAgPFdvcmtTZWN0aW9uMlxuICAgICAgICB0aXRsZTI9XCJNQVRyXCJcbiAgICAgICAgc3VidGl0bGUyPVwiM0QgcHJpbnRlZCBvYmplY3RcIlxuICAgICAgICB1cmwyPVwiaHR0cHM6Ly93d3cuc3R1Y2suc2cvcG9ydGZvbGlvL21hdHIvXCJcbiAgICAgICAgdGl0bGU9XCJBZXRoZXJcIlxuICAgICAgICBzdWJ0aXRsZT1cIkludGVyYWN0aXZlIGluc3RhbGxhdGlvblwiXG4gICAgICAvPlxuICAgIDwvV29ya0dyaWQ+XG4gIDwvTGF5b3V0PlxuKTtcblxuY29uc3QgV29ya0dyaWQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMTEycHg7XG4gIG1hcmdpbi10b3A6IDk2cHg7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMV19KSB7XG4gICAgZ3JpZC1nYXA6IDU2cHg7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsyXX0pIHtcbiAgICBncmlkLWdhcDogNDhweDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xuIiwiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCI7XG5cbmNvbnN0IEdsb2JhbFN0eWxlcyA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuXG5odG1se1xuICAgIGJhY2tncm91bmQ6IGhzbCgyNDAsIDYwJSwgNSUpO1xuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5saWdodGdyZXkyfTtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzBdfSl7XG4gIGJvZHk6YmVmb3JlLCBib2R5OmFmdGVyeyBcbiAgICBtYXgtd2lkdGg6IDkwdnc7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMGRlZywjMjQyQTJFIDFweCx0cmFuc3BhcmVudCAwcHgpIDAgMCAvIGNhbGMoOTB2dy80KSBhdXRvO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMV19KXtcbmJvZHk6YmVmb3JlLCBib2R5OmFmdGVyeyBcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgwZGVnLCMxOTFEMjAgMXB4LHRyYW5zcGFyZW50IDBweCkgMCAwIC8gY2FsYyg5MHZ3LzIpIGF1dG87XG4gIH1cbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICBsaW5lLWhlaWdodDogODBweDtcbiAgICBmb250LXdlaWdodDogJHt0aGVtZS5mb250V2VpZ2h0cy5ib2xkfTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsxXX0pe1xuaDEge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICBmb250LXdlaWdodDogJHt0aGVtZS5mb250V2VpZ2h0cy5ib2xkfTtcbn1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsyXX0pe1xuaDEge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBmb250LXdlaWdodDogJHt0aGVtZS5mb250V2VpZ2h0cy5ib2xkfTtcbn1cbn1cblxuaDIge1xuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250U2l6ZXNbMV19O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMTRlbTtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBmb250LXdlaWdodDogJHt0aGVtZS5mb250V2VpZ2h0cy5zZW1pYm9sZH07XG59XG5cbmgzIHtcbiAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udFNpemVzWzJdfTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDEyZW07XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cbmg0IHtcbiAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udFNpemVzWzRdfTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDEwZW07XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUuZm9udFdlaWdodHMucmVndWxhcn07XG59XG5cbmg1IHtcbiAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udFNpemVzWzVdfTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDA4ZW07XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbmg2IHtcbiAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udFNpemVzWzZdfTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDAyZW07XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUuZm9udFdlaWdodHMuc2VtaWJvbGR9O1xufVxuXG5wIHtcbiAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udFNpemVzWzRdfTtcbiAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMGVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLmZvbnRXZWlnaHRzLnJlZ3VsYXJ9O1xuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0U2Vjb25kYXJ5fTtcbn1cblxuc3BhbiB7XG4gICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnRTaXplc1s2XX07XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAwNGVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLmZvbnRXZWlnaHRzLnJlZ3VsYXJ9O1xufVxuXG5hIHtcbiAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udFNpemVzWzVdfTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDA2ZW07XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUuZm9udFdlaWdodHMucmVndWxhcn07XG4gICAgY29sb3I6IHJnYig2NCwxNTYsMjU1KTtcbn1cblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGVzO1xuIiwiY29uc3QgdGhlbWUgPSB7XG4gIG1heFdpZHRoOiBcIjgwMHB4XCIsXG4gIGJyZWFrcG9pbnQ6IFtcbiAgICBcIjExNTBweFwiLCAvLyAwXG4gICAgXCI4OTBweFwiLCAvLyAxXG4gICAgXCI2MDBweFwiLCAvLyAyXG4gICAgXCIzNjBweFwiLCAvLyAzXG4gIF0sXG4gIHNwYWNlOiBbXG4gICAgXCIwcHhcIiwgLy8gMFxuICAgIFwiNHB4XCIsIC8vIDFcbiAgICBcIjhweFwiLCAvLyAyXG4gICAgXCIxNnB4XCIsIC8vIDNcbiAgICBcIjI0cHhcIiwgLy8gNFxuICAgIFwiMzJweFwiLCAvLyA1XG4gICAgXCI0OHB4XCIsIC8vIDZcbiAgICBcIjY0cHhcIiwgLy8gN1xuICAgIFwiOTZweFwiLCAvLyA4XG4gICAgXCIxMjhweFwiLCAvLyA5XG4gICAgXCIxNjBweFwiLCAvLyAxMFxuICBdLFxuICBmb250U2l6ZXM6IFtcbiAgICBcIjJyZW1cIiwgLy8gMCAzMnB4XG4gICAgXCIxLjg3NXJlbVwiLCAvLyAxIDMwcHhcbiAgICBcIjEuNXJlbVwiLCAvLyAyIDI0cHhcbiAgICBcIjEuMjVyZW1cIiwgLy8gMyAyMHB4XG4gICAgXCIxLjEyNXJlbVwiLCAvLyA0IDE4cHhcbiAgICBcIjFyZW1cIiwgLy8gNSAxNnB4XG4gICAgXCIwLjg3NXJlbVwiLCAvLyA2IDE0cHhcbiAgICBcIjAuNzVyZW1cIiwgLy8gNyAxMnB4XG4gIF0sXG4gIGZvbnRXZWlnaHRzOiB7XG4gICAgcmVndWxhcjogNDAwLFxuICAgIG1lZGl1bTogNTAwLFxuICAgIHNlbWlib2xkOiA2MDAsXG4gICAgYm9sZDogNzAwLFxuICB9LFxuICBjb2xvcnM6IHtcbiAgICBsaWdodGdyZXk0OiBcIiNGOUZBRkJcIixcbiAgICBsaWdodGdyZXkzOiBcIiNGNEY2RjhcIixcbiAgICBsaWdodGdyZXkyOiBcIiNERkUzRThcIixcbiAgICBsaWdodGdyZXkxOiBcIiNDNENERDVcIixcbiAgICBncmV5NDogXCIjOTE5RUFCXCIsXG4gICAgZ3JleTM6IFwiIzYzNzM4MVwiLFxuICAgIGdyZXkyOiBcIiM0NTRGNUJcIixcbiAgICBncmV5MTogXCIjMjEyQjM2XCIsXG4gICAgdGV4dDogXCIjRjlGQUZCXCIsXG4gICAgdGV4dFNlY29uZGFyeTogXCIjREZFM0U4XCIsXG4gICAgdGV4dExpbms6IFwicmdiKDY0LDE1NiwyNTUpXCIsXG4gIH0sXG4gIGFuaW1hdGlvbnM6IHtcbiAgICBkZWZhdWx0OiBcImVhc2UgMC40cztcIixcbiAgICBob3ZlcjogXCIwLjM1cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZyYW1lci1tb3Rpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sb3R0aWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=