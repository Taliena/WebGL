/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MathUtils = /** @class */ (function () {
        function MathUtils() {
        }
        MathUtils.projection = function (width, height, depth) {
            // Note: This matrix flips the Y axis so 0 is at the top.
            return [
                2 / width, 0, 0, 0,
                0, -2 / height, 0, 0,
                0, 0, 2 / depth, 0,
                -1, 1, 0, 1,
            ];
        };
        MathUtils.multiply = function (a, b, dst) {
            dst = dst || new Float32Array(16);
            var b00 = b[0 * 4 + 0];
            var b01 = b[0 * 4 + 1];
            var b02 = b[0 * 4 + 2];
            var b03 = b[0 * 4 + 3];
            var b10 = b[1 * 4 + 0];
            var b11 = b[1 * 4 + 1];
            var b12 = b[1 * 4 + 2];
            var b13 = b[1 * 4 + 3];
            var b20 = b[2 * 4 + 0];
            var b21 = b[2 * 4 + 1];
            var b22 = b[2 * 4 + 2];
            var b23 = b[2 * 4 + 3];
            var b30 = b[3 * 4 + 0];
            var b31 = b[3 * 4 + 1];
            var b32 = b[3 * 4 + 2];
            var b33 = b[3 * 4 + 3];
            var a00 = a[0 * 4 + 0];
            var a01 = a[0 * 4 + 1];
            var a02 = a[0 * 4 + 2];
            var a03 = a[0 * 4 + 3];
            var a10 = a[1 * 4 + 0];
            var a11 = a[1 * 4 + 1];
            var a12 = a[1 * 4 + 2];
            var a13 = a[1 * 4 + 3];
            var a20 = a[2 * 4 + 0];
            var a21 = a[2 * 4 + 1];
            var a22 = a[2 * 4 + 2];
            var a23 = a[2 * 4 + 3];
            var a30 = a[3 * 4 + 0];
            var a31 = a[3 * 4 + 1];
            var a32 = a[3 * 4 + 2];
            var a33 = a[3 * 4 + 3];
            dst[0] = b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30;
            dst[1] = b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31;
            dst[2] = b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32;
            dst[3] = b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33;
            dst[4] = b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30;
            dst[5] = b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31;
            dst[6] = b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32;
            dst[7] = b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33;
            dst[8] = b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30;
            dst[9] = b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31;
            dst[10] = b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32;
            dst[11] = b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33;
            dst[12] = b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30;
            dst[13] = b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31;
            dst[14] = b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32;
            dst[15] = b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33;
            return dst;
        };
        MathUtils.translation = function (tx, ty, tz) {
            return [
                1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                tx, ty, tz, 1,
            ];
        };
        MathUtils.xRotation = function (angleInRadians) {
            var c = Math.cos(angleInRadians);
            var s = Math.sin(angleInRadians);
            return [
                1, 0, 0, 0,
                0, c, s, 0,
                0, -s, c, 0,
                0, 0, 0, 1,
            ];
        };
        MathUtils.yRotation = function (angleInRadians) {
            var c = Math.cos(angleInRadians);
            var s = Math.sin(angleInRadians);
            return [
                c, 0, -s, 0,
                0, 1, 0, 0,
                s, 0, c, 0,
                0, 0, 0, 1,
            ];
        };
        MathUtils.zRotation = function (angleInRadians) {
            var c = Math.cos(angleInRadians);
            var s = Math.sin(angleInRadians);
            return [
                c, s, 0, 0,
                -s, c, 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1,
            ];
        };
        MathUtils.scaling = function (sx, sy, sz) {
            return [
                sx, 0, 0, 0,
                0, sy, 0, 0,
                0, 0, sz, 0,
                0, 0, 0, 1,
            ];
        };
        MathUtils.translate = function (m, tx, ty, tz, dst) {
            dst = dst || new Float32Array(16);
            var m00 = m[0];
            var m01 = m[1];
            var m02 = m[2];
            var m03 = m[3];
            var m10 = m[1 * 4 + 0];
            var m11 = m[1 * 4 + 1];
            var m12 = m[1 * 4 + 2];
            var m13 = m[1 * 4 + 3];
            var m20 = m[2 * 4 + 0];
            var m21 = m[2 * 4 + 1];
            var m22 = m[2 * 4 + 2];
            var m23 = m[2 * 4 + 3];
            var m30 = m[3 * 4 + 0];
            var m31 = m[3 * 4 + 1];
            var m32 = m[3 * 4 + 2];
            var m33 = m[3 * 4 + 3];
            if (m !== dst) {
                dst[0] = m00;
                dst[1] = m01;
                dst[2] = m02;
                dst[3] = m03;
                dst[4] = m10;
                dst[5] = m11;
                dst[6] = m12;
                dst[7] = m13;
                dst[8] = m20;
                dst[9] = m21;
                dst[10] = m22;
                dst[11] = m23;
            }
            dst[12] = m00 * tx + m10 * ty + m20 * tz + m30;
            dst[13] = m01 * tx + m11 * ty + m21 * tz + m31;
            dst[14] = m02 * tx + m12 * ty + m22 * tz + m32;
            dst[15] = m03 * tx + m13 * ty + m23 * tz + m33;
            return dst;
        };
        MathUtils.xRotate = function (m, angleInRadians, dst) {
            // this is the optimized version of
            // return multiply(m, xRotation(angleInRadians), dst);
            dst = dst || new Float32Array(16);
            var m10 = m[4];
            var m11 = m[5];
            var m12 = m[6];
            var m13 = m[7];
            var m20 = m[8];
            var m21 = m[9];
            var m22 = m[10];
            var m23 = m[11];
            var c = Math.cos(angleInRadians);
            var s = Math.sin(angleInRadians);
            dst[4] = c * m10 + s * m20;
            dst[5] = c * m11 + s * m21;
            dst[6] = c * m12 + s * m22;
            dst[7] = c * m13 + s * m23;
            dst[8] = c * m20 - s * m10;
            dst[9] = c * m21 - s * m11;
            dst[10] = c * m22 - s * m12;
            dst[11] = c * m23 - s * m13;
            if (m !== dst) {
                dst[0] = m[0];
                dst[1] = m[1];
                dst[2] = m[2];
                dst[3] = m[3];
                dst[12] = m[12];
                dst[13] = m[13];
                dst[14] = m[14];
                dst[15] = m[15];
            }
            return dst;
        };
        MathUtils.yRotate = function (m, angleInRadians, dst) {
            // this is the optimized verison of
            // return multiply(m, yRotation(angleInRadians), dst);
            dst = dst || new Float32Array(16);
            var m00 = m[0 * 4 + 0];
            var m01 = m[0 * 4 + 1];
            var m02 = m[0 * 4 + 2];
            var m03 = m[0 * 4 + 3];
            var m20 = m[2 * 4 + 0];
            var m21 = m[2 * 4 + 1];
            var m22 = m[2 * 4 + 2];
            var m23 = m[2 * 4 + 3];
            var c = Math.cos(angleInRadians);
            var s = Math.sin(angleInRadians);
            dst[0] = c * m00 - s * m20;
            dst[1] = c * m01 - s * m21;
            dst[2] = c * m02 - s * m22;
            dst[3] = c * m03 - s * m23;
            dst[8] = c * m20 + s * m00;
            dst[9] = c * m21 + s * m01;
            dst[10] = c * m22 + s * m02;
            dst[11] = c * m23 + s * m03;
            if (m !== dst) {
                dst[4] = m[4];
                dst[5] = m[5];
                dst[6] = m[6];
                dst[7] = m[7];
                dst[12] = m[12];
                dst[13] = m[13];
                dst[14] = m[14];
                dst[15] = m[15];
            }
            return dst;
        };
        MathUtils.zRotate = function (m, angleInRadians) {
            return this.multiply(m, this.zRotation(angleInRadians));
        };
        MathUtils.scale = function (m, sx, sy, sz) {
            return this.multiply(m, this.scaling(sx, sy, sz));
        };
        MathUtils.identity = function (dst) {
            dst = dst || new Float32Array(16);
            dst[0] = 1;
            dst[1] = 0;
            dst[2] = 0;
            dst[3] = 0;
            dst[4] = 0;
            dst[5] = 1;
            dst[6] = 0;
            dst[7] = 0;
            dst[8] = 0;
            dst[9] = 0;
            dst[10] = 1;
            dst[11] = 0;
            dst[12] = 0;
            dst[13] = 0;
            dst[14] = 0;
            dst[15] = 1;
            return dst;
        };
        MathUtils.perspective = function (fieldOfViewInRadians, aspect, near, far, dst) {
            dst = dst || new Float32Array(16);
            var f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewInRadians);
            var rangeInv = 1.0 / (near - far);
            dst[0] = f / aspect;
            dst[1] = 0;
            dst[2] = 0;
            dst[3] = 0;
            dst[4] = 0;
            dst[5] = f;
            dst[6] = 0;
            dst[7] = 0;
            dst[8] = 0;
            dst[9] = 0;
            dst[10] = (near + far) * rangeInv;
            dst[11] = -1;
            dst[12] = 0;
            dst[13] = 0;
            dst[14] = near * far * rangeInv * 2;
            dst[15] = 0;
            return dst;
        };
        MathUtils.inverse = function (m) {
            var dst = new Float32Array(16);
            var m00 = m[0 * 4 + 0];
            var m01 = m[0 * 4 + 1];
            var m02 = m[0 * 4 + 2];
            var m03 = m[0 * 4 + 3];
            var m10 = m[1 * 4 + 0];
            var m11 = m[1 * 4 + 1];
            var m12 = m[1 * 4 + 2];
            var m13 = m[1 * 4 + 3];
            var m20 = m[2 * 4 + 0];
            var m21 = m[2 * 4 + 1];
            var m22 = m[2 * 4 + 2];
            var m23 = m[2 * 4 + 3];
            var m30 = m[3 * 4 + 0];
            var m31 = m[3 * 4 + 1];
            var m32 = m[3 * 4 + 2];
            var m33 = m[3 * 4 + 3];
            var tmp_0 = m22 * m33;
            var tmp_1 = m32 * m23;
            var tmp_2 = m12 * m33;
            var tmp_3 = m32 * m13;
            var tmp_4 = m12 * m23;
            var tmp_5 = m22 * m13;
            var tmp_6 = m02 * m33;
            var tmp_7 = m32 * m03;
            var tmp_8 = m02 * m23;
            var tmp_9 = m22 * m03;
            var tmp_10 = m02 * m13;
            var tmp_11 = m12 * m03;
            var tmp_12 = m20 * m31;
            var tmp_13 = m30 * m21;
            var tmp_14 = m10 * m31;
            var tmp_15 = m30 * m11;
            var tmp_16 = m10 * m21;
            var tmp_17 = m20 * m11;
            var tmp_18 = m00 * m31;
            var tmp_19 = m30 * m01;
            var tmp_20 = m00 * m21;
            var tmp_21 = m20 * m01;
            var tmp_22 = m00 * m11;
            var tmp_23 = m10 * m01;
            var t0 = (tmp_0 * m11 + tmp_3 * m21 + tmp_4 * m31) -
                (tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31);
            var t1 = (tmp_1 * m01 + tmp_6 * m21 + tmp_9 * m31) -
                (tmp_0 * m01 + tmp_7 * m21 + tmp_8 * m31);
            var t2 = (tmp_2 * m01 + tmp_7 * m11 + tmp_10 * m31) -
                (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31);
            var t3 = (tmp_5 * m01 + tmp_8 * m11 + tmp_11 * m21) -
                (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21);
            var d = 1.0 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);
            dst[0] = d * t0;
            dst[1] = d * t1;
            dst[2] = d * t2;
            dst[3] = d * t3;
            dst[4] = d * ((tmp_1 * m10 + tmp_2 * m20 + tmp_5 * m30) -
                (tmp_0 * m10 + tmp_3 * m20 + tmp_4 * m30));
            dst[5] = d * ((tmp_0 * m00 + tmp_7 * m20 + tmp_8 * m30) -
                (tmp_1 * m00 + tmp_6 * m20 + tmp_9 * m30));
            dst[6] = d * ((tmp_3 * m00 + tmp_6 * m10 + tmp_11 * m30) -
                (tmp_2 * m00 + tmp_7 * m10 + tmp_10 * m30));
            dst[7] = d * ((tmp_4 * m00 + tmp_9 * m10 + tmp_10 * m20) -
                (tmp_5 * m00 + tmp_8 * m10 + tmp_11 * m20));
            dst[8] = d * ((tmp_12 * m13 + tmp_15 * m23 + tmp_16 * m33) -
                (tmp_13 * m13 + tmp_14 * m23 + tmp_17 * m33));
            dst[9] = d * ((tmp_13 * m03 + tmp_18 * m23 + tmp_21 * m33) -
                (tmp_12 * m03 + tmp_19 * m23 + tmp_20 * m33));
            dst[10] = d * ((tmp_14 * m03 + tmp_19 * m13 + tmp_22 * m33) -
                (tmp_15 * m03 + tmp_18 * m13 + tmp_23 * m33));
            dst[11] = d * ((tmp_17 * m03 + tmp_20 * m13 + tmp_23 * m23) -
                (tmp_16 * m03 + tmp_21 * m13 + tmp_22 * m23));
            dst[12] = d * ((tmp_14 * m22 + tmp_17 * m32 + tmp_13 * m12) -
                (tmp_16 * m32 + tmp_12 * m12 + tmp_15 * m22));
            dst[13] = d * ((tmp_20 * m32 + tmp_12 * m02 + tmp_19 * m22) -
                (tmp_18 * m22 + tmp_21 * m32 + tmp_13 * m02));
            dst[14] = d * ((tmp_18 * m12 + tmp_23 * m32 + tmp_15 * m02) -
                (tmp_22 * m32 + tmp_14 * m02 + tmp_19 * m12));
            dst[15] = d * ((tmp_22 * m22 + tmp_16 * m02 + tmp_21 * m12) -
                (tmp_20 * m12 + tmp_23 * m22 + tmp_17 * m02));
            return dst;
        };
        MathUtils.normalize = function (v, dst) {
            dst = dst || new Float32Array(3);
            var length = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
            // make sure we don't divide by 0.
            if (length > 0.00001) {
                dst[0] = v[0] / length;
                dst[1] = v[1] / length;
                dst[2] = v[2] / length;
            }
            return dst;
        };
        MathUtils.subtractVectors = function (a, b, dst) {
            dst = dst || new Float32Array(3);
            dst[0] = a[0] - b[0];
            dst[1] = a[1] - b[1];
            dst[2] = a[2] - b[2];
            return dst;
        };
        MathUtils.cross = function (a, b, dst) {
            dst = dst || new Float32Array(3);
            dst[0] = a[1] * b[2] - a[2] * b[1];
            dst[1] = a[2] * b[0] - a[0] * b[2];
            dst[2] = a[0] * b[1] - a[1] * b[0];
            return dst;
        };
        MathUtils.lookAt = function (cameraPosition, target, up, dst) {
            dst = dst || new Float32Array(16);
            var zAxis = this.normalize(this.subtractVectors(cameraPosition, target));
            var xAxis = this.normalize(this.cross(up, zAxis));
            var yAxis = this.normalize(this.cross(zAxis, xAxis));
            dst[0] = xAxis[0];
            dst[1] = xAxis[1];
            dst[2] = xAxis[2];
            dst[3] = 0;
            dst[4] = yAxis[0];
            dst[5] = yAxis[1];
            dst[6] = yAxis[2];
            dst[7] = 0;
            dst[8] = zAxis[0];
            dst[9] = zAxis[1];
            dst[10] = zAxis[2];
            dst[11] = 0;
            dst[12] = cameraPosition[0];
            dst[13] = cameraPosition[1];
            dst[14] = cameraPosition[2];
            dst[15] = 1;
            return dst;
        };
        MathUtils.copy = function (src, dst) {
            dst = dst || new Float32Array(16);
            dst[0] = src[0];
            dst[1] = src[1];
            dst[2] = src[2];
            dst[3] = src[3];
            dst[4] = src[4];
            dst[5] = src[5];
            dst[6] = src[6];
            dst[7] = src[7];
            dst[8] = src[8];
            dst[9] = src[9];
            dst[10] = src[10];
            dst[11] = src[11];
            dst[12] = src[12];
            dst[13] = src[13];
            dst[14] = src[14];
            dst[15] = src[15];
            return dst;
        };
        return MathUtils;
    }());
    exports.MathUtils = MathUtils;
    ;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, MathUtils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BaseNode = /** @class */ (function () {
        function BaseNode() {
            this.children = [];
            this.localMatrix = MathUtils_1.MathUtils.identity();
            this.worldMatrix = MathUtils_1.MathUtils.identity();
        }
        BaseNode.prototype.setParent = function (parent) {
            if (this.parent) {
                var ndx = this.parent.children.indexOf(this);
                if (ndx >= 0) {
                    this.parent.children.splice(ndx, 1);
                }
            }
            // Add us to our new parent
            if (parent) {
                parent.children.push(this);
            }
            this.parent = parent;
        };
        BaseNode.prototype.updateWorldMatrix = function (parentWorldMatrix) {
            if (parentWorldMatrix) {
                // a matrix was passed in so do the math
                MathUtils_1.MathUtils.multiply(parentWorldMatrix, this.localMatrix, this.worldMatrix);
            }
            else {
                // no matrix was passed in so just copy local to world
                MathUtils_1.MathUtils.copy(this.localMatrix, this.worldMatrix);
            }
            // now process all the children
            var worldMatrix = this.worldMatrix;
            this.children.forEach(function (child) {
                child.updateWorldMatrix(worldMatrix);
            });
        };
        ;
        return BaseNode;
    }());
    exports.BaseNode = BaseNode;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["__extends"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["__rest"] = __rest;
/* harmony export (immutable) */ __webpack_exports__["__decorate"] = __decorate;
/* harmony export (immutable) */ __webpack_exports__["__param"] = __param;
/* harmony export (immutable) */ __webpack_exports__["__metadata"] = __metadata;
/* harmony export (immutable) */ __webpack_exports__["__awaiter"] = __awaiter;
/* harmony export (immutable) */ __webpack_exports__["__generator"] = __generator;
/* harmony export (immutable) */ __webpack_exports__["__exportStar"] = __exportStar;
/* harmony export (immutable) */ __webpack_exports__["__values"] = __values;
/* harmony export (immutable) */ __webpack_exports__["__read"] = __read;
/* harmony export (immutable) */ __webpack_exports__["__spread"] = __spread;
/* harmony export (immutable) */ __webpack_exports__["__await"] = __await;
/* harmony export (immutable) */ __webpack_exports__["__asyncGenerator"] = __asyncGenerator;
/* harmony export (immutable) */ __webpack_exports__["__asyncDelegator"] = __asyncDelegator;
/* harmony export (immutable) */ __webpack_exports__["__asyncValues"] = __asyncValues;
/* harmony export (immutable) */ __webpack_exports__["__makeTemplateObject"] = __makeTemplateObject;
/* harmony export (immutable) */ __webpack_exports__["__importStar"] = __importStar;
/* harmony export (immutable) */ __webpack_exports__["__importDefault"] = __importDefault;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, WebGLUtils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Primitives = /** @class */ (function () {
        function Primitives() {
        }
        Primitives.createSphereVertices = function (radius, subdivisionsAxis, subdivisionsHeight) {
            if (subdivisionsAxis <= 0 || subdivisionsHeight <= 0) {
                throw Error('subdivisionAxis and subdivisionHeight must be > 0');
            }
            var opt_startLatitudeInRadians = 0;
            var opt_endLatitudeInRadians = Math.PI;
            var opt_startLongitudeInRadians = 0;
            var opt_endLongitudeInRadians = (Math.PI * 2);
            var latRange = opt_endLatitudeInRadians - opt_startLatitudeInRadians;
            var longRange = opt_endLongitudeInRadians - opt_startLongitudeInRadians;
            // We are going to generate our sphere by iterating through its
            // spherical coordinates and generating 2 triangles for each quad on a
            // ring of the sphere.
            var numVertices = (subdivisionsAxis + 1) * (subdivisionsHeight + 1);
            var positions = WebGLUtils_1.WebGLUtils.createAugmentedTypedArray(3, numVertices);
            var normals = WebGLUtils_1.WebGLUtils.createAugmentedTypedArray(3, numVertices);
            var texCoords = WebGLUtils_1.WebGLUtils.createAugmentedTypedArray(2, numVertices);
            // Generate the individual vertices in our vertex buffer.
            for (var y = 0; y <= subdivisionsHeight; y++) {
                for (var x = 0; x <= subdivisionsAxis; x++) {
                    // Generate a vertex based on its spherical coordinates
                    var u = x / subdivisionsAxis;
                    var v = y / subdivisionsHeight;
                    var theta = longRange * u;
                    var phi = latRange * v;
                    var sinTheta = Math.sin(theta);
                    var cosTheta = Math.cos(theta);
                    var sinPhi = Math.sin(phi);
                    var cosPhi = Math.cos(phi);
                    var ux = cosTheta * sinPhi;
                    var uy = cosPhi;
                    var uz = sinTheta * sinPhi;
                    positions.push(radius * ux, radius * uy, radius * uz);
                    normals.push(ux, uy, uz);
                    texCoords.push(1 - u, v);
                }
            }
            var numVertsAround = subdivisionsAxis + 1;
            var indices = WebGLUtils_1.WebGLUtils.createAugmentedTypedArray(3, subdivisionsAxis * subdivisionsHeight * 2, Uint16Array);
            for (x = 0; x < subdivisionsAxis; x++) {
                for (y = 0; y < subdivisionsHeight; y++) {
                    // Make triangle 1 of quad.
                    indices.push((y + 0) * numVertsAround + x, (y + 0) * numVertsAround + x + 1, (y + 1) * numVertsAround + x);
                    // Make triangle 2 of quad.
                    indices.push((y + 1) * numVertsAround + x, (y + 0) * numVertsAround + x + 1, (y + 1) * numVertsAround + x + 1);
                }
            }
            return {
                position: positions,
                normal: normals,
                texcoord: texCoords,
                indices: indices,
            };
        };
        Primitives.makeRandomVertexColors = function (vertices, options) {
            options = options || {};
            var numElements = vertices.position.numElements;
            var vcolors = WebGLUtils_1.WebGLUtils.createAugmentedTypedArray(4, numElements, Uint8Array);
            var ii;
            var rand = options.rand || function (ndx, channel) {
                return channel < 3 ? this.randInt(256) : 255;
            };
            vertices.color = vcolors;
            if (vertices.indices) {
                // just make random colors if index
                for (ii = 0; ii < numElements; ++ii) {
                    vcolors.push(rand(ii, 0), rand(ii, 1), rand(ii, 2), rand(ii, 3));
                }
            }
            else {
                // make random colors per triangle
                var numVertsPerColor = options.vertsPerColor || 3;
                var numSets = numElements / numVertsPerColor;
                for (ii = 0; ii < numSets; ++ii) {
                    var color = [rand(ii, 0), rand(ii, 1), rand(ii, 2), rand(ii, 3)];
                    for (var jj = 0; jj < numVertsPerColor; ++jj) {
                        vcolors.push(color);
                    }
                }
            }
            return vertices;
        };
        Primitives.deindexVertices = function (vertices) {
            var indices = vertices.indices;
            var newVertices = {};
            var numElements = indices.length;
            function expandToUnindexed(channel) {
                var srcBuffer = vertices[channel];
                var numComponents = srcBuffer.numComponents;
                var dstBuffer = WebGLUtils_1.WebGLUtils.createAugmentedTypedArray(numComponents, numElements, srcBuffer.constructor);
                for (var ii = 0; ii < numElements; ++ii) {
                    var ndx = indices[ii];
                    var offset = ndx * numComponents;
                    for (var jj = 0; jj < numComponents; ++jj) {
                        dstBuffer.push(srcBuffer[offset + jj]);
                    }
                }
                newVertices[channel] = dstBuffer;
            }
            Object.keys(vertices).filter(this.allButIndices).forEach(expandToUnindexed);
            return newVertices;
        };
        Primitives.allButIndices = function (name) {
            return name !== "indices";
        };
        return Primitives;
    }());
    exports.Primitives = Primitives;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Primitives_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var WebGLUtils = /** @class */ (function () {
        function WebGLUtils() {
        }
        WebGLUtils.createAugmentedTypedArray = function (numComponents, numElements, opt_type) {
            var Type = opt_type || Float32Array;
            return this.augmentTypedArray(new Type(numComponents * numElements), numComponents);
        };
        WebGLUtils.augmentTypedArray = function (typedArray, numComponents) {
            var cursor = 0;
            typedArray.push = function () {
                for (var ii = 0; ii < arguments.length; ++ii) {
                    var value = arguments[ii];
                    if (value instanceof Array || (value.buffer && value.buffer instanceof ArrayBuffer)) {
                        for (var jj = 0; jj < value.length; ++jj) {
                            typedArray[cursor++] = value[jj];
                        }
                    }
                    else {
                        typedArray[cursor++] = value;
                    }
                }
            };
            typedArray.reset = function (opt_index) {
                cursor = opt_index || 0;
            };
            typedArray.numComponents = numComponents;
            Object.defineProperty(typedArray, 'numElements', {
                get: function () {
                    return this.length / this.numComponents | 0;
                },
            });
            return typedArray;
        };
        WebGLUtils.createBufferInfoFromArrays = function (gl, arrays) {
            var bufferInfo = {
                attribs: WebGLUtils.createAttribsFromArrays(gl, arrays), numElements: 432
            };
            return bufferInfo;
        };
        WebGLUtils.createAttribsFromArrays = function (gl, arrays) {
            var mapping = this.createMapping(arrays);
            var attribs = {};
            Object.keys(mapping).forEach(function (attribName) {
                var bufferName = mapping[attribName];
                var origArray = arrays[bufferName];
                var array = origArray;
                attribs[attribName] = {
                    buffer: WebGLUtils.createBufferFromTypedArray(gl, origArray),
                    numComponents: origArray.numComponents || array.numComponents || this.guessNumComponentsFromName(bufferName),
                    type: WebGLUtils.getGLTypeForTypedArray(gl, array),
                    normalize: WebGLUtils.getNormalizationForTypedArray(array),
                };
            });
            return attribs;
        };
        WebGLUtils.createMapping = function (obj) {
            var mapping = {};
            Object.keys(obj).forEach(function (key) {
                mapping["a_" + key] = key;
            });
            return mapping;
        };
        WebGLUtils.createBufferFromTypedArray = function (gl, array) {
            var type = gl.ARRAY_BUFFER;
            var buffer = gl.createBuffer();
            gl.bindBuffer(type, buffer);
            gl.bufferData(type, array, gl.STATIC_DRAW);
            return buffer;
        };
        WebGLUtils.getGLTypeForTypedArray = function (gl, typedArray) {
            if (typedArray instanceof Int8Array) {
                return gl.BYTE;
            } // eslint-disable-line
            if (typedArray instanceof Uint8Array) {
                return gl.UNSIGNED_BYTE;
            } // eslint-disable-line
            if (typedArray instanceof Int16Array) {
                return gl.SHORT;
            } // eslint-disable-line
            if (typedArray instanceof Uint16Array) {
                return gl.UNSIGNED_SHORT;
            } // eslint-disable-line
            if (typedArray instanceof Int32Array) {
                return gl.INT;
            } // eslint-disable-line
            if (typedArray instanceof Uint32Array) {
                return gl.UNSIGNED_INT;
            } // eslint-disable-line
            if (typedArray instanceof Float32Array) {
                return gl.FLOAT;
            } // eslint-disable-line
            throw "unsupported typed array type";
        };
        WebGLUtils.getNormalizationForTypedArray = function (typedArray) {
            if (typedArray instanceof Int8Array) {
                return true;
            } // eslint-disable-line
            if (typedArray instanceof Uint8Array) {
                return true;
            } // eslint-disable-line
            return false;
        };
        WebGLUtils.createProgramInfo = function (gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
            shaderSources = shaderSources.map(function (source) {
                var script = document.getElementById(source);
                return script ? script.textContent : source;
            });
            var program = WebGLUtils.createProgramFromSources(gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback);
            if (!program) {
                return null;
            }
            var uniformSetters = WebGLUtils.createUniformSetters(gl, program);
            var attribSetters = WebGLUtils.createAttributeSetters(gl, program);
            return {
                program: program,
                uniformSetters: uniformSetters,
                attribSetters: attribSetters,
            };
        };
        WebGLUtils.createProgramFromSources = function (gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
            var shaders = [];
            for (var ii = 0; ii < shaderSources.length; ++ii) {
                shaders.push(WebGLUtils.loadShader(gl, shaderSources[ii], gl[WebGLUtils.defaultShaderType[ii]], opt_errorCallback));
            }
            return WebGLUtils.createProgram(gl, shaders, opt_attribs, opt_locations, opt_errorCallback);
        };
        WebGLUtils.createUniformSetters = function (gl, program) {
            var textureUnit = 0;
            var uniformSetters = {};
            var numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
            for (var ii = 0; ii < numUniforms; ++ii) {
                var uniformInfo = gl.getActiveUniform(program, ii);
                if (!uniformInfo) {
                    break;
                }
                var name = uniformInfo.name;
                // remove the array suffix.
                if (name.substr(-3) === "[0]") {
                    name = name.substr(0, name.length - 3);
                }
                var setter = WebGLUtils.createUniformSetter(program, uniformInfo, gl);
                uniformSetters[name] = setter;
            }
            return uniformSetters;
        };
        WebGLUtils.createUniformSetter = function (program, uniformInfo, gl) {
            var location = gl.getUniformLocation(program, uniformInfo.name);
            var type = uniformInfo.type;
            // Check if this uniform is an array
            var isArray = (uniformInfo.size > 1 && uniformInfo.name.substr(-3) === "[0]");
            if (type === gl.FLOAT && isArray) {
                return function (v) {
                    gl.uniform1fv(location, v);
                };
            }
            if (type === gl.FLOAT) {
                return function (v) {
                    gl.uniform1f(location, v);
                };
            }
            if (type === gl.FLOAT_VEC2) {
                return function (v) {
                    gl.uniform2fv(location, v);
                };
            }
            if (type === gl.FLOAT_VEC3) {
                return function (v) {
                    gl.uniform3fv(location, v);
                };
            }
            if (type === gl.FLOAT_VEC4) {
                return function (v) {
                    gl.uniform4fv(location, v);
                };
            }
            if (type === gl.INT && isArray) {
                return function (v) {
                    gl.uniform1iv(location, v);
                };
            }
            if (type === gl.INT) {
                return function (v) {
                    gl.uniform1i(location, v);
                };
            }
            if (type === gl.INT_VEC2) {
                return function (v) {
                    gl.uniform2iv(location, v);
                };
            }
            if (type === gl.INT_VEC3) {
                return function (v) {
                    gl.uniform3iv(location, v);
                };
            }
            if (type === gl.INT_VEC4) {
                return function (v) {
                    gl.uniform4iv(location, v);
                };
            }
            if (type === gl.BOOL) {
                return function (v) {
                    gl.uniform1iv(location, v);
                };
            }
            if (type === gl.BOOL_VEC2) {
                return function (v) {
                    gl.uniform2iv(location, v);
                };
            }
            if (type === gl.BOOL_VEC3) {
                return function (v) {
                    gl.uniform3iv(location, v);
                };
            }
            if (type === gl.BOOL_VEC4) {
                return function (v) {
                    gl.uniform4iv(location, v);
                };
            }
            if (type === gl.FLOAT_MAT2) {
                return function (v) {
                    gl.uniformMatrix2fv(location, false, v);
                };
            }
            if (type === gl.FLOAT_MAT3) {
                return function (v) {
                    gl.uniformMatrix3fv(location, false, v);
                };
            }
            if (type === gl.FLOAT_MAT4) {
                return function (v) {
                    gl.uniformMatrix4fv(location, false, v);
                };
            }
        };
        WebGLUtils.createAttributeSetters = function (gl, program) {
            var attribSetters = {};
            function createAttribSetter(index) {
                return function (b) {
                    gl.bindBuffer(gl.ARRAY_BUFFER, b.buffer);
                    gl.enableVertexAttribArray(index);
                    gl.vertexAttribPointer(index, b.numComponents || b.size, b.type || gl.FLOAT, b.normalize || false, b.stride || 0, b.offset || 0);
                };
            }
            var numAttribs = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
            for (var ii = 0; ii < numAttribs; ++ii) {
                var attribInfo = gl.getActiveAttrib(program, ii);
                if (!attribInfo) {
                    break;
                }
                var index = gl.getAttribLocation(program, attribInfo.name);
                attribSetters[attribInfo.name] = createAttribSetter(index);
            }
            return attribSetters;
        };
        WebGLUtils.loadShader = function (gl, shaderSource, shaderType, opt_errorCallback) {
            var errFn = opt_errorCallback;
            // Create the shader object
            var shader = gl.createShader(shaderType);
            // Load the shader source
            gl.shaderSource(shader, shaderSource);
            // Compile the shader
            gl.compileShader(shader);
            // Check the compile status
            var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
            return shader;
        };
        WebGLUtils.createProgram = function (gl, shaders, opt_attribs, opt_locations, opt_errorCallback) {
            var errFn = opt_errorCallback;
            var program = gl.createProgram();
            shaders.forEach(function (shader) {
                gl.attachShader(program, shader);
            });
            if (opt_attribs) {
                opt_attribs.forEach(function (attrib, ndx) {
                    gl.bindAttribLocation(program, opt_locations ? opt_locations[ndx] : ndx, attrib);
                });
            }
            gl.linkProgram(program);
            // Check the link status
            var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
            return program;
        };
        WebGLUtils.prototype.setBuffersAndAttributes = function (gl, setters, buffers) {
            WebGLUtils.setAttributes(setters, buffers.attribs);
            if (buffers.indices) {
                gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
            }
        };
        WebGLUtils.setAttributes = function (setters, attribs) {
            setters = setters.attribSetters || setters;
            Object.keys(attribs).forEach(function (name) {
                var setter = setters[name];
                if (setter) {
                    setter(attribs[name]);
                }
            });
        };
        WebGLUtils.setUniforms = function (setters, values) {
            setters = setters.uniformSetters || setters;
            Object.keys(values).forEach(function (name) {
                var setter = setters[name];
                if (setter) {
                    setter(values[name]);
                }
            });
        };
        WebGLUtils.createFlattenedVertices = function (gl, vertices) {
            return WebGLUtils.createBufferInfoFromArrays(gl, Primitives_1.Primitives.makeRandomVertexColors(Primitives_1.Primitives.deindexVertices(vertices), {
                vertsPerColor: 6,
                rand: function (ndx, channel) {
                    return channel < 3 ? ((128 + Math.random() * 128) | 0) : 255;
                }
            }));
        };
        ;
        WebGLUtils.defaultShaderType = [
            "VERTEX_SHADER",
            "FRAGMENT_SHADER",
        ];
        return WebGLUtils;
    }());
    exports.WebGLUtils = WebGLUtils;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, StartPoint1_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    window.onload = function () {
        console.log("test");
        var startPoint = new StartPoint1_1.StartPoint1();
        startPoint.activate();
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0), __webpack_require__(3), __webpack_require__(4), __webpack_require__(7), __webpack_require__(8), __webpack_require__(1), __webpack_require__(9), __webpack_require__(10), __webpack_require__(11), __webpack_require__(12), __webpack_require__(13), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, MathUtils_1, Primitives_1, WebGLUtils_1, SunNode_1, SimpleFunctions_1, BaseNode_1, EarthNode_1, MoonNode_1, MercuryNode_1, VeneraNode_1, MarsNode_1, Key_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StartPoint1 = /** @class */ (function () {
        function StartPoint1() {
            this.time = 1;
            this.x = 0;
            this.y = -200;
        }
        StartPoint1.prototype.activate = function () {
            this.load();
        };
        StartPoint1.prototype.load = function () {
            this.prepareScene();
        };
        StartPoint1.prototype.prepareScene = function () {
            var _this = this;
            var canvas = document.createElement('canvas');
            canvas.id = "canvas";
            canvas.style.width = "900px";
            canvas.style.height = "900px";
            canvas.width = 1100;
            canvas.height = 1100;
            var body = document.getElementsByTagName('body')[0];
            body.appendChild(canvas);
            // Get A WebGL context
            this.gl = canvas.getContext("webgl");
            if (!this.gl) {
                return;
            }
            this.sphereBufferInfo = this.createFlattenedVertices(this.gl, Primitives_1.Primitives.createSphereVertices(10, 12, 6));
            this.programInfo = WebGLUtils_1.WebGLUtils.createProgramInfo(this.gl, ["3d-vertex-shader", "3d-fragment-shader"]);
            // this.cameraAngleRadians = SimpleFunctions.degToRad(0);
            this.fieldOfViewRadians = SimpleFunctions_1.SimpleFunctions.degToRad(60);
            //this.cameraHeight = 50;
            this.objectsToDraw = [];
            this.objects = [];
            this.solarSystemNode = new BaseNode_1.BaseNode();
            this.earthOrbitNode = new BaseNode_1.BaseNode();
            this.moonOrbitNode = new BaseNode_1.BaseNode();
            this.earthOrbitNode.localMatrix = MathUtils_1.MathUtils.translation(50, 0, 0); // earth orbit 100 units from the sun
            this.moonOrbitNode.localMatrix = MathUtils_1.MathUtils.translation(10, 0, 0);
            this.mercuryOrbitNode = new BaseNode_1.BaseNode();
            this.mercuryOrbitNode.localMatrix = MathUtils_1.MathUtils.translation(15, 0, 0);
            this.veneraOrbitNode = new BaseNode_1.BaseNode();
            this.veneraOrbitNode.localMatrix = MathUtils_1.MathUtils.translation(30, 0, 0);
            this.marsOrbitNode = new BaseNode_1.BaseNode();
            this.marsOrbitNode.localMatrix = MathUtils_1.MathUtils.translation(70, 0, 0);
            this.sunNode = new SunNode_1.SunNode(this.programInfo, this.sphereBufferInfo);
            this.earthNode = new EarthNode_1.EarthNode(this.programInfo, this.sphereBufferInfo);
            this.moonNode = new MoonNode_1.MoonNode(this.programInfo, this.sphereBufferInfo);
            this.mercuryNode = new MercuryNode_1.MercuryNode(this.programInfo, this.sphereBufferInfo);
            this.veneraNode = new VeneraNode_1.VeneraNode(this.programInfo, this.sphereBufferInfo);
            this.marsNode = new MarsNode_1.MarsNode(this.programInfo, this.sphereBufferInfo);
            this.sunNode.setParent(this.solarSystemNode);
            this.earthOrbitNode.setParent(this.solarSystemNode);
            this.earthNode.setParent(this.earthOrbitNode);
            this.moonOrbitNode.setParent(this.earthOrbitNode);
            this.moonNode.setParent(this.moonOrbitNode);
            this.mercuryOrbitNode.setParent(this.solarSystemNode);
            this.mercuryNode.setParent(this.mercuryOrbitNode);
            this.veneraOrbitNode.setParent(this.solarSystemNode);
            this.veneraNode.setParent(this.veneraOrbitNode);
            this.marsOrbitNode.setParent(this.solarSystemNode);
            this.marsNode.setParent(this.marsOrbitNode);
            this.objects = [this.sunNode, this.earthNode, this.moonNode, this.mercuryNode, this.veneraNode, this.marsNode];
            this.objectsToDraw = [this.sunNode.drawInfo, this.earthNode.drawInfo, this.moonNode.drawInfo, this.mercuryNode.drawInfo, this.veneraNode.drawInfo, this.marsNode.drawInfo];
            requestAnimationFrame(this.drawScene.bind(this));
            var left = this.keyboard("ArrowLeft"), up = this.keyboard("ArrowUp"), right = this.keyboard("ArrowRight"), down = this.keyboard("ArrowDown");
            //Left arrow key `press` method
            left.press = function () {
                //Change the cat's velocity when the key is pressed
                _this.x -= 20;
            };
            //Up
            up.press = function () {
                _this.y -= 20;
            };
            //Right
            right.press = function () {
                _this.x += 20;
            };
            //Down
            down.press = function () {
                _this.y += 20;
            };
        };
        StartPoint1.prototype.drawScene = function () {
            var _this = this;
            this.time *= 0.5;
            this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
            this.gl.enable(this.gl.CULL_FACE);
            this.gl.enable(this.gl.DEPTH_TEST);
            // Clear the canvas AND the depth buffer.
            this.gl.clearColor(0, 0, 0, 1);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
            this.aspect = this.gl.canvas.clientWidth / this.gl.canvas.clientHeight;
            this.projectionMatrix = MathUtils_1.MathUtils.perspective(this.fieldOfViewRadians, this.aspect, 1, 2000);
            var cameraPosition = [this.x, this.y, 0];
            var target = [0, 0, 0];
            var up = [0, 0, 1];
            this.cameraMatrix = MathUtils_1.MathUtils.lookAt(cameraPosition, target, up);
            var viewMatrix = MathUtils_1.MathUtils.inverse(this.cameraMatrix);
            var viewProjectionMatrix = MathUtils_1.MathUtils.multiply(this.projectionMatrix, viewMatrix);
            MathUtils_1.MathUtils.multiply(MathUtils_1.MathUtils.yRotation(0.01), this.sunNode.localMatrix, this.sunNode.localMatrix);
            MathUtils_1.MathUtils.multiply(MathUtils_1.MathUtils.yRotation(0.01), this.earthOrbitNode.localMatrix, this.earthOrbitNode.localMatrix);
            MathUtils_1.MathUtils.multiply(MathUtils_1.MathUtils.yRotation(0.01), this.moonOrbitNode.localMatrix, this.moonOrbitNode.localMatrix);
            MathUtils_1.MathUtils.multiply(MathUtils_1.MathUtils.yRotation(0.05), this.mercuryOrbitNode.localMatrix, this.mercuryOrbitNode.localMatrix);
            MathUtils_1.MathUtils.multiply(MathUtils_1.MathUtils.yRotation(0.05), this.earthNode.localMatrix, this.earthNode.localMatrix);
            MathUtils_1.MathUtils.multiply(MathUtils_1.MathUtils.yRotation(-0.01), this.moonNode.localMatrix, this.moonNode.localMatrix);
            MathUtils_1.MathUtils.multiply(MathUtils_1.MathUtils.yRotation(0.017), this.mercuryNode.localMatrix, this.mercuryNode.localMatrix);
            MathUtils_1.MathUtils.multiply(MathUtils_1.MathUtils.yRotation(0.017), this.mercuryOrbitNode.localMatrix, this.mercuryOrbitNode.localMatrix);
            MathUtils_1.MathUtils.multiply(MathUtils_1.MathUtils.yRotation(0.017), this.veneraNode.localMatrix, this.veneraNode.localMatrix);
            MathUtils_1.MathUtils.multiply(MathUtils_1.MathUtils.yRotation(0.03), this.veneraOrbitNode.localMatrix, this.veneraOrbitNode.localMatrix);
            MathUtils_1.MathUtils.multiply(MathUtils_1.MathUtils.yRotation(0.017), this.marsNode.localMatrix, this.marsNode.localMatrix);
            MathUtils_1.MathUtils.multiply(MathUtils_1.MathUtils.yRotation(0.005), this.marsOrbitNode.localMatrix, this.marsOrbitNode.localMatrix);
            this.solarSystemNode.updateWorldMatrix();
            // Compute all the matrices for rendering
            this.objects.forEach(function (object) {
                object.drawInfo.uniforms.u_matrix = MathUtils_1.MathUtils.multiply(viewProjectionMatrix, object.worldMatrix);
            });
            // ------ Draw the objects --------
            var lastUsedProgramInfo = null;
            var lastUsedBufferInfo = null;
            this.objectsToDraw.forEach(function (object) {
                var programInfo = object.programInfo;
                var bufferInfo = object.bufferInfo;
                var bindBuffers = false;
                if (programInfo != lastUsedProgramInfo) {
                    lastUsedProgramInfo = programInfo;
                    _this.gl.useProgram(programInfo.program);
                    bindBuffers = true;
                }
                // Setup all the needed attributes.
                lastUsedBufferInfo = bufferInfo;
                if (bindBuffers || bufferInfo !== lastUsedBufferInfo) {
                    _this.setBuffersAndAttributes(_this.gl, programInfo, bufferInfo);
                }
                // Set the uniforms.
                _this.setUniforms(programInfo, object.uniforms);
                // Draw
                _this.gl.drawArrays(_this.gl.TRIANGLES, 0, bufferInfo.numElements);
            });
            requestAnimationFrame(this.drawScene.bind(this));
        };
        StartPoint1.prototype.createShader = function (gl, type, source) {
            var shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
            if (success) {
                return shader;
            }
            gl.deleteShader(shader);
        };
        StartPoint1.prototype.createProgram = function (gl, vertexShader, fragmentShader) {
            var program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            var success = gl.getProgramParameter(program, gl.LINK_STATUS);
            if (success) {
                return program;
            }
            console.log(gl.getProgramInfoLog(program));
            gl.deleteProgram(program);
        };
        StartPoint1.prototype.setBuffersAndAttributes = function (gl, setters, buffers) {
            this.setAttributes(setters, buffers.attribs);
            if (buffers.indices) {
                gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
            }
        };
        StartPoint1.prototype.setAttributes = function (setters, attribs) {
            setters = setters.attribSetters || setters;
            Object.keys(attribs).forEach(function (name) {
                var setter = setters[name];
                if (setter) {
                    setter(attribs[name]);
                }
            });
        };
        StartPoint1.prototype.setUniforms = function (setters, values) {
            setters = setters.uniformSetters || setters;
            Object.keys(values).forEach(function (name) {
                var setter = setters[name];
                if (setter) {
                    setter(values[name]);
                }
            });
        };
        StartPoint1.prototype.createFlattenedVertices = function (gl, vertices) {
            var last;
            return WebGLUtils_1.WebGLUtils.createBufferInfoFromArrays(gl, Primitives_1.Primitives.makeRandomVertexColors(Primitives_1.Primitives.deindexVertices(vertices), {
                vertsPerColor: 1,
                rand: function (ndx, channel) {
                    if (channel === 0) {
                        last = 128 + Math.random() * 128 | 0;
                    }
                    return channel < 3 ? last : 255;
                }
            }));
        };
        ;
        StartPoint1.prototype.keyboard = function (value) {
            var key = new Key_1.Key();
            key.value = value;
            key.isDown = false;
            key.isUp = true;
            key.press = undefined;
            key.release = undefined;
            //The `downHandler`
            key.downHandler = function (event) {
                if (event.key === key.value) {
                    if (key.isUp && key.press)
                        key.press();
                    key.isDown = true;
                    key.isUp = false;
                    event.preventDefault();
                }
            };
            //The `upHandler`
            key.upHandler = function (event) {
                if (event.key === key.value) {
                    if (key.isDown && key.release)
                        key.release();
                    key.isDown = false;
                    key.isUp = true;
                    event.preventDefault();
                }
            };
            //Attach event listeners
            var downListener = key.downHandler.bind(key);
            var upListener = key.upHandler.bind(key);
            window.addEventListener("keydown", downListener, false);
            window.addEventListener("keyup", upListener, false);
            // Detach event listeners
            key.unsubscribe = function () {
                window.removeEventListener("keydown", downListener);
                window.removeEventListener("keyup", upListener);
            };
            return key;
        };
        return StartPoint1;
    }());
    exports.StartPoint1 = StartPoint1;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2), __webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, MathUtils_1, BaseNode_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SunNode = /** @class */ (function (_super) {
        tslib_1.__extends(SunNode, _super);
        function SunNode(programInfo, sphereBufferInfo) {
            var _this = _super.call(this) || this;
            _this.localMatrix = MathUtils_1.MathUtils.scaling(1, 1, 1);
            _this.drawInfo = {
                uniforms: {
                    u_colorOffset: [0.6, 0.6, 0, 1],
                    u_colorMult: [0.4, 0.4, 0, 1],
                },
                programInfo: programInfo,
                bufferInfo: sphereBufferInfo,
            };
            return _this;
        }
        return SunNode;
    }(BaseNode_1.BaseNode));
    exports.SunNode = SunNode;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SimpleFunctions = /** @class */ (function () {
        function SimpleFunctions() {
        }
        SimpleFunctions.degToRad = function (d) {
            return d * Math.PI / 180;
        };
        SimpleFunctions.rand = function (min, max) {
            return Math.random() * (max - min) + min;
        };
        SimpleFunctions.emod = function (x, n) {
            return x >= 0 ? (x % n) : ((n - (-x % n)) % n);
        };
        return SimpleFunctions;
    }());
    exports.SimpleFunctions = SimpleFunctions;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2), __webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, MathUtils_1, BaseNode_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EarthNode = /** @class */ (function (_super) {
        tslib_1.__extends(EarthNode, _super);
        function EarthNode(programInfo, sphereBufferInfo) {
            var _this = _super.call(this) || this;
            _this.localMatrix = MathUtils_1.MathUtils.scaling(0.5, 0.5, 0.5);
            _this.drawInfo = {
                uniforms: {
                    u_colorOffset: [0, 0.5, 0.5, 1],
                    u_colorMult: [0.4, 0.5, 0.2, 1],
                },
                programInfo: programInfo,
                bufferInfo: sphereBufferInfo,
            };
            return _this;
        }
        return EarthNode;
    }(BaseNode_1.BaseNode));
    exports.EarthNode = EarthNode;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2), __webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, MathUtils_1, BaseNode_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MoonNode = /** @class */ (function (_super) {
        tslib_1.__extends(MoonNode, _super);
        function MoonNode(programInfo, sphereBufferInfo) {
            var _this = _super.call(this) || this;
            _this.localMatrix = MathUtils_1.MathUtils.scaling(0.15, 0.15, 0.15);
            _this.drawInfo = {
                uniforms: {
                    u_colorOffset: [0.6, 0.6, 0.6, 1],
                    u_colorMult: [0.1, 0.1, 0.1, 1],
                },
                programInfo: programInfo,
                bufferInfo: sphereBufferInfo,
            };
            return _this;
        }
        return MoonNode;
    }(BaseNode_1.BaseNode));
    exports.MoonNode = MoonNode;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2), __webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, MathUtils_1, BaseNode_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MercuryNode = /** @class */ (function (_super) {
        tslib_1.__extends(MercuryNode, _super);
        function MercuryNode(programInfo, sphereBufferInfo) {
            var _this = _super.call(this) || this;
            _this.localMatrix = MathUtils_1.MathUtils.scaling(0.2, 0.2, 0.2);
            _this.drawInfo = {
                uniforms: {
                    u_colorOffset: [0.6, 0.6, 0.6, 1],
                    u_colorMult: [0.1, 0.1, 0.1, 1],
                },
                programInfo: programInfo,
                bufferInfo: sphereBufferInfo,
            };
            return _this;
        }
        return MercuryNode;
    }(BaseNode_1.BaseNode));
    exports.MercuryNode = MercuryNode;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2), __webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, MathUtils_1, BaseNode_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var VeneraNode = /** @class */ (function (_super) {
        tslib_1.__extends(VeneraNode, _super);
        function VeneraNode(programInfo, sphereBufferInfo) {
            var _this = _super.call(this) || this;
            _this.localMatrix = MathUtils_1.MathUtils.scaling(0.45, 0.45, 0.45);
            _this.drawInfo = {
                uniforms: {
                    u_colorOffset: [1, 0.33, 0, 1],
                    u_colorMult: [0.4, 0.4, 0, 1],
                },
                programInfo: programInfo,
                bufferInfo: sphereBufferInfo,
            };
            return _this;
        }
        return VeneraNode;
    }(BaseNode_1.BaseNode));
    exports.VeneraNode = VeneraNode;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2), __webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, MathUtils_1, BaseNode_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MarsNode = /** @class */ (function (_super) {
        tslib_1.__extends(MarsNode, _super);
        function MarsNode(programInfo, sphereBufferInfo) {
            var _this = _super.call(this) || this;
            _this.localMatrix = MathUtils_1.MathUtils.scaling(0.55, 0.55, 0.55);
            _this.drawInfo = {
                uniforms: {
                    u_colorOffset: [1, 0, 0, 1],
                    u_colorMult: [0.4, 0.5, 0.2, 1],
                },
                programInfo: programInfo,
                bufferInfo: sphereBufferInfo,
            };
            return _this;
        }
        return MarsNode;
    }(BaseNode_1.BaseNode));
    exports.MarsNode = MarsNode;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Key = /** @class */ (function () {
        function Key() {
        }
        //The `downHandler`
        Key.prototype.downHandler = function (event) { };
        ;
        Key.prototype.upHandler = function (event) { };
        ;
        Key.prototype.unsubscribe = function () { };
        ;
        return Key;
    }());
    exports.Key = Key;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })
/******/ ]);
//# sourceMappingURL=game.js.map