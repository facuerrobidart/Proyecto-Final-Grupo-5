function sinUsuarioMiddleware(req, res, next) {
  if (!req.session.usuarioLogueado) {
    return res.redirect("/user/loginV2");
  }
  next()
}

module.exports = sinUsuarioMiddleware