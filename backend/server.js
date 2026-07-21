const express = require("express");

const app = express();

app.use(express.json());

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

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
