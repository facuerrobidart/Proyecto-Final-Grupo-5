
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
      document.getElementById("iconoNombre").style.opacity = 1
      document.getElementById("iconoNombre").style.color = "#bb2929"


    }
    else {
      document.getElementById("parrafoErrorNombre").classList.add("inputError")
      document.getElementById("parrafoErrorNombre").classList.remove("inputErrorActivo")
      document.getElementById("iconoNombre").style.opacity = 1
      document.getElementById("iconoNombre").style.color = "#1ed12d"
      document.getElementById("iconoNombre").classList.remove("fa-times-circle")
      document.getElementById("iconoNombre").classList.add("fa-check-circle")

    }
  })

  inputApellido.addEventListener("blur", function () {
      if (inputApellido.value == "") {
        document.getElementById("parrafoErrorApellido").classList.remove("inputError")
        document.getElementById("parrafoErrorApellido").classList.add("inputErrorActivo")
        document.getElementById("iconoApellido").style.opacity = 1
        document.getElementById("iconoApellido").style.color = "#bb2929"
      }
      else {
        document.getElementById("parrafoErrorApellido").classList.add("inputError")
        document.getElementById("parrafoErrorApellido").classList.remove("inputErrorActivo")
        document.getElementById("iconoApellido").style.opacity = 1
        document.getElementById("iconoApellido").style.color = "#1ed12d"
        document.getElementById("iconoApellido").classList.remove("fa-times-circle")
        document.getElementById("iconoApellido").classList.add("fa-check-circle")
      }
    })

      inputEmail.addEventListener("blur", function () {
      if (inputEmail.value == "" ) {
        document.getElementById("parrafoErrorEmail").classList.remove("inputError")
        document.getElementById("parrafoErrorEmail").classList.add("inputErrorActivo")
        document.getElementById("iconoEmail").style.opacity = 1
        document.getElementById("iconoEmail").style.color = "#bb2929"
      }
      else {
        document.getElementById("parrafoErrorEmail").classList.add("inputError")
        document.getElementById("parrafoErrorEmail").classList.remove("inputErrorActivo")
        document.getElementById("iconoEmail").style.opacity = 1
        document.getElementById("iconoEmail").style.color = "#1ed12d"
        document.getElementById("iconoEmail").classList.remove("fa-times-circle")
        document.getElementById("iconoEmail").classList.add("fa-check-circle")
      }
      })
      inputEmail.addEventListener("blur", function () {
      if ( inputEmail.value.indexOf("@")  < 0) {
        document.getElementById("parrafoErrorArroba").classList.remove("inputError")
        document.getElementById("parrafoErrorArroba").classList.add("inputErrorActivo")
        document.getElementById("iconoEmail").style.opacity = 1
        document.getElementById("iconoEmail").style.color = "#bb2929"
        document.getElementById("iconoEmail").classList.remove("fa-check-circle")
        document.getElementById("iconoEmail").classList.add("fa-times-circle")
      }
      else {
        document.getElementById("parrafoErrorArroba").classList.add("inputError")
        document.getElementById("parrafoErrorArroba").classList.remove("inputErrorActivo")
        document.getElementById("iconoEmail").style.opacity = 1
        document.getElementById("iconoEmail").style.color = "#1ed12d"
        document.getElementById("iconoEmail").classList.remove("fa-times-circle")
        document.getElementById("iconoEmail").classList.add("fa-check-circle")
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
      document.getElementById("iconoContrasena").style.opacity = 1
      document.getElementById("iconoContrasena").style.color = "#bb2929"
    }
    else {
      document.getElementById("parrafoErrorContrasena").classList.add("inputError")
      document.getElementById("parrafoErrorContrasena").classList.remove("inputErrorActivo")
      document.getElementById("iconoContrasena").style.opacity = 1
      document.getElementById("iconoContrasena").style.color = "#1ed12d"
      document.getElementById("iconoContrasena").classList.remove("fa-times-circle")
      document.getElementById("iconoContrasena").classList.add("fa-check-circle")
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
      errores.push("Por favor ingresa tu Nombre")
    }
    if(inputApellido.value == ""){
      errores.push("Por favor ingresa tu Apellido")
    }
    if(inputEmail.value == "" || inputEmail.value.indexOf("@")  < 0){
      errores.push("Debes ingresar un email valido")
    }
    if(inputContrasena.value == "" || inputContrasena.value.length < 8){
      errores.push("La contraseña ingresada no es valida")
    }
    if(inputProvincia.value == "Elija uno"){
      errores.push("Debes seleccionar tu provincia")
    }
    if(inputTipoUsuario.value == "Elija uno"){
      errores.push("Debes seleccionar tu tipo de Usuario")
    }

    if ( errores.length > 0){
      evento.preventDefault()
      let ulErrores = document.querySelector("div.erroresRegistro ul")
      ulErrores.innerHTML = ""
      for(let i=0; i<errores.length; i++){
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
      }
  }

  })


}