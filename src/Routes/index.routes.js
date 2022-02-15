const { Router } = require("express");
const { ObjectId, BSONType } = require("mongodb");
const router = Router();

const connect = require("../database");

router.get("/", async (req, res) => {
  const db = await connect();
  const result = await db.collection("schedule").find({}).toArray();
  res.json(result);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const db = await connect();
  const result = await db.collection("schedule").findOne({ _id: ObjectId(id) });

  res.json(result);
});

router.post("/", async (req, res) => {
  const db = await connect();
  const schedule = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    telefono: req.body.telefono,
  };

  const result = db.collection("schedule").insertOne(schedule);
  res.json(result);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const db = await connect();
  const schedule = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    telefono: req.body.telefono,
  };
  const result = db
    .collection("schedule")
    .updateOne({ _id: ObjectId(id) }, { $set: schedule });

  res.json(result);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const db = await connect();

  const result = db.collection("schedule").deleteOne({ _id: ObjectId(id) });

  res.json(result);
});

module.exports = router;
