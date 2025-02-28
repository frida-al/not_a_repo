const express = require("express");
const fs = require("fs");
const router = express.Router();

const plantas = [];

router.get("/", (request, response, next) => {
  response.send(html_header + html_body + html_footer);
});
//router.get es para registrar un middleware para peticiones HTTP GET
router.get("/agregar", (request, response, next) => {
  response.render("agregar_planta");
});

//router.post es para registrar un middleware para peticiones HTTP POST
router.post("/listar", (request, response, next) => {
  console.log(request.body);
  plantas.push(request.body.nombre);
  let html = html_header;
  html += `<div class="columns">`;
  for (let planta of plantas) {
    html += `<div class="column">`;
    html += `<div class="card">
        <div class="card-content">
          <div class="content">`;
    html += planta;
    html += `</div>
                </div>
              </div>
            </div>`;
  }
  html += `</div>`;
  html += html_footer;
  response.render("lista_plantas", {
    plantas: plantas,
  });
});

router.get("/gallery", (request, response, next) => {
  response.send(html_header + html_gallery);
});

const path = require("path");

router.get("/regar", (request, response, next) => {
  response.sendFile(
    path.join(__dirname, "..", "Laboratorios", "Laboratorio 1.html")
  );
});

module.exports = router;
