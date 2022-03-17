And(/^Search monster by name (.*)$/, (monster) => {
  cy.searchMonster(monster);
});

Then(/^I should see the monster (.*)$/, (monster) => {
  cy.get(".monstros.show").should("contain", monster);
  cy.screenshot();
});

And(/^I Click on advanced search and click on "([^"]*)" type$/, (type) => {
  cy.get("#nav-button").click();
  cy.get(".specified-filter").contains(type).click();
});

Then(/^I verify if returned the message "([^"]*)"$/, (message) => {
  cy.get(".title1").should("contain", message);
  cy.screenshot();
});

And(/^I choose the size option "([^"]*)"$/, (size) => {
  cy.get('select[name="tamanho"]').select(size);
  cy.get('select[name="tamanho"]').should("have.value", 2);
  cy.screenshot();
});

And(/^I choose the type option "([^"]*)"$/, (type) => {
  cy.get('select[name="categoria"]').select(type);
  cy.get('select[name="categoria"]').should("have.value", type);
  cy.screenshot();
});
