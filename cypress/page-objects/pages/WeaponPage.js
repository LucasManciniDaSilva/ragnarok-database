import BasePage from "../basePage";

export default class WeaponPage extends BasePage {
  static searcWeaponByName(weapon) {
    cy.searchWeapon(weapon);
  }

  static checkWeaponName(weapon) {
    cy.shouldCheckWeaponName(weapon);
  }

  static chooseWeaponType(type) {
    cy.chooseCategoryType(type);
  }
}
