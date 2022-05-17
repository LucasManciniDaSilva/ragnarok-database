import WeaponPage from "../../../../page-objects/pages/WeaponPage";

Given(/^I am on the Ragnarok Database page on (.*)$/, (mobile) => {
  WeaponPage.mobileType(mobile);
});

And(/^Search weapon by name (.*)$/, (weapon) => {
  WeaponPage.searcWeaponByName(weapon);
});

Then(/^I should see the weapon (.*)$/, (weapon) => {
  WeaponPage.checkWeaponName(weapon);
});

And(/^I Click on advanced search and click on "([^"]*)" type$/, (type) => {
  WeaponPage.chooseWeaponType(type);
});

And(/^Search weapon by name Espada/, () => {
  cy.fixture("search").then((search) => {
    const weaponName = search.weaponName;
    WeaponPage.searcWeaponByName(weaponName);
  });
});

Then(/^I verify if returned the message "([^"]*)"$/, (message) => {
  WeaponPage.verifyErrorMessage(message);
});
