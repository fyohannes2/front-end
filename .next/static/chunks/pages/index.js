/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Ffilmon%2FDesktop%2Fcms%2Fclient%2Fpages%2Findex.js&page=%2F!":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Ffilmon%2FDesktop%2Fcms%2Fclient%2Fpages%2Findex.js&page=%2F! ***!
  \***************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.js */ \"./pages/index.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRmZpbG1vbiUyRkRlc2t0b3AlMkZjbXMlMkZjbGllbnQlMkZwYWdlcyUyRmluZGV4LmpzJnBhZ2U9JTJGIS5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDBDQUFrQjtBQUN6QztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/MGRkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vcGFnZXMvaW5kZXguanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiL1wiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Ffilmon%2FDesktop%2Fcms%2Fclient%2Fpages%2Findex.js&page=%2F!\n");

/***/ }),

/***/ "./components/ToggleTheme.js":
/*!***********************************!*\
  !*** ./components/ToggleTheme.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/theme */ \"./context/theme.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n//access theme context with React hook.\n\n\n //component that imports css link into Head from next.js.\nvar _s = $RefreshSig$();\n//add functionality to ToggleTheme...\n//no need to import React, Next.js does by default.\nvar ToggleTheme = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_theme__WEBPACK_IMPORTED_MODULE_2__.ThemeContext), theme = ref[0], setTheme = ref[1]; //global context state initialized.\n    //wrap elements with React fragments.  \n    //seperate css files needed for light and dark themes.\n    //conditional (ternary) operator: if expression's condition to execute is equal truthy then show ?(), ( : ), if the condition is falsy then  show ().\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"stylesheet\",\n                    href: \"/css/\".concat(theme, \".css\")\n                }, void 0, false, {\n                    fileName: \"/Users/filmon/Desktop/cms/client/components/ToggleTheme.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/filmon/Desktop/cms/client/components/ToggleTheme.js\",\n                lineNumber: 15,\n                columnNumber: 5\n            }, _this),\n            theme === \"light\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                onClick: function() {\n                    setTheme(\"dark\");\n                    localStorage.setItem(\"theme\", \"dark\");\n                },\n                style: {\n                    fontSize: \"24px\"\n                },\n                children: \"\\uD83C\\uDF17\"\n            }, void 0, false, {\n                fileName: \"/Users/filmon/Desktop/cms/client/components/ToggleTheme.js\",\n                lineNumber: 19,\n                columnNumber: 11\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                onClick: function() {\n                    setTheme(\"light\");\n                    localStorage.setItem(\"theme\", \"light\");\n                },\n                style: {\n                    fontSize: \"24px\"\n                },\n                children: \"\\uD83C\\uDF1E\"\n            }, void 0, false, {\n                fileName: \"/Users/filmon/Desktop/cms/client/components/ToggleTheme.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(ToggleTheme, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n_c = ToggleTheme;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToggleTheme);\nvar _c;\n$RefreshReg$(_c, \"ToggleTheme\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvZ2dsZVRoZW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7O0FBREEsdUNBQXVDO0FBQ0o7QUFDYTtBQUNuQixDQUFDLHlEQUF5RDs7QUFDdkYscUNBQXFDO0FBQ3JDLG1EQUFtRDtBQUNuRCxJQUFNRyxXQUFXLEdBQUcsV0FBTTs7SUFDeEIsSUFBMEJILEdBQXdCLEdBQXhCQSxpREFBVSxDQUFDQyx3REFBWSxDQUFDLEVBUHBELEtBT2MsR0FBY0QsR0FBd0IsR0FBdEMsRUFQZCxRQU93QixHQUFJQSxHQUF3QixHQUE1QixFQUE4QixtQ0FBbUM7SUFFekYsdUNBQXVDO0lBQ3ZDLHNEQUFzRDtJQUN0RCxxSkFBcUo7SUFDakoscUJBQ0E7OzBCQUNBLDhEQUFDRSxrREFBSTswQkFDRCw0RUFBQ0ksTUFBSTtvQkFBQ0MsR0FBRyxFQUFFLFlBQVk7b0JBQUNDLElBQUksRUFBRyxPQUFNLENBQVEsTUFBSSxDQUFWSixLQUFLLEVBQUMsTUFBSSxDQUFDOzs7Ozt5QkFBSTs7Ozs7cUJBQ25EO1lBQ0ZBLEtBQUssS0FBSyxPQUFPLGlCQUNoQiw4REFBQ0ssTUFBSTtnQkFDSEMsT0FBTyxFQUFFLFdBQU07b0JBQ1hMLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDakJNLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztpQkFDekM7Z0JBQ0hDLEtBQUssRUFBRztvQkFBRUMsUUFBUSxFQUFFLE1BQU07aUJBQUU7MEJBQzNCLGNBRUQ7Ozs7O3FCQUFPLGlCQUVMLDhEQUFDTCxNQUFJO2dCQUNMQyxPQUFPLEVBQUUsV0FBTTtvQkFDWEwsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNsQk0sWUFBWSxDQUFDQyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2lCQUMxQztnQkFDSEMsS0FBSyxFQUFFO29CQUFFQyxRQUFRLEVBQUUsTUFBTTtpQkFBRTswQkFDMUIsY0FFRDs7Ozs7cUJBQU87O29CQUVWLENBQ0g7Q0FFSDtHQW5DS1gsV0FBVztBQUFYQSxLQUFBQSxXQUFXO0FBcUNqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9nZ2xlVGhlbWUuanM/MzQ1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2FjY2VzcyB0aGVtZSBjb250ZXh0IHdpdGggUmVhY3QgaG9vay5cbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRoZW1lQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L3RoZW1lXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7IC8vY29tcG9uZW50IHRoYXQgaW1wb3J0cyBjc3MgbGluayBpbnRvIEhlYWQgZnJvbSBuZXh0LmpzLlxuLy9hZGQgZnVuY3Rpb25hbGl0eSB0byBUb2dnbGVUaGVtZS4uLlxuLy9ubyBuZWVkIHRvIGltcG9ydCBSZWFjdCwgTmV4dC5qcyBkb2VzIGJ5IGRlZmF1bHQuXG5jb25zdCBUb2dnbGVUaGVtZSA9ICgpID0+IHtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7IC8vZ2xvYmFsIGNvbnRleHQgc3RhdGUgaW5pdGlhbGl6ZWQuXG4gIFxuLy93cmFwIGVsZW1lbnRzIHdpdGggUmVhY3QgZnJhZ21lbnRzLiAgXG4vL3NlcGVyYXRlIGNzcyBmaWxlcyBuZWVkZWQgZm9yIGxpZ2h0IGFuZCBkYXJrIHRoZW1lcy5cbi8vY29uZGl0aW9uYWwgKHRlcm5hcnkpIG9wZXJhdG9yOiBpZiBleHByZXNzaW9uJ3MgY29uZGl0aW9uIHRvIGV4ZWN1dGUgaXMgZXF1YWwgdHJ1dGh5IHRoZW4gc2hvdyA/KCksICggOiApLCBpZiB0aGUgY29uZGl0aW9uIGlzIGZhbHN5IHRoZW4gIHNob3cgKCkuXG4gICAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9IFwic3R5bGVzaGVldFwiIGhyZWY9IHtgL2Nzcy8ke3RoZW1lfS5jc3NgfSAvPiBcbiAgICA8L0hlYWQ+XG4gICAgICAgIHt0aGVtZSA9PT0gXCJsaWdodFwiID8gKFxuICAgICAgICAgIDxzcGFuIFxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRoZW1lKFwiZGFya1wiKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwiZGFya1wiKTtcbiAgICAgICAgICAgIH19ICAgIFxuICAgICAgICAgIHN0eWxlPSB7eyBmb250U2l6ZTogXCIyNHB4XCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDwn4yXXG4gICAgICAgICAgPC9zcGFuPiBcbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGhlbWUoXCJsaWdodFwiKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwibGlnaHRcIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjI0cHhcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICDwn4yeXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApfSAgICAgXG4gICAgPC8+ICAgIFxuICApO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2dnbGVUaGVtZTsiXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIlRoZW1lQ29udGV4dCIsIkhlYWQiLCJUb2dnbGVUaGVtZSIsInRoZW1lIiwic2V0VGhlbWUiLCJsaW5rIiwicmVsIiwiaHJlZiIsInNwYW4iLCJvbkNsaWNrIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInN0eWxlIiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ToggleTheme.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ToggleTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ToggleTheme */ \"./components/ToggleTheme.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n//destruction with curly braces because many components coming in exported from one file.\n\n//using state to store values\nfunction Home() {\n    //context hook to create global state  \n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Home\"\n            }, void 0, false, {\n                fileName: \"/Users/filmon/Desktop/cms/client/pages/index.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                type: \"primary\",\n                children: \"Click me\"\n            }, void 0, false, {\n                fileName: \"/Users/filmon/Desktop/cms/client/pages/index.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/filmon/Desktop/cms/client/pages/index.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ToggleTheme__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/filmon/Desktop/cms/client/pages/index.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/filmon/Desktop/cms/client/pages/index.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this);\n}\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQW9EO0FBQ3BELHlGQUF5RjtBQUMzRDtBQUU5Qiw2QkFBNkI7QUFDN0IsU0FBU0UsSUFBSSxHQUFJO0lBQ2hCLHVDQUF1QztJQUNwQyxxQkFDSSw4REFBQ0MsS0FBRzs7MEJBQ0EsOERBQUNDLElBQUU7MEJBQUMsTUFBSTs7Ozs7b0JBQUs7MEJBQ2IsOERBQUNILHdDQUFNO2dCQUFDSSxJQUFJLEVBQUMsU0FBUzswQkFBQyxVQUFROzs7OztvQkFBUzswQkFDeEMsOERBQUNDLElBQUU7Ozs7b0JBQUc7MEJBQ04sOERBQUNOLCtEQUFXOzs7O29CQUFHOzs7Ozs7WUFDYixDQUNSO0NBQ0w7QUFWUUUsS0FBQUEsSUFBSTtBQVliLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9nZ2xlVGhlbWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9nZ2xlVGhlbWVcIjtcbi8vZGVzdHJ1Y3Rpb24gd2l0aCBjdXJseSBicmFjZXMgYmVjYXVzZSBtYW55IGNvbXBvbmVudHMgY29taW5nIGluIGV4cG9ydGVkIGZyb20gb25lIGZpbGUuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xuXG4vL3VzaW5nIHN0YXRlIHRvIHN0b3JlIHZhbHVlc1xuZnVuY3Rpb24gSG9tZSAoKSB7XG4gLy9jb250ZXh0IGhvb2sgdG8gY3JlYXRlIGdsb2JhbCBzdGF0ZSAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5Ib21lPC9oMT5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIj5DbGljayBtZTwvQnV0dG9uPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8VG9nZ2xlVGhlbWUgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG4iXSwibmFtZXMiOlsiVG9nZ2xlVGhlbWUiLCJCdXR0b24iLCJIb21lIiwiZGl2IiwiaDEiLCJ0eXBlIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ \"./node_modules/next/dist/shared/lib/head.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLGlIQUFrRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzPzg4NDkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9oZWFkJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/head.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Ffilmon%2FDesktop%2Fcms%2Fclient%2Fpages%2Findex.js&page=%2F!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);