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

var source = 'Business';
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
    css: "section.jsx-3805338038{width:50% border:1px solid gray;background-color:rgb(240,248,255) padding:1em;margin:1em;}.author.jsx-3805338038{font-style:italic font-size:0.8em;}.img-article.jsx-3805338038{max-witdh:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEb3dubG9hZHNcXFdlYkFwcGxpY2F0aW9uXFxXZWJDQVxccGFnZXNcXG5ld3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJvQixBQUltQyxBQVFOLEFBSUQsZUFDakIsaUJBWGMsRUFPZCw0Q0FOYSxXQUNiIiwiZmlsZSI6IkQ6XFxEb3dubG9hZHNcXFdlYkFwcGxpY2F0aW9uXFxXZWJDQVxccGFnZXNcXG5ld3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGlzIHRoZSBMaW5rIEFQSVxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG4vL05hbWUgb2YgbmV3cyByZWxhdGVkIFNvdXJjZVxuY29uc3Qgc291cmNlID0gJ0J1c2luZXNzJztcblxuY29uc3QgYXBpa2V5ID0gJ2I2M2NhMjIyYzA3NDRiMWI5YTNmZDZkNmU0MzkyZDU5J1xuLy9JbmNsdWRlIGFueSBuZXdzIGFwaSBmcm9tIHRoZSBsaW5rXG5jb25zdCB1cmwgPSAnaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi90b3AtaGVhZGxpbmVzP2NvdW50cnk9dXMmY2F0ZWdvcnk9YnVzaW5lc3MmYXBpS2V5PWI2M2NhMjIyYzA3NDRiMWI5YTNmZDZkNmU0MzkyZDU5J1xuXG4vLyBQYXNzIHRoaXMgY29udGVudCBhcyAncHJvcHMnIHRvIGNoaWxkIGNvbXBvbmVudHNcbmNvbnN0IE5ld3MgPSBwcm9wcyA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGgyPk5ld3MgZnJvbSB7c291cmNlLnNwbGl0KFwiLVwiKS5qb2luKFwiIFwiKX08L2gyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtwcm9wcy5hcnRpY2xlcy5tYXAoYXJ0aWNsZSA9PiAoXG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgPGgzPnthcnRpY2xlLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImF1dGhvclwiPnthcnRpY2xlLmF1dGhvcn0ge2FydGljbGUucHVibGlzaGVkQXR9PC9wPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17YXJ0aWNsZS51cmxUb0ltYWdlfSBhbHQ9XCJhcnRpY2xlIGltYWdlXCIgY2xhc3NOYW1lPVwiaW1nLWFydGljbGVcIj48L2ltZz5cbiAgICAgICAgICAgICAgPHA+e2FydGljbGUuZGVzY3JpdHBpb259PC9wPlxuICAgICAgICAgICAgICA8cD57YXJ0aWNsZS5jb250ZW50fTwvcD5cbiAgICAgICAgICAgICAgPHA+PExpbmsgaHJlZj1cIi9zdG9yeVwiPlJlYWQgTW9yZTwvTGluaz48L3A+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCVcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDgsIDI1NSlcbiAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMWVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hdXRob3Ige1xuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pbWctYXJ0aWNsZSB7XG4gICAgICAgICAgICBtYXgtd2l0ZGg6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG5cbk5ld3MuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSBcbntcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5hcnRpY2xlcy5sZW5ndGh9YCk7XG5cbiAgcmV0dXJuIHtcbiAgICBhcnRpY2xlczogZGF0YS5hcnRpY2xlc1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBOZXdzO1xuIl19 */\n/*@ sourceURL=D:\\Downloads\\WebApplication\\WebCA\\pages\\news.js */"
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
//# sourceMappingURL=news.js.d7690f183db0088ae023.hot-update.js.map