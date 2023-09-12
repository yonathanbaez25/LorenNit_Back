const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const usersRoute = require("./routes/users");
const authRouter = require("./routes/auth");

dotenv.config();

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", usersRoute);
app.use("/api/auth", authRouter);

module.exports = app;
