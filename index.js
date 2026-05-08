const express = require('express');
const app = express();
const PORT = 3000;

// Endpoint 1: GET /
app.get('/', (req, res) => {
  res.json({ mensaje: '¡Bienvenido a la API!' });
});

// Endpoint 2: GET /saludar
app.get('/saludar', (req, res) => {
  res.json({ mensaje: '¡Hola desde la API de Node.js!' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
