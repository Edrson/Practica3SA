/** @format */

// importando el marco del nodo
var express = require("express");

var app = express();
// Responde con "hola mundo" a las solicitudes que llegan a nuestra raíz "/"
app.get("/", function (req, res) {
  res.send("hola mundo.");
});
// escucha el puerto 3000 por defecto
console.log("aplicacion escuchando en el puerto 3000...");
app.listen(process.env.PORT || 3000);

module.exports = app;
