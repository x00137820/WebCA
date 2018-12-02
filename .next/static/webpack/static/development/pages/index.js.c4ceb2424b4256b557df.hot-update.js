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


var source = '';
var apikey = 'b63ca222c0744b1b9a3fd6d6e4392d59'; //Include any news api from the link

var url = 'https://newsapi.org/v2/top-headlines?sources=time&apiKey=b63ca222c0744b1b9a3fd6d6e4392d59'; // Pass this content as 'props' to child components

var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1186092066"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: "jsx-1186092066"
  }, "General ", source.split("-").join(" ")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1186092066"
  }, props.articles.map(function (article) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
      className: "jsx-1186092066"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
      className: "jsx-1186092066"
    }, article.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "jsx-1186092066" + " " + "author"
    }, article.author, " ", article.publishedAt), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: article.urlToImage,
      alt: "article image",
      className: "jsx-1186092066" + " " + "img-article"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "jsx-1186092066"
    }, article.descritpion), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "jsx-1186092066"
    }, article.content), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "jsx-1186092066"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/story"
    }, "Read More")));
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "1186092066",
    css: "section.jsx-1186092066{width:50% border:1px solid gray;background-color:rgb(240,248,255) padding:1em;margin:1em;}.author.jsx-1186092066{font-style:italic font-size:0.8em;}.img-article.jsx-1186092066{max-witdh:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEb3dubG9hZHNcXFdlYkFwcGxpY2F0aW9uXFxXZWJDQVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCa0IsQUFJaUMsQUFRTixBQUlELGVBQ2pCLGlCQVhjLEVBT2QsNENBTmEsV0FDYiIsImZpbGUiOiJEOlxcRG93bmxvYWRzXFxXZWJBcHBsaWNhdGlvblxcV2ViQ0FcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgaXMgdGhlIExpbmsgQVBJXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCcgXG5cbmNvbnN0IHNvdXJjZSA9ICcnO1xuXG5jb25zdCBhcGlrZXkgPSAnYjYzY2EyMjJjMDc0NGIxYjlhM2ZkNmQ2ZTQzOTJkNTknXG4vL0luY2x1ZGUgYW55IG5ld3MgYXBpIGZyb20gdGhlIGxpbmtcbmNvbnN0IHVybCA9ICdodHRwczovL25ld3NhcGkub3JnL3YyL3RvcC1oZWFkbGluZXM/c291cmNlcz10aW1lJmFwaUtleT1iNjNjYTIyMmMwNzQ0YjFiOWEzZmQ2ZDZlNDM5MmQ1OSdcblxuLy8gUGFzcyB0aGlzIGNvbnRlbnQgYXMgJ3Byb3BzJyB0byBjaGlsZCBjb21wb25lbnRzXG5jb25zdCBJbmRleCA9IHByb3BzID0+IChcbiAgPGRpdj5cbiAgICAgIDxoMj5HZW5lcmFsIHtzb3VyY2Uuc3BsaXQoXCItXCIpLmpvaW4oXCIgXCIpfTwvaDI+XG4gICAgICA8ZGl2PlxuICAgICAgICB7cHJvcHMuYXJ0aWNsZXMubWFwKGFydGljbGUgPT4gKFxuICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPGgzPnthcnRpY2xlLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhdXRob3JcIj57YXJ0aWNsZS5hdXRob3J9IHthcnRpY2xlLnB1Ymxpc2hlZEF0fTwvcD5cbiAgICAgICAgICAgIDxpbWcgc3JjPXthcnRpY2xlLnVybFRvSW1hZ2V9IGFsdD1cImFydGljbGUgaW1hZ2VcIiBjbGFzc05hbWU9XCJpbWctYXJ0aWNsZVwiPjwvaW1nPlxuICAgICAgICAgICAgPHA+e2FydGljbGUuZGVzY3JpdHBpb259PC9wPlxuICAgICAgICAgICAgPHA+e2FydGljbGUuY29udGVudH08L3A+XG4gICAgICAgICAgICA8cD48TGluayBocmVmPVwiL3N0b3J5XCI+UmVhZCBNb3JlPC9MaW5rPjwvcD5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgd2lkdGg6IDUwJVxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQ4LCAyNTUpXG4gICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgIG1hcmdpbjogMWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGhvciB7XG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljXG4gICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWctYXJ0aWNsZSB7XG4gICAgICAgICAgbWF4LXdpdGRoOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbi8vIHNlZSBodHRwczovL25leHRqcy5vcmcvbGVhcm4vYmFzaWNzL2ZldGNoaW5nLWRhdGEtZm9yLXBhZ2VzXG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmFydGljbGVzLmxlbmd0aH1gKTtcblxuICByZXR1cm4ge1xuICAgIGFydGljbGVzOiBkYXRhLmFydGljbGVzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXX0= */\n/*@ sourceURL=D:\\Downloads\\WebApplication\\WebCA\\pages\\index.js */"
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
//# sourceMappingURL=index.js.c4ceb2424b4256b557df.hot-update.js.map