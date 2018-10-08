const {MongoClient,ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('connected to MongoDB server');

  const db = client.db('TodoApp')
// db.collection('Todos').findOneAndUpdate({
//   _id : new ObjectID("5bbb455d1be8b57c54c9c0e4")
// },{
//    $set : {
//   completed : true
// }
// }, {
//   returnOriginal : false
// }).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id : new ObjectID("5bbb3314fdebe22b086888eb")
},{
   $set : {
  name: 'pooja'
} ,
$inc : {
  age : 1
}
}, {
  returnOriginal : false
}).then((result) => {
  console.log(result);
});




//client.close();
});
