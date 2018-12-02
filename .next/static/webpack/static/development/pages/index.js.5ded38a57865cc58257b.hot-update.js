webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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


var source = 'News';
var apikey = 'b63ca222c0744b1b9a3fd6d6e4392d59'; //Include any news api from the link

var url = 'https://newsapi.org/v2/top-headlines?sources=time&apiKey=b63ca222c0744b1b9a3fd6d6e4392d59'; // Pass this content as 'props' to child components

var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3395091559"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: "jsx-3395091559"
  }, "General ", source.split("-").join(" ")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3395091559"
  }, props.articles.map(function (article) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
      className: "jsx-3395091559"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
      className: "jsx-3395091559"
    }, article.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "jsx-3395091559" + " " + "author"
    }, article.author, " ", article.publishedAt), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: article.urlToImage,
      alt: "article image",
      className: "jsx-3395091559" + " " + "img-article"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "jsx-3395091559"
    }, article.descritpion), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "jsx-3395091559"
    }, article.content), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "jsx-3395091559"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/story"
    }, "Read More")));
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "3395091559",
    css: "section.jsx-3395091559{width:50% border:1px solid gray;background-color:rgb(240,248,255) padding:1em;margin:1em;}.author.jsx-3395091559{font-style:italic font-size:0.8em;}.img-article.jsx-3395091559{max-witdh:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEb3dubG9hZHNcXFdlYkFwcGxpY2F0aW9uXFxXZWJDQVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCa0IsQUFJaUMsQUFRTixBQUlELGVBRWxCLEFBQUMsaUJBWmMsRUFPZCw0Q0FOYSxXQUNiIiwiZmlsZSI6IkQ6XFxEb3dubG9hZHNcXFdlYkFwcGxpY2F0aW9uXFxXZWJDQVxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBpcyB0aGUgTGluayBBUElcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJyBcblxuY29uc3Qgc291cmNlID0gJ05ld3MnO1xuXG5jb25zdCBhcGlrZXkgPSAnYjYzY2EyMjJjMDc0NGIxYjlhM2ZkNmQ2ZTQzOTJkNTknXG4vL0luY2x1ZGUgYW55IG5ld3MgYXBpIGZyb20gdGhlIGxpbmtcbmNvbnN0IHVybCA9ICdodHRwczovL25ld3NhcGkub3JnL3YyL3RvcC1oZWFkbGluZXM/c291cmNlcz10aW1lJmFwaUtleT1iNjNjYTIyMmMwNzQ0YjFiOWEzZmQ2ZDZlNDM5MmQ1OSdcblxuLy8gUGFzcyB0aGlzIGNvbnRlbnQgYXMgJ3Byb3BzJyB0byBjaGlsZCBjb21wb25lbnRzXG5jb25zdCBJbmRleCA9IHByb3BzID0+IChcbiAgPGRpdj5cbiAgICAgIDxoMj5HZW5lcmFsIHtzb3VyY2Uuc3BsaXQoXCItXCIpLmpvaW4oXCIgXCIpfTwvaDI+XG4gICAgICA8ZGl2PlxuICAgICAgICB7cHJvcHMuYXJ0aWNsZXMubWFwKGFydGljbGUgPT4gKFxuICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPGgzPnthcnRpY2xlLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhdXRob3JcIj57YXJ0aWNsZS5hdXRob3J9IHthcnRpY2xlLnB1Ymxpc2hlZEF0fTwvcD5cbiAgICAgICAgICAgIDxpbWcgc3JjPXthcnRpY2xlLnVybFRvSW1hZ2V9IGFsdD1cImFydGljbGUgaW1hZ2VcIiBjbGFzc05hbWU9XCJpbWctYXJ0aWNsZVwiPjwvaW1nPlxuICAgICAgICAgICAgPHA+e2FydGljbGUuZGVzY3JpdHBpb259PC9wPlxuICAgICAgICAgICAgPHA+e2FydGljbGUuY29udGVudH08L3A+XG4gICAgICAgICAgICA8cD48TGluayBocmVmPVwiL3N0b3J5XCI+UmVhZCBNb3JlPC9MaW5rPjwvcD5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgd2lkdGg6IDUwJVxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQ4LCAyNTUpXG4gICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgIG1hcmdpbjogMWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGhvciB7XG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljXG4gICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWctYXJ0aWNsZSB7XG4gICAgICAgICAgbWF4LXdpdGRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuLy8gc2VlIGh0dHBzOi8vbmV4dGpzLm9yZy9sZWFybi9iYXNpY3MvZmV0Y2hpbmctZGF0YS1mb3ItcGFnZXNcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEuYXJ0aWNsZXMubGVuZ3RofWApO1xuXG4gIHJldHVybiB7XG4gICAgYXJ0aWNsZXM6IGRhdGEuYXJ0aWNsZXNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdfQ== */\n/*@ sourceURL=D:\\Downloads\\WebApplication\\WebCA\\pages\\index.js */"
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.5ded38a57865cc58257b.hot-update.js.map