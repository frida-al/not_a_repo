const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "views");

app.use((request, response, next) => {
  console.log("Middleware!");
  next();
});

const plantasRoutes = require("./routes/plantas.routes");

app.use("/plantas", plantasRoutes);

app.use((request, response, next) => {
  console.log("Otro middleware!");

  response.statusCode = 404;
  response.send("No se encuentra el recurso que estás buscando");
});

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.listen(3003);
