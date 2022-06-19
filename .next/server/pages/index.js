"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/ToggleTheme.js":
/*!***********************************!*\
  !*** ./components/ToggleTheme.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/theme */ \"./context/theme.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\n//access theme context with React hook.\n\n\n //component that imports css link into Head from next.js.\n//add functionality to ToggleTheme...\n//no need to import React, Next.js does by default.\nconst ToggleTheme = ()=>{\n    const { 0: theme , 1: setTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_theme__WEBPACK_IMPORTED_MODULE_2__.ThemeContext); //global context state initialized.\n    //wrap elements with React fragments.  \n    //seperate css files needed for light and dark themes.\n    //conditional (ternary) operator: if expression's condition to execute is equal truthy then show ?(), ( : ), if the condition is falsy then  show ().\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"stylesheet\",\n                    href: `/css/${theme}.css`\n                }, void 0, false, {\n                    fileName: \"/Users/filmon/Desktop/cms/client/components/ToggleTheme.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/filmon/Desktop/cms/client/components/ToggleTheme.js\",\n                lineNumber: 15,\n                columnNumber: 5\n            }, undefined),\n            theme === \"light\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                onClick: ()=>{\n                    setTheme(\"dark\");\n                    localStorage.setItem(\"theme\", \"dark\");\n                },\n                style: {\n                    fontSize: \"24px\"\n                },\n                children: \"\\uD83C\\uDF17\"\n            }, void 0, false, {\n                fileName: \"/Users/filmon/Desktop/cms/client/components/ToggleTheme.js\",\n                lineNumber: 19,\n                columnNumber: 11\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                onClick: ()=>{\n                    setTheme(\"light\");\n                    localStorage.setItem(\"theme\", \"light\");\n                },\n                style: {\n                    fontSize: \"24px\"\n                },\n                children: \"\\uD83C\\uDF1E\"\n            }, void 0, false, {\n                fileName: \"/Users/filmon/Desktop/cms/client/components/ToggleTheme.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleTheme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvZ2dsZVRoZW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7QUFEQSx1Q0FBdUM7QUFDSjtBQUNhO0FBQ25CLENBQUMseURBQXlEO0FBQ3ZGLHFDQUFxQztBQUNyQyxtREFBbUQ7QUFDbkQsTUFBTUcsV0FBVyxHQUFHLElBQU07SUFDeEIsTUFBTSxFQVBSLEdBT1NDLEtBQUssR0FQZCxHQU9nQkMsUUFBUSxNQUFJTCxpREFBVSxDQUFDQyx3REFBWSxDQUFDLEVBQUUsbUNBQW1DO0lBRXpGLHVDQUF1QztJQUN2QyxzREFBc0Q7SUFDdEQscUpBQXFKO0lBQ2pKLHFCQUNBOzswQkFDQSw4REFBQ0Msa0RBQUk7MEJBQ0QsNEVBQUNJLE1BQUk7b0JBQUNDLEdBQUcsRUFBRSxZQUFZO29CQUFDQyxJQUFJLEVBQUcsQ0FBQyxLQUFLLEVBQUVKLEtBQUssQ0FBQyxJQUFJLENBQUM7Ozs7OzZCQUFJOzs7Ozt5QkFDbkQ7WUFDRkEsS0FBSyxLQUFLLE9BQU8saUJBQ2hCLDhEQUFDSyxNQUFJO2dCQUNIQyxPQUFPLEVBQUUsSUFBTTtvQkFDWEwsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNqQk0sWUFBWSxDQUFDQyxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2lCQUN6QztnQkFDSEMsS0FBSyxFQUFHO29CQUFFQyxRQUFRLEVBQUUsTUFBTTtpQkFBRTswQkFDM0IsY0FFRDs7Ozs7eUJBQU8saUJBRUwsOERBQUNMLE1BQUk7Z0JBQ0xDLE9BQU8sRUFBRSxJQUFNO29CQUNYTCxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2xCTSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7aUJBQzFDO2dCQUNIQyxLQUFLLEVBQUU7b0JBQUVDLFFBQVEsRUFBRSxNQUFNO2lCQUFFOzBCQUMxQixjQUVEOzs7Ozt5QkFBTzs7b0JBRVYsQ0FDSDtDQUVIO0FBRUQsaUVBQWVYLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvVG9nZ2xlVGhlbWUuanM/MzQ1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2FjY2VzcyB0aGVtZSBjb250ZXh0IHdpdGggUmVhY3QgaG9vay5cbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRoZW1lQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L3RoZW1lXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7IC8vY29tcG9uZW50IHRoYXQgaW1wb3J0cyBjc3MgbGluayBpbnRvIEhlYWQgZnJvbSBuZXh0LmpzLlxuLy9hZGQgZnVuY3Rpb25hbGl0eSB0byBUb2dnbGVUaGVtZS4uLlxuLy9ubyBuZWVkIHRvIGltcG9ydCBSZWFjdCwgTmV4dC5qcyBkb2VzIGJ5IGRlZmF1bHQuXG5jb25zdCBUb2dnbGVUaGVtZSA9ICgpID0+IHtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7IC8vZ2xvYmFsIGNvbnRleHQgc3RhdGUgaW5pdGlhbGl6ZWQuXG4gIFxuLy93cmFwIGVsZW1lbnRzIHdpdGggUmVhY3QgZnJhZ21lbnRzLiAgXG4vL3NlcGVyYXRlIGNzcyBmaWxlcyBuZWVkZWQgZm9yIGxpZ2h0IGFuZCBkYXJrIHRoZW1lcy5cbi8vY29uZGl0aW9uYWwgKHRlcm5hcnkpIG9wZXJhdG9yOiBpZiBleHByZXNzaW9uJ3MgY29uZGl0aW9uIHRvIGV4ZWN1dGUgaXMgZXF1YWwgdHJ1dGh5IHRoZW4gc2hvdyA/KCksICggOiApLCBpZiB0aGUgY29uZGl0aW9uIGlzIGZhbHN5IHRoZW4gIHNob3cgKCkuXG4gICAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9IFwic3R5bGVzaGVldFwiIGhyZWY9IHtgL2Nzcy8ke3RoZW1lfS5jc3NgfSAvPiBcbiAgICA8L0hlYWQ+XG4gICAgICAgIHt0aGVtZSA9PT0gXCJsaWdodFwiID8gKFxuICAgICAgICAgIDxzcGFuIFxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRoZW1lKFwiZGFya1wiKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwiZGFya1wiKTtcbiAgICAgICAgICAgIH19ICAgIFxuICAgICAgICAgIHN0eWxlPSB7eyBmb250U2l6ZTogXCIyNHB4XCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDwn4yXXG4gICAgICAgICAgPC9zcGFuPiBcbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGhlbWUoXCJsaWdodFwiKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwibGlnaHRcIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjI0cHhcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICDwn4yeXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApfSAgICAgXG4gICAgPC8+ICAgIFxuICApO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2dnbGVUaGVtZTsiXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIlRoZW1lQ29udGV4dCIsIkhlYWQiLCJUb2dnbGVUaGVtZSIsInRoZW1lIiwic2V0VGhlbWUiLCJsaW5rIiwicmVsIiwiaHJlZiIsInNwYW4iLCJvbkNsaWNrIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInN0eWxlIiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ToggleTheme.js\n");

/***/ }),

/***/ "./context/theme.js":
/*!**************************!*\
  !*** ./context/theme.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThemeContext\": () => (/* binding */ ThemeContext),\n/* harmony export */   \"ThemeProvider\": () => (/* binding */ ThemeProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst ThemeProvider = ({ children  })=>{\n    const { 0: theme , 1: setTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"light\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (localStorage.getItem(\"theme\")) {\n            setTheme(localStorage.getItem(\"theme\"));\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: [\n            theme,\n            setTheme\n        ],\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/filmon/Desktop/cms/client/context/theme.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3RoZW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBO0FBQTJEO0FBRTNELE1BQU1HLFlBQVksaUJBQUdELG9EQUFhLEVBQUU7QUFFcEMsTUFBTUUsYUFBYSxHQUFHLENBQUMsRUFBRUMsUUFBUSxHQUFFLEdBQUs7SUFDdEMsTUFBTSxFQVBSLEdBT1NDLEtBQUssR0FQZCxHQU9nQkMsUUFBUSxNQUFJTiwrQ0FBUSxDQUFDLE9BQU8sQ0FBQztJQUUzQ0QsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsSUFBSVEsWUFBWSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDakNGLFFBQVEsQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUN6QztLQUNGLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRSw4REFBQ04sWUFBWSxDQUFDTyxRQUFRO1FBQUNDLEtBQUssRUFBRTtZQUFDTCxLQUFLO1lBQUVDLFFBQVE7U0FBQztrQkFDNUNGLFFBQVE7Ozs7O2lCQUNhLENBQ3hCO0NBQ0g7QUFFc0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb250ZXh0L3RoZW1lLmpzPzk1ZDAiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgVGhlbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBUaGVtZVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKFwibGlnaHRcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSkge1xuICAgICAgc2V0VGhlbWUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbdGhlbWUsIHNldFRoZW1lXX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgeyBUaGVtZUNvbnRleHQsIFRoZW1lUHJvdmlkZXIgfTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJUaGVtZUNvbnRleHQiLCJUaGVtZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ0aGVtZSIsInNldFRoZW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/theme.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ToggleTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ToggleTheme */ \"./components/ToggleTheme.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n\n\n//destruction with curly braces because many components coming in exported from one file.\n\n//using state to store values\nfunction Home() {\n    //context hook to create global state  \n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Home\"\n            }, void 0, false, {\n                fileName: \"/Users/filmon/Desktop/cms/client/pages/index.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                type: \"primary\",\n                children: \"Click me\"\n            }, void 0, false, {\n                fileName: \"/Users/filmon/Desktop/cms/client/pages/index.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/filmon/Desktop/cms/client/pages/index.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ToggleTheme__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/filmon/Desktop/cms/client/pages/index.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/filmon/Desktop/cms/client/pages/index.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFvRDtBQUNwRCx5RkFBeUY7QUFDM0Q7QUFFOUIsNkJBQTZCO0FBQzdCLFNBQVNFLElBQUksR0FBSTtJQUNoQix1Q0FBdUM7SUFDcEMscUJBQ0ksOERBQUNDLEtBQUc7OzBCQUNBLDhEQUFDQyxJQUFFOzBCQUFDLE1BQUk7Ozs7O29CQUFLOzBCQUNiLDhEQUFDSCx3Q0FBTTtnQkFBQ0ksSUFBSSxFQUFDLFNBQVM7MEJBQUMsVUFBUTs7Ozs7b0JBQVM7MEJBQ3hDLDhEQUFDQyxJQUFFOzs7O29CQUFHOzBCQUNOLDhEQUFDTiwrREFBVzs7OztvQkFBRzs7Ozs7O1lBQ2IsQ0FDUjtDQUNMO0FBRUQsaUVBQWVFLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvZ2dsZVRoZW1lIGZyb20gXCIuLi9jb21wb25lbnRzL1RvZ2dsZVRoZW1lXCI7XG4vL2Rlc3RydWN0aW9uIHdpdGggY3VybHkgYnJhY2VzIGJlY2F1c2UgbWFueSBjb21wb25lbnRzIGNvbWluZyBpbiBleHBvcnRlZCBmcm9tIG9uZSBmaWxlLlxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcblxuLy91c2luZyBzdGF0ZSB0byBzdG9yZSB2YWx1ZXNcbmZ1bmN0aW9uIEhvbWUgKCkge1xuIC8vY29udGV4dCBob29rIHRvIGNyZWF0ZSBnbG9iYWwgc3RhdGUgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+SG9tZTwvaDE+XG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCI+Q2xpY2sgbWU8L0J1dHRvbj5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPFRvZ2dsZVRoZW1lIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cblxuIl0sIm5hbWVzIjpbIlRvZ2dsZVRoZW1lIiwiQnV0dG9uIiwiSG9tZSIsImRpdiIsImgxIiwidHlwZSIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();