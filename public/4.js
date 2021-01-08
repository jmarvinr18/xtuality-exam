(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/MainLayout.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/MainLayout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue */ "./resources/js/components/layouts/Navbar.vue");
/* harmony import */ var _Sidebar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue */ "./resources/js/components/layouts/Sidebar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'App',
  components: {
    Navbar: _Navbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Sidebar: _Sidebar_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Navbar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Navbar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    logout: function logout() {
      this.$store.dispatch('user/logout');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Sidebar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Sidebar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    first_name: {
      get: function get() {
        return this.$store.state.user.userData.first_name;
      }
    },
    last_name: {
      get: function get() {
        return this.$store.state.user.userData.last_name;
      }
    },
    image: {
      get: function get() {
        return this.$store.state.user.userData.image;
      }
    }
  },
  methods: {
    goToPage: function goToPage(path) {
      this.$router.push(path);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/MainLayout.vue?vue&type=template&id=7a9c7a98&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/MainLayout.vue?vue&type=template&id=7a9c7a98& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "hold-transition sidebar-mini layout-fixed" },
    [
      _c(
        "div",
        { staticClass: "wrapper" },
        [
          _c("Navbar"),
          _vm._v(" "),
          _c("Sidebar"),
          _vm._v(" "),
          _c("div", { staticClass: "content-wrapper" }, [_c("router-view")], 1)
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Navbar.vue?vue&type=template&id=4d90c681&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Navbar.vue?vue&type=template&id=4d90c681& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    { staticClass: "main-header navbar navbar-expand navbar-dark navbar-navy" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("ul", { staticClass: "navbar-nav ml-auto" }, [
        _vm._m(1),
        _vm._v(" "),
        _vm._m(2),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: {
                "data-widget": "control-sidebar",
                "data-slide": "true",
                href: "javascript:void(0)",
                role: "button"
              },
              on: { click: _vm.logout }
            },
            [_c("i", { staticClass: "fas fa-sign-out-alt" })]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "navbar-nav" }, [
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          {
            staticClass: "nav-link",
            attrs: { "data-widget": "pushmenu", href: "#", role: "button" }
          },
          [_c("i", { staticClass: "fas fa-bars" })]
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item d-none d-sm-inline-block" }, [
        _c("a", { staticClass: "nav-link", attrs: { href: "index3.html" } }, [
          _vm._v("Home")
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item d-none d-sm-inline-block" }, [
        _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
          _vm._v("Contact")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item dropdown" }, [
      _c(
        "a",
        {
          staticClass: "nav-link",
          attrs: { "data-toggle": "dropdown", href: "#" }
        },
        [
          _c("i", { staticClass: "far fa-comments" }),
          _vm._v(" "),
          _c("span", { staticClass: "badge badge-danger navbar-badge" }, [
            _vm._v("3")
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "dropdown-menu dropdown-menu-lg dropdown-menu-right" },
        [
          _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
            _c("div", { staticClass: "media" }, [
              _c("img", {
                staticClass: "img-size-50 mr-3 img-circle",
                attrs: { src: "/images/user1-128x128.jpg", alt: "User Avatar" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "media-body" }, [
                _c("h3", { staticClass: "dropdown-item-title" }, [
                  _vm._v(
                    "\n                    Brad Diesel\n                    "
                  ),
                  _c(
                    "span",
                    { staticClass: "float-right text-sm text-danger" },
                    [_c("i", { staticClass: "fas fa-star" })]
                  )
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-sm" }, [
                  _vm._v("Call me whenever you can...")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-sm text-muted" }, [
                  _c("i", { staticClass: "far fa-clock mr-1" }),
                  _vm._v(" 4 Hours Ago")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "dropdown-divider" }),
          _vm._v(" "),
          _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
            _c("div", { staticClass: "media" }, [
              _c("img", {
                staticClass: "img-size-50 img-circle mr-3",
                attrs: { src: "/images/user8-128x128.jpg", alt: "User Avatar" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "media-body" }, [
                _c("h3", { staticClass: "dropdown-item-title" }, [
                  _vm._v(
                    "\n                    John Pierce\n                    "
                  ),
                  _c(
                    "span",
                    { staticClass: "float-right text-sm text-muted" },
                    [_c("i", { staticClass: "fas fa-star" })]
                  )
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-sm" }, [
                  _vm._v("I got your message bro")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-sm text-muted" }, [
                  _c("i", { staticClass: "far fa-clock mr-1" }),
                  _vm._v(" 4 Hours Ago")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "dropdown-divider" }),
          _vm._v(" "),
          _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
            _c("div", { staticClass: "media" }, [
              _c("img", {
                staticClass: "img-size-50 img-circle mr-3",
                attrs: { src: "/images/user3-128x128.jpg", alt: "User Avatar" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "media-body" }, [
                _c("h3", { staticClass: "dropdown-item-title" }, [
                  _vm._v(
                    "\n                    Nora Silvester\n                    "
                  ),
                  _c(
                    "span",
                    { staticClass: "float-right text-sm text-warning" },
                    [_c("i", { staticClass: "fas fa-star" })]
                  )
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-sm" }, [
                  _vm._v("The subject goes here")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-sm text-muted" }, [
                  _c("i", { staticClass: "far fa-clock mr-1" }),
                  _vm._v(" 4 Hours Ago")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "dropdown-divider" }),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item dropdown-footer",
              attrs: { href: "#" }
            },
            [_vm._v("See All Messages")]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item dropdown" }, [
      _c(
        "a",
        {
          staticClass: "nav-link",
          attrs: { "data-toggle": "dropdown", href: "#" }
        },
        [
          _c("i", { staticClass: "far fa-bell" }),
          _vm._v(" "),
          _c("span", { staticClass: "badge badge-warning navbar-badge" }, [
            _vm._v("15")
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "dropdown-menu dropdown-menu-lg dropdown-menu-right" },
        [
          _c("span", { staticClass: "dropdown-item dropdown-header" }, [
            _vm._v("15 Notifications")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "dropdown-divider" }),
          _vm._v(" "),
          _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
            _c("i", { staticClass: "fas fa-envelope mr-2" }),
            _vm._v(" 4 new messages\n                "),
            _c("span", { staticClass: "float-right text-muted text-sm" }, [
              _vm._v("3 mins")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "dropdown-divider" }),
          _vm._v(" "),
          _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
            _c("i", { staticClass: "fas fa-users mr-2" }),
            _vm._v(" 8 friend requests\n                "),
            _c("span", { staticClass: "float-right text-muted text-sm" }, [
              _vm._v("12 hours")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "dropdown-divider" }),
          _vm._v(" "),
          _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
            _c("i", { staticClass: "fas fa-file mr-2" }),
            _vm._v(" 3 new reports\n                "),
            _c("span", { staticClass: "float-right text-muted text-sm" }, [
              _vm._v("2 days")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "dropdown-divider" }),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item dropdown-footer",
              attrs: { href: "#" }
            },
            [_vm._v("See All Notifications")]
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Sidebar.vue?vue&type=template&id=54bfa98a&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Sidebar.vue?vue&type=template&id=54bfa98a& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "aside",
    { staticClass: "main-sidebar sidebar-dark-primary elevation-4" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "sidebar" }, [
        _c("div", { staticClass: "user-panel mt-3 pb-3 mb-3 d-flex" }, [
          _c("div", { staticClass: "image" }, [
            _c("img", {
              staticClass: "img-circle elevation-2",
              attrs: { src: "/images/" + _vm.image, alt: "User Image" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "info" }, [
            _c("a", { staticClass: "d-block", attrs: { href: "#" } }, [
              _vm._v(_vm._s(_vm.first_name) + " " + _vm._s(_vm.last_name))
            ])
          ])
        ]),
        _vm._v(" "),
        _vm._m(1)
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "brand-link", attrs: { href: "" } }, [
      _c("img", {
        staticClass: "brand-image img-circle elevation-3",
        staticStyle: { opacity: ".8" },
        attrs: { src: "/images/igo-logo-transparent.png", alt: "AdminLTE Logo" }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "brand-text font-weight-light" }, [
        _vm._v("iGO Admin")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "mt-2" }, [
      _c(
        "ul",
        {
          staticClass: "nav nav-pills nav-sidebar flex-column",
          attrs: {
            "data-widget": "treeview",
            role: "menu",
            "data-accordion": "false"
          }
        },
        [
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              { staticClass: "nav-link", attrs: { href: "/dashboard" } },
              [
                _c("i", { staticClass: "nav-icon fas fa-th" }),
                _vm._v(" "),
                _c("p", [_vm._v("\n                Dashboard\n            ")])
              ]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c("a", { staticClass: "nav-link", attrs: { href: "/videos" } }, [
              _c("i", { staticClass: "nav-icon fas fa-table" }),
              _vm._v(" "),
              _c("p", [_vm._v("Videos")])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-header" }, [_vm._v("TOOLS")]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
              _c("i", { staticClass: "nav-icon far fa-envelope" }),
              _vm._v(" "),
              _c("p", [_vm._v("Account Settings")])
            ])
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/layouts/MainLayout.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/layouts/MainLayout.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainLayout_vue_vue_type_template_id_7a9c7a98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainLayout.vue?vue&type=template&id=7a9c7a98& */ "./resources/js/components/layouts/MainLayout.vue?vue&type=template&id=7a9c7a98&");
/* harmony import */ var _MainLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainLayout.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/MainLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MainLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainLayout_vue_vue_type_template_id_7a9c7a98___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MainLayout_vue_vue_type_template_id_7a9c7a98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/MainLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/MainLayout.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/layouts/MainLayout.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MainLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/MainLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/MainLayout.vue?vue&type=template&id=7a9c7a98&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/layouts/MainLayout.vue?vue&type=template&id=7a9c7a98& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainLayout_vue_vue_type_template_id_7a9c7a98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MainLayout.vue?vue&type=template&id=7a9c7a98& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/MainLayout.vue?vue&type=template&id=7a9c7a98&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainLayout_vue_vue_type_template_id_7a9c7a98___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainLayout_vue_vue_type_template_id_7a9c7a98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layouts/Navbar.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/layouts/Navbar.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar_vue_vue_type_template_id_4d90c681___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=4d90c681& */ "./resources/js/components/layouts/Navbar.vue?vue&type=template&id=4d90c681&");
/* harmony import */ var _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navbar_vue_vue_type_template_id_4d90c681___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navbar_vue_vue_type_template_id_4d90c681___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/Navbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/Navbar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/layouts/Navbar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/Navbar.vue?vue&type=template&id=4d90c681&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/layouts/Navbar.vue?vue&type=template&id=4d90c681& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_4d90c681___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=template&id=4d90c681& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Navbar.vue?vue&type=template&id=4d90c681&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_4d90c681___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_4d90c681___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layouts/Sidebar.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/layouts/Sidebar.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar_vue_vue_type_template_id_54bfa98a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=54bfa98a& */ "./resources/js/components/layouts/Sidebar.vue?vue&type=template&id=54bfa98a&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebar_vue_vue_type_template_id_54bfa98a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sidebar_vue_vue_type_template_id_54bfa98a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/Sidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/Sidebar.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/layouts/Sidebar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/Sidebar.vue?vue&type=template&id=54bfa98a&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/layouts/Sidebar.vue?vue&type=template&id=54bfa98a& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_54bfa98a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=template&id=54bfa98a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Sidebar.vue?vue&type=template&id=54bfa98a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_54bfa98a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_54bfa98a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);