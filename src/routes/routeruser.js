const express = require("express");
const router = express.Router();
const controller = require("./../controllers/controllerUser");


router.get("/login", controller.login);
router.get("/register", controller.registro);
router.post("/register", controller.registroUsuario);


module.exports = router;