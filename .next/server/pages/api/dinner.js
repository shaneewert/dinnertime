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
exports.id = "pages/api/dinner";
exports.ids = ["pages/api/dinner"];
exports.modules = {

/***/ "./pages/api/dinner.js":
/*!*****************************!*\
  !*** ./pages/api/dinner.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ putDinnner)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function putDinnner(req, res) {\n  const {\n    recipe,\n    date\n  } = req.body;\n  console.log('creating ' + JSON.stringify(recipe.title) + ' for ' + date);\n  const newDinner = await prisma.dinner.create({\n    data: {\n      recipeId: recipe.id,\n      dinnerAt: date\n    }\n  });\n  res.status(200).json(newDinner);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZGlubmVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFKLEVBQWY7QUFFZSxlQUFlRSxVQUFmLENBQTBCQyxHQUExQixFQUErQkMsR0FBL0IsRUFBb0M7QUFDakQsUUFBTTtBQUFFQyxJQUFBQSxNQUFGO0FBQVVDLElBQUFBO0FBQVYsTUFBbUJILEdBQUcsQ0FBQ0ksSUFBN0I7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBY0MsSUFBSSxDQUFDQyxTQUFMLENBQWVOLE1BQU0sQ0FBQ08sS0FBdEIsQ0FBZCxHQUE2QyxPQUE3QyxHQUF1RE4sSUFBbkU7QUFDQSxRQUFNTyxTQUFTLEdBQUcsTUFBTVosTUFBTSxDQUFDYSxNQUFQLENBQWNDLE1BQWQsQ0FBcUI7QUFDM0NDLElBQUFBLElBQUksRUFBRTtBQUFFQyxNQUFBQSxRQUFRLEVBQUVaLE1BQU0sQ0FBQ2EsRUFBbkI7QUFBdUJDLE1BQUFBLFFBQVEsRUFBRWI7QUFBakM7QUFEcUMsR0FBckIsQ0FBeEI7QUFJQUYsRUFBQUEsR0FBRyxDQUFDZ0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCUixTQUFyQjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2Rpbm5lci5qcz82MDgyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcHV0RGlubm5lcihyZXEsIHJlcykge1xuICBjb25zdCB7IHJlY2lwZSwgZGF0ZSB9ID0gcmVxLmJvZHk7XG4gIGNvbnNvbGUubG9nKCdjcmVhdGluZyAnICsgSlNPTi5zdHJpbmdpZnkocmVjaXBlLnRpdGxlKSArICcgZm9yICcgKyBkYXRlKTtcbiAgY29uc3QgbmV3RGlubmVyID0gYXdhaXQgcHJpc21hLmRpbm5lci5jcmVhdGUoe1xuICAgIGRhdGE6IHsgcmVjaXBlSWQ6IHJlY2lwZS5pZCwgZGlubmVyQXQ6IGRhdGUgfSxcbiAgfSk7XG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24obmV3RGlubmVyKTtcbn1cbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJwdXREaW5ubmVyIiwicmVxIiwicmVzIiwicmVjaXBlIiwiZGF0ZSIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInRpdGxlIiwibmV3RGlubmVyIiwiZGlubmVyIiwiY3JlYXRlIiwiZGF0YSIsInJlY2lwZUlkIiwiaWQiLCJkaW5uZXJBdCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/dinner.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/dinner.js"));
module.exports = __webpack_exports__;

})();