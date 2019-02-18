const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe our tests
describe('Deleting records', function(){

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
// Deletes one database record by name
  it('Deletes one record by name from the database', function(done){
    MarioChar.findOneAndDelete({ name:'Mario'}).then(function(result){
        MarioChar.findOne({name:'Mario'}).then(function(result){
            assert(reult === null);
            done();
        });
        done();
    });
  });
});