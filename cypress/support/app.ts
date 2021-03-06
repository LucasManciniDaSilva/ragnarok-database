declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Create a txt file and add to allure report
     */
    attFileAllure(fileName: string, filePath: string, information: string): Chainable<Subject>;

    /**
     * ScrollIntoView the monster
     */
    scrollIntoViewMonster(monster: string): Chainable<Subject>;

    setResolution(size: ViewportPreset): Chainable<Subject>;

    visualRegression(size: ViewportPreset, url: string, text: string): Chainable<Subject>;

  }
}

Cypress.Commands.add("setResolution", (size) => {
    if(Cypress._.isArray(size)){
    cy.viewport(size[0], size[1]);
    }
    else {
    cy.viewport(size);
    }
})

Cypress.Commands.add("visualRegression", (size, url, text) => {
 cy.setResolution(size)
 cy.visit(url);
 cy.url().should("include", text);
})


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

/**
 * scroll to see the monster
 */

Cypress.Commands.add("scrollIntoViewMonster", (monster) => {
  cy.get("h5").contains(monster).as("monster");
  cy.get("@monster").scrollIntoView();
  cy.wait(5000);
  cy.get("@monster").click();
  cy.wait(5000);
  cy.screenshot();
});

