const express=require("express");
const router = express.router();
const controller = require("./../controllers/controllerIndex");


router.get("/",controller.index);