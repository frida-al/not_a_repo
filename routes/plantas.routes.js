const express = require("express");
const fs = require("fs");
const router = express.Router();
const plantas_controller = require("../controllers/plantas.controller");

/*router.get("/", (request, response, next) => {
  response.render("inicio_plantas");
});*/
//router.get es para registrar un middleware para peticiones HTTP GET
router.get("/agregar", plantas_controller.get_agregar);

//router.post es para registrar un middleware para peticiones HTTP POST
router.post("/listar", plantas_controller.post_listar);

router.get("/gallery", plantas_controller.get_gallery);

router.get("/regar", plantas_controller.get_regar);

router.get("/", plantas_controller.get_root);

module.exports = router;
