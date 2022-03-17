Cypress.Commands.add("attFileAllure", (obj, type, information) => {
  const timestamp = Date.now();

  cy.writeFile(
    `cypress/files/api/${type}_${timestamp}_${information}.txt`,
    obj
  );

  cy.allure().fileAttachment(
    `api ${type} ${timestamp} ${information} `,
    `cypress/files/api/${type}_${timestamp}_${information}.txt`,
    "text/plain"
  );
});

Cypress.Commands.add("searchMonster", (monster) => {
  cy.get("#input-monsters").as("inputMonsters");
  cy.get("@inputMonsters").clear();
  cy.get("@inputMonsters").type(`${monster} {enter}`);
});
