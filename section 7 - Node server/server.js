const express = require("express");

const app = express();

app.get("/books", (req, res) => {
  res.json({
    success: true,
  });
});

app.listen(3000, () => {
  console.log("Servidor executando com sucesso na porta 3000.");
});

//para interromper o servidor basta clicar no terminal e digitar ctrl+c
