const User = require("../models/User");
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

router.get("/:userId", (req, res) => {
  User.findById(req.params.userId).then(user => res.json(user.name));
});

module.exports = router;
