const fs = require("fs");
const { dirname } = require("path");
const path = require("path");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');

const pathUsuarios = path.join(__dirname, "../../src/data/userDataBase.json");
const usuarios = JSON.parse(fs.readFileSync(pathUsuarios, "utf-8"));

let db = require("../database/models")

const controller = {
    login: (req, res) => {
        res.render("./users/login");
    },
    procesoLogin: (req, res) => {
        let error = validationResult(req);
        emailUsuario = req.body.email
        db.usuarios.findAll({
            where: { email: emailUsuario }
        })
            .then((usuario) => {
                let usuarioLogueado = usuario
                let contrasenaUsuario
                if (usuarioLogueado) {
                    for (let i = 0; i < usuarioLogueado.length; i++) {
                        contrasenaUsuario = usuarioLogueado[i].contrasena
                    }
                    let contrasenaCorrecta = bcrypt.compareSync(req.body.password, contrasenaUsuario);
                    console.log(error.array());
                    if (contrasenaCorrecta) {
                        req.session.usuarioLogueado = usuarioLogueado
                        if (req.body.recordarUsuario) {
                            res.cookie("email", req.body.email, {maxAge: (1000 * 60) * 60})
                        }
                        console.log(req.session.usuarioLogueado);
                        res.redirect("/user/info");
                    }
                    else if (error.isEmpty()) {
                        res.render("./users/loginV2", { mensaje: ("Las credenciales son invalidas") });
                    } else if (error.array()[0].param == "password") {
                        res.render("./users/loginV2", { mensaje: ("La contraseña debe tener al menos 6 caracteres") });
                    } else {
                        res.render("./users/loginV2", { mensaje: ("Ingrese un email válido") });
                    }

                }
            })
            .catch((error) => {
                res.render("./users/loginV2", {
                    mensaje: ("Email incorrecto intentelo nuevamente")
                })
            })

    },
    logout: (req, res) => {
        res.clearCookie("email")
        req.session.destroy()
        res.redirect("/")
    },
    registro: (req, res) => {
        db.tipos_usuario.findAll()
            .then((tiposUsuarios) => {
                let tipos = tiposUsuarios;
                console.log(tipos);
                res.render("./users/registro", { tipos_usuario: tiposUsuarios });
            })
            .catch((e)=>{console.log(e)});

    },
    registroUsuario: (req, res) => {
        let errors = validationResult(req);
        let tipos_usuario;

        db.tipos_usuario.findAll()
            .then((tiposUsuarios) => {
                tipos_usuario = tiposUsuarios;
            });

        if (errors.isEmpty()) { //si no hay errores procedo
            db.usuarios.create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                contrasena: bcrypt.hashSync(req.body.contrasena, 5),
                direccion: req.body.direccion,
                ciudad: req.body.ciudad,
                provincia: req.body.provincia,
                codigo_postal: req.body.codigoPostal,
                tipos_usuario_id: req.body.tipoUsuario,
            })
            res.redirect("/");
        } else { //si no, devuelvo errores
            res.render("./users/registro", { tipos_usuario: tipos_usuario, errores: errors });
        }
    },

    info: (req, res) => {
        let enviar = req.session.usuarioLogueado;
        enviar[0].contrasena="";
        console.log(enviar);
        res.render("./users/infoV2", { usuarioLogueado: enviar }); //NO ENVIA CONTRASEÑA AL FRONT
    },

    usuariosAPI: (req, res) => {
        db.usuarios.findAll({ attributes: ['id', 'nombre', 'apellido', 'email', 'direccion', 'ciudad', 'provincia', 'codigo_postal', 'tipos_usuario_id'] })
            .then((usuario) => {
                return res.status(200).json({
                    //status: 200,
                    count: usuario.length,
                    users: usuario
                });
            })
    },

    usuarioUnicoAPI: (req, res) => {
        let user = req.params.id;
        db.usuarios.findAll({
            where: { id: user },
            attributes: ['id', 'nombre', 'apellido', 'email', 'direccion', 'ciudad', 'provincia', 'codigo_postal', 'tipos_usuario_id']
        }
        )
            .then((usuario) => {
                //console.log(usuario);
                if (usuario.length != 0) {
                    return res.status(200).json({
                        //status: 200,
                        users: usuario
                    });
                }
                else { res.send("El usuario no existe!!!") }
            })
    },
    loginV2: (req,res)=>{
        res.render("./users/loginV2");
    }
}



module.exports = controller;