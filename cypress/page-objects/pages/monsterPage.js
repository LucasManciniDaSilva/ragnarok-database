import BasePage from "../basePage";

export default class MonsterPage extends BasePage {
  static searchMonsterName(monster) {
    cy.searchMonster(monster);
  }

  static checkMonsterName(monster) {
    cy.shouldCheckMonsterName(monster);
  }

  static checkIfMonsterNameInResponseList(monster) {
    cy.scrollIntoViewMonster(monster);
  }

  static chooseMonsterType(type) {
    cy.chooseCategoryType(type);
  }
}
