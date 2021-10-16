
window.onload=function(){

let bienvenida = document.querySelector("#bienvenida")
let contanos = document.querySelector("#contanos")

bienvenida.addEventListener("mouseover", function(){
  bienvenida.style.color = "blue"
})
contanos.addEventListener("mouseover", function(){
  contanos.style.color = "blue"
})

let inputTitulo = document.querySelector("#inputTitulo")
let inputCategoria = document.querySelector("#inputCategoria")
let inputNombreArtista = document.querySelector("#nombre-artista")
let inputCaracteristicas = document.querySelector("#inputCaracteristicas")
let inputCondicion = document.querySelector("#condicionProducto")
let inputPrecio = document.querySelector("#precio")
let inputStock = document.querySelector("#stock")
let inputImagen = document.querySelector("#imagenProducto")


  inputTitulo.addEventListener("blur", function () {

    if (inputTitulo.value == "") {
      document.getElementById("parrafoErrorTitulo").classList.remove("inputError")
      document.getElementById("parrafoErrorTitulo").classList.add("inputErrorActivo")
      document.getElementById("iconoTitulo").style.opacity = 1
      document.getElementById("iconoTitulo").style.color = "#bb2929"
    }
    else {
      document.getElementById("parrafoErrorTitulo").classList.add("inputError")
      document.getElementById("parrafoErrorTitulo").classList.remove("inputErrorActivo")
      document.getElementById("iconoTitulo").style.opacity = 1
      document.getElementById("iconoTitulo").style.color = "#1ed12d"
      document.getElementById("iconoTitulo").classList.remove("fa-times-circle")
      document.getElementById("iconoTitulo").classList.add("fa-check-circle")

    }
  })

  inputCategoria.addEventListener("blur", function () {
    if (inputCategoria.value == "Elija Uno") {
      document.getElementById("parrafoErrorCategoria").classList.remove("inputError")
      document.getElementById("parrafoErrorCategoria").classList.add("inputErrorActivo")
    }
    else {
      document.getElementById("parrafoErrorCategoria").classList.add("inputError")
      document.getElementById("parrafoErrorCategoria").classList.remove("inputErrorActivo")
    }
  })

  inputNombreArtista.addEventListener("blur", function () {
    if (inputNombreArtista.value == "") {
      document.getElementById("parrafoErrorNombreArtista").classList.remove("inputError")
      document.getElementById("parrafoErrorNombreArtista").classList.add("inputErrorActivo")
      document.getElementById("iconoNombreArtista").style.opacity = 1
      document.getElementById("iconoNombreArtista").style.color = "#bb2929"
    }
    else {
      document.getElementById("parrafoErrorNombreArtista").classList.add("inputError")
      document.getElementById("parrafoErrorNombreArtista").classList.remove("inputErrorActivo")
      document.getElementById("iconoNombreArtista").style.opacity = 1
      document.getElementById("iconoNombreArtista").style.color = "#1ed12d"
      document.getElementById("iconoNombreArtista").classList.remove("fa-times-circle")
      document.getElementById("iconoNombreArtista").classList.add("fa-check-circle")
    }
  })

  inputCaracteristicas.addEventListener("blur", function () {
    if (inputCaracteristicas.value == "") {
      document.getElementById("parrafoErrorCaracteristicas").classList.remove("inputError")
      document.getElementById("parrafoErrorCaracteristicas").classList.add("inputErrorActivo")
    }
    else {
      document.getElementById("parrafoErrorCaracteristicas").classList.add("inputError")
      document.getElementById("parrafoErrorCaracteristicas").classList.remove("inputErrorActivo")
    }
  })

  inputCondicion.addEventListener("blur", function () {

    if (inputCondicion.value == "Elija Uno") {
      document.getElementById("parrafoErrorCondicion").classList.remove("inputError")
      document.getElementById("parrafoErrorCondicion").classList.add("inputErrorActivo")
    }
    else {
      document.getElementById("parrafoErrorCondicion").classList.add("inputError")
      document.getElementById("parrafoErrorCondicion").classList.remove("inputErrorActivo")
    }
  })

  inputImagen.addEventListener("blur", function () {
    
  if (inputImagen.value == "") {
    document.getElementById("parrafoErrorImagen").classList.remove("inputError")
    document.getElementById("parrafoErrorImagen").classList.add("inputErrorActivo")
  }
  else {
    document.getElementById("parrafoErrorImagen").classList.add("inputError")
    document.getElementById("parrafoErrorImagen").classList.remove("inputErrorActivo")
  }
})

  inputPrecio.addEventListener("blur", function () {

    if (inputPrecio.value == "") {
      document.getElementById("parrafoErrorPrecio").classList.remove("inputError")
      document.getElementById("parrafoErrorPrecio").classList.add("inputErrorActivo")
      document.getElementById("iconoPrecio").style.opacity = 1
      document.getElementById("iconoPrecio").style.color = "#bb2929"
    }
    else {
      document.getElementById("parrafoErrorPrecio").classList.add("inputError")
      document.getElementById("parrafoErrorPrecio").classList.remove("inputErrorActivo")
      document.getElementById("iconoPrecio").style.opacity = 1
      document.getElementById("iconoPrecio").style.color = "#1ed12d"
      document.getElementById("iconoPrecio").classList.remove("fa-times-circle")
      document.getElementById("iconoPrecio").classList.add("fa-check-circle")
    }
  })

  inputStock.addEventListener("blur", function () {

    if (inputStock.value == "") {
      document.getElementById("parrafoErrorStock").classList.remove("inputError")
      document.getElementById("parrafoErrorStock").classList.add("inputErrorActivo")
      document.getElementById("iconoStock").style.opacity = 1
      document.getElementById("iconoStock").style.color = "#bb2929"
    }
    else {
      document.getElementById("parrafoErrorStock").classList.add("inputError")
      document.getElementById("parrafoErrorStock").classList.remove("inputErrorActivo")
      document.getElementById("iconoStock").style.opacity = 1
      document.getElementById("iconoStock").style.color = "#1ed12d"
      document.getElementById("iconoStock").classList.remove("fa-times-circle")
      document.getElementById("iconoStock").classList.add("fa-check-circle")
    }
  })
  let formularioProductos = document.querySelector("#formularioProducto")

  console.log(formularioProductos)

  formularioProductos.addEventListener("submit", function (evento) {

    let errores = []

    if (inputTitulo.value == "") {
      errores.push(" Por Favor ingresa el titulo del Producto")
    }
    if (inputCategoria.value == "Elija Uno") {
      errores.push("Debes seleccionar una Categoria para tu Producto")
    }
    if (inputNombreArtista.value == "") {
      errores.push("Debes Ingresar el Nombre del Artista")
    }
    if (inputCaracteristicas.value == "") {
      errores.push("Ingresa una descripcion del Producto")
    }
    if (inputCondicion.value == "Elija Uno") {
      errores.push("Debes seleccionar la Condicion de tu Producto")
    }
    if (inputPrecio.value == "") {
      errores.push("Ingresa el Precio del Producto")
    }
    if (inputStock.value == "") {
      errores.push("Ingresa el Stock del Producto")
    }

    if (errores.length > 0) {
      evento.preventDefault()
      let ulErrores = document.querySelector("div.errores ul")
      console.log(ulErrores)
      ulErrores.innerHTML = ""
      for (let i = 0; i < errores.length; i++) {
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
      }
    }

  })

}