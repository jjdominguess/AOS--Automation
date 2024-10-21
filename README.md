Projeto de Automação de Testes - Cypress e Cucumber
Este repositório contém um projeto de automação de testes utilizando Cypress com Cucumber (BDD) para realizar testes end-to-end no site Advantage Online Shopping.

Frameworks necessários para a execução do projeto

Node.js (versão 12 ou superior)
npm (geralmente vem com o Node.js)
Cypress
Cucumber

-Instalação do Cypress:

Execute o seguinte comando no terminal para instalar o Cypress:
    npm init 
    npm install cypress --save-dev
    npm install cypress-cucumber-preprocessor --save-dev

Configurações do projeto: {

    - o arquivo 'package.json' precisa possuir o trecho de código: 
        "cypress-cucumber-preprocessor":{
        "nonGlobalStepDefinitions": true,
        "stepDefinitions": "cypress/e2e/step_definitions"
    }

    - o arquivo cypress.config.js precisa possuir o trecho de código:
    const cucumber = require('cypress-cucumber-preprocessor').default
    const { defineConfig } = require('cypress');
    module.exports = {
    e2e: {
        setupNodeEvents(on, config) {
            on('file:preprocessor', cucumber());
        },
            specPattern: 'cypress/e2e/step_definitions/*.feature',
        },
    };

}

Link do projeto no Github: https://github.com/jjdominguess/AOS--Automation

utilizar o comando:
    git clone https://github.com/jjdominguess/AOS--Automation

Após estas configurações e baixado o projeto localmente pelo Git já pode rodar o seguinte 
comando no terminal, porem no diretório da pasta do projeto: 
    npx cypress open

Estrutura do Projeto
O projeto está organizado da seguinte forma:

cypress/e2e/features: Diretório onde ficam os arquivos .feature que descrevem os cenários de teste em Gherkin.
cypress/e2e/step_definitions: Diretório onde ficam as implementações dos steps das features.
cypress/support: Arquivos de suporte e configuração do Cypress.
