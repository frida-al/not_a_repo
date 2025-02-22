//

//file_system.writeFileSync("hola.txt", "Hola desde node");

/*setTimeout(() => {
  console.log("jojo te hackee");
}, 20000);

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];
for (let item of arreglo) {
  setTimeout(() => {
    console.log(item);
  }, item);
}

const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url);
  response.setHeader("Content-Type", "text/html");
  response.write("<h1>Hola mundo!<h1>");
  response.end();
});

server.listen(3001);*/
const stringTexto = "Hola, para el laboratorio 8";
file_system.writeFileSync("Labo8.txt", stringTexto);
