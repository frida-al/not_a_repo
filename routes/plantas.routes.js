const express = require("express");
const fs = require("fs");
const router = express.Router();

const plantas = [];

router.get("/", (request, response, next) => {
  response.render("inicio_plantas");
});
//router.get es para registrar un middleware para peticiones HTTP GET
router.get("/agregar", (request, response, next) => {
  response.render("agregar_planta");
});

//router.post es para registrar un middleware para peticiones HTTP POST
router.post("/listar", (request, response, next) => {
  console.log(request.body);
  plantas.push(request.body.nombre);

  response.render("lista_plantas", {
    plantas: plantas,
  });
});

router.get("/gallery", (request, response, next) => {
  response.render("gallery_plantas");
});

const path = require("path");

router.get("/regar", (request, response, next) => {
  response.sendFile(
    path.join(__dirname, "..", "Laboratorios", "Laboratorio 1.html")
  );
});

module.exports = router;
