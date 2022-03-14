Feature: Ragnarok Database tests


  Scenario: Check the lenght of monsters in the database
    Given I am on the Ragnarok Database page
    When Click on "Monstros" and check if the title of the page is "Monstros"
    Then Check the lenght of the list of monsters is 12

  Scenario: Check the weapon adaga price
    Given I am on the Ragnarok Database page
    When Click on "Armamentos" and check if the title of the page is "Armamentos"
    And Click on "Adaga" weapon
    Then Check if the weapon price is "14.000 zeny"