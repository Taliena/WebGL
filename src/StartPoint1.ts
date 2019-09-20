import {MathUtils} from "./common/MathUtils";
import {Primitives} from "./common/Primitives";
import {WebGLUtils} from "./common/WebGLUtils";
import {SunNode} from "./SunNode";
import {SimpleFunctions} from "./common/SimpleFunctions";
import {BaseNode} from "./BaseNode";
import {EarthNode} from "./EarthNode";
import {MoonNode} from "./MoonNode";
import {MercuryNode} from "./MercuryNode";
import {VeneraNode} from "./VeneraNode";
import {MarsNode} from "./MarsNode";
import {Key} from "./Key";



export class StartPoint1{
    public gl: WebGLRenderingContext;
    public programInfo: any;
    public projectionMatrix:any;
    public fieldOfViewRadians:number;
    public aspect:number;
    public cameraMatrix:any;
    public sphereBufferInfo;
    public array:any;
    public sunNode:SunNode;
    public objects:any;
    public objectsToDraw:any;
    public solarSystemNode:BaseNode;
    public time:number=1;
    public earthOrbitNode:BaseNode;
    public moonOrbitNode:BaseNode;
    public earthNode:EarthNode;
    public moonNode:MoonNode;
    public mercuryOrbitNode:BaseNode;
    public mercuryNode:MercuryNode;
    public veneraOrbitNode:BaseNode;
    public veneraNode:VeneraNode;
    public marsOrbitNode:BaseNode;
    public marsNode:MarsNode;
    public x:number=0;
    public y:number=-200;


    public activate(): void {
        this.load();
    }

    public load() {
        this.prepareScene();
    }

    protected prepareScene() {
        let canvas = document.createElement('canvas');
        canvas.id = "canvas";
        canvas.style.width = "900px";
        canvas.style.height = "900px";
        canvas.width = 1100;
        canvas.height = 1100;
        let body = document.getElementsByTagName('body')[0];
        body.appendChild(canvas);

        // Get A WebGL context
        this.gl = canvas.getContext("webgl");
        if (!this.gl) {
            return;
        }

        this.sphereBufferInfo = this.createFlattenedVertices(this.gl, Primitives.createSphereVertices(10, 12, 6));
        this.programInfo = WebGLUtils.createProgramInfo(this.gl, ["3d-vertex-shader", "3d-fragment-shader"]);
       // this.cameraAngleRadians = SimpleFunctions.degToRad(0);
        this.fieldOfViewRadians = SimpleFunctions.degToRad(60);
        //this.cameraHeight = 50;

        this.objectsToDraw = [];
        this.objects = [];

        this.solarSystemNode=new BaseNode();
        this.earthOrbitNode = new BaseNode();
        this.moonOrbitNode = new BaseNode();
        this.earthOrbitNode.localMatrix = MathUtils.translation(50, 0, 0);  // earth orbit 100 units from the sun
        this.moonOrbitNode.localMatrix = MathUtils.translation(10, 0, 0);
        this.mercuryOrbitNode=new BaseNode();
        this.mercuryOrbitNode.localMatrix = MathUtils.translation(15, 0, 0);
        this.veneraOrbitNode=new BaseNode();
        this.veneraOrbitNode.localMatrix = MathUtils.translation(30, 0, 0);
        this.marsOrbitNode=new BaseNode();
        this.marsOrbitNode.localMatrix = MathUtils.translation(70, 0, 0);


        this.sunNode=new SunNode(this.programInfo, this.sphereBufferInfo);
        this.earthNode=new EarthNode(this.programInfo, this.sphereBufferInfo);
        this.moonNode=new MoonNode(this.programInfo, this.sphereBufferInfo);
        this.mercuryNode=new MercuryNode(this.programInfo, this.sphereBufferInfo);
        this.veneraNode=new VeneraNode(this.programInfo, this.sphereBufferInfo);
        this.marsNode=new MarsNode(this.programInfo, this.sphereBufferInfo);


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

        let left = this.keyboard("ArrowLeft"),
            up = this.keyboard("ArrowUp"),
            right = this.keyboard("ArrowRight"),
            down = this.keyboard("ArrowDown");


        //Left arrow key `press` method
        left.press = () => {
            //Change the cat's velocity when the key is pressed
            this.x-=20;

        };

        //Up
        up.press = () => {
            this.y-=20;
        };

        //Right
        right.press = () => {
            this.x+=20;
        };

        //Down
        down.press = () => {
            this.y+=20;
        };







    }

    public drawScene(){
        this.time*=0.5;
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.enable(this.gl.DEPTH_TEST);

        // Clear the canvas AND the depth buffer.
       this.gl.clearColor(0, 0, 0, 1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

        this.aspect=this.gl.canvas.clientWidth / this.gl.canvas.clientHeight;
        this.projectionMatrix=MathUtils.perspective(this.fieldOfViewRadians, this.aspect, 1, 2000);

        let cameraPosition = [this.x, this.y, 0];
        let target = [0, 0, 0];
        let up = [0, 0, 1];
        this.cameraMatrix =MathUtils.lookAt(cameraPosition, target, up);
        var viewMatrix = MathUtils.inverse(this.cameraMatrix);
        var viewProjectionMatrix = MathUtils.multiply(this.projectionMatrix, viewMatrix);


        MathUtils.multiply(MathUtils.yRotation(0.01), this.sunNode.localMatrix, this.sunNode.localMatrix);
        MathUtils.multiply(MathUtils.yRotation(0.01), this.earthOrbitNode.localMatrix, this.earthOrbitNode.localMatrix);
        MathUtils.multiply(MathUtils.yRotation(0.01), this.moonOrbitNode.localMatrix, this.moonOrbitNode.localMatrix);
        MathUtils.multiply(MathUtils.yRotation(0.05), this.mercuryOrbitNode.localMatrix, this.mercuryOrbitNode.localMatrix);
        MathUtils.multiply(MathUtils.yRotation(0.05), this.earthNode.localMatrix, this.earthNode.localMatrix);
        MathUtils.multiply(MathUtils.yRotation(-0.01), this.moonNode.localMatrix, this.moonNode.localMatrix);
        MathUtils.multiply(MathUtils.yRotation(0.017), this.mercuryNode.localMatrix, this.mercuryNode.localMatrix);
        MathUtils.multiply(MathUtils.yRotation(0.017), this.mercuryOrbitNode.localMatrix, this.mercuryOrbitNode.localMatrix);
        MathUtils.multiply(MathUtils.yRotation(0.017), this.veneraNode.localMatrix, this.veneraNode.localMatrix);
        MathUtils.multiply(MathUtils.yRotation(0.03), this.veneraOrbitNode.localMatrix, this.veneraOrbitNode.localMatrix);
        MathUtils.multiply(MathUtils.yRotation(0.017), this.marsNode.localMatrix, this.marsNode.localMatrix);
        MathUtils.multiply(MathUtils.yRotation(0.005), this.marsOrbitNode.localMatrix, this.marsOrbitNode.localMatrix);
        this.solarSystemNode.updateWorldMatrix();

        // Compute all the matrices for rendering
        this.objects.forEach((object)=> {
            object.drawInfo.uniforms.u_matrix = MathUtils.multiply(viewProjectionMatrix, object.worldMatrix);
        });

        // ------ Draw the objects --------

        var lastUsedProgramInfo = null;
        var lastUsedBufferInfo = null;

        this.objectsToDraw.forEach((object)=> {
            var programInfo = object.programInfo;
            var bufferInfo = object.bufferInfo;
            var bindBuffers = false;


           if (programInfo != lastUsedProgramInfo) {
                lastUsedProgramInfo = programInfo;
                this.gl.useProgram(programInfo.program);
                bindBuffers = true;
            }

            // Setup all the needed attributes.
                lastUsedBufferInfo = bufferInfo;
                if (bindBuffers || bufferInfo !== lastUsedBufferInfo) {
                this.setBuffersAndAttributes(this.gl, programInfo, bufferInfo);
            }



            // Set the uniforms.
            this.setUniforms(programInfo, object.uniforms);

            // Draw
            this.gl.drawArrays(this.gl.TRIANGLES, 0, bufferInfo.numElements);
        });
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
        var last;
        return WebGLUtils.createBufferInfoFromArrays(
            gl,
            Primitives.makeRandomVertexColors(
                Primitives.deindexVertices(vertices),
                {
                    vertsPerColor: 1,
                    rand: function(ndx, channel) {
                        if (channel === 0) {
                            last = 128 + Math.random() * 128 | 0;
                        }
                        return channel < 3 ? last : 255;
                    }
                })
        );
    };


    public keyboard(value) {
        let key = new Key();
        key.value = value;
        key.isDown = false;
        key.isUp = true;
        key.press = undefined;
        key.release = undefined;
        //The `downHandler`
        key.downHandler = event => {
            if (event.key === key.value) {
                if (key.isUp && key.press) key.press();
                key.isDown = true;
                key.isUp = false;
                event.preventDefault();
            }
        };

        //The `upHandler`
        key.upHandler = event => {
            if (event.key === key.value) {
                if (key.isDown && key.release) key.release();
                key.isDown = false;
                key.isUp = true;
                event.preventDefault();
            }
        };

        //Attach event listeners
        const downListener = key.downHandler.bind(key);
        const upListener = key.upHandler.bind(key);

        window.addEventListener(
            "keydown", downListener, false
        );
        window.addEventListener(
            "keyup", upListener, false
        );

        // Detach event listeners
        key.unsubscribe = () => {
            window.removeEventListener("keydown", downListener);
            window.removeEventListener("keyup", upListener);
        };

        return key;
    }
}