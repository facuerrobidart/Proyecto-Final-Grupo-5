function agregaCarrito(titulo,precio,nombre_imagen){
    console.log(titulo,precio,nombre_imagen);
    let agregar = {
        titulo: titulo,
        precio: precio,
        nombre_imagen: nombre_imagen
    }

    let productos = localStorage.getItem("productos");
    console.log(productos);
}