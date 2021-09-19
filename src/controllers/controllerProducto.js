
const { promiseImpl } = require("ejs");
const fs = require("fs");
const { dirname } = require("path");
const path = require("path");

const pathProductos = path.join(__dirname, "../../src/data/productosDataBase.json");
const productos = JSON.parse(fs.readFileSync(pathProductos, "utf-8"));

let db = require("../database/models")



const controller = {
    producto: (req, res) => {
        let id = req.params.id;
        db.productos.findByPk(id)
        .then((product)=>{
            let producto = product;
            if(producto != undefined);
            res.render("./products/producto", {producto: producto});
            elseres.send("El articulo no existe!!!");
        })
    },
    carrito: (req, res) => {
        res.render("./products/carrito-compra");
    },
    crear: (req, res) => {
        let usuarioVendedor= req.session.usuarioLogueado;
        idVendedor = usuarioVendedor[0].id;

        let categoriaProducto = db.categorias_producto.findAll();
        let condicionProducto = db.condiciones_producto.findAll();
        Promise.all([categoriasProducto, condicionProducto])
            .then(([categorias, condiciones])=>{

                res.render("./products/crearProducto", {categorias: categorias, condiciones: condiciones, idVendedor: idVendedor
                })
            })

    },
    crearProducto: (req, res) => {
         let nombreImagen = req.file.filename
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

        let nombreImagen = req.file.filename;


        db.productos.create = ({
            titulo: req.body.titulo,
            descripcion: req.body.caracteristicasProducto,
            precio: req.body.precio,
            nombre_artista: req.body.nombre_artista,
            stock: req.body.stock,
            categorias_producto_id: req.body.categorias_producto_id,
            condiciones_producto_id: req.body.condiciones_producto_id,
            usurios_vendedor_id: req.body.usurios_vendedor_id,
            nombre_imagen: nombre_imagen
        })
        res.render("/")


    },

    all: (req, res) => {
        db.productos.findAll()
        .then((productos)=>{
            let products = productos
            res.render("./products/listaProductos", { products: products });
        })

    },

    all: (req, res) => {

        let idProducto = req.params.id;
        db.productos.findByPk(idProducto)
        .then((producto=>{
            console.log(producto)
            let ProductoaEditar = producto
            console.log(ProductoaEditar)
            res.render("./products/editarProducto", { ProductoaEditar: ProductoaEditar });
        }))


    },

    actualizar: (req, res) => {

        let id = req.params.id
        let nombreImagen
        if(req.file){
            nombreImagen = req.file.filename
        }

        let nombreImagen;

        if (req.file) {
            nombreImagen = req.file.filename}

            db.productos.update({
                titulo: req.body.titulo,
                descripcion: req.body.descripcion,
                precio: req.body.precio,
                nombre_artista: req.body.nombre_artista,
                nombre_imagen: req.body.nombre_imagen,

            },
        {
            where: {id:id}
        })
            res.render("/")
            }
    };


module.exports = controller;