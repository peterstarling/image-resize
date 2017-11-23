const test = require('ava');
const sinon = require('sinon');
const ImageModel = require('../../../src/models/image');
const UploadController = require('../../../src/controllers/upload-controller');

test.beforeEach(t => {
    t.context.imageModel = { save: sinon.stub() };
    t.context.sizeOf = sinon.stub();
    t.context.readFile = sinon.stub();

    t.context.uploadController = new UploadController(
        function() { return t.context.imageModel },
        t.context.sizeOf,
        t.context.readFile
    );
});

test.cb('it should upload a file', t => {
    t.plan(4);
    
    const req = {
        file: {
            path: 'test path',
        },
        body: {
            fileName: 'test file name',
        },
    };

    const dimensions = { width: 150, height: 100 };

    t.context.imageModel.save.resolves({ toJSON: () => 'test image object'});

    const res = { status: () => { }, json: () => { } };
    const resMock = sinon.mock(res);

    t.context.readFile.withArgs('test path').resolves('test content');

    resMock.expects('status')
        .withArgs(201)
        .once()
        .returns('asd');
    
    resMock.expects('json')
        .withArgs('test image object')
        .once()
        .callsFake(() => {
            resMock.verify();
            t.is(t.context.imageModel.name, 'test file name');
            t.is(t.context.imageModel.width, 150);
            t.is(t.context.imageModel.height, 100);
            t.is(t.context.imageModel.content, 'test content');
            t.end();
        });

    t.context.sizeOf.resolves(dimensions);

    t.context.uploadController.upload(req, res, t.end);

});