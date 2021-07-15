const express=require("express");
const router = express.Router();
const controller = require("./../controllers/controllerProducto");



router.get("/",controller.producto);
router.get("/carrito",controller.carrito);


module.exports=router;