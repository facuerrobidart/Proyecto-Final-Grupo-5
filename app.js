const express = require("express");
const app = express();
const path = require("path");
const routerIndex = require('./src/routes/routerindex')
const routerProducto = require('./src/routes/routerProducto');
const routerUser = require('./src/routes/routerUser');
const methodOverride = require('method-override');
const cookieParser = require("cookie-parser");
const session = require("express-session");
//SETTINGS
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(cookieParser());
app.use(session({secret: "este es un secreto"}));

//CARPETAS PUBLICAS
app.use(express.static(path.resolve(__dirname,"./public")));
app.use(express.static(path.resolve(__dirname,"./views")));
//RUTAS GLOBALES
app.use("/",routerIndex);
app.use("/producto",routerProducto);
app.use("/user",routerUser);



app.listen(process.env.PORT || 3000, () => { console.log("Corriendo en puerto 3000");});


