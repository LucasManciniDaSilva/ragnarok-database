declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Create a txt file and add to allure report
     */
    attFileAllure(fileName: string, filePath: string, information: string): Chainable<Subject>;
  }
}



/**
 * Create a txt file and add to allure report
 */
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