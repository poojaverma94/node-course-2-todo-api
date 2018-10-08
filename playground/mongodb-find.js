const {MongoClient,ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('connected to MongoDB server');

  const db = client.db('TodoApp')
  // db.collection('Todos').find({
  //   _id :'5bbb46742465254f1cb7eb44'
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // }, (err) => {
  //   console.log('unable to fetch Todos' , err);
  // });
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count : ${count}`);
  // }, (err) => {
  //   console.log('unable to fetch Todos' , err);
  // });
  db.collection('Users').find({
    name :'pooja'
  }).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs,undefined,2));
  }, (err) => {
    console.log('unable to fetch Users' , err);
  });
  
//client.close();
});
