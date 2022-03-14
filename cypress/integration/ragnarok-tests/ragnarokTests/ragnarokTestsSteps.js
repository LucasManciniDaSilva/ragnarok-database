Given(/^I am on the Ragnarok Database page$/, () => {
  cy.visit(Cypress.config().baseUrl);
  cy.url().should("include", "/database/thor");
});

When(/^Check if the title of the page is "([^"]*)"$/, (title) => {
  cy.get("h1").should("contain", title);
});

And(
  /^Click on "([^"]*)" and check if the title of the page is "([^"]*)"$/,
  (button, title) => {
    cy.get("a").contains(button).click();
    cy.get("h1").should("contain", title);
  }
);

Then("Check the lenght of the list of monsters is {int}", (lenght) => {
  cy.get(".monstros.show").its("length").should("eq", lenght);
});
