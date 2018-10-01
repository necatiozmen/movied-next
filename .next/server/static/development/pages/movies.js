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

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: getMovies, getSeries, changeHeaderTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovies", function() { return getMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSeries", function() { return getSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeHeaderTitle", function() { return changeHeaderTitle; });
/* harmony import */ var _middlewares_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../middlewares/api */ "./middlewares/api.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var getMovies = function getMovies() {
  return _defineProperty({
    type: 'GET_MOVIES'
  }, _middlewares_api__WEBPACK_IMPORTED_MODULE_0__["API"], {
    endpoint: '/v1/api/feed/movies',
    method: 'GET'
  });
};
var getSeries = function getSeries() {
  return _defineProperty({
    type: 'GET_SERIES'
  }, _middlewares_api__WEBPACK_IMPORTED_MODULE_0__["API"], {
    endpoint: '/v1/api/feed/series',
    method: 'GET'
  });
};
var changeHeaderTitle = function changeHeaderTitle(data) {
  return {
    type: 'CHANGE_HEADER_TITLE',
    data: data
  };
};

/***/ }),

/***/ "./components/content.js":
/*!*******************************!*\
  !*** ./components/content.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _posterCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posterCard */ "./components/posterCard.js");





var Content = function Content(_ref) {
  var entries = _ref.entries,
      isReady = _ref.isReady,
      isSomethingWrong = _ref.isSomethingWrong;

  var listItems = function listItems() {
    if (!isSomethingWrong) {
      return entries.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_posterCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: index,
          src: item.images['Poster Art'].url,
          title: item.title
        });
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Oops.. Something went wrong"));
  };

  var content = !isReady && !isSomethingWrong ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Loading...") : listItems();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2219852518" + " " + "content-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2219852518" + " " + "inner-container"
  }, content), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2219852518",
    css: ".content-container.jsx-2219852518{padding:50px 95px 80px;background-color:#FDFDFD;}.inner-container.jsx-2219852518{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}@media only screen and (min-width:320px) and (max-width:667px){.content-container.jsx-2219852518{padding:60px 20px 40px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWNhdGlvem1lbi9EZXNrdG9wL3Byb2plY3RzL21vdmllZC1uZXh0L2NvbXBvbmVudHMvY29udGVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQmtCLEFBR2tDLEFBS1YsQUFTWSx1QkFiQSxBQWN6Qix5QkFiRiwwQkFJaUIseURBQ2MsMkhBQy9CIiwiZmlsZSI6Ii9Vc2Vycy9uZWNhdGlvem1lbi9EZXNrdG9wL3Byb2plY3RzL21vdmllZC1uZXh0L2NvbXBvbmVudHMvY29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUG9zdGVyQ2FyZCBmcm9tICcuL3Bvc3RlckNhcmQnXG5cbmNvbnN0IENvbnRlbnQgPSAoeyBlbnRyaWVzLCBpc1JlYWR5LCBpc1NvbWV0aGluZ1dyb25nIH0pID0+IHtcbiAgY29uc3QgbGlzdEl0ZW1zID0gKCkgPT4ge1xuICAgIGlmICghaXNTb21ldGhpbmdXcm9uZykge1xuICAgICAgcmV0dXJuIGVudHJpZXMubWFwKChpdGVtLCBpbmRleCkgPT5cbiAgICAgICA8UG9zdGVyQ2FyZFxuICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgIHNyYz17aXRlbS5pbWFnZXNbJ1Bvc3RlciBBcnQnXS51cmx9XG4gICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gPGRpdj48cD5Pb3BzLi4gU29tZXRoaW5nIHdlbnQgd3Jvbmc8L3A+PC9kaXY+O1xuICB9O1xuXG4gIGxldCBjb250ZW50ID0gIWlzUmVhZHkgJiYgIWlzU29tZXRoaW5nV3JvbmdcbiAgICA/IDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgIDogbGlzdEl0ZW1zKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLWNvbnRhaW5lclwiPlxuICAgICAgICB7Y29udGVudH1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDUwcHggOTVweCA4MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGREZERkQ7XG4gICAgICAgIH1cblxuICAgICAgICAuaW5uZXItY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlblxuICAgICAgICAgIGFuZCAobWluLXdpZHRoOiAzMjBweClcbiAgICAgICAgICBhbmQgKG1heC13aWR0aDogNjY3cHgpIHtcbiAgICAgICAgICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgICAgICAgcGFkZGluZzogNjBweCAyMHB4IDQwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Db250ZW50LnByb3BUeXBlcyA9IHtcbiAgZW50cmllczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIGlzUmVhZHk6IFByb3BUeXBlcy5ib29sLFxuICBpc1NvbWV0aGluZ1dyb25nOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG4iXX0= */\n/*@ sourceURL=/Users/necatiozmen/Desktop/projects/movied-next/components/content.js */"
  }));
};

Content.propTypes = {
  entries: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  isReady: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  isSomethingWrong: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/Icons */ "./static/Icons/index.js");




var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1272563617" + " " + "footer-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1272563617" + " " + "footer-inner-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1272563617" + " " + "footer-nav"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1272563617" + " " + "footer-nav-list"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1272563617"
  }, "Home"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1272563617"
  }, "|"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1272563617"
  }, "Term and Conditions"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1272563617"
  }, "|"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1272563617"
  }, "Privacy Policy"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1272563617"
  }, "|"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1272563617"
  }, "Collection Statement"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1272563617"
  }, "|"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1272563617"
  }, "Help"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1272563617"
  }, "|"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1272563617"
  }, "Manage Account")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1272563617" + " " + "footer-copyright"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1272563617"
  }, "Copyright \xA9 2018 DEMO Streaming. All Rights Reserved"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1272563617" + " " + "footer-contact-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1272563617" + " " + "footer-icons"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_static_Icons__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "facebook",
    width: 50,
    height: 25
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_static_Icons__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "twitter",
    width: 50,
    height: 25
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_static_Icons__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "instagram",
    width: 50,
    height: 25
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1272563617" + " " + "footer-icons-app"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_static_Icons__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "appstore",
    width: 140,
    height: 35
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_static_Icons__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "playstore",
    width: 140,
    height: 35
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_static_Icons__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "windowstore",
    width: 120,
    height: 35
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1272563617",
    css: ".footer-container.jsx-1272563617{height:200px;background-color:#1E1E1E;}.footer-inner-container.jsx-1272563617{padding:25px 95px;}.footer-nav.jsx-1272563617{position:relative;width:65%;margin-bottom:50px;font-size:12px;color:#B8B7A8;}.footer-nav-list.jsx-1272563617{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.footer-copyright.jsx-1272563617{position:absolute;margin-left:7px;}.footer-contact-container.jsx-1272563617{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;}.footer-icons.jsx-1272563617{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.footer-icons-app.jsx-1272563617{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}@media only screen and (min-width:375px) and (max-width:667px){.footer-container.jsx-1272563617{height:250px;}.footer-inner-container.jsx-1272563617{padding-left:10px;padding-right:10px;}.footer-nav.jsx-1272563617{width:100%;margin-bottom:50px;font-size:8px;}.footer-copyright.jsx-1272563617{padding-left:30px;}.footer-contact-container.jsx-1272563617{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.footer-icons.jsx-1272563617{margin-bottom:30px;}.footer-icons-app.jsx-1272563617>div.jsx-1272563617{width:125px;}}@media only screen and (min-width:320px) and (max-width:568px){.footer-container.jsx-1272563617{height:300px;}.footer-inner-container.jsx-1272563617{padding-left:10px;padding-right:10px;}.footer-nav.jsx-1272563617{width:100%;font-size:7px;}.footer-copyright.jsx-1272563617{margin-left:60px;}.footer-contact-container.jsx-1272563617{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.footer-icons.jsx-1272563617{margin-bottom:30px;}.footer-icons-app.jsx-1272563617{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.footer-icons-app.jsx-1272563617>div.jsx-1272563617{margin-bottom:5px;}}@media only screen and (min-width:768px) and (max-width:1024px){.footer-nav.jsx-1272563617{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWNhdGlvem1lbi9EZXNrdG9wL3Byb2plY3RzL21vdmllZC1uZXh0L2NvbXBvbmVudHMvZm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDb0IsQUFHMEIsQUFLSyxBQUlBLEFBUUwsQUFLSyxBQUtMLEFBTUEsQUFJQSxBQU9FLEFBSUssQUFLUCxBQU1PLEFBSUksQUFLSCxBQUlQLEFBUUMsQUFJSyxBQUtQLEFBS00sQUFJSyxBQUtILEFBSUcsQUFLSixBQVFQLFdBbEVRLEFBb0NMLEFBK0JoQixDQWhEQSxDQXhFeUIsQUE0Q3pCLEFBb0NBLElBY0EsQ0F6RkYsQUFJWSxBQWFNLEFBMEJLLEFBV3JCLEFBeUJxQixBQTRCckIsQ0E1Q0EsQUFtQ0EsTUFiQSxHQWhGbUIsRUE0Q0gsSUEvQmxCLEdBMEJFLEFBb0NBLENBcEZGLE1Bc0RFLEdBNUNlLGVBQ0YsWUFLZ0IsQUFVQyxBQU1oQyxBQUlBLEVBeEJBLEVBa0R1QixBQW1DQSxBQVNJLDZGQTNDekIsQUFtQ0EsTUFTQSxZQWhGcUIsUUFWdkIsNkZBV0EiLCJmaWxlIjoiL1VzZXJzL25lY2F0aW96bWVuL0Rlc2t0b3AvcHJvamVjdHMvbW92aWVkLW5leHQvY29tcG9uZW50cy9mb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSWNvbiBmcm9tICcuLi9zdGF0aWMvSWNvbnMnO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gIHJldHVybiAgKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWlubmVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLW5hdlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItbmF2LWxpc3RcIj5cbiAgICAgICAgICAgICAgPHA+SG9tZTwvcD5cbiAgICAgICAgICAgICAgPHA+fDwvcD5cbiAgICAgICAgICAgICAgPHA+VGVybSBhbmQgQ29uZGl0aW9uczwvcD5cbiAgICAgICAgICAgICAgPHA+fDwvcD5cbiAgICAgICAgICAgICAgPHA+UHJpdmFjeSBQb2xpY3k8L3A+XG4gICAgICAgICAgICAgIDxwPnw8L3A+XG4gICAgICAgICAgICAgIDxwPkNvbGxlY3Rpb24gU3RhdGVtZW50PC9wPlxuICAgICAgICAgICAgICA8cD58PC9wPlxuICAgICAgICAgICAgICA8cD5IZWxwPC9wPlxuICAgICAgICAgICAgICA8cD58PC9wPlxuICAgICAgICAgICAgICA8cD5NYW5hZ2UgQWNjb3VudDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29weXJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxwPkNvcHlyaWdodCDCqSAyMDE4IERFTU8gU3RyZWFtaW5nLiBBbGwgUmlnaHRzIFJlc2VydmVkPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29udGFjdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWljb25zXCI+XG4gICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJmYWNlYm9va1wiIHdpZHRoPXs1MH0gaGVpZ2h0PXsyNX0gLz5cbiAgICAgICAgICAgICAgPEljb24gbmFtZT1cInR3aXR0ZXJcIiB3aWR0aD17NTB9IGhlaWdodD17MjV9IC8+XG4gICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJpbnN0YWdyYW1cIiB3aWR0aD17NTB9IGhlaWdodD17MjV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWljb25zLWFwcFwiPlxuICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiYXBwc3RvcmVcIiB3aWR0aD17MTQwfSBoZWlnaHQ9ezM1fSAvPlxuICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwicGxheXN0b3JlXCIgd2lkdGg9ezE0MH0gaGVpZ2h0PXszNX0gLz5cbiAgICAgICAgICAgICAgPEljb24gbmFtZT1cIndpbmRvd3N0b3JlXCIgd2lkdGg9ezEyMH0gaGVpZ2h0PXszNX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5mb290ZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUxRTFFO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mb290ZXItaW5uZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggOTVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZm9vdGVyLW5hdiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGNvbG9yOiNCOEI3QTg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZvb3Rlci1uYXYtbGlzdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZvb3Rlci1jb3B5cmlnaHQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZm9vdGVyLWNvbnRhY3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZvb3Rlci1pY29ucyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mb290ZXItaWNvbnMtYXBwIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuXG4gICAgICAgICAgICBhbmQgKG1pbi13aWR0aDogMzc1cHgpXG4gICAgICAgICAgICBhbmQgKG1heC13aWR0aDogNjY3cHgpIHtcbiAgICAgICAgICAgIC5mb290ZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmZvb3Rlci1pbm5lci1jb250YWluZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mb290ZXItbmF2e1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mb290ZXItY29weXJpZ2h0IHtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZm9vdGVyLWNvbnRhY3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmZvb3Rlci1pY29ucyB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mb290ZXItaWNvbnMtYXBwID4gZGl2IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEyNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlblxuICAgICAgICAgICAgYW5kIChtaW4td2lkdGg6IDMyMHB4KVxuICAgICAgICAgICAgYW5kIChtYXgtd2lkdGg6IDU2OHB4KSB7XG4gICAgICAgICAgICAuZm9vdGVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mb290ZXItaW5uZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZm9vdGVyLW5hdntcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogN3B4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZm9vdGVyLWNvcHlyaWdodCB7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZm9vdGVyLWNvbnRhY3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmZvb3Rlci1pY29ucyB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mb290ZXItaWNvbnMtYXBwIHtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mb290ZXItaWNvbnMtYXBwID4gZGl2IHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlblxuICAgICAgICAgICAgYW5kIChtaW4td2lkdGg6IDc2OHB4KVxuICAgICAgICAgICAgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgICAgICAgLmZvb3Rlci1uYXYge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn07XG5cbiAgZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIl19 */\n/*@ sourceURL=/Users/necatiozmen/Desktop/projects/movied-next/components/footer.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);






var Header = function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-556463731" + " " + "header-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-556463731" + " " + "header-nav"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-556463731"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/home"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-556463731" + " " + "header-title"
  }, "DEMO Streaming"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-556463731" + " " + "login-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-556463731" + " " + "login-box"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-556463731"
  }, "Log in")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-556463731" + " " + "login-box"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-556463731"
  }, "Start your free trial")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-556463731" + " " + "entries-type"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-556463731" + " " + "entries-type-title"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-556463731"
  }, props.headerTitle))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "556463731",
    css: ".header-container.jsx-556463731{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:90px;color:white;font-size:12px;}.header-nav.jsx-556463731{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:100px;padding-right:100px;height:55%;background-image:linear-gradient(#1DA4FC,#0072FF);}.header-title.jsx-556463731{font-size:27px;font-weight:400;}.login-container.jsx-556463731{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;height:27px;}.login-container.jsx-556463731>div.jsx-556463731:first-child{background:transparent;margin-right:12px;}.login-box.jsx-556463731{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-right:10px;padding-left:10px;background-color:#414141;}.entries-type.jsx-556463731{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:45%;padding-left:100px;background-color:#414141;box-shadow:0 5px 10px rgba(0,0,0,0.4);}.entries-type-title.jsx-556463731>p.jsx-556463731{font-size:17px;}@media only screen and (min-width:320px) and (max-width:667px){.header-container.jsx-556463731{height:140px;font-size:7px;}.header-nav.jsx-556463731{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 0 10px;}.header-title.jsx-556463731{font-size:22px;}.entries-type.jsx-556463731{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:35%;padding-left:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWNhdGlvem1lbi9EZXNrdG9wL3Byb2plY3RzL21vdmllZC1uZXh0L2NvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCZ0IsQUFHc0IsQUFRQSxBQVVDLEFBS0QsQUFNVSxBQUtWLEFBUUEsQUFTQyxBQU9HLEFBS1MsQUFLUixBQUlTLGFBYlQsRUF4Q0osQUFpQ2hCLEFBaUJJLFFBdkNnQixJQThCaEIsSUF4Q0osVUFXQSxpQ0E5QndCLEFBUVEsQUFlRCxBQVdWLEFBUUEsSUFxQkUsaUJBQ25CLElBUWEsV0FDSSxlQUNqQiwyQkF6RVUsWUFDQSxHQWlDTyxBQVFSLFNBeENJLEVBeUNJLFFBUkQsR0EzQkMsRUFMckIsTUFvQmMsQUFxQmEsT0FSQSxLQVozQixhQXFCMEMsT0FSMUMsK0JBU0Esc0JBckNxQixtQkFDQyxvQkFDVCxXQUN1QyxrREFDcEQiLCJmaWxlIjoiL1VzZXJzL25lY2F0aW96bWVuL0Rlc2t0b3AvcHJvamVjdHMvbW92aWVkLW5leHQvY29tcG9uZW50cy9oZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdlwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9ob21lXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRlci10aXRsZVwiPkRFTU8gU3RyZWFtaW5nPC9oMT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWJveFwiPjxwPkxvZyBpbjwvcD48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1ib3hcIj48cD5TdGFydCB5b3VyIGZyZWUgdHJpYWw8L3A+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImVudHJpZXMtdHlwZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbnRyaWVzLXR5cGUtdGl0bGVcIj5cbiAgICAgICAgPHA+e3Byb3BzLmhlYWRlclRpdGxlfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5oZWFkZXItY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cblxuICAgICAgLmhlYWRlci1uYXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDU1JTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMxREE0RkMsIzAwNzJGRik7XG4gICAgICB9XG5cbiAgICAgIC5oZWFkZXItdGl0bGUge1xuICAgICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgICAgICBmb250LXdlaWdodDo0MDA7XG4gICAgICB9XG5cbiAgICAgIC5sb2dpbi1jb250YWluZXJ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBoZWlnaHQ6IDI3cHg7XG4gICAgICB9XG5cbiAgICAgIC5sb2dpbi1jb250YWluZXIgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgfVxuXG4gICAgICAubG9naW4tYm94IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MTQxO1xuICAgICAgfVxuXG4gICAgICAuZW50cmllcy10eXBlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiA0NSU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTQxNDE7XG4gICAgICAgIGJveC1zaGFkb3c6MCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICB9XG5cbiAgICAgIC5lbnRyaWVzLXR5cGUtdGl0bGUgPiBwIHtcbiAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlblxuICAgICAgICBhbmQgKG1pbi13aWR0aDogMzIwcHgpXG4gICAgICAgIGFuZCAobWF4LXdpZHRoOiA2NjdweCkge1xuICAgICAgICAgIC5oZWFkZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDdweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGVhZGVyLW5hdiB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgcGFkZGluZzogMCAwIDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYWRlci10aXRsZSB7XG4gICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZW50cmllcy10eXBlIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiAzNSU7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGhlYWRlclRpdGxlOiBzdGF0ZS5oZWFkZXJUeXBlLmhlYWRlclRpdGxlLFxufSk7XG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGhlYWRlclRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhlYWRlcilcbiJdfQ== */\n/*@ sourceURL=/Users/necatiozmen/Desktop/projects/movied-next/components/header.js */"
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    headerTitle: state.headerType.headerTitle
  };
};

Header.propTypes = {
  headerTitle: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Header));

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./components/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);






var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2148626392" + " " + "Layout"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-2148626392"
  }, "Movied Next"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-2148626392"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-2148626392"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_2__["default"], null), props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2148626392",
    css: ".Layout{text-align:center;max-width:1140px;margin-left:auto;margin-right:auto;}@media only screen and (min-width:320px) and (max-width:667px){.Layout{overflow-x:hidden;}}body{background-color:black;margin:0;padding:0;font-family:'Roboto',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWNhdGlvem1lbi9EZXNrdG9wL3Byb2plY3RzL21vdmllZC1uZXh0L2NvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWN1QixBQUcyQixBQVVHLEFBS0ksa0JBZFIsQUFVZixLQUtTLFNBQ0MsR0FmSyxPQWdCa0IsVUFmakIsa0JBQ25CLElBZUMiLCJmaWxlIjoiL1VzZXJzL25lY2F0aW96bWVuL0Rlc2t0b3AvcHJvamVjdHMvbW92aWVkLW5leHQvY29tcG9uZW50cy9sYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiTGF5b3V0XCI+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+TW92aWVkIE5leHQ8L3RpdGxlPlxuICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICA8L0hlYWQ+XG4gICAgPEhlYWRlci8+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPEZvb3RlciAvPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAuTGF5b3V0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXgtd2lkdGg6IDExNDBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICB9XG5cbiAgICAgICBAbWVkaWEgb25seSBzY3JlZW5cbiAgICAgICBhbmQgKG1pbi13aWR0aDogMzIwcHgpXG4gICAgICAgYW5kIChtYXgtd2lkdGg6IDY2N3B4KSB7XG4gICAgICAgICAuTGF5b3V0IHtcbiAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=/Users/necatiozmen/Desktop/projects/movied-next/components/layout.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/posterCard.js":
/*!**********************************!*\
  !*** ./components/posterCard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




var PosterCard = function PosterCard(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2244761986" + " " + "box-main"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2244761986"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: props.src,
    alt: "posters",
    className: "jsx-2244761986" + " " + "box-image"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2244761986" + " " + "box-title"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2244761986"
  }, props.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2244761986",
    css: ".box-main.jsx-2244761986{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:120px;height:180px;margin-bottom:70px;}.box-image.jsx-2244761986{max-height:100%;max-width:100%;}.box-title.jsx-2244761986{font-family:'Open Sans','Roboto',sans-serif;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}.box-title.jsx-2244761986>p.jsx-2244761986{font-size:11px;}@media only screen and (min-width:320px) and (max-width:667px){.box-main.jsx-2244761986{width:200px;height:250px;margin-bottom:200px;}.box-title.jsx-2244761986{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}.box-title.jsx-2244761986>p.jsx-2244761986{font-size:16px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWNhdGlvem1lbi9EZXNrdG9wL3Byb2plY3RzL21vdmllZC1uZXh0L2NvbXBvbmVudHMvcG9zdGVyQ2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXa0IsQUFHd0IsQUFRRyxBQUs4QixBQUsvQixBQU9ELEFBTU0sQUFJSCxZQVRGLEdBUGpCLEFBaUJFLENBM0JlLFNBa0JPLE1BakJ2QixhQUl1QixDQWN0QiwwQkFJQSxHQS9Cc0IsZ0RBY3hCLDhCQWJjLFlBQ0MsYUFDTSxtQkFDckIiLCJmaWxlIjoiL1VzZXJzL25lY2F0aW96bWVuL0Rlc2t0b3AvcHJvamVjdHMvbW92aWVkLW5leHQvY29tcG9uZW50cy9wb3N0ZXJDYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgUG9zdGVyQ2FyZCA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1tYWluXCIgPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJib3gtaW1hZ2VcIiBzcmM9e3Byb3BzLnNyY30gYWx0PVwicG9zdGVyc1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LXRpdGxlXCI+XG4gICAgICAgIDxwPntwcm9wcy50aXRsZX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmJveC1tYWluIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgIGhlaWdodDogMTgwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ib3gtaW1hZ2Uge1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgfVxuXG4gICAgICAgIC5ib3gtdGl0bGUge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ib3gtdGl0bGUgPiBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW5cbiAgICAgICAgICBhbmQgKG1pbi13aWR0aDogMzIwcHgpXG4gICAgICAgICAgYW5kIChtYXgtd2lkdGg6IDY2N3B4KSB7XG4gICAgICAgICAgLmJveC1tYWluIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMDBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYm94LXRpdGxlIHtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYm94LXRpdGxlID4gcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Qb3N0ZXJDYXJkLnByb3BUeXBlcyA9IHtcbiAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RlckNhcmQ7XG4iXX0= */\n/*@ sourceURL=/Users/necatiozmen/Desktop/projects/movied-next/components/posterCard.js */"
  }));
};

PosterCard.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (PosterCard);

/***/ }),

/***/ "./middlewares/api.js":
/*!****************************!*\
  !*** ./middlewares/api.js ***!
  \****************************/
/*! exports provided: API, SERVER_BASE_URL, api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_BASE_URL", function() { return SERVER_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var API = Symbol('API');
var SERVER_BASE_URL = 'http://localhost:3000';
var api = function api(store) {
  return function (next) {
    return function (action) {
      if (action[API]) {
        var _action$API = action[API],
            endpoint = _action$API.endpoint,
            method = _action$API.method;
        fetch("".concat(SERVER_BASE_URL).concat(endpoint), {
          method: method
        }).then(function (result) {
          return result.json();
        }).then(function (data) {
          store.dispatch({
            type: "".concat(action.type, "_SUCCESS"),
            data: data
          });
        }).catch(function (error) {
          store.dispatch({
            type: "".concat(action.type, "_FAILURE"),
            error: error
          });
        });
        next(_objectSpread({}, action, {
          type: "".concat(action.type, "_REQUEST")
        }));
      } else {
        next(action);
      }
    };
  };
};

/***/ }),

/***/ "./pages/movies.js":
/*!*************************!*\
  !*** ./pages/movies.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./actions/index.js");
/* harmony import */ var _components_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/content */ "./components/content.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Movies =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Movies, _React$Component);

  function Movies() {
    _classCallCheck(this, Movies);

    return _possibleConstructorReturn(this, _getPrototypeOf(Movies).apply(this, arguments));
  }

  _createClass(Movies, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getMovies();
      this.props.changeHeaderTitle('Popular Movies');
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_content__WEBPACK_IMPORTED_MODULE_5__["default"], {
        entries: this.props.movies,
        isReady: this.props.isReady,
        isSomethingWrong: this.props.isSomethingWrong
      })));
    }
  }]);

  return Movies;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    movies: state.movieList.movies,
    isReady: state.movieList.getEntriesFromDatabase,
    isSomethingWrong: state.movieList.getEntriesFromDatabaseFailed
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getMovies: function getMovies() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getMovies"])());
    },
    changeHeaderTitle: function changeHeaderTitle(data) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["changeHeaderTitle"])(data));
    }
  };
};

Movies.propTypes = {
  getMovies: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  changeHeaderTitle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  movies: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,
  isReady: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  isSomethingWrong: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Movies));

/***/ }),

/***/ "./static/Icons/AppStore.js":
/*!**********************************!*\
  !*** ./static/Icons/AppStore.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Svg = function Svg(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '135' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '40' : _ref$height;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    width: width,
    viewBox: "0 0 135 40"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#A6A6A6",
    d: "M130.197 40H4.73A4.74 4.74 0 0 1 0 35.267V4.727A4.733 4.733 0 0 1 4.73 0h125.467C132.803 0 135 2.12 135 4.726v30.54c0 2.606-2.197 4.734-4.803 4.734z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M134.032 35.268a3.83 3.83 0 0 1-3.834 3.83H4.728a3.835 3.835 0 0 1-3.838-3.83V4.725A3.84 3.84 0 0 1 4.73.89h125.467c2.12 0 3.834 1.72 3.834 3.835l.002 30.543z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "#FFF"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M30.128 19.784c-.03-3.223 2.64-4.79 2.76-4.864-1.51-2.203-3.852-2.504-4.675-2.528-1.967-.207-3.875 1.177-4.877 1.177-1.022 0-2.565-1.158-4.228-1.124-2.14.033-4.142 1.272-5.24 3.196-2.266 3.923-.576 9.688 1.595 12.86 1.086 1.552 2.355 3.286 4.016 3.225 1.624-.067 2.23-1.036 4.192-1.036 1.943 0 2.513 1.037 4.207.998 1.743-.028 2.84-1.56 3.89-3.127 1.254-1.78 1.758-3.532 1.778-3.622-.04-.014-3.387-1.29-3.42-5.154zM26.928 10.306c.874-1.093 1.472-2.58 1.306-4.09-1.265.057-2.847.876-3.758 1.945-.806.943-1.526 2.487-1.34 3.94 1.42.105 2.88-.718 3.792-1.794z"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "#FFF"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M53.645 31.504h-2.27l-1.245-3.91h-4.324l-1.185 3.91h-2.21l4.284-13.308h2.646l4.305 13.308zm-3.89-5.55L48.63 22.48c-.12-.355-.342-1.19-.67-2.507h-.04a96.75 96.75 0 0 1-.633 2.507l-1.105 3.475h3.573zM64.662 26.588c0 1.632-.44 2.922-1.323 3.87-.79.842-1.772 1.263-2.943 1.263-1.264 0-2.172-.453-2.725-1.36h-.04v5.054H55.5V25.067c0-1.026-.027-2.08-.08-3.16h1.876l.12 1.522h.04c.71-1.147 1.79-1.72 3.237-1.72 1.132 0 2.077.448 2.833 1.343.758.896 1.136 2.074 1.136 3.535zm-2.172.078c0-.934-.21-1.704-.632-2.31-.46-.632-1.08-.948-1.856-.948-.526 0-1.004.176-1.43.523-.43.35-.71.808-.84 1.374-.066.264-.1.48-.1.65v1.6c0 .698.215 1.287.643 1.768s.984.72 1.668.72c.803 0 1.428-.31 1.875-.927.448-.62.672-1.435.672-2.45zM75.7 26.588c0 1.632-.442 2.922-1.325 3.87-.79.842-1.77 1.263-2.94 1.263-1.265 0-2.173-.453-2.725-1.36h-.04v5.054h-2.132V25.067c0-1.026-.027-2.08-.08-3.16h1.876l.12 1.522h.04c.71-1.147 1.788-1.72 3.237-1.72 1.132 0 2.077.448 2.835 1.343.755.896 1.134 2.074 1.134 3.535zm-2.173.078c0-.934-.21-1.704-.633-2.31-.46-.632-1.078-.948-1.855-.948a2.22 2.22 0 0 0-1.433.523c-.428.35-.707.808-.838 1.374-.066.264-.1.48-.1.65v1.6c0 .698.214 1.287.64 1.768.428.48.984.72 1.67.72.803 0 1.428-.31 1.875-.927.448-.62.672-1.435.672-2.45zM88.04 27.772c0 1.132-.394 2.053-1.183 2.764-.867.777-2.074 1.165-3.625 1.165-1.432 0-2.58-.275-3.45-.828l.495-1.777c.936.566 1.963.85 3.082.85.802 0 1.427-.182 1.876-.544.447-.36.67-.847.67-1.453 0-.54-.184-.995-.553-1.364-.367-.37-.98-.712-1.836-1.03-2.33-.868-3.494-2.14-3.494-3.815 0-1.094.408-1.99 1.225-2.69.814-.698 1.9-1.047 3.258-1.047 1.21 0 2.217.212 3.02.633l-.533 1.738c-.75-.407-1.598-.61-2.547-.61-.75 0-1.336.184-1.756.552a1.58 1.58 0 0 0-.533 1.205c0 .526.203.96.61 1.303.356.316 1 .658 1.937 1.027 1.145.46 1.986 1 2.527 1.618.54.616.81 1.387.81 2.307zM95.088 23.508h-2.35v4.66c0 1.184.414 1.776 1.244 1.776.38 0 .697-.033.947-.1l.058 1.62c-.42.157-.973.236-1.658.236-.842 0-1.5-.257-1.975-.77-.473-.514-.71-1.376-.71-2.587v-4.837h-1.4v-1.6h1.4V20.15l2.093-.633v2.39h2.35v1.6zM105.69 26.627c0 1.475-.42 2.686-1.263 3.633-.883.975-2.055 1.46-3.516 1.46-1.407 0-2.528-.466-3.364-1.4s-1.254-2.113-1.254-3.534c0-1.487.43-2.705 1.293-3.652.86-.948 2.023-1.422 3.484-1.422 1.407 0 2.54.467 3.395 1.402.818.907 1.226 2.078 1.226 3.513zm-2.21.07c0-.886-.19-1.645-.573-2.278-.447-.767-1.086-1.15-1.914-1.15-.857 0-1.508.384-1.955 1.15-.383.633-.572 1.404-.572 2.316 0 .885.19 1.644.572 2.276.46.766 1.105 1.148 1.936 1.148.814 0 1.453-.39 1.914-1.168.393-.645.59-1.412.59-2.296zM112.62 23.783c-.21-.04-.435-.06-.67-.06-.75 0-1.33.284-1.74.85-.354.5-.532 1.133-.532 1.896v5.034h-2.13l.02-6.574c0-1.106-.028-2.113-.08-3.02h1.856l.078 1.835h.06c.224-.63.58-1.14 1.065-1.52a2.578 2.578 0 0 1 1.54-.514c.198 0 .376.015.534.04v2.033zM122.156 26.252a5 5 0 0 1-.078.967h-6.396c.025.947.334 1.672.928 2.172.54.447 1.236.67 2.092.67.947 0 1.81-.15 2.588-.453l.334 1.48c-.908.395-1.98.592-3.217.592-1.488 0-2.656-.438-3.506-1.313-.847-.876-1.272-2.05-1.272-3.525 0-1.447.395-2.652 1.186-3.613.828-1.026 1.947-1.54 3.355-1.54 1.382 0 2.43.514 3.14 1.54.563.815.846 1.823.846 3.02zm-2.033-.553c.014-.633-.125-1.18-.414-1.64-.37-.593-.937-.89-1.7-.89-.697 0-1.264.29-1.697.87-.355.46-.566 1.014-.63 1.658h4.44z"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "#FFF"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M49.05 10.01c0 1.176-.353 2.062-1.058 2.657-.653.55-1.58.824-2.783.824-.597 0-1.107-.025-1.534-.077v-6.43c.557-.09 1.157-.137 1.805-.137 1.146 0 2.01.25 2.59.747.653.563.98 1.368.98 2.416zm-1.105.028c0-.763-.202-1.348-.606-1.756-.405-.407-.995-.61-1.772-.61-.33 0-.61.02-.844.067v4.888c.13.02.365.03.708.03.802 0 1.42-.224 1.857-.67s.655-1.096.655-1.95zM54.91 11.037c0 .725-.208 1.32-.622 1.785-.434.48-1.01.718-1.727.718-.69 0-1.242-.23-1.653-.69-.41-.458-.615-1.037-.615-1.735 0-.73.21-1.33.635-1.794s.994-.697 1.712-.697c.69 0 1.247.23 1.668.688.4.447.6 1.023.6 1.727zm-1.088.034c0-.434-.094-.807-.28-1.118-.22-.376-.534-.564-.94-.564-.422 0-.742.188-.962.564-.188.31-.28.69-.28 1.138 0 .435.093.808.28 1.12.227.375.543.563.95.563.4 0 .715-.19.94-.574.195-.318.292-.694.292-1.13zM62.765 8.72l-1.475 4.713h-.96l-.61-2.047a15.32 15.32 0 0 1-.38-1.523h-.02a11.15 11.15 0 0 1-.378 1.523l-.65 2.047h-.97L55.935 8.72h1.077l.533 2.24c.13.53.235 1.035.32 1.513h.02c.077-.394.206-.896.388-1.503l.67-2.25h.853l.64 2.202c.156.537.282 1.054.38 1.552h.028c.07-.485.178-1.002.32-1.552l.572-2.202h1.03zM68.198 13.433H67.15v-2.7c0-.832-.316-1.248-.95-1.248a.946.946 0 0 0-.757.343c-.193.23-.29.5-.29.808v2.796h-1.05v-3.366a26.4 26.4 0 0 0-.037-1.35h.92l.05.738h.03c.12-.23.303-.418.542-.57a1.77 1.77 0 0 1 .95-.264c.44 0 .806.142 1.097.427.362.35.543.87.543 1.562v2.823zM71.088 13.433H70.04V6.556h1.048v6.877zM77.258 11.037c0 .725-.207 1.32-.62 1.785-.435.48-1.01.718-1.728.718-.693 0-1.244-.23-1.654-.69-.41-.458-.615-1.037-.615-1.735 0-.73.212-1.33.636-1.794s.994-.697 1.71-.697c.694 0 1.25.23 1.67.688.4.447.602 1.023.602 1.727zm-1.088.034c0-.434-.094-.807-.28-1.118-.22-.376-.534-.564-.94-.564-.422 0-.742.188-.96.564-.19.31-.282.69-.282 1.138 0 .435.094.808.28 1.12.228.375.544.563.952.563.4 0 .713-.19.94-.574.194-.318.29-.694.29-1.13zM82.33 13.433h-.94l-.08-.543h-.028c-.322.433-.78.65-1.377.65-.445 0-.805-.143-1.076-.427a1.34 1.34 0 0 1-.37-.96c0-.576.24-1.015.723-1.32.482-.303 1.16-.452 2.033-.445V10.3c0-.62-.326-.93-.98-.93-.464 0-.874.116-1.228.348l-.213-.688c.438-.27.98-.407 1.617-.407 1.232 0 1.85.65 1.85 1.95v1.736c0 .47.023.845.068 1.123zm-1.088-1.62v-.727c-1.156-.02-1.734.297-1.734.95 0 .246.066.43.2.553a.733.733 0 0 0 .513.183c.23 0 .446-.073.642-.218a.893.893 0 0 0 .38-.742zM88.285 13.433h-.93l-.05-.757h-.028c-.297.576-.803.864-1.514.864-.568 0-1.04-.223-1.416-.67s-.562-1.024-.562-1.735c0-.763.203-1.38.61-1.853.396-.44.88-.66 1.456-.66.634 0 1.077.213 1.33.64h.02V6.556h1.048v5.607c0 .46.012.882.037 1.27zM87.2 11.445v-.786a1.194 1.194 0 0 0-.408-.965 1.03 1.03 0 0 0-.702-.258c-.39 0-.697.155-.922.466-.223.31-.336.708-.336 1.193 0 .466.107.844.322 1.135.227.31.533.466.916.466.344 0 .62-.13.828-.388.202-.24.3-.527.3-.863zM97.248 11.037c0 .725-.207 1.32-.62 1.785-.435.48-1.01.718-1.728.718-.69 0-1.242-.23-1.654-.69-.41-.458-.615-1.037-.615-1.735 0-.73.212-1.33.636-1.794s.994-.697 1.713-.697c.69 0 1.247.23 1.667.688.4.447.6 1.023.6 1.727zm-1.086.034c0-.434-.094-.807-.28-1.118-.222-.376-.534-.564-.942-.564-.42 0-.74.188-.96.564-.19.31-.282.69-.282 1.138 0 .435.094.808.28 1.12.228.375.544.563.952.563.4 0 .715-.19.94-.574.194-.318.292-.694.292-1.13zM102.883 13.433h-1.047v-2.7c0-.832-.316-1.248-.95-1.248-.312 0-.563.114-.757.343s-.292.5-.292.808v2.796h-1.05v-3.366c0-.414-.01-.863-.036-1.35h.92l.05.738h.028a1.53 1.53 0 0 1 .543-.57c.285-.175.602-.264.95-.264.44 0 .806.142 1.097.427.363.35.543.87.543 1.562v2.823zM109.936 9.504h-1.154v2.29c0 .582.205.873.61.873.19 0 .345-.016.468-.05l.027.796c-.207.078-.48.117-.814.117-.414 0-.736-.126-.97-.378-.233-.252-.35-.676-.35-1.27V9.503h-.688V8.72h.69v-.865l1.026-.31v1.173h1.155v.786zM115.484 13.433h-1.05v-2.68c0-.845-.315-1.268-.948-1.268-.486 0-.818.245-1 .735-.03.103-.05.23-.05.377v2.835h-1.046V6.556h1.047v2.84h.02c.33-.516.803-.774 1.416-.774.434 0 .793.142 1.078.427.356.354.534.882.534 1.58v2.803zM121.207 10.853c0 .188-.014.346-.04.475h-3.142c.014.466.164.82.455 1.067.266.22.61.33 1.03.33.464 0 .888-.074 1.27-.223l.164.728c-.447.194-.973.29-1.582.29-.73 0-1.305-.214-1.72-.644-.42-.43-.626-1.007-.626-1.73 0-.712.193-1.304.582-1.776.406-.504.955-.756 1.648-.756.678 0 1.193.252 1.54.756.282.4.42.895.42 1.483zm-1-.27a1.41 1.41 0 0 0-.203-.806c-.182-.29-.46-.437-.834-.437a.995.995 0 0 0-.834.427 1.586 1.586 0 0 0-.31.815h2.18z"
  })), "/>"));
};

/* harmony default export */ __webpack_exports__["default"] = (Svg);

/***/ }),

/***/ "./static/Icons/Facebook.js":
/*!**********************************!*\
  !*** ./static/Icons/Facebook.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Svg = function Svg(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '166.1' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '299' : _ref$height;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    width: width,
    viewBox: "0 0 166.1 299"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#FFF",
    d: "M166.1 52h-47.4c-5.6 0-11.9 7.4-11.9 17.2v34.3h59.3v48.8h-59.3V299h-56V152.3H0v-48.8h50.8V74.7C50.8 33.5 79.4 0 118.6 0H166v52z"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Svg);

/***/ }),

/***/ "./static/Icons/Instagram.js":
/*!***********************************!*\
  !*** ./static/Icons/Instagram.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Svg = function Svg(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '166.1' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '299' : _ref$height;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    width: width,
    viewBox: "-589 1042.5 200 200"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#FFF",
    d: "M-411.22 1042.5h-155.56c-12.22 0-22.222 10.003-22.222 22.222v155.56c0 12.22 10.003 22.222 22.222 22.222h155.56c12.22 0 22.222-10.003 22.222-22.222v-155.56c0-12.22-10.003-22.222-22.222-22.222zm-77.946 161.4c33.97 0 61.564-27.593 61.564-61.564 0-3.76-.47-7.385-1.14-10.943h17.59v80.16c0 4.23-3.425 7.655-7.722 7.655h-140.25c-4.23 0-7.72-3.424-7.72-7.654v-80.16h17.186c-.67 3.557-1.14 7.183-1.14 10.942.066 33.97 27.592 61.564 61.63 61.564zm-38.47-61.564c0-21.215 17.255-38.47 38.47-38.47s38.47 17.188 38.47 38.47-17.255 38.47-38.47 38.47c-21.282 0-38.47-17.188-38.47-38.47zm108.69-44.243h-17.924c-4.23 0-7.72-3.49-7.72-7.72v-17.994c0-4.23 3.423-7.655 7.653-7.655h17.925c4.297 0 7.72 3.424 7.72 7.653v17.925c.068 4.297-3.356 7.788-7.653 7.788z"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Svg);

/***/ }),

/***/ "./static/Icons/PlayStore.js":
/*!***********************************!*\
  !*** ./static/Icons/PlayStore.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Svg = function Svg(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '135' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '40' : _ref$height;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    width: width,
    viewBox: "0 0 135.71649 40.018951"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    x1: "31.8",
    y1: "183.29",
    x2: "15.017",
    y2: "166.508",
    gradientUnits: "userSpaceOnUse",
    gradientTransform: "matrix(.8 0 0 -.8 0 161.6)",
    id: "i"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "0",
    stopColor: "#00a0ff"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: ".007",
    stopColor: "#00a1ff"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: ".26",
    stopColor: "#00beff"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: ".512",
    stopColor: "#00d2ff"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: ".76",
    stopColor: "#00dfff"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "1",
    stopColor: "#00e3ff"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    x1: "43.834",
    y1: "171.999",
    x2: "19.638",
    y2: "171.999",
    gradientUnits: "userSpaceOnUse",
    gradientTransform: "matrix(.8 0 0 -.8 0 161.6)",
    id: "j"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "0",
    stopColor: "#ffe000"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: ".409",
    stopColor: "#ffbd00"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: ".775",
    stopColor: "orange"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "1",
    stopColor: "#ff9c00"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    x1: "34.827",
    y1: "169.704",
    x2: "12.069",
    y2: "146.946",
    gradientUnits: "userSpaceOnUse",
    gradientTransform: "matrix(.8 0 0 -.8 0 161.6)",
    id: "k"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "0",
    stopColor: "#ff3a44"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "1",
    stopColor: "#c31162"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    x1: "17.297",
    y1: "191.824",
    x2: "27.46",
    y2: "181.661",
    gradientUnits: "userSpaceOnUse",
    gradientTransform: "matrix(.8 0 0 -.8 0 161.6)",
    id: "l"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "0",
    stopColor: "#32a071"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: ".069",
    stopColor: "#2da771"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: ".476",
    stopColor: "#15cf74"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: ".801",
    stopColor: "#06e775"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "1",
    stopColor: "#00f076"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
    id: "a"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 0h124v48H0V0z"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mask", {
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "1",
    height: "1",
    id: "m"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    clipPath: "url(#a)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 0h124v48H0V0z",
    fillOpacity: ".2"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
    id: "n"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 0h124v48H0V0z"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
    id: "b"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 0h124v48H0V0z"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pattern", {
    patternTransform: "matrix(1 0 0 -1 0 48)",
    patternUnits: "userSpaceOnUse",
    width: "124",
    height: "48",
    id: "o"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    clipPath: "url(#b)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M29.625 20.695l-11.613-6.597c-.65-.37-1.23-.344-1.606-.008l-.058-.063.058-.058c.375-.337.957-.36 1.606.01L29.7 20.62l-.075.075z"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
    id: "c"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 0h124v48H0V0z"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mask", {
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "1",
    height: "1",
    id: "p"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    clipPath: "url(#c)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 0h124v48H0V0z",
    fillOpacity: ".12"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
    id: "q"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 0h124v48H0V0z"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
    id: "d"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 0h124v48H0V0z"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pattern", {
    patternTransform: "matrix(1 0 0 -1 0 48)",
    patternUnits: "userSpaceOnUse",
    width: "124",
    height: "48",
    id: "r"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    clipPath: "url(#d)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M16.348 14.145c-.235.246-.37.628-.37 1.125v-.118c0-.496.135-.88.37-1.125l.058.063-.058.055z"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
    id: "e"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 0h124v48H0V0z"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mask", {
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "1",
    height: "1",
    id: "s"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    clipPath: "url(#e)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 0h124v48H0V0z",
    fillOpacity: ".12"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
    id: "t"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 0h124v48H0V0z"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
    id: "f"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 0h124v48H0V0z"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pattern", {
    patternTransform: "matrix(1 0 0 -1 0 48)",
    patternUnits: "userSpaceOnUse",
    width: "124",
    height: "48",
    id: "u"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    clipPath: "url(#f)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M33.613 22.96l-3.988-2.265.074-.074 3.913 2.224c.56.316.836.734.836 1.156-.048-.38-.333-.75-.837-1.04z"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
    id: "g"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 0h124v48H0V0z"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mask", {
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "1",
    height: "1",
    id: "v"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    clipPath: "url(#g)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 0h124v48H0V0z",
    fillOpacity: ".25"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
    id: "w"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 0h124v48H0V0z"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
    id: "h"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 0h124v48H0V0z"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pattern", {
    patternTransform: "matrix(1 0 0 -1 0 48)",
    patternUnits: "userSpaceOnUse",
    width: "124",
    height: "48",
    id: "x"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    clipPath: "url(#h)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M18.012 33.902l15.6-8.863c.51-.29.79-.66.837-1.04 0 .418-.278.836-.837 1.156l-15.6 8.864c-1.118.632-2.036.105-2.036-1.176v-.114c0 1.278.918 1.805 2.035 1.172z",
    fill: "#fff"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M130.54 39.943H5.24c-2.755 0-5.012-2.23-5.012-4.954V5.266C.228 2.544 2.485.314 5.24.314h125.3c2.755 0 5.01 2.23 5.01 4.953V34.99c0 2.723-2.255 4.953-5.01 4.953z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M130.54 1.108c2.32 0 4.208 1.866 4.208 4.16v29.72c0 2.295-1.888 4.16-4.21 4.16H5.24c-2.32 0-4.208-1.865-4.208-4.16V5.27c0-2.294 1.888-4.16 4.208-4.16h125.3m0-.794H5.24C2.485.314.228 2.544.228 5.267V34.99c0 2.723 2.257 4.953 5.012 4.953h125.3c2.755 0 5.01-2.23 5.01-4.954V5.266c0-2.723-2.255-4.953-5.01-4.953z",
    fill: "#a6a6a6"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M45.934 16.195c0 .668-.2 1.203-.594 1.602-.453.473-1.043.71-1.766.71-.69 0-1.28-.24-1.765-.718-.486-.485-.728-1.08-.728-1.79s.242-1.305.727-1.785a2.414 2.414 0 0 1 1.764-.723c.344 0 .672.07.985.203.31.133.565.313.75.535l-.42.422c-.32-.38-.757-.566-1.316-.566-.504 0-.94.176-1.312.53-.367.357-.55.818-.55 1.384s.183 1.03.55 1.387c.37.35.808.53 1.312.53.535 0 .985-.18 1.34-.534.234-.235.367-.56.402-.973h-1.742v-.578h2.324c.028.125.036.246.036.363zM49.62 14.19H47.44v1.52h1.968v.58h-1.968v1.52h2.183v.588h-2.8v-4.796h2.8v.59zM52.223 18.398h-.618V14.19h-1.34v-.588h3.298v.59h-1.34v4.206zM55.95 18.398v-4.796h.616v4.796h-.617zM59.3 18.398h-.612V14.19h-1.344v-.588h3.3v.59h-1.343v4.206zM66.887 17.78c-.473.486-1.06.728-1.758.728-.704 0-1.29-.242-1.763-.727-.472-.483-.707-1.077-.707-1.78 0-.703.235-1.297.707-1.78.473-.486 1.06-.728 1.762-.728.694 0 1.28.242 1.753.73.476.49.71 1.08.71 1.778 0 .703-.234 1.297-.706 1.78zm-3.063-.4c.356.358.79.538 1.305.538.51 0 .948-.18 1.3-.54.355-.358.535-.82.535-1.378 0-.56-.18-1.02-.535-1.38-.352-.358-.79-.538-1.3-.538-.517 0-.95.18-1.306.54-.355.358-.535.82-.535 1.378 0 .56.18 1.02.534 1.38zM68.46 18.398v-4.796h.75l2.333 3.73h.027l-.027-.922v-2.808h.617v4.796h-.644l-2.442-3.914h-.027l.027.926v2.988h-.613z",
    fill: "#fff",
    stroke: "#fff",
    strokeWidth: ".16",
    strokeMiterlimit: "10",
    transform: "matrix(1.253 0 0 1.2384 -9.796 -9.594)"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M68.526 21.865c-2.354 0-4.277 1.77-4.277 4.214 0 2.423 1.922 4.212 4.276 4.212 2.36 0 4.283-1.79 4.283-4.213 0-2.444-1.924-4.215-4.284-4.215zm0 6.768c-1.29 0-2.403-1.054-2.403-2.554 0-1.52 1.112-2.556 2.403-2.556 1.292 0 2.41 1.035 2.41 2.555 0 1.5-1.118 2.553-2.41 2.553zm-9.333-6.768c-2.36 0-4.278 1.77-4.278 4.214 0 2.423 1.918 4.212 4.278 4.212 2.358 0 4.278-1.79 4.278-4.213 0-2.444-1.92-4.215-4.277-4.215zm0 6.768c-1.293 0-2.408-1.054-2.408-2.554 0-1.52 1.115-2.556 2.408-2.556 1.292 0 2.403 1.035 2.403 2.555 0 1.5-1.11 2.553-2.403 2.553zm-11.107-5.477v1.79h4.327c-.127 1.002-.465 1.737-.984 2.25-.632.62-1.616 1.307-3.344 1.307a4.722 4.722 0 0 1-4.747-4.756 4.722 4.722 0 0 1 4.746-4.756c1.44 0 2.488.558 3.26 1.278l1.277-1.262c-1.08-1.02-2.52-1.804-4.537-1.804-3.65 0-6.72 2.936-6.72 6.545 0 3.61 3.07 6.545 6.72 6.545 1.974 0 3.456-.64 4.62-1.838 1.195-1.18 1.568-2.84 1.568-4.18 0-.416-.035-.798-.098-1.118h-6.09zm45.416 1.39c-.352-.944-1.438-2.68-3.65-2.68-2.194 0-4.02 1.706-4.02 4.213 0 2.36 1.807 4.212 4.23 4.212 1.958 0 3.088-1.18 3.553-1.868l-1.453-.957c-.485.7-1.146 1.166-2.1 1.166-.95 0-1.63-.43-2.065-1.277l5.702-2.332-.198-.48zm-5.814 1.402c-.05-1.625 1.277-2.457 2.227-2.457.744 0 1.376.368 1.586.895l-3.812 1.563zm-4.634 4.088h1.874V17.652h-1.874v12.384zm-3.07-7.233h-.063c-.42-.493-1.223-.938-2.24-.938-2.136 0-4.088 1.852-4.088 4.228 0 2.36 1.952 4.2 4.087 4.2 1.017 0 1.82-.45 2.24-.958h.064v.604c0 1.61-.87 2.476-2.276 2.476-1.145 0-1.855-.817-2.15-1.505l-1.63.674c.47 1.117 1.715 2.49 3.78 2.49 2.198 0 4.052-1.277 4.052-4.386V22.12h-1.776v.683zm-2.144 5.83c-1.292 0-2.373-1.07-2.373-2.54 0-1.485 1.08-2.57 2.373-2.57 1.273 0 2.277 1.085 2.277 2.57 0 1.47-1.004 2.54-2.277 2.54zm24.438-10.98h-4.483v12.383h1.87v-4.693h2.613c2.076 0 4.112-1.485 4.112-3.846 0-2.36-2.04-3.845-4.112-3.845zm.05 5.968h-2.664v-4.246h2.663a2.16 2.16 0 0 1 2.193 2.123c0 .958-.797 2.124-2.193 2.124zm11.555-1.78c-1.35 0-2.755.59-3.333 1.897l1.66.687c.356-.687 1.013-.91 1.707-.91.97 0 1.954.576 1.97 1.593v.13c-.34-.193-1.064-.48-1.955-.48-1.787 0-3.607.973-3.607 2.787 0 1.66 1.463 2.728 3.11 2.728 1.257 0 1.95-.56 2.387-1.213h.064v.956h1.805v-4.75c0-2.196-1.658-3.425-3.807-3.425zm-.225 6.788c-.612 0-1.464-.3-1.464-1.05 0-.958 1.063-1.326 1.983-1.326.823 0 1.21.18 1.71.416-.148 1.147-1.147 1.96-2.23 1.96zm10.61-6.516l-2.147 5.37h-.063l-2.222-5.37h-2.016l3.337 7.503-1.905 4.174h1.954l5.143-11.678h-2.08zm-16.85 7.924h1.874V17.652h-1.874v12.384z",
    fill: "#fff"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M16.348 33.97c-.235-.247-.37-.63-.37-1.126V15.152c0-.496.135-.88.37-1.125l.058-.054 9.914 9.91v.234l-9.914 9.91-.058-.058z",
    fill: "url(#i)",
    transform: "matrix(1.253 0 0 -1.2384 -9.796 49.85)"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M29.62 20.578l-3.3 3.305v.234l3.305 3.305.074-.043 3.913-2.228c1.117-.632 1.117-1.672 0-2.308L29.7 20.62l-.08-.042z",
    fill: "url(#j)",
    transform: "matrix(1.253 0 0 -1.2384 -9.796 49.85)"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M29.7 20.62L26.32 24l-9.972-9.973c.37-.39.976-.437 1.664-.047L29.7 20.62",
    fill: "url(#k)",
    transform: "matrix(1.253 0 0 -1.2384 -9.796 49.85)"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M29.7 27.38L18.01 34.02c-.688.386-1.293.34-1.664-.05L26.32 24l3.38 3.38z",
    fill: "url(#l)",
    transform: "matrix(1.253 0 0 -1.2384 -9.796 49.85)"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    mask: "url(#m)",
    transform: "matrix(1.253 0 0 -1.2384 -9.796 49.85)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    clipPath: "url(#n)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 0h124v48H0V0z",
    fill: "url(#o)"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    mask: "url(#p)",
    transform: "matrix(1.253 0 0 -1.2384 -9.796 49.85)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    clipPath: "url(#q)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 0h124v48H0V0z",
    fill: "url(#r)"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    mask: "url(#s)",
    transform: "matrix(1.253 0 0 -1.2384 -9.796 49.85)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    clipPath: "url(#t)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 0h124v48H0V0z",
    fill: "url(#u)"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    mask: "url(#v)",
    transform: "matrix(1.253 0 0 -1.2384 -9.796 49.85)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    clipPath: "url(#w)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 0h124v48H0V0z",
    fill: "url(#x)"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Svg);

/***/ }),

/***/ "./static/Icons/Twitter.js":
/*!*********************************!*\
  !*** ./static/Icons/Twitter.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Svg = function Svg(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '166.1' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '299' : _ref$height;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    width: width,
    viewBox: "0 0 368.40001 299.39999"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#FFF",
    d: "M368.4 35.5c-13.6 6-28.1 10.1-43.4 11.9 15.6-9.4 27.6-24.2 33.2-41.8-14.6 8.7-30.8 15-48 18.3C296.4 9.2 276.8 0 255 0c-41.7 0-75.6 33.8-75.6 75.6 0 5.9.7 11.7 2 17.2-62.8-3.1-118.5-33.2-155.8-79C19.1 25 15.4 38 15.4 51.8c0 26.2 13.3 49.4 33.6 62.9-12.4-.4-24-3.8-34.2-9.4v.9c0 36.6 26.1 67.2 60.6 74.1-6.3 1.7-13 2.7-19.9 2.7-4.9 0-9.6-.5-14.2-1.4 9.6 30 37.5 51.9 70.6 52.5C86 254.4 53.4 266.5 18 266.5c-6.1 0-12.1-.4-18-1.1 33.4 21.5 73.2 34 115.9 34 139 0 215.1-115.2 215.1-215.1 0-3.3-.1-6.5-.2-9.8 14.6-10.5 27.4-23.8 37.6-39z"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Svg);

/***/ }),

/***/ "./static/Icons/WindowsStore.js":
/*!**************************************!*\
  !*** ./static/Icons/WindowsStore.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Svg = function Svg(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '135' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '40' : _ref$height;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    width: width,
    viewBox: "0 0 864 312"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#D2D2D2",
    d: "M4.5 4.5h855v303H4.5V4.5zM0 312h864V0H0v312z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "a",
    d: "M0 0h864v312H0z"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#F25022",
    d: "M70.5 68.6h83.8v83.8H70.5z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#7FBA00",
    d: "M163 68.6h83.8v83.8H163z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#00A4EF",
    d: "M70.5 161h83.8v83.8H70.5z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#FFB900",
    d: "M163 161h83.8v83.8H163z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#FFF",
    d: "M408.3 163c0-2.5.9-4.5 2.7-6.2 1.8-1.7 3.9-2.5 6.4-2.5 2.6 0 4.8.9 6.5 2.6 1.7 1.7 2.6 3.8 2.6 6.1 0 2.4-.9 4.5-2.7 6.1-1.8 1.7-3.9 2.5-6.5 2.5s-4.7-.8-6.5-2.5c-1.6-1.7-2.5-3.7-2.5-6.1m16.5 81.8h-14.9v-63.5h14.9v63.5zM470.2 233.9c2.2 0 4.7-.5 7.4-1.5s5.1-2.4 7.4-4.1v13.9c-2.4 1.4-5.1 2.4-8.1 3.1-3 .7-6.4 1.1-10 1.1-9.3 0-16.9-3-22.8-8.9-5.9-5.9-8.8-13.5-8.8-22.6 0-10.2 3-18.6 9-25.2 6-6.6 14.4-9.9 25.4-9.9 2.8 0 5.6.4 8.5 1.1 2.9.7 5.1 1.6 6.8 2.5v14.3c-2.3-1.7-4.7-3-7.1-3.9-2.4-.9-4.9-1.4-7.4-1.4-5.9 0-10.6 1.9-14.3 5.7-3.6 3.8-5.4 9-5.4 15.5 0 6.4 1.7 11.4 5.2 15 3.5 3.6 8.2 5.3 14.2 5.3M527.5 180.3c1.2 0 2.3.1 3.2.2.9.2 1.8.4 2.4.6v15.1c-.8-.6-1.9-1.1-3.4-1.6s-3.3-.8-5.5-.8c-3.7 0-6.8 1.5-9.3 4.6-2.5 3.1-3.8 7.8-3.8 14.3v32.1h-14.9v-63.5h14.9v10h.2c1.4-3.5 3.4-6.2 6.2-8.1 2.8-1.9 6.1-2.9 10-2.9M533.9 214c0-10.5 3-18.8 8.9-25 5.9-6.1 14.2-9.2 24.7-9.2 9.9 0 17.7 3 23.3 8.9 5.6 5.9 8.4 13.9 8.4 23.9 0 10.3-3 18.5-8.9 24.6-5.9 6.1-14 9.1-24.2 9.1-9.8 0-17.7-2.9-23.4-8.7-5.9-5.7-8.8-13.6-8.8-23.6m15.6-.5c0 6.6 1.5 11.7 4.5 15.2s7.3 5.2 12.9 5.2c5.4 0 9.6-1.7 12.4-5.2s4.3-8.7 4.3-15.6c0-6.8-1.5-12-4.4-15.5-2.9-3.5-7.1-5.2-12.4-5.2-5.5 0-9.7 1.8-12.8 5.5-3 3.7-4.5 8.8-4.5 15.6M621.4 198c0 2.1.7 3.8 2 5 1.4 1.2 4.4 2.7 9 4.6 6 2.4 10.2 5.1 12.6 8.1 2.4 3 3.6 6.6 3.6 10.8 0 6-2.3 10.8-6.9 14.4-4.6 3.6-10.8 5.4-18.6 5.4-2.6 0-5.5-.3-8.7-1-3.2-.6-5.9-1.5-8.1-2.4v-14.7c2.7 1.9 5.6 3.4 8.8 4.5 3.1 1.1 6 1.7 8.5 1.7 3.4 0 5.9-.5 7.5-1.4 1.6-.9 2.4-2.5 2.4-4.8 0-2.1-.8-3.8-2.5-5.2-1.7-1.4-4.8-3.1-9.5-4.9-5.5-2.3-9.4-4.9-11.7-7.8-2.3-2.9-3.5-6.6-3.5-11 0-5.7 2.3-10.4 6.8-14.1 4.5-3.7 10.4-5.5 17.7-5.5 2.2 0 4.7.2 7.5.7 2.8.5 5.1 1.1 6.9 1.9v14.2c-2-1.3-4.3-2.4-6.9-3.4-2.6-.9-5.3-1.4-7.8-1.4-2.8 0-5.1.6-6.6 1.7-1.7 1.1-2.5 2.7-2.5 4.6M655.2 214c0-10.5 3-18.8 8.9-25 5.9-6.1 14.2-9.2 24.7-9.2 9.9 0 17.7 3 23.3 8.9 5.6 5.9 8.4 13.9 8.4 23.9 0 10.3-3 18.5-8.9 24.6-5.9 6.1-14 9.1-24.2 9.1-9.8 0-17.7-2.9-23.4-8.7-5.9-5.7-8.8-13.6-8.8-23.6m15.5-.5c0 6.6 1.5 11.7 4.5 15.2s7.3 5.2 12.9 5.2c5.4 0 9.6-1.7 12.4-5.2s4.3-8.7 4.3-15.6c0-6.8-1.5-12-4.4-15.5s-7.1-5.2-12.4-5.2c-5.5 0-9.7 1.8-12.8 5.5-3 3.7-4.5 8.8-4.5 15.6M769.8 193.6v32.6c0 6.8 1.6 11.8 4.7 15.2 3.1 3.4 7.9 5 14.2 5 2.1 0 4.3-.2 6.5-.7 2.2-.5 3.8-.9 4.7-1.5v-12.4c-.9.6-2 1.1-3.2 1.5-1.2.4-2.3.6-3.1.6-3 0-5.3-.8-6.7-2.4-1.4-1.6-2.1-4.4-2.1-8.3v-29.7H800v-12.2h-15.1v-18.8l-15 4.6v14.3h-22.3v-7.7c0-3.8.8-6.7 2.5-8.7 1.7-2 4.1-2.9 7.2-2.9 1.6 0 3 .2 4.3.6 1.2.4 2.1.8 2.6 1.1v-12.9c-1.1-.4-2.3-.6-3.7-.8-1.4-.2-3-.3-4.8-.3-6.8 0-12.4 2.1-16.7 6.4-4.3 4.3-6.5 9.7-6.5 16.4v8.8h-10.6v12.2h10.6v51.3h15.1v-51.3h22.2zM395.5 156.2v88.6h-15.4v-69.4h-.2l-27.5 69.4h-10.2L314 175.4h-.2v69.4h-14.2v-88.6h22l25.5 65.7h.4l26.9-65.7zM340 117.9c-5.3 3-11.3 4.5-18 4.5-5.1 0-9.6-1.1-13.6-3.4-3.9-2.2-7-5.4-9.1-9.5-2.1-4.1-3.2-8.7-3.2-13.8 0-5.4 1.2-10.3 3.5-14.5s5.6-7.6 9.9-10c4.3-2.4 9.1-3.6 14.5-3.6 2.7 0 5.4.3 8.1.8 2.7.5 4.9 1.2 6.6 2v8c-4-2.7-9.1-4-15.3-4-3.7 0-7 .9-10 2.7-3 1.8-5.3 4.3-6.9 7.4-1.6 3.2-2.4 6.8-2.4 10.8 0 6.3 1.7 11.3 5 15 3.3 3.7 7.9 5.5 13.7 5.5 3.7 0 7-.7 9.8-2.2V99.9h-11.3v-6.6H340v24.6zM383.1 104.6h-26.2c.1 3.8 1.3 6.7 3.3 8.8 2.1 2 4.8 3.1 8.2 3.1 4.5 0 8.4-1.3 11.8-3.9v6.4c-1.5 1-3.4 1.9-5.7 2.5-2.3.6-4.7.9-7.1.9-5.7 0-10.2-1.7-13.3-5.1-3.1-3.4-4.7-8.2-4.7-14.4 0-3.8.8-7.3 2.3-10.3 1.5-3.1 3.7-5.5 6.4-7.2 2.7-1.7 5.8-2.6 9.1-2.6 4.9 0 8.8 1.6 11.6 4.8 2.8 3.2 4.2 7.6 4.2 13.3v3.7zm-7.3-5.7c0-3.3-.8-5.8-2.3-7.5-1.5-1.7-3.6-2.6-6.4-2.6-2.5 0-4.7.9-6.6 2.7s-3 4.3-3.6 7.4h18.9zM411.5 121.1c-.7.4-1.6.7-2.9.9-1.2.2-2.3.3-3.3.3-7 0-10.5-3.9-10.5-11.6v-21h-6.4v-6h6.4v-9l7.3-2.3v11.2h9.3v6h-9.3v19.8c0 2.5.4 4.3 1.2 5.3.8 1 2.2 1.5 4.3 1.5 1.4 0 2.7-.4 3.8-1.2v6.1zM447.7 70.3c0 1.2-.4 2.2-1.3 3.1-.9.9-2 1.3-3.3 1.3-1.3 0-2.4-.4-3.3-1.3-.9-.8-1.3-1.9-1.3-3.2 0-1.3.5-2.4 1.4-3.2.9-.8 2-1.3 3.2-1.3 1.2 0 2.3.4 3.2 1.3 1 1 1.4 2 1.4 3.3m-1 51.2h-7.3V83.7h7.3v37.8zM478.4 121.1c-.7.4-1.6.7-2.9.9-1.2.2-2.3.3-3.3.3-7 0-10.5-3.9-10.5-11.6v-21h-6.4v-6h6.4v-9l7.3-2.3v11.2h9.3v6H469v19.8c0 2.5.4 4.3 1.2 5.3.8 1 2.2 1.5 4.3 1.5 1.4 0 2.7-.4 3.8-1.2v6.1zM526.2 71.7c-1.2-.6-2.5-1-4-1-4.1 0-6.1 2.5-6.1 7.5v5.4h8.6v6h-8.6v31.8h-7.3V89.7h-6.4v-6h6.4v-5.8c0-4 1.1-7.2 3.4-9.6 2.3-2.4 5.4-3.6 9.4-3.6 2 0 3.5.2 4.7.7v6.3zM553.1 91c-.4-.3-1.2-.6-2.2-.9-1-.2-1.9-.4-2.6-.4-2.6 0-4.7 1.2-6.3 3.5-1.6 2.3-2.4 5.3-2.4 9v19.3h-7.3V83.7h7.3v7.6h.2c.8-2.6 2.1-4.6 3.8-6.1 1.7-1.5 3.7-2.2 5.9-2.2 1.5 0 2.7.2 3.5.5V91zM594.8 102.4c0 6.1-1.8 11-5.3 14.6-3.5 3.6-8.2 5.4-14 5.4-5.7 0-10.3-1.8-13.7-5.3-3.4-3.5-5.1-8.2-5.1-14.1 0-6.3 1.8-11.2 5.3-14.8 3.5-3.6 8.3-5.4 14.4-5.4 5.7 0 10.2 1.7 13.4 5.2 3.4 3.5 5 8.3 5 14.4m-7.5.2c0-4.5-1-7.9-2.9-10.2-2-2.3-4.7-3.5-8.3-3.5-3.6 0-6.5 1.2-8.6 3.7-2.1 2.4-3.1 5.9-3.1 10.3 0 4.3 1 7.6 3.1 10 2.1 2.4 4.9 3.6 8.6 3.6 3.7 0 6.5-1.2 8.4-3.5 1.8-2.5 2.8-5.9 2.8-10.4M660.1 121.5h-7.3V100c0-3.9-.6-6.7-1.8-8.5-1.2-1.8-3.3-2.6-6.2-2.6-2.4 0-4.5 1.1-6.1 3.3-1.7 2.2-2.5 4.9-2.5 7.9v21.4h-7.3V99.3c0-6.9-2.7-10.4-8-10.4-2.5 0-4.6 1.1-6.2 3.2s-2.4 4.8-2.4 8.1v21.4H605V83.7h7.3v5.9h.1c2.7-4.6 6.7-6.8 11.8-6.8 2.4 0 4.6.7 6.6 2 1.9 1.3 3.3 3.2 4.2 5.6 1.5-2.6 3.2-4.5 5.3-5.8 2.1-1.2 4.5-1.9 7.3-1.9 8.3 0 12.4 5.1 12.4 15.4v23.4z"
  })), "/>"));
};

/* harmony default export */ __webpack_exports__["default"] = (Svg);

/***/ }),

/***/ "./static/Icons/index.js":
/*!*******************************!*\
  !*** ./static/Icons/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Facebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Facebook */ "./static/Icons/Facebook.js");
/* harmony import */ var _Instagram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Instagram */ "./static/Icons/Instagram.js");
/* harmony import */ var _Twitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Twitter */ "./static/Icons/Twitter.js");
/* harmony import */ var _AppStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AppStore */ "./static/Icons/AppStore.js");
/* harmony import */ var _PlayStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlayStore */ "./static/Icons/PlayStore.js");
/* harmony import */ var _WindowsStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WindowsStore */ "./static/Icons/WindowsStore.js");








var Icon = function Icon(props) {
  switch (props.name) {
    case 'facebook':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Facebook__WEBPACK_IMPORTED_MODULE_1__["default"], props);

    case 'instagram':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Instagram__WEBPACK_IMPORTED_MODULE_2__["default"], props);

    case 'twitter':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Twitter__WEBPACK_IMPORTED_MODULE_3__["default"], props);

    case 'appstore':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AppStore__WEBPACK_IMPORTED_MODULE_4__["default"], props);

    case 'playstore':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PlayStore__WEBPACK_IMPORTED_MODULE_5__["default"], props);

    case 'windowstore':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WindowsStore__WEBPACK_IMPORTED_MODULE_6__["default"], props);

    default:
      return;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/movies.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/movies.js */"./pages/movies.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=movies.js.map