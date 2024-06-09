// seleccionar la imagen
let imagen = document.querySelector("#imagen");
// cambiar el estado del borde
let borde = false;
//agregar evento de click a la imagen para aplicar o quitar borde
imagen.addEventListener("click", () => {
  if (borde == false) {
    imagen.style.border = "2px solid red";
    borde = true;
  } else {
    imagen.style.border = "";
    borde = false;
  }
});
