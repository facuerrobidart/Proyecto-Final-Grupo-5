
let productos = JSON.parse(localStorage.getItem("productos"));

let contieneCarrito = document.querySelector("div.contenedorCarrito");
let divTotales = document.querySelector("div.totales");
let total = document.querySelector("div.total");

let subtotal = 0;

for (let prod of productos) {
    console.log(prod);
    subtotal += parseFloat(prod.precio);
    let param = "'" + prod.titulo + "'"
    contieneCarrito.innerHTML += '<div class="row"><div class="row main align-items-center"><div class="col-2"><img class="img-fluid" src=/images/' + prod.nombre_imagen + '></div><div class="col"><div class="row text-muted">Item</div><div class="row">' + prod.titulo + '</div></div><div class="col"> <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a> </div><div class="col">&dollar;' + parseFloat(prod.precio) + '<span class="close" onclick="eliminarCarrito(' + param + ')" >&#10005;</span></div></div></div>'
}
divTotales.innerHTML = '<div class="col" style="padding-left:0;">Items: ' + productos.length + '</div><div class="col text-right">&dollar;' + parseFloat(subtotal) + '</div>';
total.innerHTML = '&dollar; ' + parseFloat(subtotal);


function refresh() {
    contieneCarrito.innerHTML = '';
    for (let prod of productos) {
        console.log(prod);

        contieneCarrito.innerHTML += '<div class="row"><div class="row main align-items-center"><div class="col-2"><img class="img-fluid" src=/images/' + prod.nombre_imagen + '></div><div class="col"><div class="row text-muted">Item</div><div class="row">' + prod.titulo + '</div></div><div class="col"> <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a> </div><div class="col">&dollar;' + parseFloat(prod.precio) + '<span class="close" onclick=eliminarCarrito(' + prod.titulo + ') >&#10005;</span></div></div></div>'
    }

    divTotales.innerHTML = '<div class="col" style="padding-left:0;">Items: ' + productos.length + '</div><div class="col text-right">&dollar;' + parseFloat(subtotal) + '</div>';
    total.innerHTML = '&dollar; ' + parseFloat(subtotal);

}
function eliminarCarrito(titulo) {
    let pos = productos.findIndex(prod => prod.titulo === titulo);
    console.log(pos);
    subtotal -= parseFloat(productos[pos].precio);
    productos.splice(pos, 1);
    console.log(productos);
    localStorage.setItem("productos", JSON.stringify(productos));
    refresh();
}

function vaciarCarrito() {
    localStorage.clear();
}