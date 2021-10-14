function agregaCarrito(titulo,precio,nombre_imagen){
    console.log(titulo,precio,nombre_imagen);
    let agregar = {
        titulo: titulo,
        precio: precio,
        nombre_imagen: nombre_imagen
    }
    var productos = localStorage.getItem("productos");

    if (productos=="[object Object]"){ //si el array esta vacio
        productos=[]; //inicializo el array vacio
    }else{
        productos = JSON.parse(productos); //convierto el json en variable para operar
    }

    productos.push(agregar);
    localStorage.setItem("productos",JSON.stringify(productos));
    
    console.log(productos);
}