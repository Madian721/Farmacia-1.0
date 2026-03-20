let contador = 0;

function comprar(){
contador++;
document.getElementById("contador").innerText = contador;
}

/* BUSCADOR */
document.getElementById("buscar").addEventListener("keyup", function(){
let filtro = this.value.toLowerCase();
let productos = document.querySelectorAll(".producto");

productos.forEach(p => {
let texto = p.innerText.toLowerCase();
p.style.display = texto.includes(filtro) ? "block" : "none";
});
});

/* FORMULARIO */
document.getElementById("formulario").addEventListener("submit", function(e){
e.preventDefault();
alert("Mensaje enviado correctamente");
});

/* AUTO SCROLL OFERTAS */
let carrusel = document.getElementById("carrusel");

setInterval(()=>{
carrusel.scrollLeft += 250;
if(carrusel.scrollLeft >= carrusel.scrollWidth - carrusel.clientWidth){
carrusel.scrollLeft = 0;
}
},3000);
