Feature: As a user I navigate to the website
    I am presented with the landing page
    I am presented with a summary of what the website offers

Scenario: Navigate to the company website
    Given I open chrome
    Then I navigate to the company website
    Then I should see Landing_Page.Our_Services with text Landing_Page.Our_Services_Text
    Then I should see Landing_Page.Strategy_Innovation with text Landing_Page.Strategy_Innovation_Text
    Then I should see Landing_Page.Design_Development with text Landing_Page.Design_Development_Text
    Then I should see Landing_Page.Evolution_Adoption with text Landing_Page.Evolution_Adoption_Text
