const Planta = require("../models/planta.models");

exports.get_agregar = (request, response, next) => {
  response.render("agregar_planta");
};

exports.post_listar = (request, response, next) => {
  console.log(request.body);
  const mi_planta = new Planta(request.body.nombre);
  mi_planta.save();
  response.redirect("/plantas/");
};

exports.get_root = (request, response, next) => {
  response.render("lista_plantas", {
    plantas: Planta.fetchAll(),
  });
};

exports.get_regar = (request, response, next) => {
  const path = require("path");
  response.sendFile(
    path.join(__dirname, "..", "Laboratorios", "Laboratorio 1.html")
  );
};

exports.get_gallery = (request, response, next) => {
  response.render("gallery_plantas");
};
