const express = require("express");
const { url } = require("inspector");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

//let message = "";

const pokedex = [
  {
    Numero: "001",
    Nome: "Bulbasaur",
    Tipo: "Grass and Poison",
    Imagem: "/img/001.png",
    Descricao:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    Altura: " 70 cm",
    Peso: "6,9 kg",
    Categoria: "Seed",
    Habilidade: "Overgrow",
  },
  {
    Numero: "004",
    Nome: "Charmander",
    Tipo: "Fire",
    Imagem: "/img/004.png",
    Descricao:
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    Altura: "60 cm",
    Peso: "8,5 kg",
    Categoria: "Lizard",
    Habilidade: "Blaze",
  },
  {
    Numero: "007",
    Nome: "Squirtle",
    Tipo: "Water",
    Imagem: "/img/007.png",
    Descricao:
      "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    Altura: "50 cm",
    Peso: "9,0 kg",
    Categoria: "Tiny Turtle",
    Habilidade: "Torrent",
  },
];

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("../views/index", { lista: pokedex });
});

app.get("/detalhes", (req, res) => {
  res.render("../views/detalhes");
});

app.get("/cadastro", (req, res) => {
  res.render("../views/cadastro");
});

app.post("/new", (req, res) => {
  const {
    numero,
    nome,
    tipo,
    imagem,
    descricao,
    altura,
    peso,
    categoria,
    habilidade,
  } = req.body;
  pokedex.push({
    Numero: numero,
    Nome: nome,
    Tipo: tipo,
    Imagem: imagem,
    Descricao: descricao,
    Altura: altura,
    Peso: peso,
    Categoria: categoria,
    Habilidade: habilidade,
  });
  res.redirect("/", { lista: pokedex });
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
