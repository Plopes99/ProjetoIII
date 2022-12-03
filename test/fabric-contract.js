/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { ChaincodeStub, ClientIdentity } = require('fabric-shim');
const { FabricContract } = require('..');
const winston = require('winston');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.should();
chai.use(chaiAsPromised);
chai.use(sinonChai);

class TestContext {

    constructor() {
        this.stub = sinon.createStubInstance(ChaincodeStub);
        this.clientIdentity = sinon.createStubInstance(ClientIdentity);
        this.logger = {
            getLogger: sinon.stub().returns(sinon.createStubInstance(winston.createLogger().constructor)),
            setLevel: sinon.stub(),
        };
    }

}

describe('FabricContract', () => {

    let contract;
    let ctx;

    beforeEach(() => {
        contract = new FabricContract();
        ctx = new TestContext();
        ctx.stub.getState.withArgs('1001').resolves(Buffer.from('{"value":"fabric 1001 value"}'));
        ctx.stub.getState.withArgs('1002').resolves(Buffer.from('{"value":"fabric 1002 value"}'));
    });

    describe('#fabricExists', () => {

        it('should return true for a fabric', async () => {
            await contract.fabricExists(ctx, '1001').should.eventually.be.true;
        });

        it('should return false for a fabric that does not exist', async () => {
            await contract.fabricExists(ctx, '1003').should.eventually.be.false;
        });

    });

    describe('#createFabric', () => {

        it('should create a fabric', async () => {
            await contract.createFabric(ctx, '1003', 'fabric 1003 value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1003', Buffer.from('{"value":"fabric 1003 value"}'));
        });

        it('should throw an error for a fabric that already exists', async () => {
            await contract.createFabric(ctx, '1001', 'myvalue').should.be.rejectedWith(/The fabric 1001 already exists/);
        });

    });

    describe('#readFabric', () => {

        it('should return a fabric', async () => {
            await contract.readFabric(ctx, '1001').should.eventually.deep.equal({ value: 'fabric 1001 value' });
        });

        it('should throw an error for a fabric that does not exist', async () => {
            await contract.readFabric(ctx, '1003').should.be.rejectedWith(/The fabric 1003 does not exist/);
        });

    });

    describe('#updateFabric', () => {

        it('should update a fabric', async () => {
            await contract.updateFabric(ctx, '1001', 'fabric 1001 new value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1001', Buffer.from('{"value":"fabric 1001 new value"}'));
        });

        it('should throw an error for a fabric that does not exist', async () => {
            await contract.updateFabric(ctx, '1003', 'fabric 1003 new value').should.be.rejectedWith(/The fabric 1003 does not exist/);
        });

    });

    describe('#deleteFabric', () => {

        it('should delete a fabric', async () => {
            await contract.deleteFabric(ctx, '1001');
            ctx.stub.deleteState.should.have.been.calledOnceWithExactly('1001');
        });

        it('should throw an error for a fabric that does not exist', async () => {
            await contract.deleteFabric(ctx, '1003').should.be.rejectedWith(/The fabric 1003 does not exist/);
        });

    });

});
