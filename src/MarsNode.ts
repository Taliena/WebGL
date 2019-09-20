import {MathUtils} from "./common/MathUtils";
import {BaseNode} from "./BaseNode";

export class MarsNode extends BaseNode{
    public children:any;

    public drawInfo:any;
    constructor(programInfo, sphereBufferInfo){
        super();
        this.localMatrix=MathUtils.scaling(0.55,0.55,0.55);
        this.drawInfo = {
            uniforms: {
                u_colorOffset: [1, 0, 0, 1],
                u_colorMult:   [0.4, 0.5, 0.2, 1],
            },
            programInfo: programInfo,
            bufferInfo: sphereBufferInfo,
        };




    }
}