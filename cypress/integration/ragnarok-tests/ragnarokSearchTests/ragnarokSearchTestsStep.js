And(/^Search monster by name (.*)$/, (monster) => {
  cy.searchMonster(monster);
});

Then(/^I should see the monster (.*)$/, (monster) => {
  cy.shouldCheckMonsterName(monster);
});

And(/^I Click on advanced search and click on "([^"]*)" type$/, (type) => {
  cy.chooseType(type);
});

Then(/^I verify if returned the message "([^"]*)"$/, (message) => {
  cy.verifyErrorMessage(message);
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

Then(
  /^Search monster in the page "([^"]*)" and scrolling into view$/,
  (monster) => {
    cy.get("h5").contains(monster).as("monster");
    cy.get("@monster").scrollIntoView();
    cy.wait(5000);
    cy.get("@monster").click();
    cy.wait(5000);
    cy.screenshot();
  }
);
