const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint 1: GET /
app.get('/', (req, res) => {
  res.json({ mensaje: '¡Bienvenido a la API!' });
});

// Endpoint 2: GET /saludar
app.get('/saludar', (req, res) => {
  res.json({ mensaje: '¡Hola desde la API de Node.js!' });
});

app.get('/entorno', (req, res) => {
  res.json({ mensaje: 'Hola, saludos desde Producción' });
});

// Iniciar servidor - escuchar en todas las interfaces
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
