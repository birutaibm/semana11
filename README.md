# Be The Hero

Projeto criado durante a semana 23-27/03/2020 ao longo do evento `Semana OmniStack 11` promovido pela `Rocketseat`.

Ao longo do evento pude aprender e na prática e gratuitamente as bases do desenvolvimento em `Node.js` para o back-end em `React` para a interface web e em `React Native` para a interface mobile.

Pela primeira vez no Semana OmniStack, nesta edição foi abordado banco de dados SQL utilizando o SQLite com `Knex`, testes com o `Jest` e o `Supertest` e validações com o `Celebrate`, todos no back-end. Deixo aqui meu agradecimento ao [@diego3g](https://github.com/diego3g) e a toda equipe da `Rocketseat`.

## Sobre o Projeto

A idéia do projeto é um aplicativo onde ongs se cadastrem via interface web e possam cadastrar casos ou deletar seus próprios casos. Um caso é um problema no qual a ONG precisa de doações para resolvê-lo.

Por outro lado, pessoas que acessem o aplicativo mobile podem visualizar os casos cadastrados pelas ongs e entrar em contato via e-mail ou whatsapp afim de ajudar a solucioná-lo. O aplicativo carregará automaticamente o cliente de e-mail ou o whatsApp no celular com uma mensagem padrão.

### backend

Contém toda a aplicação back-end com banco de dados SQLite e API Rest.

<!-- Colocar aqui uma descrição da API com suas rotas, parâmetros e respostas -->

### web

Contém o cliente web do aplicativo voltado para o uso da ONG. Foi implementado em React utilizando axios para se comunicar com o back-end.

### mobile

Contém o cliente mobile do aplicativo, que também utiliza axios para se comunicar com o back-end e foi feito com o expo.