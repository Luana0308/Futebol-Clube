# Projeto Futebol Clube ! ⚽

---

## 🍃  Sumário
  
  - Requisitos do Projeto
  
    - 1 - Desenvolva em /app/backend/src/database nas pastas correspondentes, uma migration e um model para a tabela de users
 	- 2 - Desenvolva testes que cubram no mínimo 5 por cento dos arquivo backend em /src com um mínimo de 7 linhas cobertas	
	- 3 - Desenvolva o endpoint /login no backend de maneira ele permita o acesso com dados válidos no frontend
	- 4 - Desenvolva testes que cubram no mínimo 10 por cento dos arquivo backend em /src com um mínimo de 19 linhas cobertas
	- 5 - Desenvolva o endpoint /login no backend de maneira ele não permita o acesso sem informar um email no frontend
	- 6 - Desenvolva testes que cubram no mínimo 10 por cento dos arquivo backend em /src com um mínimo de 19 linhas cobertas
	- 7 - Desenvolva o endpoint /login no backend de maneira ele não permita o acesso sem informar uma senha no frontend
	- 8 - Desenvolva testes que cubram no mínimo 20 por cento dos arquivo backend em /src com um mínimo de 35 linhas cobertas
	- 9 - Desenvolva o endpoint /login no backend de maneira ele não permita o acesso com um email inválido no frontend
	- 10 - Desenvolva testes que cubram no mínimo 30 por cento dos arquivo backend em /src com um mínimo de 45 linhas cobertas
	- 11 - Desenvolva o endpoint /login no backend de maneira ele não permita o acesso com uma senha inválida no frontend
	- 12 - Desenvolva o endpoint /login/validate no backend de maneira ele retorne os dados corretamente no frontend
	- 13 - Desenvolva testes que cubram no mínimo 45 por cento dos arquivo backend em /src com um mínimo de 70 linhas cobertas
	- 14 - Desenvolva em /app/backend/src/database nas pastas correspondentes, uma migration e um model para a tabela de teams
	- 15 - Desenvolva o endpoint /teams no backend de forma que ele possa retornar todos os times corretament
	- 16 - Desenvolva o endpoint /teams/:id no backend de forma que ele possa retornar dados de um time específico
	- 17 - Desenvolva testes que cubram no mínimo 60 por cento dos arquivo backend em /src com um mínimo de 80 linhas cobertas
	- 18 - Desenvolva em /app/backend/src/database nas pastas correspondentes, uma migration e um model para a tabela de matches
	- 19 - Desenvolva o endpoint /matches de forma que os dados apareçam corretamente na tela de partidas no frontend
	- 20 - Desenvolva o endpoint /matches de forma que seja possível filtrar as partidas em andamento na tela de partidas do frontend
	- 21 - Desenvolva o endpoint /matches de forma que seja possível filtrar as partidas finalizadas na tela de partidas do frontend
	- 22 - Desenvolva o endpoint /matches de modo que seja possível salvar uma partida com o status de inProgress como true no banco de dados
	- 23 - Desenvolva o endpoint /matches de modo que seja possível salvar uma partida com o status de inProgress como false no banco de dados
	- 24 - Desenvolva o endpoint /matches de forma que não seja possível inserir uma partida com times iguais
	- 25 - Desenvolva o endpoint /matches de forma que não seja possível inserir uma partida com time que não existe na tabela teams
	- 26 - Desenvolva o endpoint /matches de forma que não seja possível inserir uma partida sem um token válido
	- 27 - Desenvolva o endpoint /matches de forma que seja possível atualizar partidas em andamento
	- 28 - Desenvolva o endpoint /leaderboard/home de forma que seja possível filtrar a classificações dos times quando mandantes na tela de classificação do frontend com os dados iniciais do banco de dados
	- 29 - Desenvolva o endpoint /leaderboard/home de forma que seja possível filtrar a classificações dos times quando mandantes na tela de classificação do frontend e ao inserir a partida Corinthians 2 X 1 Internacional a tabela será atualizada


---

## 🍃  O que foi desenvolvido 

 O TFC é um site informativo sobre partidas e classificações de futebol! ⚽️

No projeto eu desenvolvi uma API e também integrei - através do docker-compose - as aplicações para que elas funcionem consumindo um banco de dados.

Construi um back-end dockerizado utilizando modelagem de dados através do Sequelize. O projeto foi feito respeitando as regras de negócio e a API é capaz de ser consumida por **um front-end já provido nesse projeto.**

Para adicionar uma partida é necessário ter um token, portanto a pessoa deverá estar logada para fazer as alterações. Teremos um relacionamento entre as tabelas teams e matches para fazer as atualizações das partidas.

---
