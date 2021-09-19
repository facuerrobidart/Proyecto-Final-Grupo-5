
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
                let producto = product
                if (producto != undefined)
                    res.render("./products/producto", { producto: producto });
                else
                    res.send("El articulo no existe!!!!");
            })
        // let producto;
        // for (let p of productos) {
        //     if (p.id == id) {
        //         producto = p;
        //         break;
        //     }
        // }

    },
    carrito: (req, res) => {
        res.render("./products/carrito-compra");
    },
    crear: (req, res) => {
        let usuarioVendedor = req.session.usuarioLogueado
        idVendedor = usuarioVendedor[0].id

        let categoriasProducto =db.categorias_producto.findAll()
        let condicionesProducto = db.condiciones_producto.findAll()

        Promise.all([categoriasProducto, condicionesProducto])
            .then(([categorias, condiciones])=>{

                res.render("./products/crearProducto",
                { categorias:categorias, condiciones:condiciones,idVendedor:idVendedor})
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


        res.redirect("/")

        // db.productos.findOne({
        //     where: { titulo : req.body.titulo}
        // })
            // .then((producto)=>{
            //     let idProducto = producto.id
            //     console.log(idProducto)
            //     db.imagenes_producto.create({
            //         nombre_imagen:nombreFoto,
            //         productos_id:idProducto
            //     })
            // })



        // db.imagenes_producto.create({
        //     nombre_imagen: req.body.fotoProducto,
        //     productos_id:
        // })




        // nombreFoto = req.file.filename;

        // idProducto = 0
        // for (i = 0; i < productos.length; i++) {
        //     if (idProducto < productos[i].id) {
        //         idProducto = idProducto + 1;
        //     }
        // }
        // idProducto = idProducto + 1

        // productoNuevo = {
        //     id: idProducto,
        //     titulo: req.body.titulo,
        //     categoriasProducto: req.body.categoriasProducto,
        //     fotoProducto: nombreFoto,
        //     nombreArtista: req.body.nombreArtista,
        //     caracteristicasProducto: req.body.caracteristicasProducto,
        //     condicionProducto: req.body.condicionProducto,
        //     precio: req.body.precio
        // }

        // productos.push(productoNuevo)

        // fs.writeFileSync(pathProductos, JSON.stringify(productos, null, " "))

        // res.redirect("/")


    },

    all: (req, res) => {

        db.productos.findAll()
            .then((productos)=>{
                let products = productos
                res.render("./products/listaProductos", { products: products })
            })

    },

    editar: (req, res) => {
        idProducto = req.params.id
        db.productos.findByPk(idProducto)
            .then((producto=>{
                console.log(producto)
                let ProductoaEditar = producto
                console.log(ProductoaEditar)
                res.render("./products/editarProducto", { ProductoaEditar:ProductoaEditar})
            }))
        // let id = req.params.id;
        // let categoriasProducto = db.categorias_producto.findAll()
        // let condicionesProducto = db.condiciones_producto.findAll()

        // Promise.all([categoriasProducto, condicionesProducto])
        //     .then(([categorias, condiciones]) => {
        //         db.productos.findByPk(id)
        //             .then((producto)=>{
        //                 ProductoaEditar = producto
        //                 res.render("./products/editarProducto",
        //                     {
        //                         categorias: categorias,
        //                         condiciones: condiciones,
        //                         ProductoaEditar: ProductoaEditar
        //                     })
        //             })


        //     })
        //     .catch((error)=>{
        //         res.send(console.log(error))
        //     })


        // let productoEncontrado;

        // for (let s of productos) {
        //     if (id == s.id) {
        //         productoEncontrado = s;
        //     }
        // }

        //res.render("./products/editarProducto", { ProductoaEditar: productoEncontrado });
    },

    actualizar: (req, res) => {

        let id = req.params.id
        let nombreImagen
        if(req.file){
            nombreImagen = req.file.filename
        }


        db.productos.update({
            titulo: req.body.titulo,
            descripcion: req.body.caracteristicasProducto,
            precio: req.body.precio,
            nombre_artista: req.body.nombreArtista,
            nombre_imagen: nombreImagen
        },

        {
            where:  { id : id }
        })
        res.redirect("/")


        // for (let s of productos) {
        //     if (id == s.id) {
        //         productoEncontrado = s;
        //     }
        // }

        // let nombreImagenEditar = req.file.filename;

        // fs.unlinkSync(path.join(__dirname, "../../public/images/", productoEncontrado.fotoProducto));


        // for (let s of productos) {
        //     if (id == s.id) {
        //         s.titulo = req.body.titulo;
        //         s.categoriasProducto = req.body.categoriasProducto;
        //         s.fotoProducto = nombreImagenEditar;
        //         s.nombreArtista = req.body.nombreArtista;
        //         s.caracteristicasProducto = req.body.caracteristicasProducto;
        //         s.condicionProducto = req.body.condicionProducto;
        //         s.precio = req.body.precio
        //         break;
        //     }
        // }

        // fs.writeFileSync(pathProductos, JSON.stringify(productos, null, ' '));

        // res.redirect('/');
    }

};

module.exports = controller;