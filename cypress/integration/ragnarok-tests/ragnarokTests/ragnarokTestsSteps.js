Given(/^I am on the Ragnarok Database page$/, () => {
  cy.visit(Cypress.config().baseUrl);
  cy.url().should("include", "/database/thor");
});

When(/^Check if the title of the page is "([^"]*)"$/, (title) => {
  cy.get("h1").should("contain", title);
});
