(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 254:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: ./src/components/NavMenu/NavMenu.module.scss
var NavMenu_module = __webpack_require__(984);
var NavMenu_module_default = /*#__PURE__*/__webpack_require__.n(NavMenu_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: ./public/logoBlanco.png
var logoBlanco = __webpack_require__(436);
;// CONCATENATED MODULE: ./src/components/NavMenu/NavMenu.jsx







const NavMenu = ({
  toggleMenu
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (NavMenu_module_default()).container,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
      id: "menu-mobile",
      className: (NavMenu_module_default()).menuMobile,
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "/",
        onClick: () => toggleMenu(),
        children: "Home"
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "#sectionTwo",
        onClick: () => toggleMenu(),
        children: "What is Kutai"
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "#sectionFour",
        onClick: () => toggleMenu(),
        children: "Nutritional Evaluation"
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "#sectionFive",
        onClick: () => toggleMenu(),
        children: "Technology "
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "#sectionSix",
        onClick: () => toggleMenu(),
        children: "Contact Us"
      }), /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: logoBlanco/* default */.Z,
        alt: "logo"
      })]
    })
  });
};

/* harmony default export */ var NavMenu_NavMenu = (NavMenu);
;// CONCATENATED MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_namespaceObject = require("@fortawesome/free-solid-svg-icons");;
;// CONCATENATED MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_namespaceObject = require("@fortawesome/react-fontawesome");;
// EXTERNAL MODULE: ./src/components/Header/Header.module.scss
var Header_module = __webpack_require__(219);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ./public/logo512.png
var logo512 = __webpack_require__(523);
;// CONCATENATED MODULE: ./src/components/Header/Header.jsx










const Header = () => {
  const {
    0: toggleMenu,
    1: setToggleMenu
  } = (0,external_react_.useState)(false);

  const openMenu = () => {
    const menuMobile = document.getElementById("menu-mobile");

    if (!toggleMenu) {
      menuMobile.classList.remove("closeMenuAnimation");
      menuMobile.classList.add("openMenuAnimation");
    } else {
      menuMobile.classList.remove("openMenuAnimation");
      menuMobile.classList.add("closeMenuAnimation");
    }

    setToggleMenu(!toggleMenu);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    className: (Header_module_default()).header,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Header_module_default()).headerTop,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "EN"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: logo512/* default */.Z,
          alt: "logo kutai",
          href: "/"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Header_module_default()).menu,
        onClick: openMenu,
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
          icon: free_solid_svg_icons_namespaceObject.faBars
        }), /*#__PURE__*/jsx_runtime_.jsx(NavMenu_NavMenu, {
          toggleMenu: () => openMenu()
        })]
      })]
    })
  });
};

/* harmony default export */ var Header_Header = (Header);
// EXTERNAL MODULE: ./src/components/Footer/Footer.module.scss
var Footer_module = __webpack_require__(58);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./src/components/Footer/Footer.jsx




const Footer = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Footer_module_default()).container,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "KutAi: is an Ai powered wuide that helps you taking the best food choices towards a healthier life"
      })
    })
  });
};

/* harmony default export */ var Footer_Footer = (Footer);
;// CONCATENATED MODULE: ./src/components/Layout/Layout.jsx






const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header_Header, {}), children, /*#__PURE__*/jsx_runtime_.jsx(Footer_Footer, {})]
  });
};

/* harmony default export */ var Layout_Layout = (Layout);
;// CONCATENATED MODULE: ./src/pages/_app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Layout_Layout, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 58:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Footer_container__hp1Ra"
};


/***/ }),

/***/ 219:
/***/ (function(module) {

// Exports
module.exports = {
	"header": "Header_header__fqqrS",
	"headerTop": "Header_headerTop__2NUIN",
	"menu": "Header_menu__2UZfd"
};


/***/ }),

/***/ 984:
/***/ (function(module) {

// Exports
module.exports = {
	"menuMobile": "NavMenu_menuMobile__Jvj0A"
};


/***/ }),

/***/ 273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [597,675,497], function() { return __webpack_exec__(254); });
module.exports = __webpack_exports__;

})();