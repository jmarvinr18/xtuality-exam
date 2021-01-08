(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/UpdateCreateStream.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/UpdateCreateStream.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/stream */ "./resources/js/api/stream.js");
/* harmony import */ var _api_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/video */ "./resources/js/api/video.js");
/* harmony import */ var vue_datetime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-datetime */ "./node_modules/vue-datetime/dist/vue-datetime.js");
/* harmony import */ var vue_datetime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_datetime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_datetime_dist_vue_datetime_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-datetime/dist/vue-datetime.css */ "./node_modules/vue-datetime/dist/vue-datetime.css");
/* harmony import */ var vue_datetime_dist_vue_datetime_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_datetime_dist_vue_datetime_css__WEBPACK_IMPORTED_MODULE_5__);


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





/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      videoObj: [],
      caption: '',
      datetime: ''
    };
  },
  computed: {
    user_id: {
      get: function get() {
        return this.$store.state.user.userData.id;
      }
    }
  },
  components: {
    Datetime: vue_datetime__WEBPACK_IMPORTED_MODULE_3__["Datetime"]
  },
  mounted: function mounted() {
    this.insertAttribute();
    this.getStream();
  },
  methods: {
    insertAttribute: function insertAttribute() {
      document.getElementById('datepicker').setAttribute("placeholder", "MM/DD/YYYY hh:mm:ss am/pm");
    },
    getStream: function getStream() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var video_id, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                video_id = _this.$route.params.id;
                _context.next = 3;
                return _api_video__WEBPACK_IMPORTED_MODULE_2__["default"].getVideoById(video_id);

              case 3:
                response = _context.sent;
                _this.videoObj = response.data;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    createNewStream: function createNewStream() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var video_id, streamObj, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                video_id = _this2.$route.params.id;
                streamObj = {
                  caption: _this2.caption,
                  datetime: moment__WEBPACK_IMPORTED_MODULE_4___default()(_this2.datetime).format('YYYY/MM/DD hh:mm:ss')
                };
                _context2.next = 4;
                return _api_stream__WEBPACK_IMPORTED_MODULE_1__["default"].createStream(_this2.user_id, video_id, streamObj);

              case 4:
                response = _context2.sent;

                if (response.status === 200) {
                  _this2.$router.push("/video-details/".concat(video_id));
                }

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/UpdateCreateStream.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/UpdateCreateStream.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.image-container{\n    padding: 50px;\n}\n.image-container img{\n    height: 100%;\n    width: 100%;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n#datepicker{\n    padding: 10px;\n    width: 100%;\n    border: 1px solid #ced4da;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af 2": "./node_modules/moment/locale/af 2.js",
	"./af 2.js": "./node_modules/moment/locale/af 2.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar 2": "./node_modules/moment/locale/ar 2.js",
	"./ar 2.js": "./node_modules/moment/locale/ar 2.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz 2": "./node_modules/moment/locale/ar-dz 2.js",
	"./ar-dz 2.js": "./node_modules/moment/locale/ar-dz 2.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw 2": "./node_modules/moment/locale/ar-kw 2.js",
	"./ar-kw 2.js": "./node_modules/moment/locale/ar-kw 2.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly 2": "./node_modules/moment/locale/ar-ly 2.js",
	"./ar-ly 2.js": "./node_modules/moment/locale/ar-ly 2.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma 2": "./node_modules/moment/locale/ar-ma 2.js",
	"./ar-ma 2.js": "./node_modules/moment/locale/ar-ma 2.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa 2": "./node_modules/moment/locale/ar-sa 2.js",
	"./ar-sa 2.js": "./node_modules/moment/locale/ar-sa 2.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn 2": "./node_modules/moment/locale/ar-tn 2.js",
	"./ar-tn 2.js": "./node_modules/moment/locale/ar-tn 2.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az 2": "./node_modules/moment/locale/az 2.js",
	"./az 2.js": "./node_modules/moment/locale/az 2.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be 2": "./node_modules/moment/locale/be 2.js",
	"./be 2.js": "./node_modules/moment/locale/be 2.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg 2": "./node_modules/moment/locale/bg 2.js",
	"./bg 2.js": "./node_modules/moment/locale/bg 2.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm 2": "./node_modules/moment/locale/bm 2.js",
	"./bm 2.js": "./node_modules/moment/locale/bm 2.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn 2": "./node_modules/moment/locale/bn 2.js",
	"./bn 2.js": "./node_modules/moment/locale/bn 2.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd 2": "./node_modules/moment/locale/bn-bd 2.js",
	"./bn-bd 2.js": "./node_modules/moment/locale/bn-bd 2.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo 2": "./node_modules/moment/locale/bo 2.js",
	"./bo 2.js": "./node_modules/moment/locale/bo 2.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br 2": "./node_modules/moment/locale/br 2.js",
	"./br 2.js": "./node_modules/moment/locale/br 2.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs 2": "./node_modules/moment/locale/bs 2.js",
	"./bs 2.js": "./node_modules/moment/locale/bs 2.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca 2": "./node_modules/moment/locale/ca 2.js",
	"./ca 2.js": "./node_modules/moment/locale/ca 2.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs 2": "./node_modules/moment/locale/cs 2.js",
	"./cs 2.js": "./node_modules/moment/locale/cs 2.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv 2": "./node_modules/moment/locale/cv 2.js",
	"./cv 2.js": "./node_modules/moment/locale/cv 2.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy 2": "./node_modules/moment/locale/cy 2.js",
	"./cy 2.js": "./node_modules/moment/locale/cy 2.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da 2": "./node_modules/moment/locale/da 2.js",
	"./da 2.js": "./node_modules/moment/locale/da 2.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de 2": "./node_modules/moment/locale/de 2.js",
	"./de 2.js": "./node_modules/moment/locale/de 2.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at 2": "./node_modules/moment/locale/de-at 2.js",
	"./de-at 2.js": "./node_modules/moment/locale/de-at 2.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch 2": "./node_modules/moment/locale/de-ch 2.js",
	"./de-ch 2.js": "./node_modules/moment/locale/de-ch 2.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv 2": "./node_modules/moment/locale/dv 2.js",
	"./dv 2.js": "./node_modules/moment/locale/dv 2.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el 2": "./node_modules/moment/locale/el 2.js",
	"./el 2.js": "./node_modules/moment/locale/el 2.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au 2": "./node_modules/moment/locale/en-au 2.js",
	"./en-au 2.js": "./node_modules/moment/locale/en-au 2.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca 2": "./node_modules/moment/locale/en-ca 2.js",
	"./en-ca 2.js": "./node_modules/moment/locale/en-ca 2.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb 2": "./node_modules/moment/locale/en-gb 2.js",
	"./en-gb 2.js": "./node_modules/moment/locale/en-gb 2.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie 2": "./node_modules/moment/locale/en-ie 2.js",
	"./en-ie 2.js": "./node_modules/moment/locale/en-ie 2.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il 2": "./node_modules/moment/locale/en-il 2.js",
	"./en-il 2.js": "./node_modules/moment/locale/en-il 2.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in 2": "./node_modules/moment/locale/en-in 2.js",
	"./en-in 2.js": "./node_modules/moment/locale/en-in 2.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz 2": "./node_modules/moment/locale/en-nz 2.js",
	"./en-nz 2.js": "./node_modules/moment/locale/en-nz 2.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg 2": "./node_modules/moment/locale/en-sg 2.js",
	"./en-sg 2.js": "./node_modules/moment/locale/en-sg 2.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo 2": "./node_modules/moment/locale/eo 2.js",
	"./eo 2.js": "./node_modules/moment/locale/eo 2.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es 2": "./node_modules/moment/locale/es 2.js",
	"./es 2.js": "./node_modules/moment/locale/es 2.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do 2": "./node_modules/moment/locale/es-do 2.js",
	"./es-do 2.js": "./node_modules/moment/locale/es-do 2.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx 2": "./node_modules/moment/locale/es-mx 2.js",
	"./es-mx 2.js": "./node_modules/moment/locale/es-mx 2.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us 2": "./node_modules/moment/locale/es-us 2.js",
	"./es-us 2.js": "./node_modules/moment/locale/es-us 2.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et 2": "./node_modules/moment/locale/et 2.js",
	"./et 2.js": "./node_modules/moment/locale/et 2.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu 2": "./node_modules/moment/locale/eu 2.js",
	"./eu 2.js": "./node_modules/moment/locale/eu 2.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa 2": "./node_modules/moment/locale/fa 2.js",
	"./fa 2.js": "./node_modules/moment/locale/fa 2.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi 2": "./node_modules/moment/locale/fi 2.js",
	"./fi 2.js": "./node_modules/moment/locale/fi 2.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil 2": "./node_modules/moment/locale/fil 2.js",
	"./fil 2.js": "./node_modules/moment/locale/fil 2.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo 2": "./node_modules/moment/locale/fo 2.js",
	"./fo 2.js": "./node_modules/moment/locale/fo 2.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr 2": "./node_modules/moment/locale/fr 2.js",
	"./fr 2.js": "./node_modules/moment/locale/fr 2.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca 2": "./node_modules/moment/locale/fr-ca 2.js",
	"./fr-ca 2.js": "./node_modules/moment/locale/fr-ca 2.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch 2": "./node_modules/moment/locale/fr-ch 2.js",
	"./fr-ch 2.js": "./node_modules/moment/locale/fr-ch 2.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy 2": "./node_modules/moment/locale/fy 2.js",
	"./fy 2.js": "./node_modules/moment/locale/fy 2.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga 2": "./node_modules/moment/locale/ga 2.js",
	"./ga 2.js": "./node_modules/moment/locale/ga 2.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd 2": "./node_modules/moment/locale/gd 2.js",
	"./gd 2.js": "./node_modules/moment/locale/gd 2.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl 2": "./node_modules/moment/locale/gl 2.js",
	"./gl 2.js": "./node_modules/moment/locale/gl 2.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva 2": "./node_modules/moment/locale/gom-deva 2.js",
	"./gom-deva 2.js": "./node_modules/moment/locale/gom-deva 2.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn 2": "./node_modules/moment/locale/gom-latn 2.js",
	"./gom-latn 2.js": "./node_modules/moment/locale/gom-latn 2.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu 2": "./node_modules/moment/locale/gu 2.js",
	"./gu 2.js": "./node_modules/moment/locale/gu 2.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he 2": "./node_modules/moment/locale/he 2.js",
	"./he 2.js": "./node_modules/moment/locale/he 2.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi 2": "./node_modules/moment/locale/hi 2.js",
	"./hi 2.js": "./node_modules/moment/locale/hi 2.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr 2": "./node_modules/moment/locale/hr 2.js",
	"./hr 2.js": "./node_modules/moment/locale/hr 2.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu 2": "./node_modules/moment/locale/hu 2.js",
	"./hu 2.js": "./node_modules/moment/locale/hu 2.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am 2": "./node_modules/moment/locale/hy-am 2.js",
	"./hy-am 2.js": "./node_modules/moment/locale/hy-am 2.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id 2": "./node_modules/moment/locale/id 2.js",
	"./id 2.js": "./node_modules/moment/locale/id 2.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is 2": "./node_modules/moment/locale/is 2.js",
	"./is 2.js": "./node_modules/moment/locale/is 2.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it 2": "./node_modules/moment/locale/it 2.js",
	"./it 2.js": "./node_modules/moment/locale/it 2.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch 2": "./node_modules/moment/locale/it-ch 2.js",
	"./it-ch 2.js": "./node_modules/moment/locale/it-ch 2.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja 2": "./node_modules/moment/locale/ja 2.js",
	"./ja 2.js": "./node_modules/moment/locale/ja 2.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv 2": "./node_modules/moment/locale/jv 2.js",
	"./jv 2.js": "./node_modules/moment/locale/jv 2.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka 2": "./node_modules/moment/locale/ka 2.js",
	"./ka 2.js": "./node_modules/moment/locale/ka 2.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk 2": "./node_modules/moment/locale/kk 2.js",
	"./kk 2.js": "./node_modules/moment/locale/kk 2.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km 2": "./node_modules/moment/locale/km 2.js",
	"./km 2.js": "./node_modules/moment/locale/km 2.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn 2": "./node_modules/moment/locale/kn 2.js",
	"./kn 2.js": "./node_modules/moment/locale/kn 2.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko 2": "./node_modules/moment/locale/ko 2.js",
	"./ko 2.js": "./node_modules/moment/locale/ko 2.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku 2": "./node_modules/moment/locale/ku 2.js",
	"./ku 2.js": "./node_modules/moment/locale/ku 2.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky 2": "./node_modules/moment/locale/ky 2.js",
	"./ky 2.js": "./node_modules/moment/locale/ky 2.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb 2": "./node_modules/moment/locale/lb 2.js",
	"./lb 2.js": "./node_modules/moment/locale/lb 2.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo 2": "./node_modules/moment/locale/lo 2.js",
	"./lo 2.js": "./node_modules/moment/locale/lo 2.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt 2": "./node_modules/moment/locale/lt 2.js",
	"./lt 2.js": "./node_modules/moment/locale/lt 2.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv 2": "./node_modules/moment/locale/lv 2.js",
	"./lv 2.js": "./node_modules/moment/locale/lv 2.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me 2": "./node_modules/moment/locale/me 2.js",
	"./me 2.js": "./node_modules/moment/locale/me 2.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi 2": "./node_modules/moment/locale/mi 2.js",
	"./mi 2.js": "./node_modules/moment/locale/mi 2.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk 2": "./node_modules/moment/locale/mk 2.js",
	"./mk 2.js": "./node_modules/moment/locale/mk 2.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml 2": "./node_modules/moment/locale/ml 2.js",
	"./ml 2.js": "./node_modules/moment/locale/ml 2.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn 2": "./node_modules/moment/locale/mn 2.js",
	"./mn 2.js": "./node_modules/moment/locale/mn 2.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr 2": "./node_modules/moment/locale/mr 2.js",
	"./mr 2.js": "./node_modules/moment/locale/mr 2.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms 2": "./node_modules/moment/locale/ms 2.js",
	"./ms 2.js": "./node_modules/moment/locale/ms 2.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my 2": "./node_modules/moment/locale/ms-my 2.js",
	"./ms-my 2.js": "./node_modules/moment/locale/ms-my 2.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt 2": "./node_modules/moment/locale/mt 2.js",
	"./mt 2.js": "./node_modules/moment/locale/mt 2.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my 2": "./node_modules/moment/locale/my 2.js",
	"./my 2.js": "./node_modules/moment/locale/my 2.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb 2": "./node_modules/moment/locale/nb 2.js",
	"./nb 2.js": "./node_modules/moment/locale/nb 2.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne 2": "./node_modules/moment/locale/ne 2.js",
	"./ne 2.js": "./node_modules/moment/locale/ne 2.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl 2": "./node_modules/moment/locale/nl 2.js",
	"./nl 2.js": "./node_modules/moment/locale/nl 2.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be 2": "./node_modules/moment/locale/nl-be 2.js",
	"./nl-be 2.js": "./node_modules/moment/locale/nl-be 2.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn 2": "./node_modules/moment/locale/nn 2.js",
	"./nn 2.js": "./node_modules/moment/locale/nn 2.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc 2": "./node_modules/moment/locale/oc-lnc 2.js",
	"./oc-lnc 2.js": "./node_modules/moment/locale/oc-lnc 2.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in 2": "./node_modules/moment/locale/pa-in 2.js",
	"./pa-in 2.js": "./node_modules/moment/locale/pa-in 2.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl 2": "./node_modules/moment/locale/pl 2.js",
	"./pl 2.js": "./node_modules/moment/locale/pl 2.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt 2": "./node_modules/moment/locale/pt 2.js",
	"./pt 2.js": "./node_modules/moment/locale/pt 2.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br 2": "./node_modules/moment/locale/pt-br 2.js",
	"./pt-br 2.js": "./node_modules/moment/locale/pt-br 2.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro 2": "./node_modules/moment/locale/ro 2.js",
	"./ro 2.js": "./node_modules/moment/locale/ro 2.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru 2": "./node_modules/moment/locale/ru 2.js",
	"./ru 2.js": "./node_modules/moment/locale/ru 2.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd 2": "./node_modules/moment/locale/sd 2.js",
	"./sd 2.js": "./node_modules/moment/locale/sd 2.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se 2": "./node_modules/moment/locale/se 2.js",
	"./se 2.js": "./node_modules/moment/locale/se 2.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si 2": "./node_modules/moment/locale/si 2.js",
	"./si 2.js": "./node_modules/moment/locale/si 2.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk 2": "./node_modules/moment/locale/sk 2.js",
	"./sk 2.js": "./node_modules/moment/locale/sk 2.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl 2": "./node_modules/moment/locale/sl 2.js",
	"./sl 2.js": "./node_modules/moment/locale/sl 2.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq 2": "./node_modules/moment/locale/sq 2.js",
	"./sq 2.js": "./node_modules/moment/locale/sq 2.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr 2": "./node_modules/moment/locale/sr 2.js",
	"./sr 2.js": "./node_modules/moment/locale/sr 2.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl 2": "./node_modules/moment/locale/sr-cyrl 2.js",
	"./sr-cyrl 2.js": "./node_modules/moment/locale/sr-cyrl 2.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss 2": "./node_modules/moment/locale/ss 2.js",
	"./ss 2.js": "./node_modules/moment/locale/ss 2.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv 2": "./node_modules/moment/locale/sv 2.js",
	"./sv 2.js": "./node_modules/moment/locale/sv 2.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw 2": "./node_modules/moment/locale/sw 2.js",
	"./sw 2.js": "./node_modules/moment/locale/sw 2.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta 2": "./node_modules/moment/locale/ta 2.js",
	"./ta 2.js": "./node_modules/moment/locale/ta 2.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te 2": "./node_modules/moment/locale/te 2.js",
	"./te 2.js": "./node_modules/moment/locale/te 2.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet 2": "./node_modules/moment/locale/tet 2.js",
	"./tet 2.js": "./node_modules/moment/locale/tet 2.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg 2": "./node_modules/moment/locale/tg 2.js",
	"./tg 2.js": "./node_modules/moment/locale/tg 2.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th 2": "./node_modules/moment/locale/th 2.js",
	"./th 2.js": "./node_modules/moment/locale/th 2.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk 2": "./node_modules/moment/locale/tk 2.js",
	"./tk 2.js": "./node_modules/moment/locale/tk 2.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph 2": "./node_modules/moment/locale/tl-ph 2.js",
	"./tl-ph 2.js": "./node_modules/moment/locale/tl-ph 2.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh 2": "./node_modules/moment/locale/tlh 2.js",
	"./tlh 2.js": "./node_modules/moment/locale/tlh 2.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr 2": "./node_modules/moment/locale/tr 2.js",
	"./tr 2.js": "./node_modules/moment/locale/tr 2.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl 2": "./node_modules/moment/locale/tzl 2.js",
	"./tzl 2.js": "./node_modules/moment/locale/tzl 2.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm 2": "./node_modules/moment/locale/tzm 2.js",
	"./tzm 2.js": "./node_modules/moment/locale/tzm 2.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn 2": "./node_modules/moment/locale/tzm-latn 2.js",
	"./tzm-latn 2.js": "./node_modules/moment/locale/tzm-latn 2.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn 2": "./node_modules/moment/locale/ug-cn 2.js",
	"./ug-cn 2.js": "./node_modules/moment/locale/ug-cn 2.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk 2": "./node_modules/moment/locale/uk 2.js",
	"./uk 2.js": "./node_modules/moment/locale/uk 2.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur 2": "./node_modules/moment/locale/ur 2.js",
	"./ur 2.js": "./node_modules/moment/locale/ur 2.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz 2": "./node_modules/moment/locale/uz 2.js",
	"./uz 2.js": "./node_modules/moment/locale/uz 2.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn 2": "./node_modules/moment/locale/uz-latn 2.js",
	"./uz-latn 2.js": "./node_modules/moment/locale/uz-latn 2.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi 2": "./node_modules/moment/locale/vi 2.js",
	"./vi 2.js": "./node_modules/moment/locale/vi 2.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo 2": "./node_modules/moment/locale/x-pseudo 2.js",
	"./x-pseudo 2.js": "./node_modules/moment/locale/x-pseudo 2.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo 2": "./node_modules/moment/locale/yo 2.js",
	"./yo 2.js": "./node_modules/moment/locale/yo 2.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn 2": "./node_modules/moment/locale/zh-cn 2.js",
	"./zh-cn 2.js": "./node_modules/moment/locale/zh-cn 2.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk 2": "./node_modules/moment/locale/zh-hk 2.js",
	"./zh-hk 2.js": "./node_modules/moment/locale/zh-hk 2.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo 2": "./node_modules/moment/locale/zh-mo 2.js",
	"./zh-mo 2.js": "./node_modules/moment/locale/zh-mo 2.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw 2": "./node_modules/moment/locale/zh-tw 2.js",
	"./zh-tw 2.js": "./node_modules/moment/locale/zh-tw 2.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
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
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/UpdateCreateStream.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/UpdateCreateStream.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateCreateStream.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/UpdateCreateStream.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/UpdateCreateStream.vue?vue&type=template&id=725b2a9b&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/UpdateCreateStream.vue?vue&type=template&id=725b2a9b& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
        _c("h2", [_vm._v("Stream This Video")]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group mt-4" }, [
          _c("label", { attrs: { for: "exampleInputEmail1" } }, [
            _vm._v("Video Title")
          ]),
          _vm._v(" "),
          _c("p", [_vm._v(_vm._s(_vm.videoObj.title))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "exampleInputEmail1" } }, [
            _vm._v("About the Stream")
          ]),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.caption,
                expression: "caption"
              }
            ],
            staticClass: "form-control",
            attrs: { rows: "3", placeholder: "Enter ..." },
            domProps: { value: _vm.caption },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.caption = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "form-group" },
          [
            _c("label", { attrs: { for: "exampleInputFile" } }, [
              _vm._v("Schedule")
            ]),
            _vm._v(" "),
            _c("datetime", {
              attrs: {
                title: "test",
                type: "datetime",
                "use12-hour": "",
                "input-id": "datepicker"
              },
              model: {
                value: _vm.datetime,
                callback: function($$v) {
                  _vm.datetime = $$v
                },
                expression: "datetime"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  return _vm.createNewStream()
                }
              }
            },
            [_vm._v("Submit")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-6 mt-3" }, [
        _c("div", { staticClass: "image-container" }, [
          _c("label", { attrs: { for: "exampleInputEmail1" } }, [
            _vm._v("Thumbnail")
          ]),
          _vm._v(" "),
          _c("img", {
            attrs: {
              src: "/images/uploaded-images/" + _vm.videoObj.thumbnail,
              alt: "Video Thumbnail"
            }
          })
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/api/stream.js":
/*!************************************!*\
  !*** ./resources/js/api/stream.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./resources/js/api/api.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  getAllStreamsByVideoID: function getAllStreamsByVideoID(user_id, video_id) {
    return Object(_api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/api/streams?user_id=".concat(user_id, "&video_id=").concat(video_id));
  },
  getAllStreams: function getAllStreams(user_id) {
    return Object(_api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/api/streams?user_id=".concat(user_id));
  },
  getStreamById: function getStreamById(id) {
    return Object(_api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/api/stream/".concat(id));
  },
  createStream: function createStream(user_id, video_id, stream) {
    return new Promise(function (resolve, reject) {
      Object(_api__WEBPACK_IMPORTED_MODULE_0__["default"])().post("/api/stream/".concat(user_id, "/").concat(video_id), {
        stream: stream
      }).then(function (response) {
        return resolve(response);
      })["catch"](function (error) {
        return reject(error);
      });
    });
  }
});

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

/***/ "./resources/js/components/pages/UpdateCreateStream.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/pages/UpdateCreateStream.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UpdateCreateStream_vue_vue_type_template_id_725b2a9b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateCreateStream.vue?vue&type=template&id=725b2a9b& */ "./resources/js/components/pages/UpdateCreateStream.vue?vue&type=template&id=725b2a9b&");
/* harmony import */ var _UpdateCreateStream_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateCreateStream.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/UpdateCreateStream.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UpdateCreateStream_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpdateCreateStream.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/pages/UpdateCreateStream.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UpdateCreateStream_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdateCreateStream_vue_vue_type_template_id_725b2a9b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UpdateCreateStream_vue_vue_type_template_id_725b2a9b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/UpdateCreateStream.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/UpdateCreateStream.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/pages/UpdateCreateStream.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateCreateStream_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateCreateStream.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/UpdateCreateStream.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateCreateStream_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/UpdateCreateStream.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/pages/UpdateCreateStream.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateCreateStream_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateCreateStream.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/UpdateCreateStream.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateCreateStream_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateCreateStream_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateCreateStream_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateCreateStream_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/pages/UpdateCreateStream.vue?vue&type=template&id=725b2a9b&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/pages/UpdateCreateStream.vue?vue&type=template&id=725b2a9b& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateCreateStream_vue_vue_type_template_id_725b2a9b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateCreateStream.vue?vue&type=template&id=725b2a9b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/UpdateCreateStream.vue?vue&type=template&id=725b2a9b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateCreateStream_vue_vue_type_template_id_725b2a9b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateCreateStream_vue_vue_type_template_id_725b2a9b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);