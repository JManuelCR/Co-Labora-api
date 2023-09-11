const express = require("express");

const routerAuth = require("./routes/auth.route");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/login", routerAuth);

module.exports = app;
