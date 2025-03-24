const Planta = require("../models/planta.models");

exports.get_agregar = (request, response, next) => {
  response.render("agregar_planta", {
    isLoggedIn: request.session.isLoggedIn || false,
    username: request.session.username || "",
    csrfToken: request.csrfToken(),
    privilegios: request.session.privilegios || [],
  });
};

exports.post_listar = (request, response, next) => {
  console.log(request.body);
  const mi_planta = new Planta(request.body.nombre, request.file.filename);
  mi_planta
    .save()
    .then(() => {
      request.session.info = `La planta ${mi_planta.nombre} se ha creado`;
      response.redirect("/plantas/");
      response.setHeader("Set-Cookie", "ultima_planta=${mi_planta.nombre}");
      response.redirect("/plantas/");
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.get_root = (request, response, next) => {
  console.log(request.session.privilegios);
  const mensaje = request.session.info || "";
  if (request.session.info) {
    request.session.info = "";
  }

  Planta.fetch(request.params.id)
    .then(([rows, fieldData]) => {
      console.log(fieldData);
      console.log(rows);
      response.render("lista_plantas", {
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || "",
        plantas: rows,
        info: mensaje,
        privilegios: request.session.privilegios || [],
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.get_regar = (request, response, next) => {
  const path = require("path");
  response.sendFile(
    path.join(__dirname, "..", "Laboratorios", "Laboratorio 1.html")
  );
};

exports.get_gallery = (request, response, next) => {
  response.render("gallery_plantas", {
    isLoggedIn: request.session.isLoggedIn || false,
  });
};
