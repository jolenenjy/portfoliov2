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

/***/ "/jkW":
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

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5M6V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: Layout

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__("iaY6");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__("wmQq");

// CONCATENATED MODULE: ./components/sidebar.tsx
var __jsx = external_react_["createElement"];







function Links() {
  const router = Object(router_["useRouter"])();
  return __jsx(Nav, null, __jsx(link_default.a, {
    href: "/",
    shallow: true
  }, __jsx(NavLink, {
    style: {
      color: router.pathname == "/" ? theme["a" /* default */].colors.textLink : "white",
      fontWeight: router.pathname == "/" ? theme["a" /* default */].fontWeights.medium : theme["a" /* default */].fontWeights.regular
    }
  }, "Home")), __jsx(link_default.a, {
    href: "/playground",
    shallow: true
  }, __jsx(NavLink, {
    style: {
      color: router.pathname == "/playground" ? theme["a" /* default */].colors.textLink : "white",
      fontWeight: router.pathname == "/playground" ? theme["a" /* default */].fontWeights.medium : theme["a" /* default */].fontWeights.regular
    }
  }, "Playground")), __jsx(link_default.a, {
    href: "/about"
  }, __jsx(NavLink, {
    style: {
      color: router.pathname == "/about" ? theme["a" /* default */].colors.textLink : "white",
      fontWeight: router.pathname == "/about" ? theme["a" /* default */].fontWeights.medium : theme["a" /* default */].fontWeights.regular
    }
  }, "About")));
}

class sidebar_Sidebar extends external_react_["Component"] {
  render() {
    return __jsx(SidebarContainer, {
      style: {
        marginBottom: this.props.showInfo ? 100 : -38
      }
    }, __jsx(link_default.a, {
      href: "/"
    }, __jsx(Logo, null, __jsx("svg", {
      width: "120px",
      viewBox: "0 0 333 161"
    }, __jsx("g", {
      id: "Page-1",
      stroke: theme["a" /* default */].colors.textSecondary,
      fill: "none",
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, __jsx("g", {
      id: "Asset-3",
      transform: "translate(3.000000, 4.000000)",
      strokeWidth: "6"
    }, __jsx("path", {
      d: "M24.21,62.57 L88.21,34.57 C88.21,34.57 43.02,165.32 2.21,152.57 C-13.79,147.57 87.59,76.57 95.21,76.57 C110.21,76.57 100.39,119.82 82.21,108.57 C61.21,95.57 144.21,21.57 146.21,2.57 C148.21,-16.43 104.21,101.57 119.21,111.57 C134.21,121.57 170.21,56.57 163.21,54.57 C156.21,52.57 131.21,94.57 144.21,106.57 C157.21,118.57 174.21,65.57 174.21,65.57 L165.21,103.57 C165.21,103.57 188.21,59.57 192.21,95.57 C196.21,131.57 220.21,67.57 215.21,58.57 C210.21,49.57 194.21,100.57 211.21,101.57 C228.21,102.57 248.21,85.57 261.21,85.57 C274.21,85.57 281.21,89.57 288.21,89.57 C295.21,89.57 307.21,85.57 307.21,85.57",
      id: "Path"
    }), __jsx("line", {
      x1: "326.31",
      y1: "78.01",
      x2: "326.21",
      y2: "77.57",
      id: "Path"
    })))))), __jsx(Links, null), __jsx(Socials, null, __jsx("a", {
      href: "https://www.linkedin.com/in/joleneng/"
    }, __jsx(SocialIcon, {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fab",
      "data-icon": "linkedin-in",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512"
    }, __jsx("path", {
      fill: "currentColor",
      d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
      className: ""
    }))), __jsx("a", {
      href: "https://www.instagram.com/jolenenjy/"
    }, __jsx(SocialIcon, {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fab",
      "data-icon": "instagram",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512"
    }, __jsx("path", {
      fill: "currentColor",
      d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
    }))), __jsx("a", {
      href: "/"
    }, __jsx(SocialIcon, {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fas",
      "data-icon": "envelope",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, __jsx("path", {
      fill: "currentColor",
      d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z",
      className: ""
    })))), __jsx(Divider, null));
  }

}
const SidebarContainer = external_styled_components_default.a.div.withConfig({
  displayName: "sidebar__SidebarContainer",
  componentId: "sc-1ggffpa-0"
})(["position:-webkit-sticky;position:sticky;top:120px;height:360px;display:flex;flex-direction:column;@media (max-width:", "){display:none;}"], theme["a" /* default */].breakpoint[1]);
const Logo = external_styled_components_default.a.a.withConfig({
  displayName: "sidebar__Logo",
  componentId: "sc-1ggffpa-1"
})(["padding:0 8px;"]);
const Nav = external_styled_components_default()(external_framer_motion_["motion"].div).withConfig({
  displayName: "sidebar__Nav",
  componentId: "sc-1ggffpa-2"
})(["display:flex;flex-direction:column;justify-content:space-between;margin:24px 0px 0 0;"]);
const NavLink = external_styled_components_default()(external_framer_motion_["motion"].a).withConfig({
  displayName: "sidebar__NavLink",
  componentId: "sc-1ggffpa-3"
})(["position:relative;width:160px;padding:8px 8px;cursor:pointer;border-radius:8px;:hover{background:rgba(31,31,54,0.4);}"]);
const Socials = external_styled_components_default.a.div.withConfig({
  displayName: "sidebar__Socials",
  componentId: "sc-1ggffpa-4"
})(["display:flex;align-items:center;margin:32px 0 0 0;"]);
const SocialIcon = external_styled_components_default.a.svg.withConfig({
  displayName: "sidebar__SocialIcon",
  componentId: "sc-1ggffpa-5"
})(["height:20px;padding:0 16px 0 8px;color:", ";transition:", ";:hover{color:", ";}"], theme["a" /* default */].colors.grey2, theme["a" /* default */].animations.default, theme["a" /* default */].colors.textLink);
const Divider = external_styled_components_default.a.div.withConfig({
  displayName: "sidebar__Divider",
  componentId: "sc-1ggffpa-6"
})(["min-height:3px;margin:32px 0px 0 8px;width:160px;background:", ";"], theme["a" /* default */].colors.grey2);
/* harmony default export */ var sidebar = (sidebar_Sidebar);
// CONCATENATED MODULE: ./components/sidebar2.tsx
var sidebar2_jsx = external_react_["createElement"];







function sidebar2_Links() {
  const router = Object(router_["useRouter"])();
  return sidebar2_jsx(sidebar2_Nav, null, sidebar2_jsx(link_default.a, {
    href: "/",
    shallow: true
  }, sidebar2_jsx(sidebar2_NavLink, {
    style: {
      color: router.pathname == "/" ? theme["a" /* default */].colors.textLink : "white",
      fontWeight: router.pathname == "/" ? theme["a" /* default */].fontWeights.medium : theme["a" /* default */].fontWeights.regular
    }
  }, "Back Home")));
}

class sidebar2_Sidebar2 extends external_react_["Component"] {
  render() {
    return sidebar2_jsx(sidebar2_SidebarContainer, null, sidebar2_jsx(link_default.a, {
      href: "/"
    }, sidebar2_jsx(sidebar2_Logo, null, sidebar2_jsx("svg", {
      width: "120px",
      viewBox: "0 0 333 161"
    }, sidebar2_jsx("g", {
      id: "Page-1",
      stroke: theme["a" /* default */].colors.textSecondary,
      fill: "none",
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, sidebar2_jsx("g", {
      id: "Asset-3",
      transform: "translate(3.000000, 4.000000)",
      strokeWidth: "6"
    }, sidebar2_jsx("path", {
      d: "M24.21,62.57 L88.21,34.57 C88.21,34.57 43.02,165.32 2.21,152.57 C-13.79,147.57 87.59,76.57 95.21,76.57 C110.21,76.57 100.39,119.82 82.21,108.57 C61.21,95.57 144.21,21.57 146.21,2.57 C148.21,-16.43 104.21,101.57 119.21,111.57 C134.21,121.57 170.21,56.57 163.21,54.57 C156.21,52.57 131.21,94.57 144.21,106.57 C157.21,118.57 174.21,65.57 174.21,65.57 L165.21,103.57 C165.21,103.57 188.21,59.57 192.21,95.57 C196.21,131.57 220.21,67.57 215.21,58.57 C210.21,49.57 194.21,100.57 211.21,101.57 C228.21,102.57 248.21,85.57 261.21,85.57 C274.21,85.57 281.21,89.57 288.21,89.57 C295.21,89.57 307.21,85.57 307.21,85.57",
      id: "Path"
    }), sidebar2_jsx("line", {
      x1: "326.31",
      y1: "78.01",
      x2: "326.21",
      y2: "77.57",
      id: "Path"
    })))))), sidebar2_jsx(sidebar2_Links, null), this.props.children, sidebar2_jsx(sidebar2_Divider, null));
  }

}
const sidebar2_SidebarContainer = external_styled_components_default.a.div.withConfig({
  displayName: "sidebar2__SidebarContainer",
  componentId: "qybiy2-0"
})(["position:-webkit-sticky;position:sticky;top:120px;height:360px;display:flex;flex-direction:column;@media (max-width:", "){display:none;}"], theme["a" /* default */].breakpoint[1]);
const sidebar2_Logo = external_styled_components_default.a.a.withConfig({
  displayName: "sidebar2__Logo",
  componentId: "qybiy2-1"
})(["padding:0 8px;"]);
const sidebar2_Nav = external_styled_components_default()(external_framer_motion_["motion"].div).withConfig({
  displayName: "sidebar2__Nav",
  componentId: "qybiy2-2"
})(["display:flex;flex-direction:column;justify-content:space-between;margin:24px 0px 0 0;"]);
const sidebar2_NavLink = external_styled_components_default()(external_framer_motion_["motion"].a).withConfig({
  displayName: "sidebar2__NavLink",
  componentId: "qybiy2-3"
})(["position:relative;width:160px;padding:8px 8px 8px 28px;cursor:pointer;border-radius:8px;transition:", ";:hover{background:rgba(31,31,54,0.4);opacity:1;::before{transform:translateX(-4px);}}::before{content:\"\u2190\";margin-left:-20px;position:absolute;transition:", ";}"], theme["a" /* default */].animations.default, theme["a" /* default */].animations.default);
const sidebar2_Divider = external_styled_components_default.a.div.withConfig({
  displayName: "sidebar2__Divider",
  componentId: "qybiy2-4"
})(["min-height:3px;margin:32px 0px 0 8px;width:160px;background:", ";"], theme["a" /* default */].colors.grey2);
/* harmony default export */ var sidebar2 = (sidebar2_Sidebar2);
// CONCATENATED MODULE: ./components/header.tsx
var header_jsx = external_react_["createElement"];







function header_Links() {
  const router = Object(router_["useRouter"])();
  return header_jsx(header_Nav, null, header_jsx(link_default.a, {
    href: "/"
  }, header_jsx(header_NavLink, {
    style: {
      color: router.pathname == "/" ? "white" : theme["a" /* default */].colors.grey3
    }
  }, "Home")), header_jsx(link_default.a, {
    href: "/playground"
  }, header_jsx(header_NavLink, {
    style: {
      color: router.pathname == "/playground" ? "white" : theme["a" /* default */].colors.grey3
    }
  }, "Playground")), header_jsx(link_default.a, {
    href: "/about"
  }, header_jsx(header_NavLink, {
    style: {
      color: router.pathname == "/about" ? "white" : theme["a" /* default */].colors.grey3
    }
  }, "About")));
}

class header_Header extends external_react_["Component"] {
  render() {
    return header_jsx(header_SidebarContainer, {
      style: {
        marginBottom: this.props.showInfo ? 55 : -82
      }
    }, header_jsx(link_default.a, {
      href: "/"
    }, header_jsx(header_Logo, null, header_jsx(Name, {
      viewBox: "0 0 333 161"
    }, header_jsx("g", {
      id: "Page-1",
      stroke: theme["a" /* default */].colors.textSecondary,
      fill: "none",
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, header_jsx("g", {
      id: "Asset-3",
      transform: "translate(3.000000, 4.000000)",
      strokeWidth: "6"
    }, header_jsx("path", {
      d: "M24.21,62.57 L88.21,34.57 C88.21,34.57 43.02,165.32 2.21,152.57 C-13.79,147.57 87.59,76.57 95.21,76.57 C110.21,76.57 100.39,119.82 82.21,108.57 C61.21,95.57 144.21,21.57 146.21,2.57 C148.21,-16.43 104.21,101.57 119.21,111.57 C134.21,121.57 170.21,56.57 163.21,54.57 C156.21,52.57 131.21,94.57 144.21,106.57 C157.21,118.57 174.21,65.57 174.21,65.57 L165.21,103.57 C165.21,103.57 188.21,59.57 192.21,95.57 C196.21,131.57 220.21,67.57 215.21,58.57 C210.21,49.57 194.21,100.57 211.21,101.57 C228.21,102.57 248.21,85.57 261.21,85.57 C274.21,85.57 281.21,89.57 288.21,89.57 C295.21,89.57 307.21,85.57 307.21,85.57",
      id: "Path"
    }), header_jsx("line", {
      x1: "326.31",
      y1: "78.01",
      x2: "326.21",
      y2: "77.57",
      id: "Path"
    })))))), header_jsx(header_Links, null));
  }

}
const header_SidebarContainer = external_styled_components_default.a.div.withConfig({
  displayName: "header__SidebarContainer",
  componentId: "sc-1m3v38v-0"
})(["position:-webkit-sticky;position:sticky;top:0px;height:100px;display:flex;justify-content:space-between;align-items:center;background:hsl(240,60%,5%);z-index:1000;@media (min-width:", "){display:none;}@media (max-width:", "){justify-content:center;height:80px;}"], theme["a" /* default */].breakpoint[1], theme["a" /* default */].breakpoint[3]);
const header_Logo = external_styled_components_default.a.a.withConfig({
  displayName: "header__Logo",
  componentId: "sc-1m3v38v-1"
})(["padding:0 8px;display:flex;justify-content:center;align-items:center;@media (max-width:", "){display:none;}"], theme["a" /* default */].breakpoint[3]);
const Name = external_styled_components_default.a.svg.withConfig({
  displayName: "header__Name",
  componentId: "sc-1m3v38v-2"
})(["width:70px;"]);
const header_Nav = external_styled_components_default()(external_framer_motion_["motion"].div).withConfig({
  displayName: "header__Nav",
  componentId: "sc-1m3v38v-3"
})(["display:flex;justify-content:space-between;cursor:pointer;"]);
const header_NavLink = external_styled_components_default()(external_framer_motion_["motion"].a).withConfig({
  displayName: "header__NavLink",
  componentId: "sc-1m3v38v-4"
})(["position:relative;padding:12px 12px;transition:", ";:hover{color:white !important;}"], theme["a" /* default */].animations.default);
/* harmony default export */ var header = (header_Header);
// CONCATENATED MODULE: ./components/footer.tsx
var footer_jsx = external_react_["createElement"];



class footer_Footer extends external_react_["Component"] {
  render() {
    return footer_jsx(FooterContainer, null, footer_jsx(footer_Socials, null, footer_jsx("a", {
      href: "https://www.linkedin.com/in/joleneng/"
    }, footer_jsx(footer_SocialIcon, {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fab",
      "data-icon": "linkedin-in",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512"
    }, footer_jsx("path", {
      fill: "currentColor",
      d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
      className: ""
    }))), footer_jsx("a", {
      href: "https://www.instagram.com/jolenenjy/"
    }, footer_jsx(footer_SocialIcon, {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fab",
      "data-icon": "instagram",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512"
    }, footer_jsx("path", {
      fill: "currentColor",
      d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
    }))), footer_jsx("a", {
      href: "/"
    }, footer_jsx(footer_SocialIcon, {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fas",
      "data-icon": "envelope",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, footer_jsx("path", {
      fill: "currentColor",
      d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z",
      className: ""
    })))), footer_jsx("span", null, "Designed & built with \u2661"));
  }

}
const FooterContainer = external_styled_components_default.a.footer.withConfig({
  displayName: "footer__FooterContainer",
  componentId: "i4zd6h-0"
})(["display:flex;max-width:1040px;margin:0 auto;justify-content:space-between;align-items:center;padding:", " 8px 150px 0;color:", ";@media (max-width:", "){width:90%;}@media (max-width:", "){padding:102px 8px 102px 0;}"], theme["a" /* default */].space[9], theme["a" /* default */].colors.grey3, theme["a" /* default */].breakpoint[0], theme["a" /* default */].breakpoint[1]);
const footer_Socials = external_styled_components_default.a.div.withConfig({
  displayName: "footer__Socials",
  componentId: "i4zd6h-1"
})(["display:flex;align-items:center;"]);
const footer_SocialIcon = external_styled_components_default.a.svg.withConfig({
  displayName: "footer__SocialIcon",
  componentId: "i4zd6h-2"
})(["height:20px;padding:0 16px 0 8px;color:", ";transition:", ";:hover{color:white;}@media (min-width:", "){display:none;}"], theme["a" /* default */].colors.grey2, theme["a" /* default */].animations.default, theme["a" /* default */].breakpoint[1]);
/* harmony default export */ var footer = (footer_Footer);
// EXTERNAL MODULE: external "react-lottie"
var external_react_lottie_ = __webpack_require__("iYUx");
var external_react_lottie_default = /*#__PURE__*/__webpack_require__.n(external_react_lottie_);

// EXTERNAL MODULE: ./public/data.json
var data = __webpack_require__("jgAZ");

// CONCATENATED MODULE: ./components/footer2.tsx
var footer2_jsx = external_react_["createElement"];





class footer2_Footer2 extends external_react_["Component"] {
  render() {
    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: data,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    return footer2_jsx("div", null, footer2_jsx(footer2_FooterContainer, null, footer2_jsx(external_react_lottie_default.a, {
      options: defaultOptions,
      height: 380,
      width: 2400,
      resizeMode: "cover"
    })), footer2_jsx(TextContainer, null, footer2_jsx(footer2_Socials, null, footer2_jsx("a", {
      href: "https://www.linkedin.com/in/joleneng/"
    }, footer2_jsx(footer2_SocialIcon, {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fab",
      "data-icon": "linkedin-in",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512"
    }, footer2_jsx("path", {
      fill: "currentColor",
      d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
      className: ""
    }))), footer2_jsx("a", {
      href: "https://www.instagram.com/jolenenjy/"
    }, footer2_jsx(footer2_SocialIcon, {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fab",
      "data-icon": "instagram",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512"
    }, footer2_jsx("path", {
      fill: "currentColor",
      d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
    }))), footer2_jsx("a", {
      href: "/"
    }, footer2_jsx(footer2_SocialIcon, {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fas",
      "data-icon": "envelope",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, footer2_jsx("path", {
      fill: "currentColor",
      d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z",
      className: ""
    })))), footer2_jsx("span", null, "Designed & built with \u2661")));
  }

}
const footer2_FooterContainer = external_styled_components_default.a.footer.withConfig({
  displayName: "footer2__FooterContainer",
  componentId: "sc-17nwbmk-0"
})(["display:flex;margin:0 auto;justify-content:flex-end;align-items:center;padding-top:80px;"]);
const TextContainer = external_styled_components_default.a.footer.withConfig({
  displayName: "footer2__TextContainer",
  componentId: "sc-17nwbmk-1"
})(["display:flex;margin:0 auto;justify-content:space-between;align-items:center;margin-top:-80px;padding:0px 8px 150px 8px;max-width:1040px;color:", ";@media (max-width:", "){width:90%;margin-top:-60px;padding:0px 8px 80px 8px;}"], theme["a" /* default */].colors.grey3, theme["a" /* default */].breakpoint[1]);
const footer2_Socials = external_styled_components_default.a.div.withConfig({
  displayName: "footer2__Socials",
  componentId: "sc-17nwbmk-2"
})(["display:flex;align-items:center;"]);
const footer2_SocialIcon = external_styled_components_default.a.svg.withConfig({
  displayName: "footer2__SocialIcon",
  componentId: "sc-17nwbmk-3"
})(["height:20px;padding:0 16px 0 8px;color:", ";transition:", ";:hover{color:white;}@media (min-width:", "){display:none;}"], theme["a" /* default */].colors.grey2, theme["a" /* default */].animations.default, theme["a" /* default */].breakpoint[1]);
/* harmony default export */ var footer2 = (footer2_Footer2);
// CONCATENATED MODULE: ./components/grid.tsx
var grid_jsx = external_react_["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function px(number) {
  return `${number}px`;
}

const GridContainer = external_styled_components_default.a.div.withConfig({
  displayName: "grid__GridContainer",
  componentId: "piem6t-0"
})(["display:grid;width:100%;gap:", ";grid-template-columns:", ";"], props => px(props.gap), props => props.columns);
function Grid(props) {
  const {
    gap = 0,
    columns = "1fr"
  } = props;
  return grid_jsx(GridContainer, _extends({
    gap: gap,
    columns: columns
  }, props));
}
// CONCATENATED MODULE: ./styles/globalstyles.tsx


const GlobalStyles = external_styled_components_["createGlobalStyle"]`

html{
    background: hsl(240, 60%, 5%);
    color: ${theme["a" /* default */].colors.lightgrey2};
}


@media (max-width: ${theme["a" /* default */].breakpoint[0]}){
  body:before, body:after{ 
    max-width: 90vw;
    background: -webkit-linear-gradient(0deg,#242A2E 1px,transparent 0px) 0 0 / calc(90vw/4) auto;
  }
}

@media (max-width: ${theme["a" /* default */].breakpoint[1]}){
body:before, body:after{ 
    background: -webkit-linear-gradient(0deg,#191D20 1px,transparent 0px) 0 0 / calc(90vw/2) auto;
  }
}

h1 {
    font-size: 60px;
    letter-spacing: -0.02em;
    line-height: 80px;
    font-weight: ${theme["a" /* default */].fontWeights.bold};
}

@media (max-width: ${theme["a" /* default */].breakpoint[1]}){
h1 {
    font-size: 50px;
    letter-spacing: -0.02em;
    line-height: 60px;
    font-weight: ${theme["a" /* default */].fontWeights.bold};
}
}

@media (max-width: ${theme["a" /* default */].breakpoint[2]}){
h1 {
    font-size: 30px;
    letter-spacing: -0.02em;
    line-height: 40px;
    font-weight: ${theme["a" /* default */].fontWeights.bold};
}
}

h2 {
    font-size: ${theme["a" /* default */].fontSizes[1]};
    letter-spacing: -0.014em;
    line-height: 40px;
    font-weight: ${theme["a" /* default */].fontWeights.semibold};
}

h3 {
    font-size: ${theme["a" /* default */].fontSizes[2]};
    letter-spacing: -0.012em;
    line-height: 30px;
}

h4 {
    font-size: ${theme["a" /* default */].fontSizes[4]};
    letter-spacing: -0.010em;
    line-height: 28px;
    font-weight: ${theme["a" /* default */].fontWeights.regular};
}

h5 {
    font-size: ${theme["a" /* default */].fontSizes[5]};
    letter-spacing: -0.008em;
    line-height: 24px;
}

h6 {
    font-size: ${theme["a" /* default */].fontSizes[6]};
    letter-spacing: -0.002em;
    line-height: 20px;
    font-weight: ${theme["a" /* default */].fontWeights.semibold};
}

p {
    font-size: ${theme["a" /* default */].fontSizes[4]};
     letter-spacing: -0.010em;
    line-height: 28px;
    font-weight: ${theme["a" /* default */].fontWeights.regular};
    color: ${theme["a" /* default */].colors.textSecondary};
}

span {
    font-size: ${theme["a" /* default */].fontSizes[6]};
    letter-spacing: -0.004em;
    line-height: 20px;
    font-weight: ${theme["a" /* default */].fontWeights.regular};
}

a {
    font-size: ${theme["a" /* default */].fontSizes[5]};
    letter-spacing: -0.006em;
    line-height: 28px;
    font-weight: ${theme["a" /* default */].fontWeights.regular};
    color: rgb(64,156,255);
}

`;
/* harmony default export */ var globalstyles = (GlobalStyles);
// CONCATENATED MODULE: ./components/layout.tsx
var layout_jsx = external_react_["createElement"];













const ShowInfo = props => {
  const {
    scrollY
  } = Object(external_framer_motion_["useViewportScroll"])();
  const firstRange = [0, 340, 430, 520];
  const secondRange = [0, 840, 930, 1020];
  const opacityRange = [1, 1, 0.3, 0];
  const MoveRange = [0, 0, -50, -100];
  const firstOp = Object(external_framer_motion_["useTransform"])(scrollY, firstRange, opacityRange);
  const firstMove = Object(external_framer_motion_["useTransform"])(scrollY, firstRange, MoveRange);
  const secondOp = Object(external_framer_motion_["useTransform"])(scrollY, secondRange, opacityRange);
  const secondMove = Object(external_framer_motion_["useTransform"])(scrollY, secondRange, MoveRange);
  return layout_jsx("div", {
    style: {
      display: props.home ? "contents" : "none"
    }
  }, layout_jsx(TimeSection, {
    style: {
      marginTop: 182
    }
  }, layout_jsx(external_framer_motion_["motion"].div, {
    style: {
      opacity: firstOp,
      translateY: firstMove
    }
  }, layout_jsx(TimeRange, null, "2019 - Present"), layout_jsx(CompanyTitle, null, "Grab"), layout_jsx(CompanyDesc, null, "Delivery solutions"))), layout_jsx(TimeSection, {
    style: {
      marginTop: 394
    }
  }, layout_jsx(external_framer_motion_["motion"].div, {
    style: {
      opacity: secondOp,
      translateY: secondMove
    }
  }, layout_jsx(TimeRange, null, "2017 - 2019"), layout_jsx(CompanyTitle, null, "Govtech"), layout_jsx(CompanyDesc, null, "Government services"))), layout_jsx(TimeSection, {
    style: {
      marginTop: 394
    }
  }, layout_jsx(TimeRange, null, "2012 - 2016"), layout_jsx(CompanyTitle, null, "Past Projects"), layout_jsx(CompanyDesc, null, "Industrial design")));
};

const ScrollIndicator = () => {
  const [width, setWidth] = external_react_["useState"](0);
  external_react_["useEffect"](() => {
    setWidth(window.innerWidth);
  });
  const {
    scrollYProgress
  } = Object(external_framer_motion_["useViewportScroll"])();
  const ScrollRange = [0, 1];
  const WidthRange = [0, width];
  const ScrollWidth = Object(external_framer_motion_["useTransform"])(scrollYProgress, ScrollRange, WidthRange);
  return layout_jsx(ScrollDiv, {
    style: {
      width: ScrollWidth
    }
  });
};

class layout_Layout extends external_react_["Component"] {
  render() {
    return layout_jsx("div", null, layout_jsx(globalstyles, null), layout_jsx(head_default.a, null, layout_jsx("title", null, this.props.title), layout_jsx("meta", {
      charSet: "utf-8"
    }), layout_jsx("meta", {
      name: "viewport",
      content: "initial-scale=1.0, width=device-width"
    })), this.props.project ? layout_jsx(ScrollIndicator, null) : "", layout_jsx(BodyContainer, null, layout_jsx(header, null), layout_jsx(LayoutGrid, {
      gap: 0,
      columns: "1fr 3fr"
    }, this.props.project ? layout_jsx(sidebar2, {
      showInfo: this.props.home
    }, this.props.children2()) : layout_jsx("div", null, layout_jsx(sidebar, {
      showInfo: this.props.home
    }), layout_jsx(ShowInfo, {
      home: this.props.home
    })), layout_jsx(ContentContainer, null, this.props.children))), this.props.about ? layout_jsx(footer2, null) : layout_jsx(footer, null));
  }

}
const BodyContainer = external_styled_components_default.a.div.withConfig({
  displayName: "layout__BodyContainer",
  componentId: "vg5axk-0"
})(["max-width:1040px;margin:0 auto;@media (max-width:", "){width:90%;}"], theme["a" /* default */].breakpoint[0]);
const ContentContainer = external_styled_components_default.a.div.withConfig({
  displayName: "layout__ContentContainer",
  componentId: "vg5axk-1"
})(["max-width:", ";padding:0 8px;min-width:0;"], theme["a" /* default */].maxWidth);
const TimeRange = external_styled_components_default.a.h6.withConfig({
  displayName: "layout__TimeRange",
  componentId: "vg5axk-2"
})(["font-weight:", ";color:", ";text-transform:uppercase;"], theme["a" /* default */].fontWeights.semibold, theme["a" /* default */].colors.grey4);
const CompanyTitle = external_styled_components_default.a.h2.withConfig({
  displayName: "layout__CompanyTitle",
  componentId: "vg5axk-3"
})(["margin-top:12px;"]);
const CompanyDesc = external_styled_components_default.a.h4.withConfig({
  displayName: "layout__CompanyDesc",
  componentId: "vg5axk-4"
})(["font-weight:", ";color:", ";margin-top:4px;"], theme["a" /* default */].fontWeights.regular, theme["a" /* default */].colors.lightgrey1);
const LayoutGrid = external_styled_components_default()(Grid).withConfig({
  displayName: "layout__LayoutGrid",
  componentId: "vg5axk-5"
})(["@media (max-width:", "){grid-template-columns:1fr;}"], theme["a" /* default */].breakpoint[1]);
const TimeSection = external_styled_components_default.a.div.withConfig({
  displayName: "layout__TimeSection",
  componentId: "vg5axk-6"
})(["margin-left:8px;position:sticky;top:480px;overflow:hidden;@media (max-width:", "){display:none !important;}"], theme["a" /* default */].breakpoint[1]);
const ScrollDiv = external_styled_components_default()(external_framer_motion_["motion"].div).withConfig({
  displayName: "layout__ScrollDiv",
  componentId: "vg5axk-7"
})(["position:sticky;height:3px;top:0;background:", ";"], theme["a" /* default */].colors.lightgrey1);
/* harmony default export */ var layout = __webpack_exports__["a"] = (layout_Layout);

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("zMHD");


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Hdsr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iaY6");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




const TopSection = ({
  title = "Default title",
  title2 = "Default title",
  title3 = "Default title",
  subtitle = "Default subtitle"
}) => __jsx(TopContainer, null, __jsx("h1", null, title), __jsx(AccentTitle, null, title2), __jsx(DarkTitle, null, title3), __jsx(Subtitle, null, subtitle));

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
})(["color:", ";"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].colors.grey2);
const Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h4.withConfig({
  displayName: "topsection__Subtitle",
  componentId: "sc-9qcv5k-3"
})(["font-weight:", ";padding:16px 48px 0 2px;color:", ";@media (max-width:", "){padding:16px 24px 0 2px;}@media (max-width:", "){padding:16px 8px 0 2px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].fontWeights.regular, _styles_theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].colors.lightgrey1, _styles_theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].breakpoint[1], _styles_theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].breakpoint[2]);
/* harmony default export */ __webpack_exports__["a"] = (TopSection);

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
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

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
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

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

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

    if (false) {}

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
      if (false) {}
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

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
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

/***/ "elyg":
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

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

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

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
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
        if (false) {}

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
            if (false) {}

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

        if (false) {}

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
    if (false) {}

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

      if (false) {}

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
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

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

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
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

  if (false) {} // when called from _app `ctx` is nested in `ctx`


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

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
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

/***/ "iYUx":
/***/ (function(module, exports) {

module.exports = require("react-lottie");

/***/ }),

/***/ "iaY6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony default export */ __webpack_exports__["a"] = (theme);

/***/ }),

/***/ "jgAZ":
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.7.1\",\"fr\":29.9700012207031,\"ip\":0,\"op\":89.0000036250443,\"w\":2559,\"h\":400,\"nm\":\"about\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"torso Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1287.464,88.858,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[70.297,35.416,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.474,1.332],[10.683,-3.273],[14.601,-3.014],[0,0],[-17.101,5.096],[-9.774,3.464],[-1.528,-3.291]],\"o\":[[-1.441,-4.058],[-19.012,5.825],[3.889,6.04],[0,0],[7.861,-2.344],[0.949,1.589],[-0.329,-2.491]],\"v\":[[44.48,-7.182],[31.453,-13.705],[-45.738,4.298],[-39.387,14.673],[13.041,1.755],[41.845,-7.892],[45.737,-0.475]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.999999940162,0.999999940162,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":6,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[77.447,55.909],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-29.553,4.442],[-11.9,-32.164],[17.101,-5.097],[0,0],[15.632,11.259]],\"o\":[[0,0],[0,0],[-17.1,5.096],[0,0],[-3.971,-2.86]],\"v\":[[31.252,-35.166],[70.047,4.976],[20.192,22.248],[-32.235,35.166],[-66.075,-8.157]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.086274509804,0.427450980392,0.937254901961,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[70.296,35.416],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":90.0000036657751,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"head Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1378.18,81.999,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[49.034,36.719,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-1.885,2.089],[-6.893,1.858],[-0.429,-2.874],[0.805,-3.105],[0.44,-2.719],[2.33,0.697]],\"o\":[[0,0],[1.885,-2.088],[5.151,-1.389],[0.573,3.824],[-1.443,5.568],[-0.44,2.719],[-2.329,-0.698]],\"v\":[[-11.088,0.74],[-11.206,-3.104],[1.924,-11.334],[12.518,-9.296],[7.973,2.026],[11.124,9.743],[1.337,12.025]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.886274509804,0.721568627451,0.666666666667,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[13.341,16.617],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[12.786,2.91],[13.225,10.168],[-3.298,-3.884],[-10.717,-3.848],[-4.652,9.237],[0.182,2.514]],\"o\":[[-9.233,-2.101],[-12.335,-9.487],[8.396,9.873],[22.125,7.945],[1.235,-2.452],[-3.556,7.494]],\"v\":[[8.826,2.71],[-17.945,-10.295],[-36.082,-12.233],[-0.39,13.641],[35.226,0.815],[36.724,-6.708]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.999999940162,0.999999940162,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":9,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[57.94,51.601],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-13.085,-3.027],[-8.42,-4.117],[-12.891,-5.785],[4.653,-9.237],[22.125,7.945],[2.665,9.767]],\"o\":[[0,0],[13.084,3.027],[8.421,4.116],[9.551,4.286],[-4.652,9.237],[-14.007,-5.03],[-1.643,-6.023]],\"v\":[[-43.696,-29.694],[-23.362,-33.442],[-2.732,-19.256],[27.681,-8.553],[39.043,15.698],[3.427,28.524],[-37.285,-5.494]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.095291107776,0.109411075068,0.264730715284,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[54.123,36.719],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":90.0000036657751,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"right arm Outlines 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":11,\"s\":[25.364]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":38,\"s\":[25.364]},{\"t\":49.0000019958109,\"s\":[0]}],\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":0,\"s\":[1274.463,52.435,0],\"to\":[1.011,-2.167,0],\"ti\":[-0.212,0.169,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":11,\"s\":[1280.826,40.799,0],\"to\":[0.487,-0.387,0],\"ti\":[-0.212,-0.331,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":38,\"s\":[1280.826,40.799,0],\"to\":[0.335,0.524,0],\"ti\":[-1.167,2.5,0]},{\"t\":49.0000019958109,\"s\":[1274.463,52.435,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[49.186,11.914,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":0,\"s\":[{\"i\":[[-2.429,-0.883],[0,0],[13.587,-3.371]],\"o\":[[0,0],[0,0],[3.378,1.194]],\"v\":[[-2.855,2.85],[11.753,-2.713],[-11.752,-0.339]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":11,\"s\":[{\"i\":[[-2.429,-0.883],[0,0],[16.991,-9.455]],\"o\":[[0,0],[0,0],[3.378,1.194]],\"v\":[[0.905,3.613],[12.98,-3.792],[-6.339,1.576]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":38,\"s\":[{\"i\":[[-2.429,-0.883],[0,0],[16.991,-9.455]],\"o\":[[0,0],[0,0],[3.378,1.194]],\"v\":[[0.905,3.613],[12.98,-3.792],[-6.339,1.576]],\"c\":true}]},{\"t\":49.0000019958109,\"s\":[{\"i\":[[-2.429,-0.883],[0,0],[13.587,-3.371]],\"o\":[[0,0],[0,0],[3.378,1.194]],\"v\":[[-2.855,2.85],[11.753,-2.713],[-11.752,-0.339]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":4,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.095291107776,0.109411075068,0.264730715284,1],\"ix\":4},\"o\":{\"a\":0,\"k\":77,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[71.453,18.796],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":0,\"s\":[{\"i\":[[0.683,0.55],[7.423,1.26],[0,0],[-7.261,-3.247]],\"o\":[[-9.327,-7.51],[0,0],[10.544,2.977],[-0.235,-0.555]],\"v\":[[19.273,6.198],[-16.697,-7.357],[-17.757,-3.681],[15.921,7.842]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":11,\"s\":[{\"i\":[[0.683,0.55],[7.423,1.26],[0,0],[-7.261,-3.247]],\"o\":[[-9.327,-7.51],[0,0],[9.494,2.328],[-0.235,-0.555]],\"v\":[[19.273,6.198],[-13.238,-12.317],[-15.523,-8.89],[15.921,7.842]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":38,\"s\":[{\"i\":[[0.683,0.55],[7.423,1.26],[0,0],[-7.261,-3.247]],\"o\":[[-9.327,-7.51],[0,0],[9.494,2.328],[-0.235,-0.555]],\"v\":[[19.273,6.198],[-13.238,-12.317],[-15.523,-8.89],[15.921,7.842]],\"c\":true}]},{\"t\":49.0000019958109,\"s\":[{\"i\":[[0.683,0.55],[7.423,1.26],[0,0],[-7.261,-3.247]],\"o\":[[-9.327,-7.51],[0,0],[10.544,2.977],[-0.235,-0.555]],\"v\":[[19.273,6.198],[-16.697,-7.357],[-17.757,-3.681],[15.921,7.842]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.999999940162,0.999999940162,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":7,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[56.313,15.134],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":0,\"s\":[{\"i\":[[36.525,2.913],[0,0],[0,0],[0,0]],\"o\":[[0,0],[12.482,3.525],[0,0],[-14.284,-6.327]],\"v\":[[-28.399,-10.087],[-30.581,-2.523],[6.325,10.087],[30.581,1.569]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":11,\"s\":[{\"i\":[[31.657,8.731],[0,0],[0,0],[0,0]],\"o\":[[0,0],[11.247,4.264],[0,0],[-15.707,-1.899]],\"v\":[[-24.088,-14.639],[-26.27,-7.076],[6.325,10.087],[30.828,-5.338]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":38,\"s\":[{\"i\":[[31.657,8.731],[0,0],[0,0],[0,0]],\"o\":[[0,0],[11.247,4.264],[0,0],[-15.707,-1.899]],\"v\":[[-24.088,-14.639],[-26.27,-7.076],[6.325,10.087],[30.828,-5.338]],\"c\":true}]},{\"t\":49.0000019958109,\"s\":[{\"i\":[[36.525,2.913],[0,0],[0,0],[0,0]],\"o\":[[0,0],[12.482,3.525],[0,0],[-14.284,-6.327]],\"v\":[[-28.399,-10.087],[-30.581,-2.523],[6.325,10.087],[30.581,1.569]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":4,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.086274509804,0.427450980392,0.937254901961,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[67.541,13.492],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":90.0000036657751,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"right arm Outlines 3\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":11,\"s\":[35.364]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":38,\"s\":[35.364]},{\"t\":49.0000019958109,\"s\":[0]}],\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":0,\"s\":[1274.463,52.435,0],\"to\":[1.011,-2.167,0],\"ti\":[-0.212,0.169,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":11,\"s\":[1284.576,39.299,0],\"to\":[0.487,-0.387,0],\"ti\":[-0.212,0.169,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":38,\"s\":[1284.576,39.299,0],\"to\":[0.487,-0.387,0],\"ti\":[-1.167,2.5,0]},{\"t\":49.0000019958109,\"s\":[1274.463,52.435,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[49.186,11.914,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":11,\"s\":[{\"i\":[[0,0],[10.031,-0.811],[3.239,-2.584],[-3.293,-0.176],[-3.508,0.025],[-4.036,-1.004]],\"o\":[[0,0],[-5.776,0.467],[-3.033,2.42],[3.222,0.173],[3.508,-0.026],[4.037,1.004]],\"v\":[[19.728,-2.566],[-6.48,-3.754],[-17.341,-3.277],[-15.326,2.462],[-6.448,1.735],[16.336,4.858]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":17,\"s\":[{\"i\":[[0,0],[10.591,3.014],[3.59,-0.969],[-1.592,-1.987],[-3.385,-0.92],[-4.036,-1.004]],\"o\":[[0,0],[-5.574,-1.586],[-3.746,1.011],[2.161,2.697],[3.864,1.05],[4.037,1.004]],\"v\":[[19.728,-2.566],[-5.803,-6.688],[-13.691,-9.28],[-14.923,-3.384],[-5.771,-1.199],[16.336,4.858]],\"c\":true}]},{\"i\":{\"x\":0.452,\"y\":1},\"o\":{\"x\":0.181,\"y\":0},\"t\":22,\"s\":[{\"i\":[[0,0],[10.031,-0.811],[3.239,-2.584],[-3.293,-0.176],[-3.508,0.025],[-4.036,-1.004]],\"o\":[[0,0],[-5.776,0.467],[-3.033,2.42],[3.222,0.173],[3.508,-0.026],[4.037,1.004]],\"v\":[[19.728,-2.566],[-6.48,-3.754],[-16.223,-3.254],[-14.208,2.486],[-6.448,1.735],[16.336,4.858]],\"c\":true}]},{\"i\":{\"x\":0.462,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":24,\"s\":[{\"i\":[[0,0],[10.031,-0.811],[3.239,-2.584],[-3.293,-0.176],[-3.508,0.025],[-4.036,-1.004]],\"o\":[[0,0],[-5.776,0.467],[-3.033,2.42],[3.222,0.173],[3.508,-0.026],[4.037,1.004]],\"v\":[[19.728,-2.566],[-6.48,-3.754],[-16.591,-1.696],[-14.576,4.044],[-6.448,1.735],[16.336,4.858]],\"c\":true}]},{\"i\":{\"x\":0.461,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":31,\"s\":[{\"i\":[[0,0],[10.591,3.014],[3.59,-0.969],[-1.592,-1.987],[-3.385,-0.92],[-4.036,-1.004]],\"o\":[[0,0],[-5.574,-1.586],[-3.746,1.011],[2.161,2.697],[3.864,1.05],[4.037,1.004]],\"v\":[[19.728,-2.566],[-5.803,-6.688],[-13.691,-9.28],[-14.923,-3.384],[-5.771,-1.199],[16.336,4.858]],\"c\":true}]},{\"i\":{\"x\":0.7,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":36,\"s\":[{\"i\":[[0,0],[10.031,-0.811],[3.239,-2.584],[-3.293,-0.176],[-3.508,0.025],[-4.036,-1.004]],\"o\":[[0,0],[-5.776,0.467],[-3.033,2.42],[3.222,0.173],[3.508,-0.026],[4.037,1.004]],\"v\":[[19.728,-2.566],[-6.48,-3.754],[-17.341,-3.277],[-15.326,2.462],[-6.448,1.735],[16.336,4.858]],\"c\":true}]},{\"t\":39.0000015885026,\"s\":[{\"i\":[[0,0],[10.031,-0.811],[3.239,-2.584],[-3.293,-0.176],[-3.508,0.025],[-4.036,-1.004]],\"o\":[[0,0],[-5.776,0.467],[-3.033,2.42],[3.222,0.173],[3.508,-0.026],[4.037,1.004]],\"v\":[[19.728,-2.566],[-6.48,-3.754],[-17.341,-3.277],[-15.326,2.462],[-6.448,1.735],[16.336,4.858]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":4,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.884375,0.719890579523,0.668022784065,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[20.623,6.111],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":90.0000036657751,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"left arm Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1350.011,114.935,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[15.004,52.616,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.163,-24.887],[0,0],[10.552,19.388],[0,0]],\"o\":[[-0.247,0.824],[2.01,-16.071],[-12.849,-23.605],[0,0]],\"v\":[[-1.524,40.047],[6.595,39.856],[4.202,-17.266],[-14.754,-3.9]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.086274509804,0.427450980392,0.937254901961,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[15.004,41.121],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.084,-4.004],[-1.249,-2.74],[-2.165,4.28],[-0.667,3.283],[0.242,2.816]],\"o\":[[0,0],[0.067,3.194],[1.231,2.701],[2.166,-4.281],[0.666,-3.283],[-0.243,-2.816]],\"v\":[[-1.858,-10.374],[-1.727,0.726],[-5.192,11.758],[4.1,10.537],[5.503,-0.41],[6.199,-12.001]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.886274509804,0.721568627451,0.666666666667,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[15.315,90.165],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":90.0000036657751,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\"left leg Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1196.625,122.978,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[61.028,24.431,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-2.671,-4.819],[-1.324,0.203],[-0.095,0.223],[0,0],[2.525,-0.574]],\"o\":[[3.853,-0.614],[0.101,-0.225],[0,0],[0,0],[5.136,8.125]],\"v\":[[2.399,11.244],[10.519,9.973],[10.812,9.3],[-6.851,-11.245],[-10.812,-10.411]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.144646797928,0.095291107776,0.264730715284,1],\"ix\":4},\"o\":{\"a\":0,\"k\":33,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[110.516,11.494],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[4.812,-3.4],[-0.578,-0.716],[-15.199,3.296],[0,0]],\"o\":[[-48.987,4.604],[1.171,1.547],[14.54,-6.418],[15.198,-3.297],[0,0]],\"v\":[[38.905,-13.85],[-42.948,10.389],[-40.341,13.851],[-0.951,0.084],[42.948,-7.553]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.999999940162,0.999999940162,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":9,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[78.857,28.904],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[30.832,-24.49],[-1.271,-1.572],[-15.199,3.297],[0,0]],\"o\":[[0,0],[4.351,4.847],[14.541,-6.418],[15.198,-3.297],[0,0]],\"v\":[[27.621,-21.252],[-45.762,10.938],[-37.527,21.252],[1.862,7.485],[45.762,-0.151]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.095291107776,0.110475240969,0.264730715284,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[76.044,21.502],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[1.888,-0.571],[3.515,-1.196],[-7.539,-2.485],[-1.643,1.38],[0,0]],\"o\":[[0,0],[-1.888,0.571],[-3.515,1.195],[7.54,2.485],[1.644,-1.381],[0,0]],\"v\":[[13.659,-6.005],[6.522,-3.121],[-16.13,-7.72],[2.537,6.431],[12.771,5.724],[19.646,0.686]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.886274509804,0.721568627451,0.666666666667,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[19.895,39.696],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":90.0000036657751,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":7,\"ty\":4,\"nm\":\"right leg Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1180.643,103.64,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[60.247,23.139,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[1.515,-0.271],[-4.994,-7.879],[0,0],[0,0]],\"o\":[[1.198,1.85],[3.978,-0.753],[0,0],[0,0]],\"v\":[[-8.588,-8.162],[2.124,8.554],[8.585,7.374],[-6.233,-8.554]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.095291107776,0.109411075068,0.264730715284,1],\"ix\":4},\"o\":{\"a\":0,\"k\":33,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[111.659,8.804],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[7.884,-5.368],[0,0],[-14.859,4.592],[0,0]],\"o\":[[-38.876,3.458],[1.983,2.164],[14.541,-6.418],[18.729,-5.788],[0,0]],\"v\":[[40.625,-16.079],[-42.225,13.218],[-39.685,16.08],[-4.073,1.077],[42.225,-9.454]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.999999940162,0.999999940162,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":9,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[78.019,25.633],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[29.428,-25.674],[0,0],[-14.859,4.592],[0,0]],\"o\":[[0,0],[6.96,7.274],[14.541,-6.418],[18.729,-5.788],[0,0]],\"v\":[[30.362,-20.731],[-45.18,11.585],[-36.73,20.731],[-1.118,5.728],[45.18,-4.803]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.095291107776,0.109411075068,0.264730715284,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[75.064,20.981],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[3.771,0.902],[4.175,-1.088],[-3.766,-2.264],[-4.148,1.629],[0,0]],\"o\":[[0,0],[-3.771,-0.902],[-4.175,1.088],[3.767,2.265],[4.149,-1.63],[0,0]],\"v\":[[12.614,-4.067],[5.951,-2.85],[-14.547,-7.993],[-2.377,3.912],[10.267,7.452],[18.722,2.761]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.886274509804,0.721568627451,0.666666666667,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[18.972,36.947],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":90.0000036657751,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":8,\"ty\":4,\"nm\":\"bg Outlines 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1279.3,300.792,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[1279.551,305.773,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.36,-0.754],[-0.795,0.469],[0,0]],\"o\":[[0,0],[1.805,3.789],[5.055,-2.985],[0,0]],\"v\":[[-14.458,-22.29],[-17.693,-21.413],[16.284,22.285],[11.382,2.203]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.144646797928,0.095291107776,0.264730715284,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[1239.196,106.72],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":90.0000036657751,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":9,\"ty\":4,\"nm\":\"bg Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1279.3,336.792,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[1279.551,305.773,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-792.633,0],[0,0],[0,0]],\"o\":[[792.633,0],[0,0],[0,0]],\"v\":[[30.678,-305.218],[1279.301,305.829],[-1279.301,305.829]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"gf\",\"o\":{\"a\":0,\"k\":100,\"ix\":10},\"r\":2,\"bm\":0,\"g\":{\"p\":3,\"k\":{\"a\":0,\"k\":[0,0.051,0.051,0.114,0.5,0.051,0.051,0.114,1,0.051,0.051,0.114,0,0,0.478,0.5,1,1],\"ix\":9}},\"s\":{\"a\":0,\"k\":[25.18,35.883],\"ix\":5},\"e\":{\"a\":0,\"k\":[26.117,-222.492],\"ix\":6},\"t\":1,\"nm\":\"Gradient Fill 1\",\"mn\":\"ADBE Vector Graphic - G-Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[1279.551,305.468],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":90.0000036657751,\"st\":0,\"bm\":0}],\"markers\":[]}");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "mdxU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iaY6");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("wmQq");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];






const OtherProjects = ({
  url1 = "/project1",
  proj1 = "Self Pick-Up",
  url2 = "/project2",
  proj2 = "Delivery features",
  url3 = "/project3",
  proj3 = "Parents Gateway"
}) => __jsx(Nav, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: url1,
  shallow: true
}, __jsx(NavLink, null, proj1)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: url2,
  shallow: true
}, __jsx(NavLink, null, proj2)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: url3,
  shallow: true
}, __jsx(NavLink, null, proj3)));

const Nav = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div).withConfig({
  displayName: "otherprojects__Nav",
  componentId: "sc-1qi6aik-0"
})(["display:flex;flex-direction:row;justify-content:space-between;margin:24px -8px 0 -8px;"]);
const NavLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].a).withConfig({
  displayName: "otherprojects__NavLink",
  componentId: "sc-1qi6aik-1"
})(["position:relative;font-size:", ";width:260px;padding:8px 8px;cursor:pointer;border-radius:8px;color:white;transition:", ";:hover{background:rgba(31,31,54,0.4);opacity:1;::after{transform:translateX(4px);}}::after{content:\"\u2192\";margin-left:8px;position:absolute;transition:", ";}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].fontSizes[4], _styles_theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].animations.default, _styles_theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].animations.default);
/* harmony default export */ __webpack_exports__["a"] = (OtherProjects);

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

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

/***/ "wmQq":
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zMHD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project2", function() { return Project2; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iaY6");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5M6V");
/* harmony import */ var _components_topsection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Hdsr");
/* harmony import */ var _components_otherprojects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("mdxU");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class Project2 extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.One = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.Two = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.Three = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  }

  render() {
    const scrollOne = () => window.scrollTo({
      top: this.One.current.offsetTop - 220,
      behavior: "smooth"
    });

    const scrollTwo = () => window.scrollTo({
      top: this.Two.current.offsetTop - 220,
      behavior: "smooth"
    });

    const scrollThree = () => window.scrollTo({
      top: this.Three.current.offsetTop - 220,
      behavior: "smooth"
    });

    const test = () => __jsx(Nav, null, __jsx(NavLink, {
      style: {
        color: "white"
      },
      onClick: scrollOne
    }, "In-transit Experience"), __jsx(NavLink, {
      style: {
        color: "white"
      },
      onClick: scrollTwo
    }, "Self-serve integration"), __jsx(NavLink, {
      style: {
        color: "white"
      },
      onClick: scrollThree
    }, "Food item hero photo"));

    return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      title: "Jolene Ng | Delivery Features",
      project: true,
      children2: test
    }, __jsx(_components_topsection__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      title: "Delivery features",
      title2: "",
      title3: "For food & Express",
      subtitle: ""
    }), __jsx(Paragraph, null, "Here are some of the features I've worked on over my time at grab:"), __jsx(SideSection, null, __jsx(SideText, null, __jsx(Subtitle, {
      ref: this.One
    }, "In-transit Experience"), __jsx(Paragraph, null, "The main goal of the in-transit screens is to keep users assured and informed about the progress of their order. However, our previous screens had users focused too much on the map vs. any other information."), __jsx(Paragraph2, null, "By replacing the map with animations and tweaking the visual hierarchy, we saw up to 10% decrease in pre-allocation cancellation (for express).")), __jsx(HalfImg, null)), __jsx(SideSection, null, __jsx(SideText, null, __jsx(Subtitle, {
      ref: this.Two
    }, "Self-serve Integration for Express API"), __jsx(Paragraph, null, "GrabExpress is the second most used integration product on", __jsx("a", {
      href: "https://developer.grab.com/"
    }, " GrabPlatform"), "."), __jsx(Paragraph2, null, "By allowing partners to add configurations and make test orders via the web portal, we eliminated the need for engineering support and reduced the integration time by weeks.")), __jsx(HalfImg2, null)), __jsx(SideSection, null, __jsx(SideText, null, __jsx(Subtitle, {
      ref: this.Three
    }, "Food item hero photo"), __jsx(Paragraph, null, "With the understanding that users ordering food delivery are often motivated by images rather than words, we wanted to allow them to further interact with our item level photos."), __jsx(Paragraph2, null, "By showing the full photo on scroll and allowing users to zoom in on the image, we saw an increase in both menu to basket conversion as well as orders completed.")), __jsx(HalfImg3, null)), __jsx(Subtitle, null, "Other Projects "), __jsx(_components_otherprojects__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      url2: "/project3",
      proj2: "Parents Gateway",
      url3: "/project4",
      proj3: "Housing resale portal"
    }));
  }

}
const Nav = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "project2__Nav",
  componentId: "sc-1pm8tms-0"
})(["display:flex;flex-direction:column;justify-content:space-between;margin:16px 0px 0 0;"]);
const NavLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "project2__NavLink",
  componentId: "sc-1pm8tms-1"
})(["position:relative;width:200px;padding:8px 8px;cursor:pointer;border-radius:8px;transition:", ";:hover{background:rgba(31,31,54,0.4);opacity:1;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].animations.default);
const Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h4.withConfig({
  displayName: "project2__Subtitle",
  componentId: "sc-1pm8tms-2"
})(["margin-top:48px;font-weight:", ";color:", ";@media (max-width:", "){margin-top:48px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].fontWeights.semibold, _styles_theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].colors.lightgrey3, _styles_theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].breakpoint[2]);
const Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "project2__Paragraph",
  componentId: "sc-1pm8tms-3"
})(["margin-top:8px;@media (max-width:", "){margin-top:16px;}a{font-size:", ";}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].breakpoint[2], _styles_theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].fontSizes[4]);
const Paragraph2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "project2__Paragraph2",
  componentId: "sc-1pm8tms-4"
})(["margin-top:16px;color:", ";@media (max-width:", "){margin-top:16px;}a{font-size:", ";}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].colors.lightgrey1, _styles_theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].breakpoint[2], _styles_theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].fontSizes[4]);
const SideSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "project2__SideSection",
  componentId: "sc-1pm8tms-5"
})(["display:flex;justify-content:space-between;align-items:center;margin-top:24px;margin-bottom:64px;@media (max-width:", "){flex-direction:column;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].breakpoint[2]);
const SideText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "project2__SideText",
  componentId: "sc-1pm8tms-6"
})(["width:50%;@media (max-width:", "){width:100%;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].breakpoint[2]);
const HalfImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "project2__HalfImg",
  componentId: "sc-1pm8tms-7"
})(["width:300px;height:400px;border-radius:12px;margin-top:40px;background:rgba(31,31,54,0.4);background-image:url(/intransit.gif);background-size:240px auto;background-position:30px 30px;background-repeat:no-repeat;opacity:0.94;@media (max-width:", "){width:100%;height:320px;background-position:center 30px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].breakpoint[2]);
const HalfImg2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "project2__HalfImg2",
  componentId: "sc-1pm8tms-8"
})(["width:300px;height:350px;border-radius:12px;margin-top:40px;background:rgba(31,31,54,0.4);background-image:url(/feat-0.png);background-size:400px auto;background-position:30px 30px;background-repeat:no-repeat;opacity:0.94;@media (max-width:", "){width:100%;height:300px;background-position:center 30px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].breakpoint[2]);
const HalfImg3 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "project2__HalfImg3",
  componentId: "sc-1pm8tms-9"
})(["width:300px;height:400px;border-radius:12px;margin-top:40px;background:rgba(31,31,54,0.4);background-image:url(/hero.gif);background-size:240px auto;background-position:30px 30px;background-repeat:no-repeat;opacity:0.94;@media (max-width:", "){width:100%;height:320px;background-position:center 30px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].breakpoint[2]);
/* harmony default export */ __webpack_exports__["default"] = (Project2);

/***/ })

/******/ });