
let db = require("../database/models");

function edicionAutorizada(){
    db.productos.findByPk(req.params.id)
        .then((product)=>{
            if (req.session.usuarioLogueado.id == product.usuarios_vendedor_id)
                next();
            else
                return res.redirect("/");
        });
}
module.exports = edicionAutorizada