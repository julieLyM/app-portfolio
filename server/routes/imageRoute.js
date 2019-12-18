const express = require("express");
const router = express.Router();
const { getListImg } = require("../stores/imageApi");

router.get("/", async function(req, res) {
  const img = await getListImg();
  res.send(img);
});

module.exports = router;
