const mongoose = require('mongoose');

// ES6 Promises - overwriting global promise
mongoose.Promise = global.Promise;

// Connect to db before tests run
// before(function(done){

    // Connect to mongodb
    mongoose.connect('mongodb://localhost/testaroo', { useNewUrlParser: true });
    mongoose.connection.once('open', function(){
        console.log('Connection has been made, now make fireworks...');
        // done();
    }).on('error', function(error){
        console.log('Connection error:', error);
    });
// });

// Drop (delete) the characters collection before each test
beforeEach(function(done){
//     // Drop (delete) the collection
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    });
});
