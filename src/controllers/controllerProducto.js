
const fs = require("fs");
const path = require("path");

const pathProductos = path.join(__dirname, "../../src/data/productosDataBase.json");
const productos = JSON.parse(fs.readFileSync(pathProductos, "utf-8"));



const controller = {
    producto: (req, res) => {
        let id = req.params.id;
        let producto;
        for (let p of productos) {
            if (p.id == id) {
                producto = p;
                break;
            }
        }
        if (producto != undefined)
            res.render("./products/producto", { producto: producto });
        else
            res.send("El articulo no existe!!!!");
    },
    carrito: (req, res) => {
        res.render("./products/carrito-compra");
    },
    crear: (req, res) => {
        res.render("./products/crearProducto");
    },
    crearProducto: (req, res) => {

        nombreFoto = req.file.filename;

        idProducto = 0
        for (i = 0; i < productos.length; i++) {
            if (idProducto < productos[i].id) {
                idProducto = idProducto + 1;
            }
        }
        idProducto = idProducto + 1

        productoNuevo = {
            id: idProducto,
            categoriasProducto: req.body.categoriasProducto,
            fotoProducto: nombreFoto,
            nombreArtista: req.body.nombreArtista,
            caracteristicasProducto: req.body.caracteristicasProducto,
            condicionProducto: req.body.condicionProducto,
            precio: req.body.precio
        }

        productos.push(productoNuevo)

        fs.writeFileSync(pathProductos, JSON.stringify(productos, null, " "))

        res.redirect("/")

    },
    /*
        editar: (req, res) => {
            res.render("./products/editarProducto");
        },
        */
    all: (req, res) => {
        res.render("./products/listaProductos", { productos: productos });
    },

    editar: (req, res) => {

        let id = req.params.id;
        let productoEncontrado;

        for (let s of productos) {
            if (id == s.id) {
                productoEncontrado = s;
            }
        }

        res.render("./products/editarProducto", { ProductoaEditar: productoEncontrado });
    },

    actualizar: (req, res) => {

        let id = req.params.id;
        //let productoEncontrado;

        for (let s of productos) {
            if (id == s.id) {
                //s.categoriasProducto = req.body.categoriasProducto;
                //s.fotoProducto = nombreFoto
                s.nombreArtista = req.body.nombreArtista;
                s.caracteristicasProducto = req.body.caracteristicasProducto;
                // s.condicionProducto = req.body.condicionProducto;
                s.precio = req.body.precio
                break;
            }
        }

        fs.writeFileSync(pathProductos, JSON.stringify(productos, null, ' '));

        res.redirect('/');
    }

};

module.exports = controller;