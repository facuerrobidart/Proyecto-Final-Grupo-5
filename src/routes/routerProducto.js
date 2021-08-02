const express=require("express");
const router = express.Router();
const controller = require("./../controllers/controllerProducto");
const multer = require("multer")
const path = require("path")

// SETTING Multer


const storage = multer.diskStorage({
  destination:( req, file, cb)=>{
    cb(null, path.join(__dirname, "../../public/images"))
  },
  filename:(req, file, cb)=>{
    let nombreFoto = file.fieldname+"-"+Date.now()+ path.extname(file.originalname)
    cb(null, nombreFoto)
  }
})

const upload = multer( {storage:storage})



router.get("/",controller.producto);
router.get("/carrito",controller.carrito);
router.get("/crear", controller.crear);
router.post("/crear", upload.single("fotoProducto"), controller.crearProducto);
router.get("/editar", controller.editar);
router.get("/all",controller.all);


module.exports=router;