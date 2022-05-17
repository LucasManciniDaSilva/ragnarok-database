export default class BasePage {
  static loadHomepageAndCheckUrl(url, text) {
    cy.visit(url);
    cy.url().should("include", text);
  }

  static clickOnElementAndButtonAndCheckElement(element, button, text) {
    cy.get(element).contains(button).click();
    cy.get(element).contains(text);
  }

  static chooseTypeInPage(type) {
    cy.chooseType(type);
  }

  static verifyErrorMessage(message) {
    cy.verifyErrorMessage(message);
  }

  static chooseSize(size) {
    cy.chooseSizeOption(size);
  }

  static chooseType(type) {
    cy.chooseTypeOption(type);
  }

  static mobileType(mobile) {
    cy.mobileVersion(mobile);
  }
}
