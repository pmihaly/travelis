const Poszt = require("../models/Poszt");

const router = require("express").Router();

router.get("/", (req, res) =>
  Poszt.find({})
    .then(poszt => res.json(poszt))
    .catch(err => res.json({ error: err }))
);

router.get("/:posztId", (req, res) =>
  Poszt.findById(req.params.posztId)
    .then(poszt => res.json(poszt))
    .catch(err => res.json({ error: err }))
);

router.post("/", (req, res) =>
  new Poszt(req.body)
    .save()
    .then(poszt => res.json(poszt))
    .catch(err => res.json({ error: err }))
);

router.put("/:posztId", (req, res) =>
  Poszt.findByIdAndUpdate(req.params.posztId, req.body)
    .then(poszt => res.json(poszt))
    .catch(err => res.json({ error: err }))
);

router.delete("/", (req, res) => res.send("posztOK"));
router.delete("/:posztId", (req, res) =>
  Poszt.findByIdAndDelete(req.params.posztId)
    .then(poszt => res.json(poszt))
    .catch(err => res.json({ error: err }))
);

module.exports = router;
