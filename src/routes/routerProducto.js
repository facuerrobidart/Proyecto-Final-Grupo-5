const express=require("express");
const router = express.router();
const controller = require("./../controllers/controllerProducto");



router.get("/",controller.producto);
router.get("/carrito",controller.carrito);