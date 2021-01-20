(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/BeritaUpdate.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/BeritaUpdate.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  props: ["id"],
  data: function data() {
    return {};
  },
  created: function created() {
    this.$store.dispatch('berita/showBerita', this.id);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    berita: function berita(state) {
      return state.berita.berita;
    }
  })),
  methods: {
    updateData: function updateData() {
      var _this = this;

      this.$store.dispatch('berita/updateBerita', this.id).then(function () {
        _this.$router.push({
          name: 'berita-list'
        });

        _this.$store.dispatch('berita/fetchBerita');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/BeritaUpdate.vue?vue&type=template&id=e4972c22&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/BeritaUpdate.vue?vue&type=template&id=e4972c22& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "flex justify-center mt-5" }, [
    _c(
      "form",
      {
        staticClass: "p-3 w-1/2",
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.updateData($event)
          }
        }
      },
      [
        _c("h2", { staticClass: "font-bold" }, [_vm._v("update Data")]),
        _vm._v(" "),
        _c("div", { staticClass: "mb-2" }, [
          _c("label", { staticClass: "block text-gray-700 font-bold mb-2" }, [
            _vm._v("Judul")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.berita.judul,
                expression: "berita.judul"
              }
            ],
            staticClass:
              "appearance-none border-2 border-gray-700 rounded w-full py-2 px-4",
            attrs: { type: "text", placeholder: "Judul" },
            domProps: { value: _vm.berita.judul },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.berita, "judul", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mb-2" }, [
          _c("label", { staticClass: "block text-gray-700 font-bold mb-2" }, [
            _vm._v("Isi")
          ]),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.berita.isi,
                expression: "berita.isi"
              }
            ],
            staticClass:
              "resize-y border-2 border-gray-700 rounded w-full py-2 px-4",
            attrs: { cols: "20", placeholder: "Isi" },
            domProps: { value: _vm.berita.isi },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.berita, "isi", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mb-2" }, [
          _c("label", { staticClass: "block text-gray-700 font-bold mb-2" }, [
            _vm._v("Penulis")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.berita.penulis,
                expression: "berita.penulis"
              }
            ],
            staticClass:
              "resize-y border-2 border-gray-700 rounded w-full py-2 px-4",
            attrs: { type: "text", placeholder: "Penulis" },
            domProps: { value: _vm.berita.penulis },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.berita, "penulis", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mb-2" }, [
          _c("label", { staticClass: "block text-gray-700 font-bold mb-2" }, [
            _vm._v("Date")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.berita.tgl_terbit,
                expression: "berita.tgl_terbit"
              }
            ],
            staticClass:
              " pl-4 pr-10 py-3 leading-none rounded-lg shadow-lg focus:outline-none focus:shadow-outline text-gray-600 font-medium",
            attrs: { type: "datetime" },
            domProps: { value: _vm.berita.tgl_terbit },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.berita, "tgl_terbit", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "bg-blue-500 text-white rounded px-4 py-2" },
          [_vm._v("Simpan")]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/BeritaUpdate.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/BeritaUpdate.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BeritaUpdate_vue_vue_type_template_id_e4972c22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BeritaUpdate.vue?vue&type=template&id=e4972c22& */ "./resources/js/views/BeritaUpdate.vue?vue&type=template&id=e4972c22&");
/* harmony import */ var _BeritaUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BeritaUpdate.vue?vue&type=script&lang=js& */ "./resources/js/views/BeritaUpdate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BeritaUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BeritaUpdate_vue_vue_type_template_id_e4972c22___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BeritaUpdate_vue_vue_type_template_id_e4972c22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/BeritaUpdate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/BeritaUpdate.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/BeritaUpdate.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BeritaUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BeritaUpdate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/BeritaUpdate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BeritaUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/BeritaUpdate.vue?vue&type=template&id=e4972c22&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/BeritaUpdate.vue?vue&type=template&id=e4972c22& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BeritaUpdate_vue_vue_type_template_id_e4972c22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./BeritaUpdate.vue?vue&type=template&id=e4972c22& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/BeritaUpdate.vue?vue&type=template&id=e4972c22&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BeritaUpdate_vue_vue_type_template_id_e4972c22___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BeritaUpdate_vue_vue_type_template_id_e4972c22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);