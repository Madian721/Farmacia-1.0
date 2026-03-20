let contador = 0;

function comprar(){
contador++;
document.getElementById("contador").innerText = contador;
}

/* BUSCADOR SEGURO */
let buscador = document.getElementById("buscar");

if(buscador){
buscador.addEventListener("keyup", function(){
let filtro = this.value.toLowerCase();
let productos = document.querySelectorAll(".producto");

productos.forEach(p=>{
let texto = p.innerText.toLowerCase();
p.style.display = texto.includes(filtro) ? "block" : "none";
});
});
}

/* FORMULARIO */
let form = document.getElementById("formulario");

if(form){
form.addEventListener("submit", function(e){
e.preventDefault();
alert("Mensaje enviado correctamente");
});
}


