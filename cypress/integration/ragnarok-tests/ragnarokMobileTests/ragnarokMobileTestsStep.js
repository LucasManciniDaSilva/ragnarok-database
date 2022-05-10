Given(/^I am on the Ragnarok Database page on (.*)$/, (mobile) => {
  cy.mobileVersion(mobile);
});

And(/^Search weapon by name (.*)$/, (weapon) => {
  cy.searchWeapon(weapon);
});

Then(/^I should see the weapon (.*)$/, (weapon) => {
  cy.shouldCheckWeaponName(weapon);
});

And(/^I Click on advanced search and click on "([^"]*)" type$/, (type) => {
  cy.chooseType(type);
});

And(/^Search weapon by name Espada/, () => {
  cy.fixture("search").then((search) => {
    const weaponName = search.weaponName;
    cy.searchWeapon(weaponName);
  });
});

Then(/^I verify if returned the message "([^"]*)"$/, (message) => {
  cy.verifyErrorMessage(message);
});
