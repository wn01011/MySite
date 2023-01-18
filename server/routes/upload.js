const { Router } = require("express");
const router = Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const newFileName = (file.originalname = Buffer.from(
      file.originalname,
      "latin1"
    ).toString("utf-8"));
    cb(null, newFileName);
  },
});
const upload = multer({ storage: storage });

router.post("/", upload.single("file"), (req, res) => {
  console.log(req.file);
  res.send("file upload success");
});

module.exports = router;
