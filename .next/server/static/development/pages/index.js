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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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


var source = 'News';
var apikey = 'b63ca222c0744b1b9a3fd6d6e4392d59'; //Include any news api from the link

var url = 'https://newsapi.org/v2/top-headlines?sources=time&apiKey=b63ca222c0744b1b9a3fd6d6e4392d59'; // Pass this content as 'props' to child components

var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1670628298"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: "jsx-1670628298"
  }, "General ", source.split("-").join(" ")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1670628298"
  }, props.articles.map(function (article) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
      className: "jsx-1670628298"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
      className: "jsx-1670628298"
    }, article.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "jsx-1670628298" + " " + "author"
    }, article.author, " ", article.publishedAt), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: article.urlToImage,
      alt: "article image",
      className: "jsx-1670628298" + " " + "img-article"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "jsx-1670628298"
    }, article.descritpion), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "jsx-1670628298"
    }, article.content), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "jsx-1670628298"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: article.url
    }, "Read More")));
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "1670628298",
    css: "section.jsx-1670628298{width:50% border:1px solid gray;background-color:rgb(240,248,255) padding:1em;margin:1em;}.author.jsx-1670628298{font-style:italic font-size:0.8em;}.img-article.jsx-1670628298{height:auto;max-width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEb3dubG9hZHNcXFdlYkFwcGxpY2F0aW9uXFxXZWJDQVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCa0IsQUFJaUMsQUFRTixBQUlKLFlBQ0csZUFDakIsS0FaYyxFQU9kLDRDQU5hLFdBQ2IiLCJmaWxlIjoiRDpcXERvd25sb2Fkc1xcV2ViQXBwbGljYXRpb25cXFdlYkNBXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGlzIHRoZSBMaW5rIEFQSVxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnIFxuXG5jb25zdCBzb3VyY2UgPSAnTmV3cyc7XG5cbmNvbnN0IGFwaWtleSA9ICdiNjNjYTIyMmMwNzQ0YjFiOWEzZmQ2ZDZlNDM5MmQ1OSdcbi8vSW5jbHVkZSBhbnkgbmV3cyBhcGkgZnJvbSB0aGUgbGlua1xuY29uc3QgdXJsID0gJ2h0dHBzOi8vbmV3c2FwaS5vcmcvdjIvdG9wLWhlYWRsaW5lcz9zb3VyY2VzPXRpbWUmYXBpS2V5PWI2M2NhMjIyYzA3NDRiMWI5YTNmZDZkNmU0MzkyZDU5J1xuXG4vLyBQYXNzIHRoaXMgY29udGVudCBhcyAncHJvcHMnIHRvIGNoaWxkIGNvbXBvbmVudHNcbmNvbnN0IEluZGV4ID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgICAgPGgyPkdlbmVyYWwge3NvdXJjZS5zcGxpdChcIi1cIikuam9pbihcIiBcIil9PC9oMj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtwcm9wcy5hcnRpY2xlcy5tYXAoYXJ0aWNsZSA9PiAoXG4gICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8aDM+e2FydGljbGUudGl0bGV9PC9oMz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImF1dGhvclwiPnthcnRpY2xlLmF1dGhvcn0ge2FydGljbGUucHVibGlzaGVkQXR9PC9wPlxuICAgICAgICAgICAgPGltZyBzcmM9e2FydGljbGUudXJsVG9JbWFnZX0gYWx0PVwiYXJ0aWNsZSBpbWFnZVwiIGNsYXNzTmFtZT1cImltZy1hcnRpY2xlXCI+PC9pbWc+XG4gICAgICAgICAgICA8cD57YXJ0aWNsZS5kZXNjcml0cGlvbn08L3A+XG4gICAgICAgICAgICA8cD57YXJ0aWNsZS5jb250ZW50fTwvcD5cbiAgICAgICAgICAgIDxwPjxMaW5rIGhyZWY9e2FydGljbGUudXJsfT5SZWFkIE1vcmU8L0xpbms+PC9wPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICB3aWR0aDogNTAlXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDgsIDI1NSlcbiAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgbWFyZ2luOiAxZW07XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aG9yIHtcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWNcbiAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmltZy1hcnRpY2xlIHtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbi8vIHNlZSBodHRwczovL25leHRqcy5vcmcvbGVhcm4vYmFzaWNzL2ZldGNoaW5nLWRhdGEtZm9yLXBhZ2VzXG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmFydGljbGVzLmxlbmd0aH1gKTtcblxuICByZXR1cm4ge1xuICAgIGFydGljbGVzOiBkYXRhLmFydGljbGVzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXX0= */\n/*@ sourceURL=D:\\Downloads\\WebApplication\\WebCA\\pages\\index.js */"
  }));
}; // see https://nextjs.org/learn/basics/fetching-data-for-pages


Index.getInitialProps =
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
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


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
//# sourceMappingURL=index.js.map