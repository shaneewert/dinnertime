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
exports.id = "pages/api/dinners";
exports.ids = ["pages/api/dinners"];
exports.modules = {

/***/ "./pages/api/dinners/index.js":
/*!************************************!*\
  !*** ./pages/api/dinners/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ putDinnner)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function putDinnner(req, res) {\n  const {\n    recipe,\n    date\n  } = req.body;\n  const newDinner = await prisma.dinner.create({\n    data: {\n      recipeId: recipe.id,\n      dinnerAt: date\n    }\n  });\n  res.status(200).json(newDinner);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZGlubmVycy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCx3REFBSixFQUFmO0FBRWUsZUFBZUUsVUFBZixDQUEwQkMsR0FBMUIsRUFBK0JDLEdBQS9CLEVBQW9DO0FBQ2pELFFBQU07QUFBRUMsSUFBQUEsTUFBRjtBQUFVQyxJQUFBQTtBQUFWLE1BQW1CSCxHQUFHLENBQUNJLElBQTdCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHLE1BQU1QLE1BQU0sQ0FBQ1EsTUFBUCxDQUFjQyxNQUFkLENBQXFCO0FBQzNDQyxJQUFBQSxJQUFJLEVBQUU7QUFBRUMsTUFBQUEsUUFBUSxFQUFFUCxNQUFNLENBQUNRLEVBQW5CO0FBQXVCQyxNQUFBQSxRQUFRLEVBQUVSO0FBQWpDO0FBRHFDLEdBQXJCLENBQXhCO0FBSUFGLEVBQUFBLEdBQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCUixTQUFyQjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2Rpbm5lcnMvaW5kZXguanM/NThiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHB1dERpbm5uZXIocmVxLCByZXMpIHtcbiAgY29uc3QgeyByZWNpcGUsIGRhdGUgfSA9IHJlcS5ib2R5O1xuICBjb25zdCBuZXdEaW5uZXIgPSBhd2FpdCBwcmlzbWEuZGlubmVyLmNyZWF0ZSh7XG4gICAgZGF0YTogeyByZWNpcGVJZDogcmVjaXBlLmlkLCBkaW5uZXJBdDogZGF0ZSB9LFxuICB9KTtcblxuICByZXMuc3RhdHVzKDIwMCkuanNvbihuZXdEaW5uZXIpO1xufVxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsInB1dERpbm5uZXIiLCJyZXEiLCJyZXMiLCJyZWNpcGUiLCJkYXRlIiwiYm9keSIsIm5ld0Rpbm5lciIsImRpbm5lciIsImNyZWF0ZSIsImRhdGEiLCJyZWNpcGVJZCIsImlkIiwiZGlubmVyQXQiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/dinners/index.js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/dinners/index.js"));
module.exports = __webpack_exports__;

})();