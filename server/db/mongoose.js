var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.conect = ('mongodb : // localhost:27017//TodoApp',{useNewUrlParser: true});
module.exports = {mongoose};
