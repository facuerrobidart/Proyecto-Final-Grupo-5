const controller = {
    producto: (req,res)=>{
        res.render("producto");
    },
    carrito: (req,res)=>{
        res.render("carrito-compra");
    }
}

module.exports = controller;