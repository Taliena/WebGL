import {WebGLUtils} from "./WebGLUtils";

export class Primitives{
    public static createSphereVertices(
        radius,
        subdivisionsAxis,
        subdivisionsHeight) {
        if (subdivisionsAxis <= 0 || subdivisionsHeight <= 0) {
            throw Error('subdivisionAxis and subdivisionHeight must be > 0');
        }

        let opt_startLatitudeInRadians =  0;
        let opt_endLatitudeInRadians = Math.PI;
        let opt_startLongitudeInRadians =  0;
        let opt_endLongitudeInRadians = (Math.PI * 2);

        var latRange = opt_endLatitudeInRadians - opt_startLatitudeInRadians;
        var longRange = opt_endLongitudeInRadians - opt_startLongitudeInRadians;

        // We are going to generate our sphere by iterating through its
        // spherical coordinates and generating 2 triangles for each quad on a
        // ring of the sphere.
        var numVertices = (subdivisionsAxis + 1) * (subdivisionsHeight + 1);
        var positions = WebGLUtils.createAugmentedTypedArray(3, numVertices);
        var normals   = WebGLUtils.createAugmentedTypedArray(3, numVertices);
        var texCoords = WebGLUtils.createAugmentedTypedArray(2 , numVertices);

        // Generate the individual vertices in our vertex buffer.
        for (var y = 0; y <= subdivisionsHeight; y++) {
            for (var x = 0; x <= subdivisionsAxis; x++) {
                // Generate a vertex based on its spherical coordinates
                var u = x / subdivisionsAxis;
                var v = y / subdivisionsHeight;
                var theta = longRange * u;
                var phi = latRange * v;
                var sinTheta = Math.sin(theta);
                var cosTheta = Math.cos(theta);
                var sinPhi = Math.sin(phi);
                var cosPhi = Math.cos(phi);
                var ux = cosTheta * sinPhi;
                var uy = cosPhi;
                var uz = sinTheta * sinPhi;
                positions.push(radius * ux, radius * uy, radius * uz);
                normals.push(ux, uy, uz);
                texCoords.push(1 - u, v);
            }
        }

        var numVertsAround = subdivisionsAxis + 1;
        var indices = WebGLUtils.createAugmentedTypedArray(3, subdivisionsAxis * subdivisionsHeight * 2, Uint16Array);
        for (x = 0; x < subdivisionsAxis; x++) {
            for (y = 0; y < subdivisionsHeight; y++) {
                // Make triangle 1 of quad.
                indices.push(
                    (y + 0) * numVertsAround + x,
                    (y + 0) * numVertsAround + x + 1,
                    (y + 1) * numVertsAround + x);

                // Make triangle 2 of quad.
                indices.push(
                    (y + 1) * numVertsAround + x,
                    (y + 0) * numVertsAround + x + 1,
                    (y + 1) * numVertsAround + x + 1);
            }
        }

        return {
            position: positions,
            normal: normals,
            texcoord: texCoords,
            indices: indices,
        };
    }

    public static makeRandomVertexColors(vertices, options) {
        options = options || {};
        var numElements = vertices.position.numElements;
        var vcolors = WebGLUtils.createAugmentedTypedArray(4, numElements, Uint8Array);
        var ii;
        var rand = options.rand || function(ndx, channel) {
            return channel < 3 ? this.randInt(256) : 255;
        };
        vertices.color = vcolors;
        if (vertices.indices) {
            // just make random colors if index
            for (ii = 0; ii < numElements; ++ii) {
                vcolors.push(rand(ii, 0), rand(ii, 1), rand(ii, 2), rand(ii, 3));
            }
        } else {
            // make random colors per triangle
            var numVertsPerColor = options.vertsPerColor || 3;
            var numSets = numElements / numVertsPerColor;
            for (ii = 0; ii < numSets; ++ii) {
                var color = [rand(ii, 0), rand(ii, 1), rand(ii, 2), rand(ii, 3)];
                for (var jj = 0; jj < numVertsPerColor; ++jj) {
                    vcolors.push(color);
                }
            }
        }
        return vertices;
    }

    public static deindexVertices(vertices) {
        var indices = vertices.indices;
        var newVertices = {};
        var numElements = indices.length;

        function expandToUnindexed(channel) {
            var srcBuffer = vertices[channel];
            var numComponents = srcBuffer.numComponents;
            var dstBuffer = WebGLUtils.createAugmentedTypedArray(numComponents, numElements, srcBuffer.constructor);
            for (var ii = 0; ii < numElements; ++ii) {
                var ndx = indices[ii];
                var offset = ndx * numComponents;
                for (var jj = 0; jj < numComponents; ++jj) {
                    dstBuffer.push(srcBuffer[offset + jj]);
                }
            }
            newVertices[channel] = dstBuffer;
        }

        Object.keys(vertices).filter(this.allButIndices).forEach(expandToUnindexed);

        return newVertices;
    }

    public static allButIndices(name) {
        return name !== "indices";
    }



}