Feature: Ragnarok Database tests


  Scenario: Check the lenght of monsters in the database
    Given I am on the Ragnarok Database page
    When Check if the title of the page is "Database Oficial"
    And Click on "Monstros" and check if the title of the page is "Monstros"
    Then Check the lenght of the list of monsters is 12