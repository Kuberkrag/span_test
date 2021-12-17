Feature: Test_Suit to Span Soccer from the Website
 As an unauthorized user when I try to navigate to the results,
 I am redirected to the Test_Suit page
 As an authorized user when I try to navigate to the results,
 I am presented with an order list of teams.  
 Teams that are tied will have the same position number


Scenario: Trying to navigate to the results as an unauthorized user
    Given I open chrome
    Then I navigate to the company website
    Then I should see Landing_Page.Our_Services with text Landing_Page.Our_Services_Text
    Then I click Test_Suit.Sign_In_Menu button
    Then I wait for Test_Suit.Login_Page to show
    Then I click Test_Suit.Username button
    Then I enter Test_Suit.Unauthorized_Username_Text into Test_Suit.Username
    Then I click Test_Suit.Password button
    Then I enter Test_Suit.Unauthorized_Password_Text into Test_Suit.Password
    Then I click Test_Suit.Sign_In button
    Then I should see Test_Suit.Login_Message with text Test_Suit.Login_Message_Text
    Then I click Test_Suit.Soccer_Menu button
    Then I click Test_Suit.Results_Menu button
    Then I wait for Test_Suit.Login_Page to show

Scenario: Trying to navigate to the results as an authorized user
    Given I open chrome
    Then I navigate to the company website
    Then I should see Landing_Page.Our_Services with text Landing_Page.Our_Services_Text
    Then I click Test_Suit.Sign_In_Menu button
    Then I wait for Test_Suit.Login_Page to show
    Then I click Test_Suit.Username button
    Then I enter Test_Suit.Username_Text into Test_Suit.Username
    Then I click Test_Suit.Password button
    Then I enter Test_Suit.Password_Text into Test_Suit.Password
    Then I click Test_Suit.Sign_In button
    Then I should see Landing_Page.Our_Services with text Landing_Page.Our_Services_Text
    Then I wait for Test_Suit.Soccer_Menu to show
    Then I click Test_Suit.Soccer_Menu button
    #Then I wait for Test_Suit.Results_Menu to show
    Then I click Test_Suit.Results_Menu button
    Then I check scores and positions on table

Scenario: As a developer I want to access the API and check the links 
    Given I open chrome
    Then I navigate to the company website
    Then I should see Landing_Page.Our_Services with text Landing_Page.Our_Services_Text
    Then I click Test_Suit.Sign_In_Menu button
    Then I wait for Test_Suit.Login_Page to show
    Then I click Test_Suit.Username button
    Then I enter Test_Suit.Username_Text into Test_Suit.Username
    Then I click Test_Suit.Password button
    Then I enter Test_Suit.Password_Text into Test_Suit.Password
    Then I click Test_Suit.Sign_In button
    Then I should see Landing_Page.Our_Services with text Landing_Page.Our_Services_Text
    Then As a developer I navigate to API
    Then I should see Landing_Page.API_Page with text Landing_Page.API_Page_Text
    Then I check if Test_Suit.API_Results_URL to contain Test_Suit.API_Results_URL_Link
    Then I check if Test_Suit.API_Users_URL to contain Test_Suit.API_Users_URL_Link
    Then I check if Test_Suit.API_Games_URL to contain Test_Suit.API_Games_URL_Link

Scenario: As a developer I want to access the API results list
    Given I open chrome
    Then I navigate to the company website
    Then I should see Landing_Page.Our_Services with text Landing_Page.Our_Services_Text
    Then I click Test_Suit.Sign_In_Menu button
    Then I wait for Test_Suit.Login_Page to show
    Then I click Test_Suit.Username button
    Then I enter Test_Suit.Username_Text into Test_Suit.Username
    Then I click Test_Suit.Password button
    Then I enter Test_Suit.Password_Text into Test_Suit.Password
    Then I click Test_Suit.Sign_In button
    Then I should see Landing_Page.Our_Services with text Landing_Page.Our_Services_Text
    Then As a developer I navigate to the API results list
    Then I should see Landing_Page.API_Results with text Landing_Page.API_Results_Text   

Scenario: As a developer I want to access the API games list
    Given I open chrome
    Then I navigate to the company website
    Then I should see Landing_Page.Our_Services with text Landing_Page.Our_Services_Text
    Then I click Test_Suit.Sign_In_Menu button
    Then I wait for Test_Suit.Login_Page to show
    Then I click Test_Suit.Username button
    Then I enter Test_Suit.Username_Text into Test_Suit.Username
    Then I click Test_Suit.Password button
    Then I enter Test_Suit.Password_Text into Test_Suit.Password
    Then I click Test_Suit.Sign_In button
    Then I should see Landing_Page.Our_Services with text Landing_Page.Our_Services_Text
    Then As a developer I navigate to the API games list
    Then I should see Landing_Page.API_Games with text Landing_Page.API_Games_Text