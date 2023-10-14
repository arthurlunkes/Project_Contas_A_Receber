# Project fullstack Contas a receber

![enter image description here](https://github.com/arthurlunkes/Project_Contas_A_Receber/blob/main/images/frontend.PNG)

## Descrição do projeto

Este é um projeto Full Stack de contas a receber que utiliza Java com Spring Boot e React.

## Tópicos importantes

<ol>
<a href="#Modelo_Dominio"><li>Modelo de domínio</li></a>
<a href="#Backend"><li>Backend (Java com Spring)</li></a>
<a href="#Frontend"><li>Frontend (React)</li></a>
<a href="#Informacoes"><li>Informações adicionais</li></a>
<a href="#Passos"><li>Passos para rodar esse projeto</li></a>
<a href="#Consideracoes"><li>Considerações finais</li></a>
</ol>

<div id="Modelo_Dominio">
<h2>Modelo de domínio</h2>
</div>

![Modelo de domínio](https://github.com/arthurlunkes/Project_Contas_A_Receber/blob/main/images/MER.png)

### O que foi utilizado

-   Java 17
-   Spring Boot 
-   React

<div id="Backend">
<h2>Backend (Java com Spring)</h2>
</div>

### Descrição

O Backend do sistema foi desenvolvido utilizando a linguagem Java juntamente com Spring. Essa camada é responsável por gerenciar a lógica de negócio, acessar o banco de dados e disponibilizar APIs REST para serem consumidas pelo Frontend.


### Funcionalidades Implementadas

-   CRUD (Create, Read, Update, Delete) de entidades
-   Validação de dados e tratamento de erros
-   Integração com banco de dados utilizando Spring Data JPA e banco de dados em memória H2
-   Implementação de endpoints REST
-   Documentação da API utilizando o Postman
-   Autenticação por token com JWT.

<div id="Frontend">
<h2>Frontend (React)</h2>
</div>

### Descrição

O Frontend do sistema foi desenvolvido utilizando a biblioteca React. Essa camada é responsável por apresentar a interface de usuário, realizar requisições para o Backend e exibir os dados de forma interativa e amigável.

### Funcionalidades Implementadas

-   Criação de componentes reutilizáveis
-   Gerenciamento de estado
-   Roteamento de páginas utilizando React Router
-   Consumo de APIs RESTful utilizando a biblioteca Axios
-   Estilização de componentes utilizando CSS e bibliotecas

<div id="Informacoes">
<h2>Informações adicionais</h2>
</div>

### Tabela de métodos HTTP

| Método | Backend | Frontend |
|--|--|--|
| GET | ✔️ | ✔️ |
| POST | ✔️ | ✔️ |
| PUT | ✔️ | ✔️ |
| DEL | ✔️ | ✔️ |


- Algumas informações úteis estão no arquivo application.properties
![enter image description here](https://github.com/arthurlunkes/Project_Contas_A_Receber/blob/main/images/applicationproperties.PNG)
- Pode acessar a documentação de consumo dos endpoints no postman [aqui!](https://www.postman.com/spacecraft-participant-60213181/workspace/workspacepublic/collection/19564710-edf37ea1-0b38-4841-9fa2-c7c13ec859b5?action=share&creator=19564710)
![postman](https://github.com/arthurlunkes/Project_Contas_A_Receber/blob/main/images/postman.PNG)

- Quando inserir um cliente pelo front, vai dar um erro, mas se recarregar a página, o registro aparece

<div id="Passos">
<h2>Passos para rodar esse projeto</h2>
</div>

1. Baixe esse repositório via git ou GitHub Desktop
2. Abra a pasta do backend com a IDE de sua preferência
3. Baixe as dependências do projeto, seguindo os passo a passo da sua IDE
4. Starte a aplicação a partir da classe AccountsreceivableApplication
5. Abra a pasta do frontend com o VSCode
6. Abra o terminal na pasta
7. Rode o comando npm install (Para instalar as dependências)
8. Após terminar de baixar, rode o comando npm start
9. Pronto para testar!

<div id="Consideracoes">
<h2>Considerações finais</h2>
</div>

O desenvolvimento desse desafio Full Stack utilizando java com Spring Boot e React foi concluído com apenas 2 probleminhas: um dos requisitos não funcionando, alterar os registros e quando o registro é inserido no frontend, dá erro mas recarregando a página, ele aparece.
