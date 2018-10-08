const {MongoClient,ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('connected to MongoDB server');

  const db = client.db('TodoApp')
// delete many
  // db.collection('Todos').deleteMany({text : 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

//deleteOne
  // db.collection('Todos').deleteOne({text : 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //find one and delete
  // db.collection('Todos').findOneAndDelete({completetd : false}).then((result) => {
  //   console.log(result);
  //});

  //challenge

  // db.collection('Users').deleteMany({name : 'pooja'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id : new ObjectID("5bbb31f1dece633a50543794")
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });


//client.close();
});
