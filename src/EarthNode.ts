import {MathUtils} from "./common/MathUtils";
import {BaseNode} from "./BaseNode";

export class EarthNode extends BaseNode{
    public children:any;

    public drawInfo:any;
    constructor(programInfo, sphereBufferInfo){
        super();
        this.localMatrix=MathUtils.scaling(0.5,0.5,0.5);
        this.drawInfo = {
            uniforms: {
                u_colorOffset: [0, 0.5, 0.5, 1],  // blue-green
                u_colorMult:   [0.4, 0.5, 0.2, 1],
            },
            programInfo: programInfo,
            bufferInfo: sphereBufferInfo,
        };




    }
}