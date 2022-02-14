const { Router } = require("express");
const router = Router();

const connect = require("../database");

router.get("/", async (req, res) => {
  const db = await connect();
  const result = await db.collection("schedule").find({}).toArray();
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

module.exports = router;
