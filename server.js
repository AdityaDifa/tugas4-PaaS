const express = require('express');
const app = express();

const biodata = {
    nama : "Aditya DIfa",
    nim : "123210085",
    versi : "app1"
}

app.get('/', (req, res) => {
  // Menggunakan path.resolve() untuk memastikan path file index.html benar
  res.json(biodata);
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});