const express = require("express");

const app = express();

//const port = 5500;

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/index.html');
//  res.end()
});

app.get("/meusDados", function(req, res){
    res.end("Paciente: " + req.query.nome + "; Idade: " + req.query.idade + "; Nascimento: " + req.query.nascimento +  " ; Endereço: " + req.query.endereco + " ; Cidade: " + req.query.cidade + " ; Estado: " + req.query.estado + " ; Bairro: " + req.query.bairro + " ; Anamnese: " + req.query.texto);
});

app.listen(5500);
