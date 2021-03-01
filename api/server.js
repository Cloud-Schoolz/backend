const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const server = express();
const studentRouter = require("./students/student-router");
const volRouter = require("./volunteers/volunteer-router");
const adminRouter = require("./admin/admin-router");
const taskRouter = require("./tasks/tasks-router");
const countryRouter = require("./country/country-router");

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/country", countryRouter);
server.use("/api/tasks", taskRouter);
server.use("/api/admin", adminRouter);
server.use("/api/volunteers", volRouter);
server.use("/api/students", studentRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to cloud_schoolz api!" });
});

module.exports = server;
