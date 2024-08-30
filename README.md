# Trabalho-de-programacao: Node.js
## Dupla: Larissa V. e Nicolas K.

### Objetivo
### Criar um aplicativo NodeJS que atenda requisi ̧c ̃oes do protocolo HTTP e gerencie registros no banco
de dados MYSQL. O aplicativo deve gerenciar duas entidades que possuem relacionamentos. O rela-
cionamento deve ser 1 para N ou N para N.

### Trabalho
*O aplicativo deve fornecer as seguintes operações, sendo que a aplicação fornecem requisições para as
entidade A e B:*
**1.** Ler todos os registros da entidade A e B (1 ponto).
**2.** Ler apenas um registo pelo id da entidade A e B (1 ponto). E necess ́ario ao ler A, buscar  ́
todos os registros de B vinculados com ele e vice-versa.
**3.** Ler subconjunto de registros, buscando por um atributo da entidade A e B (3 pontos). E ́
necessário ao ler A, buscar todos os registros de B vinculados com ele e vice-versa.
**4.** Criar um registro da entidade A e B (2 pontos). E necessário criar o vínculo entre a  ́
entidade A e B.
**5.** Atualizar um registro da entidade A e B (2 pontos). E necessário criar o vínculo entre a  ́
entidade A e B.
**6.** Excluir um registro da entidade A e B (1 ponto).

### Requisitos
- O projeto deve ser feito em NodeJS.
- O banco de dados utilizado deve ser o MySQL.
- A aplicação deve fornecer requisi ̧c ̃oes HTTP.
- O projeto deve possuir um relacionamento do tipo 1 para N ou N para N.
- Ao entregar, fornecer o script do Banco de dados, o código do backend e instruções de como
realizar as requisições HTTP.

### Como usar:
#### POST
*Escolha o método de post no insomnia.*
- Clientes: Para enviar um cliente no banco de dados copie e cole o código abaixo json no insomnia.
endereço:http://localhost:3000/cliente/
  ```
  {
	  "nome":"nome aqui",
	  "cpf":"cpf aqui",
	  "email":"email aqui"
  }
  ```
- Livros: Para enviar um livro no banco de dados copie e cole o código abaixo json no insomnia.
endereço:http://localhost:3000/livro/
  ```
  {
	  "quantidade":quantidade aqui(numero),
	  "nome":"nome aqui",
	  "descricao":"descrição aqui"	
  }
  ```
- Emprestimos: Para enviar um livro no banco de dados copie e cole o código abaixo json no insomnia(crie depois do livro e cliente).
endereço:http://localhost:3000/emprestimo/
  ```
  {
	  "livroId":id do livro aqui(numero),
    "clienteId":id do cliente aqui(numero,
    "datadevolucao":"a data aqui(no formato mm/dd/aaaa"
  }
  ```
  
#### GET
*Escolha o método de get no insomnia.*
- Clientes:
  Por id: Envie um get no insomnia para o endereço http://localhost:3000/cliente/:id
  Pegar todos: Envie um get no insomnia para o endereço http://localhost:3000/cliente/
  Pegar por nome(subconjunto): Envie um get no insomnia para o endereço http://localhost:3000/cliente/nome/:nome
  
- Livros:
  Por id: Envie um get no insomnia para o endereço http://localhost:3000/livro/:id
  Pegar todos: Envie um get no insomnia para o endereço http://localhost:3000/livro/
  Pegar por nome(subconjunto): Envie um get no insomnia para o endereço http://localhost:3000/livro/nome/:nome
  
- Emprestimos:
  Por id: Envie um get no insomnia para o endereço http://localhost:3000/emprestimo/:id
  Pegar todos: Envie um get no insomnia para o endereço http://localhost:3000/emprestimo/
  Pegar por data(subconjunto): Envie um get no insomnia para o endereço http://localhost:3000/emprestimo/data/:datadevolucao

### PUT
*Escolha o método de put no insomnia.*
- Clientes: Para enviar um cliente no banco de dados copie e cole o código abaixo json no insomnia.
endereço:http://localhost:3000/cliente/:id
  ```
  {
	  "nome":"nome aqui",
	  "cpf":"cpf aqui",
	  "email":"email aqui"
  }
  ```
- Livros: Para enviar um livro no banco de dados copie e cole o código abaixo json no insomnia.
endereço:http://localhost:3000/livro/:id
  ```
  {
	  "quantidade":quantidade aqui(numero),
	  "nome":"nome aqui",
	  "descricao":"descrição aqui"	
  }
  ```
- Emprestimos: Para enviar um livro no banco de dados copie e cole o código abaixo json no insomnia(crie depois do livro e cliente).
endereço:http://localhost:3000/emprestimo/:id
  ```
  {
	  "livroId":id do livro aqui(numero),
    "clienteId":id do cliente aqui(numero,
    "datadevolucao":"a data aqui(no formato mm/dd/aaaa"
  }
  ```

### DELETE
*Escolha o método de delete no insomnia.*

- Clientes:
  Por id: Envie um delete no insomnia para o endereço http://localhost:3000/cliente/:id
  
- Livros:
  Por id: Envie um delete no insomnia para o endereço http://localhost:3000/livro/:id
  
- Emprestimos:
  Por id: Envie um delete no insomnia para o endereço http://localhost:3000/emprestimo/:id
  

