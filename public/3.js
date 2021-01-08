(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/NewVideo.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/NewVideo.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/video */ "./resources/js/api/video.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

 // import { EventBus } from '../../utils/bus.js'

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      videoObj: {
        title: '',
        subtitle: '',
        description: '',
        file: ''
      },
      image: 'images/video.png',
      inputLabel: 'Choose File'
    };
  },
  computed: {
    user_id: {
      get: function get() {
        return this.$store.state.user.userData.id;
      }
    },
    action: {
      get: function get() {
        return this.$store.state.video.action;
      }
    },
    video_id: {
      get: function get() {
        return this.$store.state.video.videoData.id;
      }
    },
    title: {
      get: function get() {
        return this.$store.state.video.videoData.title;
      }
    },
    subtitle: {
      get: function get() {
        return this.$store.state.video.videoData.subtitle;
      }
    },
    description: {
      get: function get() {
        return this.$store.state.video.videoData.description;
      }
    },
    thumbnail: {
      get: function get() {
        return this.$store.state.video.videoData.thumbnail;
      }
    }
  },
  mounted: function mounted() {
    this.populateForEditing();

    switch (this.action) {
      case 'create':
        this.image = '/images/video.png';
        break;

      case 'edit':
        this.image = "/images/uploaded-images/".concat(this.thumbnail);
        break;

      default:
        break;
    }
  },
  methods: {
    populateForEditing: function populateForEditing() {
      this.videoObj = {
        title: this.title,
        subtitle: this.subtitle,
        description: this.description
      };
      this.image = this.thumbnail;
      this.inputLabel = this.thumbnail;
      console.log(this.image);
    },
    editVideo: function editVideo() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                formData = new FormData();
                formData.append('title', _this.videoObj.title);
                formData.append('subtitle', _this.videoObj.subtitle);
                formData.append('description', _this.videoObj.description);
                formData.append('thumbnail', _this.videoObj.file, _this.videoObj.file.name);
                _context.next = 7;
                return _api_video__WEBPACK_IMPORTED_MODULE_1__["default"].updateVideo(_this.video_id, formData);

              case 7:
                response = _context.sent;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    createNewVideo: function createNewVideo() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                formData = new FormData();
                formData.append('title', _this2.videoObj.title);
                formData.append('subtitle', _this2.videoObj.subtitle);
                formData.append('description', _this2.videoObj.description);
                formData.append('thumbnail', _this2.videoObj.file, _this2.videoObj.file.name);
                _context2.next = 7;
                return _api_video__WEBPACK_IMPORTED_MODULE_1__["default"].createNewVideo(_this2.user_id, formData);

              case 7:
                response = _context2.sent;

                if (response.status === 200) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Video has been uploaded!', 'success');

                  _this2.$router.push('/videos');
                }

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    handleFileUpload: function handleFileUpload(event) {
      var _this3 = this;

      var file = event.target.files[0],
          reader = new FileReader();

      reader.onload = function (e) {
        _this3.image = e.target.result;
      };

      reader.readAsDataURL(file);
      this.videoObj.file = file;
      this.inputLabel = file.name;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/NewVideo.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/NewVideo.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.image-container{\n    padding: 50px;\n}\n.image-container img{\n    height: 100%;\n    width: 100%;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/NewVideo.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/NewVideo.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./NewVideo.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/NewVideo.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/NewVideo.vue?vue&type=template&id=2a61acd1&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/NewVideo.vue?vue&type=template&id=2a61acd1& ***!
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c("form", { staticClass: "col-6  mt-3" }, [
        this.action === "create"
          ? _c("h4", [_vm._v("Upload New Video")])
          : this.action === "edit"
          ? _c("h4", [_vm._v("Edit Video")])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "form-group mt-4" }, [
          _c("label", { attrs: { for: "exampleInputEmail1" } }, [
            _vm._v("Video Title")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.videoObj.title,
                expression: "videoObj.title"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", placeholder: "Enter ..." },
            domProps: { value: _vm.videoObj.title },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.videoObj, "title", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "exampleInputEmail1" } }, [
            _vm._v("Video Subtitle")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.videoObj.subtitle,
                expression: "videoObj.subtitle"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", placeholder: "Enter ..." },
            domProps: { value: _vm.videoObj.subtitle },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.videoObj, "subtitle", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "exampleInputPassword1" } }, [
            _vm._v("Description")
          ]),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.videoObj.description,
                expression: "videoObj.description"
              }
            ],
            staticClass: "form-control",
            attrs: { rows: "3", placeholder: "Enter ..." },
            domProps: { value: _vm.videoObj.description },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.videoObj, "description", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "exampleInputFile" } }, [
            _vm._v("Video Thumbnail")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "input-group" }, [
            _c("div", { staticClass: "custom-file" }, [
              _c("input", {
                ref: "file",
                staticClass: "custom-file-input",
                attrs: { type: "file", id: "exampleInputFile" },
                on: { change: _vm.handleFileUpload }
              }),
              _vm._v(" "),
              _c(
                "label",
                {
                  staticClass: "custom-file-label",
                  attrs: { for: "exampleInputFile" }
                },
                [_vm._v(_vm._s(_vm.inputLabel))]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "exampleInputFile" } }, [
            _vm._v("Video")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "input-group" }, [
            _c("div", { staticClass: "custom-file" }, [
              _c("input", {
                ref: "file",
                staticClass: "custom-file-input",
                attrs: { type: "file", id: "exampleInputFile", disabled: "" },
                on: { change: _vm.handleFileUpload }
              }),
              _vm._v(" "),
              _c(
                "label",
                {
                  staticClass: "custom-file-label",
                  attrs: { for: "exampleInputFile" }
                },
                [_vm._v("Choose file")]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          this.action === "create"
            ? _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.createNewVideo()
                    }
                  }
                },
                [_vm._v("Submit")]
              )
            : this.action === "edit"
            ? _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.editVideo()
                    }
                  }
                },
                [_vm._v("Submit")]
              )
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-6 mt-3" }, [
        _c("div", { staticClass: "image-container" }, [
          _c("label", { attrs: { for: "exampleInputEmail1" } }, [
            _vm._v("Preview")
          ]),
          _vm._v(" "),
          _c("img", { attrs: { src: _vm.image, alt: "Video Thumbnail" } })
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/api/video.js":
/*!***********************************!*\
  !*** ./resources/js/api/video.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./resources/js/api/api.js");

var config = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  getAllVideos: function getAllVideos(id) {
    return Object(_api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("api/videos/".concat(id));
  },
  getVideoById: function getVideoById(id) {
    return Object(_api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/api/videos/details/".concat(id));
  },
  createNewVideo: function createNewVideo(id, videoObj) {
    return new Promise(function (resolve, reject) {
      Object(_api__WEBPACK_IMPORTED_MODULE_0__["default"])().post("api/videos/".concat(id), videoObj, config).then(function (response) {
        return resolve(response);
      })["catch"](function (error) {
        return reject(error);
      });
    });
  },
  updateVideo: function updateVideo(id, videoObj) {
    return new Promise(function (resolve, reject) {
      Object(_api__WEBPACK_IMPORTED_MODULE_0__["default"])().put("api/videos/".concat(id), videoObj, config).then(function (response) {
        return resolve(response);
      })["catch"](function (error) {
        return reject(error);
      });
    });
  },
  deleteVideo: function deleteVideo(id) {
    return new Promise(function (resolve, reject) {
      Object(_api__WEBPACK_IMPORTED_MODULE_0__["default"])()["delete"]("/api/videos/".concat(id)).then(function (response) {
        return resolve(response);
      })["catch"](function () {});
    });
  }
});

/***/ }),

/***/ "./resources/js/components/pages/NewVideo.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/pages/NewVideo.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewVideo_vue_vue_type_template_id_2a61acd1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewVideo.vue?vue&type=template&id=2a61acd1& */ "./resources/js/components/pages/NewVideo.vue?vue&type=template&id=2a61acd1&");
/* harmony import */ var _NewVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewVideo.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/NewVideo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _NewVideo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewVideo.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/pages/NewVideo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NewVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewVideo_vue_vue_type_template_id_2a61acd1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewVideo_vue_vue_type_template_id_2a61acd1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/NewVideo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/NewVideo.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/pages/NewVideo.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NewVideo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/NewVideo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/NewVideo.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/pages/NewVideo.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewVideo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./NewVideo.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/NewVideo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewVideo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewVideo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewVideo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewVideo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/pages/NewVideo.vue?vue&type=template&id=2a61acd1&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/pages/NewVideo.vue?vue&type=template&id=2a61acd1& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewVideo_vue_vue_type_template_id_2a61acd1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NewVideo.vue?vue&type=template&id=2a61acd1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/NewVideo.vue?vue&type=template&id=2a61acd1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewVideo_vue_vue_type_template_id_2a61acd1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewVideo_vue_vue_type_template_id_2a61acd1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);