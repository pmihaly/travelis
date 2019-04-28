const Poszt = require("../models/Poszt");
const jwt = require("jsonwebtoken");

const verifyToken = require("../config/jwt");

const router = require("express").Router();

router.get("/", (req, res) =>
  Poszt.find({})
    .sort([["_id", -1]])
    .then(poszt => res.json(poszt))
    .catch(err => res.json({ error: err }))
);

router.get("/:posztId", (req, res) =>
  Poszt.findById(req.params.posztId)
    .then(poszt => res.json(poszt))
    .catch(err => res.json({ error: err }))
);

router.post("/", verifyToken, (req, res) =>
  jwt.verify(req.token, "macska", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    }
    req.body.felhasznalo = authData._id;
    new Poszt(req.body)
      .save()
      .then(poszt => res.json(poszt))
      .catch(err => res.json({ error: err }));
  })
);

router.put("/:posztId", verifyToken, (req, res) =>
  jwt.verify(req.token, "macska", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    }
    Poszt.findByIdAndUpdate(req.params.posztId, req.body)
      .then(poszt => {
        if (poszt.felhasznalo.toString() !== authData._id) {
          res.sendStatus(403);
        } else {
          res.json(poszt);
        }
      })
      .catch(err => res.json({ error: err }));
  })
);

router.delete("/:posztId", verifyToken, (req, res) =>
  jwt.verify(req.token, "macska", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    }
    Poszt.findByIdAndDelete(req.params.posztId)
      .then(poszt => {
        if (poszt.felhasznalo.toString() !== authData._id) {
          res.sendStatus(403);
        } else {
          res.json(poszt);
        }
      })
      .catch(err => res.json({ error: err }));
  })
);

module.exports = router;
