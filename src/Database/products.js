const { ObjectId } = require('mongodb');
const getDB = require('./Db');

const getAllProducts = async () => {
  return await getDB().products.find().toArray();
};

const getProduct = async (id) => {
  return await getDB().products.findOne({ _id: new ObjectId(id) });
};

module.exports = {
  getAllProducts,
  getProduct,
};