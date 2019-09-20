import {LoadUtils} from "./common/LoadUtils";
import {MathUtils} from "./common/MathUtils";
import {Primitives} from "./common/Primitives";
import {WebGLUtils} from "./common/WebGLUtils";
import {SunNode} from "./SunNode";


export class StartPoint{
    public fragmentShader:string;
    public vertexShader:string;
    public gl: WebGLRenderingContext;
    public programInfo: any;
    public sphereUniforms:any;
    public projectionMatrix:any;
    public fieldOfViewRadians:number;
    public aspect:number;
    public cameraMatrix:any;
    public viewMatrix;
    public viewProjectionMatrix;
    public sphereTranslation:Array<number>;
    public sphereXRotation:number;
    public sphereYRotation:number;
    public sphereBufferInfo;
    public array:any;
    public sunNode:SunNode;
    public objects:any;
    public objectsToDraw:any;
    public time:number=1;


    public activate(): void {
        this.load();
    }

    public load() {
        /*LoadUtils.loadShader('/assets/shader/basic_fragment.glsl').then(
            (shaderCode: any) => {
                this.fragmentShader = shaderCode;
                LoadUtils.loadShader('/assets/shader/basic_vertex.glsl').then(
                    (shaderCode: any) => {
                        this.vertexShader = shaderCode;
                        this.prepareScene();
                    }
                )
            }
        )*/
        this.prepareScene();

    }

    protected prepareScene() {

        let canvas = document.createElement('canvas');
        canvas.id = "canvas";
        canvas.style.width = "900px";
        canvas.style.height = "900px";
        canvas.width = 900;
        canvas.height = 900;
        let body = document.getElementsByTagName('body')[0];
        body.appendChild(canvas);

        // Get A WebGL context
        this.gl = canvas.getContext("webgl");
        if (!this.gl) {
            return;
        }


        // create GLSL shaders, upload the GLSL source, compile the shaders
        /* var vertexShader = this.createShader(this.gl, this.gl.VERTEX_SHADER, this.vertexShader);
         var fragmentShader = this.createShader(this.gl, this.gl.FRAGMENT_SHADER, this.fragmentShader);*/

        // Link the two shaders into a program
        /*this.program = this.createProgram(this.gl, vertexShader, fragmentShader);*/
        //this.gl.useProgram(this.program);
        this.programInfo = WebGLUtils.createProgramInfo(this.gl, ["3d-vertex-shader", "3d-fragment-shader"]);
        this.sphereBufferInfo = this.createFlattenedVertices(this.gl, Primitives.createSphereVertices(10, 12, 6));

        this.sphereUniforms = {
            u_colorOffset: [0.6, 0.6, 0, 1],
            u_colorMult: [0.8, 0.5, 0.2, 1],
            u_matrix: MathUtils.identity(),
        };
        this.sphereTranslation = [0, 0, 0];
        this.fieldOfViewRadians = 60 * Math.PI / 180;
        this.sunNode=new SunNode(this.programInfo, this.sphereBufferInfo);
        this.objectsToDraw = [this.sunNode.drawInfo];
        this.objects = [this.sunNode];

        //this.drawScene();
        requestAnimationFrame(this.drawScene.bind(this));
    }

    public computeMatrix(viewProjectionMatrix, translation, xRotation, yRotation) {
        var matrix = MathUtils.translate(viewProjectionMatrix,
            translation[0],
            translation[1],
            translation[2]);
        matrix = MathUtils.xRotate(matrix, xRotation);
        return MathUtils.yRotate(matrix, yRotation);
    }


    public drawScene(){
        this.time*=0.0005;
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.aspect=this.gl.canvas.clientWidth / this.gl.canvas.clientHeight;
        this.projectionMatrix=MathUtils.perspective(this.fieldOfViewRadians, this.aspect, 1, 2000);
        let cameraPosition = [0, -200, 0];
        let target = [0, 0, 0];
        let up = [0, 0, 1];
        this.cameraMatrix =MathUtils.lookAt(cameraPosition, target, up);

        // Make a view matrix from the camera matrix.
        this.viewMatrix = MathUtils.inverse(this.cameraMatrix);
        this.viewProjectionMatrix = MathUtils.multiply(this.projectionMatrix, this.viewMatrix);
        this.sphereXRotation =  this.time;
        this.sphereYRotation =  this.time;
        this.sphereUniforms.u_matrix = this.computeMatrix(
            this.viewProjectionMatrix,
            this.sphereTranslation,
            this.sphereXRotation,
            this.sphereYRotation);
        //draw the sphere
        this.gl.useProgram(this.programInfo.program);
        // Setup all the needed attributes.
        this.setBuffersAndAttributes(this.gl, this.programInfo, this.sphereBufferInfo);
        // Set the uniforms we just computed
        this.setUniforms(this.programInfo, this.sphereUniforms);
        this.gl.drawArrays(this.gl.TRIANGLES, 0, 432);


        /*this.gl.useProgram(this.programInfo.program);
        this.setBuffersAndAttributes(this.gl, this.programInfo, this.sphereBufferInfo);
        this.setUniforms(this.programInfo, this.sunNode.drawInfo.uniforms);
        this.gl.drawArrays(this.gl.TRIANGLES, 0, 432);*/



       /* var lastUsedProgramInfo = null;
        var lastUsedBufferInfo = null;


        this.objectsToDraw.forEach((object)=> {
            var programInfo = object.programInfo;
            var bufferInfo = object.bufferInfo;
            var bindBuffers = false;

            if (programInfo !== lastUsedProgramInfo) {
                lastUsedProgramInfo = programInfo;
                this.gl.useProgram(programInfo.program);

                // We have to rebind buffers when changing programs because we
                // only bind buffers the program uses. So if 2 programs use the same
                // bufferInfo but the 1st one uses only positions the when the
                // we switch to the 2nd one some of the attributes will not be on.
                bindBuffers = true;
            }

            // Setup all the needed attributes.
            if (bindBuffers || bufferInfo !== lastUsedBufferInfo) {
                lastUsedBufferInfo = bufferInfo;
                this.setBuffersAndAttributes(this.gl, programInfo, bufferInfo);
            }

            // Set the uniforms.
            this.setUniforms(programInfo, object.uniforms);

            // Draw
            this.gl.drawArrays(this.gl.TRIANGLES, 0, 432);

        });*/



        requestAnimationFrame(this.drawScene.bind(this));
    }

    protected createShader(gl, type, source) {
        var shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        if (success) {
            return shader;
        }
        gl.deleteShader(shader);
    }

    protected createProgram(gl, vertexShader, fragmentShader) {
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
    }
    protected setBuffersAndAttributes(gl, setters, buffers) {
        this.setAttributes(setters, buffers.attribs);
        if (buffers.indices) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
        }
    }

    protected setAttributes(setters, attribs) {
        setters = setters.attribSetters || setters;
        Object.keys(attribs).forEach(function(name) {
            var setter = setters[name];
            if (setter) {
                setter(attribs[name]);
            }
        });
    }

    protected setUniforms(setters, values) {
        setters = setters.uniformSetters || setters;
        Object.keys(values).forEach(function(name) {
            var setter = setters[name];
            if (setter) {
                setter(values[name]);
            }
        });
    }

    protected createFlattenedVertices (gl, vertices) {
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