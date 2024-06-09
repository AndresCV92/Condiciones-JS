const verificar = document.querySelector("#verificar");
const valor1 = document.querySelector("#valor1");
const valor2 = document.querySelector("#valor2");
const valor3 = document.querySelector("#valor3");
const info = document.querySelector("#info");

verificar.addEventListener("click", () => {
  // Obtener los valores de los inputs y convertirlos a números enteros
  const primerNumero = parseInt(valor1.value);
  const segundoNumero = parseInt(valor2.value);
  const tercerNumero = parseInt(valor3.value);

  // Valores de las contraseñas
  const CONTRASEÑA1 = 911;
  const CONTRASEÑA2 = 714;

  // Verificar si la contraseña es correcta
  if (primerNumero === 9 && segundoNumero === 1 && tercerNumero === 1) {
    info.textContent = "password 1 correcto";
  } else if (primerNumero === 7 && segundoNumero === 1 && tercerNumero === 4) {
    info.textContent = "password 2 correcto";
  } else {
    info.textContent = "password incorrecto";
  }
});