const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Configurar middleware para archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Función optimizada para manejar rutas HTML
const serveHtml = (page) => (req, res) => {
  res.sendFile(path.join(__dirname, "public", `${page}.html`), (err) => {
    if (err && err.code === "ENOENT") {
      // Si el archivo no existe, pasa al middleware 404
      next();
    }
  });
};

// Rutas principales
app.get("/", serveHtml("index"));
app.get("/about", serveHtml("about"));
app.get("/contact", serveHtml("contact"));
// Puedes añadir más rutas fácilmente así

// Manejo de rutas no encontradas (404) - Debe ser el último middleware
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor en http://localhost:${PORT}`);
});
