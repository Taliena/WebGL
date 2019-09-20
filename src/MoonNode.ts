import {MathUtils} from "./common/MathUtils";
import {BaseNode} from "./BaseNode";

export class MoonNode extends BaseNode{
    public children:any;

    public drawInfo:any;
    constructor(programInfo, sphereBufferInfo){
        super();
        this.localMatrix = MathUtils.scaling(0.15, 0.15, 0.15);
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