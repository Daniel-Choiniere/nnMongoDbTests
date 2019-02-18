const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe our tests
describe('Updating records', function(){

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
// Updates a database record by ID
  it('Updates one record in the database', function(done){
    MarioChar.findOneAndUpdate({ name:'Mario'}, {name: 'Luigi'}).then(function(){
        MarioChar.findOne({_id:char._id}).then(function(result){
            assert(result === 'Luigi');
            done();
        });
        done();
    });
  });
});