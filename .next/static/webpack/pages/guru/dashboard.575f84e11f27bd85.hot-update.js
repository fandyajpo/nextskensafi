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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_fanvercel_Documents_React_FIX_NextSkensajsFIX_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_fanvercel_Documents_React_FIX_NextSkensajsFIX_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_fanvercel_Documents_React_FIX_NextSkensajsFIX_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_layout_guru__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/layout/guru */ \"./components/layout/guru.js\");\n/* harmony import */ var _react_pdf_viewer_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-pdf-viewer/core */ \"./node_modules/@react-pdf-viewer/core/lib/index.js\");\n/* harmony import */ var _react_pdf_viewer_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_react_pdf_viewer_core__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _react_pdf_viewer_default_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-pdf-viewer/default-layout */ \"./node_modules/@react-pdf-viewer/default-layout/lib/index.js\");\n/* harmony import */ var _react_pdf_viewer_default_layout__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_react_pdf_viewer_default_layout__WEBPACK_IMPORTED_MODULE_5__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Dashboard = function(props) {\n    _s();\n    var defaultLayoutPluginInstance = (0,_react_pdf_viewer_default_layout__WEBPACK_IMPORTED_MODULE_5__.defaultLayoutPlugin)();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState(\".pdf\"), 2), state = ref[0], setState = ref[1];\n    var onDocumentLoad = function() {\n        var _ref = _asyncToGenerator(_home_fanvercel_Documents_React_FIX_NextSkensajsFIX_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            return _home_fanvercel_Documents_React_FIX_NextSkensajsFIX_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        return _ctx.abrupt(\"return\", Promise.resolve(setState(e)));\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onDocumentLoad(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function() {}, [\n        onDocumentLoad,\n        state\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen overflow-y-scroll\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"w-full h-auto relative px-4 pt-4 flex flex-col md:flex-row gap-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_react_pdf_viewer_core__WEBPACK_IMPORTED_MODULE_4__.Worker, {\n                workerUrl: \"https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_react_pdf_viewer_core__WEBPACK_IMPORTED_MODULE_4__.Viewer, {\n                    onDocumentLoad: onDocumentLoad(\"http://localhost/pdf/da.pdf\"),\n                    fileUrl: state,\n                    plugins: [\n                        defaultLayoutPluginInstance\n                    ]\n                }, void 0, false, {\n                    fileName: \"/home/fanvercel/Documents/React/FIX/NextSkensajsFIX/pages/guru/dashboard.js\",\n                    lineNumber: 18,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/fanvercel/Documents/React/FIX/NextSkensajsFIX/pages/guru/dashboard.js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/fanvercel/Documents/React/FIX/NextSkensajsFIX/pages/guru/dashboard.js\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/fanvercel/Documents/React/FIX/NextSkensajsFIX/pages/guru/dashboard.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, _this);\n};\n_s(Dashboard, \"5SQ1s41pHi947xjhj+fOgBGFeEk=\");\n_c = Dashboard;\nDashboard.getLayout = components_layout_guru__WEBPACK_IMPORTED_MODULE_3__.getLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ndXJ1L2Rhc2hib2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ3lCO0FBRUs7QUFDZTs7QUFDdkUsSUFBTUssU0FBUyxHQUFHLFNBQUNDLEtBQUssRUFBSzs7SUFDM0IsSUFBTUMsMkJBQTJCLEdBQUdILHFGQUFtQixFQUFFO0lBQ3pELElBQTBCSixHQUFzQixrQkFBdEJBLHFEQUFjLENBQUMsTUFBTSxDQUFDLE1BQXpDUyxLQUFLLEdBQWNULEdBQXNCLEdBQXBDLEVBQUVVLFFBQVEsR0FBSVYsR0FBc0IsR0FBMUI7SUFFdEIsSUFBTVcsY0FBYzttQkFBRyxrTUFBT0MsQ0FBQzs7OztxREFBS0MsT0FBTyxDQUFDQyxPQUFPLENBQUNKLFFBQVEsQ0FBQ0UsQ0FBQyxDQUFDLENBQUM7Ozs7OztTQUFBO3dCQUExREQsY0FBYyxDQUFVQyxDQUFDOzs7T0FBaUM7SUFFaEVaLHNEQUFlLENBQUMsV0FBTSxFQUFFLEVBQUU7UUFBQ1csY0FBYztRQUFFRixLQUFLO0tBQUMsQ0FBQyxDQUFDO0lBRW5ELHFCQUNFLDhEQUFDTyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxtQ0FBbUM7a0JBQ2hELDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQyxrRUFBa0U7c0JBQy9FLDRFQUFDZCwwREFBTTtnQkFBQ2UsU0FBUyxFQUFDLCtEQUErRDswQkFDL0UsNEVBQUNoQiwwREFBTTtvQkFDTFMsY0FBYyxFQUFFQSxjQUFjLENBQUMsNkJBQTZCLENBQUM7b0JBQzdEUSxPQUFPLEVBQUVWLEtBQUs7b0JBQ2RXLE9BQU8sRUFBRTt3QkFBQ2IsMkJBQTJCO3FCQUFDOzs7Ozt5QkFDdEM7Ozs7O3FCQUNLOzs7OztpQkFDTDs7Ozs7YUFDRixDQUNOO0NBQ0g7R0FyQktGLFNBQVM7QUFBVEEsS0FBQUEsU0FBUztBQXVCZkEsU0FBUyxDQUFDSixTQUFTLEdBQUdBLDZEQUFTLENBQUM7QUFDaEMsK0RBQWVJLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ndXJ1L2Rhc2hib2FyZC5qcz9hNDYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldExheW91dCB9IGZyb20gXCJjb21wb25lbnRzL2xheW91dC9ndXJ1XCI7XG5cbmltcG9ydCB7IFZpZXdlciwgV29ya2VyIH0gZnJvbSBcIkByZWFjdC1wZGYtdmlld2VyL2NvcmVcIjtcbmltcG9ydCB7IGRlZmF1bHRMYXlvdXRQbHVnaW4gfSBmcm9tIFwiQHJlYWN0LXBkZi12aWV3ZXIvZGVmYXVsdC1sYXlvdXRcIjtcbmNvbnN0IERhc2hib2FyZCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBkZWZhdWx0TGF5b3V0UGx1Z2luSW5zdGFuY2UgPSBkZWZhdWx0TGF5b3V0UGx1Z2luKCk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoXCIucGRmXCIpO1xuXG4gIGNvbnN0IG9uRG9jdW1lbnRMb2FkID0gYXN5bmMgKGUpID0+IFByb21pc2UucmVzb2x2ZShzZXRTdGF0ZShlKSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHt9LCBbb25Eb2N1bWVudExvYWQsIHN0YXRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLXNjcmVlbiBvdmVyZmxvdy15LXNjcm9sbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIHJlbGF0aXZlIHB4LTQgcHQtNCBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGdhcC00XCI+XG4gICAgICAgIDxXb3JrZXIgd29ya2VyVXJsPVwiaHR0cHM6Ly91bnBrZy5jb20vcGRmanMtZGlzdEAyLjE1LjM0OS9idWlsZC9wZGYud29ya2VyLm1pbi5qc1wiPlxuICAgICAgICAgIDxWaWV3ZXJcbiAgICAgICAgICAgIG9uRG9jdW1lbnRMb2FkPXtvbkRvY3VtZW50TG9hZChcImh0dHA6Ly9sb2NhbGhvc3QvcGRmL2RhLnBkZlwiKX1cbiAgICAgICAgICAgIGZpbGVVcmw9e3N0YXRlfVxuICAgICAgICAgICAgcGx1Z2lucz17W2RlZmF1bHRMYXlvdXRQbHVnaW5JbnN0YW5jZV19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Xb3JrZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkRhc2hib2FyZC5nZXRMYXlvdXQgPSBnZXRMYXlvdXQ7XG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJnZXRMYXlvdXQiLCJWaWV3ZXIiLCJXb3JrZXIiLCJkZWZhdWx0TGF5b3V0UGx1Z2luIiwiRGFzaGJvYXJkIiwicHJvcHMiLCJkZWZhdWx0TGF5b3V0UGx1Z2luSW5zdGFuY2UiLCJ1c2VTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJvbkRvY3VtZW50TG9hZCIsImUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInVzZUVmZmVjdCIsImRpdiIsImNsYXNzTmFtZSIsIndvcmtlclVybCIsImZpbGVVcmwiLCJwbHVnaW5zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/guru/dashboard.js\n");

/***/ })

});