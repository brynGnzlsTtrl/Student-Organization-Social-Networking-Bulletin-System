/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./__test__/assets/images sync recursive ^\\.\\/.*\\.jpg$":
/*!****************************************************!*\
  !*** ./__test__/assets/images/ sync ^\.\/.*\.jpg$ ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./AmericanConcreteInstituteofthePhilippines-BPSUStudentChapter.jpg": "./__test__/assets/images/AmericanConcreteInstituteofthePhilippines-BPSUStudentChapter.jpg",
	"./AsociaciondeComadronasPeninsulares.jpg": "./__test__/assets/images/AsociaciondeComadronasPeninsulares.jpg",
	"./BPSU-DOSTOrganizationofScholars.jpg": "./__test__/assets/images/BPSU-DOSTOrganizationofScholars.jpg",
	"./BPSUCollegeRedCrossYouthCouncil.jpg": "./__test__/assets/images/BPSUCollegeRedCrossYouthCouncil.jpg",
	"./BPSUMainCampusTriskelion.jpg": "./__test__/assets/images/BPSUMainCampusTriskelion.jpg",
	"./BPSUSocietyofIndustrialEngineeringStudents.jpg": "./__test__/assets/images/BPSUSocietyofIndustrialEngineeringStudents.jpg",
	"./BPSUSocietyofMechanicalEngineeringStudents.jpg": "./__test__/assets/images/BPSUSocietyofMechanicalEngineeringStudents.jpg",
	"./BPSUStudentSocietyonInformationTechnologyEducation.jpg": "./__test__/assets/images/BPSUStudentSocietyonInformationTechnologyEducation.jpg",
	"./Care_Save_ImmortalizeEarth.jpg": "./__test__/assets/images/Care_Save_ImmortalizeEarth.jpg",
	"./HMDiversity.jpg": "./__test__/assets/images/HMDiversity.jpg",
	"./InnovativeMoversofTourismManagement.jpg": "./__test__/assets/images/InnovativeMoversofTourismManagement.jpg",
	"./InstituteofElectronicsEngineersofthePhilippines-BPSUStudentChapter.jpg": "./__test__/assets/images/InstituteofElectronicsEngineersofthePhilippines-BPSUStudentChapter.jpg",
	"./InstituteofIntegratedElectricalEngineersofthePhilippines_Inc.-BPSUStudentGovernment.jpg": "./__test__/assets/images/InstituteofIntegratedElectricalEngineersofthePhilippines_Inc.-BPSUStudentGovernment.jpg",
	"./PhilippineInstituteofCivilEngineers-BPSUStudentChapter.jpg": "./__test__/assets/images/PhilippineInstituteofCivilEngineers-BPSUStudentChapter.jpg",
	"./PhilippineNursingStudentsAssociationBataanChapter.jpg": "./__test__/assets/images/PhilippineNursingStudentsAssociationBataanChapter.jpg",
	"./UnitedArchitectsofthePhilippinesStudentAuxiliary-BPSU.jpg": "./__test__/assets/images/UnitedArchitectsofthePhilippinesStudentAuxiliary-BPSU.jpg",
	"./bpsudos-header.jpg": "./__test__/assets/images/bpsudos-header.jpg",
	"./img_1_1280x1920.jpg": "./__test__/assets/images/img_1_1280x1920.jpg",
	"./img_2_1280x1920.jpg": "./__test__/assets/images/img_2_1280x1920.jpg",
	"./img_3_1280x1920.jpg": "./__test__/assets/images/img_3_1280x1920.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./__test__/assets/images sync recursive ^\\.\\/.*\\.jpg$";

/***/ }),

/***/ "./__test__/common/components/NameTag.jsx":
/*!************************************************!*\
  !*** ./__test__/common/components/NameTag.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Test)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Common_styles_components_nameTag_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Common/styles/components/_nameTag.scss */ "./__test__/common/styles/components/_nameTag.scss");





var hypenStart = window.location.href.indexOf("-") + 1;
var ampersandEnd = window.location.href.indexOf("&") + 1;
var orgId = window.location.href.slice(hypenStart, ampersandEnd - 1);
var userId = window.location.href.slice(ampersandEnd);
function Test(_ref) {
  var userData = _ref.userData,
    id = _ref.id;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: "sticky",
      top: "0",
      zIndex: "5"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/bulletin.html"
  }, "Student Organization Bulletin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Bataan Peninsula State University", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Main Campus")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: __webpack_require__(/*! Assets/svg/bpsulogo.svg */ "./__test__/assets/svg/bpsulogo.svg"),
    alt: "bpsu logo",
    style: {
      width: "75px",
      height: "75px"
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar"
  }, userData.position === "President" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar__sub-cont"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: __webpack_require__(/*! Assets/svg/publish-icon.svg */ "./__test__/assets/svg/publish-icon.svg"),
    alt: "publish icon",
    style: {
      width: "27px",
      height: "28px"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/publish-&".concat(id.userId)
  }, "Publish Announcement")) : null, userData.position === "Officer" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar__sub-cont"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: __webpack_require__(/*! Assets/svg/submit-icon.svg */ "./__test__/assets/svg/submit-icon.svg"),
    alt: "submit icon",
    style: {
      width: "27px",
      height: "28px"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/eventsProposal-&".concat(userId)
  }, "Submit Event Proposal")) : null, userData.position === "Adviser" || userData.position === "President" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar__sub-cont"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: __webpack_require__(/*! Assets/svg/approve-icon.svg */ "./__test__/assets/svg/approve-icon.svg"),
    alt: "approve icon",
    style: {
      width: "27px",
      height: "28px"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/eventsApproval-&".concat(userId)
  }, "Approve Event Proposal")) : null, userData.position === "President" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar__sub-cont"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: __webpack_require__(/*! Assets/svg/approve-m-icon.svg */ "./__test__/assets/svg/approve-m-icon.svg"),
    alt: "approve icon",
    style: {
      width: "27px",
      height: "28px"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/membersApproval-63d323d709a17736e5728637&".concat(id.userId)
  }, "Approve Membership Application")) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "none"
    },
    className: "navbar__sub-cont"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: __webpack_require__(/*! Assets/svg/dm-icon.svg */ "./__test__/assets/svg/dm-icon.svg"),
    alt: "dm icon",
    style: {
      width: "27px",
      height: "28px"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#"
  }, "Direct Message")), !window.location.href.includes("organization") ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar__sub-cont"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: __webpack_require__(/*! Assets/svg/org-icon.svg */ "./__test__/assets/svg/org-icon.svg"),
    alt: "org icon",
    style: {
      width: "27px",
      height: "28px"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/organizations-&".concat(window.location.href.slice(window.location.href.indexOf("&") + 1))
  }, "Organizations")) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar__profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "user-icon navbar__sub-contx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: __webpack_require__(/*! Assets/images/pp-icon.png */ "./__test__/assets/images/pp-icon.png"),
    alt: "profile icon",
    style: {
      width: "45px",
      height: "45px"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "user-name navbar__sub-contx"
  }, userData.position !== "" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "user-fname"
  }, userData.fullName) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null), userData.position !== "" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "user-position"
  }, userData.position) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "rejectm-btn",
    onClick: function onClick() {
      return window.location.href = "/";
    }
  }, "Log out"))));
}

/***/ }),

/***/ "./__test__/src/pages/organization/Organization.jsx":
/*!**********************************************************!*\
  !*** ./__test__/src/pages/organization/Organization.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Organization)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var use_immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-immer */ "./node_modules/use-immer/dist/use-immer.module.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _common_components_NameTag_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/components/NameTag.jsx */ "./__test__/common/components/NameTag.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



Document.title = "The Fuck ?";

var hypenStart = window.location.href.indexOf("-") + 1;
var ampersandEnd = window.location.href.indexOf("&") + 1;
function Organization() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      userId: "",
      orgId: ""
    }),
    _useState2 = _slicedToArray(_useState, 2),
    id = _useState2[0],
    setId = _useState2[1];
  var _useImmer = (0,use_immer__WEBPACK_IMPORTED_MODULE_2__.useImmer)({
      name: "",
      info: "",
      president: "",
      officers: [],
      members: [],
      applicants: [],
      coverImage: ""
    }),
    _useImmer2 = _slicedToArray(_useImmer, 2),
    orgData = _useImmer2[0],
    setOrgData = _useImmer2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      _id: id,
      email: "",
      status: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    userData = _useState4[0],
    setUserData = _useState4[1];
  var _useImmer3 = (0,use_immer__WEBPACK_IMPORTED_MODULE_2__.useImmer)({
      orgId: "",
      userId: "",
      email: "",
      password: "",
      refNum: ""
    }),
    _useImmer4 = _slicedToArray(_useImmer3, 2),
    applicantData = _useImmer4[0],
    setApplicantData = _useImmer4[1];
  var _useImmer5 = (0,use_immer__WEBPACK_IMPORTED_MODULE_2__.useImmer)({
      fullName: "",
      position: ""
    }),
    _useImmer6 = _slicedToArray(_useImmer5, 2),
    nameTagData = _useImmer6[0],
    setNameTagData = _useImmer6[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    popUpDisplay = _useState6[0],
    setPopUpDisplay = _useState6[1];
  function handleSetApplicantData(e) {
    var name = e.target.name;
    setApplicantData(function (draft) {
      draft[name] = e.target.value;
    });
  }
  function submitAppication(_x2, _x3) {
    return _submitAppication.apply(this, arguments);
  }
  function _submitAppication() {
    _submitAppication = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(email, password) {
      var res;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/validate/verifyCredentials", {
              email: userData.email,
              password: applicantData.password
            });
          case 2:
            res = _context.sent;
            console.log(res.data.status);
            if (res.data.status === "ok") {
              handleSubmitApplicationForm();
            } else {
              alert(res.data.msg);
            }
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _submitAppication.apply(this, arguments);
  }
  function handleSubmitApplicationForm() {
    console.log(applicantData);
    axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/submitApplicationForm", _objectSpread({}, applicantData)).then(function (res) {
      var _res$data = res.data,
        status = _res$data.status,
        msg = _res$data.msg;
      alert(msg);
      setPopUpDisplay("none");
    });
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setId(function (draft) {
      draft.userId = window.location.href.slice(ampersandEnd);
      draft.orgId = window.location.href.slice(hypenStart, ampersandEnd - 1);
    });
    setApplicantData(function (draft) {
      draft.orgId = window.location.href.slice(hypenStart, ampersandEnd - 1);
      draft.userId = window.location.href.slice(ampersandEnd);
    });
    console.log(id);
    axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/query/getOrganization", {
      id: id.orgId
    }).then(function (response) {
      if (response.status != "error") {
        setOrgData(_objectSpread({}, response.data));
      } else alert(response.data.msg);
    });
    axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/query/getUser", {
      id: id.userId
    }).then(function (response) {
      if (response.status != "error") setUserData(_objectSpread({}, response.data));else alert(response.data.msg);
      setApplicantData(function (draft) {
        draft.email = response.data.email;
      });
    });
    axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/query/getUser", {
      id: window.location.href.slice(ampersandEnd)
    }).then(function (res) {
      var _res$data2 = res.data,
        firstName = _res$data2.firstName,
        lastName = _res$data2.lastName,
        organizations = _res$data2.organizations;
      console.log(res.data);
      setNameTagData(function (draft) {
        draft.fullName = "".concat(firstName, " ").concat(lastName);
      });
      var highestPosition = "Member";
      if (organizations.length !== 0) {
        organizations.map(function (e) {
          if (e.position != "President") {
            if (e.position === "Officer" && nameTagData.position !== "President") {
              highestPosition = "Officer";
            }
          } else highestPosition = "President";
        });
      }
      setNameTagData(function (draft) {
        draft.position = highestPosition;
      });
    });
  }, []);

  // const [applyData, setApplyData] = useState({
  //   email: email,
  // });
  console.log(orgData.coverImage);
  function showDialog() {
    alert("Application Submitted");
  }
  // function submitApplicaton() {}

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_NameTag_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: id,
    userData: nameTagData
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cover"
  }, orgData.coverImage !== "" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: __webpack_require__("./__test__/assets/images sync recursive ^\\.\\/.*\\.jpg$")("./".concat(orgData.coverImage, ".jpg")),
    width: "100%",
    alt: "org event image"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "applynow-btn",
    onClick: function onClick() {
      setPopUpDisplay("block");
    },
    style: {
      verticalaAlign: "middle"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Submit an application"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-popup",
    id: "myForm",
    style: {
      display: popUpDisplay
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    action: "/action_page.php",
    className: "form-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "details-rf"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Submit an application"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "email"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "input-details-rf",
    type: "text",
    placeholder: "example@bpsu.edu.ph",
    name: "email",
    value: userData.email,
    disabled: true,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "psw"
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "input-details-rf",
    type: "password",
    name: "password",
    onChange: handleSetApplicantData,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "refno"
  }, "Membership fee payment RN"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "input-details-rf",
    type: "text",
    placeholder: "reference number",
    name: "refNum",
    onChange: handleSetApplicantData,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick(e) {
      e.preventDefault();
      console.log(applicantData);
      var isApplicationFormFilled = Object.values(applicantData).every(function (val) {
        return val !== "";
      });
      if (isApplicationFormFilled) {
        submitAppication();
      } else alert("Please Fill up the Form");
    },
    id: "submitApp",
    type: "submit",
    className: "submit-rf-btn"
  }, "Submit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "cancel-rf-btn",
    onClick: function onClick() {
      return setPopUpDisplay("none");
    }
  }, "Cancel"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "display-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "display-column",
    style: {
      backgroundColor: "#E7E9EB"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "display-column",
    style: {
      backgroundColor: "#E7E9EB"
    }
  })));
}

/***/ }),

/***/ "./__test__/src/pages/organization/organization.js":
/*!*********************************************************!*\
  !*** ./__test__/src/pages/organization/organization.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _Organization_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Organization.jsx */ "./__test__/src/pages/organization/Organization.jsx");
/* harmony import */ var _organization_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organization.scss */ "./__test__/src/pages/organization/organization.scss");



//main jsx



//achor js to html
var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Organization_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null));

/***/ }),

/***/ "./__test__/common/styles/components/_nameTag.scss":
/*!*********************************************************!*\
  !*** ./__test__/common/styles/components/_nameTag.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./__test__/src/pages/organization/organization.scss":
/*!***********************************************************!*\
  !*** ./__test__/src/pages/organization/organization.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./__test__/assets/images/AmericanConcreteInstituteofthePhilippines-BPSUStudentChapter.jpg":
/*!*************************************************************************************************!*\
  !*** ./__test__/assets/images/AmericanConcreteInstituteofthePhilippines-BPSUStudentChapter.jpg ***!
  \*************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c605c97cf0f8ad99d2d9.jpg";

/***/ }),

/***/ "./__test__/assets/images/AsociaciondeComadronasPeninsulares.jpg":
/*!***********************************************************************!*\
  !*** ./__test__/assets/images/AsociaciondeComadronasPeninsulares.jpg ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8b589385ad45bf4e2db9.jpg";

/***/ }),

/***/ "./__test__/assets/images/BPSU-DOSTOrganizationofScholars.jpg":
/*!********************************************************************!*\
  !*** ./__test__/assets/images/BPSU-DOSTOrganizationofScholars.jpg ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "84cdaf98a3f2e3336ee8.jpg";

/***/ }),

/***/ "./__test__/assets/images/BPSUCollegeRedCrossYouthCouncil.jpg":
/*!********************************************************************!*\
  !*** ./__test__/assets/images/BPSUCollegeRedCrossYouthCouncil.jpg ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5cfaf9671359c4277fec.jpg";

/***/ }),

/***/ "./__test__/assets/images/BPSUMainCampusTriskelion.jpg":
/*!*************************************************************!*\
  !*** ./__test__/assets/images/BPSUMainCampusTriskelion.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "812ed8e0ba6dd3a6dc69.jpg";

/***/ }),

/***/ "./__test__/assets/images/BPSUSocietyofIndustrialEngineeringStudents.jpg":
/*!*******************************************************************************!*\
  !*** ./__test__/assets/images/BPSUSocietyofIndustrialEngineeringStudents.jpg ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a039d506758553e27a4d.jpg";

/***/ }),

/***/ "./__test__/assets/images/BPSUSocietyofMechanicalEngineeringStudents.jpg":
/*!*******************************************************************************!*\
  !*** ./__test__/assets/images/BPSUSocietyofMechanicalEngineeringStudents.jpg ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fe63c880f1baae672102.jpg";

/***/ }),

/***/ "./__test__/assets/images/BPSUStudentSocietyonInformationTechnologyEducation.jpg":
/*!***************************************************************************************!*\
  !*** ./__test__/assets/images/BPSUStudentSocietyonInformationTechnologyEducation.jpg ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ccc41c9a6051b7995aee.jpg";

/***/ }),

/***/ "./__test__/assets/images/Care_Save_ImmortalizeEarth.jpg":
/*!***************************************************************!*\
  !*** ./__test__/assets/images/Care_Save_ImmortalizeEarth.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "35be904f661af756fbe8.jpg";

/***/ }),

/***/ "./__test__/assets/images/HMDiversity.jpg":
/*!************************************************!*\
  !*** ./__test__/assets/images/HMDiversity.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e929f4debe7f2b33b0f8.jpg";

/***/ }),

/***/ "./__test__/assets/images/InnovativeMoversofTourismManagement.jpg":
/*!************************************************************************!*\
  !*** ./__test__/assets/images/InnovativeMoversofTourismManagement.jpg ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "12ed35f91f1089032966.jpg";

/***/ }),

/***/ "./__test__/assets/images/InstituteofElectronicsEngineersofthePhilippines-BPSUStudentChapter.jpg":
/*!*******************************************************************************************************!*\
  !*** ./__test__/assets/images/InstituteofElectronicsEngineersofthePhilippines-BPSUStudentChapter.jpg ***!
  \*******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0edf08cc13e4b1a1f5e4.jpg";

/***/ }),

/***/ "./__test__/assets/images/InstituteofIntegratedElectricalEngineersofthePhilippines_Inc.-BPSUStudentGovernment.jpg":
/*!************************************************************************************************************************!*\
  !*** ./__test__/assets/images/InstituteofIntegratedElectricalEngineersofthePhilippines_Inc.-BPSUStudentGovernment.jpg ***!
  \************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "88983ed69da4c725da96.jpg";

/***/ }),

/***/ "./__test__/assets/images/PhilippineInstituteofCivilEngineers-BPSUStudentChapter.jpg":
/*!*******************************************************************************************!*\
  !*** ./__test__/assets/images/PhilippineInstituteofCivilEngineers-BPSUStudentChapter.jpg ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1c8171836bced5fbe994.jpg";

/***/ }),

/***/ "./__test__/assets/images/PhilippineNursingStudentsAssociationBataanChapter.jpg":
/*!**************************************************************************************!*\
  !*** ./__test__/assets/images/PhilippineNursingStudentsAssociationBataanChapter.jpg ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "26abee4b02663f192de8.jpg";

/***/ }),

/***/ "./__test__/assets/images/UnitedArchitectsofthePhilippinesStudentAuxiliary-BPSU.jpg":
/*!******************************************************************************************!*\
  !*** ./__test__/assets/images/UnitedArchitectsofthePhilippinesStudentAuxiliary-BPSU.jpg ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3302d0daab29037dadbb.jpg";

/***/ }),

/***/ "./__test__/assets/images/bpsudos-header.jpg":
/*!***************************************************!*\
  !*** ./__test__/assets/images/bpsudos-header.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9d43345fd4ce4eb410b9.jpg";

/***/ }),

/***/ "./__test__/assets/images/img_1_1280x1920.jpg":
/*!****************************************************!*\
  !*** ./__test__/assets/images/img_1_1280x1920.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9d93cd53075f131a56fa.jpg";

/***/ }),

/***/ "./__test__/assets/images/img_2_1280x1920.jpg":
/*!****************************************************!*\
  !*** ./__test__/assets/images/img_2_1280x1920.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "24d476e71cbfd6a07ec9.jpg";

/***/ }),

/***/ "./__test__/assets/images/img_3_1280x1920.jpg":
/*!****************************************************!*\
  !*** ./__test__/assets/images/img_3_1280x1920.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "73746560bf8ec98b8eb5.jpg";

/***/ }),

/***/ "./__test__/assets/images/pp-icon.png":
/*!********************************************!*\
  !*** ./__test__/assets/images/pp-icon.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "10691648d79aa2f92514.png";

/***/ }),

/***/ "./__test__/assets/svg/approve-icon.svg":
/*!**********************************************!*\
  !*** ./__test__/assets/svg/approve-icon.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "05a8f94d9484c4ad9333.svg";

/***/ }),

/***/ "./__test__/assets/svg/approve-m-icon.svg":
/*!************************************************!*\
  !*** ./__test__/assets/svg/approve-m-icon.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "abf92ac957d8fcf34b37.svg";

/***/ }),

/***/ "./__test__/assets/svg/bpsulogo.svg":
/*!******************************************!*\
  !*** ./__test__/assets/svg/bpsulogo.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "19f7297338aeb1a69f07.svg";

/***/ }),

/***/ "./__test__/assets/svg/dm-icon.svg":
/*!*****************************************!*\
  !*** ./__test__/assets/svg/dm-icon.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9fbf30d99c4899975a6d.svg";

/***/ }),

/***/ "./__test__/assets/svg/org-icon.svg":
/*!******************************************!*\
  !*** ./__test__/assets/svg/org-icon.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "837e7ba09f3ea3762436.svg";

/***/ }),

/***/ "./__test__/assets/svg/publish-icon.svg":
/*!**********************************************!*\
  !*** ./__test__/assets/svg/publish-icon.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "11d5a74a8f5df40e8967.svg";

/***/ }),

/***/ "./__test__/assets/svg/submit-icon.svg":
/*!*********************************************!*\
  !*** ./__test__/assets/svg/submit-icon.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f06e0fe3604b03e0a6a8.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"organization": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkstudent_organization_social_network_bulletin_system"] = self["webpackChunkstudent_organization_social_network_bulletin_system"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_react-dom_client_js","vendors-node_modules_use-immer_dist_use-immer_module_js-node_modules_axios_lib_axios_js"], () => (__webpack_require__("./__test__/src/pages/organization/organization.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=organization.bundle.js.map