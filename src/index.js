const ServerlessHttp = require("serverless-http");
const app = require("./server");

const Main = async () => {
  await app.listen(app.get("port"));
  console.log("Run on port ", app.get("port"));
  return app;
};

Main();

module.exports.handler = ServerlessHttp(app)