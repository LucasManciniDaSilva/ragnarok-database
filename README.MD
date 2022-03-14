# Overview

Projeto de automação utilizando Cypress, Cucumber e Allure.

## Start

Para baixar as dependências do projeto, é necessário rodar o comando `npm install`

## Stack

[Cypress](https://docs.cypress.io/guides/overview/why-cypress)

[Allure](https://docs.qameta.io/allure/)

[Cucumber](https://cucumber.io/)

[Cucumber Pre-Processor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor)

[Prettier](https://prettier.io/)

[Cypress Allure Plugin](https://github.com/Shelex/cypress-allure-plugin-example)

## Executar os testes pela UI do Cypress via linha de comando

Para rodar o teste pela UI do cypress é necessário rodar o seguinte comando:

`npm run cy:open`

## Executar os testes pelo console linha de comando

Para rodar o teste pelo console é necessário rodar o seguinte comando:

`npm run cy:run`

## Executar os testes e verificar o report do allure

Para executar os testes e gerar o relatório no allure é necessário rodar o seguinte comando:

`npm run cy:allure`

Após terminar os testes, será gerado um relatório do allure na pasta allure-reports-portal. Para rodar o
projeto é necessário rodar o seguinte comando na pasta de allure-reports-portal:

`npm start`

Para verificar o report do allure é necessário acessar um navegador e utilizar a seguinte url: localhost:3000.

## Estrutura do projeto

O projeto foi estruturado da seguinte maneira:

```
\cypress
    \files # Pastas onde se localizam os attachments do allure.
    \fixtures # Pasta onde contém os request body utilizados nas chamadas da API.
    \integration # Pasta onde contém todos as features e steps dos nossos testes.
        \common # Onde fica localizados os steps que são utilizados em mais de uma feature.
        \cucumber-test # Pasta onde fica localizados as features e as pastas de steps referente a cada feature.
            \nomeDeUmaFeature # Onde fica localizado os steps da feature nomeada na pasta.
             Ex: teste.feature teria uma pasta chamada 'teste' com um arquivo testeSteps.js
    \plugins # Plugins utilizados no projeto
    \screenshots # Onde fica localizado os screenshots dos testes
    \support # É onde fica localizados comandos que serão utilizados antes dos testes
```

## Estrutura dos testes

A estrutura de testes do projeto usando [Cucumber](https://cucumber.io/) segue a seguinte estrutura

### Obter acesso a API

O primeiro Step para a feature é realizar um passo para termos o acesso a API que queremos usar, por exemplo:

```
 Given Obtenho um access-token da API pela chamada de POST '/oauth/access-token'
```

### Padrão de Scenarios

Os cenários nós devemos passar como parâmetro o path da requisição na qual desejamos realizar uma chamada
como por exemplo `/create`. O `/create` será usado como parâmetro na classe de stepDefinition da feature.

```
 When Realizo um Post '/create' para criar um novo registro na base de dados
```

Também utilizamos status code e campos que queremos verificar no response da chamada como parâmetros como por exemplo:

```
Then Verifico se o status code retornado é um 202 e se retornou o campo 'nome' no response body
```

Mesmo que o 202 não seja passado como um parâmetro no Scenario, é possível definir ele na criação do step na classe
de stepDefinition da feature como por exemplo:

```
Then('Verifico se o status code retornado é um {int} e se retornou o campo {string} no response body', (statusCode, id)
```

### O exemplo completo do Scenario

```
Scenario: Realizo a criação de um novo registro
Given Obtenho um access-token da API pela chamada de POST '/oauth/access-token'
When Realizo um Post '/create' para criar um novo registro na base de dados
Then Verifico se o status code retornado é um 202 e se retornou o campo 'id' no response body
```