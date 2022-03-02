const express = require("express");
const router = require("./Routes/index.routes");

const app = express();

app.set("port", process.env.PORT || 4000)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(router)

module.exports = app;
