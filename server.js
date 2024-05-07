const express = require('express');
const path = require('path'); // Modul 'path' diperlukan untuk menangani path file
const app = express();

app.get('/', (req, res) => {
  // Menggunakan path.resolve() untuk memastikan path file index.html benar
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});