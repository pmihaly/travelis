module.exports = (req, res, next) => {
  let bearerHeader =
    req.headers["authorization"] || req.headers["Authorization"];
  if (typeof bearerHeader !== "undefined") {
    bearerHeader = bearerHeader.split(" ");
    const bearerToken = bearerHeader[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
};
