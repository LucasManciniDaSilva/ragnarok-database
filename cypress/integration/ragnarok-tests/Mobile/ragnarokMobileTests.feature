Feature: Ragnarok Database Tests for Mobile


  Scenario Outline: <TestId> Search weapon by name and using different mobiles types
    Given I am on the Ragnarok Database page on <Mobile>
    When Click on "Armamentos" and check if the title of the page is "Armamentos"
    And Search weapon by name <Weapon>
    Then I should see the weapon <Weapon>


    Examples:
      | Weapon               | TestId | Mobile      |
      | Destruidor de Espada | CT_001 | iphone-x    |
      | Kataná               | CT_002 | ipad-mini   |
      | Katar de Agente      | CT_003 | samsung-s10 |


  Scenario: Search a weapon by name, but with the incorretly type and using a samsung-s10 mobile
    Given I am on the Ragnarok Database page using a "samsung-s10"
    When Click on "Armamentos" and check if the title of the page is "Armamentos"
    And I Click on advanced search and click on "Livro" type
    And Search weapon by name Espada
    Then I verify if returned the message "Opa, não encontramos um resultado para a sua pesquisa! :("