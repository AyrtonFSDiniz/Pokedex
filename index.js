const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/index", (req, res) => {
  res.render("index", { titulo: "Aula7"});
});

app.get("/cadastro", (req, res) => {
  res.render("../views/cadastro");
});

app.get("/detalhes", (req, res) => {
  res.render("../views/detalhes");
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
