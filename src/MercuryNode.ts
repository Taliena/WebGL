import {MathUtils} from "./common/MathUtils";
import {BaseNode} from "./BaseNode";

export class MercuryNode extends BaseNode{
    public children:any;

    public drawInfo:any;
    constructor(programInfo, sphereBufferInfo){
        super();
        this.localMatrix=MathUtils.scaling(0.2,0.2,0.2);
        this.drawInfo = {
            uniforms: {
                u_colorOffset: [0.6, 0.6, 0.6, 1],  // gray
                u_colorMult:   [0.1, 0.1, 0.1, 1],
            },
            programInfo: programInfo,
            bufferInfo: sphereBufferInfo,
        };




    }
}