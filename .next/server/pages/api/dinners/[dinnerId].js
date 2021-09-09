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
exports.id = "pages/api/dinners/[dinnerId]";
exports.ids = ["pages/api/dinners/[dinnerId]"];
exports.modules = {

/***/ "./pages/api/dinners/[dinnerId].js":
/*!*****************************************!*\
  !*** ./pages/api/dinners/[dinnerId].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ endpoint)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n\nasync function deleteDinner(req, res) {\n  const dinnerId = parseInt(req.query.dinnerId);\n  await prisma.dinner.delete({\n    where: {\n      id: dinnerId\n    }\n  });\n  res.status(204).send();\n}\n\nasync function endpoint(req, res) {\n  if (req.method === 'DELETE') {\n    await deleteDinner(req, res);\n  } else {\n    res.status(404).send();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZGlubmVycy9bZGlubmVySWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFKLEVBQWY7O0FBRUEsZUFBZUUsWUFBZixDQUE0QkMsR0FBNUIsRUFBaUNDLEdBQWpDLEVBQXNDO0FBQ3BDLFFBQU1DLFFBQVEsR0FBR0MsUUFBUSxDQUFDSCxHQUFHLENBQUNJLEtBQUosQ0FBVUYsUUFBWCxDQUF6QjtBQUNBLFFBQU1KLE1BQU0sQ0FBQ08sTUFBUCxDQUFjQyxNQUFkLENBQXFCO0FBQUVDLElBQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxFQUFFLEVBQUVOO0FBQU47QUFBVCxHQUFyQixDQUFOO0FBQ0FELEVBQUFBLEdBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCO0FBQ0Q7O0FBRWMsZUFBZUMsUUFBZixDQUF3QlgsR0FBeEIsRUFBNkJDLEdBQTdCLEVBQWtDO0FBQy9DLE1BQUlELEdBQUcsQ0FBQ1ksTUFBSixLQUFlLFFBQW5CLEVBQTZCO0FBQzNCLFVBQU1iLFlBQVksQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLENBQWxCO0FBQ0QsR0FGRCxNQUVPO0FBQ0xBLElBQUFBLEdBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCO0FBQ0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9kaW5uZXJzL1tkaW5uZXJJZF0uanM/Yzg0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmFzeW5jIGZ1bmN0aW9uIGRlbGV0ZURpbm5lcihyZXEsIHJlcykge1xuICBjb25zdCBkaW5uZXJJZCA9IHBhcnNlSW50KHJlcS5xdWVyeS5kaW5uZXJJZCk7XG4gIGF3YWl0IHByaXNtYS5kaW5uZXIuZGVsZXRlKHsgd2hlcmU6IHsgaWQ6IGRpbm5lcklkIH0gfSk7XG4gIHJlcy5zdGF0dXMoMjA0KS5zZW5kKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGVuZHBvaW50KHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnREVMRVRFJykge1xuICAgIGF3YWl0IGRlbGV0ZURpbm5lcihyZXEsIHJlcyk7XG4gIH0gZWxzZSB7XG4gICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImRlbGV0ZURpbm5lciIsInJlcSIsInJlcyIsImRpbm5lcklkIiwicGFyc2VJbnQiLCJxdWVyeSIsImRpbm5lciIsImRlbGV0ZSIsIndoZXJlIiwiaWQiLCJzdGF0dXMiLCJzZW5kIiwiZW5kcG9pbnQiLCJtZXRob2QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/dinners/[dinnerId].js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/dinners/[dinnerId].js"));
module.exports = __webpack_exports__;

})();