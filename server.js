const express = require("express");
const path = require("path");
const http = require("http");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join((__dirname, "index.html")));
});

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`🚀 Servidor en http://localhost:${PORT}`);
});
