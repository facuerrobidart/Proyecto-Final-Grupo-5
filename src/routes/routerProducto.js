const express = require("express");
const router = express.Router();
const controller = require("./../controllers/controllerProducto");
const multer = require("multer");
const path = require("path");
const sinUsuarioMiddleware = require("../../src/middleware/sinUsuarioMiddleware")
const edicionAutorizada = require("../middleware/edicionAutorizada");
// SETTING Multer


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/images"));
  },
  filename: (req, file, cb) => {
    let nombreFoto = file.fieldname + "-" + Date.now() + path.extname(file.originalname);
    cb(null, nombreFoto);
  }
});

const upload = multer({storage:storage});


router.get("/carrito", controller.carrito);
router.get("/crear",sinUsuarioMiddleware, controller.crear);
router.post("/crear", upload.single("fotoProducto"), controller.crearProducto);
router.get("/all", controller.all);


/*EDITAR PRODUCTO*/
router.get("/editar/:id",edicionAutorizada(),controller.editar);
router.put("/editar/:id", upload.single("fotoProducto"), controller.actualizar);
//detalle producto
router.get("/:id", controller.producto);
//delete
router.delete("/delete/:id", controller.delete)

module.exports = router;