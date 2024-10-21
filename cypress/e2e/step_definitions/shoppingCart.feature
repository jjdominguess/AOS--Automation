Feature: Teste básico

Scenario: Realizar a busca de um produto
    Given que o usuario acesso a pagina inicial
    When o usuário realiza a busca por Tablet
    Then o usuário terá acesso a todos os itens que compartilhem o mesmo nome
    
Scenario: Incluir um produto ao carrinho
    Given que o usuario acesso a pagina inicial
    When o usuário realiza a busca por Tablet
    And o usuário seleciona o produto "HP ElitePad 1000 G2 Tablet"
    Then o usuário adiciona o produto ao carrinho

Scenario: Validar inclusão do produto ao carrinho
    Given que o usuario acesso a pagina inicial  
    When o usuário realiza a busca por Tablet
    And o usuário seleciona o produto "HP ElitePad 1000 G2 Tablet"
    And o usuário adiciona o produto ao carrinho
    Then o produto "HP ElitePad 1000 G2 Tablet" deve estar no carrinho
