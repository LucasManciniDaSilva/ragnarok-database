Feature: Ragnarok Database Search Tests


  Scenario Outline: <TestId> Search monsters by name
    Given I am on the Ragnarok Database page
    When Click on "Monstros" and check if the title of the page is "Monstros"
    And Search monster by name <Monsters>
    Then I should see the monster <Monsters>


    Examples:
      | Monsters         | TestId |
      | Bongun           | CT_001 |
      | Shinobi          | CT_002 |
      | Alma Amaldiçoada | CT_003 |


  Scenario: Search a monster by name, but with the incorretly type
    Given I am on the Ragnarok Database page
    When Click on "Monstros" and check if the title of the page is "Monstros"
    And I Click on advanced search and click on "Dragão" type
    And Search monster by name Aliot
    Then I verify if returned the message "Opa, não encontramos um resultado para a sua pesquisa! :("

  Scenario: Search a monster by name and the size of the monster
    Given I am on the Ragnarok Database page
    When Click on "Monstros" and check if the title of the page is "Monstros"
    And I Click on advanced search and click on "Dragão" type
    And I choose the size option "Grande"
    And Search monster by name Acidus
    Then I should see the monster Acidus

  Scenario: Search a monster by name and the type of the monster
    Given I am on the Ragnarok Database page
    When Click on "Monstros" and check if the title of the page is "Monstros"
    And I Click on advanced search and click on "Dragão" type
    And I choose the type option "Normal"
    And Search monster by name Acidus
    Then I should see the monster Acidus