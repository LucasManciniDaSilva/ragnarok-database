declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * @param mobile - version of mobile that is running the tests
     */
    mobileVersion(mobile: ViewportPreset): Chainable<Subject>;

    /**
     * @param weaponName - The name of the weapon to search
     */
    shouldCheckWeaponName(weaponName: string): Chainable<Subject>;

     /**
     * @param monsterName - The name of the monster to search
     */
    shouldCheckMonsterName(monsterName: string): Chainable<Subject>;

    /**
     * @param type - Type of search (item, monster, item, equip )
     */
     chooseMonsterType(type: string): Chainable<Subject>;

    /**
     * @param message - Error message to return
     */
    verifyErrorMessage(message: string): Chainable<Subject>;
  }
}

Cypress.Commands.add("shouldCheckWeaponName", (weapon) => {
  cy.get(".armamentos.show").should("contain", weapon);
});

Cypress.Commands.add("verifyErrorMessage", (message) => {
  cy.get(".title1").should("contain", message);
});

Cypress.Commands.add("shouldCheckMonsterName", (monster) => {
  cy.get(".monstros.show").should("contain", monster);
});


