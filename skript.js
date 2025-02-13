// Пример данных о PDF-файлах (замените на динамические данные с сервера)
const pdfs = [
    { name: "Presentation1.pdf", url: "uploads/Presentation1.pdf" },
    { name: "Presentation2.pdf", url: "uploads/Presentation2.pdf" },
  ];
  
  // Отображение PDF-файлов
  const pdfList = document.getElementById("pdf-list");
  pdfs.forEach(pdf => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = pdf.url;
    link.textContent = pdf.name;
    link.download = pdf.name;
    listItem.appendChild(link);
    pdfList.appendChild(listItem);
  });
  
  // Обработка загрузки PDF (только фронтенд, для реальной загрузки нужен бэкенд)
  const uploadForm = document.getElementById("upload-form");
  uploadForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const fileInput = document.getElementById("pdf-file");
    const file = fileInput.files[0];
    if (file) {
      alert(`Файл "${file.name}" успешно загружен!`);
      // Отправить файл на сервер (нужен бэкенд)
    } else {
      alert("Пожалуйста, выберите PDF-файл.");
    }
  });