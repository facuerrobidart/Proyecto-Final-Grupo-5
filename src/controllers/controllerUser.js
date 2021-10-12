const fs = require("fs");
const { dirname } = require("path");
const path = require("path");
const {body,validationResult} = require("express-validator");
const bcrypt = require('bcryptjs');

const pathUsuarios = path.join(__dirname, "../../src/data/userDataBase.json");
const usuarios = JSON.parse(fs.readFileSync(pathUsuarios, "utf-8"));

let db = require("../database/models")

const controller = {
    login: (req, res) => {
        res.render("./users/login");
    },
    procesoLogin:(req, res)=>{
        let error = validationResult(req);
        emailUsuario = req.body.email
        db.usuarios.findAll({
            where: { email : emailUsuario}
        })
            .then((usuario)=>{
                let usuarioLogueado = usuario
                let contrasenaUsuario
                if(usuarioLogueado){
                    for( let i=0; i<usuarioLogueado.length; i++){
                        contrasenaUsuario = usuarioLogueado[i].contrasena }
                let contrasenaCorrecta = bcrypt.compareSync(req.body.password, contrasenaUsuario)
                if(contrasenaCorrecta){
                    req.session.usuarioLogueado = usuarioLogueado

                    if(req.body.recordarUsuario){
                        res.cookie("email", req.body.email, {maxAge: (1000*60)*60})
                    }
                     res.redirect("/user/info")
                }
                else if (error.isEmpty()){
                    res.render("./users/login", { mensaje: ("las credenciales son invalidas") });
                }else{
                    if(error.array()[0].param=="contraseña"){
                        res.render("./users/login",{mensaje: ("La contraseña debe tener al menos 6 caracteres")});
                    }else{
                        res.render("./users/login",{mensaje: ("Ingrese un email válido")});
                    }
                }
            }

            })
            .catch((error)=>{
                res.render("./users/login", { mensaje: ("email incorrecto intentelo nuevamente")
            })})

    },

    /*
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
    */

    logout:(req, res)=>{
        res.clearCookie("email")
        req.session.destroy()
        res.redirect("/")
    },
    registro: (req, res) => {
         db.tipos_usuario.findAll()
            .then((tiposUsuarios)=>{
                let tipos_usuario=tiposUsuarios
                res.render("./users/registro", { tipos_usuario:tipos_usuario});
            })

    },
    registroUsuario: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()){ //si no hay errores procedo
            db.usuarios.create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email:req.body.email,
                contrasena: bcrypt.hashSync(req.body.contrasena, 5),
                direccion:req.body.direccion,
                ciudad: req.body.ciudad,
                provincia: req.body.provincia,
                codigo_postal: req.body.codigoPostal,
                tipos_usuario_id: req.body.tipoUsuario,
            })
            res.redirect("/");
        }else{ //si no, devuelvo errores
            res.render("./users/registro",{tipos_usuario:tipos_usuario,errores:errors});
        }
    },



    /*
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
        */

    info: (req,res)=>{
        res.render("./users/info", { usuarioLogueado : req.session.usuarioLogueado});
    }


}




module.exports = controller;