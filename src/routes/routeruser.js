const express = require("express");
const router = express.Router();
const controller = require("./../controllers/controllerUser");
const multer = require("multer");
const path = require("path");
const sinUsuarioMiddleware = require("../../src/middleware/sinUsuarioMiddleware")
const conUsuarioMiddleware = require("../../src/middleware/conUsuarioMiddleware")
const {body,check,validationResult} = require("express-validator");

const validaLogin = [check("email").isEmail(),
                    check("password").isLength({min:6})];
const validaRegistro = [check("email")
                                        .isEmail(),
                        check("contraseña")
                                        .isLength({min:8}),
                        check("nombre")
                                        .notEmpty(),
                        check("apellido")
                                        .notEmpty(),
                        check("codigo_postal")
                                        .notEmpty().withMessage("El CP no puede estar vacío"),
                        check("direccion")
                                        .isString()
                                        .notEmpty().withMessage("La dirección no puede estar vacia"),
                        check("ciudad")
                                        .isString()
                                        .notEmpty().withMessage("La ciudad no puede estar vacia")];

// SETTING Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/images/users"));
    },
    filename: (req, file, cb) => {
        let nombreFoto = file.fieldname + "-" + Date.now() + path.extname(file.originalname);
        cb(null, nombreFoto);
    }
});

const upload = multer({ storage: storage });

router.get("/login",conUsuarioMiddleware, controller.login);
router.post("/login",validaLogin,controller.procesoLogin);
router.get("/register", conUsuarioMiddleware, controller.registro);
router.post("/register",validaRegistro,upload.single("imageUser"), controller.registroUsuario);
router.get("/info",sinUsuarioMiddleware, controller.info);
router.get("/logout", controller.logout);


module.exports = router;