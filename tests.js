var assert = require('chai').assert;
var mongoose = require('mongoose');
var Creature = require('./db').Creature;

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

describe('MongoDB', function() {
  it('should equal bob', function() {

    // Load fake data into database
    var myCreature = new Creature({name: 'bob'});
    myCreature.save();

    Creature.findOne({name: 'bob'}, function(err, creature) {
      if (err) {
        return err;
      }
      else {
        assert.equal(creature.name, 'bob');
      }
    });
  });
});
