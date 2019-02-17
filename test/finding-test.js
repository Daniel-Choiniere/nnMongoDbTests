const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe our tests
describe('Finding records', function(){

    var char;

    beforeEach(function(done){
        char = new MarioChar({
            name: 'Mario'
        });
        char.save().then(function(){
            done();
          });
    });

  // Create tests
// Finds one database record by name
  it('Finds one record by name from the database', function(done){
    MarioChar.findOne({ name:'Mario'}).then(function(result){
        assert(result.name === 'Mario');
        done();
    });
  });

  // Finds one database record by ID
  it('Finds one record by ID from the database', function(done){
    MarioChar.findOne({ _id:char._id}).then(function(result){
        assert(result._id.toString() === char._id.toString());
        done();
    });
  });

});