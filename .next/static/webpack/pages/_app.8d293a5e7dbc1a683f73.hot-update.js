/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Header/Header.jsx":
/*!******************************************!*\
  !*** ./src/components/Header/Header.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NavMenu_NavMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NavMenu/NavMenu */ \"./src/components/NavMenu/NavMenu.jsx\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Header.module.scss */ \"./src/components/Header/Header.module.scss\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_logo512_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/logo512.png */ \"./public/logo512.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/andrescalleuribe/Dev-in-med/kutai-web/src/components/Header/Header.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Header = () => {\n  _s();\n\n  const {\n    0: toggleMenu,\n    1: setToggleMenu\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n\n  const openMenu = () => {\n    const menuMobile = document.getElementById(\"menu-mobile\");\n\n    if (!toggleMenu) {\n      menuMobile.classList.remove(\"closeMenuAnimation\");\n      menuMobile.classList.add(\"openMenuAnimation\");\n    } else {\n      menuMobile.classList.remove(\"openMenuAnimation\");\n      menuMobile.classList.add(\"closeMenuAnimation\");\n    }\n\n    setToggleMenu(!toggleMenu);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n    className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_6___default().header),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_6___default().headerTop),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: \"EN\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n          src: _public_logo512_png__WEBPACK_IMPORTED_MODULE_4__.default,\n          placeholder: \"blur\",\n          alt: \"logo kutai\",\n          href: \"/\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faBars\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavMenu_NavMenu__WEBPACK_IMPORTED_MODULE_2__.default, {\n          toggleMenu: () => openMenu()\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(Header, \"HEvlnhaQFfcU7gBP1dNyCrrd2Zo=\");\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qc3g/NWUxNyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ0b2dnbGVNZW51Iiwic2V0VG9nZ2xlTWVudSIsInVzZVN0YXRlIiwib3Blbk1lbnUiLCJtZW51TW9iaWxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInMiLCJsb2dvIiwiZmFCYXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFBQTs7QUFDbkIsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCQywrQ0FBUSxDQUFDLEtBQUQsQ0FBNUM7O0FBRUEsUUFBTUMsUUFBUSxHQUFHLE1BQU07QUFDckIsVUFBTUMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBbkI7O0FBQ0EsUUFBSSxDQUFDTixVQUFMLEVBQWlCO0FBQ2ZJLGdCQUFVLENBQUNHLFNBQVgsQ0FBcUJDLE1BQXJCLENBQTRCLG9CQUE1QjtBQUNBSixnQkFBVSxDQUFDRyxTQUFYLENBQXFCRSxHQUFyQixDQUF5QixtQkFBekI7QUFDRCxLQUhELE1BR087QUFDTEwsZ0JBQVUsQ0FBQ0csU0FBWCxDQUFxQkMsTUFBckIsQ0FBNEIsbUJBQTVCO0FBQ0FKLGdCQUFVLENBQUNHLFNBQVgsQ0FBcUJFLEdBQXJCLENBQXlCLG9CQUF6QjtBQUNEOztBQUNEUixpQkFBYSxDQUFDLENBQUNELFVBQUYsQ0FBYjtBQUNELEdBVkQ7O0FBV0Esc0JBQ0U7QUFBUSxhQUFTLEVBQUVVLG1FQUFuQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFQSxzRUFBaEI7QUFBQSw4QkFDRTtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUlFO0FBQUEsK0JBQ0UsOERBQUMsbURBQUQ7QUFBTyxhQUFHLEVBQUVDLHdEQUFaO0FBQWtCLHFCQUFXLEVBQUMsTUFBOUI7QUFBcUMsYUFBRyxFQUFDLFlBQXpDO0FBQXNELGNBQUksRUFBQztBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixlQU9FO0FBQUEsZ0NBQ0UsOERBQUMsMkVBQUQ7QUFBaUIsY0FBSSxFQUFFQyxxRUFBTUE7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLDhEQUFDLHFEQUFEO0FBQVMsb0JBQVUsRUFBRSxNQUFNVCxRQUFRO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWdCRCxDQTlCRDs7R0FBTUosTTs7S0FBQUEsTTtBQWdDTiwrREFBZUEsTUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2TWVudSBmcm9tIFwiLi4vTmF2TWVudS9OYXZNZW51XCI7XG5pbXBvcnQgeyBmYUJhcnMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgcyBmcm9tIFwiLi9IZWFkZXIubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBsb2dvIGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvbG9nbzUxMi5wbmdcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFt0b2dnbGVNZW51LCBzZXRUb2dnbGVNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvcGVuTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBtZW51TW9iaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LW1vYmlsZVwiKTtcbiAgICBpZiAoIXRvZ2dsZU1lbnUpIHtcbiAgICAgIG1lbnVNb2JpbGUuY2xhc3NMaXN0LnJlbW92ZShcImNsb3NlTWVudUFuaW1hdGlvblwiKTtcbiAgICAgIG1lbnVNb2JpbGUuY2xhc3NMaXN0LmFkZChcIm9wZW5NZW51QW5pbWF0aW9uXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZW51TW9iaWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuTWVudUFuaW1hdGlvblwiKTtcbiAgICAgIG1lbnVNb2JpbGUuY2xhc3NMaXN0LmFkZChcImNsb3NlTWVudUFuaW1hdGlvblwiKTtcbiAgICB9XG4gICAgc2V0VG9nZ2xlTWVudSghdG9nZ2xlTWVudSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e3MuaGVhZGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmhlYWRlclRvcH0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+RU48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxJbWFnZSBzcmM9e2xvZ299IHBsYWNlaG9sZGVyPVwiYmx1clwiIGFsdD1cImxvZ28ga3V0YWlcIiBocmVmPVwiL1wiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUJhcnN9IC8+XG4gICAgICAgICAgPE5hdk1lbnUgdG9nZ2xlTWVudT17KCkgPT4gb3Blbk1lbnUoKX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header/Header.jsx\n");

/***/ })

});