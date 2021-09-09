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
exports.id = "pages/api/recipe";
exports.ids = ["pages/api/recipe"];
exports.modules = {

/***/ "./pages/api/recipe.js":
/*!*****************************!*\
  !*** ./pages/api/recipe.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ putRecipe)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function putRecipe(req, res) {\n  const {\n    title,\n    url,\n    imageUrl\n  } = req.body;\n  const newRecipe = await prisma.recipe.create({\n    data: {\n      url,\n      title,\n      imageUrl\n    }\n  });\n  res.status(200).json(newRecipe);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcmVjaXBlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFKLEVBQWY7QUFFZSxlQUFlRSxTQUFmLENBQXlCQyxHQUF6QixFQUE4QkMsR0FBOUIsRUFBbUM7QUFDaEQsUUFBTTtBQUFFQyxJQUFBQSxLQUFGO0FBQVNDLElBQUFBLEdBQVQ7QUFBY0MsSUFBQUE7QUFBZCxNQUEyQkosR0FBRyxDQUFDSyxJQUFyQztBQUNBLFFBQU1DLFNBQVMsR0FBRyxNQUFNUixNQUFNLENBQUNTLE1BQVAsQ0FBY0MsTUFBZCxDQUFxQjtBQUMzQ0MsSUFBQUEsSUFBSSxFQUFFO0FBQUVOLE1BQUFBLEdBQUY7QUFBT0QsTUFBQUEsS0FBUDtBQUFjRSxNQUFBQTtBQUFkO0FBRHFDLEdBQXJCLENBQXhCO0FBSUFILEVBQUFBLEdBQUcsQ0FBQ1MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCTCxTQUFyQjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3JlY2lwZS5qcz82NzRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcHV0UmVjaXBlKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHsgdGl0bGUsIHVybCwgaW1hZ2VVcmwgfSA9IHJlcS5ib2R5O1xuICBjb25zdCBuZXdSZWNpcGUgPSBhd2FpdCBwcmlzbWEucmVjaXBlLmNyZWF0ZSh7XG4gICAgZGF0YTogeyB1cmwsIHRpdGxlLCBpbWFnZVVybCB9LFxuICB9KTtcblxuICByZXMuc3RhdHVzKDIwMCkuanNvbihuZXdSZWNpcGUpO1xufVxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsInB1dFJlY2lwZSIsInJlcSIsInJlcyIsInRpdGxlIiwidXJsIiwiaW1hZ2VVcmwiLCJib2R5IiwibmV3UmVjaXBlIiwicmVjaXBlIiwiY3JlYXRlIiwiZGF0YSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/recipe.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/recipe.js"));
module.exports = __webpack_exports__;

})();