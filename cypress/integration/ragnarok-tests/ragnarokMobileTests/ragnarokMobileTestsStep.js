Given(/^I am on the Ragnarok Database page on (.*)$/, (mobile) => {
  cy.viewport(mobile);
  cy.visit(Cypress.config().baseUrl);
  cy.url().should("include", "/database/thor");
});

And(/^Search weapon by name (.*)$/, (weapon) => {
  cy.get("#input-itens").as("itens");
  cy.get("@itens").clear();
  cy.get("@itens").type(weapon).type("{enter}");
});

Then(/^I should see the weapon (.*)$/, (weapon) => {
  cy.get(".armamentos.show").should("contain", weapon);
  cy.screenshot();
});

And(/^I Click on advanced search and click on "([^"]*)" type$/, (type) => {
  cy.get("#nav-button").click();
  cy.get(".specified-filter").contains(type).click();
});

And(/^Search weapon by name (.*)$/, (weapon) => {
  cy.get("#input-itens").as("itens");
  cy.get("@itens").clear();
  cy.get("@itens").type(weapon).type("{enter}");
});

Then(/^I verify if returned the message "([^"]*)"$/, (message) => {
  cy.get(".title1").should("contain", message);
  cy.screenshot();
});
