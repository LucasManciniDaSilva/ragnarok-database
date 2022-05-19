export default class BasePage {
  static loadHomepageAndCheckUrl(url, text) {
    let currentTime = new Date(Date.UTC(2020, 1, 1)).getDate();
    cy.clock(currentTime);
    cy.visualRegression([1200, 1162], url, text);
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

  static mobileType(mobile, url, text) {
    cy.visualRegression(mobile, url, text);
  }
}
