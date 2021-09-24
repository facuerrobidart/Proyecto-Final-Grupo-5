const path = require("path");
const fs = require("fs");


const userFilePath = path.join(__dirname, "../../src/data/userDataBase.json")
const usuarios = JSON.parse(fs.readFileSync(userFilePath, "utf-8"))

let db = require("../database/models")


function usuarioLogueadoMiddleware (req, res, next){

  res.locals.estalogueado = false

  let emailEnCookie = req.cookies.email

  let usuarioEnCookie

  if( emailEnCookie != undefined ){
   res.locals.estalogueado = true;

 db.usuarios.findOne({
    where: { email: emailEnCookie }
  })
    .then((usuario) => {
      let u = {
        nombre: usuario.nombre,
        apellido:usuario.apellido,
        email: usuario.email,
        direccion: usuario.direccion,
        ciudad: usuario.ciudad,
        provincia: usuario.provincia,
        codigo_postal: usuario.codigo_postal,
        tipos_usuario_id: usuario.tipos_usuario_id
      }
        usuarioEnCookie = u

        if(usuarioEnCookie){
          if (req.session.usuarioLogueado){
          req.session.usuarioLogueado = usuarioEnCookie}
        }

    })


  }


  next()

}

module.exports = usuarioLogueadoMiddleware