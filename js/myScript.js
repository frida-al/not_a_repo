// Pregunta 1
document.write("Pregunta 1 <br>");
const userInput = prompt("Introduce un número del 1 al 100:");

for (let i = 1; i <= userInput; i++){
    document.write((i*i) + '\n');
    document.write((i*i*i) + '<br>'); 
    
}

// Pregunta 2
document.write("<br>Pregunta 2<br>");
function generateRandom() {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}

const randomInt1 = generateRandom();
const randomInt2 = generateRandom();

const startTime = new Date();

const addition = prompt(`¿Cuál es el resultado de la suma entre ${randomInt1} y ${randomInt2}?`);

const endTime = new Date();

const finalTime = endTime - startTime;
const finalTimeSecs = (finalTime / 1000).toFixed(2);
const answer = randomInt1 + randomInt2;

if (parseInt(addition) === answer){
    document.write(`¡Correcto! Te llevó ${finalTimeSecs} segundos calcularlo`);
} else {
    document.write(`Incorrecto.Te llevó ${finalTimeSecs} segundos calcularlo y mal.`);
}

// Pregunta 3
document.write("<br><br>Pregunta 3<br>");
const arreglo = [23, -30, 9, 90, 0, 0, 34, -40, -100, 67, -87, 98, 0,-70];
document.write(arreglo)
let a = 0;
let b = 0;
let c = 0;
let size = arreglo.length;
for (let i = 0; i < size; i++){
    if (arreglo[i] < 0){
         a++;
    } else if (arreglo[i] === 0){
        b++;
    } else {
        c++;
    }
}
document.write(`<br>Hay un total de ${a} número negativos, ${b} ceros y ${c} números positivos`);

//Pregunta 4
document.write("<br><br>Pregunta 4<br>");
const matriz = [[5,4,6,78,9], [8,7,6,54,3], [5,4,5,6,65], [565,4,3,3,3]];
const size2 = matriz.length;

function calcAvarage (nums){
    const sum = nums.reduce((tempResult, currentVal) => tempResult + currentVal, 0);
    const average = sum / nums.length;
    return average;
}
for (let i = 0; i < size2; i++){
    const average = calcAvarage(matriz[i]);
    document.write(`El promedio es: ${average} <br>`);
}




/*for(let i = 0; i < 10; i++) {
    console.log(i);
}

const info = confirm("¿Diciembre es tu mes de nacimiento?")

function regar() {
    alert("Hola");
}

() => {
    prompt("¿Edad?")
}

const my_function = () => {};

my_function();*/