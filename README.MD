<a name="readme-top"></a>

# RESTful-Transaction-API

![Badge](https://img.shields.io/badge/Node.js-18.x-green)
![Badge](https://img.shields.io/badge/Fastify-^4.x-blue)
![Badge](https://img.shields.io/badge/SQLite-3-lightgrey)
![Badge](https://img.shields.io/badge/Tested%20with-Vitest-purple)

> UMA API RESTFUL PARA CONTROLE DE TRANSAÇÕES FINANCEIRAS, CONSTRUÍDA COM FASTIFY, TYPESCRIPT E SQLITE.

## 📌 Descrição

Esta aplicação permite que usuários criem, listem, visualizem e resumam transações financeiras (crédito e débito). As transações são armazenadas em sessões únicas, identificadas via cookies, garantindo isolamento e segurança sem a necessidade de autenticação.

## 🚀 Funcionalidades

- Criar transações (crédito ou débito)
- Listar todas as transações da sessão atual
- Buscar uma transação específica por ID
- Gerar um resumo do saldo total da sessão

## 🧪 Testes Automatizados

Testes completos para todas as rotas foram implementados com:

- **Vitest** – para estrutura de testes
- **Supertest** – para simulação de requisições HTTP
- Reset do banco de dados antes de cada teste com comandos do Knex

## 🛠️ Principais tecnologias e ferramentas

- [Fastify](https://fastify.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Knex.js](https://knexjs.org/)
- [SQLite](https://www.sqlite.org/index.html)
- [Zod](https://zod.dev/) – validação de dados
- [Vitest](https://vitest.dev/) + [Supertest](https://github.com/visionmedia/supertest)

## 📁 Estrutura do Projeto

```env
src/
├── app.ts # Instância principal do Fastify
├── routes/
│ └── transactions.ts # Rotas de transações (CRUD + resumo)
├── database.ts # Configuração do banco via Knex
├── env.ts # Variáveis de ambiente
└── middlewares/
└── check-session-id.ts # Verificação da sessão via cookies

test/
└── transactions.spec.ts # Testes automatizados das rotas
```

## ⚙️ Como executar

```bash
# Instale as dependências
npm install

# Rode as migrations
npm run knex migrate:latest

# Inicie o servidor em modo dev
npm run dev

A API estará disponível em http://localhost:3333.

```
## 🧪 Rodando os testes

```
bash

npm test
```

Durante os testes, o banco é resetado a cada teste com:

```
bash

npm run knex migrate:rollback --all
npm run knex migrate:latest
```
## 📦 Migrations com Knex.js
O banco de dados é estruturado com o uso de migrations. Abaixo, os principais arquivos de schema:

✅ Criação da tabela transactions

```
// db/migrations/xxxx_create_transactions.ts
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("transactions", (table) => {
    table.uuid("id").primary();
    table.text("title").notNullable();
    table.decimal("amount", 10, 2).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("transactions");
}
```

🧩 Adição do session_id com índice
```
// db/migrations/xxxx_add_session_id.ts
export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("transactions", (table) => {
    table.uuid("session_id").after("id").index();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("transactions", (table) => {
    table.dropColumn("session_id");
  });
}
```

## 🤝 Contribuição

Se você deseja contribuir com este projeto, siga estas etapas:

1. Fork o repositório.

2. Crie uma branch para sua contribuição:

   ```bash
   git checkout -b minha-contribuicao

   ```

3. Faça suas alterações e commit:

   ```bash
   git commit -m 'Minha contribuição'

   ```

4. Envie sua branch:

   ```bash
    git push origin minha-contribuicao

   ```

5. Abra uma solicitação pull. 

## 🧠 Autor

israel.kilday@yahoo.com.br

[![linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/israel-kilday-machado-de-souza-801482230) <a href="mailto:israelkilday27@gmail.com">
<img src="https://img.shields.io/badge/Gmail-333333?style=for-the-badge&logo=gmail&logoColor=red" />
</a>

### Obrigado por visitar meu projeto! 👋

 <p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

