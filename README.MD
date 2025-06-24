<a name="readme-top"></a>

# RESTful-Transaction-API

![Badge](https://img.shields.io/badge/Node.js-18.x-green)
![Badge](https://img.shields.io/badge/Fastify-^4.x-blue)
![Badge](https://img.shields.io/badge/SQLite-3-lightgrey)
![Badge](https://img.shields.io/badge/Tested%20with-Vitest-purple)

> Uma API RESTful para controle de transações financeiras, construída com Fastify, TypeScript e SQLite.

---

## 📌 Descrição

Esta aplicação permite que usuários criem, listem, visualizem e resumam transações financeiras (crédito e débito). As transações são armazenadas em sessões únicas, identificadas via cookies, garantindo isolamento e segurança sem a necessidade de autenticação.

---

## 🚀 Funcionalidades

- Criar transações (crédito ou débito)
- Listar todas as transações da sessão atual
- Buscar uma transação específica por ID
- Gerar um resumo do saldo total da sessão

---

## 🧪 Testes Automatizados

Testes completos para todas as rotas foram implementados com:

- **Vitest** – para estrutura de testes
- **Supertest** – para simulação de requisições HTTP
- Reset do banco de dados antes de cada teste com comandos do Knex

---

## 🛠️ Tecnologias e Ferramentas

- [Fastify](https://fastify.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Knex.js](https://knexjs.org/)
- [SQLite](https://www.sqlite.org/index.html)
- [Zod](https://zod.dev/) – validação de dados
- [Vitest](https://vitest.dev/) + [Supertest](https://github.com/visionmedia/supertest)

---

## 📁 Estrutura do Projeto




# REQUISITOS DA APLICAÇÃO

# RF

- [x] O usuário deve poder criar uma nova transação;
- [x] O usuário deve poder obter um resumo da conta;
- [x] O usuário deve poder listar todas as tarnsações;
- [x] O usuário deve poder visualizar uma transação única;

# RNF

- [x] A transação pode ser do tipo crédito que somará ao valor total, ou débito subtraira;
- [x] Deve ser possível identificarmos o usuário entre as requisições;
- [x] O usuário só pode visualizar transações o qual ele criou;

