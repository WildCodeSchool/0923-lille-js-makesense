/* const multer = require("multer");
const path = require("path");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/gif": "gif",
};

const storage = multer.diskStorage({
  destination: path.join(`${__dirname}/../../public/upload`),
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    callback(null, `${name}${Date.now()}.${extension}`);
  },
});

const fileFilter = (req, file, callback) => {
  const types = ["image/jpg", "image/jpeg", "image/png", "image/gif"];

  if (types.indexOf(file.mimetype) >= 0) callback(null, true);
  else callback(new Error("Only image is allowed"));
};

module.exports = multer({ storage, fileFilter });
 */
