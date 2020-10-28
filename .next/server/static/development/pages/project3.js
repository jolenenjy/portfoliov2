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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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

/***/ "./pages/project3.tsx":
/*!****************************!*\
  !*** ./pages/project3.tsx ***!
  \****************************/
/*! exports provided: Project3, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project3", function() { return Project3; });
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
var _jsxFileName = "/Users/jolene.ng/portfoliov2/pages/project3.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class Project3 extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.Introduction = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.Research = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.Design = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
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

    const scrollResult = () => window.scrollTo({
      top: this.Result.current.offsetTop - 120,
      behavior: "smooth"
    });

    const test = () => __jsx(Nav, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
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
        lineNumber: 45,
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
        lineNumber: 48,
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
        lineNumber: 51,
        columnNumber: 9
      }
    }, "Design Considerations"), __jsx(NavLink, {
      style: {
        color: "white"
      },
      onClick: scrollResult,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }
    }, "Results"));

    return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "Jolene Ng | Parents Gateway",
      project: true,
      children2: test,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 7
      }
    }, __jsx(_components_topsection__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Parents Gateway",
      title2: "",
      title3: "Communications platform",
      subtitle: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }
    }), __jsx(Paragraph, {
      ref: this.Introduction,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }
    }, "Parents Gateway is a product that strengthens school-home partnership to support students in their education journey. Developed together with the Ministry of Education, the product aims to reduce the administrative workload for teachers."), __jsx(Paragraph2, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }
    }, __jsx("a", {
      href: "https://pg.moe.edu.sg/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }
    }, "View Site"), __jsx("a", {
      style: {
        marginLeft: 24
      },
      href: "https://play.google.com/store/apps/details?id=com.moe.pgp&hl=en_SG",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }
    }, "Play Store"), __jsx("a", {
      style: {
        marginLeft: 24
      },
      href: "https://apps.apple.com/sg/app/parents-gateway/id1267198708#?platform=iphone",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }
    }, "App Store")), __jsx(Subtitle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }
    }, "My role"), __jsx(Paragraph, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }
    }, "Part of a team of 2 to design the mobile and web app (react native & react). Being in a small team, I was involved in a breadth of work from product strategy, branding to analytics."), __jsx(Paragraph2, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }
    }, "Additionally, with both of us being designers who enjoy working in code, we also often jump in to assist with the frontend, be it setting base styles or fixing minor bugs."), __jsx(FullImg, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }
    }), __jsx(Subtitle, {
      ref: this.Research,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }
    }, "The challenge"), __jsx(Paragraph, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }
    }, "Teachers in Singapore are overly bogged down by administrative matters in their day to day work. This takes away from their ability to focus on their core job \u2013 education. Thus, the question for us was:"), __jsx(Quote, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }
    }, "\"How might we help teachers reduce time spent on administrative work so that they can focus on teaching?\""), __jsx(Subtitle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }
    }, "What administrative problem?"), __jsx(Paragraph, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }
    }, "To uncover the main issues teachers were facing, we conducted interviews and mapped the various administrative matters they have to deal with across the school year."), __jsx(FullImg2, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }
    }), __jsx(Paragraph3, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }
    }, "After a few session with various teachers, we found that", " ", __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 11
      }
    }, "sending announcements and collecting consent forms from parents"), " ", "was the most time-consuming activity (most frequent across the year + difficulty)."), __jsx(Paragraph2, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }
    }, "Today, teachers distribute physical copies of a consent form or announcement to students to pass to their parents. This leads to issues including lost forms, forgotten forms and so on, causing teachers to spend a lot of time chasing for them. Parents, too, face similar issues like retrieving the form from their child's messy bag."), __jsx(FullImg3, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }
    }), __jsx(Paragraph3, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }
    }, "Thus, we decided to tackle this problem space first."), __jsx(Paragraph2, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }
    }, "Given that the teachers will be dealing with a large amount of information, we choose to first develop a web app for schools. On the other hand, with the frequent and unpredictable timing of school announcements, a mobile app for parents made more sense."), __jsx(Subtitle, {
      ref: this.Design,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }
    }, "Design"), __jsx(Paragraph, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }
    }, "I started by working closely with the product manager to understand the deatiled feature prioritisation before mapping out rough flows. Both mobile and web products were designed incrementally through rounds of iterations and testings. View an early cut of the mobile app flow ", __jsx("a", {
      href: "https://overflow.io/s/E33Y22/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 16
      }
    }, "here")), __jsx(FullImg4, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }
    }), __jsx(Paragraph3, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }
    }, "Along the way, there were some interesting design challenges we encountered:"), __jsx(Subtitle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 9
      }
    }, "Consideration #1:"), __jsx(Quote2, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }
    }, "How might we protect individuals with secret children?"), __jsx(Paragraph, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }
    }, "While mapping out the user flow, we believed that directly displaying the retrieved children's name based on the user's ID was a natural thing to do. However, we soon had feedback that this was a problem for individuals with children their spouses are unaware of. As the government, it is not our intention to break families apart by accidentally revealing family secrets."), __jsx(Paragraph2, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }
    }, "Thus, we added a page to the flow to let the user know we will be pulling this data and let them be in control of when this information is shown. Users can then make the call to either proceed with onboarding at a later date or move ahead."), __jsx(FullImg5, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }
    }), __jsx(Subtitle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 9
      }
    }, "Consideration #2:"), __jsx(Quote2, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }
    }, "How might we help admins differentiate between the tasks they do as a user and an admin?"), __jsx(Paragraph, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }
    }, "For schools in Singapore, the administrator of the system is often, too, a teacher. This means that at any one time, an individual could be juggling both their tasks as a teacher and as an admin. From research we found that these users usually deal with these tasks separately and view them as different responsibilities. Hence, we decided to clearly separate the two."), __jsx(Paragraph2, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }
    }, "This meant that the teacher would be able to first complete the tasks they need to do as a teacher, then cleanly switch over to the admin view to work on admin tasks, matching their mental model."), __jsx(FullImg6, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 9
      }
    }), __jsx(Subtitle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 9
      }
    }, "Design Snapshot"), __jsx(FullImg7, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 9
      }
    }), __jsx(Subtitle, {
      ref: this.Result,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 9
      }
    }, "Results"), __jsx(Paragraph, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }
    }, "The product is now in use by all public school in singapore and have seen over 100k announcements and forms sent. Here's an app store review from a parent:"), __jsx(Quote, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 9
      }
    }, "\"Information is at my fingertips, no need to deal with papers. Very useful and organised.\""), __jsx(FullImg8, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 9
      }
    }), __jsx(Subtitle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 9
      }
    }, "Reflection "), __jsx(Paragraph, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 9
      }
    }, "I am grateful to have been on a product team where I was empowered as a designer to guide the product direction. Along the way, I have learned a lot on what it takes to work with developers and in particular, how to design for react and react native apps."), __jsx(Paragraph2, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 9
      }
    }, "While I did not elaborate on the design considerations for the web app here, that is an area I learnt a lot about. I anticipate seeing how the product will improve with future releases."), __jsx(FullImg9, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 9
      }
    }), __jsx(Subtitle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 9
      }
    }, "Other Projects "), __jsx(_components_otherprojects__WEBPACK_IMPORTED_MODULE_5__["default"], {
      url3: "/project4",
      proj3: "Housing resale portal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 9
      }
    }));
  }

}
const Nav = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "project3__Nav",
  componentId: "sc-1jx6io5-0"
})(["display:flex;flex-direction:column;justify-content:space-between;margin:16px 0px 0 0;"]);
const NavLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "project3__NavLink",
  componentId: "sc-1jx6io5-1"
})(["position:relative;width:200px;padding:8px 8px;cursor:pointer;border-radius:8px;transition:", ";:hover{background:rgba(31,31,54,0.4);opacity:1;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].animations.default);
const Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h4.withConfig({
  displayName: "project3__Subtitle",
  componentId: "sc-1jx6io5-2"
})(["margin-top:48px;font-weight:", ";color:", ";@media (max-width:", "){margin-top:48px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].fontWeights.semibold, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.lightgrey3, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[2]);
const Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "project3__Paragraph",
  componentId: "sc-1jx6io5-3"
})(["margin-top:8px;@media (max-width:", "){margin-top:16px;}a{font-size:", ";}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[2], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].fontSizes[4]);
const Paragraph2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "project3__Paragraph2",
  componentId: "sc-1jx6io5-4"
})(["margin-top:16px;color:", ";@media (max-width:", "){margin-top:16px;}a{font-size:", ";}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.lightgrey1, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[2], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].fontSizes[4]);
const Paragraph3 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "project3__Paragraph3",
  componentId: "sc-1jx6io5-5"
})(["margin-top:40px;@media (max-width:", "){margin-top:16px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[2]);
const Quote = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "project3__Quote",
  componentId: "sc-1jx6io5-6"
})(["margin-top:16px;color:", ";@media (max-width:", "){margin-top:16px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.lightgrey1, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[2]);
const Quote2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "project3__Quote2",
  componentId: "sc-1jx6io5-7"
})(["margin-top:12px;margin-bottom:12px;color:", ";@media (max-width:", "){margin-top:24px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.lightgrey1, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[2]);
const FullImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "project3__FullImg",
  componentId: "sc-1jx6io5-8"
})(["width:100%;height:267.45px;border-radius:12px;margin-top:48px;margin-bottom:56px;background:#7cb1c5;background-image:url(/pg-1.png);background-size:contain;background-position:center;background-repeat:no-repeat;@media (max-width:", "){height:160px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[2]);
const FullImg2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "project3__FullImg2",
  componentId: "sc-1jx6io5-9"
})(["width:100%;height:337px;border-radius:12px;margin-top:48px;margin-bottom:48px;background:#ffffff;background-image:url(/pg-2.png);background-size:contain;background-position:center;background-repeat:no-repeat;@media (max-width:", "){height:220px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[2]);
const FullImg3 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "project3__FullImg3",
  componentId: "sc-1jx6io5-10"
})(["width:100%;height:267.45px;border-radius:12px;margin-top:48px;margin-bottom:48px;background-image:url(/pg-3.png);background-size:contain;background-position:center;background-repeat:no-repeat;@media (max-width:", "){height:180px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[2]);
const FullImg4 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "project3__FullImg4",
  componentId: "sc-1jx6io5-11"
})(["width:100%;height:516px;border-radius:12px;margin-top:32px;margin-bottom:8px;background-image:url(/pg-4.png);background-size:contain;background-position:center;background-repeat:no-repeat;@media (max-width:", "){height:500px;}@media (max-width:", "){margin-top:8px;height:330px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[1], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[2]);
const FullImg5 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "project3__FullImg5",
  componentId: "sc-1jx6io5-12"
})(["width:100%;height:337px;border-radius:12px;margin-top:36px;margin-bottom:56px;background:#f2f2f2;background-image:url(/pg-5.png);background-size:contain;background-position:center;background-repeat:no-repeat;@media (max-width:", "){height:180px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[2]);
const FullImg6 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "project3__FullImg6",
  componentId: "sc-1jx6io5-13"
})(["width:100%;height:190px;border-radius:12px;margin-top:36px;margin-bottom:56px;background-image:url(/pg-6.png);background-size:contain;background-position:center;background-repeat:no-repeat;@media (max-width:", "){height:120px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[2]);
const FullImg7 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "project3__FullImg7",
  componentId: "sc-1jx6io5-14"
})(["width:100%;height:700px;border-radius:12px;margin-top:32px;margin-bottom:56px;background-image:url(/pg-7.png);background-size:contain;background-position:center;background-repeat:no-repeat;@media (max-width:", "){height:400px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[2]);
const FullImg8 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "project3__FullImg8",
  componentId: "sc-1jx6io5-15"
})(["width:100%;height:250px;border-radius:12px;margin-top:32px;margin-bottom:48px;background-image:url(/pg-8.png);background-size:contain;background-position:center;background-repeat:no-repeat;@media (max-width:", "){height:150px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[2]);
const FullImg9 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "project3__FullImg9",
  componentId: "sc-1jx6io5-16"
})(["width:100%;height:320px;border-radius:12px;margin-top:48px;margin-bottom:48px;background:#7cb1c5;background-image:url(/pg-9.png);background-size:cover;background-position:center;background-repeat:no-repeat;@media (max-width:", "){height:200px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakpoint[2]);
/* harmony default export */ __webpack_exports__["default"] = (Project3);

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

/***/ 6:
/*!**********************************!*\
  !*** multi ./pages/project3.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jolene.ng/portfoliov2/pages/project3.tsx */"./pages/project3.tsx");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dyaWQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vdGhlcnByb2plY3RzLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpZGViYXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2lkZWJhcjIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdG9wc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9qZWN0My50c3giLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2dsb2JhbHN0eWxlcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3RoZW1lLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZyYW1lci1tb3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWxvdHRpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiXSwibmFtZXMiOlsiRm9vdGVyIiwiUmVhY3QiLCJyZW5kZXIiLCJGb290ZXJDb250YWluZXIiLCJzdHlsZWQiLCJmb290ZXIiLCJ0aGVtZSIsInNwYWNlIiwiY29sb3JzIiwiZ3JleTMiLCJicmVha3BvaW50IiwiU29jaWFscyIsImRpdiIsIlNvY2lhbEljb24iLCJzdmciLCJncmV5MiIsImFuaW1hdGlvbnMiLCJkZWZhdWx0IiwiRm9vdGVyMiIsImRlZmF1bHRPcHRpb25zIiwibG9vcCIsImF1dG9wbGF5IiwiYW5pbWF0aW9uRGF0YSIsInJlbmRlcmVyU2V0dGluZ3MiLCJwcmVzZXJ2ZUFzcGVjdFJhdGlvIiwiVGV4dENvbnRhaW5lciIsInB4IiwibnVtYmVyIiwiR3JpZENvbnRhaW5lciIsInByb3BzIiwiZ2FwIiwiY29sdW1ucyIsIkdyaWQiLCJMaW5rcyIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbG9yIiwicGF0aG5hbWUiLCJIZWFkZXIiLCJtYXJnaW5Cb3R0b20iLCJzaG93SW5mbyIsInRleHRTZWNvbmRhcnkiLCJTaWRlYmFyQ29udGFpbmVyIiwiTG9nbyIsImEiLCJOYW1lIiwiTmF2IiwibW90aW9uIiwiTmF2TGluayIsIlNob3dJbmZvIiwic2Nyb2xsWSIsInVzZVZpZXdwb3J0U2Nyb2xsIiwiZmlyc3RSYW5nZSIsInNlY29uZFJhbmdlIiwib3BhY2l0eVJhbmdlIiwiTW92ZVJhbmdlIiwiZmlyc3RPcCIsInVzZVRyYW5zZm9ybSIsImZpcnN0TW92ZSIsInNlY29uZE9wIiwic2Vjb25kTW92ZSIsImRpc3BsYXkiLCJob21lIiwibWFyZ2luVG9wIiwib3BhY2l0eSIsInRyYW5zbGF0ZVkiLCJTY3JvbGxJbmRpY2F0b3IiLCJ3aWR0aCIsInNldFdpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInNjcm9sbFlQcm9ncmVzcyIsIlNjcm9sbFJhbmdlIiwiV2lkdGhSYW5nZSIsIlNjcm9sbFdpZHRoIiwiTGF5b3V0IiwidGl0bGUiLCJwcm9qZWN0IiwiY2hpbGRyZW4yIiwiY2hpbGRyZW4iLCJhYm91dCIsIkJvZHlDb250YWluZXIiLCJDb250ZW50Q29udGFpbmVyIiwibWF4V2lkdGgiLCJUaW1lUmFuZ2UiLCJoNiIsImZvbnRXZWlnaHRzIiwic2VtaWJvbGQiLCJncmV5NCIsIkNvbXBhbnlUaXRsZSIsImgyIiwiQ29tcGFueURlc2MiLCJoNCIsInJlZ3VsYXIiLCJsaWdodGdyZXkxIiwiTGF5b3V0R3JpZCIsIlRpbWVTZWN0aW9uIiwiU2Nyb2xsRGl2IiwiT3RoZXJQcm9qZWN0cyIsInVybDEiLCJwcm9qMSIsInVybDIiLCJwcm9qMiIsInVybDMiLCJwcm9qMyIsImZvbnRTaXplcyIsInRleHRMaW5rIiwiZm9udFdlaWdodCIsIm1lZGl1bSIsIlNpZGViYXIiLCJEaXZpZGVyIiwiU2lkZWJhcjIiLCJUb3BTZWN0aW9uIiwidGl0bGUyIiwidGl0bGUzIiwic3VidGl0bGUiLCJUb3BDb250YWluZXIiLCJBY2NlbnRUaXRsZSIsImgxIiwiRGFya1RpdGxlIiwiU3VidGl0bGUiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJfcmVhY3QiLCJfdXJsIiwiX3V0aWxzIiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiaXNMb2NhbCIsImhyZWYiLCJ1cmwiLCJwYXJzZSIsIm9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwiaG9zdCIsInByb3RvY29sIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRGdW5jIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRVcmwiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIm9ic2VydmVyIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJ1bmRlZmluZWQiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaGFzIiwidGFyZ2V0IiwiY2IiLCJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiZGVsZXRlIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImVsIiwib2JzZXJ2ZSIsInNldCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIkxpbmsiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInAiLCJjbGVhblVwTGlzdGVuZXJzIiwiZm9ybWF0VXJscyIsImFzSHJlZiIsImFkZEJhc2VQYXRoIiwibGlua0NsaWNrZWQiLCJlIiwibm9kZU5hbWUiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsb2NhdGlvbiIsInJlc29sdmUiLCJwcmV2ZW50RGVmYXVsdCIsInNjcm9sbCIsImluZGV4T2YiLCJyZXBsYWNlIiwic2hhbGxvdyIsInRoZW4iLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJkb2N1bWVudCIsImJvZHkiLCJmb2N1cyIsInByZWZldGNoIiwid2FybiIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJwYXJzZWRIcmVmIiwicGFyc2VkQXMiLCJyZXNvbHZlZEhyZWYiLCJoYW5kbGVSZWYiLCJyZWYiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwiam9pbiIsIm9wdGlvbnMiLCJwYXRocyIsImNhdGNoIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY3VycmVudCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJwYXNzSHJlZiIsInR5cGUiLCJwcm9jZXNzIiwiY2xvbmVFbGVtZW50IiwiZXhlY09uY2UiLCJQcm9wVHlwZXMiLCJleGFjdCIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJib29sIiwiZWxlbWVudCIsInByb3BOYW1lIiwidmFsdWUiLCJfZGVmYXVsdCIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsImNyZWF0ZVJvdXRlciIsIndpdGhSb3V0ZXIiLCJSb3V0ZXIiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwiYXJndW1lbnRzIiwiZXZlbnQiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJFcnJvciIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiX2xlbiIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiYXNzaWduIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJtaXR0IiwiYWxsIiwiY3JlYXRlIiwiaGFuZGxlciIsInB1c2giLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsInNsaWNlIiwibWFwIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwidXJsXzEiLCJtaXR0XzEiLCJ1dGlsc18xIiwiaXNfZHluYW1pY18xIiwicm91dGVfbWF0Y2hlcl8xIiwicm91dGVfcmVnZXhfMSIsImJhc2VQYXRoIiwicGF0aCIsImRlbEJhc2VQYXRoIiwic3Vic3RyIiwidG9Sb3V0ZSIsInByZXBhcmVSb3V0ZSIsImZldGNoTmV4dERhdGEiLCJxdWVyeSIsImlzU2VydmVyUmVuZGVyIiwiYXR0ZW1wdHMiLCJnZXRSZXNwb25zZSIsImZldGNoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJjcmVkZW50aWFscyIsInJlcyIsIm9rIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJjb2RlIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwic2RjIiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJpc1NzciIsImFzUGF0aCIsIl9icHMiLCJfZ2V0U3RhdGljRGF0YSIsIlByb21pc2UiLCJfZ2V0U2VydmVyRGF0YSIsInJvdXRlIiwiY29tcG9uZW50cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiaXNEeW5hbWljUm91dGUiLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJfcmV3cml0ZVVybEZvck5leHRFeHBvcnQiLCJ1cGRhdGUiLCJuZXdEYXRhIiwibm90aWZ5IiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJjaGFuZ2UiLCJtZXRob2QiLCJfYXMiLCJyZWplY3QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwidXJsSXNOZXciLCJhc1BhdGhuYW1lIiwicm91dGVSZWdleCIsImdldFJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwiZ2V0Um91dGVNYXRjaGVyIiwibWlzc2luZ1BhcmFtcyIsImtleXMiLCJncm91cHMiLCJmaWx0ZXIiLCJwYXJhbSIsImdldFJvdXRlSW5mbyIsInJvdXRlSW5mbyIsImNhbmNlbGxlZCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwibG9hZEVycm9yRmFpbCIsImZldGNoQ29tcG9uZW50IiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsIl9nZXREYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic3BsaXQiLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJURVNUX1JPVVRFIiwidGVzdCIsInJlIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIl8iLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwicmVwZWF0IiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJub3JtYWxpemVkUm91dGUiLCJlc2NhcGVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiJDEiLCJpc0NhdGNoQWxsIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwidXNlZCIsImhvc3RuYW1lIiwicG9ydCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9hIiwicHJvdG90eXBlIiwicGFnZVByb3BzIiwidXJsT2JqZWN0S2V5cyIsImZvcm1hdCIsIlNQIiwibWVhc3VyZSIsIlByb2plY3QzIiwiSW50cm9kdWN0aW9uIiwiY3JlYXRlUmVmIiwiUmVzZWFyY2giLCJEZXNpZ24iLCJSZXN1bHQiLCJzY3JvbGxJbnRybyIsInRvcCIsIm9mZnNldFRvcCIsImJlaGF2aW9yIiwic2Nyb2xsUmVzZWFyY2giLCJzY3JvbGxEZXNpZ24iLCJzY3JvbGxSZXN1bHQiLCJtYXJnaW5MZWZ0IiwibGlnaHRncmV5MyIsIlBhcmFncmFwaCIsIlBhcmFncmFwaDIiLCJQYXJhZ3JhcGgzIiwiUXVvdGUiLCJoMyIsIlF1b3RlMiIsIkZ1bGxJbWciLCJGdWxsSW1nMiIsIkZ1bGxJbWczIiwiRnVsbEltZzQiLCJGdWxsSW1nNSIsIkZ1bGxJbWc2IiwiRnVsbEltZzciLCJGdWxsSW1nOCIsIkZ1bGxJbWc5IiwiR2xvYmFsU3R5bGVzIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJsaWdodGdyZXkyIiwiYm9sZCIsImxpZ2h0Z3JleTQiLCJncmV5MSIsInRleHQiLCJob3ZlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxNQUFOLFNBQXFCQywrQ0FB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Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL3Byb2plY3QzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCI7XG5cbmV4cG9ydCBjbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb290ZXJDb250YWluZXI+XG4gICAgICAgIDxTb2NpYWxzPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vam9sZW5lbmcvXCI+XG4gICAgICAgICAgICA8U29jaWFsSWNvblxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgIGRhdGEtcHJlZml4PVwiZmFiXCJcbiAgICAgICAgICAgICAgZGF0YS1pY29uPVwibGlua2VkaW4taW5cIlxuICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgZD1cIk0xMDAuMjggNDQ4SDcuNFYxNDguOWg5Mi44OHpNNTMuNzkgMTA4LjFDMjQuMDkgMTA4LjEgMCA4My41IDAgNTMuOGE1My43OSA1My43OSAwIDAgMSAxMDcuNTggMGMwIDI5LjctMjQuMSA1NC4zLTUzLjc5IDU0LjN6TTQ0Ny45IDQ0OGgtOTIuNjhWMzAyLjRjMC0zNC43LS43LTc5LjItNDguMjktNzkuMi00OC4yOSAwLTU1LjY5IDM3LjctNTUuNjkgNzYuN1Y0NDhoLTkyLjc4VjE0OC45aDg5LjA4djQwLjhoMS4zYzEyLjQtMjMuNSA0Mi42OS00OC4zIDg3Ljg4LTQ4LjMgOTQgMCAxMTEuMjggNjEuOSAxMTEuMjggMTQyLjNWNDQ4elwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDwvU29jaWFsSWNvbj5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9qb2xlbmVuankvXCI+XG4gICAgICAgICAgICA8U29jaWFsSWNvblxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgIGRhdGEtcHJlZml4PVwiZmFiXCJcbiAgICAgICAgICAgICAgZGF0YS1pY29uPVwiaW5zdGFncmFtXCJcbiAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMjI0LjEgMTQxYy02My42IDAtMTE0LjkgNTEuMy0xMTQuOSAxMTQuOXM1MS4zIDExNC45IDExNC45IDExNC45UzMzOSAzMTkuNSAzMzkgMjU1LjkgMjg3LjcgMTQxIDIyNC4xIDE0MXptMCAxODkuNmMtNDEuMSAwLTc0LjctMzMuNS03NC43LTc0LjdzMzMuNS03NC43IDc0LjctNzQuNyA3NC43IDMzLjUgNzQuNyA3NC43LTMzLjYgNzQuNy03NC43IDc0Ljd6bTE0Ni40LTE5NC4zYzAgMTQuOS0xMiAyNi44LTI2LjggMjYuOC0xNC45IDAtMjYuOC0xMi0yNi44LTI2LjhzMTItMjYuOCAyNi44LTI2LjggMjYuOCAxMiAyNi44IDI2Ljh6bTc2LjEgMjcuMmMtMS43LTM1LjktOS45LTY3LjctMzYuMi05My45LTI2LjItMjYuMi01OC0zNC40LTkzLjktMzYuMi0zNy0yLjEtMTQ3LjktMi4xLTE4NC45IDAtMzUuOCAxLjctNjcuNiA5LjktOTMuOSAzNi4xcy0zNC40IDU4LTM2LjIgOTMuOWMtMi4xIDM3LTIuMSAxNDcuOSAwIDE4NC45IDEuNyAzNS45IDkuOSA2Ny43IDM2LjIgOTMuOXM1OCAzNC40IDkzLjkgMzYuMmMzNyAyLjEgMTQ3LjkgMi4xIDE4NC45IDAgMzUuOS0xLjcgNjcuNy05LjkgOTMuOS0zNi4yIDI2LjItMjYuMiAzNC40LTU4IDM2LjItOTMuOSAyLjEtMzcgMi4xLTE0Ny44IDAtMTg0Ljh6TTM5OC44IDM4OGMtNy44IDE5LjYtMjIuOSAzNC43LTQyLjYgNDIuNi0yOS41IDExLjctOTkuNSA5LTEzMi4xIDlzLTEwMi43IDIuNi0xMzIuMS05Yy0xOS42LTcuOC0zNC43LTIyLjktNDIuNi00Mi42LTExLjctMjkuNS05LTk5LjUtOS0xMzIuMXMtMi42LTEwMi43IDktMTMyLjFjNy44LTE5LjYgMjIuOS0zNC43IDQyLjYtNDIuNiAyOS41LTExLjcgOTkuNS05IDEzMi4xLTlzMTAyLjctMi42IDEzMi4xIDljMTkuNiA3LjggMzQuNyAyMi45IDQyLjYgNDIuNiAxMS43IDI5LjUgOSA5OS41IDkgMTMyLjFzMi43IDEwMi43LTkgMTMyLjF6XCJcbiAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDwvU29jaWFsSWNvbj5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPFNvY2lhbEljb25cbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgICAgICAgICAgICBkYXRhLXByZWZpeD1cImZhc1wiXG4gICAgICAgICAgICAgIGRhdGEtaWNvbj1cImVudmVsb3BlXCJcbiAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIGQ9XCJNNTAyLjMgMTkwLjhjMy45LTMuMSA5LjctLjIgOS43IDQuN1Y0MDBjMCAyNi41LTIxLjUgNDgtNDggNDhINDhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4VjE5NS42YzAtNSA1LjctNy44IDkuNy00LjcgMjIuNCAxNy40IDUyLjEgMzkuNSAxNTQuMSAxMTMuNiAyMS4xIDE1LjQgNTYuNyA0Ny44IDkyLjIgNDcuNiAzNS43LjMgNzItMzIuOCA5Mi4zLTQ3LjYgMTAyLTc0LjEgMTMxLjYtOTYuMyAxNTQtMTEzLjd6TTI1NiAzMjBjMjMuMi40IDU2LjYtMjkuMiA3My40LTQxLjQgMTMyLjctOTYuMyAxNDIuOC0xMDQuNyAxNzMuNC0xMjguNyA1LjgtNC41IDkuMi0xMS41IDkuMi0xOC45di0xOWMwLTI2LjUtMjEuNS00OC00OC00OEg0OEMyMS41IDY0IDAgODUuNSAwIDExMnYxOWMwIDcuNCAzLjQgMTQuMyA5LjIgMTguOSAzMC42IDIzLjkgNDAuNyAzMi40IDE3My40IDEyOC43IDE2LjggMTIuMiA1MC4yIDQxLjggNzMuNCA0MS40elwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDwvU29jaWFsSWNvbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvU29jaWFscz5cblxuICAgICAgICA8c3Bhbj5EZXNpZ25lZCAmIGJ1aWx0IHdpdGgg4pmhPC9zcGFuPlxuICAgICAgPC9Gb290ZXJDb250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBGb290ZXJDb250YWluZXIgPSBzdHlsZWQuZm9vdGVyYFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtd2lkdGg6IDEwNDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogJHt0aGVtZS5zcGFjZVs5XX0gOHB4IDE1MHB4IDA7XG4gIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ncmV5M307XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMF19KSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzFdfSkge1xuICAgIHBhZGRpbmc6IDEwMnB4IDhweCAxMDJweCAwO1xuICB9XG5gO1xuXG5jb25zdCBTb2NpYWxzID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IFNvY2lhbEljb24gPSBzdHlsZWQuc3ZnYFxuICBoZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDAgMTZweCAwIDhweDtcbiAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmdyZXkyfTtcbiAgdHJhbnNpdGlvbjogJHt0aGVtZS5hbmltYXRpb25zLmRlZmF1bHR9O1xuICA6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzFdfSkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgTG90dGllIGZyb20gXCJyZWFjdC1sb3R0aWVcIjtcbmltcG9ydCBhbmltYXRpb25EYXRhIGZyb20gXCIuLi9wdWJsaWMvZGF0YS5qc29uXCI7XG5cbmV4cG9ydCBjbGFzcyBGb290ZXIyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgbG9vcDogZmFsc2UsXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvbkRhdGEsXG4gICAgICByZW5kZXJlclNldHRpbmdzOiB7XG4gICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW86IFwieE1pZFlNaWQgc2xpY2VcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEZvb3RlckNvbnRhaW5lcj5cbiAgICAgICAgICA8TG90dGllXG4gICAgICAgICAgICBvcHRpb25zPXtkZWZhdWx0T3B0aW9uc31cbiAgICAgICAgICAgIGhlaWdodD17MzgwfVxuICAgICAgICAgICAgd2lkdGg9ezI0MDB9XG4gICAgICAgICAgICByZXNpemVNb2RlPVwiY292ZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9vdGVyQ29udGFpbmVyPlxuICAgICAgICA8VGV4dENvbnRhaW5lcj5cbiAgICAgICAgICA8U29jaWFscz5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vam9sZW5lbmcvXCI+XG4gICAgICAgICAgICAgIDxTb2NpYWxJY29uXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgZGF0YS1wcmVmaXg9XCJmYWJcIlxuICAgICAgICAgICAgICAgIGRhdGEtaWNvbj1cImxpbmtlZGluLWluXCJcbiAgICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgZD1cIk0xMDAuMjggNDQ4SDcuNFYxNDguOWg5Mi44OHpNNTMuNzkgMTA4LjFDMjQuMDkgMTA4LjEgMCA4My41IDAgNTMuOGE1My43OSA1My43OSAwIDAgMSAxMDcuNTggMGMwIDI5LjctMjQuMSA1NC4zLTUzLjc5IDU0LjN6TTQ0Ny45IDQ0OGgtOTIuNjhWMzAyLjRjMC0zNC43LS43LTc5LjItNDguMjktNzkuMi00OC4yOSAwLTU1LjY5IDM3LjctNTUuNjkgNzYuN1Y0NDhoLTkyLjc4VjE0OC45aDg5LjA4djQwLjhoMS4zYzEyLjQtMjMuNSA0Mi42OS00OC4zIDg3Ljg4LTQ4LjMgOTQgMCAxMTEuMjggNjEuOSAxMTEuMjggMTQyLjNWNDQ4elwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICAgIDwvU29jaWFsSWNvbj5cbiAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vam9sZW5lbmp5L1wiPlxuICAgICAgICAgICAgICA8U29jaWFsSWNvblxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgIGRhdGEtcHJlZml4PVwiZmFiXCJcbiAgICAgICAgICAgICAgICBkYXRhLWljb249XCJpbnN0YWdyYW1cIlxuICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICBkPVwiTTIyNC4xIDE0MWMtNjMuNiAwLTExNC45IDUxLjMtMTE0LjkgMTE0LjlzNTEuMyAxMTQuOSAxMTQuOSAxMTQuOVMzMzkgMzE5LjUgMzM5IDI1NS45IDI4Ny43IDE0MSAyMjQuMSAxNDF6bTAgMTg5LjZjLTQxLjEgMC03NC43LTMzLjUtNzQuNy03NC43czMzLjUtNzQuNyA3NC43LTc0LjcgNzQuNyAzMy41IDc0LjcgNzQuNy0zMy42IDc0LjctNzQuNyA3NC43em0xNDYuNC0xOTQuM2MwIDE0LjktMTIgMjYuOC0yNi44IDI2LjgtMTQuOSAwLTI2LjgtMTItMjYuOC0yNi44czEyLTI2LjggMjYuOC0yNi44IDI2LjggMTIgMjYuOCAyNi44em03Ni4xIDI3LjJjLTEuNy0zNS45LTkuOS02Ny43LTM2LjItOTMuOS0yNi4yLTI2LjItNTgtMzQuNC05My45LTM2LjItMzctMi4xLTE0Ny45LTIuMS0xODQuOSAwLTM1LjggMS43LTY3LjYgOS45LTkzLjkgMzYuMXMtMzQuNCA1OC0zNi4yIDkzLjljLTIuMSAzNy0yLjEgMTQ3LjkgMCAxODQuOSAxLjcgMzUuOSA5LjkgNjcuNyAzNi4yIDkzLjlzNTggMzQuNCA5My45IDM2LjJjMzcgMi4xIDE0Ny45IDIuMSAxODQuOSAwIDM1LjktMS43IDY3LjctOS45IDkzLjktMzYuMiAyNi4yLTI2LjIgMzQuNC01OCAzNi4yLTkzLjkgMi4xLTM3IDIuMS0xNDcuOCAwLTE4NC44ek0zOTguOCAzODhjLTcuOCAxOS42LTIyLjkgMzQuNy00Mi42IDQyLjYtMjkuNSAxMS43LTk5LjUgOS0xMzIuMSA5cy0xMDIuNyAyLjYtMTMyLjEtOWMtMTkuNi03LjgtMzQuNy0yMi45LTQyLjYtNDIuNi0xMS43LTI5LjUtOS05OS41LTktMTMyLjFzLTIuNi0xMDIuNyA5LTEzMi4xYzcuOC0xOS42IDIyLjktMzQuNyA0Mi42LTQyLjYgMjkuNS0xMS43IDk5LjUtOSAxMzIuMS05czEwMi43LTIuNiAxMzIuMSA5YzE5LjYgNy44IDM0LjcgMjIuOSA0Mi42IDQyLjYgMTEuNyAyOS41IDkgOTkuNSA5IDEzMi4xczIuNyAxMDIuNy05IDEzMi4xelwiXG4gICAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9Tb2NpYWxJY29uPlxuICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8U29jaWFsSWNvblxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgIGRhdGEtcHJlZml4PVwiZmFzXCJcbiAgICAgICAgICAgICAgICBkYXRhLWljb249XCJlbnZlbG9wZVwiXG4gICAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1MTIgNTEyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNNTAyLjMgMTkwLjhjMy45LTMuMSA5LjctLjIgOS43IDQuN1Y0MDBjMCAyNi41LTIxLjUgNDgtNDggNDhINDhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4VjE5NS42YzAtNSA1LjctNy44IDkuNy00LjcgMjIuNCAxNy40IDUyLjEgMzkuNSAxNTQuMSAxMTMuNiAyMS4xIDE1LjQgNTYuNyA0Ny44IDkyLjIgNDcuNiAzNS43LjMgNzItMzIuOCA5Mi4zLTQ3LjYgMTAyLTc0LjEgMTMxLjYtOTYuMyAxNTQtMTEzLjd6TTI1NiAzMjBjMjMuMi40IDU2LjYtMjkuMiA3My40LTQxLjQgMTMyLjctOTYuMyAxNDIuOC0xMDQuNyAxNzMuNC0xMjguNyA1LjgtNC41IDkuMi0xMS41IDkuMi0xOC45di0xOWMwLTI2LjUtMjEuNS00OC00OC00OEg0OEMyMS41IDY0IDAgODUuNSAwIDExMnYxOWMwIDcuNCAzLjQgMTQuMyA5LjIgMTguOSAzMC42IDIzLjkgNDAuNyAzMi40IDE3My40IDEyOC43IDE2LjggMTIuMiA1MC4yIDQxLjggNzMuNCA0MS40elwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICAgIDwvU29jaWFsSWNvbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L1NvY2lhbHM+XG5cbiAgICAgICAgICA8c3Bhbj5EZXNpZ25lZCAmIGJ1aWx0IHdpdGgg4pmhPC9zcGFuPlxuICAgICAgICA8L1RleHRDb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IEZvb3RlckNvbnRhaW5lciA9IHN0eWxlZC5mb290ZXJgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogODBweDtcbmA7XG5cbmNvbnN0IFRleHRDb250YWluZXIgPSBzdHlsZWQuZm9vdGVyYFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAgYXV0bztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAtODBweDtcbiAgcGFkZGluZzogMHB4IDhweCAxNTBweCA4cHg7XG4gIG1heC13aWR0aDogMTA0MHB4O1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZ3JleTN9O1xuICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzFdfSkge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLXRvcDogLTYwcHg7XG4gICAgcGFkZGluZzogMHB4IDhweCA4MHB4IDhweDtcbiAgfVxuYDtcblxuY29uc3QgU29jaWFscyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBTb2NpYWxJY29uID0gc3R5bGVkLnN2Z2BcbiAgaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiAwIDE2cHggMCA4cHg7XG4gIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ncmV5Mn07XG4gIHRyYW5zaXRpb246ICR7dGhlbWUuYW5pbWF0aW9ucy5kZWZhdWx0fTtcbiAgOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsxXX0pIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXIyO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBnYXA/OiBudW1iZXI7XG4gIGNvbHVtbnM/OiBzdHJpbmc7XG4gIFtwcm9wTmFtZTogc3RyaW5nXToge307XG59XG5cbmZ1bmN0aW9uIHB4KG51bWJlcikge1xuICByZXR1cm4gYCR7bnVtYmVyfXB4YDtcbn1cblxuY29uc3QgR3JpZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBnYXA6ICR7KHByb3BzKSA9PiBweChwcm9wcy5nYXApfTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAkeyhwcm9wcykgPT4gcHJvcHMuY29sdW1uc307XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHcmlkKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7IGdhcCA9IDAsIGNvbHVtbnMgPSBcIjFmclwiIH0gPSBwcm9wcztcbiAgcmV0dXJuIDxHcmlkQ29udGFpbmVyIGdhcD17Z2FwfSBjb2x1bW5zPXtjb2x1bW5zfSB7Li4ucHJvcHN9IC8+O1xufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc2hvd0luZm8/OiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBMaW5rcygpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHJldHVybiAoXG4gICAgPE5hdj5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGNvbG9yOiByb3V0ZXIucGF0aG5hbWUgPT0gXCIvXCIgPyBcIndoaXRlXCIgOiB0aGVtZS5jb2xvcnMuZ3JleTMsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEhvbWVcbiAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj1cIi9wbGF5Z3JvdW5kXCI+XG4gICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvcGxheWdyb3VuZFwiID8gXCJ3aGl0ZVwiIDogdGhlbWUuY29sb3JzLmdyZXkzLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBQbGF5Z3JvdW5kXG4gICAgICAgIDwvTmF2TGluaz5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgY29sb3I6IHJvdXRlci5wYXRobmFtZSA9PSBcIi9hYm91dFwiID8gXCJ3aGl0ZVwiIDogdGhlbWUuY29sb3JzLmdyZXkzLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBBYm91dFxuICAgICAgICA8L05hdkxpbms+XG4gICAgICA8L0xpbms+XG4gICAgPC9OYXY+XG4gICk7XG59XG5cbmV4cG9ydCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8U2lkZWJhckNvbnRhaW5lclxuICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IHRoaXMucHJvcHMuc2hvd0luZm8gPyA1NSA6IC04MiB9fVxuICAgICAgPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxMb2dvPlxuICAgICAgICAgICAgPE5hbWUgdmlld0JveD1cIjAgMCAzMzMgMTYxXCI+XG4gICAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgICAgaWQ9XCJQYWdlLTFcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT17dGhlbWUuY29sb3JzLnRleHRTZWNvbmRhcnl9XG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgICAgICBpZD1cIkFzc2V0LTNcIlxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMuMDAwMDAwLCA0LjAwMDAwMClcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI2XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTI0LjIxLDYyLjU3IEw4OC4yMSwzNC41NyBDODguMjEsMzQuNTcgNDMuMDIsMTY1LjMyIDIuMjEsMTUyLjU3IEMtMTMuNzksMTQ3LjU3IDg3LjU5LDc2LjU3IDk1LjIxLDc2LjU3IEMxMTAuMjEsNzYuNTcgMTAwLjM5LDExOS44MiA4Mi4yMSwxMDguNTcgQzYxLjIxLDk1LjU3IDE0NC4yMSwyMS41NyAxNDYuMjEsMi41NyBDMTQ4LjIxLC0xNi40MyAxMDQuMjEsMTAxLjU3IDExOS4yMSwxMTEuNTcgQzEzNC4yMSwxMjEuNTcgMTcwLjIxLDU2LjU3IDE2My4yMSw1NC41NyBDMTU2LjIxLDUyLjU3IDEzMS4yMSw5NC41NyAxNDQuMjEsMTA2LjU3IEMxNTcuMjEsMTE4LjU3IDE3NC4yMSw2NS41NyAxNzQuMjEsNjUuNTcgTDE2NS4yMSwxMDMuNTcgQzE2NS4yMSwxMDMuNTcgMTg4LjIxLDU5LjU3IDE5Mi4yMSw5NS41NyBDMTk2LjIxLDEzMS41NyAyMjAuMjEsNjcuNTcgMjE1LjIxLDU4LjU3IEMyMTAuMjEsNDkuNTcgMTk0LjIxLDEwMC41NyAyMTEuMjEsMTAxLjU3IEMyMjguMjEsMTAyLjU3IDI0OC4yMSw4NS41NyAyNjEuMjEsODUuNTcgQzI3NC4yMSw4NS41NyAyODEuMjEsODkuNTcgMjg4LjIxLDg5LjU3IEMyOTUuMjEsODkuNTcgMzA3LjIxLDg1LjU3IDMwNy4yMSw4NS41N1wiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aFwiXG4gICAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgPGxpbmVcbiAgICAgICAgICAgICAgICAgICAgeDE9XCIzMjYuMzFcIlxuICAgICAgICAgICAgICAgICAgICB5MT1cIjc4LjAxXCJcbiAgICAgICAgICAgICAgICAgICAgeDI9XCIzMjYuMjFcIlxuICAgICAgICAgICAgICAgICAgICB5Mj1cIjc3LjU3XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJQYXRoXCJcbiAgICAgICAgICAgICAgICAgID48L2xpbmU+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L05hbWU+XG4gICAgICAgICAgPC9Mb2dvPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9TaWRlYmFyQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgU2lkZWJhckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogaHNsKDI0MCwgNjAlLCA1JSk7XG4gIHotaW5kZXg6IDEwMDA7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMV19KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzNdfSkge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogODBweDtcbiAgfVxuYDtcblxuY29uc3QgTG9nbyA9IHN0eWxlZC5hYFxuICBwYWRkaW5nOiAwIDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbM119KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgTmFtZSA9IHN0eWxlZC5zdmdgXG4gIHdpZHRoOiA3MHB4O1xuYDtcblxuY29uc3QgTmF2ID0gc3R5bGVkKG1vdGlvbi5kaXYpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmNvbnN0IE5hdkxpbmsgPSBzdHlsZWQobW90aW9uLmEpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDEycHggMTJweDtcbiAgdHJhbnNpdGlvbjogJHt0aGVtZS5hbmltYXRpb25zLmRlZmF1bHR9O1xuICA6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi9zaWRlYmFyXCI7XG5pbXBvcnQgU2lkZWJhcjIgZnJvbSBcIi4vc2lkZWJhcjJcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IEZvb3RlcjIgZnJvbSBcIi4vZm9vdGVyMlwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvZ3JpZFwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCBHbG9iYWxTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9nbG9iYWxzdHlsZXNcIjtcbmltcG9ydCB7IG1vdGlvbiwgdXNlVmlld3BvcnRTY3JvbGwsIHVzZVRyYW5zZm9ybSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICBjaGlsZHJlbjI/OiBSZWFjdC5SZWFjdE5vZGU7XG4gIGhvbWU/OiBib29sZWFuO1xuICBhYm91dD86IGJvb2xlYW47XG4gIHByb2plY3Q/OiBib29sZWFuO1xufVxuXG5jb25zdCBTaG93SW5mbyA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHNjcm9sbFkgfSA9IHVzZVZpZXdwb3J0U2Nyb2xsKCk7XG4gIGNvbnN0IGZpcnN0UmFuZ2UgPSBbMCwgMzQwLCA0MzAsIDUyMF07XG4gIGNvbnN0IHNlY29uZFJhbmdlID0gWzAsIDg0MCwgOTMwLCAxMDIwXTtcbiAgY29uc3Qgb3BhY2l0eVJhbmdlID0gWzEsIDEsIDAuMywgMF07XG4gIGNvbnN0IE1vdmVSYW5nZSA9IFswLCAwLCAtNTAsIC0xMDBdO1xuICBjb25zdCBmaXJzdE9wID0gdXNlVHJhbnNmb3JtKHNjcm9sbFksIGZpcnN0UmFuZ2UsIG9wYWNpdHlSYW5nZSk7XG4gIGNvbnN0IGZpcnN0TW92ZSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZLCBmaXJzdFJhbmdlLCBNb3ZlUmFuZ2UpO1xuICBjb25zdCBzZWNvbmRPcCA9IHVzZVRyYW5zZm9ybShzY3JvbGxZLCBzZWNvbmRSYW5nZSwgb3BhY2l0eVJhbmdlKTtcbiAgY29uc3Qgc2Vjb25kTW92ZSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZLCBzZWNvbmRSYW5nZSwgTW92ZVJhbmdlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuaG9tZSA/IFwiY29udGVudHNcIiA6IFwibm9uZVwiIH19PlxuICAgICAgPFRpbWVTZWN0aW9uIHN0eWxlPXt7IG1hcmdpblRvcDogMTgyIH19PlxuICAgICAgICA8bW90aW9uLmRpdiBzdHlsZT17eyBvcGFjaXR5OiBmaXJzdE9wLCB0cmFuc2xhdGVZOiBmaXJzdE1vdmUgfX0+XG4gICAgICAgICAgPFRpbWVSYW5nZT4yMDE5IC0gUHJlc2VudDwvVGltZVJhbmdlPlxuICAgICAgICAgIDxDb21wYW55VGl0bGU+R3JhYjwvQ29tcGFueVRpdGxlPlxuICAgICAgICAgIDxDb21wYW55RGVzYz5EZWxpdmVyeSBzb2x1dGlvbnM8L0NvbXBhbnlEZXNjPlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L1RpbWVTZWN0aW9uPlxuICAgICAgPFRpbWVTZWN0aW9uIHN0eWxlPXt7IG1hcmdpblRvcDogMzk0IH19PlxuICAgICAgICA8bW90aW9uLmRpdiBzdHlsZT17eyBvcGFjaXR5OiBzZWNvbmRPcCwgdHJhbnNsYXRlWTogc2Vjb25kTW92ZSB9fT5cbiAgICAgICAgICA8VGltZVJhbmdlPjIwMTcgLSAyMDE5PC9UaW1lUmFuZ2U+XG4gICAgICAgICAgPENvbXBhbnlUaXRsZT5Hb3Z0ZWNoPC9Db21wYW55VGl0bGU+XG4gICAgICAgICAgPENvbXBhbnlEZXNjPkdvdmVybm1lbnQgc2VydmljZXM8L0NvbXBhbnlEZXNjPlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L1RpbWVTZWN0aW9uPlxuICAgICAgPFRpbWVTZWN0aW9uIHN0eWxlPXt7IG1hcmdpblRvcDogMzk0IH19PlxuICAgICAgICA8VGltZVJhbmdlPjIwMTIgLSAyMDE2PC9UaW1lUmFuZ2U+XG4gICAgICAgIDxDb21wYW55VGl0bGU+UGFzdCBQcm9qZWN0czwvQ29tcGFueVRpdGxlPlxuICAgICAgICA8Q29tcGFueURlc2M+SW5kdXN0cmlhbCBkZXNpZ248L0NvbXBhbnlEZXNjPlxuICAgICAgPC9UaW1lU2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFNjcm9sbEluZGljYXRvciA9ICgpID0+IHtcbiAgY29uc3QgW3dpZHRoLCBzZXRXaWR0aF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gIH0pO1xuICBjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlVmlld3BvcnRTY3JvbGwoKTtcbiAgY29uc3QgU2Nyb2xsUmFuZ2UgPSBbMCwgMV07XG4gIGNvbnN0IFdpZHRoUmFuZ2UgPSBbMCwgd2lkdGhdO1xuICBjb25zdCBTY3JvbGxXaWR0aCA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFNjcm9sbFJhbmdlLCBXaWR0aFJhbmdlKTtcblxuICByZXR1cm4gKFxuICAgIDxTY3JvbGxEaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHdpZHRoOiBTY3JvbGxXaWR0aCxcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8R2xvYmFsU3R5bGVzIC8+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT57dGhpcy5wcm9wcy50aXRsZX08L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICB7dGhpcy5wcm9wcy5wcm9qZWN0ID8gPFNjcm9sbEluZGljYXRvciAvPiA6IFwiXCJ9XG4gICAgICAgIDxCb2R5Q29udGFpbmVyPlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8TGF5b3V0R3JpZCBnYXA9ezB9IGNvbHVtbnM9e1wiMWZyIDNmclwifT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnByb2plY3QgPyAoXG4gICAgICAgICAgICAgIDxTaWRlYmFyMiBzaG93SW5mbz17dGhpcy5wcm9wcy5ob21lfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbjIoKX1cbiAgICAgICAgICAgICAgPC9TaWRlYmFyMj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFNpZGViYXIgc2hvd0luZm89e3RoaXMucHJvcHMuaG9tZX0gLz5cbiAgICAgICAgICAgICAgICA8U2hvd0luZm8gaG9tZT17dGhpcy5wcm9wcy5ob21lfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Q29udGVudENvbnRhaW5lcj57dGhpcy5wcm9wcy5jaGlsZHJlbn08L0NvbnRlbnRDb250YWluZXI+XG4gICAgICAgICAgPC9MYXlvdXRHcmlkPlxuICAgICAgICA8L0JvZHlDb250YWluZXI+XG4gICAgICAgIHt0aGlzLnByb3BzLmFib3V0ID8gPEZvb3RlcjIgLz4gOiA8Rm9vdGVyIC8+fVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBCb2R5Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWF4LXdpZHRoOiAxMDQwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMF19KSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuYDtcblxuY29uc3QgQ29udGVudENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1heC13aWR0aDogJHt0aGVtZS5tYXhXaWR0aH07XG4gIHBhZGRpbmc6IDAgOHB4O1xuICBtaW4td2lkdGg6IDA7XG5gO1xuXG5jb25zdCBUaW1lUmFuZ2UgPSBzdHlsZWQuaDZgXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lLmZvbnRXZWlnaHRzLnNlbWlib2xkfTtcbiAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmdyZXk0fTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbmA7XG5cbmNvbnN0IENvbXBhbnlUaXRsZSA9IHN0eWxlZC5oMmBcbiAgbWFyZ2luLXRvcDogMTJweDtcbmA7XG5cbmNvbnN0IENvbXBhbnlEZXNjID0gc3R5bGVkLmg0YFxuICBmb250LXdlaWdodDogJHt0aGVtZS5mb250V2VpZ2h0cy5yZWd1bGFyfTtcbiAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmxpZ2h0Z3JleTF9O1xuICBtYXJnaW4tdG9wOiA0cHg7XG5gO1xuXG5jb25zdCBMYXlvdXRHcmlkID0gc3R5bGVkKEdyaWQpYFxuICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzFdfSkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5gO1xuXG5jb25zdCBUaW1lU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogNDgwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMV19KSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5gO1xuXG5jb25zdCBTY3JvbGxEaXYgPSBzdHlsZWQobW90aW9uLmRpdilgXG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGhlaWdodDogM3B4O1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmxpZ2h0Z3JleTF9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHVybDE/OiBzdHJpbmc7XG4gIHByb2oxPzogc3RyaW5nO1xuXG4gIHVybDI/OiBzdHJpbmc7XG4gIHByb2oyPzogc3RyaW5nO1xuXG4gIHVybDM/OiBzdHJpbmc7XG4gIHByb2ozPzogc3RyaW5nO1xufVxuXG5jb25zdCBPdGhlclByb2plY3RzOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAoe1xuICB1cmwxID0gXCIvcHJvamVjdDFcIixcbiAgcHJvajEgPSBcIlNlbGYgUGljay1VcFwiLFxuICB1cmwyID0gXCIvcHJvamVjdDJcIixcbiAgcHJvajIgPSBcIkRlbGl2ZXJ5IGZlYXR1cmVzXCIsXG4gIHVybDMgPSBcIi9wcm9qZWN0M1wiLFxuICBwcm9qMyA9IFwiUGFyZW50cyBHYXRld2F5XCIsXG59KSA9PiAoXG4gIDxOYXY+XG4gICAgPExpbmsgaHJlZj17dXJsMX0gc2hhbGxvdz17dHJ1ZX0+XG4gICAgICA8TmF2TGluaz57cHJvajF9PC9OYXZMaW5rPlxuICAgIDwvTGluaz5cbiAgICA8TGluayBocmVmPXt1cmwyfSBzaGFsbG93PXt0cnVlfT5cbiAgICAgIDxOYXZMaW5rPntwcm9qMn08L05hdkxpbms+XG4gICAgPC9MaW5rPlxuICAgIDxMaW5rIGhyZWY9e3VybDN9IHNoYWxsb3c9e3RydWV9PlxuICAgICAgPE5hdkxpbms+e3Byb2ozfTwvTmF2TGluaz5cbiAgICA8L0xpbms+XG4gIDwvTmF2PlxuKTtcblxuY29uc3QgTmF2ID0gc3R5bGVkKG1vdGlvbi5kaXYpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgbWFyZ2luOiAyNHB4IC04cHggMCAtOHB4O1xuYDtcblxuY29uc3QgTmF2TGluayA9IHN0eWxlZChtb3Rpb24uYSlgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAke3RoZW1lLmZvbnRTaXplc1s0XX07XG4gIHdpZHRoOiAyNjBweDtcbiAgcGFkZGluZzogOHB4IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogJHt0aGVtZS5hbmltYXRpb25zLmRlZmF1bHR9O1xuICA6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMzEsIDMxLCA1NCwgMC40KTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIDo6YWZ0ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCk7XG4gICAgfVxuICB9XG4gIDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwi4oaSXCI7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNpdGlvbjogJHt0aGVtZS5hbmltYXRpb25zLmRlZmF1bHR9O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBPdGhlclByb2plY3RzO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc2hvd0luZm8/OiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBMaW5rcygpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHJldHVybiAoXG4gICAgPE5hdj5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCIgc2hhbGxvdz17dHJ1ZX0+XG4gICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGNvbG9yOiByb3V0ZXIucGF0aG5hbWUgPT0gXCIvXCIgPyB0aGVtZS5jb2xvcnMudGV4dExpbmsgOiBcIndoaXRlXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OlxuICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvXCJcbiAgICAgICAgICAgICAgICA/IHRoZW1lLmZvbnRXZWlnaHRzLm1lZGl1bVxuICAgICAgICAgICAgICAgIDogdGhlbWUuZm9udFdlaWdodHMucmVndWxhcixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgSG9tZVxuICAgICAgICA8L05hdkxpbms+XG4gICAgICA8L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiL3BsYXlncm91bmRcIiBzaGFsbG93PXt0cnVlfT5cbiAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9wbGF5Z3JvdW5kXCJcbiAgICAgICAgICAgICAgICA/IHRoZW1lLmNvbG9ycy50ZXh0TGlua1xuICAgICAgICAgICAgICAgIDogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDpcbiAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL3BsYXlncm91bmRcIlxuICAgICAgICAgICAgICAgID8gdGhlbWUuZm9udFdlaWdodHMubWVkaXVtXG4gICAgICAgICAgICAgICAgOiB0aGVtZS5mb250V2VpZ2h0cy5yZWd1bGFyLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBQbGF5Z3JvdW5kXG4gICAgICAgIDwvTmF2TGluaz5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9hYm91dFwiID8gdGhlbWUuY29sb3JzLnRleHRMaW5rIDogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDpcbiAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL2Fib3V0XCJcbiAgICAgICAgICAgICAgICA/IHRoZW1lLmZvbnRXZWlnaHRzLm1lZGl1bVxuICAgICAgICAgICAgICAgIDogdGhlbWUuZm9udFdlaWdodHMucmVndWxhcixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgQWJvdXRcbiAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgPC9MaW5rPlxuICAgIDwvTmF2PlxuICApO1xufVxuXG5leHBvcnQgY2xhc3MgU2lkZWJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTaWRlYmFyQ29udGFpbmVyXG4gICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogdGhpcy5wcm9wcy5zaG93SW5mbyA/IDEwMCA6IC0zOCB9fVxuICAgICAgPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxMb2dvPlxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjEyMHB4XCIgdmlld0JveD1cIjAgMCAzMzMgMTYxXCI+XG4gICAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgICAgaWQ9XCJQYWdlLTFcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT17dGhlbWUuY29sb3JzLnRleHRTZWNvbmRhcnl9XG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgICAgICBpZD1cIkFzc2V0LTNcIlxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMuMDAwMDAwLCA0LjAwMDAwMClcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI2XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTI0LjIxLDYyLjU3IEw4OC4yMSwzNC41NyBDODguMjEsMzQuNTcgNDMuMDIsMTY1LjMyIDIuMjEsMTUyLjU3IEMtMTMuNzksMTQ3LjU3IDg3LjU5LDc2LjU3IDk1LjIxLDc2LjU3IEMxMTAuMjEsNzYuNTcgMTAwLjM5LDExOS44MiA4Mi4yMSwxMDguNTcgQzYxLjIxLDk1LjU3IDE0NC4yMSwyMS41NyAxNDYuMjEsMi41NyBDMTQ4LjIxLC0xNi40MyAxMDQuMjEsMTAxLjU3IDExOS4yMSwxMTEuNTcgQzEzNC4yMSwxMjEuNTcgMTcwLjIxLDU2LjU3IDE2My4yMSw1NC41NyBDMTU2LjIxLDUyLjU3IDEzMS4yMSw5NC41NyAxNDQuMjEsMTA2LjU3IEMxNTcuMjEsMTE4LjU3IDE3NC4yMSw2NS41NyAxNzQuMjEsNjUuNTcgTDE2NS4yMSwxMDMuNTcgQzE2NS4yMSwxMDMuNTcgMTg4LjIxLDU5LjU3IDE5Mi4yMSw5NS41NyBDMTk2LjIxLDEzMS41NyAyMjAuMjEsNjcuNTcgMjE1LjIxLDU4LjU3IEMyMTAuMjEsNDkuNTcgMTk0LjIxLDEwMC41NyAyMTEuMjEsMTAxLjU3IEMyMjguMjEsMTAyLjU3IDI0OC4yMSw4NS41NyAyNjEuMjEsODUuNTcgQzI3NC4yMSw4NS41NyAyODEuMjEsODkuNTcgMjg4LjIxLDg5LjU3IEMyOTUuMjEsODkuNTcgMzA3LjIxLDg1LjU3IDMwNy4yMSw4NS41N1wiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aFwiXG4gICAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgPGxpbmVcbiAgICAgICAgICAgICAgICAgICAgeDE9XCIzMjYuMzFcIlxuICAgICAgICAgICAgICAgICAgICB5MT1cIjc4LjAxXCJcbiAgICAgICAgICAgICAgICAgICAgeDI9XCIzMjYuMjFcIlxuICAgICAgICAgICAgICAgICAgICB5Mj1cIjc3LjU3XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJQYXRoXCJcbiAgICAgICAgICAgICAgICAgID48L2xpbmU+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L0xvZ28+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmtzIC8+XG5cbiAgICAgICAgPFNvY2lhbHM+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9qb2xlbmVuZy9cIj5cbiAgICAgICAgICAgIDxTb2NpYWxJY29uXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgZGF0YS1wcmVmaXg9XCJmYWJcIlxuICAgICAgICAgICAgICBkYXRhLWljb249XCJsaW5rZWRpbi1pblwiXG4gICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0NDggNTEyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICBkPVwiTTEwMC4yOCA0NDhINy40VjE0OC45aDkyLjg4ek01My43OSAxMDguMUMyNC4wOSAxMDguMSAwIDgzLjUgMCA1My44YTUzLjc5IDUzLjc5IDAgMCAxIDEwNy41OCAwYzAgMjkuNy0yNC4xIDU0LjMtNTMuNzkgNTQuM3pNNDQ3LjkgNDQ4aC05Mi42OFYzMDIuNGMwLTM0LjctLjctNzkuMi00OC4yOS03OS4yLTQ4LjI5IDAtNTUuNjkgMzcuNy01NS42OSA3Ni43VjQ0OGgtOTIuNzhWMTQ4LjloODkuMDh2NDAuOGgxLjNjMTIuNC0yMy41IDQyLjY5LTQ4LjMgODcuODgtNDguMyA5NCAwIDExMS4yOCA2MS45IDExMS4yOCAxNDIuM1Y0NDh6XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPC9Tb2NpYWxJY29uPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2pvbGVuZW5qeS9cIj5cbiAgICAgICAgICAgIDxTb2NpYWxJY29uXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgZGF0YS1wcmVmaXg9XCJmYWJcIlxuICAgICAgICAgICAgICBkYXRhLWljb249XCJpbnN0YWdyYW1cIlxuICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgZD1cIk0yMjQuMSAxNDFjLTYzLjYgMC0xMTQuOSA1MS4zLTExNC45IDExNC45czUxLjMgMTE0LjkgMTE0LjkgMTE0LjlTMzM5IDMxOS41IDMzOSAyNTUuOSAyODcuNyAxNDEgMjI0LjEgMTQxem0wIDE4OS42Yy00MS4xIDAtNzQuNy0zMy41LTc0LjctNzQuN3MzMy41LTc0LjcgNzQuNy03NC43IDc0LjcgMzMuNSA3NC43IDc0LjctMzMuNiA3NC43LTc0LjcgNzQuN3ptMTQ2LjQtMTk0LjNjMCAxNC45LTEyIDI2LjgtMjYuOCAyNi44LTE0LjkgMC0yNi44LTEyLTI2LjgtMjYuOHMxMi0yNi44IDI2LjgtMjYuOCAyNi44IDEyIDI2LjggMjYuOHptNzYuMSAyNy4yYy0xLjctMzUuOS05LjktNjcuNy0zNi4yLTkzLjktMjYuMi0yNi4yLTU4LTM0LjQtOTMuOS0zNi4yLTM3LTIuMS0xNDcuOS0yLjEtMTg0LjkgMC0zNS44IDEuNy02Ny42IDkuOS05My45IDM2LjFzLTM0LjQgNTgtMzYuMiA5My45Yy0yLjEgMzctMi4xIDE0Ny45IDAgMTg0LjkgMS43IDM1LjkgOS45IDY3LjcgMzYuMiA5My45czU4IDM0LjQgOTMuOSAzNi4yYzM3IDIuMSAxNDcuOSAyLjEgMTg0LjkgMCAzNS45LTEuNyA2Ny43LTkuOSA5My45LTM2LjIgMjYuMi0yNi4yIDM0LjQtNTggMzYuMi05My45IDIuMS0zNyAyLjEtMTQ3LjggMC0xODQuOHpNMzk4LjggMzg4Yy03LjggMTkuNi0yMi45IDM0LjctNDIuNiA0Mi42LTI5LjUgMTEuNy05OS41IDktMTMyLjEgOXMtMTAyLjcgMi42LTEzMi4xLTljLTE5LjYtNy44LTM0LjctMjIuOS00Mi42LTQyLjYtMTEuNy0yOS41LTktOTkuNS05LTEzMi4xcy0yLjYtMTAyLjcgOS0xMzIuMWM3LjgtMTkuNiAyMi45LTM0LjcgNDIuNi00Mi42IDI5LjUtMTEuNyA5OS41LTkgMTMyLjEtOXMxMDIuNy0yLjYgMTMyLjEgOWMxOS42IDcuOCAzNC43IDIyLjkgNDIuNiA0Mi42IDExLjcgMjkuNSA5IDk5LjUgOSAxMzIuMXMyLjcgMTAyLjctOSAxMzIuMXpcIlxuICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPC9Tb2NpYWxJY29uPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8U29jaWFsSWNvblxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgIGRhdGEtcHJlZml4PVwiZmFzXCJcbiAgICAgICAgICAgICAgZGF0YS1pY29uPVwiZW52ZWxvcGVcIlxuICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgZD1cIk01MDIuMyAxOTAuOGMzLjktMy4xIDkuNy0uMiA5LjcgNC43VjQwMGMwIDI2LjUtMjEuNSA0OC00OCA0OEg0OGMtMjYuNSAwLTQ4LTIxLjUtNDgtNDhWMTk1LjZjMC01IDUuNy03LjggOS43LTQuNyAyMi40IDE3LjQgNTIuMSAzOS41IDE1NC4xIDExMy42IDIxLjEgMTUuNCA1Ni43IDQ3LjggOTIuMiA0Ny42IDM1LjcuMyA3Mi0zMi44IDkyLjMtNDcuNiAxMDItNzQuMSAxMzEuNi05Ni4zIDE1NC0xMTMuN3pNMjU2IDMyMGMyMy4yLjQgNTYuNi0yOS4yIDczLjQtNDEuNCAxMzIuNy05Ni4zIDE0Mi44LTEwNC43IDE3My40LTEyOC43IDUuOC00LjUgOS4yLTExLjUgOS4yLTE4Ljl2LTE5YzAtMjYuNS0yMS41LTQ4LTQ4LTQ4SDQ4QzIxLjUgNjQgMCA4NS41IDAgMTEydjE5YzAgNy40IDMuNCAxNC4zIDkuMiAxOC45IDMwLjYgMjMuOSA0MC43IDMyLjQgMTczLjQgMTI4LjcgMTYuOCAxMi4yIDUwLjIgNDEuOCA3My40IDQxLjR6XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPC9Tb2NpYWxJY29uPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9Tb2NpYWxzPlxuXG4gICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICA8L1NpZGViYXJDb250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBTaWRlYmFyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDEyMHB4O1xuICBoZWlnaHQ6IDM2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzFdfSkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IExvZ28gPSBzdHlsZWQuYWBcbiAgcGFkZGluZzogMCA4cHg7XG5gO1xuXG5jb25zdCBOYXYgPSBzdHlsZWQobW90aW9uLmRpdilgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICBtYXJnaW46IDI0cHggMHB4IDAgMDtcbmA7XG5cbmNvbnN0IE5hdkxpbmsgPSBzdHlsZWQobW90aW9uLmEpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxNjBweDtcbiAgcGFkZGluZzogOHB4IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG5cbiAgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDMxLCAzMSwgNTQsIDAuNCk7XG4gIH1cbmA7XG5cbmNvbnN0IFNvY2lhbHMgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDMycHggMCAwIDA7XG5gO1xuXG5jb25zdCBTb2NpYWxJY29uID0gc3R5bGVkLnN2Z2BcbiAgaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiAwIDE2cHggMCA4cHg7XG4gIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ncmV5Mn07XG4gIHRyYW5zaXRpb246ICR7dGhlbWUuYW5pbWF0aW9ucy5kZWZhdWx0fTtcbiAgOmhvdmVyIHtcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dExpbmt9O1xuICB9XG5gO1xuXG5jb25zdCBEaXZpZGVyID0gc3R5bGVkLmRpdmBcbiAgbWluLWhlaWdodDogM3B4O1xuICBtYXJnaW46IDMycHggMHB4IDAgOHB4O1xuICB3aWR0aDogMTYwcHg7XG4gIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmdyZXkyfTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuZnVuY3Rpb24gTGlua3MoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICByZXR1cm4gKFxuICAgIDxOYXY+XG4gICAgICA8TGluayBocmVmPVwiL1wiIHNoYWxsb3c9e3RydWV9PlxuICAgICAgICA8TmF2TGlua1xuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBjb2xvcjogcm91dGVyLnBhdGhuYW1lID09IFwiL1wiID8gdGhlbWUuY29sb3JzLnRleHRMaW5rIDogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDpcbiAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL1wiXG4gICAgICAgICAgICAgICAgPyB0aGVtZS5mb250V2VpZ2h0cy5tZWRpdW1cbiAgICAgICAgICAgICAgICA6IHRoZW1lLmZvbnRXZWlnaHRzLnJlZ3VsYXIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEJhY2sgSG9tZVxuICAgICAgICA8L05hdkxpbms+XG4gICAgICA8L0xpbms+XG4gICAgPC9OYXY+XG4gICk7XG59XG5cbmV4cG9ydCBjbGFzcyBTaWRlYmFyMiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTaWRlYmFyQ29udGFpbmVyPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxMb2dvPlxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjEyMHB4XCIgdmlld0JveD1cIjAgMCAzMzMgMTYxXCI+XG4gICAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgICAgaWQ9XCJQYWdlLTFcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT17dGhlbWUuY29sb3JzLnRleHRTZWNvbmRhcnl9XG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgICAgICBpZD1cIkFzc2V0LTNcIlxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMuMDAwMDAwLCA0LjAwMDAwMClcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI2XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTI0LjIxLDYyLjU3IEw4OC4yMSwzNC41NyBDODguMjEsMzQuNTcgNDMuMDIsMTY1LjMyIDIuMjEsMTUyLjU3IEMtMTMuNzksMTQ3LjU3IDg3LjU5LDc2LjU3IDk1LjIxLDc2LjU3IEMxMTAuMjEsNzYuNTcgMTAwLjM5LDExOS44MiA4Mi4yMSwxMDguNTcgQzYxLjIxLDk1LjU3IDE0NC4yMSwyMS41NyAxNDYuMjEsMi41NyBDMTQ4LjIxLC0xNi40MyAxMDQuMjEsMTAxLjU3IDExOS4yMSwxMTEuNTcgQzEzNC4yMSwxMjEuNTcgMTcwLjIxLDU2LjU3IDE2My4yMSw1NC41NyBDMTU2LjIxLDUyLjU3IDEzMS4yMSw5NC41NyAxNDQuMjEsMTA2LjU3IEMxNTcuMjEsMTE4LjU3IDE3NC4yMSw2NS41NyAxNzQuMjEsNjUuNTcgTDE2NS4yMSwxMDMuNTcgQzE2NS4yMSwxMDMuNTcgMTg4LjIxLDU5LjU3IDE5Mi4yMSw5NS41NyBDMTk2LjIxLDEzMS41NyAyMjAuMjEsNjcuNTcgMjE1LjIxLDU4LjU3IEMyMTAuMjEsNDkuNTcgMTk0LjIxLDEwMC41NyAyMTEuMjEsMTAxLjU3IEMyMjguMjEsMTAyLjU3IDI0OC4yMSw4NS41NyAyNjEuMjEsODUuNTcgQzI3NC4yMSw4NS41NyAyODEuMjEsODkuNTcgMjg4LjIxLDg5LjU3IEMyOTUuMjEsODkuNTcgMzA3LjIxLDg1LjU3IDMwNy4yMSw4NS41N1wiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aFwiXG4gICAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgPGxpbmVcbiAgICAgICAgICAgICAgICAgICAgeDE9XCIzMjYuMzFcIlxuICAgICAgICAgICAgICAgICAgICB5MT1cIjc4LjAxXCJcbiAgICAgICAgICAgICAgICAgICAgeDI9XCIzMjYuMjFcIlxuICAgICAgICAgICAgICAgICAgICB5Mj1cIjc3LjU3XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJQYXRoXCJcbiAgICAgICAgICAgICAgICAgID48L2xpbmU+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L0xvZ28+XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgICA8TGlua3MgLz5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICA8L1NpZGViYXJDb250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBTaWRlYmFyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDEyMHB4O1xuICBoZWlnaHQ6IDM2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzFdfSkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IExvZ28gPSBzdHlsZWQuYWBcbiAgcGFkZGluZzogMCA4cHg7XG5gO1xuXG5jb25zdCBOYXYgPSBzdHlsZWQobW90aW9uLmRpdilgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICBtYXJnaW46IDI0cHggMHB4IDAgMDtcbmA7XG5cbmNvbnN0IE5hdkxpbmsgPSBzdHlsZWQobW90aW9uLmEpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxNjBweDtcbiAgcGFkZGluZzogOHB4IDhweCA4cHggMjhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHRyYW5zaXRpb246ICR7dGhlbWUuYW5pbWF0aW9ucy5kZWZhdWx0fTtcbiAgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDMxLCAzMSwgNTQsIDAuNCk7XG4gICAgb3BhY2l0eTogMTtcbiAgICA6OmJlZm9yZSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTRweCk7XG4gICAgfVxuICB9XG4gIDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIuKGkFwiO1xuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNpdGlvbjogJHt0aGVtZS5hbmltYXRpb25zLmRlZmF1bHR9O1xuICB9XG5gO1xuXG5jb25zdCBEaXZpZGVyID0gc3R5bGVkLmRpdmBcbiAgbWluLWhlaWdodDogM3B4O1xuICBtYXJnaW46IDMycHggMHB4IDAgOHB4O1xuICB3aWR0aDogMTYwcHg7XG4gIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmdyZXkyfTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXIyO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgdGl0bGUyOiBzdHJpbmc7XG4gIHRpdGxlMzogc3RyaW5nO1xuICBzdWJ0aXRsZTogc3RyaW5nO1xufVxuXG5jb25zdCBUb3BTZWN0aW9uOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAoe1xuICB0aXRsZSA9IFwiRGVmYXVsdCB0aXRsZVwiLFxuICB0aXRsZTIgPSBcIkRlZmF1bHQgdGl0bGVcIixcbiAgdGl0bGUzID0gXCJEZWZhdWx0IHRpdGxlXCIsXG4gIHN1YnRpdGxlID0gXCJEZWZhdWx0IHN1YnRpdGxlXCIsXG59KSA9PiAoXG4gIDxUb3BDb250YWluZXI+XG4gICAgPGgxPnt0aXRsZX08L2gxPlxuICAgIDxBY2NlbnRUaXRsZT57dGl0bGUyfTwvQWNjZW50VGl0bGU+XG4gICAgPERhcmtUaXRsZT57dGl0bGUzfTwvRGFya1RpdGxlPlxuICAgIDxTdWJ0aXRsZT57c3VidGl0bGV9PC9TdWJ0aXRsZT5cbiAgPC9Ub3BDb250YWluZXI+XG4pO1xuXG5jb25zdCBUb3BDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDEwMnB4O1xuYDtcblxuY29uc3QgQWNjZW50VGl0bGUgPSBzdHlsZWQuaDFgXG4gIGNvbG9yOiAjMTY2ZGVmO1xuYDtcblxuY29uc3QgRGFya1RpdGxlID0gc3R5bGVkLmgxYFxuICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZ3JleTJ9O1xuYDtcblxuY29uc3QgU3VidGl0bGUgPSBzdHlsZWQuaDRgXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lLmZvbnRXZWlnaHRzLnJlZ3VsYXJ9O1xuICBwYWRkaW5nOiAxNnB4IDQ4cHggMCAycHg7XG4gIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5saWdodGdyZXkxfTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsxXX0pIHtcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHggMCAycHg7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsyXX0pIHtcbiAgICBwYWRkaW5nOiAxNnB4IDhweCAwIDJweDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgVG9wU2VjdGlvbjtcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3VybD1yZXF1aXJlKFwidXJsXCIpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTt2YXIgX3JvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JvdXRlclwiKSk7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTtmdW5jdGlvbiBpc0xvY2FsKGhyZWYpe3ZhciB1cmw9KDAsX3VybC5wYXJzZSkoaHJlZixmYWxzZSx0cnVlKTt2YXIgb3JpZ2luPSgwLF91cmwucGFyc2UpKCgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSxmYWxzZSx0cnVlKTtyZXR1cm4hdXJsLmhvc3R8fHVybC5wcm90b2NvbD09PW9yaWdpbi5wcm90b2NvbCYmdXJsLmhvc3Q9PT1vcmlnaW4uaG9zdDt9ZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYyl7dmFyIGxhc3RIcmVmPW51bGw7dmFyIGxhc3RBcz1udWxsO3ZhciBsYXN0UmVzdWx0PW51bGw7cmV0dXJuKGhyZWYsYXMpPT57aWYobGFzdFJlc3VsdCYmaHJlZj09PWxhc3RIcmVmJiZhcz09PWxhc3RBcyl7cmV0dXJuIGxhc3RSZXN1bHQ7fXZhciByZXN1bHQ9Zm9ybWF0RnVuYyhocmVmLGFzKTtsYXN0SHJlZj1ocmVmO2xhc3RBcz1hcztsYXN0UmVzdWx0PXJlc3VsdDtyZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGZvcm1hdFVybCh1cmwpe3JldHVybiB1cmwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jz8oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHVybCk6dXJsO312YXIgb2JzZXJ2ZXI7dmFyIGxpc3RlbmVycz1uZXcgTWFwKCk7dmFyIEludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz93aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXI6bnVsbDt2YXIgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBnZXRPYnNlcnZlcigpey8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG5pZihvYnNlcnZlcil7cmV0dXJuIG9ic2VydmVyO30vLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbmlmKCFJbnRlcnNlY3Rpb25PYnNlcnZlcil7cmV0dXJuIHVuZGVmaW5lZDt9cmV0dXJuIG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57aWYoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSl7cmV0dXJuO312YXIgY2I9bGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpO2lmKGVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wKXtvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldCk7Y2IoKTt9fSk7fSx7cm9vdE1hcmdpbjonMjAwcHgnfSk7fXZhciBsaXN0ZW5Ub0ludGVyc2VjdGlvbnM9KGVsLGNiKT0+e3ZhciBvYnNlcnZlcj1nZXRPYnNlcnZlcigpO2lmKCFvYnNlcnZlcil7cmV0dXJuKCk9Pnt9O31vYnNlcnZlci5vYnNlcnZlKGVsKTtsaXN0ZW5lcnMuc2V0KGVsLGNiKTtyZXR1cm4oKT0+e3RyeXtvYnNlcnZlci51bm9ic2VydmUoZWwpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt9bGlzdGVuZXJzLmRlbGV0ZShlbCk7fTt9O2NsYXNzIExpbmsgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKHByb3BzKXtzdXBlcihwcm9wcyk7dGhpcy5wPXZvaWQgMDt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9KCk9Pnt9O3RoaXMuZm9ybWF0VXJscz1tZW1vaXplZEZvcm1hdFVybCgoaHJlZixhc0hyZWYpPT57cmV0dXJue2hyZWY6KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChocmVmKSksYXM6YXNIcmVmPygwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoYXNIcmVmKSk6YXNIcmVmfTt9KTt0aGlzLmxpbmtDbGlja2VkPWU9Pnt2YXJ7bm9kZU5hbWUsdGFyZ2V0fT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJih0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGUubWV0YUtleXx8ZS5jdHJsS2V5fHxlLnNoaWZ0S2V5fHxlLm5hdGl2ZUV2ZW50JiZlLm5hdGl2ZUV2ZW50LndoaWNoPT09Mikpey8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbnJldHVybjt9dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7aWYoIWlzTG9jYWwoaHJlZikpey8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbnJldHVybjt9dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247aHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGhyZWYpO2FzPWFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsYXMpOmhyZWY7ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xudmFye3Njcm9sbH09dGhpcy5wcm9wcztpZihzY3JvbGw9PW51bGwpe3Njcm9sbD1hcy5pbmRleE9mKCcjJyk8MDt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5fcm91dGVyLmRlZmF1bHRbdGhpcy5wcm9wcy5yZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3c6dGhpcy5wcm9wcy5zaGFsbG93fSkudGhlbihzdWNjZXNzPT57aWYoIXN1Y2Nlc3MpcmV0dXJuO2lmKHNjcm9sbCl7d2luZG93LnNjcm9sbFRvKDAsMCk7ZG9jdW1lbnQuYm9keS5mb2N1cygpO319KTt9O2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihwcm9wcy5wcmVmZXRjaCl7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fXRoaXMucD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO31jb21wb25lbnRXaWxsVW5tb3VudCgpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO31nZXRQYXRocygpe3ZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO3ZhcntocmVmOnBhcnNlZEhyZWYsYXM6cGFyc2VkQXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7dmFyIHJlc29sdmVkSHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEhyZWYpO3JldHVybltyZXNvbHZlZEhyZWYscGFyc2VkQXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRBcyk6cmVzb2x2ZWRIcmVmXTt9aGFuZGxlUmVmKHJlZil7aWYodGhpcy5wJiZJbnRlcnNlY3Rpb25PYnNlcnZlciYmcmVmJiZyZWYudGFnTmFtZSl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7dmFyIGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW3RoaXMuZ2V0UGF0aHMoKS5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXTtpZighaXNQcmVmZXRjaGVkKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9bGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwoKT0+e3RoaXMucHJlZmV0Y2goKTt9KTt9fX0vLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbi8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxucHJlZmV0Y2gob3B0aW9ucyl7aWYoIXRoaXMucHx8dHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG52YXIgcGF0aHM9dGhpcy5nZXRQYXRocygpOy8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5fcm91dGVyLmRlZmF1bHQucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLzBdLHBhdGhzWy8qIGFzUGF0aCAqLzFdLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO3ByZWZldGNoZWRbcGF0aHMuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV09dHJ1ZTt9cmVuZGVyKCl7dmFye2NoaWxkcmVufT10aGlzLnByb3BzO3ZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbnZhciBjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7dmFyIHByb3BzPXtyZWY6ZWw9Pnt0aGlzLmhhbmRsZVJlZihlbCk7aWYoY2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWYpe2lmKHR5cGVvZiBjaGlsZC5yZWY9PT0nZnVuY3Rpb24nKWNoaWxkLnJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGQucmVmPT09J29iamVjdCcpe2NoaWxkLnJlZi5jdXJyZW50PWVsO319fSxvbk1vdXNlRW50ZXI6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO310aGlzLnByZWZldGNoKHtwcmlvcml0eTp0cnVlfSk7fSxvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXt0aGlzLmxpbmtDbGlja2VkKGUpO319fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYodGhpcy5wcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe3Byb3BzLmhyZWY9YXN8fGhyZWY7fS8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbi8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpe3ZhciByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydD1yZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKS5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtpZihwcm9wcy5ocmVmJiZ0eXBlb2YgX19ORVhUX0RBVEFfXyE9PSd1bmRlZmluZWQnJiZfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpe3Byb3BzLmhyZWY9cmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZik7fX1yZXR1cm4gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTt9fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dmFyIHdhcm49KDAsX3V0aWxzLmV4ZWNPbmNlKShjb25zb2xlLmVycm9yKTsvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbnZhciBQcm9wVHlwZXM9cmVxdWlyZSgncHJvcC10eXBlcycpO3ZhciBleGFjdD1yZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0Jyk7Ly8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuTGluay5wcm9wVHlwZXM9ZXhhY3Qoe2hyZWY6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxhczpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKSxwcmVmZXRjaDpQcm9wVHlwZXMuYm9vbCxyZXBsYWNlOlByb3BUeXBlcy5ib29sLHNoYWxsb3c6UHJvcFR5cGVzLmJvb2wscGFzc0hyZWY6UHJvcFR5cGVzLmJvb2wsc2Nyb2xsOlByb3BUeXBlcy5ib29sLGNoaWxkcmVuOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LChwcm9wcyxwcm9wTmFtZSk9Pnt2YXIgdmFsdWU9cHJvcHNbcHJvcE5hbWVdO2lmKHR5cGVvZiB2YWx1ZT09PSdzdHJpbmcnKXt3YXJuKFwiV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPlwiKTt9cmV0dXJuIG51bGw7fV0pLmlzUmVxdWlyZWR9KTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi92YXIgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxudmFyIHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCddO3ZhciByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107dmFyIGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPWZ1bmN0aW9uKCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCxmdW5jdGlvbigpe3ZhciBldmVudEZpZWxkPVwib25cIitldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStldmVudC5zdWJzdHJpbmcoMSk7dmFyIF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3VtZW50cyk7fWNhdGNoKGVycil7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogXCIrZXZlbnRGaWVsZCk7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UrXCJcXG5cIitlcnIuc3RhY2spO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe3ZhciBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxudmFyIGNyZWF0ZVJvdXRlcj1mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoKXtmb3IodmFyIF9sZW49YXJndW1lbnRzLmxlbmd0aCxhcmdzPW5ldyBBcnJheShfbGVuKSxfa2V5PTA7X2tleTxfbGVuO19rZXkrKyl7YXJnc1tfa2V5XT1hcmd1bWVudHNbX2tleV07fXNpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXt2YXIgX3JvdXRlcj1yb3V0ZXI7dmFyIGluc3RhbmNlPXt9O2Zvcih2YXIgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbih7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09ZnVuY3Rpb24oKXtyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1cIndpdGhSb3V0ZXIoXCIrbmFtZStcIilcIjt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO30iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gbWl0dCgpIHtcbiAgICBjb25zdCBhbGwgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgb2ZmKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICAgICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbWl0KHR5cGUsIC4uLmV2dHMpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciguLi5ldnRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBtaXR0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG5jb25zdCBtaXR0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IGlzX2R5bmFtaWNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG5jb25zdCByb3V0ZV9tYXRjaGVyXzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xuY29uc3Qgcm91dGVfcmVnZXhfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aDtcbn1cbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgICAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgICAgIDogcGF0aDtcbn1cbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmZ1bmN0aW9uIHRvUm91dGUocGF0aCkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nO1xufVxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGgpID0+IHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKTtcbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCBpc1NlcnZlclJlbmRlciwgY2IpIHtcbiAgICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxO1xuICAgIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2godXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmApLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgIH0pLCB7XG4gICAgICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgZXJyLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lLCBxdWVyeSwgYXMsIHsgaW5pdGlhbFByb3BzLCBwYWdlTG9hZGVyLCBBcHAsIHdyYXBBcHAsIENvbXBvbmVudCwgZXJyLCBzdWJzY3JpcHRpb24sIGlzRmFsbGJhY2ssIH0pIHtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7fTtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCB1dGlsc18xLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKGUuc3RhdGUgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyICYmXG4gICAgICAgICAgICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgICAgICAgICAgICB1cmxfMS5wYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U3RhdGljRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHVybF8xLnBhcnNlKGFzUGF0aCkucGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICAgICAgICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgICAgICAgICAgIDogZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgbnVsbCwgdGhpcy5pc1NzciwgZGF0YSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB1cmxfMS5wYXJzZShhc1BhdGgsIHRydWUpO1xuICAgICAgICAgICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICBpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXM7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCBhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUocm91dGUsIG1vZCkge1xuICAgICAgICBjb25zdCBDb21wb25lbnQgPSBtb2QuZGVmYXVsdCB8fCBtb2Q7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkYXRhKSwgeyBDb21wb25lbnQsIF9fTl9TU0c6IG1vZC5fX05fU1NHLCBfX05fU1NQOiBtb2QuX19OX1NTUCB9KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGE7XG4gICAgICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgICAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAgICovXG4gICAgYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHB1c2godXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcmVwbGFjZSh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgY2hhbmdlKG1ldGhvZCwgX3VybCwgX2FzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgICAgICBpZiAodXRpbHNfMS5TVCkge1xuICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgICAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICAgICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmw7XG4gICAgICAgICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hcztcbiAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybCk7XG4gICAgICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgICAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcyk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgaWYgKGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSB1cmxfMS5wYXJzZShhcyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IHJvdXRlX3JlZ2V4XzEuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJvdXRlX21hdGNoZXJfMS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtID0+ICFxdWVyeVtwYXJhbV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICAgICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihyb3V0ZUluZm8gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCB1dGlsc18xLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKGVyciwgbG9hZEVycm9yRmFpbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZ2lwRXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXMgPT4gcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgfSksIHJlamVjdCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YSgoKSA9PiBfX05fU1NHXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIH0pKS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVFcnJvcik7XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgdGhpcy5ub3RpZnkoZGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgICAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKi9cbiAgICBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKTtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gdXRpbHNfMS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpO1xuICAgICAgICAgICAgZS5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSkge1xuICAgICAgICB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5Sb3V0ZXIuZXZlbnRzID0gbWl0dF8xLmRlZmF1bHQoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO1xuZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpIHtcbiAgICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTtcbn1cbmV4cG9ydHMuaXNEeW5hbWljUm91dGUgPSBpc0R5bmFtaWNSb3V0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpIHtcbiAgICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXg7XG4gICAgcmV0dXJuIChwYXRobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCc7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV07XG4gICAgICAgICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc107XG4gICAgICAgICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgICAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoZW50cnkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICAgICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBkZWNvZGUobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH07XG59XG5leHBvcnRzLmdldFJvdXRlTWF0Y2hlciA9IGdldFJvdXRlTWF0Y2hlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJyk7XG59XG5mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSkge1xuICAgIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpO1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGxldCBncm91cEluZGV4ID0gMTtcbiAgICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgZ3JvdXBzWyQxXG4gICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH07XG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gJy8oLis/KScgOiAnLyhbXi9dKz8pJztcbiAgICB9KTtcbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU7XG4gICAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gICAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpO1xuICAgICAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksIGdyb3VwcyB9LCAobmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgICAgIH1cbiAgICAgICAgOiB7fSkpO1xufVxuZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuLyoqXG4gKiBVdGlsc1xuICovXG5mdW5jdGlvbiBleGVjT25jZShmbikge1xuICAgIGxldCB1c2VkID0gZmFsc2U7XG4gICAgbGV0IHJlc3VsdDtcbiAgICByZXR1cm4gKCguLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmICghdXNlZCkge1xuICAgICAgICAgICAgdXNlZCA9IHRydWU7XG4gICAgICAgICAgICByZXN1bHQgPSBmbiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5leGVjT25jZSA9IGV4ZWNPbmNlO1xuZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gICAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gO1xufVxuZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luO1xuZnVuY3Rpb24gZ2V0VVJMKCkge1xuICAgIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO1xufVxuZXhwb3J0cy5nZXRVUkwgPSBnZXRVUkw7XG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBDb21wb25lbnRcbiAgICAgICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xufVxuZXhwb3J0cy5nZXREaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lO1xuZnVuY3Rpb24gaXNSZXNTZW50KHJlcykge1xuICAgIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50O1xufVxuZXhwb3J0cy5pc1Jlc1NlbnQgPSBpc1Jlc1NlbnQ7XG5hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwgY3R4KSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICgoX2EgPSBBcHAucHJvdG90eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKTtcbiAgICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxuICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BzO1xufVxuZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzID0gbG9hZEdldEluaXRpYWxQcm9wcztcbmV4cG9ydHMudXJsT2JqZWN0S2V5cyA9IFtcbiAgICAnYXV0aCcsXG4gICAgJ2hhc2gnLFxuICAgICdob3N0JyxcbiAgICAnaG9zdG5hbWUnLFxuICAgICdocmVmJyxcbiAgICAncGF0aCcsXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncG9ydCcsXG4gICAgJ3Byb3RvY29sJyxcbiAgICAncXVlcnknLFxuICAgICdzZWFyY2gnLFxuICAgICdzbGFzaGVzJyxcbl07XG5mdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwsIG9wdGlvbnMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4cG9ydHMudXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXJsXzEuZm9ybWF0KHVybCwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uID0gZm9ybWF0V2l0aFZhbGlkYXRpb247XG5leHBvcnRzLlNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydHMuU1QgPSBleHBvcnRzLlNQICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBUb3BTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL3RvcHNlY3Rpb25cIjtcbmltcG9ydCBPdGhlclByb2plY3RzIGZyb20gXCIuLi9jb21wb25lbnRzL290aGVycHJvamVjdHNcIjtcbmltcG9ydCB7IHVzZVZpZXdwb3J0U2Nyb2xsIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuZXhwb3J0IGNsYXNzIFByb2plY3QzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuSW50cm9kdWN0aW9uID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgdGhpcy5SZXNlYXJjaCA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIHRoaXMuRGVzaWduID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgICB0aGlzLlJlc3VsdCA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNjcm9sbFkgfSA9IHVzZVZpZXdwb3J0U2Nyb2xsKCk7XG5cbiAgICBjb25zdCBzY3JvbGxJbnRybyA9ICgpID0+XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IHRoaXMuSW50cm9kdWN0aW9uLmN1cnJlbnQub2Zmc2V0VG9wIC0gMjkwLFxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgIH0pO1xuICAgIGNvbnN0IHNjcm9sbFJlc2VhcmNoID0gKCkgPT5cbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogdGhpcy5SZXNlYXJjaC5jdXJyZW50Lm9mZnNldFRvcCAtIDEyMCxcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICB9KTtcbiAgICBjb25zdCBzY3JvbGxEZXNpZ24gPSAoKSA9PlxuICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiB0aGlzLkRlc2lnbi5jdXJyZW50Lm9mZnNldFRvcCAtIDEyMCxcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICB9KTtcblxuICAgIGNvbnN0IHNjcm9sbFJlc3VsdCA9ICgpID0+XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IHRoaXMuUmVzdWx0LmN1cnJlbnQub2Zmc2V0VG9wIC0gMTIwLFxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgIH0pO1xuXG4gICAgY29uc3QgdGVzdCA9ICgpID0+IChcbiAgICAgIDxOYXY+XG4gICAgICAgIDxOYXZMaW5rIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0gb25DbGljaz17c2Nyb2xsSW50cm99PlxuICAgICAgICAgIEludHJvZHVjdGlvblxuICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDxOYXZMaW5rIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0gb25DbGljaz17c2Nyb2xsUmVzZWFyY2h9PlxuICAgICAgICAgIEZ1bmRhbWVudGFsIFJlc2VhcmNoXG4gICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPE5hdkxpbmsgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fSBvbkNsaWNrPXtzY3JvbGxEZXNpZ259PlxuICAgICAgICAgIERlc2lnbiBDb25zaWRlcmF0aW9uc1xuICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDxOYXZMaW5rIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0gb25DbGljaz17c2Nyb2xsUmVzdWx0fT5cbiAgICAgICAgICBSZXN1bHRzXG4gICAgICAgIDwvTmF2TGluaz5cbiAgICAgIDwvTmF2PlxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXRcbiAgICAgICAgdGl0bGU9XCJKb2xlbmUgTmcgfCBQYXJlbnRzIEdhdGV3YXlcIlxuICAgICAgICBwcm9qZWN0PXt0cnVlfVxuICAgICAgICBjaGlsZHJlbjI9e3Rlc3R9XG4gICAgICA+XG4gICAgICAgIDxUb3BTZWN0aW9uXG4gICAgICAgICAgdGl0bGU9XCJQYXJlbnRzIEdhdGV3YXlcIlxuICAgICAgICAgIHRpdGxlMj1cIlwiXG4gICAgICAgICAgdGl0bGUzPVwiQ29tbXVuaWNhdGlvbnMgcGxhdGZvcm1cIlxuICAgICAgICAgIHN1YnRpdGxlPVwiXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFBhcmFncmFwaCByZWY9e3RoaXMuSW50cm9kdWN0aW9ufT5cbiAgICAgICAgICBQYXJlbnRzIEdhdGV3YXkgaXMgYSBwcm9kdWN0IHRoYXQgc3RyZW5ndGhlbnMgc2Nob29sLWhvbWUgcGFydG5lcnNoaXBcbiAgICAgICAgICB0byBzdXBwb3J0IHN0dWRlbnRzIGluIHRoZWlyIGVkdWNhdGlvbiBqb3VybmV5LiBEZXZlbG9wZWQgdG9nZXRoZXJcbiAgICAgICAgICB3aXRoIHRoZSBNaW5pc3RyeSBvZiBFZHVjYXRpb24sIHRoZSBwcm9kdWN0IGFpbXMgdG8gcmVkdWNlIHRoZVxuICAgICAgICAgIGFkbWluaXN0cmF0aXZlIHdvcmtsb2FkIGZvciB0ZWFjaGVycy5cbiAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgIDxQYXJhZ3JhcGgyPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3BnLm1vZS5lZHUuc2cvXCI+VmlldyBTaXRlPC9hPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAyNCB9fVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20ubW9lLnBncCZobD1lbl9TR1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgUGxheSBTdG9yZVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogMjQgfX1cbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2FwcHMuYXBwbGUuY29tL3NnL2FwcC9wYXJlbnRzLWdhdGV3YXkvaWQxMjY3MTk4NzA4Iz9wbGF0Zm9ybT1pcGhvbmVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFwcCBTdG9yZVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9QYXJhZ3JhcGgyPlxuICAgICAgICA8U3VidGl0bGU+TXkgcm9sZTwvU3VidGl0bGU+XG4gICAgICAgIDxQYXJhZ3JhcGg+XG4gICAgICAgICAgUGFydCBvZiBhIHRlYW0gb2YgMiB0byBkZXNpZ24gdGhlIG1vYmlsZSBhbmQgd2ViIGFwcCAocmVhY3QgbmF0aXZlICZcbiAgICAgICAgICByZWFjdCkuIEJlaW5nIGluIGEgc21hbGwgdGVhbSwgSSB3YXMgaW52b2x2ZWQgaW4gYSBicmVhZHRoIG9mIHdvcmtcbiAgICAgICAgICBmcm9tIHByb2R1Y3Qgc3RyYXRlZ3ksIGJyYW5kaW5nIHRvIGFuYWx5dGljcy5cbiAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgIDxQYXJhZ3JhcGgyPlxuICAgICAgICAgIEFkZGl0aW9uYWxseSwgd2l0aCBib3RoIG9mIHVzIGJlaW5nIGRlc2lnbmVycyB3aG8gZW5qb3kgd29ya2luZyBpblxuICAgICAgICAgIGNvZGUsIHdlIGFsc28gb2Z0ZW4ganVtcCBpbiB0byBhc3Npc3Qgd2l0aCB0aGUgZnJvbnRlbmQsIGJlIGl0IHNldHRpbmdcbiAgICAgICAgICBiYXNlIHN0eWxlcyBvciBmaXhpbmcgbWlub3IgYnVncy5cbiAgICAgICAgPC9QYXJhZ3JhcGgyPlxuICAgICAgICA8RnVsbEltZyAvPlxuICAgICAgICA8U3VidGl0bGUgcmVmPXt0aGlzLlJlc2VhcmNofT5UaGUgY2hhbGxlbmdlPC9TdWJ0aXRsZT5cbiAgICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgICBUZWFjaGVycyBpbiBTaW5nYXBvcmUgYXJlIG92ZXJseSBib2dnZWQgZG93biBieSBhZG1pbmlzdHJhdGl2ZSBtYXR0ZXJzXG4gICAgICAgICAgaW4gdGhlaXIgZGF5IHRvIGRheSB3b3JrLiBUaGlzIHRha2VzIGF3YXkgZnJvbSB0aGVpciBhYmlsaXR5IHRvIGZvY3VzXG4gICAgICAgICAgb24gdGhlaXIgY29yZSBqb2Ig4oCTIGVkdWNhdGlvbi4gVGh1cywgdGhlIHF1ZXN0aW9uIGZvciB1cyB3YXM6XG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICA8UXVvdGU+XG4gICAgICAgICAgXCJIb3cgbWlnaHQgd2UgaGVscCB0ZWFjaGVycyByZWR1Y2UgdGltZSBzcGVudCBvbiBhZG1pbmlzdHJhdGl2ZSB3b3JrXG4gICAgICAgICAgc28gdGhhdCB0aGV5IGNhbiBmb2N1cyBvbiB0ZWFjaGluZz9cIlxuICAgICAgICA8L1F1b3RlPlxuICAgICAgICA8U3VidGl0bGU+V2hhdCBhZG1pbmlzdHJhdGl2ZSBwcm9ibGVtPzwvU3VidGl0bGU+XG4gICAgICAgIDxQYXJhZ3JhcGg+XG4gICAgICAgICAgVG8gdW5jb3ZlciB0aGUgbWFpbiBpc3N1ZXMgdGVhY2hlcnMgd2VyZSBmYWNpbmcsIHdlIGNvbmR1Y3RlZFxuICAgICAgICAgIGludGVydmlld3MgYW5kIG1hcHBlZCB0aGUgdmFyaW91cyBhZG1pbmlzdHJhdGl2ZSBtYXR0ZXJzIHRoZXkgaGF2ZSB0b1xuICAgICAgICAgIGRlYWwgd2l0aCBhY3Jvc3MgdGhlIHNjaG9vbCB5ZWFyLlxuICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgPEZ1bGxJbWcyIC8+XG4gICAgICAgIDxQYXJhZ3JhcGgzPlxuICAgICAgICAgIEFmdGVyIGEgZmV3IHNlc3Npb24gd2l0aCB2YXJpb3VzIHRlYWNoZXJzLCB3ZSBmb3VuZCB0aGF0e1wiIFwifVxuICAgICAgICAgIDxiPnNlbmRpbmcgYW5ub3VuY2VtZW50cyBhbmQgY29sbGVjdGluZyBjb25zZW50IGZvcm1zIGZyb20gcGFyZW50czwvYj57XCIgXCJ9XG4gICAgICAgICAgd2FzIHRoZSBtb3N0IHRpbWUtY29uc3VtaW5nIGFjdGl2aXR5IChtb3N0IGZyZXF1ZW50IGFjcm9zcyB0aGUgeWVhciArXG4gICAgICAgICAgZGlmZmljdWx0eSkuXG4gICAgICAgIDwvUGFyYWdyYXBoMz5cbiAgICAgICAgPFBhcmFncmFwaDI+XG4gICAgICAgICAgVG9kYXksIHRlYWNoZXJzIGRpc3RyaWJ1dGUgcGh5c2ljYWwgY29waWVzIG9mIGEgY29uc2VudCBmb3JtIG9yXG4gICAgICAgICAgYW5ub3VuY2VtZW50IHRvIHN0dWRlbnRzIHRvIHBhc3MgdG8gdGhlaXIgcGFyZW50cy4gVGhpcyBsZWFkcyB0b1xuICAgICAgICAgIGlzc3VlcyBpbmNsdWRpbmcgbG9zdCBmb3JtcywgZm9yZ290dGVuIGZvcm1zIGFuZCBzbyBvbiwgY2F1c2luZ1xuICAgICAgICAgIHRlYWNoZXJzIHRvIHNwZW5kIGEgbG90IG9mIHRpbWUgY2hhc2luZyBmb3IgdGhlbS4gUGFyZW50cywgdG9vLCBmYWNlXG4gICAgICAgICAgc2ltaWxhciBpc3N1ZXMgbGlrZSByZXRyaWV2aW5nIHRoZSBmb3JtIGZyb20gdGhlaXIgY2hpbGQncyBtZXNzeSBiYWcuXG4gICAgICAgIDwvUGFyYWdyYXBoMj5cbiAgICAgICAgPEZ1bGxJbWczIC8+XG4gICAgICAgIDxQYXJhZ3JhcGgzPlxuICAgICAgICAgIFRodXMsIHdlIGRlY2lkZWQgdG8gdGFja2xlIHRoaXMgcHJvYmxlbSBzcGFjZSBmaXJzdC5cbiAgICAgICAgPC9QYXJhZ3JhcGgzPlxuICAgICAgICA8UGFyYWdyYXBoMj5cbiAgICAgICAgICBHaXZlbiB0aGF0IHRoZSB0ZWFjaGVycyB3aWxsIGJlIGRlYWxpbmcgd2l0aCBhIGxhcmdlIGFtb3VudCBvZlxuICAgICAgICAgIGluZm9ybWF0aW9uLCB3ZSBjaG9vc2UgdG8gZmlyc3QgZGV2ZWxvcCBhIHdlYiBhcHAgZm9yIHNjaG9vbHMuIE9uIHRoZVxuICAgICAgICAgIG90aGVyIGhhbmQsIHdpdGggdGhlIGZyZXF1ZW50IGFuZCB1bnByZWRpY3RhYmxlIHRpbWluZyBvZiBzY2hvb2xcbiAgICAgICAgICBhbm5vdW5jZW1lbnRzLCBhIG1vYmlsZSBhcHAgZm9yIHBhcmVudHMgbWFkZSBtb3JlIHNlbnNlLlxuICAgICAgICA8L1BhcmFncmFwaDI+XG4gICAgICAgIDxTdWJ0aXRsZSByZWY9e3RoaXMuRGVzaWdufT5EZXNpZ248L1N1YnRpdGxlPlxuICAgICAgICA8UGFyYWdyYXBoPlxuICAgICAgICAgIEkgc3RhcnRlZCBieSB3b3JraW5nIGNsb3NlbHkgd2l0aCB0aGUgcHJvZHVjdCBtYW5hZ2VyIHRvIHVuZGVyc3RhbmRcbiAgICAgICAgICB0aGUgZGVhdGlsZWQgZmVhdHVyZSBwcmlvcml0aXNhdGlvbiBiZWZvcmUgbWFwcGluZyBvdXQgcm91Z2ggZmxvd3MuXG4gICAgICAgICAgQm90aCBtb2JpbGUgYW5kIHdlYiBwcm9kdWN0cyB3ZXJlIGRlc2lnbmVkIGluY3JlbWVudGFsbHkgdGhyb3VnaFxuICAgICAgICAgIHJvdW5kcyBvZiBpdGVyYXRpb25zIGFuZCB0ZXN0aW5ncy4gVmlldyBhbiBlYXJseSBjdXQgb2YgdGhlIG1vYmlsZSBhcHBcbiAgICAgICAgICBmbG93IDxhIGhyZWY9XCJodHRwczovL292ZXJmbG93LmlvL3MvRTMzWTIyL1wiPmhlcmU8L2E+XG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICA8RnVsbEltZzQgLz5cbiAgICAgICAgPFBhcmFncmFwaDM+XG4gICAgICAgICAgQWxvbmcgdGhlIHdheSwgdGhlcmUgd2VyZSBzb21lIGludGVyZXN0aW5nIGRlc2lnbiBjaGFsbGVuZ2VzIHdlXG4gICAgICAgICAgZW5jb3VudGVyZWQ6XG4gICAgICAgIDwvUGFyYWdyYXBoMz5cbiAgICAgICAgPFN1YnRpdGxlPkNvbnNpZGVyYXRpb24gIzE6PC9TdWJ0aXRsZT5cbiAgICAgICAgPFF1b3RlMj5Ib3cgbWlnaHQgd2UgcHJvdGVjdCBpbmRpdmlkdWFscyB3aXRoIHNlY3JldCBjaGlsZHJlbj88L1F1b3RlMj5cbiAgICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgICBXaGlsZSBtYXBwaW5nIG91dCB0aGUgdXNlciBmbG93LCB3ZSBiZWxpZXZlZCB0aGF0IGRpcmVjdGx5IGRpc3BsYXlpbmdcbiAgICAgICAgICB0aGUgcmV0cmlldmVkIGNoaWxkcmVuJ3MgbmFtZSBiYXNlZCBvbiB0aGUgdXNlcidzIElEIHdhcyBhIG5hdHVyYWxcbiAgICAgICAgICB0aGluZyB0byBkby4gSG93ZXZlciwgd2Ugc29vbiBoYWQgZmVlZGJhY2sgdGhhdCB0aGlzIHdhcyBhIHByb2JsZW0gZm9yXG4gICAgICAgICAgaW5kaXZpZHVhbHMgd2l0aCBjaGlsZHJlbiB0aGVpciBzcG91c2VzIGFyZSB1bmF3YXJlIG9mLiBBcyB0aGVcbiAgICAgICAgICBnb3Zlcm5tZW50LCBpdCBpcyBub3Qgb3VyIGludGVudGlvbiB0byBicmVhayBmYW1pbGllcyBhcGFydCBieVxuICAgICAgICAgIGFjY2lkZW50YWxseSByZXZlYWxpbmcgZmFtaWx5IHNlY3JldHMuXG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICA8UGFyYWdyYXBoMj5cbiAgICAgICAgICBUaHVzLCB3ZSBhZGRlZCBhIHBhZ2UgdG8gdGhlIGZsb3cgdG8gbGV0IHRoZSB1c2VyIGtub3cgd2Ugd2lsbCBiZVxuICAgICAgICAgIHB1bGxpbmcgdGhpcyBkYXRhIGFuZCBsZXQgdGhlbSBiZSBpbiBjb250cm9sIG9mIHdoZW4gdGhpcyBpbmZvcm1hdGlvblxuICAgICAgICAgIGlzIHNob3duLiBVc2VycyBjYW4gdGhlbiBtYWtlIHRoZSBjYWxsIHRvIGVpdGhlciBwcm9jZWVkIHdpdGhcbiAgICAgICAgICBvbmJvYXJkaW5nIGF0IGEgbGF0ZXIgZGF0ZSBvciBtb3ZlIGFoZWFkLlxuICAgICAgICA8L1BhcmFncmFwaDI+XG4gICAgICAgIDxGdWxsSW1nNSAvPlxuICAgICAgICA8U3VidGl0bGU+Q29uc2lkZXJhdGlvbiAjMjo8L1N1YnRpdGxlPlxuICAgICAgICA8UXVvdGUyPlxuICAgICAgICAgIEhvdyBtaWdodCB3ZSBoZWxwIGFkbWlucyBkaWZmZXJlbnRpYXRlIGJldHdlZW4gdGhlIHRhc2tzIHRoZXkgZG8gYXMgYVxuICAgICAgICAgIHVzZXIgYW5kIGFuIGFkbWluP1xuICAgICAgICA8L1F1b3RlMj5cbiAgICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgICBGb3Igc2Nob29scyBpbiBTaW5nYXBvcmUsIHRoZSBhZG1pbmlzdHJhdG9yIG9mIHRoZSBzeXN0ZW0gaXMgb2Z0ZW4sXG4gICAgICAgICAgdG9vLCBhIHRlYWNoZXIuIFRoaXMgbWVhbnMgdGhhdCBhdCBhbnkgb25lIHRpbWUsIGFuIGluZGl2aWR1YWwgY291bGRcbiAgICAgICAgICBiZSBqdWdnbGluZyBib3RoIHRoZWlyIHRhc2tzIGFzIGEgdGVhY2hlciBhbmQgYXMgYW4gYWRtaW4uIEZyb21cbiAgICAgICAgICByZXNlYXJjaCB3ZSBmb3VuZCB0aGF0IHRoZXNlIHVzZXJzIHVzdWFsbHkgZGVhbCB3aXRoIHRoZXNlIHRhc2tzXG4gICAgICAgICAgc2VwYXJhdGVseSBhbmQgdmlldyB0aGVtIGFzIGRpZmZlcmVudCByZXNwb25zaWJpbGl0aWVzLiBIZW5jZSwgd2VcbiAgICAgICAgICBkZWNpZGVkIHRvIGNsZWFybHkgc2VwYXJhdGUgdGhlIHR3by5cbiAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgIDxQYXJhZ3JhcGgyPlxuICAgICAgICAgIFRoaXMgbWVhbnQgdGhhdCB0aGUgdGVhY2hlciB3b3VsZCBiZSBhYmxlIHRvIGZpcnN0IGNvbXBsZXRlIHRoZSB0YXNrc1xuICAgICAgICAgIHRoZXkgbmVlZCB0byBkbyBhcyBhIHRlYWNoZXIsIHRoZW4gY2xlYW5seSBzd2l0Y2ggb3ZlciB0byB0aGUgYWRtaW5cbiAgICAgICAgICB2aWV3IHRvIHdvcmsgb24gYWRtaW4gdGFza3MsIG1hdGNoaW5nIHRoZWlyIG1lbnRhbCBtb2RlbC5cbiAgICAgICAgPC9QYXJhZ3JhcGgyPlxuICAgICAgICA8RnVsbEltZzYgLz5cbiAgICAgICAgPFN1YnRpdGxlPkRlc2lnbiBTbmFwc2hvdDwvU3VidGl0bGU+XG4gICAgICAgIDxGdWxsSW1nNyAvPlxuICAgICAgICA8U3VidGl0bGUgcmVmPXt0aGlzLlJlc3VsdH0+UmVzdWx0czwvU3VidGl0bGU+XG4gICAgICAgIDxQYXJhZ3JhcGg+XG4gICAgICAgICAgVGhlIHByb2R1Y3QgaXMgbm93IGluIHVzZSBieSBhbGwgcHVibGljIHNjaG9vbCBpbiBzaW5nYXBvcmUgYW5kIGhhdmVcbiAgICAgICAgICBzZWVuIG92ZXIgMTAwayBhbm5vdW5jZW1lbnRzIGFuZCBmb3JtcyBzZW50LiBIZXJlJ3MgYW4gYXBwIHN0b3JlXG4gICAgICAgICAgcmV2aWV3IGZyb20gYSBwYXJlbnQ6XG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICA8UXVvdGU+XG4gICAgICAgICAgXCJJbmZvcm1hdGlvbiBpcyBhdCBteSBmaW5nZXJ0aXBzLCBubyBuZWVkIHRvIGRlYWwgd2l0aCBwYXBlcnMuIFZlcnlcbiAgICAgICAgICB1c2VmdWwgYW5kIG9yZ2FuaXNlZC5cIlxuICAgICAgICA8L1F1b3RlPlxuICAgICAgICA8RnVsbEltZzggLz5cbiAgICAgICAgPFN1YnRpdGxlPlJlZmxlY3Rpb24gPC9TdWJ0aXRsZT5cbiAgICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgICBJIGFtIGdyYXRlZnVsIHRvIGhhdmUgYmVlbiBvbiBhIHByb2R1Y3QgdGVhbSB3aGVyZSBJIHdhcyBlbXBvd2VyZWQgYXNcbiAgICAgICAgICBhIGRlc2lnbmVyIHRvIGd1aWRlIHRoZSBwcm9kdWN0IGRpcmVjdGlvbi4gQWxvbmcgdGhlIHdheSwgSSBoYXZlXG4gICAgICAgICAgbGVhcm5lZCBhIGxvdCBvbiB3aGF0IGl0IHRha2VzIHRvIHdvcmsgd2l0aCBkZXZlbG9wZXJzIGFuZCBpblxuICAgICAgICAgIHBhcnRpY3VsYXIsIGhvdyB0byBkZXNpZ24gZm9yIHJlYWN0IGFuZCByZWFjdCBuYXRpdmUgYXBwcy5cbiAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgIDxQYXJhZ3JhcGgyPlxuICAgICAgICAgIFdoaWxlIEkgZGlkIG5vdCBlbGFib3JhdGUgb24gdGhlIGRlc2lnbiBjb25zaWRlcmF0aW9ucyBmb3IgdGhlIHdlYiBhcHBcbiAgICAgICAgICBoZXJlLCB0aGF0IGlzIGFuIGFyZWEgSSBsZWFybnQgYSBsb3QgYWJvdXQuIEkgYW50aWNpcGF0ZSBzZWVpbmcgaG93XG4gICAgICAgICAgdGhlIHByb2R1Y3Qgd2lsbCBpbXByb3ZlIHdpdGggZnV0dXJlIHJlbGVhc2VzLlxuICAgICAgICA8L1BhcmFncmFwaDI+XG4gICAgICAgIDxGdWxsSW1nOSAvPlxuICAgICAgICA8U3VidGl0bGU+T3RoZXIgUHJvamVjdHMgPC9TdWJ0aXRsZT5cbiAgICAgICAgPE90aGVyUHJvamVjdHMgdXJsMz1cIi9wcm9qZWN0NFwiIHByb2ozPVwiSG91c2luZyByZXNhbGUgcG9ydGFsXCIgLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgTmF2ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIG1hcmdpbjogMTZweCAwcHggMCAwO1xuYDtcblxuY29uc3QgTmF2TGluayA9IHN0eWxlZC5hYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMDBweDtcbiAgcGFkZGluZzogOHB4IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHRyYW5zaXRpb246ICR7dGhlbWUuYW5pbWF0aW9ucy5kZWZhdWx0fTtcbiAgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDMxLCAzMSwgNTQsIDAuNCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcblxuY29uc3QgU3VidGl0bGUgPSBzdHlsZWQuaDRgXG4gIG1hcmdpbi10b3A6IDQ4cHg7XG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lLmZvbnRXZWlnaHRzLnNlbWlib2xkfTtcbiAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmxpZ2h0Z3JleTN9O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMl19KSB7XG4gICAgbWFyZ2luLXRvcDogNDhweDtcbiAgfVxuYDtcblxuY29uc3QgUGFyYWdyYXBoID0gc3R5bGVkLnBgXG4gIG1hcmdpbi10b3A6IDhweDtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsyXX0pIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG4gIGEge1xuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250U2l6ZXNbNF19O1xuICB9XG5gO1xuXG5jb25zdCBQYXJhZ3JhcGgyID0gc3R5bGVkLnBgXG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5saWdodGdyZXkxfTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsyXX0pIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG4gIGEge1xuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250U2l6ZXNbNF19O1xuICB9XG5gO1xuXG5jb25zdCBQYXJhZ3JhcGgzID0gc3R5bGVkLnBgXG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMl19KSB7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgfVxuYDtcblxuY29uc3QgUXVvdGUgPSBzdHlsZWQuaDNgXG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5saWdodGdyZXkxfTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsyXX0pIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG5gO1xuXG5jb25zdCBRdW90ZTIgPSBzdHlsZWQuaDNgXG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5saWdodGdyZXkxfTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsyXX0pIHtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICB9XG5gO1xuXG5jb25zdCBGdWxsSW1nID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjY3LjQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbi10b3A6IDQ4cHg7XG4gIG1hcmdpbi1ib3R0b206IDU2cHg7XG4gIGJhY2tncm91bmQ6ICM3Y2IxYzU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvcGctMS5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsyXX0pIHtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICB9XG5gO1xuXG5jb25zdCBGdWxsSW1nMiA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMzN3B4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBtYXJnaW4tdG9wOiA0OHB4O1xuICBtYXJnaW4tYm90dG9tOiA0OHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3BnLTIucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMl19KSB7XG4gICAgaGVpZ2h0OiAyMjBweDtcbiAgfVxuYDtcblxuY29uc3QgRnVsbEltZzMgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNjcuNDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luLXRvcDogNDhweDtcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9wZy0zLnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzJdfSkge1xuICAgIGhlaWdodDogMTgwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IEZ1bGxJbWc0ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbi10b3A6IDMycHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9wZy00LnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzFdfSkge1xuICAgIGhlaWdodDogNTAwcHg7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsyXX0pIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgaGVpZ2h0OiAzMzBweDtcbiAgfVxuYDtcblxuY29uc3QgRnVsbEltZzUgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMzdweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luLXRvcDogMzZweDtcbiAgbWFyZ2luLWJvdHRvbTogNTZweDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9wZy01LnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzJdfSkge1xuICAgIGhlaWdodDogMTgwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IEZ1bGxJbWc2ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbi10b3A6IDM2cHg7XG4gIG1hcmdpbi1ib3R0b206IDU2cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvcGctNi5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsyXX0pIHtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICB9XG5gO1xuXG5jb25zdCBGdWxsSW1nNyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICBtYXJnaW4tYm90dG9tOiA1NnB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3BnLTcucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMl19KSB7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgfVxuYDtcblxuY29uc3QgRnVsbEltZzggPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9wZy04LnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzJdfSkge1xuICAgIGhlaWdodDogMTUwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IEZ1bGxJbWc5ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbi10b3A6IDQ4cHg7XG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XG4gIGJhY2tncm91bmQ6ICM3Y2IxYzU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvcGctOS5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMl19KSB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgfVxuYDtcbmV4cG9ydCBkZWZhdWx0IFByb2plY3QzO1xuIiwiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCI7XG5cbmNvbnN0IEdsb2JhbFN0eWxlcyA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuXG5odG1se1xuICAgIGJhY2tncm91bmQ6IGhzbCgyNDAsIDYwJSwgNSUpO1xuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5saWdodGdyZXkyfTtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50WzBdfSl7XG4gIGJvZHk6YmVmb3JlLCBib2R5OmFmdGVyeyBcbiAgICBtYXgtd2lkdGg6IDkwdnc7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMGRlZywjMjQyQTJFIDFweCx0cmFuc3BhcmVudCAwcHgpIDAgMCAvIGNhbGMoOTB2dy80KSBhdXRvO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRbMV19KXtcbmJvZHk6YmVmb3JlLCBib2R5OmFmdGVyeyBcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgwZGVnLCMxOTFEMjAgMXB4LHRyYW5zcGFyZW50IDBweCkgMCAwIC8gY2FsYyg5MHZ3LzIpIGF1dG87XG4gIH1cbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICBsaW5lLWhlaWdodDogODBweDtcbiAgICBmb250LXdlaWdodDogJHt0aGVtZS5mb250V2VpZ2h0cy5ib2xkfTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsxXX0pe1xuaDEge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICBmb250LXdlaWdodDogJHt0aGVtZS5mb250V2VpZ2h0cy5ib2xkfTtcbn1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludFsyXX0pe1xuaDEge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBmb250LXdlaWdodDogJHt0aGVtZS5mb250V2VpZ2h0cy5ib2xkfTtcbn1cbn1cblxuaDIge1xuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250U2l6ZXNbMV19O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMTRlbTtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBmb250LXdlaWdodDogJHt0aGVtZS5mb250V2VpZ2h0cy5zZW1pYm9sZH07XG59XG5cbmgzIHtcbiAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udFNpemVzWzJdfTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDEyZW07XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cbmg0IHtcbiAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udFNpemVzWzRdfTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDEwZW07XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUuZm9udFdlaWdodHMucmVndWxhcn07XG59XG5cbmg1IHtcbiAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udFNpemVzWzVdfTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDA4ZW07XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbmg2IHtcbiAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udFNpemVzWzZdfTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDAyZW07XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUuZm9udFdlaWdodHMuc2VtaWJvbGR9O1xufVxuXG5wIHtcbiAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udFNpemVzWzRdfTtcbiAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMGVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLmZvbnRXZWlnaHRzLnJlZ3VsYXJ9O1xuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0U2Vjb25kYXJ5fTtcbn1cblxuc3BhbiB7XG4gICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnRTaXplc1s2XX07XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAwNGVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLmZvbnRXZWlnaHRzLnJlZ3VsYXJ9O1xufVxuXG5hIHtcbiAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udFNpemVzWzVdfTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDA2ZW07XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUuZm9udFdlaWdodHMucmVndWxhcn07XG4gICAgY29sb3I6IHJnYig2NCwxNTYsMjU1KTtcbn1cblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGVzO1xuIiwiY29uc3QgdGhlbWUgPSB7XG4gIG1heFdpZHRoOiBcIjgwMHB4XCIsXG4gIGJyZWFrcG9pbnQ6IFtcbiAgICBcIjExNTBweFwiLCAvLyAwXG4gICAgXCI4OTBweFwiLCAvLyAxXG4gICAgXCI2MDBweFwiLCAvLyAyXG4gICAgXCIzNjBweFwiLCAvLyAzXG4gIF0sXG4gIHNwYWNlOiBbXG4gICAgXCIwcHhcIiwgLy8gMFxuICAgIFwiNHB4XCIsIC8vIDFcbiAgICBcIjhweFwiLCAvLyAyXG4gICAgXCIxNnB4XCIsIC8vIDNcbiAgICBcIjI0cHhcIiwgLy8gNFxuICAgIFwiMzJweFwiLCAvLyA1XG4gICAgXCI0OHB4XCIsIC8vIDZcbiAgICBcIjY0cHhcIiwgLy8gN1xuICAgIFwiOTZweFwiLCAvLyA4XG4gICAgXCIxMjhweFwiLCAvLyA5XG4gICAgXCIxNjBweFwiLCAvLyAxMFxuICBdLFxuICBmb250U2l6ZXM6IFtcbiAgICBcIjJyZW1cIiwgLy8gMCAzMnB4XG4gICAgXCIxLjg3NXJlbVwiLCAvLyAxIDMwcHhcbiAgICBcIjEuNXJlbVwiLCAvLyAyIDI0cHhcbiAgICBcIjEuMjVyZW1cIiwgLy8gMyAyMHB4XG4gICAgXCIxLjEyNXJlbVwiLCAvLyA0IDE4cHhcbiAgICBcIjFyZW1cIiwgLy8gNSAxNnB4XG4gICAgXCIwLjg3NXJlbVwiLCAvLyA2IDE0cHhcbiAgICBcIjAuNzVyZW1cIiwgLy8gNyAxMnB4XG4gIF0sXG4gIGZvbnRXZWlnaHRzOiB7XG4gICAgcmVndWxhcjogNDAwLFxuICAgIG1lZGl1bTogNTAwLFxuICAgIHNlbWlib2xkOiA2MDAsXG4gICAgYm9sZDogNzAwLFxuICB9LFxuICBjb2xvcnM6IHtcbiAgICBsaWdodGdyZXk0OiBcIiNGOUZBRkJcIixcbiAgICBsaWdodGdyZXkzOiBcIiNGNEY2RjhcIixcbiAgICBsaWdodGdyZXkyOiBcIiNERkUzRThcIixcbiAgICBsaWdodGdyZXkxOiBcIiNDNENERDVcIixcbiAgICBncmV5NDogXCIjOTE5RUFCXCIsXG4gICAgZ3JleTM6IFwiIzYzNzM4MVwiLFxuICAgIGdyZXkyOiBcIiM0NTRGNUJcIixcbiAgICBncmV5MTogXCIjMjEyQjM2XCIsXG4gICAgdGV4dDogXCIjRjlGQUZCXCIsXG4gICAgdGV4dFNlY29uZGFyeTogXCIjREZFM0U4XCIsXG4gICAgdGV4dExpbms6IFwicmdiKDY0LDE1NiwyNTUpXCIsXG4gIH0sXG4gIGFuaW1hdGlvbnM6IHtcbiAgICBkZWZhdWx0OiBcImVhc2UgMC40cztcIixcbiAgICBob3ZlcjogXCIwLjM1cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZyYW1lci1tb3Rpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sb3R0aWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=