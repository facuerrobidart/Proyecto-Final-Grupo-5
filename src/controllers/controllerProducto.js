const controller = {
    producto: (req,res)=>{
        res.render("./products/producto");
    },
    carrito: (req,res)=>{
        res.render("./products/carrito-compra");
    },
    crear: (req, res) => {
        res.render("./products/crearProducto");
    },
    editar: (req, res) =>{
        res.render("./products/editarProducto");
    }
}

module.exports = controller;