defineStep(/^I am on the Ragnarok Database page$/, () => {
  cy.visit(Cypress.config().baseUrl);
  cy.url().should("include", "/database/thor");
});

defineStep(
  /^Click on "([^"]*)" and check if the title of the page is "([^"]*)"$/,
  (button, title) => {
    cy.get("a").contains(button).click();
    cy.get("h1").should("contain", title);
  }
);
