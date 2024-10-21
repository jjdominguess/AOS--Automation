import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

//Cenário: Realizar a busca de um produto
Given("que o usuario acesso a pagina inicial", () => {
    cy.visit("https://advantageonlineshopping.com/#/");
    cy.wait(3800);
}) 

When('o usuário realiza a busca por Tablet', () => {
    cy.get('#mobileSearch > #menuSearch').click();
    cy.get('input[name="mobile_search"]').type(`Tablet{enter}`);
});

Then("o usuário terá acesso a todos os itens que compartilhem o mesmo nome",() =>{
    cy.wait(3800);
    cy.contains(' Search result: "Tablet" ')
})

//Cenário: Incluir um produto ao carrinho
And('o usuário seleciona o produto "HP ElitePad 1000 G2 Tablet"', () => {
    cy.contains('.productName', 'HP ElitePad 1000 G2 Tablet').click()
    cy.get('.fixedBtn > .roboto-medium').click()
    
})

Then('o usuário adiciona o produto ao carrinho', () => {
    cy.get('.fixedBtn > .roboto-medium').click()
})

//Validar inclusão do produto ao carrinho


And('o usuário adiciona o produto ao carrinho', () => {
    cy.get('.fixedBtn > .roboto-medium').click()
})

Then('o produto "HP ElitePad 1000 G2 Tablet" deve estar no carrinho', () => {
    cy.get('#shoppingCartLink').click()
    cy.get('.sticky')
    cy.get('tr.ng-scope > :nth-child(2) > .roboto-regular')
})