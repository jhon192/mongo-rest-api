const { MongoClient } = require("mongodb");

const connect = async () => {
  try {
    const client = await MongoClient.connect("mongodb://127.0.0.1:27017");
    const db = client.db("node-restapi")
    console.log("connection was successfully");
    return db;
  } catch (e) {
    console.log(e);
  }
}

module.exports = connect;