# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foram consolidados na forma de personas e histórias de usuários.

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas a seguir:

| Ana Silva                                           |                                                                                          |                                                                                                                                                                                              |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![image](img/Ana_Silva.jpg)                         | **Idade:** 58 anos - **Ocupação:** Professora de inglês apostentada.                     | **História:** Ana possui muitos livros antigos de quando dava aulas, e deseja dar um novo destino a esses materiais, que podem ajudar outras pessoas e encorajá-las a aprender outro idioma. |
| Motivações                                          | Frustrações                                                                              |
| - Gostaria de contribuir com o incetivo à educação; | - Ver adolescentes mais interessados em realidade virtual do que no universo dos livros; |
| - Gostaria de disponibilizar seus livros;           | - Estante cheia de livros que ninguém mais lê;                                           |
| - Deseja ter uma renda extra.                       | - Não ter dinheiro para criar uma biblioteca comunitária.                                |

| Amanda Moraes                                                                                                    |                                                                  |                                                                                                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![image](https://user-images.githubusercontent.com/103083123/186744750-3de8a7d3-8f50-4e99-800d-c52bf513f802.png) | **Idade:** 30 anos - **Ocupação:** Empresária do ramo de roupas. | **História:** Amanda possuía o hábito de leitura quando mais nova, contudo administrar sua loja de roupas diminuiu o seu tempo livre para leitura. Ela gostaria de poder diminuir a quantidade de livros parados em casa. |
| Motivações                                                                                                       | Frustrações                                                      |
| - Gostaria de dar uma destinação para suas coleções de livros;                                                   | - Não ter tempo para ler;                                        |
| - Gostaria de expandir a empresa;                                                                                | - Não ter muito espaço de trabalho em casa;                      |
| - Deseja fazer cursos na área de administração.                                                                  | - Pouco capital para investir na empresa;                        |

| Cris Damasceno                                 |                                                                                                           |                                                                                                                                                                                                                                                                        |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![image](img/Cris_Damasceno.png)               | **Idade:** 46 anos - **Ocupação:** Professora Universitária, servidora pública do Estado de Minas Gerais. | **História:** Divorciada, Mestre na área de educação, é professora de uma universidade pública de sua cidade. Divide o tempo entre o trabalho e os cuidados com os filhos e a casa. A leitura faz parte da sua rotina de trabalho, mas também gosta de ler por prazer. |
| Motivações                                     | Frustrações                                                                                               |
| - Sonha em ter uma casa grande para a família; | - Não ter muito tempo para ler;                                                                           |
| - Terminar o doutorado;                        | - Não ter muito tempo para lazer;                                                                         |
| - Melhorar o currículo e ganhar mais.          | - Não poder comprar livros de autores internacionais que são importantes para o trabalho pelo alto custo. |

| Joana Medeiros                                                           |                                                                                                |                                                                                                                                                                             |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![image](img/Joana_Medeiros.png)                                         | **Idade:** 42 anos - **Ocupação:** Arquiteta e Urbanista, servidora pública de uma prefeitura. | **História:** Casada, trabalha como Arquiteta na sua cidade. Divide o seu tempo entre o trabalho, a companhia do marido, o acompanhamento de obra, estudo e demais tarefas. |
| Motivações                                                               | Frustrações                                                                                    |
| - Sonha em ter uma casa, conforme projeto idealizado;                    | - Não ter tempo para ler;                                                                      |
| - Gostaria de ganhar mais para viajar e conhecer o mundo;                | - Não poder comprar todos os livros que gostaria;                                              |
| - Gostaria de ter mais tempo para focar nos estudos e melhorar o inglês. | - Ter pouco tempo para estudar e se especializar.                                              |

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

| EU COMO... `PERSONA` | QUERO/PRECISO ... `FUNCIONALIDADE` | PARA ... `MOTIVO/VALOR`                |
| -------------------- | ---------------------------------- | -------------------------------------- |
| Ana Silva   | Dispor dos meus livros           | Gerar renda extra               |
| Ana Silva   | Cadastrar meus livros           | Acompanhar o número de aluguéis               |
| Amanda Moraes   | Dispor das coleções de livros           | Liberar espaço em casa               |
| Cris Damasceno   | Ter acesso a livros específicos           | Aperfeiçoar as aulas e estudar para o Doutorado               |
| Cris Damasceno   | Ter acesso a uma plataforma com títulos e autores variados a um baixo custo           | Economizar tempo e dinheiro               |
| Cris Damasceno   | Ter acesso a livros sem sair de casa           | Economizar tempo
| Joana Medeiros   | Ter acesso a mais livros a um baixo custo           | Ler livros variados sem gastar muito               |
| Joana Medeiros   | Ter uma forma mais prática de acesso a livros           | Economizar tempo em bibliotecas               |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

| ID     | Descrição do Requisito                                     | Prioridade |
| ------ | ---------------------------------------------------------- | ---------- |
| RF-001 | Permitir que o usuário crie uma conta                      | ALTA       |
| RF-002 | Permitir que o usuário realize login na conta criada       | ALTA       |
| RF-003 | Permitir que o usuário disponibilize um livro para aluguel | ALTA       |
| RF-004 | Permitir que o usuário alugue um livro disponível          | ALTA       |
| RF-005 | Exibir os livros disponíveis para aluguel                  | MÉDIA      |
| RF-006 | Filtrar os livros disponíveis por gênero                   | MÉDIA      |

### Requisitos não Funcionais

| ID      | Descrição do Requisito                                                                              | Prioridade |
| ------- | --------------------------------------------------------------------------------------------------- | ---------- |
| RNF-001 | O site deverá ser responsivo permitindo a visualização em um celular de forma adequada              | MÉDIA      |
| RNF-002 | O site deve ter bom nível de contraste entre os elementos da tela em conformidade                   | MÉDIA      |
| RNF-003 | O site deve apresentar as informações de forma visual e acessível, através de uma interface simples | MÉDIA      |
| RNF-004 | O site deve estar disponível para acesso a qualquer horário do dia | MÉDIA      |
| RNF-005 | O site deve responder às ações do usuário de forma rápida | MÉDIA      |
| RNF-006 | O site deve impossibilitar que as senhas dos usuários sejam visíveis a atores maliciosos | MÉDIA      |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

| ID  | Restrição                                             |
| --- | ----------------------------------------------------- |
| 01  | O projeto deverá ser entregue até o final do semestre |
| 02  | A equipe não pode subcontratar o desenvolvimento do trabalho.        |
| 03  | O projeto deve usar um único banco de dados.        |


## Diagrama de Casos de Uso
![image](https://user-images.githubusercontent.com/103083123/189238767-df08b37c-314d-4556-ada6-5098438ca720.png)
