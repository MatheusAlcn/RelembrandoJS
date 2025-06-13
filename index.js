// Importa o módulo Express para criar o servidor
const express = require("express");

// Cria uma instância do aplicativo Express
const app = express();

/**
 * Rota principal "/"
 * Quando alguém acessa http://localhost:3000/,
 * essa função será executada e enviará uma resposta ao navegador.
 */
app.get("/", (req, res) => {
    res.send("Seja muito bem-vindo!"); // Envia uma resposta de texto simples
});

/**
 * Rota "/sobre"
 * Acessível por: http://localhost:3000/sobre
 * Ideal para colocar informações sobre você ou sobre o projeto.
 */
app.get("/sobre", (req, res) => {
    res.send("Minha página sobre."); // Outra resposta de texto
});

/**
 * Rota "/blog"
 * Acessível por: http://localhost:3000/blog
 * Você pode expandir depois para exibir posts, por exemplo.
 */
app.get("/blog", (req, res) => {
    res.send("Bem-vindo ao meu blog!"); // Mensagem do blog
});

/**
 * Inicializa o servidor e faz ele "escutar" a porta 3000.
 * Assim que ele estiver rodando, a função de callback é executada.
 */
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
