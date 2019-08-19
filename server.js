const express = require('express');


const server = express();

const actionsRouter = require("./actions/action-router")
const projectsRouter = require("./projects/project-router")

server.use(express.json());

server.use("/actions", actionsRouter);
server.use("/projects", projectsRouter);

server.get('/', (req, res) => {
  res.send(`<h2>WebApi Sprint Challenge</h2>`)
});


module.exports = server;