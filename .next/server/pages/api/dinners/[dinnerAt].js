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
exports.id = "pages/api/dinners/[dinnerAt]";
exports.ids = ["pages/api/dinners/[dinnerAt]"];
exports.modules = {

/***/ "./pages/api/dinners/[dinnerAt].js":
/*!*****************************************!*\
  !*** ./pages/api/dinners/[dinnerAt].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ endpoint)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n\nasync function deleteDinner(req, res) {\n  const dinnerId = req.query.dinnerId;\n  await prisma.dinner.delete({\n    where: {\n      id: dinnerId\n    }\n  });\n  res.status(204);\n}\n\nasync function endpoint(req, res) {\n  debugger;\n\n  if (req.method === 'DELETE') {\n    await deleteDinner(req, res);\n  } else {\n    res.status(404);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZGlubmVycy9bZGlubmVyQXRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFKLEVBQWY7O0FBRUEsZUFBZUUsWUFBZixDQUE0QkMsR0FBNUIsRUFBaUNDLEdBQWpDLEVBQXNDO0FBQ3BDLFFBQU1DLFFBQVEsR0FBR0YsR0FBRyxDQUFDRyxLQUFKLENBQVVELFFBQTNCO0FBQ0EsUUFBTUosTUFBTSxDQUFDTSxNQUFQLENBQWNDLE1BQWQsQ0FBcUI7QUFBRUMsSUFBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEVBQUUsRUFBRUw7QUFBTjtBQUFULEdBQXJCLENBQU47QUFDQUQsRUFBQUEsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWDtBQUNEOztBQUVjLGVBQWVDLFFBQWYsQ0FBd0JULEdBQXhCLEVBQTZCQyxHQUE3QixFQUFrQztBQUMvQzs7QUFDQSxNQUFJRCxHQUFHLENBQUNVLE1BQUosS0FBZSxRQUFuQixFQUE2QjtBQUMzQixVQUFNWCxZQUFZLENBQUNDLEdBQUQsRUFBTUMsR0FBTixDQUFsQjtBQUNELEdBRkQsTUFFTztBQUNMQSxJQUFBQSxHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYO0FBQ0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9kaW5uZXJzL1tkaW5uZXJBdF0uanM/NDEzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmFzeW5jIGZ1bmN0aW9uIGRlbGV0ZURpbm5lcihyZXEsIHJlcykge1xuICBjb25zdCBkaW5uZXJJZCA9IHJlcS5xdWVyeS5kaW5uZXJJZDtcbiAgYXdhaXQgcHJpc21hLmRpbm5lci5kZWxldGUoeyB3aGVyZTogeyBpZDogZGlubmVySWQgfSB9KTtcbiAgcmVzLnN0YXR1cygyMDQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBlbmRwb2ludChyZXEsIHJlcykge1xuICBkZWJ1Z2dlcjtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdERUxFVEUnKSB7XG4gICAgYXdhaXQgZGVsZXRlRGlubmVyKHJlcSwgcmVzKTtcbiAgfSBlbHNlIHtcbiAgICByZXMuc3RhdHVzKDQwNCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJkZWxldGVEaW5uZXIiLCJyZXEiLCJyZXMiLCJkaW5uZXJJZCIsInF1ZXJ5IiwiZGlubmVyIiwiZGVsZXRlIiwid2hlcmUiLCJpZCIsInN0YXR1cyIsImVuZHBvaW50IiwibWV0aG9kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/dinners/[dinnerAt].js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/dinners/[dinnerAt].js"));
module.exports = __webpack_exports__;

})();