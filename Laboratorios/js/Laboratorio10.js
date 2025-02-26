const html_header = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Plantas!</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
  </head>
  <body class="has-background-danger-95 ">
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
        <h1 class="title p-3">Laboratorio 10</h1>
      
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
         <div class="navbar-end">
            <div class="navbar-item">
              <form action="/gallery" method="POST">
                  <div class="buttons">
                    <input class="button is-danger" type="submit" value="Gallery">
                  </div>
              </form>
            </div>
          </div>
      </nav>
    <section class="section">
        <div class="container">
            <h1 class="title">
                Invernadero
            </h1>
            `;
const html_gallery = `
            <style>
                    .pin {
                        display: inline-block;
                        position: absolute;
                    }
                    .pin img{
                        margin: 12px;
                        border-radius: 10px;
                    }
                </style>
                        <div class="pin" style="top: 230px; left: 230px;"> 
                            <a href="https://mx.pinterest.com/pin/21532904462041288/" target="_blank">
                                <img src="https://i.pinimg.com/originals/1a/be/51/1abe51c3028018e46d2afcccdf6d4364.png" alt="Art is therapy" style="height: 150px;">
                            </a>
                        </div>
                        <div class="pin" style="top: 230px; left: 390px;">
                            <a href="https://mx.pinterest.com/pin/7248049395009268/" target="_blank">
                                <img src="https://i.pinimg.com/originals/5d/1b/3e/5d1b3e2ea9556a73cac40493655fe647.jpg" alt="Tears" style="height: 200px; ">
                            </a>    
                        </div>
                        <div class="pin" style=" top: 230px; left: 550px;">
                            <a href="https://mx.pinterest.com/pin/33214115994923442/" target="_blank">
                                <img src="https://i.pinimg.com/originals/f4/76/c8/f476c829853e16534c9b857cffd1f128.png" alt="Starry night" style="height: 175px;">
                            </a>    
                        </div>
                        <div class="pin" style="top: 230px; left: 690px;">
                            <a href="https://mx.pinterest.com/pin/774124929026259/" target="_blank">
                                <img src="https://i.pinimg.com/originals/0c/7f/06/0c7f068f5793b9abf794b99625d07606.jpg" alt="Sunflowers" style="height: 200px;">
                            </a>
                        </div>
                        <div class="pin" style="top: 230px; left: 870px;">
                            <a href="https://mx.pinterest.com/pin/4362930881019088/" target="_blank">
                                <img src="https://i.pinimg.com/originals/59/35/f5/5935f5a3b147b9feb7e4e1b6e63d1e4b.jpg" alt="Water lilies" style="height: 160px;">
                            </a>
                        </div>
                        <div class="pin" style="top: 230px; left: 1030px;">
                            <a href="https://mx.pinterest.com/pin/10625749117143305/" target="_blank">
                                <img src="https://i.pinimg.com/originals/42/73/ed/4273ede1205f5b9223d9ee3686da9179.jpg" alt="Second Water lilies" style="height: 175px;">
                            </a>
                        </div>
                        <div class="pin" style="top: 410px; left: 220px;"> 
                            <a href="https://mx.pinterest.com/pin/70437489120548/" target="_blank">
                                <img src="https://i.pinimg.com/originals/3f/cf/77/3fcf7702cb80f74058f3b30cd97e58f6.jpg" alt="Sunset" style="height: 270px;">
                            </a>
                        </div>
                        <div class="pin" style="top: 460px; left: 378px;">
                            <a href="https://mx.pinterest.com/pin/1970393575274091/" target="_blank">
                                <img src="https://i.pinimg.com/originals/4f/fe/58/4ffe5830395c6b8ac4a387d9cf9bdfa3.png" alt="Sailboat" style="height: 190px; ">
                            </a>
                        </div>
                        <div class="pin" style=" top: 430px; left: 537px;">
                            <a href="https://mx.pinterest.com/pin/29203097579283658/" target="_blank">
                                <img src="https://i.pinimg.com/originals/a7/d3/66/a7d36615cc77c75f8b8e1545be7ed373.jpg" alt="Woman with parasol" style="height: 165px;">
                            </a>
                        </div>
                        <div class="pin" style="top: 460px; left: 703px;">
                            <a href="https://mx.pinterest.com/pin/140806231102586/" target="_blank">
                                <img src="https://i.pinimg.com/originals/64/90/9d/64909d24b9b2787eb0701253e56a4305.jpg" alt="Man in meadow" style="height: 200px;">
                            </a>
                        </div>
                        <div class="pin" style="top: 417px; left: 860px;">
                            <a href="https://mx.pinterest.com/pin/24136547998498804/" target="_blank">
                                <img src="https://i.pinimg.com/originals/5f/10/87/5f1087b862f58cf1adc15fc9ed717004.jpg" alt="Bridge" style="height: 140px;">
                            </a>
                        </div>
            `;

const html_form = `<form action="/agregar" method="POST">
              <label for="nombre" class="label">Nombre de la planta</label>
              <input
                class="input is-danger"
                type="text"
                placeholder="Orquídea"
                id="nombre"
                name="nombre"
              />
              <br><br>
              <input class="button is-danger" type="submit" value="Enviar">
            </form>`;

const html_footer = `</div>
    </section>
    <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>.
            The source code is licensed
            <a href="https://opensource.org/license/mit">MIT</a>. The
            website content is licensed
            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0//"
              >CC BY NC SA 4.0</a
            >.
          </p>
        </div>
      </footer>
      <script src="js/introjs.js"></script>
  </body>
</html>
`;

const plantas = [];

const http = require("http");

const server = http.createServer((request, response) => {
  if (
    request.method == "GET" &&
    (request.url == "/agregar" || request.url == "/")
  ) {
    console.log(request.url);
    response.setHeader("Content-Type", "text/html");
    response.write(html_header + html_form + html_footer);
    response.end();
  } else if (request.method == "POST" && request.url == "/agregar") {
    const datos_completos = [];

    request.on("data", (data) => {
      console.log(data);
      datos_completos.push(data);
    });

    request.on("end", () => {
      const string_datos_completos = Buffer.concat(datos_completos).toString();
      console.log(string_datos_completos);
      //split() separa un string por el parámetro recibido,
      //y cada parte la pone en un arreglo
      const nueva_planta = string_datos_completos.split("=")[1];

      //Si fueran 2 inputs:
      //const nueva_planta = string_datos_completos.split('&')[0].split('=')[1];

      plantas.push(nueva_planta);

      response.setHeader("Content-Type", "text/html");
      response.write(html_header);

      response.write(`<div class="columns">`);
      for (const planta of plantas) {
        response.write(`<div class="column">`);
        response.write(`<div class="card">
          <div class="card-content">
            <div class="content">`);
        response.write(planta);
        response.write(`</div>
            </div>
          </div>`);
        response.write(`</div>`);
      }
      response.write(`</div>`);

      response.write(html_footer);
      response.end();
    });
  } else if (request.method == "POST" && request.url == "/gallery") {
    console.log(request.url);
    response.setHeader("Content-Type", "text/html");
    response.write(html_header + html_gallery);
    response.end();
  } else {
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/html");
    response.write(html_header);
    response.write(
      '<div class="notification is-danger">La página no existe</div>'
    );
    response.write(html_footer);
    response.end();
  }
});

server.listen(3002);
