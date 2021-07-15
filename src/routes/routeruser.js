const express=require("express");
const router = express.Router();
const controller = require("./../controllers/controllerUser");


router.get("/login",controller.login);
router.get("/register",controller.registro);


module.exports=router;