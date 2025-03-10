const { response, request } = require("express");
const express = require("express");
const fs = require("fs");
const router = express.Router();
const plantas_controller = require("../controllers/plantas.controller");

const isAuth = require("../util/is_auth");

/*router.get("/", (request, response, next) => {
  response.render("inicio_plantas");
});*/
//router.get es para registrar un middleware para peticiones HTTP GET
router.get("/agregar", isAuth, plantas_controller.get_agregar);

//router.post es para registrar un middleware para peticiones HTTP POST
router.post("/listar", isAuth, plantas_controller.post_listar);

router.get("/gallery", isAuth, plantas_controller.get_gallery);

router.get("/regar", isAuth, plantas_controller.get_regar);

router.get("/:id", isAuth, plantas_controller.get_root);
router.get("/", isAuth, plantas_controller.get_root);

module.exports = router;
