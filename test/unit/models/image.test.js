const Image = require('../../../src/models/image');
const test = require('ava');

test('it should format the URL', (t) => {
    const image = new Image({ id: 123, width: 640, height: 480 });

    t.is(image.url, `http://${process.env.URL}/v1/images/123/640/480`);
});
