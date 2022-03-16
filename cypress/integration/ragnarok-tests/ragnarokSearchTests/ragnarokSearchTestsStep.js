And(/^Search monster by name (.*)$/, (monster) => {
  cy.get("#input-monsters").as("inputMonsters");
  cy.get("@inputMonsters").clear();
  cy.get("@inputMonsters").type(monster).type("{enter}");
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
