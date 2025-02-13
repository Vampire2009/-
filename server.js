const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const port = 3000;

// Настройка хранилища для загруженных файлов
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// Отдача статических файлов
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));

// Обработка загрузки файла
app.post("/upload", upload.single("pdf-file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("Файл не загружен.");
  }
  res.send(`Файл загружен: ${req.file.filename}`);
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});