const { Router } = require("express");
const upload = require("./upload.js");

const router = Router();

router.use("/upload", upload);

router.get("/", (req, res) => {
  res.send("sayHI");
});

module.exports = router;
