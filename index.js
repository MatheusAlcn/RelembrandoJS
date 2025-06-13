const express = require("express");
const app = express();



app.get("/", function(req, res){
    req.send("Seja bem vindo!");
});

app.get("/sobre", function(req, res){
    res.send("Minha pagina sobre")
})

app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu blog!")
})

app.listen(3000, function(){
    console.log("O server ta on")
});

