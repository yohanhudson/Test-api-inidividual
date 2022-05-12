const database = require("../database/config");

function entrar(email, senha) {
  const query = `
        SELECT * FROM Usuario WHERE Email = '${email}' AND Senha = '${senha}';
    `;
  return database.executar(query);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, plataforma, senha) {
  const query = `
        INSERT INTO user (nome, email, plat, senha) VALUES ('${nome}', '${plataforma}', '${email}', '${senha}');
    `;
  return database.executar(query);
}

module.exports = {
  entrar,
  cadastrar,
};
