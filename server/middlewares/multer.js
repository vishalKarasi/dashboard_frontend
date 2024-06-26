import multer from "multer";

export const imgParser = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    const allowMimeType = ["image/jpeg", "image/png"];
    cb(null, allowMimeType.includes(file.mimetype));
  },
});
