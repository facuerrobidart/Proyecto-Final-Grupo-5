


var titulo = document.querySelector('.descripcion');
var precio = document.querySelector('.precio');
let cantidad = document.querySelector('.cantidad');
let subTotal = document.querySelector('.total');
let total = document.querySelector('.total');

//let productos = localStorage.getItem("productos");
productos = JSON.parse(localStorage.getItem("productos"));

//console.log(lista);

for (let i = 0; i < productos.length; i++) {
    titulo.innerHTML += '<li>' + productos[i].titulo + '</li>';
    precio.innerHTML += '<li>' + "$ " + productos[i].precio + '</li>';
    cantidad.innerHTML += '<li>' + 1 + '</li>';
    subTotal.innerHTML += '<li>' + "$ " + 1 * productos[i].precio + '</li>';
}





