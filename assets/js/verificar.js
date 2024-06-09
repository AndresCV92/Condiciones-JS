const verificar = document.querySelector("#verificar");
const info = document.querySelector(".info");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");

verificar.addEventListener("click", () => {
    // Obtener los valores de los inputs y convertirlos a números enteros
    const valorInput1 = parseInt(input1.value);
    const valorInput2 = parseInt(input2.value);
    const valorInput3 = parseInt(input3.value);

    // Validar que los valores ingresados sean números enteros válidos
    if (isNaN(valorInput1) || isNaN(valorInput2) || isNaN(valorInput3)) {
        info.textContent = "Por favor, ingresa un número válido en todos los campos";
        return;
    }

    // Verificar que los valores ingresados no sean menores a cero
    if (valorInput1 < 0 || valorInput2 < 0 || valorInput3 < 0) {
        // Si alguno de los valores es menor a cero, mostrar mensaje de error y detener la ejecución
        info.textContent = "No se permiten valores menores a cero";
        return;
    }

    // Calcular la suma de los valores
    const suma = valorInput1 + valorInput2 + valorInput3;

    // Verificar si la suma es menor o igual a 10
    if (suma <= 10) {
        info.textContent = `Llevas (${suma}) stickers`;
    } else {
        info.textContent = "Llevas demasiados stickers";
    }
});
