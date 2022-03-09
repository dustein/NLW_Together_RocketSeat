# Projeto Evento RocketSeat NodeJS
## API Mensagens

![N|Solid](https://icon-library.com/images/node-js-icon/node-js-icon-23.jpg)

### Descrição

Backend para aplicação de mensagens para transmitir elogios entre usuários cadastrados em uma base de dados.

### Features

- Cadastro de Usuários
-- Autenticação
-- Token JWT
-- Validação de usuário logado
- Tags de elogio

- Mensagens


### Dados

##### Cadastro Usuário >>> POST "/users"
- name
- email
- password
- admin (true/false)
##### Autenticação de Usuário >>> POST "/login"
- email
- password
##### Cadastro de Tag >>> POST "/tags"
- name (da tag)
##### Cadastrar Elogio >>> POST "/compliments"
- tag_id
- user_receiver
- message
##### Listar Elogios feitos por um usuário >>> GET "/users/compliments/sent"
##### Listar Elogios recebidos por um usuário >>> GET "/users/compliments/received"
##### Listar Tags cadastradas >>> GET "/tags"
##### Listar Usuários cadastrados >>> GET "/users"
---
-
---

```sh

```


