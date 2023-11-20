const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "get all something" });
});

router.get("/:id", (req, res) => {
  res.json({ msg: "get something specific" });
});

module.exports = router;
