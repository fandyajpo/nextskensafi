"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/guru/dashboard",{

/***/ "./pages/guru/dashboard.js":
/*!*********************************!*\
  !*** ./pages/guru/dashboard.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_layout_guru__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/layout/guru */ \"./components/layout/guru.js\");\n/* harmony import */ var _react_pdf_viewer_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-pdf-viewer/core */ \"./node_modules/@react-pdf-viewer/core/lib/index.js\");\n/* harmony import */ var _react_pdf_viewer_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_pdf_viewer_core__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _react_pdf_viewer_default_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-pdf-viewer/default-layout */ \"./node_modules/@react-pdf-viewer/default-layout/lib/index.js\");\n/* harmony import */ var _react_pdf_viewer_default_layout__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_react_pdf_viewer_default_layout__WEBPACK_IMPORTED_MODULE_4__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Dashboard = function(props) {\n    _s();\n    var defaultLayoutPluginInstance = (0,_react_pdf_viewer_default_layout__WEBPACK_IMPORTED_MODULE_4__.defaultLayoutPlugin)();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(\".pdf\"), 2), state = ref[0], setState = ref[1];\n    var onDocumentLoad = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(function(e) {\n        Promise.resolve(setState(e));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen overflow-y-scroll\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full h-auto relative px-4 pt-4 flex flex-col md:flex-row gap-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_pdf_viewer_core__WEBPACK_IMPORTED_MODULE_3__.Worker, {\n                workerUrl: \"https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_pdf_viewer_core__WEBPACK_IMPORTED_MODULE_3__.Viewer, {\n                    onDocumentLoad: onDocumentLoad(\"http://localhost/pdf/da.pdf\"),\n                    fileUrl: state,\n                    plugins: [\n                        defaultLayoutPluginInstance\n                    ]\n                }, void 0, false, {\n                    fileName: \"/home/fanvercel/Documents/React/FIX/NextSkensajsFIX/pages/guru/dashboard.js\",\n                    lineNumber: 18,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/fanvercel/Documents/React/FIX/NextSkensajsFIX/pages/guru/dashboard.js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/fanvercel/Documents/React/FIX/NextSkensajsFIX/pages/guru/dashboard.js\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/fanvercel/Documents/React/FIX/NextSkensajsFIX/pages/guru/dashboard.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, _this);\n};\n_s(Dashboard, \"DLSj1Kh/HRAzA1q997mGpeUT9WE=\");\n_c = Dashboard;\nDashboard.getLayout = components_layout_guru__WEBPACK_IMPORTED_MODULE_2__.getLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ndXJ1L2Rhc2hib2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUN5QjtBQUVLO0FBQ2U7O0FBQ3ZFLElBQU1LLFNBQVMsR0FBRyxTQUFDQyxLQUFLLEVBQUs7O0lBQzNCLElBQU1DLDJCQUEyQixHQUFHSCxxRkFBbUIsRUFBRTtJQUN6RCxJQUEwQkosR0FBc0Isa0JBQXRCQSxxREFBYyxDQUFDLE1BQU0sQ0FBQyxNQUF6Q1MsS0FBSyxHQUFjVCxHQUFzQixHQUFwQyxFQUFFVSxRQUFRLEdBQUlWLEdBQXNCLEdBQTFCO0lBRXRCLElBQU1XLGNBQWMsR0FBR1gsd0RBQWlCLENBQUMsU0FBQ2EsQ0FBQyxFQUFLO1FBQzlDQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0wsUUFBUSxDQUFDRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzlCLEVBQUUsRUFBRSxDQUFDO0lBRU4scUJBQ0UsOERBQUNHLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLG1DQUFtQztrQkFDaEQsNEVBQUNELEtBQUc7WUFBQ0MsU0FBUyxFQUFDLGtFQUFrRTtzQkFDL0UsNEVBQUNkLDBEQUFNO2dCQUFDZSxTQUFTLEVBQUMsK0RBQStEOzBCQUMvRSw0RUFBQ2hCLDBEQUFNO29CQUNMUyxjQUFjLEVBQUVBLGNBQWMsQ0FBQyw2QkFBNkIsQ0FBQztvQkFDN0RRLE9BQU8sRUFBRVYsS0FBSztvQkFDZFcsT0FBTyxFQUFFO3dCQUFDYiwyQkFBMkI7cUJBQUM7Ozs7O3lCQUN0Qzs7Ozs7cUJBQ0s7Ozs7O2lCQUNMOzs7OzthQUNGLENBQ047Q0FDSDtHQXJCS0YsU0FBUztBQUFUQSxLQUFBQSxTQUFTO0FBdUJmQSxTQUFTLENBQUNKLFNBQVMsR0FBR0EsNkRBQVMsQ0FBQztBQUNoQywrREFBZUksU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2d1cnUvZGFzaGJvYXJkLmpzP2E0NjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0TGF5b3V0IH0gZnJvbSBcImNvbXBvbmVudHMvbGF5b3V0L2d1cnVcIjtcblxuaW1wb3J0IHsgVmlld2VyLCBXb3JrZXIgfSBmcm9tIFwiQHJlYWN0LXBkZi12aWV3ZXIvY29yZVwiO1xuaW1wb3J0IHsgZGVmYXVsdExheW91dFBsdWdpbiB9IGZyb20gXCJAcmVhY3QtcGRmLXZpZXdlci9kZWZhdWx0LWxheW91dFwiO1xuY29uc3QgRGFzaGJvYXJkID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGRlZmF1bHRMYXlvdXRQbHVnaW5JbnN0YW5jZSA9IGRlZmF1bHRMYXlvdXRQbHVnaW4oKTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZShcIi5wZGZcIik7XG5cbiAgY29uc3Qgb25Eb2N1bWVudExvYWQgPSBSZWFjdC51c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgIFByb21pc2UucmVzb2x2ZShzZXRTdGF0ZShlKSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtc2NyZWVuIG92ZXJmbG93LXktc2Nyb2xsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gcmVsYXRpdmUgcHgtNCBwdC00IGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgZ2FwLTRcIj5cbiAgICAgICAgPFdvcmtlciB3b3JrZXJVcmw9XCJodHRwczovL3VucGtnLmNvbS9wZGZqcy1kaXN0QDIuMTUuMzQ5L2J1aWxkL3BkZi53b3JrZXIubWluLmpzXCI+XG4gICAgICAgICAgPFZpZXdlclxuICAgICAgICAgICAgb25Eb2N1bWVudExvYWQ9e29uRG9jdW1lbnRMb2FkKFwiaHR0cDovL2xvY2FsaG9zdC9wZGYvZGEucGRmXCIpfVxuICAgICAgICAgICAgZmlsZVVybD17c3RhdGV9XG4gICAgICAgICAgICBwbHVnaW5zPXtbZGVmYXVsdExheW91dFBsdWdpbkluc3RhbmNlXX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1dvcmtlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuRGFzaGJvYXJkLmdldExheW91dCA9IGdldExheW91dDtcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImdldExheW91dCIsIlZpZXdlciIsIldvcmtlciIsImRlZmF1bHRMYXlvdXRQbHVnaW4iLCJEYXNoYm9hcmQiLCJwcm9wcyIsImRlZmF1bHRMYXlvdXRQbHVnaW5JbnN0YW5jZSIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsIm9uRG9jdW1lbnRMb2FkIiwidXNlQ2FsbGJhY2siLCJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJkaXYiLCJjbGFzc05hbWUiLCJ3b3JrZXJVcmwiLCJmaWxlVXJsIiwicGx1Z2lucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/guru/dashboard.js\n");

/***/ })

});