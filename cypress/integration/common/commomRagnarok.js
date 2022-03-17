defineStep(/^I am on the Ragnarok Database page$/, () => {
  cy.visit(Cypress.config().baseUrl);
  cy.url().should("include", "/database/thor");
  cy.clearCookies({ log: true });
  cy.clearLocalStorage("your item", { log: true });
});

defineStep(
  /^Click on "([^"]*)" and check if the title of the page is "([^"]*)"$/,
  (button, title) => {
    cy.get("a").contains(button).click();
    cy.get("h1").should("contain", title);
  }
);

defineStep(/^Search monster by name Aliot/, () => {
  cy.fixture("search").then((search) => {
    const searchMonster = search.monsterName;
    cy.get("#input-monsters").clear();
    cy.get("#input-monsters").type(`${searchMonster} {enter}`);
  });
});

defineStep(
  /^I am on the Ragnarok Database page using a "([^"]*)"$/,
  (mobile) => {
    cy.viewport(mobile);
    cy.visit(Cypress.config().baseUrl);
    cy.url().should("include", "/database/thor");
  }
);
