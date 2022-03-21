class BasePage {
  static loadHomepage(url) {
    cy.visit(url);
  }

  static urlShouldInclude(text) {
    cy.url().should("include", text);
  }
}

class RagnarokPage extends BasePage {
  static clickOnElementAndButton(element, button) {
    cy.get(element).contains(button).click();
  }

  static elementShouldInclude(element, text) {
    cy.get(element).should("include", text);
  }
}

defineStep(/^I am on the Ragnarok Database page$/, () => {
  RagnarokPage.loadHomepage(Cypress.config().baseUrl);
  RagnarokPage.urlShouldInclude("/database/thor");
  cy.clearCookies({ log: true });
  cy.clearLocalStorage("your item", { log: true });
});

defineStep(
  /^Click on "([^"]*)" and check if the title of the page is "([^"]*)"$/,
  (button, title) => {
    RagnarokPage.clickOnElementAndButton("a", button);
    RagnarokPage.elementShouldInclude("h1", title);
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
    RagnarokPage.loadHomepage(Cypress.config().baseUrl);
    RagnarokPage.urlShouldInclude("/database/thor");
  }
);
