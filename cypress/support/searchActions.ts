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

    /**
     * @param size - size of the monster or item
     */
     chooseSizeOption(size: string): Chainable<Subject>;

    /**
     * @param type - type of the monster or item
     */
     chooseTypeOption(type: string): Chainable<Subject>;

    /**
     * @param type - Type of search (item, monster, item, equip )
     */
     chooseCategoryType(type: string): Chainable<Subject>;
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

/**
 * Choose the size of the monster or item
 */
Cypress.Commands.add("chooseSizeOption", (size) => {
  cy.get('select[name="tamanho"]').select(size);
  cy.get('select[name="tamanho"]').should("have.value", 2);
  cy.screenshot();
});

/**
 * Choose the type of weapon
 */

Cypress.Commands.add("chooseTypeOption", (type) => {
  cy.get('select[name="categoria"]').select(type);
  cy.get('select[name="categoria"]').should("have.value", type);
  cy.screenshot();
});

Cypress.Commands.add("chooseCategoryType", (type) => {
  cy.get("#nav-button").click();
  cy.get(".specified-filter").contains(type).click();
});



