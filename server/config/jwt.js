module.exports = (req, res, next) => {
  const bearerHeader = req.headers["authorization"].split(" ");
  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
};
