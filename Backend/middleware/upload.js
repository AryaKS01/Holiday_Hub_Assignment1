const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = "";
    if (file.fieldname === "photo") folder = "uploads/images/";
    else if (file.fieldname === "idCard") folder = "uploads/documents/";

    fs.mkdirSync(folder, { recursive: true });
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, uniqueName + ext);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.fieldname === "photo" && !file.mimetype.startsWith("image/")) {
    cb(new Error("Only image files are allowed for photo"), false);
  } else if (
    file.fieldname === "idCard" &&
    file.mimetype !== "application/pdf"
  ) {
    cb(new Error("Only PDF files are allowed for ID card"), false);
  } else {
    cb(null, true);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

module.exports = upload;
