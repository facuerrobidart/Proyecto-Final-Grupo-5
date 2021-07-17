const controller = {
    producto: (req,res)=>{
        res.render("./products/producto");
    },
    carrito: (req,res)=>{
        res.render("./products/carrito-compra");
    }
}

module.exports = controller;