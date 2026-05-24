const express = require("express");

const arsenalRouter = express.Router();

arsenalRouter
  .route("/")

  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })

  .get((req, res) => {
    try {
      res.end("Show all players");
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  })

  .post((req, res) => {
    try {
      res.status(201).end(
        "Sign to a new player with name: " +
          req.body.name +
          " and nation: " +
          req.body.nation
      );
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  })

  .put((req, res) => {
    try {
      res.status(403).end("Not support");
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  });

arsenalRouter
  .route("/:id")

  .get((req, res) => {
    try {
      res.end(
        "Will show the detail of player: " + req.params.id
      );
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  })

  .put((req, res) => {
    try {
      res.write(
        "Updating the player: " + req.params.id + "\n"
      );

      res.end(
        "Will update the detail of player: " +
          req.body.name +
          " with details: " +
          req.body.description
      );
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  })

  .delete((req, res) => {
    try {
      res.end("Deleting player: " + req.params.id);
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  });

module.exports = arsenalRouter;