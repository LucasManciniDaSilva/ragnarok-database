import MonsterPage from "../../../../page-objects/pages/monsterPage";

And(/^Search monster by name (.*)$/, (monster) => {
  MonsterPage.searchMonsterName(monster);
});

Then(/^I should see the monster (.*)$/, (monster) => {
  MonsterPage.checkMonsterName(monster);
});

And(/^I Click on advanced search and click on "([^"]*)" type$/, (type) => {
  MonsterPage.chooseCategoryType(type);
});

Then(/^I verify if returned the message "([^"]*)"$/, (message) => {
  MonsterPage.verifyErrorMessage(message);
});

And(/^I choose the size option "([^"]*)"$/, (size) => {
  MonsterPage.chooseSize(size);
});

And(/^I choose the type option "([^"]*)"$/, (type) => {
  MonsterPage.chooseType(type);
});

Then(
  /^Search monster in the page "([^"]*)" and scrolling into view$/,
  (monster) => {
    MonsterPage.checkIfMonsterNameInResponseList(monster);
  }
);
