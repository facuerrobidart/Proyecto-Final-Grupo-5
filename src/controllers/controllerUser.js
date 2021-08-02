const fs = require("fs");
const path = require("path");

const pathUsuarios = path.join(__dirname, "../../src/data/userDataBase.json");
const usuarios = JSON.parse(fs.readFileSync(pathUsuarios, "utf-8"));

const controller = {
    login: (req,res)=>{
        res.render("./users/login");
    },
    registro: (req,res)=>{
        res.render("./users/registro");
    },
    registroUsuario: (req,res) => {
        idUsuario = 0
        for (i = 0; i < usuarios.length; i++) {
            if (idUsuario < usuarios[i].id) {
                idUsuario = idUsuario + 1
            }
        }
        idUsuario = idUsuario + 1
        let nuevoUsuario= {
            id: idUsuario,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            contraseña: req.body.contraseña,
            direccion: req.body.direccion,
            ciudad: req.body.ciudad,
            provincia: req.body.provincia
            }
         usuarios.push(nuevoUsuario)

        fs.writeFileSync(pathUsuarios, JSON.stringify(usuarios, null, " "));

        res.redirect("/")

    }
}




module.exports = controller;