export default class mainOptions {
  static search(text) {
    cy.get('input[name="search"]').type(`${text}{enter}`);
  }
}
