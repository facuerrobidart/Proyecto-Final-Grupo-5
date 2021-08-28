const fs = require("fs");
const { dirname } = require("path");
const path = require("path");

const bcrypt = require('bcryptjs');

const pathUsuarios = path.join(__dirname, "../../src/data/userDataBase.json");
const usuarios = JSON.parse(fs.readFileSync(pathUsuarios, "utf-8"));

const controller = {
    login: (req, res) => {
        res.render("./users/login");
    },
    procesoLogin: (req, res) =>{
        let usuarioLogueado;
        let emailUsuarioLogueado = req.body.email;

        for(let i=0; i < usuarios.length; i++){
            if(usuarios[i].email == emailUsuarioLogueado){
                usuarioLogueado = usuarios[i]
            }
        }
            if(usuarioLogueado){
                let estaBienContraseña = bcrypt.compareSync(req.body.password, usuarioLogueado.contraseña)


                if(estaBienContraseña){
                    delete usuarioLogueado.contraseña
                    req.session.usuarioLogueado = usuarioLogueado

                if(req.body.recordarUsuario){
                    res.cookie("email", req.body.email, {maxAge: (1000*60) * 60})
                }
                return res.redirect("/user/info")
                }
            }

        res.render("./users/login", {mensaje: ("las credenciales son invalidas")})
    },
    logout:(req, res)=>{
        res.clearCookie("email")
        req.session.destroy()
        res.redirect("/")
    },
    registro: (req, res) => {
        res.render("./users/registro");
    },
    registroUsuario: (req, res) => {

        let nombreFoto = req.file.filename;

        idUsuario = 0
        for (i = 0; i < usuarios.length; i++) {
            if (idUsuario < usuarios[i].id) {
                idUsuario = idUsuario + 1
            }
        }
        idUsuario = idUsuario + 1
        let nuevoUsuario = {
            id: idUsuario,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            contraseña: bcrypt.hashSync(req.body.contraseña, 10),
            direccion: req.body.direccion,
            ciudad: req.body.ciudad,
            provincia: req.body.provincia,
            imageUser: nombreFoto
        }
        usuarios.push(nuevoUsuario)

        fs.writeFileSync(pathUsuarios, JSON.stringify(usuarios, null, " "));

        res.redirect("/")

    },
    info: (req,res)=>{
        res.render("./users/info", { usuarioLogueado : req.session.usuarioLogueado});
    }
}




module.exports = controller;