# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Não deixe de enumerar os casos de teste de forma sequencial e de garantir que o(s) requisito(s) associado(s) a cada um deles está(ão) correto(s) - de acordo com o que foi definido na seção "2 - Especificação do Projeto". 
 
| **Caso de Teste** 	| CT-01 – Visualizar livros 	|
|:---:	|:---:	|
|	Requisito Associado 	|RF-005 	Exibir os livros disponíveis para aluguel |
| Objetivo do Teste 	| Verificar se o usuário consegue visualizar os livros disponíveis na aplicação. |
| Passos 	| - Acessar o navegador <br> - Acessar a rota `/books` da aplicação (http://localhost:3000/books) |
|Critério de Êxito | - São retornados os livros disponíveis |
|  	|  	|
| Caso de Teste 	| CT-02 – Efetuar cadastro	|
|Requisito Associado | RF-001 	Permitir que o usuário crie uma conta |
| Objetivo do Teste 	| Verificar se o usuário consegue cadastrar uma conta. |
| Passos 	| - Acessar o navegador <br> - Entrar no site (http://localhost:3000) <br> - Preencher as informações do formulário de cadastro <br> - Enviar o formulário |
|Critério de Êxito | - O cadastro foi realizado com sucesso. |
|  	|  	|
| Caso de Teste 	| CT-03 – Efetuar login	|
|Requisito Associado | RF-001 	Permitir que o usuário acesse sua conta |
| Objetivo do Teste 	| Verificar se o usuário consegue acessar uma conta. |
| Passos 	| - Acessar o navegador <br> - Entrar no site (http://localhost:3000) <br> - Preencher as informações do formulário  de login <br> - Enviar o formulário |
|Critério de Êxito | - O login foi realizado com sucesso. |
|  	|  	|
| Caso de Teste 	| CT-04 – Alugar livro	|
|Requisito Associado | RF-004 	Permitir que o usuário alugue um livro disponível |
| Objetivo do Teste 	| Verificar se o usuário consegue alugar um livro disponível. |
| Passos 	| - Acessar o navegador <br> - Entrar no site (http://localhost:3000/books) <br> - Clicar em "Alugar" ao lado de algum livro |
|Critério de Êxito | - Surge um pop-up confirmando o aluguel. |
|  	|  	|
| Caso de Teste 	| CT-05 – Cadastrar livro	|
|Requisito Associado | RF-003 	Permitir que o usuário disponibilize um livro para aluguel |
| Objetivo do Teste 	| Verificar se o usuário consegue cadastrar um livro para aluguel. |
| Passos 	| - Acessar o navegador <br> - Entrar no site (http://localhost:3000/register-book) <br> - Preencher as informações do formulário <br> - Enviar o formulário |
|Critério de Êxito | - O livro aparece nos livros disponíveis para aluguel. |
