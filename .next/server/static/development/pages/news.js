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

/***/ "./pages/news.js":
/*!***********************!*\
  !*** ./pages/news.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// This is the Link API

 //Name of news related Source

var source = 'Business';
var apikey = 'b63ca222c0744b1b9a3fd6d6e4392d59'; //Include any news api from the link

var url = 'https://newsapi.org/v2/everything?sources=financial-post&apiKey=b63ca222c0744b1b9a3fd6d6e4392d59'; // Pass this content as 'props' to child components

var News = function News(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2535692431"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: "jsx-2535692431"
  }, "News from ", source.split("-").join(" ")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2535692431"
  }, props.articles.map(function (article) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
      className: "jsx-2535692431"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
      className: "jsx-2535692431"
    }, article.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "jsx-2535692431" + " " + "author"
    }, article.author, " ", article.publishedAt), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: article.urlToImage,
      alt: "article image",
      className: "jsx-2535692431" + " " + "img-article"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "jsx-2535692431"
    }, article.descritpion), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "jsx-2535692431"
    }, article.content), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "jsx-2535692431"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: article.url
    }, "Read More")));
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "2535692431",
    css: "section.jsx-2535692431{width:50% border:1px solid gray;background-color:rgb(240,248,255) padding:1em;margin:1em;}.author.jsx-2535692431{font-style:italic font-size:0.8em;}.img-article.jsx-2535692431{height:auto;max-width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEb3dubG9hZHNcXFdlYkFwcGxpY2F0aW9uXFxXZWJDQVxccGFnZXNcXG5ld3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJvQixBQUltQyxBQVFOLEFBSUosWUFDRyxlQUNqQixLQVpjLEVBT2QsNENBTmEsV0FDYiIsImZpbGUiOiJEOlxcRG93bmxvYWRzXFxXZWJBcHBsaWNhdGlvblxcV2ViQ0FcXHBhZ2VzXFxuZXdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBpcyB0aGUgTGluayBBUElcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxuLy9OYW1lIG9mIG5ld3MgcmVsYXRlZCBTb3VyY2VcbmNvbnN0IHNvdXJjZSA9ICdCdXNpbmVzcyc7XG5cbmNvbnN0IGFwaWtleSA9ICdiNjNjYTIyMmMwNzQ0YjFiOWEzZmQ2ZDZlNDM5MmQ1OSdcbi8vSW5jbHVkZSBhbnkgbmV3cyBhcGkgZnJvbSB0aGUgbGlua1xuY29uc3QgdXJsID0gJ2h0dHBzOi8vbmV3c2FwaS5vcmcvdjIvZXZlcnl0aGluZz9zb3VyY2VzPWZpbmFuY2lhbC1wb3N0JmFwaUtleT1iNjNjYTIyMmMwNzQ0YjFiOWEzZmQ2ZDZlNDM5MmQ1OSdcblxuLy8gUGFzcyB0aGlzIGNvbnRlbnQgYXMgJ3Byb3BzJyB0byBjaGlsZCBjb21wb25lbnRzXG5jb25zdCBOZXdzID0gcHJvcHMgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxoMj5OZXdzIGZyb20ge3NvdXJjZS5zcGxpdChcIi1cIikuam9pbihcIiBcIil9PC9oMj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7cHJvcHMuYXJ0aWNsZXMubWFwKGFydGljbGUgPT4gKFxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgIDxoMz57YXJ0aWNsZS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhdXRob3JcIj57YXJ0aWNsZS5hdXRob3J9IHthcnRpY2xlLnB1Ymxpc2hlZEF0fTwvcD5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2FydGljbGUudXJsVG9JbWFnZX0gYWx0PVwiYXJ0aWNsZSBpbWFnZVwiIGNsYXNzTmFtZT1cImltZy1hcnRpY2xlXCI+PC9pbWc+XG4gICAgICAgICAgICAgIDxwPnthcnRpY2xlLmRlc2NyaXRwaW9ufTwvcD5cbiAgICAgICAgICAgICAgPHA+e2FydGljbGUuY29udGVudH08L3A+XG4gICAgICAgICAgICAgIDxwPjxMaW5rIGhyZWY9e2FydGljbGUudXJsfT5SZWFkIE1vcmU8L0xpbms+PC9wPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgICB3aWR0aDogNTAlXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQ4LCAyNTUpXG4gICAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgICBtYXJnaW46IDFlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYXV0aG9yIHtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpY1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW1nLWFydGljbGUge1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xuXG5OZXdzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkgXG57XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEuYXJ0aWNsZXMubGVuZ3RofWApO1xuXG4gIHJldHVybiB7XG4gICAgYXJ0aWNsZXM6IGRhdGEuYXJ0aWNsZXNcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTmV3cztcbiJdfQ== */\n/*@ sourceURL=D:\\Downloads\\WebApplication\\WebCA\\pages\\news.js */"
  }));
};

News.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(url);

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          console.log("Show data fetched. Count: ".concat(data.articles.length));
          return _context.abrupt("return", {
            articles: data.articles
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/news.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/news.js */"./pages/news.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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
//# sourceMappingURL=news.js.map