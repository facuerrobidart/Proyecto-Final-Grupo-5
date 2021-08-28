const path = require("path");
const fs = require("fs");


const userFilePath = path.join(__dirname, "../../src/data/userDataBase.json")
const usuarios = JSON.parse(fs.readFileSync(userFilePath, "utf-8"))

function usuarioLogueadoMiddleware (req, res, next){

  res.locals.estalogueado = false

  let emailEnCookie = req.cookies.email
  let usuarioEnCookie;

  for (i=0; i < usuarios.length; i++){
    if ( usuarios[i].email == emailEnCookie){
      usuarioEnCookie = usuarios[i]
    }
  }
  if ( usuarioEnCookie){
    req.session.usuarioLogueado = usuarioEnCookie
  }
  if (req.session.usuarioLogueado){
    res.locals.estalogueado = true
  }

  next()
}

module.exports = usuarioLogueadoMiddleware