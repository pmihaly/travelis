const User = require("../models/User");
const Poszt = require("../models/Poszt");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const router = require("express").Router();

router.post("/bejelentkezes", (req, res) => {
  const { name, password } = req.body;
  User.find({ name })
    .then(users => {
      for (user in users) {
        user = users[user];
        bcrypt.compare(password, user.password, (err, match) => {
          if (match) {
            jwt.sign(user.toJSON(), "macska", (err, token) => {
              res.json({ token });
            });
          }
        });
      }
    })
    .catch(err => res.json(err));
});

router.post("/regisztracio", (req, res) => {
  const { name, password } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    new User({ name, password: hash }).save().then(user => res.json(user));
  });
});

router.get("/:userId/nev", (req, res) => {
  User.findById(req.params.userId).then(user => res.json(user.name));
});

router.get("/:userId/profil", (req, res) => {
  User.findById(req.params.userId).then(user => {
    Poszt.find({ felhasznalo: user._id }).then(posztok => {
      res.json({
        user,
        posztok
      });
    });
  });
});

module.exports = router;
