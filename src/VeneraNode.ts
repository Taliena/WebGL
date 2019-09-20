import {MathUtils} from "./common/MathUtils";
import {BaseNode} from "./BaseNode";

export class VeneraNode extends BaseNode{
    public children:any;

    public drawInfo:any;
    constructor(programInfo, sphereBufferInfo){
        super();
        this.localMatrix=MathUtils.scaling(0.45,0.45,0.45);
        this.drawInfo = {
            uniforms: {
                u_colorOffset: [1, 0.33, 0, 1],
                u_colorMult:   [0.4, 0.4, 0, 1],
            },
            programInfo: programInfo,
            bufferInfo: sphereBufferInfo,
        };




    }
}