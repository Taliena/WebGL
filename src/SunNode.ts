import {MathUtils} from "./common/MathUtils";
import {BaseNode} from "./BaseNode";

export class SunNode extends BaseNode{
    public children:any;

    public drawInfo:any;
    constructor(programInfo, sphereBufferInfo){
        super();
        this.localMatrix=MathUtils.scaling(1,1,1);
        this.drawInfo = {
            uniforms: {
                u_colorOffset: [0.6, 0.6, 0, 1], // yellow
                u_colorMult:   [0.4, 0.4, 0, 1],
            },
            programInfo: programInfo,
            bufferInfo: sphereBufferInfo,
        };




    }
}