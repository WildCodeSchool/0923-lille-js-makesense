const multer = require("multer");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}--${file.originalname}`);
  },
});

const uploadImage = multer({ storage }).single("picture");

const upload = (req, res, next) => {
  uploadImage(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).send("Multer error");
    }
    if (err) {
      return res.status(500).send("Internal server error");
    }
    if (!req.file) {
      return res.status(400).send("No file upload");
    }
    const imageName = req.file.filename;
    req.body.uploadImage = imageName;
    next();
    return null;
  });
};
module.exports = { upload };
