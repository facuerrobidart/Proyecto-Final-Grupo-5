
window.onload=function(){

  let tituloFormulario = document.querySelector(".tituloRegistro")

  tituloFormulario.addEventListener("mouseover", function(){
    tituloFormulario.style.color = "blue"

  })

  let inputNombre = document.querySelector("#nombre")
  let inputApellido = document.querySelector("#apellido")
  let inputEmail = document.querySelector("#email")
  let inputContrasena = document.querySelector("#contrasena")
  let inputProvincia = document.querySelector("#provincia")
  let inputTipoUsuario = document.querySelector("#tipoUsuario")

  inputNombre.addEventListener("blur", function () {
    if (inputNombre.value == "") {
      document.getElementById("parrafoErrorNombre").classList.remove("inputError")
      document.getElementById("parrafoErrorNombre").classList.add("inputErrorActivo")
    }
    else {
      document.getElementById("parrafoErrorNombre").classList.add("inputError")
      document.getElementById("parrafoErrorNombre").classList.remove("inputErrorActivo")
    }
  })

  inputApellido.addEventListener("blur", function () {
      if (inputApellido.value == "") {
        document.getElementById("parrafoErrorApellido").classList.remove("inputError")
        document.getElementById("parrafoErrorApellido").classList.add("inputErrorActivo")
      }
      else {
        document.getElementById("parrafoErrorApellido").classList.add("inputError")
        document.getElementById("parrafoErrorApellido").classList.remove("inputErrorActivo")
      }
    })

      inputEmail.addEventListener("blur", function () {
      if (inputEmail.value == "" ) {
        document.getElementById("parrafoErrorEmail").classList.remove("inputError")
        document.getElementById("parrafoErrorEmail").classList.add("inputErrorActivo")
      }
      else {
        document.getElementById("parrafoErrorEmail").classList.add("inputError")
        document.getElementById("parrafoErrorEmail").classList.remove("inputErrorActivo")
      }
      })
      inputEmail.addEventListener("blur", function () {
      if ( inputEmail.value.indexOf("@")  < 0) {
        document.getElementById("parrafoErrorArroba").classList.remove("inputError")
        document.getElementById("parrafoErrorArroba").classList.add("inputErrorActivo")
      }
      else {
        document.getElementById("parrafoErrorArroba").classList.add("inputError")
        document.getElementById("parrafoErrorArroba").classList.remove("inputErrorActivo")
      }
    })

    inputContrasena.addEventListener("focus", function () {
    document.getElementById("parrafoIndicaciones").classList.remove("inputIndicaciones")
    document.getElementById("parrafoIndicaciones").classList.add("inputIndicacionesActivo")
    })

    inputContrasena.addEventListener("blur", function () {

    document.getElementById("parrafoIndicaciones").classList.remove("inputIndicacionesActivo")
    document.getElementById("parrafoIndicaciones").classList.add("inputIndicaciones")

    if (inputContrasena.value == "" || inputContrasena.value.length < 8) {
      document.getElementById("parrafoErrorContrasena").classList.remove("inputError")
      document.getElementById("parrafoErrorContrasena").classList.add("inputErrorActivo")
    }
    else {
      document.getElementById("parrafoErrorContrasena").classList.add("inputError")
      document.getElementById("parrafoErrorContrasena").classList.remove("inputErrorActivo")
    }
  })
  inputProvincia.addEventListener("blur", function () {

    if (inputProvincia.value == "Elija uno") {
      document.getElementById("parrafoErrorProvincia").classList.remove("inputError")
      document.getElementById("parrafoErrorProvincia").classList.add("inputErrorActivo")
    }
    else {
      document.getElementById("parrafoErrorProvincia").classList.add("inputError")
      document.getElementById("parrafoErrorProvincia").classList.remove("inputErrorActivo")
    }
  })
   inputTipoUsuario.addEventListener("blur", function () {

    if (inputTipoUsuario.value == "Elija uno") {
      document.getElementById("parrafoErrorTipoUsuario").classList.remove("inputError")
      document.getElementById("parrafoErrorTipoUsuario").classList.add("inputErrorActivo")
    }
    else {
      document.getElementById("parrafoErrorTipoUsuario").classList.add("inputError")
      document.getElementById("parrafoErrorTipoUsuario").classList.remove("inputErrorActivo")
    }
  })

  let formulario = document.querySelector("#formularioRegistro")

  formulario.addEventListener("submit", function(evento){

    let errores = []

    if(inputNombre.value == ""){
      errores.push(" Por Favor ingresa tu Nombre")
    }
    if(inputApellido.value == ""){
      errores.push("Por Favor ingresa tu Apellido")
    }
    if(inputEmail.value == "" || inputEmail.value.indexOf("@")  < 0){
      errores.push("Debes Ingresar un email valido")
    }
    if(inputContrasena.value == "" || inputContrasena.value.length < 8){
      errores.push("la contraseña Ingresada no es valida")
    }
    if(inputProvincia.value == "Elija uno"){
      errores.push("Debes seleccionar tu Provincia")
    }
    if(inputTipoUsuario.value == "Elija uno"){
      errores.push("Debes Seleccionar tu Tipo de Usuario")
    }

    if ( errores.length > 0){
      evento.preventDefault()
      let ulErrores = document.querySelector("div.errores ul")
      ulErrores.innerHTML = ""
      for(let i=0; i<errores.length; i++){
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
      }
  }

  })


}