// Importa o módulo 'http' nativo do Node.js para criar o servidor
var http = require('http');

// Importa o módulo 'url' para facilitar a leitura da rota da requisição
var url = require('url');

// Cria o servidor HTTP
http.createServer(function (req, res) {
  
  // Pega o caminho da URL requisitada (ex: '/', '/agora', '/hoje')
  var caminho = url.parse(req.url, true).pathname;

  // Define o tipo de conteúdo que vamos enviar na resposta (texto simples)
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');

  // Verifica qual rota o usuário acessou
  if (caminho === "/agora") {
    // Cria um objeto Date com a data e hora atuais
    var agora = new Date();

    // Formata a data e hora de forma simples (formato padrão do sistema)
    var dataHora = agora.toLocaleString();

    // Envia a resposta com a data e hora atual
    res.end("Agora são: " + dataHora);

  } else if (caminho === "/hoje") {
    // Cria o objeto Date para pegar a data atual
    var hoje = new Date();

    // Extrai dia, mês e ano separadamente para formatar
    var dia = hoje.getDate().toString().padStart(2, '0');      // 1 a 31, com zero à esquerda
    var mes = (hoje.getMonth() + 1).toString().padStart(2, '0'); // 0 a 11, então soma 1, com zero à esquerda
    var ano = hoje.getFullYear();

    // Monta a data no formato dd/mm/aaaa
    var dataFormatada = dia + "/" + mes + "/" + ano;

    // Envia a resposta com a data atual formatada
    res.end("Hoje é: " + dataFormatada);

  } else {
    // Se a rota for qualquer outra, envia a mensagem padrão
    res.end("Bem-vindo! Acesse /agora para ver a hora.");
  }

}).listen(3000);  // Diz para o servidor escutar na porta 3000

// Mostra uma mensagem no terminal para avisar que o servidor está rodando
console.log("Servidor rodando em http://localhost:3000");
