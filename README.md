# Project fullstack Contas a receber

![enter image description here](https://github.com/arthurlunkes/Project_Contas_A_Receber/blob/main/images/frontend.PNG)

Este é um projeto Full Stack de contas a receber que utiliza Java com Spring Boot e React.

### Modelo de domínio

![enter image description here](https://github.com/arthurlunkes/Project_Contas_A_Receber/blob/main/images/diagrama-de-dominio.png)

### O que foi utilizado

-   Java 17
-   Spring Boot 
-   React


## Backend (Java com Spring)

### Descrição

O Backend do sistema foi desenvolvido utilizando a linguagem Java juntamente com Spring. Essa camada é responsável por gerenciar a lógica de negócio, acessar o banco de dados e disponibilizar APIs REST para serem consumidas pelo Frontend.

### Funcionalidades Implementadas

-   CRUD (Create, Read, Update, Delete) de entidades
-   Validação de dados e tratamento de erros
-   Integração com banco de dados utilizando Spring Data JPA e banco de dados em memória H2
-   Implementação de endpoints REST
-   Documentação da API utilizando o Postman

## Frontend (React)

### Descrição

O Frontend do sistema foi desenvolvido utilizando a biblioteca React. Essa camada é responsável por apresentar a interface de usuário, realizar requisições para o Backend e exibir os dados de forma interativa e amigável.

### Funcionalidades Implementadas

-   Criação de componentes reutilizáveis
-   Gerenciamento de estado
-   Roteamento de páginas utilizando React Router
-   Consumo de APIs RESTful utilizando a biblioteca Axios
-   Estilização de componentes utilizando CSS e bibliotecas

## Informações adicionais

### Tabela de métodos HTTP

| Método | Backend | Frontend |
|--|--|--|
| GET | ✔️ | ✔️ |
| POST | ✔️ | ✔️ |
| PUT | |  |
| DEL | ✔️ | ✔️ |


- Método PUT está com problemas
- Algumas informações úteis estão no arquivo application.properties
![enter image description here](https://github.com/arthurlunkes/Project_Contas_A_Receber/blob/main/images/applicationproperties.PNG)
- Pode acessar a documentação de consumo dos endpoints no postman [aqui!](https://www.postman.com/spacecraft-participant-60213181/workspace/workspacepublic/collection/19564710-edf37ea1-0b38-4841-9fa2-c7c13ec859b5?action=share&creator=19564710)
![postman](https://github.com/arthurlunkes/Project_Contas_A_Receber/blob/main/images/postman.PNG)

- Quando rodar o backend, pode acessar o banco H2 pelo navegador utilizando o link: http://localhost:8080/h2-console

![h2](https://github.com/arthurlunkes/Project_Contas_A_Receber/blob/main/images/h2.PNG)
![h2-console](https://github.com/arthurlunkes/Project_Contas_A_Receber/blob/main/images/h2-console.PNG)

- Quando inserir um cliente pelo front, vai dar um erro, mas se recarregar a página, o registro aparece

## Considerações finais

O desenvolvimento desse desafio Full Stack utilizando java com Spring Boot e React foi concluído com apenas 2 probleminhas: um dos requisitos não funcionando, alterar os registros e quando o registro é inserido no frontend, dá erro mas recarregando a página, ele aparece.
