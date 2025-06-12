// Importa o módulo nativo 'http' do Node.js, que permite criar servidores web
var http = require('http');

// Cria um servidor HTTP
// A função passada como argumento será executada toda vez que o servidor receber uma requisição (request)
http.createServer(function(req, res) {
    // res.end() envia uma resposta ao navegador e finaliza a requisição
    res.end("Seja bem-vindo!");
})

// Define a porta que o servidor vai "escutar"
// 8081 é uma porta comum para testes locais (você pode acessar em http://localhost:8081)
.listen(8081);

// Exibe uma mensagem no terminal pra avisar que o servidor está rodando
console.log("O servidor está funcionando! Acesse: http://localhost:8081");

