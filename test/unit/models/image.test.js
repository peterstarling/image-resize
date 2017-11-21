const Image = require('../../../src/models/image');
const test = require('ava');

test('it should format the URL', (t) => {
    const image = new Image({ id: 123 });

    t.is(image.url, `http://${process.env.URL}/images/123`);
});
