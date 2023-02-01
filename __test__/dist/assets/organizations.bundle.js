/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./__test__/common/components/NameTag.jsx":
/*!************************************************!*\
  !*** ./__test__/common/components/NameTag.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./__test__/src/pages/organizations/Organizations.jsx":
/*!************************************************************!*\
  !*** ./__test__/src/pages/organizations/Organizations.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Organizations)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var use_immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-immer */ "./node_modules/use-immer/dist/use-immer.module.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _common_components_NameTag_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/components/NameTag.jsx */ "./__test__/common/components/NameTag.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var OrgId = {
  BPSUACIOP: "63d32d15d18ad03d7bbbe042",
  BPSUACP: "63d32ef188f7c7250071b79f",
  BPSUTRISKELION: "63d33d8f19dbc696255e875e",
  BPSUSOIES: "63d33e188be7396f2985d456",
  BPSUSOMES: "63d33f3104299b2e65a9e440",
  BPSUSSITE: "63d33f85ffc29bd3e6618a2f",
  BPSUDOST: "63d323d709a17736e5728637",
  BPSUCSIE: "63d33fe9f61ad2d9124f3769",
  BPSUHMD: "63d3403d376f3c100223df4d",
  BPSUIMOTM: "63d3408d0aa913c3d52da669",
  BPSUIOEEOTP: "63d3411fdc4b8276e1d14d1b",
  BPSUIOSIEEOTP: "63d34199aba0b38aa74ddca4",
  BPSUPIOCV: "63d3426edc63654d207536c8",
  BPSUPNUSABC: "63d342e8e3f287e3031e6e00",
  BPSUUAOFTPSA: "63d3433d59a774a2be2f6015"
};
var hypenStart = window.location.href.indexOf("-") + 1;
var ampersandEnd = window.location.href.indexOf("&") + 1;
console.log("outsideFunctoin");
function Organizations() {
  var _useImmer = (0,use_immer__WEBPACK_IMPORTED_MODULE_2__.useImmer)({
      orgId: "",
      userId: ""
    }),
    _useImmer2 = _slicedToArray(_useImmer, 2),
    id = _useImmer2[0],
    setIds = _useImmer2[1];
  var _useImmer3 = (0,use_immer__WEBPACK_IMPORTED_MODULE_2__.useImmer)({
      fullName: "",
      position: ""
    }),
    _useImmer4 = _slicedToArray(_useImmer3, 2),
    userData = _useImmer4[0],
    setUserData = _useImmer4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setIds(function (draft) {
      draft.orgId = window.location.href.slice(hypenStart, ampersandEnd - 1);
      draft.userId = window.location.href.slice(ampersandEnd);
    });
    axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/query/getUser", {
      id: window.location.href.slice(ampersandEnd)
    }).then(function (res) {
      var _res$data = res.data,
        firstName = _res$data.firstName,
        lastName = _res$data.lastName,
        organizations = _res$data.organizations;
      console.log(res.data);
      setUserData(function (draft) {
        draft.fullName = "".concat(firstName, " ").concat(lastName);
      });
      var highestPosition = "Member";
      if (organizations.length !== 0) {
        organizations.map(function (e) {
          if (e.position !== "Adviser") {
            if (e.position != "President") {
              if (e.position === "Officer" && userData.position !== "President") {
                highestPosition = "Officer";
              }
            } else highestPosition = "President";
          } else highestPosition = "Adviser";
        });
      }
      setUserData(function (draft) {
        draft.position = highestPosition;
      });
    });
    console.log(id.userId);
  }, []);
  console.log(id.userId, " User Id");
  console.log(userData);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_NameTag_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: id,
    userData: userData
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "orgs-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: __webpack_require__(/*! Assets/svg/org-page-bg.svg */ "./__test__/assets/svg/org-page-bg.svg"),
    width: "100%",
    alt: "org event image"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "txt1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "apply-button",
    style: {
      textDecoration: "none",
      color: "antiquewhite"
    },
    href: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Accredited Organizations "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "orgs-jumphere",
    className: "org-row-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "org-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/org-".concat(OrgId.BPSUACIOP, "&").concat(id.userId)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: __webpack_require__(/*! Assets/svg/AmericanConcreteInstituteofthePhilippines-BPSUStudentChapter.svg */ "./__test__/assets/svg/AmericanConcreteInstituteofthePhilippines-BPSUStudentChapter.svg"),
    alt: "American Concrete Institute of the Philippines-BPSU StudentChapter logo",
    className: "org-logos",
    style: {
      width: "300px"
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "org-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/org-".concat(OrgId.BPSUACP, "&").concat(id.userId)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: __webpack_require__(/*! Assets/svg/AsociaciondeComadronasPeninsulares.svg */ "./__test__/assets/svg/AsociaciondeComadronasPeninsulares.svg"),
    alt: "Asociacion de Comadronas Peninsulares logo",
    className: "org-logos",
    style: {
      width: "300px"
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "org-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/org-".concat(OrgId.BPSUTRISKELION, "&").concat(id.userId)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: __webpack_require__(/*! Assets/svg/BPSUMainCampusTriskelion.svg */ "./__test__/assets/svg/BPSUMainCampusTriskelion.svg"),
    alt: "BPSU College Red Cross Youth Council logo",
    className: "org-logos",
    style: {
      width: "300px"
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "org-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/org-".concat(OrgId.org, "&").concat(id.userId)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: __webpack_require__(/*! Assets/svg/BPSUCollegeRedCrossYouthCouncil.svg */ "./__test__/assets/svg/BPSUCollegeRedCrossYouthCouncil.svg"),
    alt: "BPSU Main Campus Triskelion logo",
    className: "org-logos",
    style: {
      width: "300px"
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "org-row-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "org-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/org-".concat(OrgId.BPSUSOIES, "&").concat(id.userId)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: __webpack_require__(/*! Assets/svg/BPSUSocietyofIndustrialEngineeringStudents.svg */ "./__test__/assets/svg/BPSUSocietyofIndustrialEngineeringStudents.svg"),
    alt: "BPSU Society of Industrial Engineering Students logo",
    className: "org-logos",
    style: {
      width: "300px"
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "org-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/org-".concat(OrgId.BPSUSOMES, "&").concat(id.userId)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: __webpack_require__(/*! Assets/svg/BPSUSocietyofMechanicalEngineeringStudents.svg */ "./__test__/assets/svg/BPSUSocietyofMechanicalEngineeringStudents.svg"),
    alt: "BPSU Society of Mechanical Engineering Students logo",
    className: "org-logos",
    style: {
      width: "300px"
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "org-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/org-".concat(OrgId.BPSUSSITE, "&").concat(id.userId)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: __webpack_require__(/*! Assets/svg/BPSUStudentSocietyonInformationTechnologyEducation.svg */ "./__test__/assets/svg/BPSUStudentSocietyonInformationTechnologyEducation.svg"),
    alt: "BPSU Student Society on Information Technology Education logo",
    className: "org-logos",
    style: {
      width: "300px"
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "org-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/org-".concat(OrgId.BPSUDOST, "&").concat(id.userId)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: __webpack_require__(/*! Assets/svg/BPSU-DOSTOrganizationofScholars.svg */ "./__test__/assets/svg/BPSU-DOSTOrganizationofScholars.svg"),
    alt: "BPSU-DOST Organization of Scholars logo",
    className: "org-logos",
    style: {
      width: "300px"
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "org-row-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "org-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/org-".concat(OrgId.BPSUCSIE, "&").concat(id.userId)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: __webpack_require__(/*! Assets/svg/Care,Save,ImmortalizeEarth.svg */ "./__test__/assets/svg/Care,Save,ImmortalizeEarth.svg"),
    alt: "Care, Save, Immortalize Earth logo",
    className: "org-logos",
    style: {
      width: "300px"
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "org-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/org-".concat(OrgId.BPSUHMD, "&").concat(id.userId)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: __webpack_require__(/*! Assets/svg/HMDiversity.svg */ "./__test__/assets/svg/HMDiversity.svg"),
    alt: "HM Diversity logo",
    className: "org-logos",
    style: {
      width: "300px"
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "org-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/org-".concat(OrgId.BPSUIMOTM, "&").concat(id.userId)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: __webpack_require__(/*! Assets/svg/InnovativeMoversofTourismManagement.svg */ "./__test__/assets/svg/InnovativeMoversofTourismManagement.svg"),
    alt: "Innovative Movers of Tourism Management logo",
    className: "org-logos",
    style: {
      width: "300px"
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "org-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/org-".concat(OrgId.BPSUIOEEOTP, "&").concat(id.userId)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: __webpack_require__(/*! Assets/svg/InstituteofElectronicsEngineersofthePhilippines-BPSUStudentChapter.svg */ "./__test__/assets/svg/InstituteofElectronicsEngineersofthePhilippines-BPSUStudentChapter.svg"),
    alt: "Institute of Electronics Engineers of the Philippines- BPSU Student Chapter logo",
    className: "org-logos",
    style: {
      width: "300px"
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "org-row-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "org-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/org-".concat(OrgId.BPSUIOSIEEOTP, "&").concat(id.userId)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: __webpack_require__(/*! Assets/svg/InstituteofIntegratedElectricalEngineersofthePhilippines,Inc.-BPSUStudentGovernment.svg */ "./__test__/assets/svg/InstituteofIntegratedElectricalEngineersofthePhilippines,Inc.-BPSUStudentGovernment.svg"),
    alt: "Institute of Integrated Electrical Engineers of the Philippines, Inc.- BPSU Student Government logo",
    className: "org-logos",
    style: {
      width: "300px"
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "org-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/org-".concat(OrgId.BPSUPIOCV, "&").concat(id.userId)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: __webpack_require__(/*! Assets/svg/PhilippineInstituteofCivilEngineers-BPSUStudentChapter.svg */ "./__test__/assets/svg/PhilippineInstituteofCivilEngineers-BPSUStudentChapter.svg"),
    alt: "Philippine Institute of Civil Engineers- BPSU Student Chapter logo",
    className: "org-logos",
    style: {
      width: "300px"
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "org-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/org-".concat(OrgId.BPSUPNUSABC, "&").concat(id.userId)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: __webpack_require__(/*! Assets/svg/PhilippineNursingStudentsAssociationBataanChapter.svg */ "./__test__/assets/svg/PhilippineNursingStudentsAssociationBataanChapter.svg"),
    alt: "Philippine Nursing Students Association Bataan Chapter logo",
    className: "org-logos",
    style: {
      width: "300px"
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "org-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/org-".concat(OrgId.BPSUUAOFTPSA, "&").concat(id.userId)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: __webpack_require__(/*! Assets/svg/UnitedArchitectsofthePhilippinesStudentAuxiliary-BPSU.svg */ "./__test__/assets/svg/UnitedArchitectsofthePhilippinesStudentAuxiliary-BPSU.svg"),
    alt: "United Architects of the Philippines Student Auxiliary- BPSU logo",
    className: "org-logos",
    style: {
      width: "300px"
    }
  })))));
}

/***/ }),

/***/ "./__test__/src/pages/organizations/organizations.js":
/*!***********************************************************!*\
  !*** ./__test__/src/pages/organizations/organizations.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _Organizations_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Organizations.jsx */ "./__test__/src/pages/organizations/Organizations.jsx");
/* harmony import */ var _organizations_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organizations.scss */ "./__test__/src/pages/organizations/organizations.scss");



//main jsx



//achor js to html
var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Organizations_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null));

/***/ }),

/***/ "./__test__/common/styles/components/_nameTag.scss":
/*!*********************************************************!*\
  !*** ./__test__/common/styles/components/_nameTag.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./__test__/src/pages/organizations/organizations.scss":
/*!*************************************************************!*\
  !*** ./__test__/src/pages/organizations/organizations.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./__test__/assets/images/pp-icon.png":
/*!********************************************!*\
  !*** ./__test__/assets/images/pp-icon.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "10691648d79aa2f92514.png";

/***/ }),

/***/ "./__test__/assets/svg/AmericanConcreteInstituteofthePhilippines-BPSUStudentChapter.svg":
/*!**********************************************************************************************!*\
  !*** ./__test__/assets/svg/AmericanConcreteInstituteofthePhilippines-BPSUStudentChapter.svg ***!
  \**********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2333849e6646f64c9b8a.svg";

/***/ }),

/***/ "./__test__/assets/svg/AsociaciondeComadronasPeninsulares.svg":
/*!********************************************************************!*\
  !*** ./__test__/assets/svg/AsociaciondeComadronasPeninsulares.svg ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4301b093cd10039677b9.svg";

/***/ }),

/***/ "./__test__/assets/svg/BPSU-DOSTOrganizationofScholars.svg":
/*!*****************************************************************!*\
  !*** ./__test__/assets/svg/BPSU-DOSTOrganizationofScholars.svg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eeabc7db2690596d7ebd.svg";

/***/ }),

/***/ "./__test__/assets/svg/BPSUCollegeRedCrossYouthCouncil.svg":
/*!*****************************************************************!*\
  !*** ./__test__/assets/svg/BPSUCollegeRedCrossYouthCouncil.svg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "10df7b6245ee73db4a28.svg";

/***/ }),

/***/ "./__test__/assets/svg/BPSUMainCampusTriskelion.svg":
/*!**********************************************************!*\
  !*** ./__test__/assets/svg/BPSUMainCampusTriskelion.svg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8232b053906200d8b41.svg";

/***/ }),

/***/ "./__test__/assets/svg/BPSUSocietyofIndustrialEngineeringStudents.svg":
/*!****************************************************************************!*\
  !*** ./__test__/assets/svg/BPSUSocietyofIndustrialEngineeringStudents.svg ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "02732ab29ac39b3eba4b.svg";

/***/ }),

/***/ "./__test__/assets/svg/BPSUSocietyofMechanicalEngineeringStudents.svg":
/*!****************************************************************************!*\
  !*** ./__test__/assets/svg/BPSUSocietyofMechanicalEngineeringStudents.svg ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f8e31b186753a3f9a30.svg";

/***/ }),

/***/ "./__test__/assets/svg/BPSUStudentSocietyonInformationTechnologyEducation.svg":
/*!************************************************************************************!*\
  !*** ./__test__/assets/svg/BPSUStudentSocietyonInformationTechnologyEducation.svg ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b36489aef0231447c1e.svg";

/***/ }),

/***/ "./__test__/assets/svg/Care,Save,ImmortalizeEarth.svg":
/*!************************************************************!*\
  !*** ./__test__/assets/svg/Care,Save,ImmortalizeEarth.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a0b8995999c6ffe911b.svg";

/***/ }),

/***/ "./__test__/assets/svg/HMDiversity.svg":
/*!*********************************************!*\
  !*** ./__test__/assets/svg/HMDiversity.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f7901052b5b14364c364.svg";

/***/ }),

/***/ "./__test__/assets/svg/InnovativeMoversofTourismManagement.svg":
/*!*********************************************************************!*\
  !*** ./__test__/assets/svg/InnovativeMoversofTourismManagement.svg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9ad13d20f036ae22011e.svg";

/***/ }),

/***/ "./__test__/assets/svg/InstituteofElectronicsEngineersofthePhilippines-BPSUStudentChapter.svg":
/*!****************************************************************************************************!*\
  !*** ./__test__/assets/svg/InstituteofElectronicsEngineersofthePhilippines-BPSUStudentChapter.svg ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f87cc9855dea9524b43f.svg";

/***/ }),

/***/ "./__test__/assets/svg/InstituteofIntegratedElectricalEngineersofthePhilippines,Inc.-BPSUStudentGovernment.svg":
/*!*********************************************************************************************************************!*\
  !*** ./__test__/assets/svg/InstituteofIntegratedElectricalEngineersofthePhilippines,Inc.-BPSUStudentGovernment.svg ***!
  \*********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db5f7c00a0a4815e433d.svg";

/***/ }),

/***/ "./__test__/assets/svg/PhilippineInstituteofCivilEngineers-BPSUStudentChapter.svg":
/*!****************************************************************************************!*\
  !*** ./__test__/assets/svg/PhilippineInstituteofCivilEngineers-BPSUStudentChapter.svg ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a68f7a0e66a38d03c77.svg";

/***/ }),

/***/ "./__test__/assets/svg/PhilippineNursingStudentsAssociationBataanChapter.svg":
/*!***********************************************************************************!*\
  !*** ./__test__/assets/svg/PhilippineNursingStudentsAssociationBataanChapter.svg ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f2c970d1a82e2fe6b64.svg";

/***/ }),

/***/ "./__test__/assets/svg/UnitedArchitectsofthePhilippinesStudentAuxiliary-BPSU.svg":
/*!***************************************************************************************!*\
  !*** ./__test__/assets/svg/UnitedArchitectsofthePhilippinesStudentAuxiliary-BPSU.svg ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5953feb5a4609db48a11.svg";

/***/ }),

/***/ "./__test__/assets/svg/approve-icon.svg":
/*!**********************************************!*\
  !*** ./__test__/assets/svg/approve-icon.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "05a8f94d9484c4ad9333.svg";

/***/ }),

/***/ "./__test__/assets/svg/approve-m-icon.svg":
/*!************************************************!*\
  !*** ./__test__/assets/svg/approve-m-icon.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "abf92ac957d8fcf34b37.svg";

/***/ }),

/***/ "./__test__/assets/svg/bpsulogo.svg":
/*!******************************************!*\
  !*** ./__test__/assets/svg/bpsulogo.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "19f7297338aeb1a69f07.svg";

/***/ }),

/***/ "./__test__/assets/svg/dm-icon.svg":
/*!*****************************************!*\
  !*** ./__test__/assets/svg/dm-icon.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9fbf30d99c4899975a6d.svg";

/***/ }),

/***/ "./__test__/assets/svg/org-icon.svg":
/*!******************************************!*\
  !*** ./__test__/assets/svg/org-icon.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "837e7ba09f3ea3762436.svg";

/***/ }),

/***/ "./__test__/assets/svg/org-page-bg.svg":
/*!*********************************************!*\
  !*** ./__test__/assets/svg/org-page-bg.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2ebbfebbe564d545c9da.svg";

/***/ }),

/***/ "./__test__/assets/svg/publish-icon.svg":
/*!**********************************************!*\
  !*** ./__test__/assets/svg/publish-icon.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "11d5a74a8f5df40e8967.svg";

/***/ }),

/***/ "./__test__/assets/svg/submit-icon.svg":
/*!*********************************************!*\
  !*** ./__test__/assets/svg/submit-icon.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/******/ 			"organizations": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_react-dom_client_js","vendors-node_modules_use-immer_dist_use-immer_module_js-node_modules_axios_lib_axios_js"], () => (__webpack_require__("./__test__/src/pages/organizations/organizations.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=organizations.bundle.js.map