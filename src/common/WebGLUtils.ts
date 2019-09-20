import gl = pixi.gl;
import {Primitives} from "./Primitives";

export class WebGLUtils{
    static defaultShaderType:any = [
        "VERTEX_SHADER",
        "FRAGMENT_SHADER",
    ];

    public static createAugmentedTypedArray(numComponents, numElements, opt_type?:any) {
        var Type = opt_type || Float32Array;
        return this.augmentTypedArray(new Type(numComponents * numElements), numComponents);
    }

    public static augmentTypedArray(typedArray, numComponents) {
        var cursor = 0;
        typedArray.push = function() {
            for (var ii = 0; ii < arguments.length; ++ii) {
                var value = arguments[ii];
                if (value instanceof Array || (value.buffer && value.buffer instanceof ArrayBuffer)) {
                    for (var jj = 0; jj < value.length; ++jj) {
                        typedArray[cursor++] = value[jj];
                    }
                } else {
                    typedArray[cursor++] = value;
                }
            }
        };
        typedArray.reset = function(opt_index) {
            cursor = opt_index || 0;
        };
        typedArray.numComponents = numComponents;
        Object.defineProperty(typedArray, 'numElements', {
            get: function() {
                return this.length / this.numComponents | 0;
            },
        });
        return typedArray;
    }

    public static createBufferInfoFromArrays(gl, arrays) {
        var bufferInfo = {
            attribs: WebGLUtils.createAttribsFromArrays(gl, arrays), numElements:432
        };
        return bufferInfo;
    }

    public static createAttribsFromArrays(gl, arrays) {
        var mapping = this.createMapping(arrays);
        var attribs={};

        Object.keys(mapping).forEach(function(attribName) {
            var bufferName = mapping[attribName];
            var origArray = arrays[bufferName];
            var array = origArray;
            attribs[attribName] = {
                buffer:   WebGLUtils.createBufferFromTypedArray(gl, origArray),
                numComponents: origArray.numComponents || array.numComponents || this.guessNumComponentsFromName(bufferName),
                type:          WebGLUtils.getGLTypeForTypedArray(gl, array),
                normalize:     WebGLUtils.getNormalizationForTypedArray(array),
            };
        });
        return attribs;
    }

    public static createMapping(obj) {
        var mapping = {};
        Object.keys(obj).forEach(function(key) {
            mapping["a_" + key] = key;
        });
        return mapping;
    }


    public static createBufferFromTypedArray(gl, array) {
        var type = gl.ARRAY_BUFFER;
        var buffer = gl.createBuffer();
        gl.bindBuffer(type, buffer);
        gl.bufferData(type, array,  gl.STATIC_DRAW);
        return buffer;
    }

    public static getGLTypeForTypedArray(gl, typedArray) {
        if (typedArray instanceof Int8Array)    { return gl.BYTE; }            // eslint-disable-line
        if (typedArray instanceof Uint8Array)   { return gl.UNSIGNED_BYTE; }   // eslint-disable-line
        if (typedArray instanceof Int16Array)   { return gl.SHORT; }           // eslint-disable-line
        if (typedArray instanceof Uint16Array)  { return gl.UNSIGNED_SHORT; }  // eslint-disable-line
        if (typedArray instanceof Int32Array)   { return gl.INT; }             // eslint-disable-line
        if (typedArray instanceof Uint32Array)  { return gl.UNSIGNED_INT; }    // eslint-disable-line
        if (typedArray instanceof Float32Array) { return gl.FLOAT; }           // eslint-disable-line
        throw "unsupported typed array type";
    }

    public static getNormalizationForTypedArray(typedArray) {
        if (typedArray instanceof Int8Array)    { return true; }  // eslint-disable-line
        if (typedArray instanceof Uint8Array)   { return true; }  // eslint-disable-line
        return false;
    }

    public static createProgramInfo(gl, shaderSources, opt_attribs?:any, opt_locations?:any, opt_errorCallback?:any) {
        shaderSources = shaderSources.map(function(source) {
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
    }

    public static createProgramFromSources(
        gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
        var shaders = [];
        for (var ii = 0; ii < shaderSources.length; ++ii) {
            shaders.push(WebGLUtils.loadShader(
                gl, shaderSources[ii], gl[WebGLUtils.defaultShaderType[ii]], opt_errorCallback));
        }
        return WebGLUtils.createProgram(gl, shaders, opt_attribs, opt_locations, opt_errorCallback);
    }

    public static createUniformSetters(gl, program) {
        var textureUnit = 0;
        var uniformSetters = { };
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
    }

    public static createUniformSetter(program, uniformInfo, gl) {
        var location = gl.getUniformLocation(program, uniformInfo.name);
        var type = uniformInfo.type;
        // Check if this uniform is an array
        var isArray = (uniformInfo.size > 1 && uniformInfo.name.substr(-3) === "[0]");
        if (type === gl.FLOAT && isArray) {
            return function(v) {
                gl.uniform1fv(location, v);
            };
        }
        if (type === gl.FLOAT) {
            return function(v) {
                gl.uniform1f(location, v);
            };
        }
        if (type === gl.FLOAT_VEC2) {
            return function(v) {
                gl.uniform2fv(location, v);
            };
        }
        if (type === gl.FLOAT_VEC3) {
            return function(v) {
                gl.uniform3fv(location, v);
            };
        }
        if (type === gl.FLOAT_VEC4) {
            return function(v) {
                gl.uniform4fv(location, v);
            };
        }
        if (type === gl.INT && isArray) {
            return function(v) {
                gl.uniform1iv(location, v);
            };
        }
        if (type === gl.INT) {
            return function(v) {
                gl.uniform1i(location, v);
            };
        }
        if (type === gl.INT_VEC2) {
            return function(v) {
                gl.uniform2iv(location, v);
            };
        }
        if (type === gl.INT_VEC3) {
            return function(v) {
                gl.uniform3iv(location, v);
            };
        }
        if (type === gl.INT_VEC4) {
            return function(v) {
                gl.uniform4iv(location, v);
            };
        }
        if (type === gl.BOOL) {
            return function(v) {
                gl.uniform1iv(location, v);
            };
        }
        if (type === gl.BOOL_VEC2) {
            return function(v) {
                gl.uniform2iv(location, v);
            };
        }
        if (type === gl.BOOL_VEC3) {
            return function(v) {
                gl.uniform3iv(location, v);
            };
        }
        if (type === gl.BOOL_VEC4) {
            return function(v) {
                gl.uniform4iv(location, v);
            };
        }
        if (type === gl.FLOAT_MAT2) {
            return function(v) {
                gl.uniformMatrix2fv(location, false, v);
            };
        }
        if (type === gl.FLOAT_MAT3) {
            return function(v) {
                gl.uniformMatrix3fv(location, false, v);
            };
        }
        if (type === gl.FLOAT_MAT4) {
            return function(v) {
                gl.uniformMatrix4fv(location, false, v);
            };
        }

    }





    public static createAttributeSetters(gl, program) {
        var attribSetters = {
        };

        function createAttribSetter(index) {
            return function(b) {
                gl.bindBuffer(gl.ARRAY_BUFFER, b.buffer);
                gl.enableVertexAttribArray(index);
                gl.vertexAttribPointer(
                    index, b.numComponents || b.size, b.type || gl.FLOAT, b.normalize || false, b.stride || 0, b.offset || 0);
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
    }

    public static loadShader(gl, shaderSource, shaderType, opt_errorCallback) {
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
    }

        public static createProgram(
            gl, shaders, opt_attribs, opt_locations, opt_errorCallback) {
            var errFn = opt_errorCallback;
            var program = gl.createProgram();
            shaders.forEach(function(shader) {
                gl.attachShader(program, shader);
            });
            if (opt_attribs) {
                opt_attribs.forEach(function(attrib, ndx) {
                    gl.bindAttribLocation(
                        program,
                        opt_locations ? opt_locations[ndx] : ndx,
                        attrib);
                });
            }
            gl.linkProgram(program);

            // Check the link status
            var linked = gl.getProgramParameter(program, gl.LINK_STATUS);

            return program;
        }

    protected setBuffersAndAttributes(gl, setters, buffers) {
        WebGLUtils.setAttributes(setters, buffers.attribs);
        if (buffers.indices) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
        }
    }

    public static setAttributes(setters, attribs) {
        setters = setters.attribSetters || setters;
        Object.keys(attribs).forEach(function(name) {
            var setter = setters[name];
            if (setter) {
                setter(attribs[name]);
            }
        });
    }

    public static setUniforms(setters, values) {
        setters = setters.uniformSetters || setters;
        Object.keys(values).forEach(function(name) {
            var setter = setters[name];
            if (setter) {
                setter(values[name]);
            }
        });
    }

    public static createFlattenedVertices (gl, vertices) {
        return WebGLUtils.createBufferInfoFromArrays(
            gl,
            Primitives.makeRandomVertexColors(
                Primitives.deindexVertices(vertices),
                {
                    vertsPerColor: 6,
                    rand: function(ndx, channel) {
                        return channel < 3 ? ((128 + Math.random() * 128) | 0) : 255;
                    }
                })
        );
    };








}