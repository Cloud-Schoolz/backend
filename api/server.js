const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const server = express()
const studentRouter = require("./students/student-router")
const volRouter = require("./volunteers/volunteer-router")
const adminRouter = require("./admin/admin-router")
const taskRouter = require("./tasks/tasks-router")

server.use(express.json());

server.use("/api/task", taskRouter)
server.use("/api/admin", adminRouter)
server.use("/api/volunteer", volRouter)
server.use("/api/student", studentRouter)
server.use(helmet())
server.use(cors())


module.exports = server