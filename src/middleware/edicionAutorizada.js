
let db = require("../database/models");

function edicionAutorizada(req, res, next) {
    db.productos.findByPk(req.params.id)
        .then((product) => {
            if (req.session.usuarioLogueado[0].id != product.usuarios_vendedor_id)
                return res.redirect("/");
            else{
                next();
            }
        });
}
module.exports = edicionAutorizada