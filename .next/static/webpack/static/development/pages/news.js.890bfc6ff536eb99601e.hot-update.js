webpackHotUpdate("static\\development\\pages\\news.js",{

/***/ "./pages/news.js":
/*!***********************!*\
  !*** ./pages/news.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/next/node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// This is the Link API

 //Name of news related Source

var source = '';
var apikey = 'b63ca222c0744b1b9a3fd6d6e4392d59'; //Include any news api from the link

var url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b63ca222c0744b1b9a3fd6d6e4392d59'; // Pass this content as 'props' to child components

var News = function News(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3805338038"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: "jsx-3805338038"
  }, "News from ", source.split("-").join(" ")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3805338038"
  }, props.articles.map(function (article) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
      className: "jsx-3805338038"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
      className: "jsx-3805338038"
    }, article.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "jsx-3805338038" + " " + "author"
    }, article.author, " ", article.publishedAt), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: article.urlToImage,
      alt: "article image",
      className: "jsx-3805338038" + " " + "img-article"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "jsx-3805338038"
    }, article.descritpion), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "jsx-3805338038"
    }, article.content), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "jsx-3805338038"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/story"
    }, "Read More")));
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "3805338038",
    css: "section.jsx-3805338038{width:50% border:1px solid gray;background-color:rgb(240,248,255) padding:1em;margin:1em;}.author.jsx-3805338038{font-style:italic font-size:0.8em;}.img-article.jsx-3805338038{max-witdh:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEb3dubG9hZHNcXFdlYkFwcGxpY2F0aW9uXFxXZWJDQVxccGFnZXNcXG5ld3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJvQixBQUltQyxBQVFOLEFBSUQsZUFDakIsaUJBWGMsRUFPZCw0Q0FOYSxXQUNiIiwiZmlsZSI6IkQ6XFxEb3dubG9hZHNcXFdlYkFwcGxpY2F0aW9uXFxXZWJDQVxccGFnZXNcXG5ld3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGlzIHRoZSBMaW5rIEFQSVxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG4vL05hbWUgb2YgbmV3cyByZWxhdGVkIFNvdXJjZVxuY29uc3Qgc291cmNlID0gJyc7XG5cbmNvbnN0IGFwaWtleSA9ICdiNjNjYTIyMmMwNzQ0YjFiOWEzZmQ2ZDZlNDM5MmQ1OSdcbi8vSW5jbHVkZSBhbnkgbmV3cyBhcGkgZnJvbSB0aGUgbGlua1xuY29uc3QgdXJsID0gJ2h0dHBzOi8vbmV3c2FwaS5vcmcvdjIvdG9wLWhlYWRsaW5lcz9jb3VudHJ5PXVzJmNhdGVnb3J5PWJ1c2luZXNzJmFwaUtleT1iNjNjYTIyMmMwNzQ0YjFiOWEzZmQ2ZDZlNDM5MmQ1OSdcblxuLy8gUGFzcyB0aGlzIGNvbnRlbnQgYXMgJ3Byb3BzJyB0byBjaGlsZCBjb21wb25lbnRzXG5jb25zdCBOZXdzID0gcHJvcHMgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxoMj5OZXdzIGZyb20ge3NvdXJjZS5zcGxpdChcIi1cIikuam9pbihcIiBcIil9PC9oMj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7cHJvcHMuYXJ0aWNsZXMubWFwKGFydGljbGUgPT4gKFxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgIDxoMz57YXJ0aWNsZS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhdXRob3JcIj57YXJ0aWNsZS5hdXRob3J9IHthcnRpY2xlLnB1Ymxpc2hlZEF0fTwvcD5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2FydGljbGUudXJsVG9JbWFnZX0gYWx0PVwiYXJ0aWNsZSBpbWFnZVwiIGNsYXNzTmFtZT1cImltZy1hcnRpY2xlXCI+PC9pbWc+XG4gICAgICAgICAgICAgIDxwPnthcnRpY2xlLmRlc2NyaXRwaW9ufTwvcD5cbiAgICAgICAgICAgICAgPHA+e2FydGljbGUuY29udGVudH08L3A+XG4gICAgICAgICAgICAgIDxwPjxMaW5rIGhyZWY9XCIvc3RvcnlcIj5SZWFkIE1vcmU8L0xpbms+PC9wPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgICB3aWR0aDogNTAlXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQ4LCAyNTUpXG4gICAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgICBtYXJnaW46IDFlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYXV0aG9yIHtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpY1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW1nLWFydGljbGUge1xuICAgICAgICAgICAgbWF4LXdpdGRoOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xuXG5OZXdzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkgXG57XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEuYXJ0aWNsZXMubGVuZ3RofWApO1xuXG4gIHJldHVybiB7XG4gICAgYXJ0aWNsZXM6IGRhdGEuYXJ0aWNsZXNcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTmV3cztcbiJdfQ== */\n/*@ sourceURL=D:\\Downloads\\WebApplication\\WebCA\\pages\\news.js */"
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
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/news")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=news.js.890bfc6ff536eb99601e.hot-update.js.map