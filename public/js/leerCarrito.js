

var imagen = document.querySelector('.fotoCarrito');
var titulo = document.querySelector('.descripcion');
var precio = document.querySelector('.precio');
let cantidad = document.querySelector('.cantidad');
let subTotal = document.querySelector('.total');
let total = document.querySelector('.totalizador');

//let productos = localStorage.getItem("productos");
productos = JSON.parse(localStorage.getItem("productos"));

//console.log(lista);


let totalizador = 0;

for (let i = 0; i < productos.length; i++) {
    //imagen.innerHTML += '<li>' + "<img src=\'/public/images/productos[i].nombre_imagen\' width=\'50px\' height=\'50px\'>" + '</li>';
    titulo.innerHTML += '<li>' + productos[i].titulo + '</li>';
    precio.innerHTML += '<li>' + "$ " + productos[i].precio + '</li>';
    cantidad.innerHTML += '<li>' + 1 + '</li>';
    subTotal.innerHTML += '<li>' + "$ " + 1 * productos[i].precio + '</li>';
    totalizador = totalizador + (productos[i].precio * 1);
    total.innerHTML = "$ " + totalizador;
}


function vaciarCarrito() {
    localStorage.clear();
}


