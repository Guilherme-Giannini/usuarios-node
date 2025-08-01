🧍 CRUD de Usuários com Node.js e Express
Este projeto é uma API REST básica desenvolvida com Node.js e Express. Ela permite criar, ler, atualizar e deletar usuários armazenados em memória.

🚀 Funcionalidades
GET /users/
Lista todos os usuários cadastrados.

POST /users/
Cria um novo usuário.
Corpo da requisição (JSON):

json
Copiar
Editar
{
  "name": "Nome do usuário",
  "age": 30
}
PUT /users/:id
Atualiza os dados de um usuário específico.
Corpo da requisição (JSON):

json
Copiar
Editar
{
  "name": "Novo nome",
  "age": 35
}
DELETE /users/:id
Remove um usuário com base no id.

🧪 Tecnologias Utilizadas
Node.js

Express

UUID (para geração de IDs únicos)

▶ Como executar
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
Instale as dependências:

bash
Copiar
Editar
npm install
Inicie o servidor:

bash
Copiar
Editar
node index.js
Acesse:

bash
Copiar
Editar
http://localhost:3000/users
❗ Observações
Os dados são armazenados em memória, ou seja, serão perdidos ao reiniciar a aplicação.

Ideal para fins didáticos ou como base para implementação futura com banco de dados.
