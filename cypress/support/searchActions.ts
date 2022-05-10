declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * @param monsterName - The name of the monster to search
     */
    searchMonster(monsterName: string): Chainable<Subject>;

    /**
     * @param weaponName - The name of the weapon to search
     */
    searchWeapon(weaponName: string): Chainable<Subject>;
  }
}

/**
 * Type a monster name in the search box
 */
 Cypress.Commands.add("searchMonster", (monster) => {
  cy.get("#input-monsters").as("inputMonsters");
  cy.get("@inputMonsters").clear();
  cy.get("@inputMonsters").type(`${monster} {enter}`);
});

/**
 * Type a weapon name in the search box
 */
 Cypress.Commands.add("searchWeapon", (weapon) => {
  cy.get("#input-itens").as("itens");
  cy.get("@itens").clear();
  cy.get("@itens").type(weapon).type("{enter}");
});

