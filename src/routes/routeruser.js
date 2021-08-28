const express = require("express");
const router = express.Router();
const controller = require("./../controllers/controllerUser");
const multer = require("multer");
const path = require("path");

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

router.get("/login", controller.login);
router.post("/login", controller.procesoLogin);
router.get("/register", controller.registro);
router.post("/register", upload.single("imageUser"), controller.registroUsuario);
router.get("/info",controller.info);


module.exports = router;