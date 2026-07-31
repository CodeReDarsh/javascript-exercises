const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });

  test('dummy', function () {
    expect("test string").toEqual('test string');
  });
});
