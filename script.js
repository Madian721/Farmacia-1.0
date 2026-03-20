let contador = 0;

function comprar(){
contador++;
document.getElementById("contador").innerText = contador;
}


document.getElementById("buscar").addEventListener("keyup", function(){
let filtro = this.value.toLowerCase();
let productos = document.querySelectorAll(".producto");

productos.forEach(p=>{
let texto = p.innerText.toLowerCase();
p.style.display = texto.includes(filtro) ? "block" : "none";
});
});

document.getElementById("formulario").addEventListener("submit", function(e){
e.preventDefault();
alert("Mensaje enviado correctamente");
});




