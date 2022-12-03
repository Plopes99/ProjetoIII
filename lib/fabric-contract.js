/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class FabricContract extends Contract {

    async fabricExists(ctx, fabricId) {
        const buffer = await ctx.stub.getState(fabricId);
        return (!!buffer && buffer.length > 0);
    }

    async createFabric(ctx, fabricId, value) {
        const exists = await this.fabricExists(ctx, fabricId);
        if (exists) {
            throw new Error(`The fabric ${fabricId} already exists`);
        }
        const asset = { value };
        const buffer = Buffer.from(JSON.stringify(asset));
        await ctx.stub.putState(fabricId, buffer);
    }

    async readFabric(ctx, fabricId) {
        const exists = await this.fabricExists(ctx, fabricId);
        if (!exists) {
            throw new Error(`The fabric ${fabricId} does not exist`);
        }
        const buffer = await ctx.stub.getState(fabricId);
        const asset = JSON.parse(buffer.toString());
        return asset;
    }

    async updateFabric(ctx, fabricId, newValue) {
        const exists = await this.fabricExists(ctx, fabricId);
        if (!exists) {
            throw new Error(`The fabric ${fabricId} does not exist`);
        }
        const asset = { value: newValue };
        const buffer = Buffer.from(JSON.stringify(asset));
        await ctx.stub.putState(fabricId, buffer);
    }

    async deleteFabric(ctx, fabricId) {
        const exists = await this.fabricExists(ctx, fabricId);
        if (!exists) {
            throw new Error(`The fabric ${fabricId} does not exist`);
        }
        await ctx.stub.deleteState(fabricId);
    }

}

module.exports = FabricContract;
