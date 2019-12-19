const express = require("express");

const Users = require("./users/users-model");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up", dbenv: process.env.DB_ENV });
});

server.get("/users", (req, res) => {
  Users.getAll()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.post("/users", (req, res) => {
  Users.insert(req.body)
    .then(([id]) => {
      res.status(201).json(id);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
