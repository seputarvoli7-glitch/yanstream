const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage });
const ADMIN = {
  username: "admin",
  password: "yanstream123"
};

app.get("/", (req, res) => {
  res.json({
    status: "YANSTREAM Backend Online"
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN.username && password === ADMIN.password) {
    return res.json({
      success: true,
      message: "Login berhasil"
    });
  }

  res.status(401).json({
    success: false,
    message: "Username atau password salah"
  });
});

app.post("/upload", upload.single("video"), (req, res) => {

    if (!req.file) {
        return res.status(400).json({
            success: false,
            message: "Tidak ada video yang diupload"
        });
    }

    res.json({
        success: true,
        message: "Video berhasil diupload",
        filename: req.file.filename
    });

});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
