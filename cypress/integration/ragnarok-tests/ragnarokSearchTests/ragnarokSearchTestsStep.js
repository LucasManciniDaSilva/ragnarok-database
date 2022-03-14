And(/^Search monster by name (.*)$/, (monster) => {
  cy.get("#input-monsters").clear();
  cy.get("#input-monsters").type(monster).type("{enter}");
});

Then(/^I should see the monster (.*)$/, (monster) => {
  cy.get(".monstros.show").should("contain", monster);
});
