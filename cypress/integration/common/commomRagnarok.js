import BasePage from "../../page-objects/basePage";

defineStep(/^I am on the Ragnarok Database page$/, () => {
  BasePage.loadHomepageAndCheckUrl(Cypress.config().baseUrl, "database/thor");
  cy.clearCookies({ log: true });
  cy.clearLocalStorage("your item", { log: true });
});

defineStep(
  /^Click on "([^"]*)" and check if the title of the page is "([^"]*)"$/,
  (button, title) => {
    BasePage.clickOnElementAndButtonAndCheckElement("a", button, title);
  }
);

defineStep(/^Search monster by name Aliot/, () => {
  cy.fixture("search").then((search) => {
    const searchMonster = search.monsterName;
    cy.searchMonster(searchMonster);
  });
});

defineStep(
  /^I am on the Ragnarok Database page using a "([^"]*)"$/,
  (mobile) => {
    cy.viewport(mobile);
    BasePage.loadHomepageAndCheckUrl(Cypress.config().baseUrl, "database/thor");
  }
);
