const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const posztRoute = require("./routes/posztRoute");
const authRoute = require("./routes/authRoute");

const app = express();
const db = require("./config/mongoose").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("DB connected..."))
  .catch(err => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/posztok", posztRoute);
app.use("/auth", authRoute);

const PORT = 8000 | process.env.PORT;
app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
