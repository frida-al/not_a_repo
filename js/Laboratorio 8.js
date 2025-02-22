const miArreglo = [5, 4, 8, 9, 6, 7];

function promedio(array) {
  const tam = array.length;
  let num = 0;
  for (let i = 0; i < tam; i++) {
    num += array[i];
  }
  return num / tam;
}

console.log(promedio(miArreglo));

const file_system = require("fs");
const stringTexto = "Hola, para el laboratorio 8";
file_system.writeFileSync("Labo8.txt", stringTexto);
