
const { promiseImpl } = require("ejs");
const fs = require("fs");
const { dirname } = require("path");
const path = require("path");
const { validationResult } = require("express-validator");
const pathProductos = path.join(__dirname, "../../src/data/productosDataBase.json");
const productos = JSON.parse(fs.readFileSync(pathProductos, "utf-8"));

let db = require("../database/models")
const Op = db.Sequelize.Op;




const controller = {
    producto: (req, res) => {
        let id = req.params.id;
        db.productos.findByPk(id)
            .then((product) => {
                let producto = product;
                if (producto != undefined) {
                    res.render("./products/producto", { producto: producto })
                }
                else { res.send("El articulo no existe!!!") }
            })
    },
    carrito: (req, res) => {
        res.render("./products/carrito-compra");
    },
    crear: (req, res) => {
        let usuarioVendedor = req.session.usuarioLogueado;
        idVendedor = usuarioVendedor[0].id;

        let categoriasProducto = db.categorias_producto.findAll();
        let condicionProducto = db.condiciones_producto.findAll();
        Promise.all([categoriasProducto, condicionProducto])
            .then(([categorias, condiciones]) => {

                res.render("./products/crearProducto", {
                    categorias: categorias, condiciones: condiciones, idVendedor: idVendedor
                })
            })

    },
    crearProducto: (req, res) => {

        let nombreImagen;
        if (req.file) {
            nombreImagen = req.file.filename
        }

        let errors = validationResult(req);
        console.log(req.file);
        if ((req.file.mimetype == "image/jpeg" || req.file.mimetype == "image/png") && errors.isEmpty) { //valido mimetype y me traigo las validaciones del middleware
            db.productos.create({
                titulo: req.body.titulo,
                descripcion: req.body.caracteristicasProducto,
                precio: req.body.precio,
                nombre_artista: req.body.nombreArtista,
                stock: req.body.stock,
                categorias_producto_id: req.body.categoriasProducto,
                condiciones_producto_id: req.body.condicionProducto,
                usuarios_vendedor_id: req.body.idVendedor,
                nombre_imagen: nombreImagen
            })
            res.redirect("/producto/all");
        } else { // si hay algun problema, devuelve al formulario de creacion
            res.render("./crear", { errores: errors });
        }
    },

    all: (req, res) => {
        db.productos.findAll()
            .then((productos) => {
                let products = productos
                res.render("./products/listaProductos", { products: products });
            })
    },

    misProductos: (req, res) => {

        let usuarioVendedor = req.session.usuarioLogueado;
        let vendedor;
        if (usuarioVendedor != undefined) {
            for (let i = 0; i < usuarioVendedor.length; i++) {
                vendedor = usuarioVendedor[i].id
            }
        } else {
            res.redirect("/user/login");
        }

        //console.log(usuarioVendedor);
        //console.log(vendedor);

        db.productos.findAll({
            where: {
                usuarios_vendedor_id: vendedor
            },
        })
            .then((productos) => {
                let products = productos
                res.render("./products/misProductos", { products: products, usuarioLogueado: usuarioVendedor });
            })
            .catch((error) => {
                res.send(error)
            })
    },

    editar: (req, res) => {

        let idProducto = req.params.id;
        db.productos.findByPk(idProducto)
            .then((producto => {
                let ProductoaEditar = producto
                res.render("./products/editarProducto", { ProductoaEditar: ProductoaEditar });
            }))
    },

    actualizar: (req, res) => {

        let id = req.params.id;
        let nombreImagen;
        let errors = validationResult(req);

        if (req.file) {
            nombreImagen = req.file.filename
        }
        if ((req.file.mimetype == "image/jpeg" || req.file.mimetype == "image/png") && errors.isEmpty) {
            db.productos.update({
                titulo: req.body.titulo,
                descripcion: req.body.descripcion,
                precio: req.body.precio,
                nombre_artista: req.body.nombre_artista,
                nombre_imagen: nombreImagen,
            },
                {
                    where: { id: id }
                })
            res.redirect("/producto/all")
        } else {
            let ruta = "/producto/editar" + req.params.id;
            res.render(ruta, { errores: errors });
        }

    },
    delete: (req, res) => {
        id = req.params.id
        console.log(id)
        db.productos.destroy({
            where: { id: id }
        })
            .then((resultado) => {
                res.redirect("/producto/all")
            })
            .catch((error) => {
                res.send(error)
            })
    },
    buscar: (req, res) => {

        let buscado = req.body.buscar;
        console.log(buscado);

        db.productos.findAll({
            where: {
                titulo: {
                    [Op.like]: '%' + buscado + '%'
                }
            },
        })
            .then((productos) => {
                let prod = productos;
                if (prod.length !== 0) {
                    res.render("./products/listaProductos", { products: productos });
                } else {
                    //res.send("Producto no encontrado")
                    res.redirect("/producto/all");
                }
            })


    }

};


module.exports = controller;