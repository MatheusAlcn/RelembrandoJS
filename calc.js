// Importa cada uma das funções de seus respectivos arquivos
// usamos require para trazer o que foi exportado com module.exports
var somaFunc = require("./soma");
var subFunc = require("./sub");
var multiFunc = require("./multi");
var divFunc = require("./div");

// Testes simples com cada operação, imprimindo os resultados no console
console.log("Soma: ", somaFunc(1, 2));        // 3
console.log("Subtração: ", subFunc(10, 2));   // 8
console.log("Multiplicação: ", multiFunc(5, 5)); // 25
console.log("Divisão: ", divFunc(15, 5));     // 3
