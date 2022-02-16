const { MongoClient } = require("mongodb");

const connect = async () => {
  try {
    const client = await MongoClient.connect(
      "mongodb+srv://jhon192:1234@cluster0.bvoxc.mongodb.net/test"
    );
    const db = client.db("node-restapi");
    console.log("connection was successfully");
    return db;
  } catch (e) {
    console.log(e);
  }
};

module.exports = connect;
