const express = require("express");
const nedb = require("nedb");
const bodyParser = require("body-parser");
const db = new nedb({
  filename: "./database.db",
  autoload: true,
});
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/books", (req, res) => {
  res.json({
    success: true,
  });
});

app.post("/books", (req, res) => {
  db.insert(
    {
      name: req.body.name,
      author: req.body.author,
    },
    (err, doc) => {
      res.json(doc);
    }
  );
});

app.listen(3000, () => {
  console.log("Servidor executando com sucesso na porta 3000.");
});

//para interromper o servidor basta clicar no terminal e digitar ctrl+c
