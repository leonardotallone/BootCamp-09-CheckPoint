'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
module.exports = app; // esto es solo para testear mas facil



// app.listen(3000, () => {
//     console.log("Servidor corriendo en el puerto 3000");
//   });

// acuerdense de agregar su router o cualquier middleware que necesiten aca

// el condicional es solo para evitar algun problema de tipo EADDRINUSE con mocha watch + supertest + npm test.
if (!module.parent) app.listen(3000);
