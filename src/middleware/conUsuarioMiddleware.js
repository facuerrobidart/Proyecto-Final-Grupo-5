function conUsuarioMiddleware(req, res, next) {
  if (req.session.usuarioLogueado) {
    return res.redirect("/user/info")
  }
  next()
}

module.exports = conUsuarioMiddleware