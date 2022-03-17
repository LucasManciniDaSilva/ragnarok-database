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
