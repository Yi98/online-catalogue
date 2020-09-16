const express = require("express");
const router = express.Router();
const fs = require("fs");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDirectory = `public/uploads/${req.session.userId}`;

    if (!fs.existsSync(uploadDirectory)) {
      fs.mkdirSync(uploadDirectory);
    }

    cb(null, uploadDirectory);
  },
  filename: function (req, file, cb) {
    const [fileName, fileExtension] = file.originalname.split(".");
    const filePath = `${fileName}-${Date.now()}.${fileExtension}`;

    req.body.imageUrl = filePath;

    cb(null, filePath);
  },
});

const upload = multer({ storage: storage });

const productContoller = require("../controllers/product");

router.post("/", upload.single("productImage"), productContoller.createProduct);

router.patch("/:id", productContoller.editProduct);

router.delete("/:id", productContoller.deleteProduct);

module.exports = router;
