// Importa o módulo Express, que facilita a criação de servidores web com Node.js
const express = require("express");

// Cria uma instância do aplicativo Express
const app = express();

// Define uma porta padrão para o servidor
const PORT = 3000;

/**
 * Middleware para habilitar o uso de JSON, caso deseje trabalhar com dados no corpo das requisições futuramente
 */
app.use(express.json());

/**
 * Rota principal "/"
 * Quando alguém acessa http://localhost:3000/,
 * esta função será executada e enviará uma resposta ao navegador.
 */
app.get("/", (req, res) => {
    res.send("Seja muito bem-vindo! 🚀");
});

/**
 * Rota "/sobre"
 * Ideal para colocar informações sobre você ou sobre o projeto.
 * Acessível via: http://localhost:3000/sobre
 */
app.get("/sobre", (req, res) => {
    res.send("Essa é a minha página sobre. Aqui você encontra mais informações sobre o projeto ou o autor.");
});

/**
 * Rota "/blog"
 * Essa rota pode futuramente ser conectada a um banco de dados ou CMS.
 * Acessível via: http://localhost:3000/blog
 */
app.get("/blog", (req, res) => {
    res.send("Bem-vindo ao meu blog! Aqui você encontrará posts interessantes sobre tecnologia, programação e mais.");
});

/**
 * Middleware de rota inexistente (404)
 * Este bloco será executado se nenhuma das rotas acima for correspondente
 */
app.use((req, res) => {
    res.status(404).send("Página não encontrada! ❌");
});

/**
 * Inicializa o servidor e faz ele "escutar" a porta definida.
 * Assim que o servidor estiver rodando, a função de callback será executada.
 */
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
