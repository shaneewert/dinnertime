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
exports.id = "pages/api/parse-recipe";
exports.ids = ["pages/api/parse-recipe"];
exports.modules = {

/***/ "./pages/api/parse-recipe.js":
/*!***********************************!*\
  !*** ./pages/api/parse-recipe.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ parseRecipe)\n/* harmony export */ });\nconst {\n  HTTP\n} = __webpack_require__(/*! http-call */ \"http-call\");\n\nconst DomParser = __webpack_require__(/*! dom-parser */ \"dom-parser\");\n\nvar decode = __webpack_require__(/*! unescape */ \"unescape\");\n\nasync function parseRecipe(req, res) {\n  try {\n    const maybeUrl = req.query.url;\n    const parser = new DomParser();\n    const {\n      body: html\n    } = await HTTP.get(maybeUrl);\n    const dom = parser.parseFromString(html);\n    const metaTags = dom.getElementsByTagName('meta');\n    const ogTitle = metaTags.find(tag => tag.getAttribute('property') == 'og:title');\n    const ogImage = metaTags.find(tag => tag.getAttribute('property') == 'og:image');\n    res.status(200).json({\n      title: decode(ogTitle.getAttribute('content')),\n      imageUrl: ogImage.getAttribute('content')\n    });\n  } catch (err) {\n    res.status(422).json({});\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcGFyc2UtcmVjaXBlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNO0FBQUVBLEVBQUFBO0FBQUYsSUFBV0MsbUJBQU8sQ0FBQyw0QkFBRCxDQUF4Qjs7QUFDQSxNQUFNQyxTQUFTLEdBQUdELG1CQUFPLENBQUMsOEJBQUQsQ0FBekI7O0FBQ0EsSUFBSUUsTUFBTSxHQUFHRixtQkFBTyxDQUFDLDBCQUFELENBQXBCOztBQUVlLGVBQWVHLFdBQWYsQ0FBMkJDLEdBQTNCLEVBQWdDQyxHQUFoQyxFQUFxQztBQUNsRCxNQUFJO0FBQ0YsVUFBTUMsUUFBUSxHQUFHRixHQUFHLENBQUNHLEtBQUosQ0FBVUMsR0FBM0I7QUFDQSxVQUFNQyxNQUFNLEdBQUcsSUFBSVIsU0FBSixFQUFmO0FBRUEsVUFBTTtBQUFFUyxNQUFBQSxJQUFJLEVBQUVDO0FBQVIsUUFBaUIsTUFBTVosSUFBSSxDQUFDYSxHQUFMLENBQVNOLFFBQVQsQ0FBN0I7QUFDQSxVQUFNTyxHQUFHLEdBQUdKLE1BQU0sQ0FBQ0ssZUFBUCxDQUF1QkgsSUFBdkIsQ0FBWjtBQUVBLFVBQU1JLFFBQVEsR0FBR0YsR0FBRyxDQUFDRyxvQkFBSixDQUF5QixNQUF6QixDQUFqQjtBQUNBLFVBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDRyxJQUFULENBQWVDLEdBQUQsSUFBU0EsR0FBRyxDQUFDQyxZQUFKLENBQWlCLFVBQWpCLEtBQWdDLFVBQXZELENBQWhCO0FBQ0EsVUFBTUMsT0FBTyxHQUFHTixRQUFRLENBQUNHLElBQVQsQ0FBZUMsR0FBRCxJQUFTQSxHQUFHLENBQUNDLFlBQUosQ0FBaUIsVUFBakIsS0FBZ0MsVUFBdkQsQ0FBaEI7QUFFQWYsSUFBQUEsR0FBRyxDQUFDaUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ25CQyxNQUFBQSxLQUFLLEVBQUV0QixNQUFNLENBQUNlLE9BQU8sQ0FBQ0csWUFBUixDQUFxQixTQUFyQixDQUFELENBRE07QUFFbkJLLE1BQUFBLFFBQVEsRUFBRUosT0FBTyxDQUFDRCxZQUFSLENBQXFCLFNBQXJCO0FBRlMsS0FBckI7QUFJRCxHQWZELENBZUUsT0FBT00sR0FBUCxFQUFZO0FBQ1pyQixJQUFBQSxHQUFHLENBQUNpQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsRUFBckI7QUFDRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3BhcnNlLXJlY2lwZS5qcz9iNmRmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgSFRUUCB9ID0gcmVxdWlyZSgnaHR0cC1jYWxsJyk7XG5jb25zdCBEb21QYXJzZXIgPSByZXF1aXJlKCdkb20tcGFyc2VyJyk7XG52YXIgZGVjb2RlID0gcmVxdWlyZSgndW5lc2NhcGUnKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcGFyc2VSZWNpcGUocmVxLCByZXMpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBtYXliZVVybCA9IHJlcS5xdWVyeS51cmw7XG4gICAgY29uc3QgcGFyc2VyID0gbmV3IERvbVBhcnNlcigpO1xuXG4gICAgY29uc3QgeyBib2R5OiBodG1sIH0gPSBhd2FpdCBIVFRQLmdldChtYXliZVVybCk7XG4gICAgY29uc3QgZG9tID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhodG1sKTtcblxuICAgIGNvbnN0IG1ldGFUYWdzID0gZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtZXRhJyk7XG4gICAgY29uc3Qgb2dUaXRsZSA9IG1ldGFUYWdzLmZpbmQoKHRhZykgPT4gdGFnLmdldEF0dHJpYnV0ZSgncHJvcGVydHknKSA9PSAnb2c6dGl0bGUnKTtcbiAgICBjb25zdCBvZ0ltYWdlID0gbWV0YVRhZ3MuZmluZCgodGFnKSA9PiB0YWcuZ2V0QXR0cmlidXRlKCdwcm9wZXJ0eScpID09ICdvZzppbWFnZScpO1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgdGl0bGU6IGRlY29kZShvZ1RpdGxlLmdldEF0dHJpYnV0ZSgnY29udGVudCcpKSxcbiAgICAgIGltYWdlVXJsOiBvZ0ltYWdlLmdldEF0dHJpYnV0ZSgnY29udGVudCcpLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXMuc3RhdHVzKDQyMikuanNvbih7fSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJIVFRQIiwicmVxdWlyZSIsIkRvbVBhcnNlciIsImRlY29kZSIsInBhcnNlUmVjaXBlIiwicmVxIiwicmVzIiwibWF5YmVVcmwiLCJxdWVyeSIsInVybCIsInBhcnNlciIsImJvZHkiLCJodG1sIiwiZ2V0IiwiZG9tIiwicGFyc2VGcm9tU3RyaW5nIiwibWV0YVRhZ3MiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIm9nVGl0bGUiLCJmaW5kIiwidGFnIiwiZ2V0QXR0cmlidXRlIiwib2dJbWFnZSIsInN0YXR1cyIsImpzb24iLCJ0aXRsZSIsImltYWdlVXJsIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/parse-recipe.js\n");

/***/ }),

/***/ "dom-parser":
/*!*****************************!*\
  !*** external "dom-parser" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("dom-parser");

/***/ }),

/***/ "http-call":
/*!****************************!*\
  !*** external "http-call" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("http-call");

/***/ }),

/***/ "unescape":
/*!***************************!*\
  !*** external "unescape" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("unescape");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/parse-recipe.js"));
module.exports = __webpack_exports__;

})();