const express = require("express");
const app = express();
const path = require("path");
const routerIndex = require("./src/routes/routerindex");
const routerProducto = require("./src/routes/routerProducto");
const routerUser = require("./src/routes/routeruser");

app.set("view engine","ejs");
app.use(express.static(path.resolve(__dirname,"./public")));
app.use(express.static(path.resolve(__dirname,"./views")));
app.listen(process.env.PORT || 3000,()=>{console.log("Corriendo en puerto 3000");});

app.use("/",routerIndex);
app.use("/producto",routerProducto);
app.use("/user",routerUser);

