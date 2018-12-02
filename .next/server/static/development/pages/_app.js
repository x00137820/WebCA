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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



// Footer component
var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3782354720"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
    className: "jsx-3782354720"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3782354720"
  }, "contact information: info@newssite.com")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3782354720",
    css: "footer.jsx-3782354720{background-color:#a19f9f;max-width:900px;font-size:0.8em;text-align:center;color:#a19f9f;clear:both;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEb3dubG9hZHNcXFdlYkFwcGxpY2F0aW9uXFxXZWJDQVxcY29tcG9uZW50c1xcRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1vQixBQUcwQyx5QkFDVCxnQkFDQSxnQkFDRSxrQkFDSixjQUNILFdBQ2YiLCJmaWxlIjoiRDpcXERvd25sb2Fkc1xcV2ViQXBwbGljYXRpb25cXFdlYkNBXFxjb21wb25lbnRzXFxGb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb290ZXIgY29tcG9uZW50XG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIDxwPmNvbnRhY3QgaW5mb3JtYXRpb246IGluZm9AbmV3c3NpdGUuY29tPC9wPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTE5ZjlmO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogOTAwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNhMTlmOWY7XG4gICAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj4gXG4gKVxuIFxuIGV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiXX0= */\n/*@ sourceURL=D:\\Downloads\\WebApplication\\WebCA\\components\\Footer.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2512419688"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-2512419688" + " " + "title"
  }, "TrustedSource"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2512419688",
    css: "h2.title.jsx-2512419688{font-family:\"Arial\";font-size:3em;color:#535151;padding:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEb3dubG9hZHNcXFdlYkFwcGxpY2F0aW9uXFxXZWJDQVxcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdvQixBQUtxQyxvQkFDTixjQUNBLGNBQ0YsWUFDaEIiLCJmaWxlIjoiRDpcXERvd25sb2Fkc1xcV2ViQXBwbGljYXRpb25cXFdlYkNBXFxjb21wb25lbnRzXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBIZWFkZXIgPSAoKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+VHJ1c3RlZFNvdXJjZTwvaDI+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcblxuXG4gICAgICAgICAgICBoMi50aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzUzNTE1MTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+IFxuIClcbiBcbiBleHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=D:\\Downloads\\WebApplication\\WebCA\\components\\Header.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Meta.js":
/*!****************************!*\
  !*** ./components/Meta.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);

// This component is is used to customise the HTML head section


var Meta = function Meta() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "shortcut icon",
    href: ""
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/style.css"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "My Website"));
};

/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);


// Site Navigation menu
// https://www.sitepoint.com/responsive-fluid-width-variable-item-navigation-css/
// https://www.w3schools.com/Css/css_navbar.asp


var Nav = function Nav() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3487719119"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-3487719119"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3487719119"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3487719119"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/index"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3487719119"
  }, "Home"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3487719119" + " " + "dropdown"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "javascript:void(0)",
    className: "jsx-3487719119" + " " + "dropbtn"
  }, "News"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3487719119" + " " + "dropdown-content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/news"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3487719119"
  }, "News")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3487719119"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3487719119"
  }, "About"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3487719119",
    css: "nav.jsx-3487719119{max-width:900px;background:#f0f0f0;border:1px solid #ccc;border-right:none;}nav.jsx-3487719119 ul.jsx-3487719119{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin:0;padding:0;}nav.jsx-3487719119 ul.jsx-3487719119 li.jsx-3487719119{list-style:none;float:left;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;text-align:center;border-left:1px solid #fff;border-right:1px solid #ccc;width:16.6667%;width:calc(100% / 6);box-sizing:border-box;}nav.jsx-3487719119 ul.jsx-3487719119 li.jsx-3487719119:first-child{border-left:none;}nav.jsx-3487719119 ul.jsx-3487719119 li.jsx-3487719119 a.jsx-3487719119{font-size:0.8em;display:block;-webkit-text-decoration:none;text-decoration:none;color:#616161;padding:5px 0;}nav.jsx-3487719119 ul.jsx-3487719119 li.jsx-3487719119:hover{background:black;}nav.jsx-3487719119 ul.jsx-3487719119 li.jsx-3487719119 a.jsx-3487719119:hover{color:white;}li.jsx-3487719119 a.jsx-3487719119,.dropbtn.jsx-3487719119{display:inline-block;color:white;text-align:center;padding:14px 16px;-webkit-text-decoration:none;text-decoration:none;}li.jsx-3487719119 a.jsx-3487719119:hover,.dropdown.jsx-3487719119:hover .dropbtn.jsx-3487719119{background-color:black;}li.dropdown.jsx-3487719119{display:inline-block;}.dropdown-content.jsx-3487719119{display:none;position:absolute;background-color:#f9f9f9;min-width:160px;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);z-index:1;}.dropdown-content.jsx-3487719119 a.jsx-3487719119{color:black;padding:12px 16px;-webkit-text-decoration:none;text-decoration:none;display:block;text-align:left;}.dropdown-content.jsx-3487719119 a.jsx-3487719119:hover{background-color:black;}.dropdown.jsx-3487719119:hover .dropdown-content.jsx-3487719119{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEb3dubG9hZHNcXFdlYkFwcGxpY2F0aW9uXFxXZWJDQVxcY29tcG9uZW50c1xcTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCbUIsQUFHNkIsQUFRSCxBQU9HLEFBWUMsQUFJRCxBQVFDLEFBR0wsQUFJQyxBQVFFLEFBSUYsQUFJUixBQVNELEFBT2dDLEFBRzlCLFlBdENWLEFBNkJjLENBVEEsQ0FtQnRCLEVBakYrQixBQWVSLEFBZ0JHLENBSmxCLEFBWUEsSUFPUSxBQVloQixFQUpBLEFBdUJpRCxJQTdEekIsR0FnQlMsQUF3Q1IsQ0FUSSxFQWhCUCxFQTlDWSxnQkErQ1osS0FnQkYsQ0E5RFUsWUErQ0wsR0FnQnVCLEVBekRqQixDQUx2QixLQThCa0IsQUF3Q1IsY0F2Q1EsQUF3Q04sSUF6RFUsVUFrQnRCLEVBd0NSLE1BekR1QyxBQWdEekIsR0FoQmQsT0FpQkEsaUJBMURxQixBQVVtQixTQVRsQixVQUNkLFNBU21CLGVBQ00scUJBQ0Msc0JBQzFCIiwiZmlsZSI6IkQ6XFxEb3dubG9hZHNcXFdlYkFwcGxpY2F0aW9uXFxXZWJDQVxcY29tcG9uZW50c1xcTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU2l0ZSBOYXZpZ2F0aW9uIG1lbnVcbi8vIGh0dHBzOi8vd3d3LnNpdGVwb2ludC5jb20vcmVzcG9uc2l2ZS1mbHVpZC13aWR0aC12YXJpYWJsZS1pdGVtLW5hdmlnYXRpb24tY3NzL1xuLy8gaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9Dc3MvY3NzX25hdmJhci5hc3BcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgTmF2ID0gKCkgPT4gKFxuICAgPGRpdj5cbiAgICAgICA8bmF2PlxuICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9pbmRleFwiPjxhPkhvbWU8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3NOYW1lPVwiZHJvcGJ0blwiPk5ld3M8L2E+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9uZXdzXCI+PGE+TmV3czwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvYWJvdXRcIj48YT5BYm91dDwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgPC91bD5cbiAgICAgICA8L25hdj5cbiAgICAgICB7LyogRGVmaW5lIGNzcyBmb3IgdGhpcyBwYWdlIG9yIGNvbXBvbmVudCAqL31cbiAgICAgICB7LyogTm90ZSBiYWNrIHRpY2tzIGBgIHN1cnJvdW5kaW5nIGNzcyBhcmUgcmVxdWlyZWQgKi99XG4gICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBuYXYge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA5MDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgICB9XG5cblxuICAgICAgICBuYXYgdWwge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbmF2IHVsIGxpIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICB3aWR0aDogMTYuNjY2NyU7IC8qIGZhbGxiYWNrIGZvciBub24tY2FsYygpIGJyb3dzZXJzICovXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC8gNik7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG5cbiAgICAgICAgbmF2IHVsIGxpOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgbmF2IHVsIGxpIGEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICM2MTYxNjE7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIG5hdiB1bCBsaTpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgfVxuICAgICAgICBuYXYgdWwgbGkgYTpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICBsaSBhLCAuZHJvcGJ0biB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxubGkgYTpob3ZlciwgLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxubGkuZHJvcGRvd24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uZHJvcGRvd24tY29udGVudCBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiBibGFja31cblxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuICAgICAgICBgfTwvc3R5bGU+XG4gICA8L2Rpdj4gXG4pXG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcblxuIl19 */\n/*@ sourceURL=D:\\Downloads\\WebApplication\\WebCA\\components\\Nav.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Meta */ "./components/Meta.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // import page components




 // Build the page template from components

var Page =
/*#__PURE__*/
function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, _getPrototypeOf(Page).apply(this, arguments));
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Meta__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], null), this.props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Pageprops
// 
// Import App and Container dependencies
 // Import the Page component

 // Define the custom App - a class which extents the default App

var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      // Compent will be the page content
      // e.g. index or about
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return (// Container contains page content
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, pageProps)))
      );
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_1___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

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
//# sourceMappingURL=_app.js.map