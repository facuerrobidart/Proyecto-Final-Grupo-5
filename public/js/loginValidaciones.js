
window.onload=function(){

  let login = document.querySelector("#tituloLogin")
  let inputEmail = document.querySelector("#inputEmail")
  let inputContrasena = document.querySelector("#inputContrasena")

  inputEmail.focus() // cuando cargue la vista el cursor esta posicionado en el input de email

  inputEmail.addEventListener("blur", function () {

    if (inputEmail.value == "") {
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

  inputContrasena.addEventListener("blur", function () {

    if (inputContrasena.value == "") {
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


}