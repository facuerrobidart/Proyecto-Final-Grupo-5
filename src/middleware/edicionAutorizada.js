
let db = require("../database/models");

let id = req.params.id;
function edicionAutorizada(){
    db.productos.findByPk(id)
        .then((product)=>{
            if (req.session.usuarioLogueado.id == product.usuarios_vendedor_id)
                next();
            else
                return res.redirect("/");
        });
}
module.exports = edicionAutorizada