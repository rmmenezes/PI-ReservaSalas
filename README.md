# Sistema de Gerenciamento e Reservas de Salas e Recursos :memo:
O seguinte sistema está sendo desenvolvido por um grupo universitários na disciplina de Projeto Integrador (PI), com o objetivo de atender os serviços de gerenciamento e reservas de salas e recursos na Universidade Tecnológica Federal (UTFPR), o sistema possibilita um usuário administrador buscar/inserir/atualizar/excluir salas e recursos na plataforma que podendo ser ainda mais automatizado por meio de tabelas .CSV contendo as devidas informações de cada registro.

## Materiais e Métodos
Para o desenvolvimento estão sendo utilizados as linguagens de programação abaixo, a escolha delas foi determinada principalmente pelo nível de dificuldade e rapidez no desenvolvimento. 
#### VUE JS
O Vue está sendo utilizado para servir todo FrontEnd da aplicação, por ser uma linguagem orientada a componentes é ainda mais fácil o processo de reutilização de código.
(Link Documentação + GetStarted: https://vuejs.org/)
#### NODE JS
O node js está sendo utilizado para suprir o BackEnd da aplicação, e trabalhar banco de dados e serviços da aplicação
(Link Documentação + GetStarted: https://nodejs.org/en/)
#### BOOTSTRAP
Para dar uma melhor aparência a aplicação, está sendo utilizado a linguagem de marcação BootStrap com ela é possível modelar todo o designer da aplicação e aplicar conceitos de usabilidade para os usuários.
(Link Documentação + GetStarted: https://getbootstrap.com/)

### Banco de dados (MONGO BD)
Para gerenciar os dados da aplicação foi escolhido o banco de dados MONGO BD por ser um banco não relacional por possuir uma ótima integração com o BackEnd NODE JS.
(Link Documentação + GetStarted: https://www.mongodb.com/)


## Instalação
A instalação da aplicação deve começar pelo clone do repositório em sua maquina local, após isto entre no diretório principal.

### Instalação de dependências
Para cada bloco de instrução execute terminais diferentes
#### FrontEnd
```sh
$ cd reserva-salas-front
$ npm install
$ npm run dev
```
#### BackEnd
```sh
$ cd reserva-salas-back
$ npm install
$ npm start
```
#### Banco de Dados
```sh
$ mongod
```
