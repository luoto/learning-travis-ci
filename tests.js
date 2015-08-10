var assert = require('chai').assert;

describe('Simple test', function() {
  it('should equal 2', function() {
    assert.equal(1 + 1, 2);
  });
});

describe('Environmental variable', function() {
  it('should equal Tony', function() {
    assert.equal(process.env.USER_NAME, 'Tony');
  });
});
