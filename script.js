let carrito = 0;

function comprar(producto){

carrito++;

document.getElementById("contador").textContent = carrito;

alert(producto + " agregado al carrito");

}

function buscarProducto(){

let input = document.getElementById("buscar").value.toLowerCase();

let productos = document.getElementsByClassName("producto");

for(let i=0;i<productos.length;i++){

let nombre = productos[i].getElementsByTagName("h3")[0].textContent.toLowerCase();

if(nombre.includes(input)){
productos[i].style.display="block";
}else{
productos[i].style.display="none";
}

}

}
