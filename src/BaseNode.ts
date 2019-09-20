import {MathUtils} from "./common/MathUtils";

export class BaseNode{

    public children:Array<any>=[];
    public localMatrix:Array<any>;
    public worldMatrix:Array<any>;
    public parent:any;
    public parentWorldMatrix:any;
    public drawInfo;

    constructor(){
        this.localMatrix=MathUtils.identity();
        this.worldMatrix=MathUtils.identity();

    }

    public setParent(parent) {
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
    }

    public updateWorldMatrix(parentWorldMatrix?:any) {
        if (parentWorldMatrix) {
            // a matrix was passed in so do the math
            MathUtils.multiply(parentWorldMatrix, this.localMatrix, this.worldMatrix);
        } else {
            // no matrix was passed in so just copy local to world
            MathUtils.copy(this.localMatrix, this.worldMatrix);
        }

        // now process all the children
        var worldMatrix = this.worldMatrix;
        this.children.forEach((child)=> {
            child.updateWorldMatrix(worldMatrix);
        });
    };











}