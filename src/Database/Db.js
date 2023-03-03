 const {MongoClient}  = require('mongodb');

 const uri = 'mongodb+srv://Sourabh2007:GNyArLyRTSSfiCRp@cluster0.9nyw0bj.mongodb.net/?retryWrites=true&w=majority';


 let client;

 const getDB = () => {
   if (!client) {
     console.log('Creating a new client!');
     client = new MongoClient(uri);
   } else {
     console.log('Reusing the old client');
   }
 
   const database = client.db('test');
   const products = database.collection('product');
   const orders = database.collection('orders');
 
   return {
     products,
     orders,
   };
 };
 
 module.exports = getDB;