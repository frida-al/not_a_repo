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

const miArreglo2 = [
  "localization",
  "internationalization",
  "word",
  "pneumonoultramicroscopicsilicovolcanoconiosis",
];

function wordscounter(array) {
  const arreglo = array;
  const size = arreglo.length;
  for (let i = 0; i < size; i++) {
    let string = arreglo[i];
    if (string.length > 10) {
      const first = string[0];
      const last = string[string.length - 1];
      const between = string.length - 2;
      console.log(first + between + last);
    } else {
      console.log(string);
    }
  }
}
console.log(wordscounter(miArreglo2));
