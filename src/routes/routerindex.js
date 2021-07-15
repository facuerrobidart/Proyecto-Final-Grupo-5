const express=require("express");
const router = express.Router();
const controller = require("./../controllers/controllerIndex");


router.get("/",controller.index);