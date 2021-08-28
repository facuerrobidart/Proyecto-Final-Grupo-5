const express = require("express");
const router = express.Router();
const controller = require("./../controllers/controllerUser");
const multer = require("multer");
const path = require("path");
const sinUsuarioMiddleware = require("../../src/middleware/sinUsuarioMiddleware")
const conUsuarioMiddleware = require("../../src/middleware/conUsuarioMiddleware")

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
router.post("/login", controller.procesoLogin);
router.get("/register", controller.registro);
router.post("/register", upload.single("imageUser"), controller.registroUsuario);
router.get("/info",sinUsuarioMiddleware, controller.info);
router.get("/logout", controller.logout)


module.exports = router;